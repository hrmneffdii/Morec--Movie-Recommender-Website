import PropTypes from 'prop-types'
import User from './user'

const Navbar = ({nama}) => {
  return (
    <nav className='flex justify-between items-center'>
      <div className='text-2xl font-light'>
        Morec
      </div>
      <div className="flex items-center gap-x-2 font-medium text-black text-sm" href="#">
          <svg className="flex-shrink-0 w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
           <User nama = {nama}/> 
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  nama: PropTypes.string
}

export default Navbar
