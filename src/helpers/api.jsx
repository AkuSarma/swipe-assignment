import axios from "axios";

export const processFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post("/api/process", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};
