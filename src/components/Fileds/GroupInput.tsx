import React from "react"


interface PropType {
  children: React.ReactNode,
}

function GroupInput({children}: PropType) {
  return (
    <div className="bg-white flex items-center px-4 py-1 border-2 rounded">{children}</div>
  )
}
export default GroupInput