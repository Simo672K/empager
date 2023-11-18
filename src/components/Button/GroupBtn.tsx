function GroupBtn({children, className}:{children: React.ReactNode, className?: String}) {
  return (
    <div className={(className || ' ') + " flex [&>*:first-child]:rounded-none [&>*:first-child]:rounded-l [&>*:first-child]:border-r [&>*:last-child]:rounded-none [&>*:last-child]:rounded-r"}>{children}</div>
  )
}
export default GroupBtn