function SideBarNavLink({children}: {children:React.ReactNode}) {
  return (
    <li className="mb-2">
      <a href="#" className="flex items-center">
        {children}
      </a>
    </li>
  )
}
export default SideBarNavLink