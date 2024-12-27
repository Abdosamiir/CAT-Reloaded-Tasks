type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` rounded-full align-middle border ${className}`}
    >
      {text}
    </button>
  );
};
