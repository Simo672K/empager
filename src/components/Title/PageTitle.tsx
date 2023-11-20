import { BasicExtensibleUiWidget } from "../../utils/types";
import Subtitle from "./Subtitle";
import Title from "./Title";

interface PTitleProps extends BasicExtensibleUiWidget {
  title: string;
  subtitle?: string;
}

function PageTitle({ title, subtitle }: PTitleProps) {
  return (
    <div className="mb-8">
      <Title className="mb-0">{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </div>
  );
}
export default PageTitle;
