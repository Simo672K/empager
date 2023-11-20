import { BasicExtensibleUiWidget } from "../../utils/types"

function Title({children, className}: BasicExtensibleUiWidget) {
  return (
    <h1 className={`text-4xl font-bold mb-2 ${className??''}`}>{children}</h1>
  )
}
export default Title