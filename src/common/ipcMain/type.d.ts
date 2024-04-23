export interface ICoresite {
  /**
   * 触发窗体聚焦
   */
  focusWindow: () => void;
  /**
   * 接受到新消息
   */
  receiveMessage: () => void;
  /**
   * 检查网络状态
   */
  checkNet: () => void;
}

declare global {
  interface Window {
    coresite: ICoresite;
  }
}
