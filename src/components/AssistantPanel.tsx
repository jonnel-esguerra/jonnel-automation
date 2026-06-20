import { FormEvent, useMemo, useState } from "react";
import type { PromptAnswer } from "../data/portfolio";

type AssistantPanelProps = {
  prompts: string[];
  answers: PromptAnswer[];
  profileContext: string;
};

const fallbackAnswer =
  "I can answer from Jonnel's resume data: automation platforms, Playwright, AI agents, manufacturing IT, leadership impact, databases, and tools. Try asking about one of those and I will keep it practical.";

function findAnswer(query: string, answers: PromptAnswer[]) {
  const normalized = query.toLowerCase();
  const exact = answers.find((item) => item.prompt.toLowerCase() === normalized);

  if (exact) {
    return { item: exact, score: Number.POSITIVE_INFINITY };
  }

  return answers
    .map((item) => ({
      item,
      score: item.keywords.reduce(
        (total, keyword) => total + (normalized.includes(keyword) ? 1 : 0),
        0,
      ),
    }))
    .sort((a, b) => b.score - a.score)[0];
}

export default function AssistantPanel({
  prompts,
  answers,
  profileContext,
}: AssistantPanelProps) {
  const [query, setQuery] = useState(prompts[0] ?? "");
  const [activePrompt, setActivePrompt] = useState(prompts[0] ?? "");

  const response = useMemo(() => {
    const matched = findAnswer(activePrompt, answers);
    return matched?.score === 0 && matched.item.prompt !== activePrompt
      ? fallbackAnswer
      : matched?.item.answer ?? fallbackAnswer;
  }, [activePrompt, answers]);

  function submitQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();

    if (trimmed.length > 0) {
      setActivePrompt(trimmed);
    }
  }

  return (
    <section className="assistant-panel" id="ask-ai" aria-labelledby="assistant-title">
      <div className="section-label">Ask AI</div>
      <div className="assistant-grid">
        <div className="assistant-copy">
          <h2 id="assistant-title">Ask the portfolio like a tiny hiring copilot.</h2>
          <p>{profileContext}</p>
          <div className="prompt-stack" aria-label="Suggested questions">
            {prompts.map((prompt) => (
              <button
                className={prompt === activePrompt ? "prompt-chip is-active" : "prompt-chip"}
                key={prompt}
                onClick={() => {
                  setActivePrompt(prompt);
                  setQuery(prompt);
                }}
                type="button"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
        <div className="assistant-console" role="region" aria-live="polite">
          <div className="console-topline">
            <span>local-answer-engine</span>
            <span>no api key</span>
          </div>
          <form className="ask-form" onSubmit={submitQuestion}>
            <label className="sr-only" htmlFor="assistant-query">
              Ask Jonnel's portfolio
            </label>
            <input
              id="assistant-query"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ask about automations, AI agents, SQL, leadership..."
              value={query}
            />
            <button type="submit">Ask</button>
          </form>
          <div className="answer-block">
            <div className="answer-label">Answer</div>
            <p>{response}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
