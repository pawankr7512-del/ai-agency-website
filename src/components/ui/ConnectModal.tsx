"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useConnectModal } from "@/context/ConnectModalContext";
import { site } from "@/lib/site";

export function ConnectModal() {
  const { isOpen, close } = useConnectModal();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setSubmitted(false);
    close();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) handleClose();
      }}
      className="connect-dialog fixed inset-0 z-[100] m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      aria-labelledby="connect-title"
    >
      <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-6">
        <div
          role="document"
          className="animate-modal-in w-full max-w-lg rounded-3xl border border-secondary/30 bg-black p-6 shadow-[0_0_60px_rgba(137,97,183,0.2)] sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Connect with us
              </p>
              <h2
                id="connect-title"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-white"
              >
                Start your AI project
              </h2>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close dialog"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {submitted ? (
            <div className="py-8 text-center">
              <p className="font-display text-xl font-medium text-white">
                Thank you — we&apos;ll be in touch soon.
              </p>
              <p className="mt-2 text-sm text-white/50">
                Or email us directly at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-white underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-8 rounded-full border border-white/20 px-6 py-2.5 text-sm text-white transition-colors hover:bg-white/10"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs text-white/50">Name</span>
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none"
                    placeholder="Jane Doe"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-white/50">Company</span>
                  <input
                    required
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none"
                    placeholder="Acme Inc."
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-xs text-white/50">Email</span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none"
                  placeholder="jane@company.com"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs text-white/50">
                  What are you looking to build?
                </span>
                <select
                  name="service"
                  required
                  className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-white/30 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="website">AI Website</option>
                  <option value="agent">AI Agent</option>
                  <option value="chatbot">AI Chatbot</option>
                  <option value="integration">Custom Integration</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs text-white/50">Message</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none"
                  placeholder="Tell us about your goals and timeline..."
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-secondary py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#9d74c9]"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}
