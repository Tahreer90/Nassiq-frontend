import { makeAutoObservable } from "mobx";
import groupStore from "./groupStore";
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
      return this.tasks;
    } catch (error) {
      console.log("error message", error);
    }
  };

  addTask = async (list, groupId, Navigation) => {
    try {
      const response = await instance.post(`/task/new/${groupId}`, list);

      this.tasks.push(response.data);
      await groupStore.fetchGroups();
      // Navigation.replace("Lists");
    } catch (error) {
      console.log(error);
    }
  };
}

const taskStore = new TaskStore();
taskStore.fetchTasks();

export default taskStore;
