interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>
}

export default function JsonLd({ data }: Props) {
  // Schema.org structured data — content is always internally generated, never user input
  const json = JSON.stringify(data)
  return <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: json }} />
}
