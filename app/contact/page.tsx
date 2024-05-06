"use client";
import aboutData from "@/content/about-data";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function ContactPage() {
  const form = useRef<HTMLFormElement | null>(null);
  const { name, position } = aboutData;
  const [emailStatus, setEmailStatus] = useState<"success" | "failure" | null>(
    null
  );

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_ut19eu5",
          "template_k6z538t",
          form.current,
          "k9dk_PHS4Rax1XBz_"
        )
        .then(() => {
          setEmailStatus("success");
        })
        .catch((error: { text: any }) => {
          console.log(error.text);
          setEmailStatus("failure");
        });
    }
  };

  return (
    <div className="mx-auto max-w-[500px] px-4 pb-10  ">
      <div className="mx-auto flex flex-col justify-center align-middle ">
        <div className="flex w-full flex-col items-center justify-center  space-y-2 p-4 align-middle">
          <div className="text-3xl ">{name}</div>
          <div className="text-lg pb-2 ">{position}</div>
        </div>
      </div>
      <form
        ref={form}
        autoComplete="false"
        onSubmit={sendEmail}
        className="flex flex-col px-4 gap-4"
      >
        <Input
          color="primary"
          type="text"
          name="user_name"
          label="Name"
          className=""
        />
        {/* <input type="text" name="user_name" className="" /> */}
        <Input
          color="primary"
          type="email"
          name="user_email"
          label="Email"
          className=""
        />
        {/* <input type="email" name="user_email" className="" /> */}
        <Textarea
          color="primary"
          name="message"
          label="Message"
          placeholder="Enter your Message"
        />

        <Button
          type="submit"
          value="Send"
          className="w-1/3 mx-auto mt-8"
          color="primary"
          variant="light"
        >
          Send
        </Button>
        {/* <input className=" m-10 mx-auto w-2/5 cursor-pointer rounded-md p-4 " /> */}
        {emailStatus === "success" && (
          <p className="text-center text-green-500">Email sent successfully!</p>
        )}
        {emailStatus === "failure" && (
          <p className="text-center text-red-500">
            Failed to send email. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
