import path from "node:path";
import { app, Menu, BrowserWindow } from "electron";
import { setupContextMenu } from "./common/contextMenu";

// 更新监听
import { updateWatcher } from "./common/update";
import setupIPCMain from "./common/ipcMain";
import { checkNet } from "./common/localhost/offline";
updateWatcher();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

// 禁止显示默认菜单
Menu.setApplicationMenu(null);

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    // 默认窗口标题，如果由loadURL()加载的HTML文件中含有标签<title>，此属性将被忽略。
    title: "CORESITE",
    // 设置窗口尺寸为屏幕工作区尺寸
    // width: screen.getPrimaryDisplay().workAreaSize.width,
    // height: screen.getPrimaryDisplay().workAreaSize.height,
    width: 1280,
    height: 768,
    // 设置最小尺寸
    minWidth: 1024,
    minHeight: 720,
    // frame:false, // windows下隐藏导航栏
    // titleBarStyle: 'hidden', //macOS下隐藏导航栏
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  // 判断有无网络
  checkNet(mainWindow);
  // 自定义右键菜单
  setupContextMenu(mainWindow);
  // Open the DevTools.调试专用
  mainWindow.webContents.openDevTools();
  // 事件监听
  setupIPCMain(app, mainWindow);
};

app.setAppUserModelId("com.coresite.desktop");
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// 设置应用程序开机自启动
app.setLoginItemSettings({
  openAtLogin: true,
  openAsHidden: false, // 设置为 true 可以隐藏启动时的窗口
  args: [], // 自定义参数
});
