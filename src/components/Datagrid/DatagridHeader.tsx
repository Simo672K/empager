import { SetStateAction, useEffect, useState } from "react";
import { BasicExtensibleUiWidget } from "../../utils/types";
import DatagridCheckbox from "./DatagridCheckbox";
import { DGSettings } from "./types";

interface DGHeaderProps extends BasicExtensibleUiWidget {
  settings: React.Dispatch<SetStateAction<DGSettings>>;
}

function DatagridHeader({ children, settings }: DGHeaderProps) {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    switch (checked) {
      case true:
        settings({ selectAll: true });
        break;
      default:
        settings({ selectAll: false });
        break;
    }
  }, [checked]);

  return (
    <div className={`flex items-center border-b-2 font-medium uppercase}`}>
      <DatagridCheckbox setChecked={setChecked} />
      {children}
    </div>
  );
}
export default DatagridHeader;
