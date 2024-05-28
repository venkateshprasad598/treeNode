import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setTest } from "../redux/const/test.const";

const Login = () => {
  const dispatch = useDispatch();
  dispatch(setTest({welcome: "swaraj"}));

  return (
    <div>
      <Link to="/dashboard">Login</Link>
    </div>
  );
};

export default Login;
