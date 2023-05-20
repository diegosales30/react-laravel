import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";


const DefaultLayout = () => {
  const {token} = useStateContext();

  //caso o token não existir, redireciona para pagina de login
  if(!token) {
    return <Navigate to="login"/>
  }

  return ( 
    <div id="defaultLayout">
      <ToastContainer />
      <div className="content">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
   );
}
 
export default DefaultLayout;