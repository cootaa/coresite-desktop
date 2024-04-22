import { checkNet } from "../../localhost/offline";
import EventBase from "../base";

export const CheckWebEventName = "checkNet";

/**
 * IPC：检测网络
 */
export default class IPCEventCheckNet extends EventBase {
  public name = CheckWebEventName;
  public override execute(): void {
    checkNet(this.mainWindow, false);
  }
}
