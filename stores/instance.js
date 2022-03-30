import axios from "axios";
import io from "socket.io/client-dist/socket.io";
import authStore from "./authStore";
import groupStore from "./groupStore";
import taskStore from "./taskStore";

// export const baseUrl = "http://localhost:8080";
// export const baseUrl = "http://192.168.100.77:8080";

export const baseUrl = "http://192.168.100.247:8000";
export const socket = io(baseUrl);

socket.on("backend", async function (msg) {
  await taskStore.fetchTasks();
  await groupStore.fetchGroups();
});
// export const baseUrl = "http://192.168.8.163:8080";
export const instance = axios.create({
  baseURL: `${baseUrl}/api`,
});
