import { BasicExtensibleUiWidget } from "../../utils/types"

interface TitleProps extends BasicExtensibleUiWidget{
  variant?: "h1"|"h2"|"h3"|"h4"|"h5"|"h6"
}

function Title({children, variant,className}: TitleProps) {
  let returnComponent;
  switch(variant){
    case "h2":
      returnComponent= <h1 className={`text-3xl font-bold mb-2 ${className??''}`}>{children}</h1>;
      break;
    case "h3":
      returnComponent= <h1 className={`text-2xl font-bold mb-2 ${className??''}`}>{children}</h1>;
      break;
    case "h4":
      returnComponent= <h1 className={`text-xl font-bold mb-2 ${className??''}`}>{children}</h1>;
      break;
    case "h5":
      returnComponent= <h1 className={`text-lg font-bold mb-2 ${className??''}`}>{children}</h1>;
      break;
    case "h6":
      returnComponent= <h1 className={`font-bold mb-2 ${className??''}`}>{children}</h1>;
      break;
    default:
      returnComponent= <h1 className={`text-4xl font-bold mb-2 ${className??''}`}>{children}</h1>;
      break;
  }
  return (
    returnComponent
  )
}
export default Title