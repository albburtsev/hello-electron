const { app, dialog } = require('electron');

module.exports = {
    sayHi(window) {
        dialog.showMessageBox(window, {
            message: 'Hi!',
            detail: 'How are you?',
            buttons: ['Fine, thanks!'],
            defaultId: 0
        });
    }
};
