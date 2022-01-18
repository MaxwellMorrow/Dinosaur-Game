export function getCustomProperty(elem , prop){
return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
}
export function setCustomProperty(elem, prop, value){
elem.stle.setProperty(prop, value)
}
export function incrememntCustomProperty(elem,prop,inc){
setCustomProperty(elem, prop, getCustomProperty(elem, prop) + inc)
}