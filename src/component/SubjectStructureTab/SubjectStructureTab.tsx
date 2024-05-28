import { ifaStructureDetails } from "../../constants/ifaStructure/ifsStructure.const";
import SubjectNodeView from "./SubjectNodeView";
import "./SubjectStructureTab.css";

const SubjectStructureTab = () => {
  return (
    <>
      <div className="prospect-wrapper-border entity-view-structure-wrapper  team-entity px-3">
        <SubjectNodeView
          structure={ifaStructureDetails}
          childrenLength={ifaStructureDetails?.children?.length}
        />
      </div>
    </>
  );
};

export default SubjectStructureTab;
