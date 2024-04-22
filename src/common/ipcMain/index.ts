import { BrowserWindow, ipcMain } from "electron";
import IPCEvents from "./events";
import WindowEvents from "./windows";

/**
 * 注册窗体事件 包括 IPCMain & MainWindowEvents
 * @param app 
 * @param mainWindow 
 */
export default function setupIPCMain(
  app: Electron.App,
  mainWindow: BrowserWindow,
) {
  // 注册 IPC
  IPCEvents.forEach((event) => {
    const e = new event(app, mainWindow);
    ipcMain.on(e.name, (...args) => e.execute.call(e, args));
  });
  // 注册 mainWindow 事件
  WindowEvents.forEach((event) => {
    const e = new event(app, mainWindow);
    mainWindow.on(e.name as any, (...args) => e.execute.call(e, args));
  });
}
