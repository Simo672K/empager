import { useEffect, useState } from "react"
import { BasicExtensibleUiWidget } from "../../utils/types"
import DatagridCheckbox from "./DatagridCheckbox"

interface DGRowProps extends BasicExtensibleUiWidget{
  isChecked: boolean
}

function DatagridRow({children, isChecked}: DGRowProps) {
  const [checked, setChecked]= useState<boolean>(false)

  useEffect(()=>{
    setChecked(isChecked);
  },[isChecked])

  return (
    <div className={`flex items-center border-b-2 hover:bg-slate-50 ${checked && "bg-slate-50"}`}>
      <DatagridCheckbox checked={checked} setChecked={setChecked}/>
      {children}
    </div>
  )
}
export default DatagridRow