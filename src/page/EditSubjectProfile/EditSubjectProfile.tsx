import { Button, Col, Row } from "antd";
import { useEditSubjectProfile } from "../../hooks/indes";
import TimeLine from "./TimeLine/TimeLine";

const EditSubjectProfile = () => {
  const {handleClickBack, handleClickSave} = useEditSubjectProfile();
  const timelineData = [
    {id: "1", label: "Relation Info"},
    {id: "2", label: "Wealth Calculator"},
    {id: "3", label: "IPS Guidelines"},
    {id: "4", label: "IPS Exclusions"},
    {id: "5", label: "Goals"},
  ];

  return (
    <>
      <Row
        justify={"space-between"}
        align={"middle"}
        className="pb-2 border-b border-border-color">
        <Col>
          <Button onClick={handleClickBack}> Back</Button>
        </Col>
        <Col>
          <h1 className="text-lg font-semibold">Modify Node</h1>
        </Col>
        <Col>
          <Button onClick={handleClickSave} type="primary">
            Save
          </Button>
        </Col>
      </Row>
      <Row>
        <Col
          className="border-r border-border-color h-full px-2 overflow-auto"
          span={4}>
          <h2 className="text-xl font-semibold">Setup Checklist</h2>
          <div className="mt-4">
            <TimeLine timelineList={timelineData}></TimeLine>
          </div>
        </Col>
        <Col span={20} className="overflow-auto">
          2
        </Col>
      </Row>
    </>
  );
};

export default EditSubjectProfile;
