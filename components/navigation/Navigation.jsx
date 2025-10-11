import MobileNavbar from './MobileNavbar'
import Navbar from './Navbar'

export default function Navigation() {
  return (
    <div>
      <div className='hidden lg:block'> <Navbar /> </div>
      <div className='block lg:hidden'> <MobileNavbar /> </div>
    </div>
  )
}
