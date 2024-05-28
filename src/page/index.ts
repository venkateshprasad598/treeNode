import { lazy } from "react";

const FallBack404 = lazy(() => import("./FallBack404"));
const Login = lazy(() => import("./Login"));
const PortfolioMap = lazy(() => import("./PortfolioMap/PortfolioMap"));
const SubjectProfile = lazy(() => import("./SubjectProfile/SubjectProfile"));
const EditSubSubjectProfile = lazy(
  () => import("./EditSubSubjectProfile/EditSubSubjectProfile")
);
const EditSubjectProfile = lazy(
  () => import("./EditSubjectProfile/EditSubjectProfile")
);

export {
  EditSubjectProfile,
  EditSubSubjectProfile,
  FallBack404,
  Login,
  PortfolioMap,
  SubjectProfile
};

