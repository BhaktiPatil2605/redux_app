import React from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const amount=useSelector(state=>state.amount); //using this hook we can read the state value which initially we have set to zero
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">State Bank</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link">About</a>
                </li>
                
            </ul>
            <button disabled type="button" class="btn btn-primary">Your Balance : {amount}</button>
            </div>
        </div>
    </nav>
    </div>
  )
}
// eslint-disable-next-line

export default Navbar
