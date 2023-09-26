const fsPromises = require('fs').promises;
const fs = require('fs');
const postcss = require('postcss');
const atImport = require('postcss-import');

const bundleVarsCss = async () => {
    const css = await fsPromises.readFile('./assets/css/vars.css', 'utf8');
    const result = await postcss()
        .use(atImport())
        .process(css, {
            from: './assets/css/vars.css'
        });
    const output = result.css;

    if (!fs.existsSync('./dist')) {
        await fsPromises.writeFile('./dist');
    }

    if (!fs.existsSync('./dist/styles')) {
        await fsPromises.writeFile('./dist/styles');
    }

    await fsPromises.writeFile('./dist/styles/vars.css', output);
};

bundleVarsCss();


// process css
