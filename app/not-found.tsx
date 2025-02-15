import Link from "../_common/components/Link";
import Video from "../_common/components/Video";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const FourOhFour = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Video
        src={{
          webm: "/static/images/angry-panda.webm",
          mp4: "/static/images/angry-panda.mp4",
        }}
        autoplay
        responsive={false}
        style={{
          maxWidth: "400px",
        }}
      />

      <h1>404: Page Not Found 😢</h1>

      <Link href="/">Go home?</Link>
    </div>
  );
};

export default FourOhFour;
