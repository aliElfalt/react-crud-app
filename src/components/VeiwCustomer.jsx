import { Link, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

function VeiwCustomer() {
  const {customerId} = useParams();
  const customer = useSelector(state => state.customers)[customerId - 1];
  return (
    <section className="mx-2 mt-5 text-capitalize">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active customer-name" aria-current="page">
            {`${customer.firstName} ${customer.lastName}`}
          </li>
        </ol>
      </nav>
      <table className="veiw-table table table-striped table-bordered mt-5">
        <tbody>
          <tr>
            <td className="w-50">First Name</td>
            <td>{customer.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{customer.lastName}</td>
          </tr>
          <tr>
            <td>Telephone</td>
            <td>{customer.telephone}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{customer.email}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{customer.gender}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{customer.age}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{customer.country}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default VeiwCustomer;