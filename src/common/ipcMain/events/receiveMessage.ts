import EventBase from "../base";

export const ReceiveMessageEventName = "receiveMessage";

/**
 * IPC：接收消息
 */
export default class IPCEventReceiveMessage extends EventBase {
  public static bounce?: number;
  public name = ReceiveMessageEventName;
  public override execute(): void {
    const count = this.app.getBadgeCount() + 1;
    // windows 窗口闪动
    this.mainWindow.flashFrame(true);
    // mac dock 图标跳动
    this.app.dock &&
      (IPCEventReceiveMessage.bounce = this.app.dock.bounce("informational"));
    // 设置小红点
    this.app.setBadgeCount(count);
  }
}
