import { useId } from "react";
import { GoLock } from "react-icons/go";
import { rgba } from "polished";
import Link from "../_common/components/Link";
import type { ComponentPropsWithoutRef } from "react";
import type { Route } from "next";

import styles from "./page.module.css";

const ColorfulLink = ({
  lightColor,
  darkColor,
  children,
  ...rest
}: ComponentPropsWithoutRef<typeof Link> & {
  lightColor: string;
  darkColor: string;
}) => {
  const uniqueId = `Link_themed__${useId().replace(/\W/g, "")}`;

  return (
    <>
      <Link id={uniqueId} {...rest}>
        {children}
      </Link>

      <style>{`.${styles.page} #${uniqueId}{color:${lightColor};--colors-linkUnderline:${rgba(lightColor, 0.4)}}[data-theme="dark"] .${styles.page} #${uniqueId}{color:${darkColor};--colors-linkUnderline:${rgba(darkColor, 0.4)}}`}</style>
    </>
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
        <ColorfulLink
          href="https://youtu.be/6J6eppvIIgI?t=1"
          title="Les Danceuses Du Moulin Rouge - French Cancan on YouTube"
          lightColor="#fb4d42"
          darkColor="#ff5146"
        >
          Paris
        </ColorfulLink>
        {""}.
      </h2>

      <p>
        I specialize in{" "}
        <ColorfulLink href="https://react.dev/" title="React Official Website" lightColor="#087ea4" darkColor="#6fcbe3">
          React
        </ColorfulLink>{" "}
        and{" "}
        <ColorfulLink
          href="https://timkadlec.com/remembers/2020-04-21-the-cost-of-javascript-frameworks/"
          title='"The Cost of Javascript Frameworks" by Tim Kadlec'
          lightColor="#f48024"
          darkColor="#e18431"
        >
          vanilla JavaScript
        </ColorfulLink>{" "}
        to make nifty{" "}
        <ColorfulLink
          href="https://mui.com/"
          title="Move faster with intuitive React UI tools"
          lightColor="#007FFF"
          darkColor="#0059B2"
        >
          Mui
        </ColorfulLink>{" "}
        &{" "}
        <ColorfulLink href="https://jamstack.wtf/" title="WTF is Jamstack?" lightColor="#04a699" darkColor="#08bbac">
          Jamstack sites
        </ColorfulLink>{" "}
        with dynamic{" "}
        <ColorfulLink
          href="https://nodejs.org/en/"
          title="Node.js Official Website"
          lightColor="#6fbc4e"
          darkColor="#84d95f"
        >
          Node.js
        </ColorfulLink>{" "}
        services. But I still know my way around less buzzwordy stacks like{" "}
        <ColorfulLink
          href="https://www.jetbrains.com/lp/php-25/"
          title="25 Years of PHP History"
          lightColor="#8892bf"
          darkColor="#a4afe3"
        >
          LAMP
        </ColorfulLink>
        , too.
      </p>

      <p>
        Whenever possible, I also apply my experience in{" "}
        <ColorfulLink href="https://www.bugcrowd.com/" title="Bugcrowd" lightColor="#00b81a" darkColor="#57f06d">
          application security
        </ColorfulLink>
        ,{" "}
        <ColorfulLink
          href="https://www.cloudflare.com/learning/serverless/what-is-serverless/"
          title='"What is serverless computing?" on Cloudflare'
          lightColor="#0098ec"
          darkColor="#43b9fb"
        >
          serverless stacks
        </ColorfulLink>{" "}
        &{" "}
        <ColorfulLink
          href="https://xkcd.com/1319/"
          title='"Automation" on xkcd'
          lightColor="#ff6200"
          darkColor="#f46c16"
        >
          DevOps automation
        </ColorfulLink>
        .
      </p>

      <p>
        I fell in love with{" "}
        <ColorfulLink
          href="/"
          title="My Terrible, Horrible, No Good, Very Bad First Websites"
          lightColor="#4169e1"
          darkColor="#8ca9ff"
        >
          frontend web design
        </ColorfulLink>{" "}
        and{" "}
        <ColorfulLink
          href={"/notes/my-first-code" as Route}
          title="Jake's Bulletin Board, circa 2003"
          lightColor="#9932cc"
          darkColor="#d588fb"
        >
          backend programming
        </ColorfulLink>{" "}
        when my only source of income was{" "}
        <ColorfulLink
          href="/"
          title="🎉 Cranky Birthday Boy"
          lightColor="#e40088"
          darkColor="#fd40b1"
          style={{
            cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='30' style='font-size:24px'><text y='50%' transform='rotate(-70 0 0) translate(-20, 6)'>🪄</text></svg>") 5 5, auto`,
          }}
        >
          the Tooth Fairy
        </ColorfulLink>
        . <span style={{ color: "var(--colors-mediumLight)" }}>I've improved a bit since then, I think? 🤷</span>
      </p>

      <p>
        You can find my work on{" "}
        <ColorfulLink
          href="https://github.com/filoupegase"
          rel="me"
          title="Corentin on GitHub"
          lightColor="#8d4eff"
          darkColor="#a379f0"
        >
          GitHub
        </ColorfulLink>{" "}
        and{" "}
        <ColorfulLink
          href="https://www.linkedin.com/in/corentin-de-loisy-tison-1a7363193"
          rel="me"
          title="Corentin on LinkedIn"
          lightColor="#0073b1"
          darkColor="#3b9dd2"
        >
          LinkedIn
        </ColorfulLink>
        . I'm always available to connect over{" "}
        <ColorfulLink href="/contact" title="Send an email" lightColor="#de0c0c" darkColor="#ff5050">
          email
        </ColorfulLink>
        , or{" "}
        <sup>
          <ColorfulLink
            href={"/pubkey.asc" as Route}
            rel="pgpkey authn"
            title="My Public Key"
            lightColor="#757575"
            darkColor="#959595"
            underline={false}
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
          </ColorfulLink>
        </sup>
        .{" "}
      </p>
    </div>
  );
}
