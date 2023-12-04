import { useContext } from "react";
import { ApiProvider } from "../ContextProvider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const Private = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(ApiProvider);
  if (loading) {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login" replace></Navigate>;
};

export default Private;
