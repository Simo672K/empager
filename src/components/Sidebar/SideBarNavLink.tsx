function SideBarNavLink({children}: {children:React.ReactNode}) {
  return (
    <li className="mb-2">
      <a href="#" className="flex items-center hover:text-blue-700 hover:font-semibold">
        {children}
      </a>
    </li>
  )
}
export default SideBarNavLink