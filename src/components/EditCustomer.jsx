import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { createCustomersAction } from "./store/customersReducer"

function EditCustomer() {
  const {customerId} = useParams();
  const dispatch = useDispatch();
  let customersData = useSelector(state => state.customers);
  const customerData = customersData[customerId - 1];
  const [firstName, setFirstName] = useState(customerData.firstName);
  const [lastName, setLastName] = useState(customerData.lastName);
  const [telephone, setTelephone] = useState(customerData.telephone);
  const [country, setCountry] = useState(customerData.country);
  const [email, setEmail] = useState(customerData.email);
  const [age, setAge] = useState(customerData.age);
  const [gender, setGender] = useState(customerData.gender);
  const saveChangesHandler = () => {
    const newCustomerData = {
      id: customerId,
      firstName,
      lastName,
      telephone,
      country,
      email,
      age,
      gender
    }
    customersData[customersData.indexOf(customerData)] = newCustomerData;
    dispatch(createCustomersAction("update", customersData));
  }
  const deleteHandler = () => {
    dispatch(createCustomersAction("delete", customerData));
  }
  return (
    <form className="row g-3 mt-5 mx-2">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active customer-name text-capitalize" aria-current="page">{firstName} {lastName}</li>
        </ol>
      </nav>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputfirstName4" className="form-label">First Name:</label>
          <input type="text" className="form-control" id="firstName" placeholder="Ali..." value={firstName} 
            onChange={(e) => {
              setFirstName(e.target.value);
            }} 
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputlastName4" className="form-label">Last Name:</label>
          <input type="text" className="form-control" id="lastName" placeholder="Hassan..." value={lastName}  
            onChange={(e) => {
              setLastName(e.target.value);
            }} 
          />
        </div>
      </div>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputemail4" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="ali@gmail.com..." value={email}  
            onChange={(e) => {
              setEmail(e.target.value);
            }} 
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputtelephone4" className="form-label">Telephone:</label>
          <input type="number" className="form-control" id="telephone" placeholder="011777990..." value={telephone}  
            onChange={(e) => {
              setTelephone(e.target.value);
            }} 
          />
        </div>
      </div>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputage4" className="form-label">Age:</label>
          <input type="number" className="form-control" id="age" placeholder="Your Age: ..." value={age}  
            onChange={(e) => {
              setAge(e.target.value);
            }} 
          />
        </div>
      </div>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputcountry4" className="form-label">Country:</label>
          <input type="text" className="form-control" id="country" placeholder="Your Country: ..." value={country}  
            onChange={(e) => {
              setCountry(e.target.value);
            }} 
          />
        </div>
      </div>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputage4" className="form-label">Gender:</label>
          <select id="gender" className="form-select" value={gender}  
            onChange={(e) => {
              setGender(e.target.value);
            }} 
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
      <div className="col-12">
        <Link to="/" className="save-changes btn btn-primary me-3" onClick={saveChangesHandler}>Save Changes</Link>
        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete Customer</button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Customer</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Are You sure
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <Link to="/" type="button" className="delete btn btn-danger" onClick={deleteHandler}>Delete Customer</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default EditCustomer;