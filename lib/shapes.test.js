const {circle, triangle, square} = require('./shapes');

const shape = (shapeClass, expectedColor) => {
    const testShape = new shapeClass({
        fillColor:expectedColor,
        outlineColor: 'red',
        text: 'TEST'});

    const svgContent = testShape.render();

    expect(svgContent).toContain(`fill= "${expectedColor}"`);
}

describe('test shapes',() =>{
    it('circle shows the correct color',() =>{
        shape(circle, 'purple');
    });
    it('triangle shows the correct color',() =>{
        shape(triangle, 'yellow');
    });
    it('square shows the correct color',() =>{
        shape(square, 'orange');
    });
});