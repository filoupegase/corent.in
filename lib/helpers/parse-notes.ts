import fs from "fs/promises";
import path from "path";
import glob from "fast-glob";
import pMap from "p-map";
import pMemoize from "p-memoize";
import matter from "gray-matter";
import { formatDate } from "./format-date";

import type { NoteFrontMatter } from "../../types";

export const getNoteSlugs = async (): Promise<string[]> => {
  // list all .mdx files in "/notes"
  const mdxFiles = await glob("*.mdx", {
    cwd: path.join(process.cwd(), "notes"),
    dot: false,
  });

  // strip the .mdx extensions from filenames
  const slugs = mdxFiles.map((fileName) => fileName.replace(/\.mdx$/, ""));

  return slugs;
};

// returns front matter and/or *raw* markdown contents of a given slug
export const getNoteData = async (
  slug: string
): Promise<{
  frontMatter: NoteFrontMatter;
  content: string;
}> => {
  const fullPath = path.join(process.cwd(), "notes", `${slug}.mdx`);
  const rawContent = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(rawContent);

  const { unified } = await import("unified");
  const { remarkParse, remarkSmartypants, remarkRehype, rehypeSanitize, rehypeStringify } = await import(
    "./remark-rehype-plugins"
  );

  // allow *very* limited markdown to be used in post titles
  const parseTitle = async (title: string, allowedTags: string[] = []): Promise<string> => {
    return String(
      await unified()
        .use(remarkParse)
        .use(remarkSmartypants, {
          quotes: true,
          dashes: "oldschool",
          backticks: false,
          ellipses: false,
        })
        .use(remarkRehype)
        .use(rehypeSanitize, { tagNames: allowedTags })
        .use(rehypeStringify)
        .process(title)
    );
  };

  // process title as both plain and stylized
  const [title, htmlTitle] = await Promise.all([
    parseTitle(data.title),
    parseTitle(data.title, ["code", "em", "strong"]),
  ]);

  // return both the parsed YAML front matter (with a few amendments) and the raw, unparsed markdown content
  return {
    frontMatter: {
      ...(data as Partial<NoteFrontMatter>),
      // zero markdown title:
      title,
      htmlTitle,
      slug,
      permalink: `${process.env.BASE_URL}/notes/${slug}/`,
      date: formatDate(data.date), // validate/normalize the date string provided from front matter
    },
    content,
  };
};

// returns the parsed front matter of ALL notes, sorted reverse chronologically
export const getAllNotes = pMemoize(async (): Promise<NoteFrontMatter[]> => {
  const slugs = await getNoteSlugs();

  // for each slug, query its front matter
  const data = await pMap(slugs, async (slug) => (await getNoteData(slug)).frontMatter);

  // sort the results by date
  data.sort((note1, note2) => (note1.date > note2.date ? -1 : 1));

  return data;
});
