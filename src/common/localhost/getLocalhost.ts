import { BrowserWindow } from "electron";

import path from "node:path";

/**
 * 前往本地链接
 * @param mainWindow
 * @param to vue 路由位置
 */
export default function getLocalhost(mainWindow: BrowserWindow, to?: string) {
  if (to) to = "#" + to;
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL + "#offline");
  } else {
    mainWindow.loadFile(
      path.join(
        __dirname,
        `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html#offline`,
      ),
    );
  }
}
