const meta = require('./package')

const container = document.getElementById('app');
container.innerHTML = `
    <h1>Hello, Electron!</h1>
    <p>v${meta.version}</p>
`;
