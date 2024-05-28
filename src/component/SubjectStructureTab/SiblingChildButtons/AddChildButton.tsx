import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

const AddChildButton = () => {
  return (
    <div className="ml-4 mt-6">
      <Button className="button-gradient gradient-grey-white d-flex gap-2">
        <div>
          <PlusOutlined />
        </div>
        Add Child
      </Button>
    </div>
  );
};

export default AddChildButton;
