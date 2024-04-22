import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("coresite", {
  /**
   * 触发窗体聚焦
   */
  focusWindow: () => {
    ipcRenderer.send("focus");
  },
  /**
   * 接受到新消息
   */
  receiveMessage: () => {
    ipcRenderer.send("receiveMessage");
  },
});
