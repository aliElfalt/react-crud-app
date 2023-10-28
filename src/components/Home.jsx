import Customer from "./Customer"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Home() {
  const searchValue = useSelector(state => state.search);
  const customersData = useSelector(state => state.customers);
  return (
    <section className="text-center">
      <div className="table-responsive mx-2 mt-5">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Country</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {
            customersData.length !== 0 ? (
              <tbody>
                {
                  customersData.map(customerData => {
                    if (searchValue === "") {
                      return <Customer key={customerData.id} customer={customerData} />
                    } else if (searchValue !== "" && `${customerData.firstName} ${customerData.lastName}`.includes(searchValue)) {
                      return <Customer key={customerData.id} customer={customerData} />
                    }
                  })
                }
              </tbody>
            ) 
            : null
          }
        </table>
        {
          customersData.length === 0 ? (
            <p>No customers to show <Link to="/addCustomer">Add Customer</Link></p> 
          ) : null
        }
      </div>
    </section>
  );
}

export default Home;