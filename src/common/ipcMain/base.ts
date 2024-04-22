import { BrowserWindow } from "electron";

/**
 * 事件基类
 */
export default abstract class EventBase {
  /**
   * 事件名称
   */
  public abstract name: string;
  /**
   * Electron App
   */
  protected app: Electron.App;
  /**
   * 绑定消息的窗口
   */
  protected mainWindow: BrowserWindow;
  /**
   * @param app Electron App
   * @param mainWindow 绑定消息的窗口
   */
  constructor(app: Electron.App, mainWindow: BrowserWindow) {
    this.app = app;
    this.mainWindow = mainWindow;
  }
  /**
   * 事件执行函数
   * @param args
   */
  public abstract execute(...args: any): void;
}
