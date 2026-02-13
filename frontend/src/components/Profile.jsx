import { useState, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/updateUser", {
        name,
        email,
        password,
      });

      // Update context with new user
      setUser(response.data.data);

      alert("Profile updated successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

      <form onSubmit={handleUpdate} className="space-y-4">

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Name"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="New Password (optional)"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Update
        </button>

      </form>
    </div>
  );
};

export default Profile;
