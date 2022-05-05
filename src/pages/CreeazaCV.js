import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreeazaCV.css";
const Postare = () => {
  const [count, setCount] = useState(0);
  const [photoPostC, setPhotoPostC] = useState();
  const [values, setValues] = useState({
    nume: "",
    tproblema: "",
    descriere: "",
    grad: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setPhotoPostC(e.target.files);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="container-creeazapostare">
      <h1 id="h1-crp">Creaza cv</h1>
      <div className="cp-fields">
        <form onSubmit={handleSubmit} className="cp-form-fields" noValidate>
          <div className="cp-field">
            <label>Nume</label>
            <input
              placeholder=""
              value={values.titlu}
              onChange={handleChange}
              name="Nume"
            />
          </div>
          <div className="cp-field">
            <label>Prenume</label>
            <input
              placeholder=""
              value={values.titlu}
              onChange={handleChange}
              name="Prenume"
            />
          </div>
          <div className="cp-field">
            <label>Varsta</label>
            <input
              placeholder=""
              value={values.titlu}
              onChange={handleChange}
              name="Varsta"
            />
          </div>
          <div className="cp-field">
            <label>Numar de Telefon</label>
            <input
              placeholder=""
              value={values.titlu}
              onChange={handleChange}
              name="Numar de Telefon"
            />
          </div>
          <div className="cp-field">
            <label>Adresa de Email</label>
            <input
              placeholder=""
              value={values.titlu}
              onChange={handleChange}
              name="Adresa de Email"
            />
          </div>
          <div className="cp-field">
            <label>Adresa</label>
            <input
              placeholder=""
              value={values.titlu}
              onChange={handleChange}
              name="Adresa"
            />
          </div>
          <div className="cp-field">
            <label>Oras</label>
            <input
              placeholder=""
              value={values.titlu}
              onChange={handleChange}
              name="Oras"
            />
          </div>
          <div className="cp-field">
            <label>Sex</label>
            <select value={values.tproblema} name="gen" onChange={handleChange}>
              <option value="intrebari">Masculin</option>
              <option value="propuneri">Feminin</option>
              <option value="probleme">Ma abtin</option>
            </select>
          </div>
          <div className="cp-field">
            <label>Adauga poze/video</label>
            <input
              type="file"
              style={{ marginTop: "2vh" }}
              multiple
              onChange={handleImageChange}
              name="pozeVideo"
            />
          </div>
          <div className="cp-field">
            <label>Descriere</label>
            <textarea
              style={{ marginTop: "1vh", height: "10vh", padding: " 5px 10px" }}
              value={values.descriere}
              name="descriere"
              onChange={handleChange}
              placeholder=""
            ></textarea>
          </div>
          <div className="cp-field">
            <label>Experienta de Lucru</label>
            <textarea
              style={{ marginTop: "1vh", height: "10vh", padding: " 5px 10px" }}
              value={values.descriere}
              name="Experienta"
              onChange={handleChange}
              placeholder=""
            ></textarea>
          </div>
          <div className="cp-field">
            <label>Educatie si Calificari</label>
            <textarea
              style={{ marginTop: "1vh", height: "10vh", padding: " 5px 10px" }}
              value={values.descriere}
              name="descriere"
              onChange={handleChange}
              placeholder=""
            ></textarea>
          </div>
          <div className="cp-field">
            <label>Interese</label>
            <textarea
              style={{ marginTop: "1vh", height: "10vh", padding: " 5px 10px" }}
              value={values.descriere}
              name="interese"
              onChange={handleChange}
              placeholder=""
            ></textarea>
          </div>
          <div className="cp-field">
            <label>Abilitati</label>
            <textarea
              style={{ marginTop: "1vh", height: "10vh", padding: " 5px 10px" }}
              value={values.descriere}
              name="abilitati"
              onChange={handleChange}
              placeholder=""
            ></textarea>
          </div>
          {/* <div className="cp-field">
            <label>Categorie</label>
          </div> */}
          <button className="creeaza-postare" type="submit">
            Creeaza CV
          </button>
        </form>
      </div>
    </div>
  );
};

export default Postare;
