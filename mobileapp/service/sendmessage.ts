import axios, { AxiosInstance } from "axios";
import appstore from "./store";

import JWT from "expo-jwt";

let apiClient: AxiosInstance | null = null;

function gettype(types: string): string {
  switch (types) {
    case "user":
      return "normal";
    case "prov":
      return "prov";
    case "admin":
      return "admin";
    default:
      return "normal";
  }
}

const verify = async (token: string): Promise<boolean> => {
  try {
    apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    await apiClient.get("/api/user/islogin");
    return true;
  } catch (error) {
    console.error("Verification failed:", error);
    return false;
  }
};

const login = async (
  username: string,
  password: string,
  store: any
): Promise<boolean> => {
  try {
    apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
    });
    const response = await apiClient.post("/api/user/login", {
      email: username,
      password: password,
    });
    console.log("Login successful:", response.data);
    store.setUser(
      true,
      gettype(response.data.data.types),
      response.data.data.id,
      response.data.token,
      response.data.data.username
    );

    console.log("Login successful:", response.data);
    return true;
  } catch (error) {
    console.error("Login failed:", error);
    return false;
  }
};

const create = async (
  username: string,
  password: string,
  email: string,
  store: any,
  navigate: any
): Promise<boolean> => {
  try {
    apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
    });
    const response = await apiClient.post("/api/user/create", {
      username,
      password,
      email,
    });
    console.log("User created:", response.data.token);

    store.setUser(
      true,
      "normal",
      response.data.data.id,
      response.data.token,
      response.data.data.username
    );
    navigate();
    return true;
  } catch (e: any) {
    console.log("error", e);
    return false;
  }
};

const getProduct = async () => {
  try {
    apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
    });
    const response = await apiClient.get("/api/product/");
    console.log("Product:", response.data);
    return response.data;
  } catch (error) {
    console.error("Product failed:", error);
    return [];
  }
};
export { verify, login, create, getProduct };
