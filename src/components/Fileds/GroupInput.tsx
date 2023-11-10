import React from "react"


interface PropType {
  children: React.ReactNode,
}

function GroupInput({children}: PropType) {
  return (
    <div className="bg-white flex items-center px-4 py-1 border-2 border-gray-300 focus-within:border-blue-400 focus-within:shadow-[0_0_3px_4px_var(--tw-shadow-colored)] focus-within:shadow-blue-200 rounded">{children}</div>
  )
}
export default GroupInput