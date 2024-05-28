import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

const AddSiblingButton = () => {
  return (
    <div className="w-100">
      <Button className="button-gradient gradient-grey-white mt-8 m-auto d-flex gap-2">
        <div>
          <PlusOutlined />
        </div>
        Add Sibling
      </Button>
    </div>
  );
};

export default AddSiblingButton;
