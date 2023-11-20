import { BasicExtensibleUiWidget } from "../../utils/types"

function Breadcrumb({children}: BasicExtensibleUiWidget) {
  return (
    <nav className="mb-4 p-4 rounded">
      <ul className="flex">
        {children}
      </ul>
    </nav>
  )
}
export default Breadcrumb