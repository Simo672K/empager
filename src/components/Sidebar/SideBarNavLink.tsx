function SideBarNavLink({children, active= false}: {children:React.ReactNode, active?: boolean}) {
  return (
    <li className="mb-2">
      <a href="#" className={`flex items-center hover:text-blue-700 hover:font-semibold${active && " text-blue-700 font-semibold"}`}>
        {children}
      </a>
    </li>
  )
}
export default SideBarNavLink