import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import groupStore from "./groupStore";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;

  signup = async (userData, navigation) => {
    try {
      const response = await instance.post("/auth/signup", userData);
      const { token } = response.data;
      await groupStore.fetchGroups();
      this.setUser(token);

      // await profileStore.getProfiles();
      navigation.replace("Lists");
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (userData, navigation) => {
    try {
      const response = await instance.post("/auth/signin", userData);
      const { token } = response.data;
      this.setUser(token);
      await groupStore.fetchGroups(); // useEffect

      navigation.replace("Lists");
    } catch (error) {
      console.log(error);
    }
  };

  signout = async (navigation) => {
    try {
      AsyncStorage.removeItem("token2");
      instance.defaults.headers.common.Authorization = null;
      this.user = null;
    } catch (error) {
      console.log(error);
    }
  };

  setUser = async (token) => {
    try {
      const decodedToken = decode(token);
      const res = await instance.get(`/auth/${decodedToken._id}`);

      this.user = res.data;
      console.log("-------======+++++++++=====", this.user);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      await AsyncStorage.setItem("token2", token);
      const newUser = await AsyncStorage.getItem("token2");
    } catch (error) {
      console.log(error);
    }
  };

  updateUserInfo = async (updateInfo) => {
    try {
      const response = await instance.put("/auth/update", updateInfo);
      const { token } = response.data;
      console.log(token);
      // this.signout();
      this.setUser(token);
    } catch (error) {}
  };

  checkForToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token2");
      if (token) {
        const decodedToken = decode(token);
        if (Date.now() < decodedToken.exp) {
          this.setUser(token);
        } else {
          this.signout();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
