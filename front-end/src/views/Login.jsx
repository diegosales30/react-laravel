import { Link } from "react-router-dom";
import axiosApi from "../lib/api";
import { useStateContext } from "../contexts/ContextProvider";
import { useRef, useState } from "react";

import logo1 from "../assets/image/logo1.jpg";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setUser, setToken } = useStateContext();
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axiosApi
      .post("/login", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
      });
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="container-logo">
            <img className="logo" src={logo1} alt="logo" />
            <h1 className="title">Entrar em sua conta</h1>
          </div>
          {message && (
            <div className="alert">
              <p>{message}</p>
            </div>
          )}
          <input ref={emailRef} type="email" placeholder="Endereço de Email" />

          <input ref={passwordRef} type="password" placeholder="Senha" />
          <button className="btn btn-block">Login</button>
          <p className="message">
            não possui conta? <Link to="/signup">Fazer cadastro</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
