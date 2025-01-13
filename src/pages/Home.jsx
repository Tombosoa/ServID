import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Home = () => {
    const navigate = useNavigate();

  const redirectToLogin = useCallback(async () => {
    navigate("/login");
  }, [navigate]);

  return (
    <>
      <div className="home">
        <h1 className="title">
          <span className="blue">Firebase App</span> 
        </h1>
        <button className="dashboard-btn" onClick={redirectToLogin}>
          Try &nbsp;<span className="arrow">→</span>
        </button>
      </div>
    </>);
}
export default Home;