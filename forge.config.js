/**
 * 了解更多 https://www.electronforge.io/config/makers
 */

const { FusesPlugin } = require("@electron-forge/plugin-fuses");
const { FuseV1Options, FuseVersion } = require("@electron/fuses");
const {
  utils: { fromBuildIdentifier },
} = require("@electron-forge/core");

module.exports = {
  buildIdentifier: process.env.IS_BETA ? "beta" : "prod",
  packagerConfig: {
    asar: true,
    appBundleId: fromBuildIdentifier({
      beta: "com.coresite.beta.app",
      prod: "com.coresite.app",
    }),
    icon: "./src/assets/icon/icon",
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-zip",
      platforms: ['darwin']
    },
    // windows系统打包配置
    {
        name: "@electron-forge/maker-squirrel",
        config: {},
      },
    // macOS系统打包配置
    {
        name: '@electron-forge/maker-dmg',
        platforms: ["darwin"],
        config: {}
    },
    // linux系统打包配置
    {
        name: '@electron-forge/maker-rpm',
        config: {},
    }
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
