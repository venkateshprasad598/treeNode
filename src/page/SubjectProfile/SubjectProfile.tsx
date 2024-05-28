import { Button, Space } from "antd";
import { useSubjectProfile } from "../../hooks/indes";

const SubjectProfile = () => {
  const {handleEditRootNode, handleEditSubNode} = useSubjectProfile();
  return (
    <div>
      <Space>
        <Button onClick={handleEditRootNode}>
          Edit root node
        </Button>
        <Button onClick={handleEditSubNode}>
          Edit sub node
        </Button>
      </Space>
      
    </div>
  );
};

export default SubjectProfile;
