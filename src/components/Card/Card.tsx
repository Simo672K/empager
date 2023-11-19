import { BasicExtensibleUiWidget } from "../../utils/types"

function Card({children, className}:BasicExtensibleUiWidget) {
  return (
    <div className={`bg-white px-6 py-4 rounded shadow ${className??''}`}>{children}</div>
  )
}
export default Card