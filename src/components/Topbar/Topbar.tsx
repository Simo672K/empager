import Search from "../Search/Search"
import TopbarDropdown from "./TopbarDropdown"


function Topbar() {
  return (
    <nav className="bg-white border-b-2 py-3 px-8 flex items-center">
      <Search />
      <TopbarDropdown/>
    </nav>
  )
}
export default Topbar