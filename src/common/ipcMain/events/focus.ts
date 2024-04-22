import EventBase from "../base";

export const FocusEventName = "focus";

/**
 * IPC：传递聚焦显示窗体
 */
export default class IPCEventFocus extends EventBase {
  public name = FocusEventName;
  public override execute(): void {
    this.mainWindow.show();
  }
}
