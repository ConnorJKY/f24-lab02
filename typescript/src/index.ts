import { newRenderer } from "./renderer.js"
import { Shape } from "./shapes/shape.js";
import { newRectangle} from "./shapes/rectangle.js";


// const shape: Shape = newRectangle(2, 3)
const shape : Shape = newRectangle(2,3)
const renderer = newRenderer(shape)
renderer.draw();