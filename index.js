const fs = require('fs');
const { default: inquirer } = require('inquirer');
const inquirer = require(inquirer)
const fileName = './examples/newLogo.svg'
const {circle, triangle, square} = require('./shapes');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { error } = require('console');


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
        Choices: ['circle','triangle','square']
    },
    {
        type: 'input',
        message: 'Now enter a color keyword (OR a hexadecimal number) for your shape.',
        name: 'shapecolor',
    }
];

createLogo = (data) => {
    const {text, textcolor, designShape, shapecolor} = data

    let svgContent; 
    switch (designShape) {
        case 'circle' :
            svgContent = new circle(text, textcolor, shapecolor);
            break;
        case 'triangle' : 
            svgContent = new triangle(text, textcolor, shapecolor);
            break;
        case 'square' : 
        svgContent = new square(text, textcolor, shapecolor);
    };
const writeToFile = (fileName, data) => {
    
    fs.writeFile = (fileName, data, err) => {
        if (err) {
            console.log('Error')
        } else {
            console.log('Success!')
        }
    }
}
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
