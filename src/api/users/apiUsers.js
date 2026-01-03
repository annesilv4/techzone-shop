import axios from "axios";

const apiURL = "https://crudcrud.com/api/3c9790ee47d6455ea749a4c064b2bf62/users";

export const getUser = async () => {
    try {
        const response = await axios.get(apiURL);
        return response.data;
    } catch (err) {
        console.error("Error fetching users:", err);
        throw err;
    }
};

export const loginUser = async (email, password) => {
    try {
        const users = await getUser();
        const userFound = users.find(
            (u) => u.email === email && u.password === password
        );

        return userFound || null;
    } catch (err) {
        console.error("Error logging user:", err);
        throw err;
    }
};

export const createUser = async (userData) => {
    try {
        const response = await axios.post(apiURL, userData);
        return response.data;
    } catch (err) {
        console.error("Error creating user:", err);
        throw err;
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${apiURL}/${userId}`);
        return response.data;
    } catch (err) {
        console.error("Error deleting user:", err);
        throw err;
    }
};

export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(`${apiURL}/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

export const logoutUser = () => {
    try {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.href = "/";
        return true;
    } catch (error) {
        console.error("Error logging out user:", error);
        throw error;
    }
};