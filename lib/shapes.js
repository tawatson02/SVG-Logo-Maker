class shape {
    constructor(color) {
        this.shapecolor = shapecolor,
        this.textcolor = textcolor,
        this.text = text
    }
    render() {
        return ''
    }
}
    
    class circle extends shape {
        render() {
            return `<circle cx="150" cy="100" r="80" fill="${this.shapecolor}"/>
            <text x="150" y="125" font size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`;
        }
    }

    class triangle extends shape {
        render() {
            return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}"/>
            <text x="150" y="125" font size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`; 
    }
    }

    class square extends shape {
        render() {
            return `<rect x="100" y="50" width="100" height="100" fill="${this.shapecolor}"/>
            <text x="150" y="125" font size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`;
        }
    }
    module.exports = {circle, triangle, square};
