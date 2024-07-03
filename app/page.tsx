"use client";
import { title, subtitle } from "@/components/primitives";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { motion } from "framer-motion";
export default function Home() {
  return (<div className="mt-1 h-full">
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-2xl text-center justify-center">
        {/* <h1 className={title({ color: "violet" })}>Innovative&nbsp;</h1>
        <br />
        <h1 className={title()}>software developer with experience in</h1>
        <h1 className={title({ color: "blue" })}> Cybersecurity, </h1>
        <h1 className={title()}>and </h1>
        <h1 className={title({ color: "yellow" })}> Full-Stack </h1>
        <h1 className={title()}>Develpment.</h1> */}

        <TextGenerateEffect
          className={title()}
          words={
            "Innovative software developer with a foundation in Cybersecurity, and Full-Stack Development."
          }
        />
        {/* <h1 className={title({ color: "cyan" })}> frontend, </h1> */}
        {/* <h1 className={title({ color: "yellow" })}> backend development.</h1> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          {/* <h2 className={subtitle({ class: "mt-4" })}>
            Beautiful, efficient and accessible applications.
          </h2> */}
        </motion.div>
      </div>

    </section>

  </div >);
}
