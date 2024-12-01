import axios from "axios";
export async function CarManager(token: string, t: any) {
  try {
    const apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const r = await apiClient.get("/api/cart/");
    console.log("ftx", r.data);
    if (r.data == null) {
      t([]);
      return;
    }
    t(r.data.items);
  } catch (error) {
    console.log("Creation failed:", error);
    return false;
  }
}
export async function addproduct(token: string, productId: number) {
  try {
    const apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const r = await apiClient.post("/api/cart/add", { productId });
  } catch (error) {
    console.log("Creation failed:", error);
    return false;
  }
}
export async function deleteproduct(token: string, productId: number) {
  try {
    const apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const r = await apiClient.delete("/api/cart/?productId=" + productId);
  } catch (error) {
    console.log("Creation failed:", error);
    return false;
  }
}
export async function passorder(token: string) {
  try {
    const apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const r = await apiClient.post("/api/order/pass");
  } catch (error) {}
}
export async function getorders(token: string, t: any) {
  try {
    const apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const r = await apiClient.get("/api/order/mycommand");
    console.log("ordooors", r.data[0]);
    t(r.data);
  } catch (error) {}
}
