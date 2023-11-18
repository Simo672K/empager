interface ButtonProps {
  children: React.ReactNode;
  variant?: "white" | "primary";
}
function Button({ children, variant = "white" }: ButtonProps) {
  let buttonColor:String;
  switch(variant) {
    case 'primary':
      buttonColor= 'bg-blue-600 hover:bg-blue-500 active:hover:bg-blue-500 text-white';
      break;
    default:
      buttonColor= 'bg-white hover:bg-slate-50 active:hover:bg-slate-50';
      break;
  }
  return (
    <button  className={`${buttonColor} px-2 py-1 rounded group-first:rounded-full shadow-md font-medium flex items-center`}>
      {children}
    </button>
  );
}
export default Button;
