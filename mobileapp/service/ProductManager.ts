import axios from "axios";
export async function createprod(
  name: string,
  price: number,
  image: string,
  token: string
) {
  try {
    const apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    apiClient.post("/api/product/create", { name, price, image });
  } catch (error) {
    console.error("Creation failed:", error);
    return false;
  }
}
export async function getprod(token: string, setter: any) {
  try {
    const apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const x = await apiClient.get("/api/product/myproducts");
    console.log("dataf:", x.data.reverse());
    setter(x.data);
  } catch (error) {
    setter([]);
  }
}
export async function deleteprod(id: string, token: string) {
  try {
    const apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await apiClient.delete(`/api/product/delete/${id}`);
  } catch (error) {}
}

export async function getprodAll(token: string, setter: any) {
  try {
    const apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const x = await apiClient.get("/api/product/");
    console.log("dataf:", x.data.reverse());
    setter(x.data);
  } catch (error) {
    setter([]);
  }
}
