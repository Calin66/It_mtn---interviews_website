import { useState, useEffect } from "react";
import { signup, login, db, useAuth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";
const useForm = (log, callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const result = async () => {
        await signup(values.email, values.password).catch(function (error) {
          let errorCode = error.code;
          if (errorCode == "auth/email-already-in-use") {
            alert("Email deja inregistrat");
          }
        });
        const displayName = values.username;
        const auth = getAuth();
        const user = auth.currentUser;
        console.log(user);
        updateProfile(user, { displayName });
        navigate("/");
      };
      result();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
export const LoginForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      login(values.email, values.password).catch(function (error) {
        let errorCode = error.code;
        if (errorCode) alert(errorCode);
      });
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};
