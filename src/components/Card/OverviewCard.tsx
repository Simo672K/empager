import Card from "./Card"
import OverviewCardIcon from "./OverviewCardIcon"

function OverviewCard({icon, title, children}: {icon:React.ReactNode, title:string, children:React.ReactNode}) {
  return (
    <Card className="border-l-8 border-blue-500">
      <div className="flex ">
        <OverviewCardIcon className="me-4">
          {icon}
        </OverviewCardIcon>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <div>
        <h2 className="text-3xl font-bold mt-1 text-end">
          {children}
        </h2>
      </div>
    </Card>
  )
}
export default OverviewCard