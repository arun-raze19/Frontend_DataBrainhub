import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setRole(response.data.role);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <h2 className="text-xl mb-6">Update User</h2>
      <form onSubmit={updateUser} className="space-y-4">
        {msg && <p className="text-red-500 mb-4">{msg}</p>}
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditUser;
