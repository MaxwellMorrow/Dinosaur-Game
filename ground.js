import { incrememntCustomProperty } from "./updateCustomProperty.js"
const SPEED = 0.05
const groundElems = document.querySelectorAll("[data-ground]")







export function updateGround(delta){
groundElems.forEach(ground => {
    incrememntCustomProperty(ground, "--left", delta * SPEED * -1)
})

}