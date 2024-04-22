const { updateElectronApp } = require("update-electron-app");
/**
 * 更新监听
 */
const updateWatcher = () => {
  updateElectronApp(); // additional configuration options available
};

module.exports = {
  updateWatcher,
};
