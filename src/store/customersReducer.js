
const customersData = [
  {
    id: 1,
    firstName: "test",
    lastName: "1",
    telephone: "0333334545",
    country: "Egypt",
    email: "email1@gmail.com",
    age: "27",
    gender: "Male"
  },
  {  
    id: 2,
    firstName: "test",
    lastName: "2",
    telephone: "335676754",
    country: "Egypt",
    email: "email2@gmail.com",
    age: "20",
    gender: "Female"
  },
  {  
    id: 3,
    firstName: "test",
    lastName: "3",
    telephone: "189334545",
    country: "Egypt",
    email: "email3@gmail.com",
    age: "35",
    gender: "Female"
  },
  {  
    id: 4,
    firstName: "test",
    lastName: "4",
    telephone: "90436454345",
    country: "Egypt",
    email: "email4@gmail.com",
    age: "17",
    gender: "Male"
  }
];

export const createCustomersAction = (type, payload) => {
  return {
    type,
    payload
  }
}

export const customersReducer = (state = customersData, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "edit":
      return [...action.payload];
    case "delete":
      let customers = state;
      return customers.filter((customer) => {
        return customer.id !== action.payload.id;
      });
    default: 
      return state;
  }
}