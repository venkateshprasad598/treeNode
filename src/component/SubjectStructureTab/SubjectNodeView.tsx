import { FunctionComponent } from "react";
import "../../page/subjectStructure/subjectStructure.css";
import {
  IfaSubjectChildrenType,
  IfaSubjectStructureType,
} from "../../types/subject/subjectStructure.types";
import SubjectProfileCard from "./SubjectProfileCard/SubjectProfileCard";
import { Button } from "antd";
import AddSiblingButton from "./SiblingChildButtons/AddSiblingButton";
import AddChildButton from "./SiblingChildButtons/AddChildButton";

interface SubjectNodeViewProps {
  structure: IfaSubjectStructureType;
  childrenLength: number;
  childIndex?: number;
}

const SubjectNodeView: FunctionComponent<SubjectNodeViewProps> = ({
  structure,
  childrenLength,
  childIndex,
}) => {
  const isNext =
    childIndex !== undefined ? childIndex < childrenLength - 1 : false;
  const isLast = childIndex !== undefined ? childrenLength - 1 : false;

  const entityViewClass = `entity-view d-flex ${
    structure?.role === "root" ? "" : "node-margin-left"
  } node-child-inner`;

  const entityBoxClass = `entity-box-wrapper ${
    childIndex === 0 ? "is-first" : ""
  } ${childIndex === isLast ? "is-last" : ""} ${!isNext ? "no-next-node" : ""}
${structure?.role === "root" ? "is-parent" : ""} 
${structure?.type === "individual" ? "is-individual" : ""} ${
    structure?.type === "entity" ? "is-entity" : ""
  }
${structure?.type === "" ? "blank-node" : ""} `;

  return (
    <div className={entityViewClass}>
      <div className={entityBoxClass}>
        <>
          <SubjectProfileCard structure={structure} />

          {structure?.role !== "root" && (
            <>
              <AddSiblingButton />
            </>
          )}

          {structure?.role !== "root" && structure?.children?.length > 0 && (
            <>
              <div className="add-entity-wrapper">
                <div className="add-entity"></div>
              </div>
            </>
          )}
        </>
      </div>

      {structure?.children?.length ? (
        <div className="node-child-wrapper">
          {structure?.children?.map(
            (child: IfaSubjectChildrenType, childIndex: number) => (
              <>
                <SubjectNodeView
                  key={child?.name}
                  structure={child}
                  childIndex={childIndex}
                  childrenLength={structure?.children?.length}
                />
              </>
            )
          )}
        </div>
      ) : null}
    </div>
  );
};

export default SubjectNodeView;
