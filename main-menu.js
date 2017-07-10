const { app, Menu } = require('electron');
const { sayHi } = require('./dialogs');

const setMainMenu = (window) => {
    const template = [
        {
            label: app.getName(),
            submenu: [
                {
                    label: 'Quit',
                    accelerator: 'Cmd+Q',
                    click() {
                        app.quit();
                    }
                },
                {
                    label: 'Say Hi',
                    click() {
                        sayHi(window);
                    }
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                // @see https://electron.atom.io/docs/api/menu-item/#roles
                {role: 'undo'},
                {role: 'redo'},
                {type: 'separator'},
                {role: 'copy'},
                {role: 'paste'},
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
};

module.exports = {
    setMainMenu
};
