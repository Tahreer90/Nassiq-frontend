import { makeAutoObservable } from "mobx";
import authStore from "./authStore";
import { instance, socket } from "./instance";
import axios from "axios";

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
      await authStore.updateUserInfo();
      this.groups.push(response.data);
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
      groupStore.fetchGroups();
      const foundGroup = this.groups.find(
        (group) => JSON.stringify(group._id) == JSON.stringify(groupId)
      );
      const members = foundGroup.user.map((user) => user.expoToken);
      socket.emit("frontend", "Join");
      await axios.post("https://exp.host/--/api/v2/push/send", {
        to: members,
        title: "New member",
        body: `new member joined ${foundGroup.name} group`,
      });
    } catch (error) {
      console.log(" GroupStore ~ createGroup = ~ error", error);
    }
  };

  kick = async (groupId, userId) => {
    try {
      await instance.put(`/group/remove/${groupId}/${userId}`);
      this.fetchGroups();
      socket.emit("frontend", "Join");
    } catch (error) {
      console.log(error);
    }
  };

  leaveGroup = async (groupId) => {
    try {
      await instance.put(`/group/leave/${groupId}`);
      this.fetchGroups();
      socket.emit("frontend", "Join");
    } catch (error) {
      console.log(error);
    }
  };
}

const groupStore = new GroupStore();
groupStore.fetchGroups();

export default groupStore;
