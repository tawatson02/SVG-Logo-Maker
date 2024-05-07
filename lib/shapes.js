class shape {
    constructor(shapecolor) {
        this.shapecolor = shapecolor;
        
    }
    render() {
        return ''
    }
}


    
    class circle extends shape {
        render() {
            return `<circle cx="150" cy="100" r="80" fill="${this.shapecolor}"/>`;
        }
    }

    class triangle extends shape {
        render() {
            return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}"/>`; 
    }
    }

    class square extends shape {
        render() {
            return `<rect x="100" y="50" width="100" height="100" fill="${this.shapecolor}"/>`;
        }
    }
    class svg {
        constructor(shape, textcolor, text) {
            this.shape = shape;
            this.textcolor = textcolor;
            this.text = text;

        }
        render() {
          return `<svg height = "300" width = "300"  xmlns="http://www.w3.org/2000/svg" >${this.shape.render()}<text x="150" y="125" size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>; 
            
           </svg>`    
           
        }
    }
    module.exports = {svg, circle, triangle, square};
