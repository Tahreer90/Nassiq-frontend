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
      socket.emit("frontend", "Add");
      groupStore.fetchGroups();
      // await groupStore.fetchGroups();
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
      await this.updateTask(groupId, taskId, foundTask);
      socket.emit("frontend", "Check");
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
      socket.emit("frontend", "Check");

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

  deleteTask = async (taskId, groupId) => {
    try {
      await instance.delete(`/delete/${groupId}/${taskId}`);
      await groupStore.fetchGroups();
      await this.fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };
}

const taskStore = new TaskStore();
taskStore.fetchTasks();

export default taskStore;
