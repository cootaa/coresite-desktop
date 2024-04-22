const { app, Menu, MenuItem } = require("electron");

/**
 * 类型提示
 * @typedef {import('electron').BrowserWindow} BrowserWindow
 */

/**
 * 右键菜单选项
 */
const menus = [
  {
    label: "复制",
    role: "copy",
  },
  {
    label: "粘贴",
    role: "paste",
  },
  {
    label: "全选",
    role: "selectall",
  },
  {
    label: "剪切",
    role: "cut",
  },
  {
    label: "app: " + app.getVersion(),
    role: "about",
  },
];

/**
 * 创建右键菜单
 * @param {BrowserWindow} mainWindow
 */
const setupContextMenu = (mainWindow) => {
  const menu = new Menu();
  // 遍历生成 菜单选项
  menus.forEach((item) => {
    menu.append(new MenuItem(item));
  });
  // 绑定右键菜单
  mainWindow.webContents.on("context-menu", (e, params) => {
    menu.popup({ window: mainWindow, x: params.x, y: params.y });
  });
};

module.exports = {
  setupContextMenu,
};
