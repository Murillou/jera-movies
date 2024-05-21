interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
}

export function Input({ type, name, id, placeholder }: InputProps) {
  return (
    <input
      className="bg-slate-300 p-2 rounded-lg text-slate-50"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
}
