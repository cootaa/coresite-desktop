import { BrowserWindow, ipcMain } from "electron";

/**
 * 注册窗体事件
 * @param {Electron.App} app
 * @param {BrowserWindow} mainWindow
 */
export default (app: Electron.App, mainWindow: BrowserWindow) => {
  // mac dock 抖动
  let bounce = 0;
  /**
   * 窗体聚焦
   */
  ipcMain.on("focus", () => {
    mainWindow.show();
  });
  /**
   * 窗体收到消息
   */
  ipcMain.on("receiveMessage", () => {
    const count = app.getBadgeCount() + 1;
    // windows 窗口闪动
    mainWindow.flashFrame(true);
    // mac dock 图标跳动
    app.dock && (bounce = app.dock.bounce("informational"));
    // 设置小红点
    app.setBadgeCount(count);
  });
  /**
   * 关掉闪动效果
   */
  mainWindow.on("focus", () => {
    // windows 窗口闪动
    mainWindow.flashFrame(false);
    // mac dock 图标跳动
    app.dock && bounce && app.dock.cancelBounce(bounce);
    // 设置小红点
    app.setBadgeCount(0);
  });
};
