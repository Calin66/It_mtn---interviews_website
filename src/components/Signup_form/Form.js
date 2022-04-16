import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormLogin from "./FormLogin";
import "./Form.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase";
const Form = () => {
  const [login, setLogin] = useState(false);
  const [submit, setSubmit] = useState(false);
  const currentUser = useAuth();
  const submitForm = () => {
    setSubmit(true);
    if (!login) {
      alert("Contul dumneavoastra a fost creat");
      navigate("/");
    }
  };
  const toLogin = () => {
    if (login) submitForm();
    else setLogin(true);
  };

  let navigate = useNavigate();
  if (currentUser) navigate("/");
  return (
    <div className="container-sign-login">
      <div className="form-container">
        <Link to="/" className="close-btn">
          <AiOutlineClose
            style={{
              fontSize: "30px",
            }}
          />
        </Link>
        <div className="form-content-left">
          <img src="img/img-2.svg" alt="spaceship" className="form-img" />
        </div>
        {!login ? (
          <FormSignup toLogin={toLogin} submitForm={submitForm} />
        ) : (
          <FormLogin toLogin={toLogin} />
        )}
      </div>
    </div>
  );
};

export default Form;
