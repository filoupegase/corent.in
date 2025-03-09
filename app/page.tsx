import hash from "@emotion/hash";
import { rgba } from "polished";
import { GoLock } from "react-icons/go";
import UnstyledLink from "../_common/components/Link";
import type { ComponentPropsWithoutRef } from "react";
import type { Route } from "next";

import styles from "./page.module.css";

const Link = ({
  lightColor,
  darkColor,
  children,
  ...rest
}: ComponentPropsWithoutRef<typeof UnstyledLink> & {
  lightColor: string;
  darkColor: string;
}) => {
  const uniqueId = hash(`${lightColor},${darkColor}`);

  return (
    <UnstyledLink className={`t_${uniqueId}`} {...rest}>
      {children}

      <style
        // workaround to have react combine all of these inline styles into a single <style> tag up top, see:
        // https://react.dev/reference/react-dom/components/style#rendering-an-inline-css-stylesheet
        href={uniqueId}
        precedence={styles.page}
      >
        {`.t_${uniqueId}{--colors-link:${lightColor};--colors-linkUnderline:${rgba(lightColor, 0.4)}}[data-theme="dark"] .t_${uniqueId}{--colors-link:${darkColor};--colors-linkUnderline:${rgba(darkColor, 0.4)}}`}
      </style>
    </UnstyledLink>
  );
};

export default function Page() {
  return (
    <div className={styles.page}>
      <h1>
        Hi there! I'm Corentin. <span className={styles.wave}>👋</span>
      </h1>

      <h2>
        I'm a frontend web developer based in{" "}
        <Link
          href="https://youtu.be/6J6eppvIIgI?t=1"
          title="Les Danceuses Du Moulin Rouge - French Cancan on YouTube"
          lightColor="#fb4d42"
          darkColor="#ff5146"
        >
          Paris
        </Link>
        {""}.
      </h2>

      <p>
        I specialize in{" "}
        <Link href="https://react.org/" title="React Official Website" lightColor="#087ea4" darkColor="#6fcbe3">
          React
        </Link>{" "}
        and{" "}
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
        . I'm always available to connect over{" "}
        <Link href="/contact" title="Send an email" lightColor="#de0c0c" darkColor="#ff5050">
          email
        </Link>
        , or{" "}
        <sup>
          <Link
            href={"/pubkey.asc" as Route}
            rel="pgpkey authn"
            title="My Public Key"
            lightColor="#757575"
            darkColor="#959595"
            plain
            openInNewTab
          >
            <GoLock
              size="1.25em"
              style={{
                verticalAlign: "-0.25em",
                strokeWidth: 0.5,
              }}
            />{" "}
            <span
              style={{
                margin: "0 0.15em",
                fontFamily: "var(--fonts-mono)",
                letterSpacing: "0.075em",
                wordSpacing: "-0.4em",
              }}
            >
              2AB5 62FA CED0 D4F2
            </span>
          </Link>
        </sup>
        .{" "}
      </p>
    </div>
  );
}
