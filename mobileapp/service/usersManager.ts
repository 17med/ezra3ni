import axios from "axios";
export async function getusers(token: string, setdata: any) {
  try {
    const apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const x = await apiClient.get(`/api/user/getall/`);

    setdata(x.data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
export async function Update(
  token: string,
  userid: number,
  state: string,
  refrech: any
) {
  try {
    const apiClient = axios.create({
      baseURL: "http://192.168.1.131:3005",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const x = await apiClient.post(`/api/user/transform/`, {
      iduser: userid,
      types: state,
    });
    console.log(x.data);
    refrech();
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
