export const microFrontendsTest = [
  {
    baseUrl: "", //where should we append this to router
    moduleName: "UserModule", //name of NG module class in your remote
    remoteEntry: "https://cne-test:4201/remoteEntry.js", //remote webpack url
    remoteName: "mfUser", //name of the remote module, 
    exposedModule: "./UserModule" //exposed module inside the webpack remote
},
  {
    baseUrl: "user", //where should we append this to router
    moduleName: "UserModule", //name of NG module class in your remote
    remoteEntry: "https://cne-test:4201/remoteEntry.js", //remote webpack url
    remoteName: "mfUser", //name of the remote module, 
    exposedModule: "./UserModule" //exposed module inside the webpack remote
},
{
    baseUrl: "register",
    moduleName: "RegisterModule",
    remoteEntry: "https://cne-test:4202/remoteEntry.js",
    remoteName: "mfRegister",
    exposedModule: "./RegisterModule"
}
]