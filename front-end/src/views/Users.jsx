import { Link } from "react-router-dom";
import {  FaUserPlus } from "react-icons/fa";
import useDelete from "../hooks/useDelete";
import Loading from "../components/Loading";
import UserList from "../components/UserList";

const Users = () => {
  const {loading} = useDelete();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Usuários:</h1>
        <Link className="btn-add" to="/users/new">
          <FaUserPlus />
        </Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Criação</th>
              <th>Ações</th>
            </tr>
          </thead>
          {loading && <Loading />}
          {!loading && <UserList />}
        </table>
      </div>
    </div>
  );
};

export default Users;
