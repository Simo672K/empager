import { BasicExtensibleUiWidget } from "../../utils/types"

function Breadcrumb({children}: BasicExtensibleUiWidget) {
  return (
    <nav className="mb-2 rounded">
      <ul className="flex">
        {children}
      </ul>
    </nav>
  )
}
export default Breadcrumb