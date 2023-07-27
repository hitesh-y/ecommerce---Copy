import React, {  useEffect } from "react";
import { Navigate, useNavigate} from "react-router-dom";

const Protected = (props) => {
  const { Value } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("Token");
    if (!login) {
      navigate("/login");
    }
  });
  return (
     <>
        <Value/>
     </>
  );
};

export default Protected;
