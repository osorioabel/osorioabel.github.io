import React from "react";

function renderInline(text: string) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>;
    }

    return part;
  });
}

export default function MarkdownContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const nodes: React.ReactNode[] = [];
  let listItems: Array<{ item: string; lineIndex: number }> = [];

  function flushList() {
    if (listItems.length === 0) {
      return;
    }

    const listStartIndex = listItems[0]?.lineIndex ?? nodes.length;

    nodes.push(
      <ul key={`list-${listStartIndex}`} className="space-y-2">
        {listItems.map(({ item, lineIndex }) => (
          <li key={`list-item-${lineIndex}`}>{renderInline(item)}</li>
        ))}
      </ul>,
    );
    listItems = [];
  }

  lines.forEach((line, lineIndex) => {
    if (!line.trim()) {
      flushList();
      return;
    }

    if (line.startsWith("## ")) {
      flushList();
      nodes.push(
        <h2 key={`heading-2-${lineIndex}`} className="pt-6 text-2xl font-semibold text-slate-950">
          {renderInline(line.slice(3))}
        </h2>,
      );
      return;
    }

    if (line.startsWith("# ")) {
      flushList();
      nodes.push(
        <h1 key={`heading-1-${lineIndex}`} className="text-4xl font-bold tracking-tight text-slate-950">
          {renderInline(line.slice(2))}
        </h1>,
      );
      return;
    }

    if (line.startsWith("- ")) {
      listItems.push({ item: line.slice(2), lineIndex });
      return;
    }

    flushList();
    nodes.push(
      <p key={`paragraph-${lineIndex}`} className="text-base leading-8 text-slate-700">
        {renderInline(line)}
      </p>,
    );
  });

  flushList();

  return <div className="prose-content mx-auto max-w-3xl space-y-6">{nodes}</div>;
}
