const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  disabled,
  onClick,
  type,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type || "button"}
      className="bg-light text-dark px-4 py-2 focus:scale-[0.98] animation-1 text-base font-semibold rounded-[10px] hover:bg-light/95 flex flex-row flex-nowrap gap-2"
    >
      {children}
    </button>
  )
}

export default Button
