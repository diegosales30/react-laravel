import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosApi from "../lib/api";
import { useStateContext } from "../contexts/ContextProvider";
import moment from "moment";
import logo1 from "../assets/image/logo1.jpg";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const dateRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const [errors, setErrors] = useState(null);
  const { setUser, setToken } = useStateContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      date: dateRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    const dateOfBirth = moment(payload.date, "YYYY-MM-DD");
    const today = moment();
    const age = today.diff(dateOfBirth, "years");

    if (age < 18) {
      // Exibir mensagem de erro ou tomar alguma ação específica para cancelar o cadastro
      toast.error("Você deve ter mais de 18 anos para se cadastrar.");
      return;
    }
    axiosApi
      .post("/signup", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <ToastContainer />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="container-logo">
            <img className="logo" src={logo1} alt="logo" />
            <h1 className="title">Cadastrar nova conta</h1>
          </div>
          {errors && (
            <div className="alert">
              {Object.keys(errors).map((key) => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          )}
          <input ref={nameRef} type="text" placeholder="Nome Completo" />

          <input ref={emailRef} type="email" placeholder="Endereço de Email" />
          <input required type="date" ref={dateRef} />
          <input ref={passwordRef} type="password" placeholder="Senha" />

          <input
            ref={passwordConfirmationRef}
            type="password"
            placeholder="Confirmar senha"
          />

          <button className="btn btn-block">Cadastrar</button>
          <p className="message">
            Já possui conta? <Link to="/login">Fazer Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
