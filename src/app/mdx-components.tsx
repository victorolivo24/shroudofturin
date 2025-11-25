import type { MDXComponents } from "mdx/types";

function Heading({
  level,
  children,
}: {
  level: "h2" | "h3";
  children: React.ReactNode;
}) {
  const Tag = level;
  const styles =
    level === "h2"
      ? "text-2xl font-semibold tracking-tight text-sand-100"
      : "text-xl font-semibold text-sand-100/90";

  return <Tag className={`${styles} mt-6`}>{children}</Tag>;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <Heading level="h2" {...props} />,
    h3: (props) => <Heading level="h3" {...props} />,
    p: (props) => (
      <p className="text-base leading-7 text-sand-200/80" {...props} />
    ),
    ul: (props) => (
      <ul
        className="list-disc space-y-1 pl-5 text-sand-200/80 marker:text-sand-400"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="list-decimal space-y-1 pl-5 text-sand-200/80 marker:text-sand-400"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="border-l-2 border-sand-400/60 pl-4 text-sm italic text-sand-200/90"
        {...props}
      />
    ),
    SourceNote: (props) => (
      <div
        className="rounded-md border border-sand-500/30 bg-sand-900/40 p-4 text-sm text-sand-100/80"
        {...props}
      />
    ),
    ...components,
  };
}
