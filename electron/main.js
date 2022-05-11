const { app, BrowserWindow, Tray, Menu, ipcMain } = require('electron');
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
        icon: path.join(__dirname, "../images/icon.png"),
        backgroundColor: "#F0F3F3",
        titleBarStyle: "customButtonsOnHover",
        webPreferences: {
            enableRemoteModule: true
        },        
    });

    const startUrl = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;

    mainWindow.loadURL(startUrl);    

    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => { mainWindow = null; });
}


app.on('ready', createWindow);

let trayIcon;

app.whenReady().then(()=>{
    trayIcon = new Tray(path.join(__dirname, '../images/icon.png'));

    const contextMenu = Menu.buildFromTemplate([
        {label: 'Item 1', type: 'radio'},
        {label: 'Item 2', type: 'radio'},
        {label: 'Item 3', type: 'radio', checked: true}
    ]);
    trayIcon.setToolTip('This is my application.')
    trayIcon.setContextMenu(contextMenu);
})