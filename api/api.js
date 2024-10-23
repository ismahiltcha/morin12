import axios from 'axios';

// Update the API base URL
const API_BASE_URL = 'https://meditracksaas-caed1031526f.herokuapp.com'; 

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/login/`, {
      username,
      password,
    });
    return response.data;  // Return token from the login API
  } catch (error) {
    throw error;
  }
};


// Remove token requirement from takeItem
export const takeItem = async (qr_code, quantity) => {
  try {
    console.log("Calling takeItem API with QR Code:", qr_code, "Quantity:", quantity);
    const response = await axios.post(
      `${API_BASE_URL}/api/take-item/`,
      { qr_code, quantity }  // Only send qr_code and quantity
    );
    console.log("takeItem API response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in takeItem API call:", error);
    throw error;
  }
};

export const addItem = async (qr_code, quantity) => {
  try {
    console.log("Calling addItem API with QR Code:", qr_code, "Quantity to Add:", quantity);
    const response = await axios.post(
      `${API_BASE_URL}/api/add_item_quantity/`,  // Ensure the endpoint is correct
      { qr_code, quantity }
    );
    console.log("addItem API response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in addItem API call:", error);
    throw error;
  }
};

// Remove token requirement from borrowItem
export const borrowItem = async (qr_code, quantity, borrowerName) => {
  try {
    console.log("Calling borrowItem API with QR Code:", qr_code, "Quantity:", quantity, "Borrower Name:", borrowerName);
    const response = await axios.post(
      `${API_BASE_URL}/api/borrow-item/`,
      { qr_code, quantity, borrowerName }  // Only send qr_code, quantity, and borrowerName
    );
    console.log("borrowItem API response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in borrowItem API call:", error);
    throw error;
  }
};
