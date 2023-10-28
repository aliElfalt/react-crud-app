import Theme from "./Theme"
import { useDispatch, useSelector } from "react-redux"
import { searchAction } from "./store/searchReducer"
import { sidebarAction } from "./store/sidebarReducer"

function Navbar() {
  const sidebarState = useSelector(state => state.sidebar);
  const dispatch = useDispatch();
  return (
    <nav className="navbar bg-body-tertiary py-3">
      <div className="container justify-content-center justify-content-md-between">
        <button 
          className="navbar-toggler"
          style={{display: "none"}}
          onClick={() => dispatch(sidebarAction(!sidebarState))}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <button className="btn navbar-brand me-1">Dashboard</button>
        <Theme />
        <form className="d-flex mt-1" role="search" onSubmit={(e) => e.preventDefault()}>
          <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            onChange={(e) => dispatch(searchAction(e.target.value))}
          />
          <button className="btn btn-outline-success">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;