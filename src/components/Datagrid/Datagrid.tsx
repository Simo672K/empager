import { useState } from "react";
import DatagridBody from "./DatagridBody";
import DatagridCol from "./DatagridCol";
import DatagridHeader from "./DatagridHeader";
import DatagridRow from "./DatagridRow";
import { DGProps, DGSettings } from "./types";
import DatagridContext from "./DatagridSettings";

function Datagrid({ header, rowsContent }: DGProps) {
  const [dgSettings, setDgSettings] = useState<DGSettings>({
    selectAll: false,
  });

  return (
    <div>
      <DatagridContext.Provider value={dgSettings}>
        <DatagridHeader
          settings={
            setDgSettings as React.Dispatch<React.SetStateAction<DGSettings>>
          }
        >
          {header.map((cell, cellId) => (
            <DatagridCol key={cellId}>{cell.headerName}</DatagridCol>
          ))}
        </DatagridHeader>
        <DatagridBody>
          {rowsContent.map((content, id) => (
            <DatagridRow isChecked={dgSettings.selectAll!} key={id}>
              {header.map((cell, cellId) => (
                <DatagridCol key={cellId}>{content[cell.field]}</DatagridCol>
              ))}
            </DatagridRow>
          ))}
        </DatagridBody>
      </DatagridContext.Provider>
    </div>
  );
}
export default Datagrid;
