import { net, BrowserWindow } from "electron";

import { DEFAULT_URL } from "../../config/env";

import getLocalhost from "./getLocalhost";

let net_timeout: NodeJS.Timeout;

/**
 * 定时器，监听网络状态
 */
function offline(mainWindow: BrowserWindow) {
  getLocalhost(mainWindow, "offline");
  net_timeout = setInterval(() => checkNet(mainWindow, false), 15 * 1000);
}

/**
 * 监听网络状态
 * @param mainWindow
 * @param first 是否第一次访问
 */
export function checkNet(mainWindow: BrowserWindow, first = true) {
  if (net.isOnline()) {
    // 清除定时器
    if (net_timeout) clearInterval(net_timeout);
    // 有网络跳转登陆页面
    mainWindow.loadURL(DEFAULT_URL);
  } else {
    // 第一次访问，注册定时器等操作
    if (first) {
      offline(mainWindow);
    }
  }
}
