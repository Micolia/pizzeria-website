import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notfoundblock'>
      <Link to='/home'><button className='home-button'>Me perdí, llévame a la página principal</button></Link>
    </div>
  )
}

export default NotFound
