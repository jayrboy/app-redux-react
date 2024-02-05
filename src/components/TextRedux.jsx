import { useSelector } from 'react-redux'

const TextRedux = () => {
  //TODO:
  let { user } = useSelector((state) => ({ ...state }))
  console.log('user:', user)

  return <h2>user: {user.value}</h2>
}
export default TextRedux
