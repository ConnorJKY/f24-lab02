import { newRectangle } from "./shapes/rectangle.js";
import {Shape} from "./shapes/shape.js"

function newRenderer(Shape: Shape) {
    return {
        draw() {
            const area: number = Shape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }