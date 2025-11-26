interface InputProps {
  label: string;
  type?: string;
  id: string;
  name: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
}

export function Input({
  label,
  type = "text",
  id,
  name,
  required = false,
  value,
  onChange,
  className = "",
  placeholder,
}: InputProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label} {required && <span className="text-black/60">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-sm border border-black/20 px-4 py-3 transition-colors focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
      />
    </div>
  );
}

interface TextareaProps {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  placeholder?: string;
}

export function Textarea({
  label,
  id,
  name,
  required = false,
  rows = 6,
  value,
  onChange,
  className = "",
  placeholder,
}: TextareaProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label} {required && <span className="text-black/60">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full resize-none rounded-sm border border-black/20 px-4 py-3 transition-colors focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
      />
    </div>
  );
}
