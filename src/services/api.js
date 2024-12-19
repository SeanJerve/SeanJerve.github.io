import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getPets = async () => {
    const response = await axios.get(`${API_URL}/pets`);
    return response.data;
};

export const addPet = async (petData, imageFile) => {
    const formData = new FormData();
    formData.append("name", petData.name);
    formData.append("age", petData.age);
    formData.append("size", petData.size);
    formData.append("healthStatus", petData.healthStatus);
    formData.append("description", petData.description);
    formData.append("available", petData.available);
    formData.append("isFeatured", petData.isFeatured);
    if (imageFile) formData.append("image", imageFile);

    const response = await axios.post(`${API_URL}/pets`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
};

export const deletePet = async (id) => {
    const response = await axios.delete(`${API_URL}/pets/${id}`);
    return response.data;
};
