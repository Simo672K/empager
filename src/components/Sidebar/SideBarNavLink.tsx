import { LinkProps } from "../../utils/types"

function SideBarNavLink({children, active= false, className}: LinkProps) {
  return (
    <li className="mb-2">
      <a href="#" className={`flex items-center hover:text-blue-700 hover:font-semibold ${active && " text-blue-700 font-semibold" + (className ?? '')}`}>
        {children}
      </a>
    </li>
  )
}
export default SideBarNavLink