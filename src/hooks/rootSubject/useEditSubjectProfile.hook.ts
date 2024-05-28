import { useNavigate } from "react-router-dom";

const useEditSubjectProfile = () => {
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate("/subject-profile");
  };
  const handleClickSave = () => {
    console.log("save");
  };
  return {
    handleClickBack,
    handleClickSave,
  };
};

export default useEditSubjectProfile;
