interface ChildProps {
  children?: React.ReactNode
}

interface ClassNameProps{
  className?: string | undefined
}

interface BasicExtensibleUiWidget extends ChildProps, ClassNameProps{}

interface LinkProps extends ChildProps, ClassNameProps{
  active?: boolean
}

interface DropdownProps extends BasicExtensibleUiWidget {
  trigger?: React.ReactNode | undefined
  triggerClassName?: string | undefined
  menuClassName?: string | undefined
}

export type { ChildProps as ChildProp, ClassNameProps, LinkProps, BasicExtensibleUiWidget, DropdownProps}