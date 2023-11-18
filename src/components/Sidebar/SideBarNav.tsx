import { BasicExtensibleUiWidget } from "../../utils/types"

function SideBarNav({children, className}:BasicExtensibleUiWidget) {
  console.log(className);
  return (
    <ul className={className||''}>{children}</ul>
  )
}
export default SideBarNav