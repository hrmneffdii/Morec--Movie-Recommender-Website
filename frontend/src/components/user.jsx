import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const User = ({nama}) => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('pageNumber')
    navigate('/login')
  }

  return (
    <div>
     <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
        <button type="button" className="flex items-center w-full  font-medium  hover:text-gray-800 text-gray-600 ">
            {nama}
            <svg className="ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-lg p-2 before:absolute top-full md:border before:-top-5 before:start-0 before:w-full before:h-5">           
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm hover:text-gray-600 text-gray-800 " href="/login">
                <button onClick={() => handleLogOut()}>
                  log out
                </button>
            </a>
        </div>
     </div>
    </div>
  )
}

User.propTypes = {
  nama: PropTypes.string
}

export default User
