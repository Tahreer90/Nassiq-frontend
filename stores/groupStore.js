import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class GroupStore {
  groups = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchGroups = async () => {
    try {
      const groupResponse = await instance.get("/group");
      this.groups = groupResponse.data;
    } catch (error) {
      console.log("error message", error);
    }
  };

  createGroup = async (groupName) => {
    try {
      console.log("first", groupName);
      const response = await instance.post("/group/new", groupName);
      this.groups.push(response.data);
    } catch (error) {
      console.log(" GroupStore ~ createGroup = ~ error", error);
    }
  };

  joinGroup = async (groupId) => {
    try {
      console.log("first", groupId);
      const response = await instance.post(`/group/join/${groupId}`);
      this.groups.push(response.data);
    } catch (error) {
      console.log(" GroupStore ~ createGroup = ~ error", error);
    }
  };
}

const groupStore = new GroupStore();
groupStore.fetchGroups();

export default groupStore;
