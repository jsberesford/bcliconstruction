"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contact } from "@/content/copy";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitted";

const fieldBase =
  "w-full rounded-md border border-rule bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-gray/50 focus:outline-none focus:ring-2 focus:ring-ink/20 focus:border-ink/40 transition-colors";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [fields, setFields] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitted");
  }

  function handleReset() {
    setFields({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
    setState("idle");
  }

  return (
    <section className="bg-beige py-section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {state === "idle" ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">{contact.form.nameLabel}</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={fields.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className={fieldBase}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">
                      {contact.form.companyLabel}{" "}
                      <span className="text-gray text-xs font-normal">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={fields.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      className={fieldBase}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">{contact.form.emailLabel}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={fields.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={fieldBase}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {contact.form.phoneLabel}{" "}
                      <span className="text-gray text-xs font-normal">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={fields.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      className={fieldBase}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">
                    {contact.form.projectTypeLabel}
                  </Label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={fields.projectType}
                    onChange={handleChange}
                    className={cn(
                      fieldBase,
                      "cursor-pointer appearance-none bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237A7A7A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")] bg-no-repeat bg-[right_0.75rem_center]"
                    )}
                  >
                    <option value="" disabled>
                      Select a type
                    </option>
                    {contact.form.projectTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{contact.form.messageLabel}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={fields.message}
                    onChange={handleChange}
                    rows={5}
                    className={cn(fieldBase, "resize-y")}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink ring-1 ring-inset ring-ink/10 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2"
                  >
                    {contact.form.submitLabel}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="thankyou"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
                className="py-16 text-center"
              >
                <h3 className="font-display text-display-sm text-ink">
                  {contact.form.thankYou.headline}
                </h3>
                <p className="mt-4 max-w-prose mx-auto text-base leading-relaxed text-gray">
                  {contact.form.thankYou.body}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-8 text-sm font-medium text-ink underline underline-offset-4 hover:text-gray transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 rounded"
                >
                  {contact.form.thankYou.resetLabel}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
