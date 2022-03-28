import axios from "axios";
import io from "socket.io/client-dist/socket.io";
import groupStore from "./groupStore";
import taskStore from "./taskStore";

// export const baseUrl = "http://localhost:8080";
// export const baseUrl = "http://192.168.100.77:8080";
export const baseUrl = "http://192.168.100.247:8000";
export const socket = io(baseUrl);

socket.on("backend", async function (msg) {
  if (msg == "Add") {
    await taskStore.fetchTasks();
    await groupStore.fetchGroups();
  }
  if (msg == "Check") {
    await taskStore.fetchTasks();
    await groupStore.fetchGroups();
  }
  if (msg == "Join") {
    await taskStore.fetchTasks();
    await groupStore.fetchGroups();
  }
  console.log(msg);
  // alert(msg);
});
// export const baseUrl = "http://192.168.8.163:8080";
export const instance = axios.create({
  baseURL: `${baseUrl}/api`,
});
