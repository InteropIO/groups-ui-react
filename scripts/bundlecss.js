const fsPromises = require('fs').promises;
const fs = require('fs');
const postcss = require('postcss');
const atImport = require('postcss-import');

const bundleCss = async () => {
    // Ensure dist/styles exists
    if (!fs.existsSync('./dist/styles')) {
        fs.mkdirSync('./dist/styles', { recursive: true });
    }

    // Bundle vars.css with postcss-import
    const css = await fsPromises.readFile('./assets/css/vars.css', 'utf8');
    const result = await postcss()
        .use(atImport())
        .process(css, {
            from: './assets/css/vars.css'
        });
    await fsPromises.writeFile('./dist/styles/vars.css', result.css);

    // Copy groups.css as-is
    await fsPromises.copyFile('./assets/css/groups.css', './dist/styles/groups.css');
};

bundleCss();


// process css
