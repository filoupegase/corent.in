import type { NoteFrontMatter } from "../../../types";

export type NoteMetaProps = Pick<NoteFrontMatter, "slug" | "date" | "title" | "htmlTitle" | "tags">;

const NoteMeta = ({ slug, date, title, htmlTitle, tags }: NoteMetaProps) => {
  return <></>;
};

export default NoteMeta;
