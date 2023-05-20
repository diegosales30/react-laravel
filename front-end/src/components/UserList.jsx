import { FaUserEdit, FaUserMinus } from "react-icons/fa";
import useDelete from "../hooks/useDelete";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const UserList = () => {
  const { users, onDeleteClick } = useDelete();
  const { user } = useStateContext();

  return (
    <tbody>
      {users.map((userItem) => (
        <tr key={userItem.id}>
          <td>{userItem.id}</td>
          <td>{userItem.name}</td>
          <td>{userItem.email}</td>
          <td>{userItem.created_at}</td>
          <td>
            <Link className="btn-edit" to={`/users/${userItem.id}`}>
              <FaUserEdit />
            </Link>
            &nbsp;
            {user && user.id !== userItem.id && (
              <button
                onClick={() => onDeleteClick(userItem)}
                className="btn-delete"
              >
                <FaUserMinus />
              </button>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UserList;