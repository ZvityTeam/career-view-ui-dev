import { ChangeEvent, FC, FormEvent, ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

export interface OutlinedInputWithButtonProps {
  /**
   * Placeholder text for the input.
   * Default: "Enter email address"
   */
  placeholder?: string;

  /**
   * Whether to show the button+icon on the right side.
   * Default: true
   */
  showButton?: boolean;

  /**
   * A custom icon to display in the button.
   * If not provided, we use a default paper-plane style icon.
   */
  icon?: ReactNode;

  /**
   * Called when the user presses Enter or clicks the button.
   * Receives the current input value as a string.
   */
  onSubmit?: (value: string) => void;

  /**
   * Called whenever the user changes the input value (typing).
   * If you're using a controlled approach, you'll update your state in here.
   */
  onChange?: (value: string) => void;

  /**
   * If provided, the input is considered "controlled":
   * The parent must manage the value and call onChange to update.
   */
  value?: string;

  /**
   * Default input value (for uncontrolled usage). Ignored if `value` is set.
   */
  defaultValue?: string;

  /**
   * Additional classes for the outer container (the outline).
   */
  containerClassName?: string;

  /**
   * Additional classes for the <input> element.
   */
  inputClassName?: string;

  /**
   * Additional classes for the button element (if `showButton` = true).
   */
  buttonClassName?: string;
}

/**
 * A reusable outlined input + optional button on the right side,
 * with a default "send/paper-plane" icon.
 * Supports controlled/uncontrolled usage, onChange, onSubmit, etc.
 */
export const OutlinedInputWithButton: FC<OutlinedInputWithButtonProps> = ({
  placeholder = 'Enter email address',
  showButton = true,
  icon,
  onSubmit,
  onChange,
  value,
  defaultValue,
  containerClassName = '',
  inputClassName = '',
  buttonClassName = '',
}) => {
  // If `value` is undefined, we track local state. Otherwise, it's controlled.
  const isControlled = value !== undefined;

  // Local (uncontrolled) state if no `value` prop is provided.
  const [internalValue, setInternalValue] = useState<string>(
    defaultValue ?? ''
  );

  // The actual string displayed in the input
  const currentValue = isControlled ? (value as string) : internalValue;

  // Handler for input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    if (!isControlled) {
      // Uncontrolled: update local state
      setInternalValue(newVal);
    }
    // Call parent's onChange if provided
    onChange?.(newVal);
  };

  // Handler for form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(currentValue);
  };

  // Default "paper plane" icon if none provided
  const defaultIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.6}
      stroke='currentColor'
      className='h-5 w-5 text-[#F1CE7E]'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 4.5l16.5 7.5-16.5 7.5 4.125-7.5L3.75 4.5z'
      />
    </svg>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center rounded-md border border-gray-500/50 p-2 ${containerClassName}`}
    >
      <input
        type='text'
        value={currentValue}
        placeholder={placeholder}
        onChange={handleChange}
        className={`flex-grow bg-transparent px-2 py-2 placeholder-gray-400 outline-none ${inputClassName} `}
      />

      {showButton && (
        <motion.button
          type='submit'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`ml-1 flex h-10 w-10 items-center justify-center rounded border-gray-500/50 bg-transparent text-white transition hover:bg-[#F1CE7E] hover:text-black ${buttonClassName} `}
        >
          {/* Use the passed-in icon or fallback to the default */}
          {icon || defaultIcon}
        </motion.button>
      )}
    </form>
  );
};
