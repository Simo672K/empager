import DatagridBody from "./DatagridBody";
import DatagridCol from "./DatagridCol";
import DatagridHeader from "./DatagridHeader";
import DatagridRow from "./DatagridRow";
import { DGProps } from "./types";


function Datagrid({header, rowsContent}: DGProps) {

  return (
    <div>
      <DatagridHeader>
        {header.map((cell, id)=>
            <DatagridCol key={id}>{cell.headerName}</DatagridCol>
          )}
      </DatagridHeader>
      <DatagridBody>
        {rowsContent.map((content, id)=>
          <DatagridRow key={id}>
            {
              header.map((cell, cellId)=>
                <DatagridCol key={cellId}>{content[cell.field]}</DatagridCol>
              )
            }
          </DatagridRow>
          )}
      </DatagridBody>
    </div>
  );
}
export default Datagrid;
