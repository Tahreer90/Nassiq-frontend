import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class TaskStore {
  tasks = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchTasks = async () => {
    try {
      const taskResponse = await instance.get("/task");
      this.tasks = taskResponse.data;
    } catch (error) {
      console.log("error message", error);
    }
  };

  fetchTaskInGroup = async (groupId) => {
    try {
      const taskResponse = await instance.get(`/task/${groupId}`);
      this.tasks = taskResponse.data;
    } catch (error) {
      console.log("error message", error);
    }
  };
}

const taskStore = new TaskStore();
taskStore.fetchTasks();

export default taskStore;
