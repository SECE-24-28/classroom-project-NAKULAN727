import { useState, useEffect } from "react";
import axios from "axios";

const API_Base = "http://localhost:21000/api/v1/User";

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch Users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_Base}/users`);
      if (response.data.success) {
        setUsers(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      alert("Please fill in required fields");
      return;
    }

    try {
      if (editingId) {
        // Update
        const response = await axios.put(
          `${API_Base}/user/${editingId}`,
          formData
        );
        if (response.data.success) {
          fetchUsers();
          resetForm();
        }
      } else {
        // Create
        const response = await axios.post(`${API_Base}/userSignup`, formData);
        if (response.data.success) {
          fetchUsers();
          resetForm();
        }
      }
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Failed to save user");
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await axios.delete(`${API_Base}/user/${id}`);
      if (response.data.success) {
        fetchUsers();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
    }
  };

  // Handle Edit Click
  const handleEdit = (user) => {
    setEditingId(user._id);
    setFormData({
      firstName: user.firstName,
      lastName: user.secondName || "", // Backend uses secondName
      email: user.email,
    });
  };

  const resetForm = () => {
    setFormData({ firstName: "", lastName: "", email: "" });
    setEditingId(null);
  };

  return (
    <div className="container">
      <h1>User Management</h1>

      {/* Form Section */}
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
          />
        </div>

        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </div>

        <button type="submit" className="submit-btn">
          {editingId ? "Update User" : "Add User"}
        </button>

        {editingId && (
          <button type="button" className="cancel-btn" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      {/* List Section */}
      <div className="users-grid">
        {loading ? (
          <p className="loading">Loading users...</p>
        ) : users.length === 0 ? (
          <p className="loading">No users found.</p>
        ) : (
          users.map((user) => (
            <div key={user._id} className="user-card">
              <h3>
                {user.firstName} {user.secondName}
              </h3>
              <p>{user.email}</p>
              <div className="card-actions">
                <button
                  className="action-btn edit-btn"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="action-btn delete-btn"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
