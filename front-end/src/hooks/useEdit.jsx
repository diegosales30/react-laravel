import { useEffect, useState } from "react"
import axiosApi from "../lib/api"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom";

const useEdit = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(false)

  if (id) {
    useEffect(() => {
      setLoading(true);
      axiosApi
        .get(`/users/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setUser(data);
        })
        .catch(() => {
          setLoading(false);
        });
    }, []);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (user.id) {
      axiosApi.put(`/users/${user.id}`, user)
        .then(() => {
          toast.success('Informações atualizadas com sucesso')
          navigate('/users')
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
    } else {
      axiosApi.post('/users', user)
        .then(() => {
          toast.success('Novo usuário adicionado com sucesso')
          navigate('/users')
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
    }
  }

  return {
    user,
    setUser,
    errors,
    setErrors,
    onSubmit,
    loading,
    setLoading
  }
}
export default useEdit;