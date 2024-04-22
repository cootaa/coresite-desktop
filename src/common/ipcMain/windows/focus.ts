import EventBase from "../base";
import IPCEventReceiveMessage from "../events/receiveMessage";

export const FocusEventName = "focus";

/**
 * Window：窗体聚焦
 */
export default class WindowEventFocus extends EventBase {
  public override name = FocusEventName;
  public override execute(): void {
    // windows 窗口闪动
    this.mainWindow.flashFrame(false);
    // mac dock 图标跳动
    if (this.app.dock && IPCEventReceiveMessage.bounce) {
      this.app.dock.cancelBounce(IPCEventReceiveMessage.bounce);
    }
    // 设置小红点
    this.app.setBadgeCount(0);
  }
}
