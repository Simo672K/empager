import { BasicExtensibleUiWidget } from "../../utils/types"

function Subtitle({children}: BasicExtensibleUiWidget) {
  return (
    <p className="text-slate-500">{children}</p>
  )
}
export default Subtitle