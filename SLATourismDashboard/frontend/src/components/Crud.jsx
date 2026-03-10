import React, { useEffect } from "react";

export const Crud = () => {
  const [users, setUsers] = React.useState([]);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
  });

  const [editingUserId, setEditingUserId] = React.useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  function handleChange(e) {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    if (editingUserId) {
      // Update existing user
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingUserId ? { ...user, ...formData } : user
        )
      );
      setEditingUserId(null);
    } else {
      // Add new user
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          setUsers((prev) => [...prev, data]);
        });
    }

    // Clear form
    setFormData({ name: "", email: "" });
  }

  function handleEdit(user) {
    setFormData({ name: user.name, email: user.email });
    setEditingUserId(user.id);
  }

  function handleDelete(id) {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Users CRUD</h3>

      {/* Form Card */}
      <div className="card p-3 mb-4">
        <div className="row g-3">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-5">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <button className="btn btn-primary w-100" onClick={handleSubmit}>
              {editingUserId ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th style={{ width: "60px" }}>#</th>
            <th>Name</th>
            <th>Email</th>
            <th style={{ width: "180px" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
