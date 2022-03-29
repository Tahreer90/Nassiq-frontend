import { makeAutoObservable } from "mobx";
import authStore from "./authStore";
import { instance, socket } from "./instance";

class GroupStore {
  groups = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchGroups = async () => {
    try {
      const groupResponse = await instance.get("/group");
      this.groups = groupResponse.data;
      console.log(this.groups.length);
    } catch (error) {
      console.log("error message", error);
    }
  };

  createGroup = async (groupName, Navigation) => {
    try {
      console.log("==================1", authStore.user);
      const response = await instance.post("/group/new", groupName);
      await groupStore.fetchGroups();
      await authStore.updateUserInfo();
      console.log("==================2", authStore.user);
      // authStore.user.group.push(groupName);
      // Navigation.replace("Lists");
    } catch (error) {
      console.log(" GroupStore ~ createGroup = ~ error", error);
    }
  };

  joinGroup = async (groupId) => {
    try {
      console.log("first", groupId);
      const response = await instance.post(`/group/join/${groupId}`);
      await this.fetchGroups();
      await authStore.updateUserInfo();
      socket.emit("frontend", "Join");
    } catch (error) {
      console.log(" GroupStore ~ createGroup = ~ error", error);
    }
  };
}

const groupStore = new GroupStore();
groupStore.fetchGroups();

export default groupStore;
