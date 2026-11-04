"use client";

import { useState } from "react";
import { contactDetails } from "@/data/socials";
import {
  Mail,
  Copy,
  Check,
  Send,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  MessageSquare
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "Internship Opportunity",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please provide your name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please provide a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please write a message with at least 10 characters.";
    }

    return errs;
  };

  const getWhatsAppUrl = () => {
    const text =
      `Hello Athiq,\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Topic:* ${formData.purpose}\n\n` +
      `*Message:*\n${formData.message}`;
    return `${contactDetails.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Direct dispatch to WhatsApp (9043395299)
    const targetUrl = getWhatsAppUrl();
    window.open(targetUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleOpenEmailClient = () => {
    const subject = encodeURIComponent(`[${formData.purpose}] Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Athiq,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-b border-[#303530] relative bg-[#151815]">
      <div className="editorial-container">
        {/* Section Header (Centered) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">HAVE SOMETHING IN MIND?</span>
          <h2 className="section-heading">
            Let&apos;s make something <span className="text-[#325ea8]">useful.</span>
          </h2>
          <p className="section-description mx-auto">
            Have a project idea, an internship opportunity, or an interesting problem to
            solve? I&apos;d be happy to connect and explore what we could build.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Details & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Email Card */}
            <div className="bg-[#202420] border border-[#303530] rounded-xl p-6">
              <span className="font-mono text-xs text-[#A5ACA5] block mb-2">
                DIRECT INQUIRIES
              </span>
              <a
                href={`mailto:${contactDetails.email}`}
                className="font-heading text-lg sm:text-xl font-bold text-[#F4F3ED] hover:text-[#325ea8] transition-colors break-all block mb-4"
              >
                {contactDetails.email}
              </a>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="btn-primary text-xs py-2 px-4"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-secondary text-xs py-2 px-3.5"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#325ea8]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links List */}
            <div className="bg-[#202420] border border-[#303530] rounded-xl p-6">
              <span className="font-mono text-xs text-[#A5ACA5] block mb-4">
                FIND ME ON THE WEB
              </span>
              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#111311] border border-[#303530] hover:border-[#325ea8] flex items-center justify-between text-sm transition-colors group"
                >
                  <div className="flex items-center gap-3 text-[#F4F3ED] group-hover:text-[#325ea8]">
                    <GithubIcon className="w-4 h-4" />
                    <span className="font-heading font-medium">GitHub</span>
                  </div>
                  <span className="font-mono text-xs text-[#6E756E] group-hover:text-[#A5ACA5]">
                    github.com/athiqkhan1221-hub
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#111311] border border-[#303530] hover:border-[#325ea8] flex items-center justify-between text-sm transition-colors group"
                >
                  <div className="flex items-center gap-3 text-[#F4F3ED] group-hover:text-[#325ea8]">
                    <LinkedinIcon className="w-4 h-4" />
                    <span className="font-heading font-medium">LinkedIn</span>
                  </div>
                  <span className="font-mono text-xs text-[#6E756E] group-hover:text-[#A5ACA5]">
                    linkedin.com/in/athiq-khan-2aa177433
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href={contactDetails.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#111311] border border-[#303530] hover:border-[#325ea8] flex items-center justify-between text-sm transition-colors group"
                >
                  <div className="flex items-center gap-3 text-[#F4F3ED] group-hover:text-[#325ea8]">
                    <InstagramIcon className="w-4 h-4" />
                    <span className="font-heading font-medium">Instagram</span>
                  </div>
                  <span className="font-mono text-xs text-[#6E756E] group-hover:text-[#A5ACA5]">
                    instagram.com/athiqqqq
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href={contactDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#111311] border border-[#303530] hover:border-[#325ea8] flex items-center justify-between text-sm transition-colors group"
                >
                  <div className="flex items-center gap-3 text-[#F4F3ED] group-hover:text-[#325ea8]">
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span className="font-heading font-medium">WhatsApp</span>
                  </div>
                  <span className="font-mono text-xs text-[#6E756E] group-hover:text-[#A5ACA5]">
                    {contactDetails.phone}
                  </span>
                </a>
              </div>
            </div>

            {/* Context & Response Time */}
            <div className="p-4 rounded-xl bg-[#1B1E1B] border border-[#303530] flex flex-col gap-2 text-xs font-mono text-[#A5ACA5]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#325ea8]" />
                <span>Location: {contactDetails.location} (IST / UTC+5:30)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#325ea8]" />
                <span>Response time: Usually 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#202420] border border-[#303530] rounded-xl p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#111311] border border-[#325ea8] text-[#325ea8] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#F4F3ED]">
                    Sent to WhatsApp!
                  </h3>
                  <p className="font-body text-sm text-[#A5ACA5] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#F4F3ED]">{formData.name}</strong>. WhatsApp has been opened with your pre-filled message for Athiq (<strong className="text-[#325ea8]">{contactDetails.phone}</strong>).
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs flex items-center gap-2"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Open WhatsApp Again</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleOpenEmailClient}
                      className="btn-secondary text-xs flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email Fallback</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          purpose: "Internship Opportunity",
                          message: "",
                        });
                      }}
                      className="btn-ghost text-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="font-heading font-bold text-xl text-[#F4F3ED] mb-2">
                    Send a Message
                  </h3>
                  <p className="font-body text-xs text-[#A5ACA5] mb-6">
                    Fill out the form below and I will get back to you promptly.
                  </p>

                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs uppercase text-[#A5ACA5] mb-1.5"
                    >
                      Your Name <span className="text-[#325ea8]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-3 rounded-lg bg-[#111311] border text-sm text-[#F4F3ED] placeholder-[#6E756E] focus:outline-none transition-colors ${errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#303530] focus:border-[#325ea8]"
                        }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs uppercase text-[#A5ACA5] mb-1.5"
                    >
                      Email Address <span className="text-[#325ea8]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-lg bg-[#111311] border text-sm text-[#F4F3ED] placeholder-[#6E756E] focus:outline-none transition-colors ${errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#303530] focus:border-[#325ea8]"
                        }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Purpose selector */}
                  <div>
                    <label
                      htmlFor="contact-purpose"
                      className="block font-mono text-xs uppercase text-[#A5ACA5] mb-1.5"
                    >
                      Opportunity or Topic
                    </label>
                    <select
                      id="contact-purpose"
                      value={formData.purpose}
                      onChange={(e) =>
                        setFormData({ ...formData, purpose: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-[#111311] border border-[#303530] text-sm text-[#F4F3ED] focus:border-[#325ea8] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Internship Opportunity">
                        Internship Opportunity (Web Dev / AIML)
                      </option>
                      <option value="Freelance Client Project">
                        Freelance Client Project
                      </option>
                      <option value="Developer Collaboration">
                        Developer Collaboration / Open Source
                      </option>
                      <option value="Creative AI Video Inquiry">
                        Creative AI Video / Video Editing Project
                      </option>
                      <option value="General Conversation">
                        General Question / Hello
                      </option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-xs uppercase text-[#A5ACA5] mb-1.5"
                    >
                      Message <span className="text-[#325ea8]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me a bit about what you have in mind..."
                      className={`w-full px-4 py-3 rounded-lg bg-[#111311] border text-sm text-[#F4F3ED] placeholder-[#6E756E] focus:outline-none transition-colors resize-none ${errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#303530] focus:border-[#325ea8]"
                        }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Opening WhatsApp...</span>
                    ) : (
                      <>
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Send Message via WhatsApp</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
