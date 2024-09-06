import {Shape} from "./shape.js" ;
// interface Rectangle extends Shape{
//     width: number,
//     height: number,
//     computeArea: () => number
// }

function newRectangle(width: number, height: number) : Shape {
    return {
        computeArea: function (): number {
            return width * height
        }
    }
}

export { newRectangle }
