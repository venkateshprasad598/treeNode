import { FunctionComponent } from "react";
import { SVGicons } from "../../../constants/SVGicons";
import { IfaSubjectStructureType } from "../../../types/subject/subjectStructure.types";
import SubjectDoughnut from "../../ECharts/Doughnut/SubjectDoughnut";
import SubjectCardDetails from "./SubjectCardDetails";
import AddChildButton from "../SiblingChildButtons/AddChildButton";

interface SubjectProfileCardProps {
  structure: IfaSubjectStructureType;
}

const SubjectProfileCard: FunctionComponent<SubjectProfileCardProps> = ({
  structure,
}) => {
  return (
    <div className="d-flex items-center">
      <div
        className={`entity-box subject-view-box ${
          structure?.role === "root"
            ? "mt-0 half-circle-end"
            : "half-circle-start"
        }  bg-pulseGrey-800 border-2 border-solid border-pulseGrey-700`}
      >
        {structure?.role === "root" && (
          <div className="connector-line connector-line-end connector-line-end-top connector-line-end-middle connector-line-end-bottom"></div>
        )}

        <div className="px-4">
          <div className="flex items-center justify-between w-full border-b border-pulseGrey-700 py-4">
            <div className="flex flex-col gap-1">
              <span className=" text-lg font-medium">ITL Master Account</span>
              <span className="bg-pulseYellow-300 w-fit	px-2 py-0.5 text-pulseYellow-600 font-medium rounded-lg">
                Master Account
              </span>
            </div>

            <div className="flex items-center gap-5">
              <span>{SVGicons.InfoIcon}</span>
              <span className="border border-solid border-pulseGrey-700 p-3 rounded-md">
                {SVGicons.BookMarkIcon}
              </span>
            </div>
          </div>

          <div className="py-4 flex flex-row justify-between gap-5">
            <div>
              <div className="flex flex-col">
                <span className="font-medium text-pulseGrey-100">
                  Total AUM
                </span>
                <span className="font-medium text-lg">$102.62 Billion</span>
              </div>

              <div className="mt-4 flex gap-10">
                <SubjectCardDetails
                  title={"Unrealised P&L"}
                  desc={"$102.62 Billion"}
                />
                <SubjectCardDetails
                  title={"Annual Return"}
                  desc={"$7.7%"}
                  isReturn={true}
                />
              </div>

              <div className="mt-4 flex gap-10">
                <SubjectCardDetails
                  title={"Realised P&L"}
                  desc={"$102.62 Billion"}
                />
                <SubjectCardDetails
                  title={"Monthly Return"}
                  desc={"$7.7%"}
                  isReturn={true}
                />
              </div>
            </div>

            <div>
              <SubjectDoughnut />
            </div>
          </div>
        </div>
      </div>
      {!structure?.children?.length && <AddChildButton />}
    </div>
  );
};

export default SubjectProfileCard;
