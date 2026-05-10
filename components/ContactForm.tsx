"use client";

import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, firebaseEnabled } from "@/lib/firebase";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({ context = "General contact" }: { context?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      if (!firebaseEnabled || !db) {
        throw new Error("Firebase is not configured in this environment.");
      }

      await addDoc(collection(db, "contactSubmissions"), {
        context,
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        message: String(data.get("message") || ""),
        source: "website",
        createdAt: serverTimestamp()
      });

      form.reset();
      setStatus("success");
      setMessage("Thank you. Your message has been saved and the practice can follow up with you.");
    } catch (error) {
      setStatus("error");
      setMessage(
        "The online form could not save just now. Please call the practice directly to schedule or confirm care."
      );
      console.error(error);
    }
  }

  return (
    <form className="legacy-contact-form grid gap-[13px] bg-white text-left" onSubmit={onSubmit}>
      <div className="grid gap-[13px] md:grid-cols-2">
        <label className="grid gap-[6px] text-[15px] font-bold text-[#333]">
          Name
          <input
            className="focus-ring h-[42px] border border-[#bcbcbc] bg-white px-[10px] text-[16px] font-normal text-[#333]"
            name="name"
            required
            type="text"
          />
        </label>
        <label className="grid gap-[6px] text-[15px] font-bold text-[#333]">
          Phone
          <input
            className="focus-ring h-[42px] border border-[#bcbcbc] bg-white px-[10px] text-[16px] font-normal text-[#333]"
            name="phone"
            required
            type="tel"
          />
        </label>
      </div>
      <label className="grid gap-[6px] text-[15px] font-bold text-[#333]">
          Email
          <input
            className="focus-ring h-[42px] border border-[#bcbcbc] bg-white px-[10px] text-[16px] font-normal text-[#333]"
            name="email"
            type="email"
          />
        </label>
      <label className="grid gap-[6px] text-[15px] font-bold text-[#333]">
        Message
        <textarea
          className="focus-ring min-h-[118px] border border-[#bcbcbc] bg-white px-[10px] py-[9px] text-[16px] font-normal text-[#333]"
          name="message"
          required
        />
      </label>
      <button
        className="focus-ring mt-[4px] inline-flex min-h-[42px] w-fit items-center justify-center bg-[#005a9c] px-[30px] py-[12px] text-[15px] font-bold uppercase tracking-[0.04em] text-white disabled:cursor-not-allowed disabled:opacity-70"
        data-track="contact-submit"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
      {message ? (
        <p className={status === "success" ? "text-[#333]" : "text-red-700"} role="status">
          {message}
        </p>
      ) : null}
      <p className="text-[13px] leading-5 text-[#555]">
        Do not use this form for emergencies. Appointment availability and clinical recommendations
        should be confirmed directly with the practice.
      </p>
    </form>
  );
}
