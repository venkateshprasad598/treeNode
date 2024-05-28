import { useNavigate } from "react-router-dom";

const usePortfolioMap = () => {
  const navigate = useNavigate();
  const handleCreateNewRelationShip = () => {
    navigate("/subject-profile");
    console.log("handleCreateNreRelationShip");
  };
  return {handleCreateNewRelationShip};
};

export default usePortfolioMap;
