import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps {
  filename: string;
  language: string;
  code: string;
  sourceUrl?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  filename,
  language,
  code,
  sourceUrl,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available — silent fail
    }
  };

  return (
    <div className="code-block" role="region" aria-label={`Code snippet: ${filename}`}>
      <div className="code-block__header">
        <span className="code-block__filename">{filename}</span>
        <button
          className="code-block__copy"
          onClick={handleCopy}
          aria-label={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      <div className="code-block__body">
        <SyntaxHighlighter
          language={language === "jsx" ? "javascript" : language}
          style={atomOneLight}
          showLineNumbers
          wrapLongLines={false}
          customStyle={{
            margin: 0,
            borderRadius: 0,
            fontSize: "0.78rem",
            lineHeight: "1.6",
            background: "var(--bg-code)",
            padding: "1rem",
          }}
          lineNumberStyle={{
            color: "var(--fg-subtle)",
            fontSize: "0.7rem",
            paddingRight: "1rem",
            minWidth: "2.5em",
            userSelect: "none",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>

      {sourceUrl && (
        <div className="code-block__source">
          <span>Full source on</span>
          <a href={sourceUrl} target="_blank" rel="noreferrer noopener">
            GitHub
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
