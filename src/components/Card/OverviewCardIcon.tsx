import { BasicExtensibleUiWidget } from "../../utils/types"


function OverviewCardIcon({children, className}: BasicExtensibleUiWidget) {
  return (
    <div className={`bg-blue-100 p-1 rounded-md w-fit ${className??''}`}>{children}</div>
  )
}
export default OverviewCardIcon