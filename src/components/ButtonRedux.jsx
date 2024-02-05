import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/userSlice'

const ButtonRedux = () => {
  //TODO:
  let dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(login())}>Redux Login</button> &nbsp;
      <button onClick={() => dispatch(logout())}>Redux Logout</button>
    </div>
  )
}
export default ButtonRedux
