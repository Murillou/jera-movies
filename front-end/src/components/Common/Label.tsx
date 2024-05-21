interface LabelProps {
  htmlFor: string;
  content: string;
}

export function Label({ htmlFor, content }: LabelProps) {
  return <label htmlFor={htmlFor}>{content}</label>;
}
