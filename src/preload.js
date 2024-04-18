const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('coresite', {
  msg: '123123123123'
  // send: (channel, data) => {  
  //   // whitelist channels  
  //   const validChannels = ["toMain"];  
  //   if (validChannels.includes(channel)) {  
  //     ipcRenderer.send(channel, data);  
  //   }  
  // },  
  // receive: (channel, func) => {  
  //   const validChannels = ["fromMain"];  
  //   if (validChannels.includes(channel)) {  
  //     // Deliberately strip event as it includes `sender`   
  //     ipcRenderer.on(channel, (event, ...args) => func(...args));  
  //   }  
  // }  
})