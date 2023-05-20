import { useEffect, useState } from "react";
import axiosApi from "../lib/api";
import { toast } from "react-toastify";


const useDelete = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  //att pagina
  useEffect(()=> {
    getUsers()
  }, []);

  //deleta usuarios
      const onDeleteClick = user => {
      if (!window.confirm("Tem certeza que deseja deletar esse usuário?")) {
        return
      }
      axiosApi.delete(`/users/${user.id}`)
        .then(() => {
          toast.success('Usuário deletado com sucesso')
          getUsers()
        })
      }
  

  //get dos usuarios
  const getUsers = () => {
    setLoading(true)
    axiosApi.get('/users')
      .then(({ data }) => {
        setLoading(false)
        setUsers(data.data)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return {
    users,
    loading,
    onDeleteClick

  }
}
export default useDelete;