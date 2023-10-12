const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: { "Content-Type": "Application/json" },
});

async function getPosts() {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    return error;
  }
}
