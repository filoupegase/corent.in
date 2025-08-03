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
        <Link href="https://nextjs.org/" className="[--primary:#5e7693] dark:[--primary:#a8b9c0]">
          Next.js
        </Link>{" "}
        to make lightweight{" "}
        <Link href="https://jamstack.org/glossary/jamstack/" className="[--primary:#04a699] dark:[--primary:#08bbac]">
          Jamstack sites
        </Link>{" "}
        with dynamic and powerful{" "}
        <Link href="https://nodejs.org/en/" className="[--primary:#6fbc4e] dark:[--primary:#84d95f]">
          Node
        </Link>{" "}
        backends. But I still know my way around{" "}
        <Link
          href="https://www.jetbrains.com/lp/php-25/"
          title="25 Years of PHP History"
          className="[--primary:#8892bf] dark:[--primary:#a4afe3]"
        >
          less buzzwordy
        </Link>{" "}
        stacks (and{" "}
        <Link
          href="https://timkadlec.com/remembers/2020-04-21-the-cost-of-javascript-frameworks/"
          title='"The Cost of Javascript Frameworks" by Tim Kadlec'
          className="[--primary:#f48024] dark:[--primary:#e18431]"
        >
          vanilla JavaScript
        </Link>
        ), too.
      </p>

      <p className="my-3 text-base leading-relaxed md:text-[0.975rem]">
        Whenever possible, I also apply my experience in{" "}
        <Link
          href="https://bugcrowd.com/filoupegase"
          title="me on Bugcrowd"
          className="[--primary:#00b81a] dark:[--primary:#57f06d]"
        >
          information security
        </Link>
        ,{" "}
        <Link
          href="https://www.cloudflare.com/learning/serverless/what-is-serverless/"
          title='"What is serverless computing?" on Cloudflare'
          className="[--primary:#0098ec] dark:[--primary:#43b9fb]"
        >
          serverless architecture
        </Link>
        , and{" "}
        <Link
          href="https://github.com/jakejarvis?tab=repositories&q=github-actions&type=&language=&sort=stargazers"
          title='My repositories tagged with "github-actions" on GitHub'
          className="[--primary:#ff6200] dark:[--primary:#f46c16]"
        >
          automation
        </Link>
        .
      </p>

      <p className="my-3 text-base leading-relaxed md:text-[0.975rem]">
        I fell in love with{" "}
        <Link
          href="/"
          title="My Terrible, Horrible, No Good, Very Bad First Websites"
          className="[--primary:#4169e1] dark:[--primary:#8ca9ff]"
        >
          frontend web design
        </Link>{" "}
        and{" "}
        <Link href="/" title="" className="[--primary:#9932cc] dark:[--primary:#d588fb]">
          backend coding
        </Link>{" "}
        when my only source of income was{" "}
        <Link
          href="/"
          title="🎉 Cranky Birthday Boy on VHS Tape 📼"
          className="[--primary:#e40088] dark:[--primary:#fd40b1]"
          style={{
            cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='30' style='font-size:24px'><text y='50%' transform='rotate(-70 0 0) translate(-20, 6)'>🪄</text></svg>") 5 5, auto`,
          }}
        >
          the Tooth Fairy
        </Link>
        . <span className="text-muted-foreground">I&rsquo;ve improved a bit since then, I think?</span>
      </p>

      <p className="mt-3 mb-0 text-base leading-relaxed md:text-[0.975rem]">
        You can find my work on{" "}
        <Link href="https://github.com/filoupegase" rel="me" className="[--primary:#8d4eff] dark:[--primary:#a379f0]">
          GitHub
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.linkedin.com/in/corentin-loisy-tison-1a7363193/"
          rel="me"
          className="[--primary:#0073b1] dark:[--primary:#3b9dd2]"
        >
          LinkedIn
        </Link>
        . I&rsquo;m always available to connect over{" "}
        <Link href="/contact" title="Send an email" className="[--primary:#de0c0c] dark:[--primary:#ff5050]">
          email
        </Link>
        , or{" "}
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
