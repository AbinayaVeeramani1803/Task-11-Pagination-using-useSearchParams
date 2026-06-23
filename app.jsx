import React from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const users = [
    { id: 1, name: "Abinaya Veeramani", email: "abinaya@gmail.com", city: "Chennai", role: "Student" },
    { id: 2, name: "Arun Kumar", email: "arun@gmail.com", city: "Madurai", role: "Developer" },
    { id: 3, name: "Priya", email: "priya@gmail.com", city: "Coimbatore", role: "Designer" },
    { id: 4, name: "Karthik", email: "karthik@gmail.com", city: "Salem", role: "Tester" },
    { id: 5, name: "Divya", email: "divya@gmail.com", city: "Trichy", role: "Manager" },
    { id: 6, name: "Rahul", email: "rahul@gmail.com", city: "Erode", role: "Student" },
    { id: 7, name: "Meena", email: "meena@gmail.com", city: "Vellore", role: "Developer" },
    { id: 8, name: "Vijay", email: "vijay@gmail.com", city: "Chennai", role: "Designer" },
    { id: 9, name: "Anu", email: "anu@gmail.com", city: "Madurai", role: "Tester" },
    { id: 10, name: "Sanjay", email: "sanjay@gmail.com", city: "Coimbatore", role: "Manager" },
    { id: 11, name: "Harini", email: "harini@gmail.com", city: "Salem", role: "Student" },
    { id: 12, name: "Surya", email: "surya@gmail.com", city: "Trichy", role: "Developer" },
    { id: 13, name: "Keerthana", email: "keerthi@gmail.com", city: "Erode", role: "Designer" },
    { id: 14, name: "Ajay", email: "ajay@gmail.com", city: "Vellore", role: "Tester" },
    { id: 15, name: "Lavanya", email: "lavanya@gmail.com", city: "Chennai", role: "Manager" },
    { id: 16, name: "Ramesh", email: "ramesh@gmail.com", city: "Madurai", role: "Student" },
    { id: 17, name: "Sneha", email: "sneha@gmail.com", city: "Coimbatore", role: "Developer" },
    { id: 18, name: "Manoj", email: "manoj@gmail.com", city: "Salem", role: "Designer" },
    { id: 19, name: "Nisha", email: "nisha@gmail.com", city: "Trichy", role: "Tester" },
    { id: 20, name: "Kavin", email: "kavin@gmail.com", city: "Erode", role: "Manager" }
  ];

  const recordsPerPage = 5;

  const currentPage = Number(searchParams.get("page")) || 1;

  const totalPages = Math.ceil(users.length / recordsPerPage);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const currentUsers = users.slice(firstIndex, lastIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: currentPage + 1 });
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    }
  };

  return (
    <div className="container">
      <h1>User Management System</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
