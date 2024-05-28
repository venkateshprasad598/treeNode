import {useNavigate} from "react-router-dom";

const useSubjectProfile = () => {
  const navigate = useNavigate();
  const handleEditSubNode = () => {
    navigate("/edit-sub-profile");
  };
  const handleEditRootNode = () => {
    navigate("/edit-root-profile");
  };
  return {handleEditSubNode, handleEditRootNode};
};

export default useSubjectProfile;
