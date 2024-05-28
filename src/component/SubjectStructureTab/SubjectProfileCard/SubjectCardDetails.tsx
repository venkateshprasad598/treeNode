import { FunctionComponent } from "react";

interface SubjectCardDetailsProps {
  title: string;
  desc: string | number;
  isReturn?: boolean | null;
}
const SubjectCardDetails: FunctionComponent<SubjectCardDetailsProps> = ({
  title,
  desc,
  isReturn,
}) => {
  return (
    <div className="flex flex-col">
      <span className="font-normal text-pulseGrey-100">{title}</span>
      <span className={`font-medium ${isReturn && "text-pulseGreen-500"}`}>
        {desc}
      </span>
    </div>
  );
};

export default SubjectCardDetails;
