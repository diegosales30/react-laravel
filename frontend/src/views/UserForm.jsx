import { FaUserPlus } from "react-icons/fa";
import useEdit from "../hooks/useEdit.jsx";
import Loading from "../components/Loading.jsx";

export default function UserForm() {
  const { user, setUser, errors, onSubmit, loading} = useEdit();

  return (
    <>
      {user.id && <h1>Atualizar usuário: {user.name}</h1>}
      {!user.id && <h1>Adicionar usuário</h1>}
      <div className="card animated fadeInDown">
        {loading && <div className="loadin-center">
            <Loading />
          </div>}
        {errors && (
          <div className="alert">
            {Object.keys(errors).map((key) => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        )}
        {!loading && (
          <form onSubmit={onSubmit}>
            <input
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Nome"
            />
            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Senha"
            />
            <input
              type="password"
              onChange={(e) =>
                setUser({ ...user, password_confirmation: e.target.value })
              }
              placeholder="Confirmar senha"
            />
            <button  className="btn-add-new">
              Adicionar <FaUserPlus className="svg" size={20} />
            </button>
          </form>
        )}
      </div>
    </>
  );
}
