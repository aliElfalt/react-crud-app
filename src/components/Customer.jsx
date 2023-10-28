import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createCustomersAction } from "./store/customersReducer";

function Customer(props) {
  const [show, setShow] = useState(true);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const {customer} = props;
  const dispatch = useDispatch();
  const deleteHandler = () => {
    setShow(false);
    dispatch(createCustomersAction("delete", customer));
  }
  return (
    <>
      {
        show && (
          <tr className="text-capitalize">
            <td>{customer.id}</td>
            <td>{customer.firstName} {customer.lastName}</td>
            <td>{customer.country}</td>
            <td>{customer.age}</td>
            <td className="d-flex gap-1 justify-content-center">
              <Link 
                to={`/veiwCustomer/${customer.id}`} 
                className="view btn btn-sm btn-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Veiw customer"
              >
                <i className="bi bi-eye"></i>
              </Link>
              <Link 
                to={`/editCustomer/${customer.id}`} 
                className="edit btn btn-sm btn-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Edit customer"
              >
                <i className="bi bi-pencil"></i>
              </Link>
              <button 
                className="delete btn btn-sm btn-danger" 
                onClick={() => setShowDeletePopup(true)}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Delete customer"
              >
                <i className="bi bi-trash"></i>
              </button>
            </td>
            <div className={showDeletePopup ? "" : "d-none"}>
              <div className={`text-start modal fade ${showDeletePopup ? "d-block show" : "" }`}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Customer</h1>
                      <button type="button" className="btn-close" onClick={() => setShowDeletePopup(false)}></button>
                    </div>
                    <div className="modal-body">
                      Are You sure
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={() => setShowDeletePopup(false)}>Close</button>
                      <button type="button" className="delete btn btn-danger" onClick={deleteHandler}>Delete Customer</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`modal-backdrop fade ${showDeletePopup ? "show" : "d-none"}`}></div>
            </div>
          </tr>
        )
      }
    </>
  );
}

export default Customer;