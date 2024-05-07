const fs = require('fs');
const inquirer = require('inquirer')
const fileName = './examples/newLogo.svg'
const {circle, triangle, square, svg} = require('./lib/shapes');


const questions = [
    {
        type: 'input',
        message: 'Enter three or less characters for your logo.',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Now enter a color keyword (OR a hexadecimal number).',
        name: 'textcolor',
    },
    {
        type: 'list',
        message: 'Pick a shape for your design.',
        name: 'designShape',
        choices: ['circle','triangle','square']
    },
    {
        type: 'input',
        message: 'Now enter a color keyword (OR a hexadecimal number) for your shape.',
        name: 'shapecolor',
    }
];

const createLogo = (data) => {
    const {text, textcolor, designShape, shapecolor} = data

    let svgContent; 
    switch (designShape) {
        case 'circle' :
            svgContent = new circle( shapecolor);
            break;
        case 'triangle' : 
            svgContent = new triangle( shapecolor);
            break;
        case 'square' : 
        svgContent = new square( shapecolor);
    }
    const logoSVG = new svg(svgContent, textcolor,text ).render()
    return logoSVG;
};
const writeToFile = (fileName, data) => {
    
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error:', err);
        } else {
            console.log('Success!');
        }
    });
};


const init = () => {
    inquirer.prompt(questions)
    .then((input) => {
        const newLogo = createLogo(input)
        writeToFile(fileName, newLogo)
    })
    .catch((error) => {
        console.error("Error:", error);
    }
)
};


 init();
