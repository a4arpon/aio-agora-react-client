import { className as cn } from "@/utils/utils"

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  disabled,
  onClick,
  type,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type || "button"}
      className={cn(
        `bg-light text-dark px-4 py-2 focus:scale-[0.98] animation-1 text-base font-semibold rounded-[10px] hover:bg-light/95 flex flex-row flex-nowrap gap-2 whitespace-nowrap ${className}`
      )}
    >
      {children}
    </button>
  )
}

export default Button
