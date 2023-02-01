import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { prism, atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { useDarkModeState } from "src/redux/features/darkMode/hooks"

type ContentProps = {
  children: string
}

export const Content = ({ children }: ContentProps) => {
  const { darkMode } = useDarkModeState()

  return (
    <ReactMarkdown
      className="max-w-full mt-10"
      components={{
        code({ node, inline, className, children, style, ...props }) {
          const match = /language-(\w+)/.exec(className || "")

          return !inline && match ? (
            <SyntaxHighlighter
              style={darkMode ? atomDark : prism}
              language={match[1]}
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
        h2({ node, className, children, style, ...props }) {
          return (
            <h2 className="text-xl mb-4 mt-10 first-of-type:mt-0" {...props}>
              {children}
            </h2>
          )
        },
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
