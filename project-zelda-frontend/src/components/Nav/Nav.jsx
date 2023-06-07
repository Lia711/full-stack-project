import React from 'react'
import "./Nav.scss"
import zeldaLogo from "../../assets/images/38cb0c44e7fa9ec8dc6f1e8da10a5b3e.svg"
import { Link} from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <section className="Nav">
        <div className="logo-container">
          <img className="logo" src={zeldaLogo} alt="logo" />
        </div>

        <Link to="/">
          <h1 className='header'>Home</h1>
        </Link>

        <Link to="/games">
          <h1 className='header'>All Games</h1>
        </Link>
      </section>
    </>
  )
}

export default Nav