import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import useLogout from "../hooks/useLogout";

import 'react-toastify/dist/ReactToastify.css';
import logo1 from '../assets/image/logo1.jpg'
import { FiEdit } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import {MdLogout} from 'react-icons/md'

const Header = () => {
  const {user} = useStateContext();
  const { onLogout} = useLogout()

  return (  
    <header >
          <div >
            <Link to="/users">
              <img className="logo-header" src={logo1} alt="logo" />
            </Link>
          </div>
          <div className="container-profile">
            <div className="container-user">
              <FaUserAlt size={30} />
              {user.name}
            </div>
            <div className="container-btn">
              <Link className="btn-edit-profile" to={`/users/${user.id}`}><FiEdit size={17} color="#212121" />editar</Link>
              <a href="#" onClick={onLogout} ><MdLogout size={19} color="#212121"/>Sair</a>
            </div>
          </div>
        </header>
  );
}
 
export default Header;