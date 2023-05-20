import { useStateContext } from "../contexts/ContextProvider";
import axiosApi from "../lib/api";


const useLogout = () =>  {
  const {setUser, setToken} = useStateContext();

  const onLogout = (e) => {
    e.preventDefault();
    axiosApi.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
  };

  return {
    onLogout
  }
}

export default useLogout;