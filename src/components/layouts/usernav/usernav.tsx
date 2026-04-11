import { Outlet } from 'react-router-dom';
import './usernav.css';

const Usernav = () => {
  return (
    <>
    <div className="subnav-user-container">
        <div className="user-identicator">
            <p>Manuel Darío</p>
            <p>ID: 3107</p>
        </div>
        <div className="user-role">
            <p>Level: Admin</p>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Usernav;