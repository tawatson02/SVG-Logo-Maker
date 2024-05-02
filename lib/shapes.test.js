const {circle, triangle, square} = require('./shapes');

const shape = (shapeClass, expectedColor) => {
    const testShape = new shapeClass({
        fillColor:expectedColor,
        outlineColor: 'red',
        text: 'TEST'});

    const svgContent = testShape.render();

        return svgContent;
}