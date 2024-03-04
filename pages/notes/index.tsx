import { NextSeo } from "next-seo";
import Content from "../../_common/components/Content";
import PostsList from "../../_common/components/PostsList";
import { getAllPosts } from "../../lib/helpers/posts";
import { authorName } from "../../lib/config";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { PostsByYear } from "../../types";

const Notes = ({ notesByYear }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo
        title="Notes"
        description={`Recent posts by ${authorName}.`}
        openGraph={{
          title: "Notes",
        }}
      />

      <Content>
        <PostsList notesByYear={notesByYear} />
      </Content>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  notesByYear: PostsByYear;
}> = async () => {
  // parse the year of each note and group them together
  const notes = await getAllPosts();
  const notesByYear: PostsByYear = {};

  notes.forEach((note) => {
    const year = new Date(note.date).getUTCFullYear();
    (notesByYear[year] || (notesByYear[year] = [])).push(note);
  });

  return {
    props: {
      notesByYear,
    },
  };
};

export default Notes;
