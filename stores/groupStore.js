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
}

const groupStore = new GroupStore();
groupStore.fetchGroups();

export default groupStore;
