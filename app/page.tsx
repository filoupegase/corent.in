import Link from "@/components/link";
import { LockIcon } from "lucide-react";

const Page = () => {
  return (
    <>
      <h1 className="mt-0 mb-2 text-3xl leading-relaxed font-medium">
        Hi there! I&rsquo;m Corentin.{" "}
        <span className="motion-safe:animate-wave ml-0.5 inline-block origin-[65%_80%] text-3xl">👋</span>
      </h1>

      <h2 className="my-2 text-xl leading-relaxed font-normal">
        I&rsquo;m a frontend web developer based in{" "}
        <Link
          href="https://youtu.be/6J6eppvIIgI?t=1"
          title="Les Danceuses Du Moulin Rouge - French Cancan on YouTube"
          className="[--primary:#fb4d42] dark:[--primary:#ff5146]"
        >
          Paris
        </Link>
        .
      </h2>

      <p className="my-3 text-base leading-relaxed md:text-[0.975rem]">
        I specialize in using{" "}
        <Link href="https://www.typescriptlang.org/" className="[--primary:#235a97] dark:[--primary:#59a8ff]">
          TypeScript
        </Link>
        ,{" "}
        <Link href="https://reactjs.org/" className="[--primary:#1091b3] dark:[--primary:#6fcbe3]">
          React
        </Link>
        , and{" "}
        <Link
          href="https://timkadlec.com/remembers/2020-04-21-the-cost-of-javascript-frameworks/"
          title='"The Cost of Javascript Frameworks" by Tim Kadlec'
          lightColor="#f48024"
          darkColor="#e18431"
        >
          vanilla JavaScript
        </Link>{" "}
        to make nifty{" "}
        <Link
          href="https://mui.com/"
          title="Move faster with intuitive React UI tools"
          lightColor="#007FFF"
          darkColor="#0059B2"
        >
          Mui
        </Link>{" "}
        &{" "}
        <Link href="https://jamstack.wtf/" title="WTF is Jamstack?" lightColor="#04a699" darkColor="#08bbac">
          Jamstack sites
        </Link>{" "}
        with dynamic{" "}
        <Link href="https://nodejs.org/en/" title="Node.js Official Website" lightColor="#6fbc4e" darkColor="#84d95f">
          Node.js
        </Link>{" "}
        services. But I still know my way around less buzzwordy stacks like{" "}
        <Link
          href="https://www.jetbrains.com/lp/php-25/"
          title="25 Years of PHP History"
          lightColor="#8892bf"
          darkColor="#a4afe3"
        >
          LAMP
        </Link>
        , too.
      </p>

      <p>
        Whenever possible, I also apply my experience in{" "}
        <Link href="https://www.bugcrowd.com/" title="Bugcrowd" lightColor="#00b81a" darkColor="#57f06d">
          application security
        </Link>
        ,{" "}
        <Link
          href="https://www.cloudflare.com/learning/serverless/what-is-serverless/"
          title='"What is serverless computing?" on Cloudflare'
          lightColor="#0098ec"
          darkColor="#43b9fb"
        >
          serverless stacks
        </Link>{" "}
        , and{" "}
        <Link href="/" title="" lightColor="#ff6200" darkColor="#f46c16">
          DevOps automation
        </Link>
        .
      </p>

      <p>
        I fell in love with{" "}
        <Link
          href="/"
          title="My Terrible, Horrible, No Good, Very Bad First Websites"
          lightColor="#4169e1"
          darkColor="#8ca9ff"
        >
          frontend web design
        </Link>{" "}
        and{" "}
        <Link
          href={"/notes/my-first-code" as Route}
          title="Jake's Bulletin Board, circa 2003"
          lightColor="#9932cc"
          darkColor="#d588fb"
        >
          backend programming
        </Link>{" "}
        when my only source of income was{" "}
        <Link
          href="/"
          title="🎉 Cranky Birthday Boy"
          lightColor="#e40088"
          darkColor="#fd40b1"
          style={{
            cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='30' style='font-size:24px'><text y='50%' transform='rotate(-70 0 0) translate(-20, 6)'>🪄</text></svg>") 5 5, auto`,
          }}
        >
          the Tooth Fairy
        </Link>
        . <span style={{ color: "var(--colors-mediumLight)" }}>I've improved a bit since then, I think? 🤷</span>
      </p>

      <p>
        You can find my work on{" "}
        <Link
          href="https://github.com/filoupegase"
          rel="me"
          title="Filoupegase on GitHub"
          lightColor="#8d4eff"
          darkColor="#a379f0"
        >
          GitHub
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.linkedin.com/in/corentin-de-loisy-tison-1a7363193"
          rel="me"
          title="Corentin on LinkedIn"
          lightColor="#0073b1"
          darkColor="#3b9dd2"
        >
          LinkedIn
        </Link>
        . I&rsquo;m always available to connect over{" "}
        <Link href="/contact" title="Send an email" className="[--primary:#de0c0c] dark:[--primary:#ff5050]">
          email
        </Link>{" "}
        <sup className="mr-0.5 text-[0.6rem]">
          <Link
            href="#"
            rel="pgpkey"
            title="6666 6666 6666 6666 6666 6666 6666 6666 6666 6666"
            className="space-x-0.5 px-0.5 text-nowrap [--primary:var(--muted-foreground)] hover:no-underline"
          >
            <LockIcon className="inline size-3 align-text-top" />{" "}
            <code className="tracking-wider text-wrap [word-spacing:-3px]">2AB5 62FA CED0 D4F2</code>
          </Link>
        </sup>
        .{" "}
      </p>
    </>
  );
};

export default Page;
