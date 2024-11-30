import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import { verify } from "./sendmessage";
import JWT from "expo-jwt";

/**
 * Decodes a JWT and returns the payload (body).
 * @param token - The JWT string to decode.
 * @returns The decoded payload as an object or null if decoding fails.
 */
function decodeJWT(token: string): Record<string, any> | null {
  try {
    const payload = JWT.decode(token, "mlqmksdùqskdsùmqùmslqs");
    return payload;
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
}

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

const useUserStore = create((set) => ({
  isLogin: false,
  accountType: null,
  userId: null,
  token: null,

  setUser: async (
    isLogin: boolean,
    accountType: string,
    userId: number,
    token: string,
    username: string
  ) => {
    await SecureStore.setItemAsync("userToken", token);
    set({ isLogin, accountType, userId, token, username });
  },

  // Method to get token and user details on initialization
  initializeUser: async (ffalse: any, ftrue: any) => {
    const token = await SecureStore.getItemAsync("userToken");
    console.log("Token:", token);

    if (token && (await verify(token))) {
      const res: any = decodeJWT(token);
      if (res == null) {
        await SecureStore.deleteItemAsync("userToken");
        ffalse();
        return;
      }
      console.log("res", res);

      const decodedToken = JSON.parse(JSON.stringify(res));
      console.log("User  logged in");
      set({
        isLogin: true,
        accountType: gettype(decodedToken.types),
        userId: decodedToken.userId,
        token,
        username: decodedToken.username,
      });
      ftrue();
    } else {
      if (token != null) {
        await SecureStore.deleteItemAsync("userToken");
      }
      console.log("User not logged in");
      set({ isLogin: false, accountType: null, userId: null, token: null });
      ffalse();
    }
  },

  logout: async (flogout: any) => {
    await SecureStore.deleteItemAsync("userToken");
    set({
      isLogin: false,
      accountType: null,
      userId: null,
      token: null,
      username: null,
    });
    flogout();
  },
}));

export default useUserStore;
