import { makeAutoObservable } from "mobx";
import groupStore from "./groupStore";
import { instance, socket } from "./instance";

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
      list.isChecked = false;
      const response = await instance.post(`/task/new/${groupId}`, list);
      this.tasks.push(response.data);
      await groupStore.fetchGroups();
      socket.emit("frontend", "Add");
    } catch (error) {
      console.log(error);
    }
  };

  checkTask = async (taskId, nextChecked, groupId) => {
    try {
      const foundGroup = groupStore.groups.find(
        (group) => group._id == groupId
      );
      const foundTask = foundGroup.task.find(
        (task) => JSON.stringify(task._id) == JSON.stringify(taskId)
      );
      foundTask.isChecked = nextChecked;
      socket.emit("frontend", "Check");
      await this.updateTask(groupId, taskId, foundTask);
    } catch (error) {}
  };

  updateTask = async (groupId, taskId, newTask, taskName) => {
    try {
      if (taskName) {
        newTask.name = taskName;
        newTask.edit = false;
      }
      const response = await instance.put(
        `/task/update/${groupId}/${taskId}`,
        newTask
      );

      await groupStore.fetchGroups();
      await this.fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  editTask = async (taskId, groupId) => {
    const foundGroup = groupStore.groups.find((group) => group._id == groupId);
    const foundTask = foundGroup.task.find(
      (task) => JSON.stringify(task._id) == JSON.stringify(taskId)
    );
    foundTask.edit = true;
  };
}

const taskStore = new TaskStore();
taskStore.fetchTasks();

export default taskStore;
