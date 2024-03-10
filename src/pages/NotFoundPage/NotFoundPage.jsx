import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigation = useNavigate();

  useEffect(() => {
    setInterval(() => {
      navigation("/");
    }, 5000);
  }, []);

  return (
    <>
      <h1>404</h1>
    </>
  );
};

export default NotFoundPage;
