import Card from "../Card/Card"
import Datagrid from "../Datagrid/Datagrid"
import { DGHeader } from "../Datagrid/types";
import Title from "../Title/Title"

const header: Array<DGHeader> =[
  {field:"id", headerName:"ID"},
  {field:"firstName", headerName:"First Name"},
  {field:"lastName", headerName:"Last Name"},
  {field:"phoneNumber", headerName:"Phone Number"},
  {field:"nie", headerName:"NIE"},
  {field:"ss", headerName:"Soguro Social"},
];
const rowsContent=[
  {id: 1, firstName: "Mohammed", lastName:"HAKMI", phoneNumber:"637788071", nie:"E4885698", ss:"45225896"},
  {id: 2, firstName: "Ahmed", lastName:"HAKMI", phoneNumber:"637788071", nie:"E4885698", ss:"45225896"},
  {id: 3, firstName: "Tayeb", lastName:"HAKMI", phoneNumber:"637788071", nie:"E4885698", ss:"45225896"},
];

function HPMainSection() {
  return (
    <section className="flex gap-4">
      <div className="basis-3/5">
        <Card className="h-96">
          <Title className="font-medium" variant="h4">Employees List</Title>
          <Datagrid header={header} rowsContent={rowsContent}/>
        </Card>
      </div>
      <div className="basis-2/5">
        <Card className="mb-4">
          <Title className="font-medium" variant="h4">Employees Number</Title>

        </Card>
        <Card>
          <Title className="font-medium" variant="h4">Customers</Title>

        </Card>
      </div>
    </section>
  )
}
export default HPMainSection