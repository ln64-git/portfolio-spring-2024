import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-2xl text-center justify-center">
        {/* <h1 className={title()}>Make&nbsp;</h1> */}
        <h1 className={title({ color: "violet" })}>Innovative&nbsp;</h1>
        <br />
        <h1 className={title()}>software developer with experience in</h1>
        <h1 className={title({ color: "blue" })}> Cybersecurity, </h1>
        <h1 className={title()}>and </h1>
        <h1 className={title({ color: "yellow" })}> Full-Stack </h1>
        <h1 className={title()}>Develpment.</h1>

        {/* <h1 className={title({ color: "cyan" })}> frontend, </h1> */}
        {/* <h1 className={title({ color: "yellow" })}> backend development.</h1> */}
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, efficient and accessible applications.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.discord}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Chat with me!
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
