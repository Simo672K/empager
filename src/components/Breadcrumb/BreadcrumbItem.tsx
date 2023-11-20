interface BCIProps {
  children?: React.ReactNode;
  linkTo?: string;
  active?: boolean;
}

function BreadcrumbItem({ children, linkTo = "", active = false }: BCIProps) {
  return (
    <li className="font-medium relative cursor-default me-8 pe-1 last-of-type:after:content-none after:absolute after:top-1/2 after:-right-1/2 after:-translate-y-1/2 after:bg-BCItemArrow after:w-4 after:h-4 after:bg-no-repeat after:bg-center">
      {active ? (
        children
      ) : (
        <a className="text-blue-600" href={linkTo}>
          {children}
        </a>
      )}
    </li>
  );
}
export default BreadcrumbItem;
