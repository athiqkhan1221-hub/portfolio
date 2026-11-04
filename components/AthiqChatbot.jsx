"use client";

import { useState, useRef, useEffect, useId } from "react";
import Link from "next/link";
import { contactDetails } from "@/data/socials";
import {
  X,
  Send,
  Sparkles,
  ArrowUpRight,
  RefreshCw,
  Heart,
  Smile,
  MessageCircle
} from "lucide-react";
import { WhatsAppIcon } from "./Icons";

// ============================================================================
// CUTE ROBOT VECTOR CHARACTER COMPONENT
// ============================================================================
function CuteRobotFigure({ mood = "happy", size = 48, isHovered = false }) {
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const bodyId = `robotBody_${safeId}`;
  const visorId = `robotVisor_${safeId}`;
  const eyeGlowId = `eyeGlow_${safeId}`;

  return (
    <div
      style={{ width: size, height: size }}
      className="relative flex items-center justify-center select-none"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md transition-transform duration-300"
      >
        <defs>
          <linearGradient id={bodyId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#242a35" />
            <stop offset="50%" stopColor="#1c222c" />
            <stop offset="100%" stopColor="#141922" />
          </linearGradient>
          <linearGradient id={visorId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d1117" />
            <stop offset="100%" stopColor="#151b24" />
          </linearGradient>
          <filter id={eyeGlowId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- Antenna --- */}
        <line
          x1="50"
          y1="22"
          x2="50"
          y2="9"
          stroke="#414841"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Antenna Pulsing Beacon */}
        <circle cx="50" cy="8" r="5.5" fill="#325ea8" className="animate-pulse" />
        <circle cx="50" cy="8" r="2.5" fill="#FFFFFF" />

        {/* --- Left Ear / Headphone --- */}
        <rect x="14" y="38" width="6" height="22" rx="3" fill="#303530" />
        <rect x="17" y="42" width="2" height="14" rx="1" fill="#325ea8" opacity="0.8" />

        {/* --- Right Ear / Headphone --- */}
        <rect x="80" y="38" width="6" height="22" rx="3" fill="#303530" />
        <rect x="81" y="42" width="2" height="14" rx="1" fill="#325ea8" opacity="0.8" />

        {/* --- Main Head Chassis --- */}
        <rect
          x="19"
          y="22"
          width="62"
          height="54"
          rx="18"
          fill={`url(#${bodyId})`}
          stroke="#384038"
          strokeWidth="2.5"
        />

        {/* --- Glossy Screen Visor --- */}
        <rect
          x="26"
          y="31"
          width="48"
          height="36"
          rx="12"
          fill={`url(#${visorId})`}
          stroke="#262B26"
          strokeWidth="1.5"
        />

        {/* Screen Glass Reflection Highlight */}
        <path
          d="M30 35 Q50 32 68 37"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.15"
        />

        {/* --- Expressive Eyes --- */}
        {mood === "wink" || isHovered ? (
          // Playful Wink Expression
          <g filter={`url(#${eyeGlowId})`}>
            {/* Left Eye: Smiling Happy Arch */}
            <path
              d="M34 50 Q40 43 45 50"
              stroke="#325ea8"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Right Eye: Big Glowing Lens */}
            <circle cx="57" cy="48" r="6" fill="#325ea8" />
            <circle cx="58.5" cy="46" r="2" fill="#FFFFFF" />
          </g>
        ) : mood === "happy" ? (
          // Happy Arches Expression (^ ^)
          <g filter={`url(#${eyeGlowId})`}>
            <path
              d="M33 49 Q39 42 45 49"
              stroke="#325ea8"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M55 49 Q61 42 67 49"
              stroke="#325ea8"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        ) : (
          // Curious / Open Eyes
          <g filter={`url(#${eyeGlowId})`}>
            <circle cx="39" cy="48" r="5.5" fill="#325ea8" />
            <circle cx="40.5" cy="46.5" r="2" fill="#FFFFFF" />
            <circle cx="61" cy="48" r="5.5" fill="#325ea8" />
            <circle cx="62.5" cy="46.5" r="2" fill="#FFFFFF" />
          </g>
        )}

        {/* --- Cute Blushing Cheeks --- */}
        <circle cx="31" cy="57" r="3" fill="#325ea8" opacity="0.35" />
        <circle cx="69" cy="57" r="3" fill="#325ea8" opacity="0.35" />

        {/* Tiny Sweet Robot Smile */}
        <path
          d="M47 57 Q50 60 53 57"
          stroke="#325ea8"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />

        {/* --- Robot Little Floating Hands / Body Base --- */}
        <rect x="36" y="78" width="28" height="6" rx="3" fill="#202420" stroke="#303530" strokeWidth="1" />
        <circle cx="33" cy="80" r="4.5" fill="#325ea8" opacity="0.9" />
        <circle cx="67" cy="80" r="4.5" fill="#325ea8" opacity="0.9" />
      </svg>
    </div>
  );
}

// ============================================================================
// KNOWLEDGE BASE (Verified details for Athiq Khan)
// ============================================================================
const knowledgeBase = [
  {
    triggers: ["who are you", "who is athiq", "about", "bio", "background", "introduce", "intro", "college", "education", "degree"],
    reply: `Beep boop! I'm **Athiq Bot**, personal companion for **M. Athiq Khan**!\n\nAthiq is an Artificial Intelligence and Machine Learning (AIML) engineering student at **Dhaanish Ahmed Chennai College of Engineering** in Chennai, India.\n\nHe specializes in **full-stack web development** (React.js, Node.js, JavaScript, Python) while creating visual magic with **prompt engineering, AI video generation, and video editing**!`
  },
  {
    triggers: ["internship", "hire", "job", "freelance", "opportunity", "available", "work with", "collaborate"],
    reply: `Awesome news! Athiq is **actively open to high-impact internship opportunities** and select **freelance web development projects**!\n\nYou can chat with him directly on WhatsApp at [**+91 90433 95299**](https://wa.me/919043395299) or shoot an email to [**athiqkhan1221@gmail.com**](mailto:athiqkhan1221@gmail.com).`
  },
  {
    triggers: ["skills", "toolkit", "technologies", "tech stack", "languages", "what do you use", "tools"],
    reply: `Here's Athiq's technical toolkit:\n\n• **Frontend & Backend:** HTML5, CSS3, JavaScript (ES6+), React.js, Node.js\n• **Programming:** Python (Algorithms, Data Structures, AI Scripting)\n• **AI Exploration:** Prompt Engineering, Machine Learning concepts\n• **Creative Media:** AI Video Generation & Timeline Video Editing\n• **Full-Stack:** RESTful APIs, Backend Foundations & Database Integration`
  },
  {
    triggers: ["projects", "what have you built", "work", "portfolio projects", "course explorer", "prompt lab"],
    reply: `Athiq has built several projects:\n\n1. **Personal Developer Portfolio:** Bespoke editorial dark web experience built with Node.js & React.\n2. **Course Explorer Web App:** React application with live search and filter tags.\n3. **AI Video Creative Showcase:** Visual experiments in text-to-video diffusion & editing.\n4. **Screen-Time Awareness Dashboard:** Digital wellbeing metrics and focus analytics.\n5. **AI Prompt Lab:** Systematic testing of zero-shot vs few-shot system prompts.\n\nCheck them out in the [Selected Work](/#work) section!`
  },
  {
    triggers: ["contact", "reach", "email", "phone", "whatsapp", "number", "call", "message", "instagram", "linkedin"],
    reply: `Here is how you can connect with Athiq:\n\n• **WhatsApp:** [**+91 90433 95299**](https://wa.me/919043395299) *(Fastest response!)*\n• **Email:** [**athiqkhan1221@gmail.com**](mailto:athiqkhan1221@gmail.com)\n• **LinkedIn:** [**linkedin.com/in/athiq-khan-2aa177433**](https://www.linkedin.com/in/athiq-khan-2aa177433)\n• **Instagram:** [**instagram.com/athiqqqq**](https://www.instagram.com/athiqqqq)\n• **Location:** Chennai, India (IST / UTC+5:30)`
  },
  {
    triggers: ["ai video", "video editing", "video", "playground", "creative", "reels"],
    reply: `Athiq loves the intersection of code and visual cinema.\n\nIn his creative experiments, he directs text-to-video diffusion models for 9:16 vertical product commercials, 16:9 cinematic tracking shots, and precision beat-sync video editing.`
  },
  {
    triggers: ["location", "city", "where do you live", "where are you from", "india", "chennai"],
    reply: `Athiq is based in vibrant **Chennai, Tamil Nadu, India**. He collaborates remotely across different timezones and works smoothly in Indian Standard Time (IST / UTC+5:30).`
  },
  {
    triggers: ["python", "machine learning", "aiml", "ai"],
    reply: `Athiq studies Python and AIML as his university degree at Dhaanish Ahmed College. He enjoys coding algorithmic solutions, understanding model pipelines, and testing structured prompt conditioning.`
  },
  {
    triggers: ["react", "nodejs", "node.js", "frontend", "backend", "web dev"],
    reply: `Web development is Athiq's primary passion. He crafts modular, responsive experiences using **React.js** and **Node.js**, prioritizing clean component hierarchy and high performance.`
  }
];

export default function AthiqChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLauncherHovered, setIsLauncherHovered] = useState(false);
  const [robotMood, setRobotMood] = useState("happy");
  const [messages, setMessages] = useState([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Beep boop! I'm **Athiq Bot**, Athiq's friendly AI companion!\n\nI can tell you all about Athiq's projects, technical skills, or connect you directly with him. What would you like to know?",
      time: "Just now"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    setHasInteracted(true);
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages, isTyping]);

  const quickPrompts = [
    "What are Athiq's skills?",
    "Tell me about his projects",
    "Is he open for internships?",
    "Message Athiq on WhatsApp"
  ];

  const generateAnswer = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    for (const item of knowledgeBase) {
      if (item.triggers.some((trigger) => q.includes(trigger))) {
        return item.reply;
      }
    }

    return (
      `Beep! I'd love to help you with that! Athiq is an AIML student and full-stack web developer in Chennai.\n\n` +
      `For specific questions or project discussions, you can reach him directly on WhatsApp at [**+91 90433 95299**](https://wa.me/919043395299) or email [**athiqkhan1221@gmail.com**](mailto:athiqkhan1221@gmail.com). He usually replies within 24 hours!`
    );
  };

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg = {
      id: `user-${messages.length + 1}`,
      sender: "user",
      text: text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);
    setRobotMood("curious");

    // Fast, crisp reply (400ms)
    setTimeout(() => {
      const answer = generateAnswer(text);
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: answer,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setIsTyping(false);
      setRobotMood("happy");
      setMessages((prev) => [...prev, botMsg]);
    }, 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderFormattedText = (rawText) => {
    const paragraphs = rawText.split("\n\n");

    return paragraphs.map((para, pIdx) => {
      const lines = para.split("\n");
      return (
        <p key={pIdx} className="mb-2 last:mb-0 leading-relaxed">
          {lines.map((line, lIdx) => {
            const parts = [];
            const regex = /\[(.*?)\]\((.*?)\)|\*\*(.*?)\*\*/g;
            let lastIndex = 0;
            let match;

            while ((match = regex.exec(line)) !== null) {
              if (match.index > lastIndex) {
                parts.push(line.substring(lastIndex, match.index));
              }

              if (match[1] && match[2]) {
                parts.push(
                  <a
                    key={`link-${lIdx}-${match.index}`}
                    href={match[2]}
                    target={match[2].startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="text-[#325ea8] underline hover:text-[#4d7bc9] font-semibold"
                    onClick={() => {
                      if (match[2].startsWith("#") || match[2].startsWith("/#")) setIsOpen(false);
                    }}
                  >
                    {match[1]}
                  </a>
                );
              } else if (match[3]) {
                parts.push(
                  <strong key={`bold-${lIdx}-${match.index}`} className="text-[#F4F3ED] font-semibold">
                    {match[3]}
                  </strong>
                );
              }

              lastIndex = regex.lastIndex;
            }

            if (lastIndex < line.length) {
              parts.push(line.substring(lastIndex));
            }

            return (
              <span key={lIdx} className="block">
                {parts.length > 0 ? parts : line}
              </span>
            );
          })}
        </p>
      );
    });
  };

  return (
    <aside aria-label="Athiq Bot Cute AI Assistant" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      {/* ====================================================================
          EXPANDED CHAT WINDOW (PREMIUM CUTE ROBOT THEME)
          ==================================================================== */}
      {isOpen ? (
        <div className="w-[92vw] sm:w-[415px] h-[560px] max-h-[82vh] bg-[#141714] border-2 border-[#303530] rounded-3xl shadow-2xl shadow-black/90 flex flex-col overflow-hidden animate-scaleUp">
          {/* Header with Cute Robot Companion */}
          <div className="bg-[#1A1E1A] px-4 py-3.5 border-b border-[#303530] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <CuteRobotFigure mood={robotMood} size={42} />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#1A1E1A]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-heading font-extrabold text-sm text-[#F4F3ED] flex items-center gap-1">
                    <span>Athiq Bot</span>
                    
                  </h3>
                  <span className="bg-[#325ea8]/15 text-[#325ea8] text-[9px] font-mono px-2 py-0.5 rounded-full border border-[#325ea8]/30 font-bold uppercase tracking-wider">
                    ONLINE
                  </span>
                </div>
                <p className="font-body text-[11px] text-[#A5ACA5]">
                  Athiq&apos;s friendly companion · Fast answers!
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <a
                href={contactDetails.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                title={`Direct WhatsApp (${contactDetails.phone})`}
                className="p-1.5 rounded-xl text-[#A5ACA5] hover:text-[#25D366] hover:bg-[#202420] transition-colors"
                aria-label="Direct WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl text-[#A5ACA5] hover:text-[#F4F3ED] hover:bg-[#202420] transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Conversation Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#0F120F]/90 scroll-smooth">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="shrink-0 mt-0.5">
                    <CuteRobotFigure mood={robotMood} size={28} />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-xs sm:text-[13px] leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#325ea8] text-white font-medium rounded-tr-none shadow-md shadow-[#325ea8]/20"
                      : "bg-[#1E231E] text-[#A5ACA5] border border-[#303530] rounded-tl-none shadow-sm"
                  }`}
                >
                  <div className="text-left break-words">
                    {msg.sender === "bot" ? renderFormattedText(msg.text) : msg.text}
                  </div>
                  <div
                    className={`text-[9px] font-mono mt-1 text-right ${
                      msg.sender === "user" ? "text-white/80" : "text-[#6E756E]"
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator with Animated Bot Antenna */}
            {isTyping && (
              <div className="flex items-center gap-2.5 text-xs text-[#A5ACA5] pl-1">
                <CuteRobotFigure mood="curious" size={26} />
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1E231E] border border-[#303530]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#325ea8] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#325ea8] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#325ea8] animate-bounce [animation-delay:0.4s]" />
                  <span className="font-mono text-[11px] text-[#A5ACA5] ml-1">
                    Athiq Bot is typing...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Chips */}
          <div className="px-3 py-2 bg-[#171B17] border-t border-[#303530] overflow-x-auto flex gap-1.5 no-scrollbar">
            {quickPrompts.map((prompt, pIdx) => (
              <button
                key={pIdx}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap text-[11px] font-body font-medium px-3 py-1.5 rounded-full bg-[#111311] border border-[#303530] text-[#A5ACA5] hover:text-[#325ea8] hover:border-[#325ea8] hover:bg-[#1C201C] transition-all"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-[#1A1E1A] border-t border-[#303530]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything about Athiq..."
                className="flex-1 bg-[#111311] border border-[#303530] focus:border-[#325ea8] rounded-xl px-4 py-2.5 text-xs text-[#F4F3ED] placeholder-[#6E756E] focus:outline-none transition-colors"
              />

              <button
                type="submit"
                disabled={!inputValue.trim()}
                className={`p-2.5 rounded-xl transition-all ${
                  inputValue.trim()
                    ? "bg-[#325ea8] text-white hover:bg-[#264b8a] cursor-pointer shadow-md shadow-[#325ea8]/20"
                    : "bg-[#202420] text-[#6E756E] cursor-not-allowed border border-[#303530]"
                }`}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* ====================================================================
            FLOATING CUTE ROBOT LAUNCHER (MAGNETIC ATTRACTIVE DESIGN)
            ==================================================================== */
        <div className="relative flex flex-col items-end">
          {/* Interactive Floating Robot Trigger (Only Robot) */}
          <button
            type="button"
            onClick={handleOpenChat}
            onMouseEnter={() => {
              setIsLauncherHovered(true);
              setRobotMood("wink");
            }}
            onMouseLeave={() => {
              setIsLauncherHovered(false);
              setRobotMood("happy");
            }}
            className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1A1E1A] hover:bg-[#202520] border-2 border-[#303530] hover:border-[#325ea8] shadow-2xl shadow-black/80 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[#325ea8]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325ea8] cursor-pointer"
            aria-label="Open Assistant"
          >
            {/* Subtle Glowing Aura */}
            <div className="absolute inset-0 rounded-full bg-[#325ea8]/20 blur-md group-hover:bg-[#325ea8]/40 transition-colors" />

            <div className="relative transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
              <CuteRobotFigure mood={isLauncherHovered ? "wink" : "happy"} size={48} isHovered={isLauncherHovered} />
            </div>

            {/* Online Status Dot */}
            <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#1A1E1A] shadow-sm" />
          </button>
        </div>
      )}
    </aside>
  );
}
