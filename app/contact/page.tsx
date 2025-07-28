import PageTitle from "@/components/layout/page-title";
import Link from "@/components/link";
import ContactForm from "@/components/contact-form";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Me",
  description: "Fill out this quick form and I'll get back to you as soon as I can.",
  canonical: "/contact",
});

const Page = () => {
  return (
    <div className="w-full md:mx-auto md:w-2/3">
      <PageTitle canonical="/contact">Contact</PageTitle>

      <p>
        Fill out this quick form and I&rsquo;ll get back to you as soon as I can! You can also{" "}
        <Link href="mailto:corentindevjs@gmail.com">email me directly</Link>.
      </p>
      <p className="my-5 text-[0.925rem] leading-relaxed md:text-base">
        Fill out this quick form and I&rsquo;ll get back to you as soon as I can! You can also{" "}
        <Link href="mailto:corentindevjs@gmail.com">email me directly</Link>.
      </p>
      <p className="my-5 text-[0.925rem] leading-relaxed md:text-base">
        You can grab my public key here:{" "}
        <Link
          href=""
          title="2AB5 62FA CED0 D4F2 4D07 310F D90E C481 4942 ED2E"
          className="bg-muted relative rounded-sm px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium tracking-wider [word-spacing:-0.25em]"
        >
          D90E C481 4942 ED2E
        </Link>
        .
      </p>

      <ContactForm />
    </div>
  );
};

export default Page;
