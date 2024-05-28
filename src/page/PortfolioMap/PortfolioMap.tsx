import { DownOutlined } from "@ant-design/icons";
import { Button, Col, Row, Select } from "antd";
import usePortfolioMap from "../../hooks/usePortfolioMap.hook";
import SubjectStructure from "../subjectStructure/SubjectStructure";

const PortfolioMap = () => {
  const { handleCreateNewRelationShip } = usePortfolioMap();

  return (
    <div>
      <Row justify={"space-between"}>
        <Col>
          <Select
            size="large"
            suffixIcon={
              <DownOutlined style={{ color: "#fff", pointerEvents: "none" }} />
            }
            placeholder="Select Account"
          />
        </Col>
        <Col>
          <Button
            size="large"
            type="primary"
            onClick={handleCreateNewRelationShip}
          >
            + Create Relationship
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <SubjectStructure />
        </Col>
      </Row>
    </div>
  );
};

export default PortfolioMap;
