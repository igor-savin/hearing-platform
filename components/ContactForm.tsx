"use client";

import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { db, firebaseEnabled, storage } from "@/lib/firebase";

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
    const file = data.get("attachment");
    let attachmentPath = "";

    try {
      if (!firebaseEnabled || !db) {
        throw new Error("Firebase is not configured in this environment.");
      }

      if (file instanceof File && file.size > 0 && storage) {
        const safeName = file.name.replace(/[^a-z0-9.\-_]+/gi, "-").toLowerCase();
        attachmentPath = `contact-attachments/${Date.now()}-${safeName}`;
        await uploadBytes(ref(storage, attachmentPath), file);
      }

      await addDoc(collection(db, "contactSubmissions"), {
        context,
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        preferredLocation: String(data.get("preferredLocation") || ""),
        message: String(data.get("message") || ""),
        attachmentPath,
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
    <form className="grid gap-4 rounded-lg border border-[var(--line)] bg-white p-5 medical-shadow" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 font-bold text-[var(--brand-dark)]">
          Name
          <input
            className="focus-ring rounded-md border border-[var(--line)] px-3 py-3 font-normal text-[var(--foreground)]"
            name="name"
            required
            type="text"
          />
        </label>
        <label className="grid gap-2 font-bold text-[var(--brand-dark)]">
          Phone
          <input
            className="focus-ring rounded-md border border-[var(--line)] px-3 py-3 font-normal text-[var(--foreground)]"
            name="phone"
            required
            type="tel"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 font-bold text-[var(--brand-dark)]">
          Email
          <input
            className="focus-ring rounded-md border border-[var(--line)] px-3 py-3 font-normal text-[var(--foreground)]"
            name="email"
            type="email"
          />
        </label>
        <label className="grid gap-2 font-bold text-[var(--brand-dark)]">
          Preferred Location
          <select
            className="focus-ring rounded-md border border-[var(--line)] px-3 py-3 font-normal text-[var(--foreground)]"
            name="preferredLocation"
          >
            <option value="">Choose a location</option>
            <option>Harrison</option>
            <option>Somers</option>
            <option>White Plains</option>
            <option>Scarsdale</option>
            <option>Not sure</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 font-bold text-[var(--brand-dark)]">
        How can we help?
        <textarea
          className="focus-ring min-h-32 rounded-md border border-[var(--line)] px-3 py-3 font-normal text-[var(--foreground)]"
          name="message"
          required
        />
      </label>
      <label className="grid gap-2 font-bold text-[var(--brand-dark)]">
        Optional attachment
        <input
          className="focus-ring rounded-md border border-[var(--line)] bg-white px-3 py-3 font-normal text-[var(--foreground)]"
          name="attachment"
          type="file"
        />
      </label>
      <button
        className="focus-ring inline-flex items-center justify-center rounded-md bg-[var(--brand)] px-5 py-3 font-black text-white disabled:cursor-not-allowed disabled:opacity-70"
        data-track="contact-submit"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Sending..." : "Submit This Form"}
      </button>
      {message ? (
        <p className={status === "success" ? "text-[var(--brand-dark)]" : "text-red-700"} role="status">
          {message}
        </p>
      ) : null}
      <p className="text-sm text-[var(--muted)]">
        Do not use this form for emergencies. Appointment availability and clinical recommendations
        should be confirmed directly with the practice.
      </p>
    </form>
  );
}
