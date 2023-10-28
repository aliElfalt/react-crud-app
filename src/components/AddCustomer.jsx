import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createCustomersAction } from "./store/customersReducer";

function AddCustomer() {
  const dispatch = useDispatch();
  const customersData = useSelector(state => state.customers);
  let customerData = {
    id: customersData.length + 1
  };
  const submitHandler = () => {
    dispatch(createCustomersAction("add", customerData));
  }
  const inputHandler = (e) => {
    customerData[e.target.id] = e.target.value;
  }
  return (
    <form className="row g-3 mt-5 mx-2">
      <div className="col-md-6">
        <label htmlFor="firstName" className="form-label">First Name:</label>
        <input type="text" className="form-control" id="firstName" placeholder="Ali..." 
          onChange={inputHandler}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="lastName" className="form-label">Last Name:</label>
        <input type="text" className="form-control" id="lastName" placeholder="Hassan..." 
          onChange={inputHandler}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="ali@gmail.com..." 
          onChange={inputHandler}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="telephone" className="form-label">Telephone:</label>
        <input type="number" className="form-control" id="telephone" placeholder="011777990..." 
          onChange={inputHandler}
        />
      </div>
      <div>
        <div className="col-md-6">
          <label htmlFor="age" className="form-label">Age:</label>
          <input type="number" className="form-control" id="age" placeholder="Your Age: ..." 
            onChange={inputHandler}
          />
        </div>
      </div>
      <div>
        <div className="col-md-6">
          <label htmlFor="country" className="form-label">Country:</label>
          <input type="text" className="form-control" id="country" placeholder="Your Country: ..." 
            onChange={inputHandler}
          />
        </div>
      </div>
      <div>
        <div className="col-md-6">
          <label htmlFor="gender" className="form-label">Gender:</label>
          <select id="gender" className="form-select" defaultValue={"Choose here ..."} onChange={inputHandler} >
            <option hidden disabled>Choose here ...</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
      <div>
        <Link to="/" id="add-customer" className="btn btn-primary" onClick={submitHandler}>Add Customer</Link>
      </div>
    </form>
  );
}

export default AddCustomer;