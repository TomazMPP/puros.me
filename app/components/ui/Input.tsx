import { InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput(props: TextInputProps) {
  return (
    <input
      type="text"
      className="bg-background-secondary text-white p-3 rounded-xl outline-none"
      {...props}
    />
  );
}