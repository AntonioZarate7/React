//const electron = require("electron");
/*const app = electron.app;
const BrowserWindow = electron.BrowserWindow;*/
const { app, BrowserWindow } = require('electron');

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 1000,
    title: "Musicfy",
    //titleBarStyle: "hiddenInset",
    // resizable: false,
  });

  //mainWindow.loadFile('../src/index.js');
  /*mainWindow.loadURL(
    "http://localhost:3000"
  );*/

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000/'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  //Si estamos en modo desarrollo abre las devtools en la ventana 
  if (isDev) mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => (mainWindow = null));
}

/*app.whenReady().then(() => {
    createWindow()
  })

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})*/


app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    console.log("La pantalla proncipal es null");
    createWindow();
  }
});