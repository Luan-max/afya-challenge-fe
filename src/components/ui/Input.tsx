interface InputProps {
  label: string;
  value: any;
  required?: boolean;
  type?: any;
  placeholder?: string;
  valueChange: (newValue: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={(e) => props.valueChange?.(e.target.value)}
        required={props.required}
        placeholder={props.placeholder}
        className={`
        mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-lg
          `}
      />
    </>
  );
}
