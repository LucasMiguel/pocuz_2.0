const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 413,
        center: true,
        skipTaskbar: true,
        resizable: false,
        autoHideMenuBar: true,
        title: "Pocuz",
        icon: path.join(__dirname, "images/icon.ico"),
        backgroundColor: "#F0F3F3",
        titleBarStyle: "customButtonsOnHover"
    });

    const startUrl = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;

    mainWindow.loadURL(startUrl);

    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => { mainWindow = null; });
}

app.on('ready', createWindow);