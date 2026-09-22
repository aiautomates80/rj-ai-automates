import { useEffect, useRef, useState } from "react";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND } from "../site-data";
import {
  getAnswer,
  QUICK_REPLIES,
  WELCOME_TEXT,
  type ChatAction,
} from "./chatbot-knowledge";

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
  actions?: ChatAction[] | undefined;
  quickReplies?: string[] | undefined;
};

let nextId = 1;
const newId = () => nextId++;

const WELCOME: Message = {
  id: 0,
  role: "assistant",
  text: WELCOME_TEXT,
  quickReplies: QUICK_REPLIES,
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 250);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function send(text: string) {
    const value = text.trim();
    if (!value || typing) return;
    setMessages((m) => [...m, { id: newId(), role: "user", text: value }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      const answer = getAnswer(value);
      setTyping(false);
      setMessages((m) => [
        ...m,
        {
          id: newId(),
          role: "assistant",
          text: answer.text,
          actions: answer.actions,
          quickReplies: answer.quickReplies,
        },
      ]);
    }, 520);
  }

  return (
    <>
      {/* Launcher — sits above the WhatsApp button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close RJ AI Assistant" : "Chat with RJ AI"}
        aria-expanded={open}
        className="group fixed right-4 bottom-[5.5rem] z-50 flex items-center sm:right-6 sm:bottom-[6.5rem]"
      >
        <span className="bg-brand-gradient relative flex size-12 items-center justify-center rounded-full text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-105 sm:size-14">
          {open ? (
            <X className="size-5 sm:size-6" />
          ) : (
            <Bot className="size-6 sm:size-7" />
          )}
        </span>
        {!open && (
          <span className="glass-panel pointer-events-none ml-2 hidden rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 lg:block">
            Chat with RJ AI
          </span>
        )}
      </button>

      {/* Window */}
      <div
        role="dialog"
        aria-label="RJ AI Assistant"
        aria-hidden={!open}
        className={cn(
          "fixed right-3 bottom-[9.5rem] z-50 flex w-[min(24rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--glow-soft)] transition-all duration-300 sm:right-6 sm:bottom-[10.5rem]",
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-[0.98] opacity-0",
        )}
        style={{ maxHeight: "min(32rem, calc(100vh - 12rem))" }}
      >
        <header className="bg-brand-gradient flex items-center gap-3 px-4 py-4 text-primary-foreground">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white/20">
            <Sparkles className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-base font-semibold">
              RJ AI Assistant
            </span>
            <span className="block text-xs opacity-85">How can I help you today?</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="rounded-full p-1.5 transition-colors hover:bg-white/20"
          >
            <X className="size-4" />
          </button>
        </header>

        <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-surface/60 p-4">
          {messages.map((m) => (
            <MessageBubble key={m.id} message={m} onQuickReply={send} />
          ))}
          {typing && (
            <div className="w-fit rounded-2xl rounded-bl-md border border-border bg-card px-4 py-3">
              <span className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="animate-node size-1.5 rounded-full bg-muted-foreground"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </span>
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-border bg-card p-3"
        >
          <label htmlFor="rj-chat-input" className="sr-only">
            Message RJ AI Assistant
          </label>
          <input
            id="rj-chat-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about AI automation…"
            className="h-10 min-w-0 flex-1 rounded-full border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={!input.trim() || typing}
            className="bg-brand-gradient flex size-10 shrink-0 items-center justify-center rounded-full text-primary-foreground transition-transform duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </>
  );
}

function MessageBubble({
  message,
  onQuickReply,
}: {
  message: Message;
  onQuickReply: (text: string) => void;
}) {
  const isUser = message.role === "user";
  return (
    <div className={cn("flex flex-col gap-2", isUser ? "items-end" : "items-start")}>
      <p
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line",
          isUser
            ? "rounded-br-md bg-primary text-primary-foreground"
            : "rounded-bl-md border border-border bg-card text-foreground",
        )}
      >
        {message.text}
      </p>

      {message.actions && message.actions.length > 0 && (
        <div className="flex max-w-[92%] flex-wrap gap-2">
          {message.actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              target={a.href.startsWith("tel:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
            >
              {a.label}
            </a>
          ))}
        </div>
      )}

      {message.quickReplies && message.quickReplies.length > 0 && (
        <div className="flex max-w-[92%] flex-wrap gap-2">
          {message.quickReplies.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => onQuickReply(q)}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {q}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export const CHAT_CONTACT = BRAND;
