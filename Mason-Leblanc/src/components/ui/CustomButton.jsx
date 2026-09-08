
export default function CustomButton({
  text = 'SHOP NOW',
  variant = 'white', //'white' , 'black' , 'outline'
  className = '',
  onClick,
  ...props
}) {
  const variants = {
    white: 'bg-white text-black border border-white hover:border-black hover:bg-black hover:text-white',
    black: 'bg-black text-white border border-black hover:bg-transparent hover:text-black',
    outline: 'bg-transparent text-white border border-white hover:bg-white hover:text-black',
  };

  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 text-[14px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center inline-block
        ${variants[variant] || variants.white} ${className}
      `}
      {...props}
    >
      {text}
    </button>
  );
}