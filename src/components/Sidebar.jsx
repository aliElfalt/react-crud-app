import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sidebarAction } from "./store/sidebarReducer";

function Sidebar() {
  const dispatch = useDispatch();
  const sidebarClass = useSelector(state => state.sidebar);
  const [show, setShow] = useState(!sidebarClass);
  const toggleClassHandler = () => {
    dispatch(sidebarAction(!sidebarClass));
    show ? setShow(false) : setTimeout(() => setShow(true), 500);
  }
  const location = useLocation();
  return (
    <div className={`position-relative ${sidebarClass ? "" : "show"}`}>
      <div className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark h-100 position-relative sidebar ${sidebarClass ? "small-sidebar" : ""}`}>
        <button className="btn fs-5" onClick={toggleClassHandler}>
          <i className="bi bi-x-circle text-white"></i>
        </button>
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 text-white btn">
          <i className="bi bi-lightning-charge fs-2 me-3"></i>
          <span className={`fs-4 ${show ? "" : "d-none"}`}>Sidebar</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" 
              className={`nav-link d-flex align-items-center text-white ${location.pathname === "/" ? "active" : ""}`}
            >
              <i className="bi bi-house-door fs-5 me-2"></i>
              <span className={show ? "" : "d-none"}>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/addCustomer" 
              className={`nav-link d-flex align-items-center text-white ${location.pathname === "/addCustomer" ? "active" : ""}`}
            >
              <i className="bi bi-person-circle fs-5 me-2"></i>
              <span className={show ? "" : "d-none"}>Add Customers</span>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <button className="d-flex align-items-center text-white btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" className="rounded-circle me-2" style={{width: "25px"}} />
            <span className={show ? "" : "d-none"}><strong>mdo</strong></span>
          </button>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><button className="dropdown-item">New project...</button></li>
            <li><button className="dropdown-item">Settings</button></li>
            <li><button className="dropdown-item">Profile</button></li>
            <li><hr className="dropdown-divider" /></li>
            <li><button className="dropdown-item">Sign out</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;