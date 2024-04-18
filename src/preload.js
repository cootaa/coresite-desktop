const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("coresite", {
  msg: "123123123123",
  focusWindow: () => {
    ipcRenderer.send("focus");
  }
});
