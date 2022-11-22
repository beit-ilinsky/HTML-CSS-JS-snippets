function IsStyleValueSignificant(stl, val) {
    if (!val) {
        return false;
    }

    switch (stl) {
        case 'background-color':
        case 'color':
            return val != 'rgba(0, 0, 0, 0)'; //TODO: make it more robust
        default:
            return true;
    }
}

function GetActualStyle(elem, stl) {
    let ret = undefined;

    while (elem && !IsStyleValueSignificant(stl
        , ret = window.getComputedStyle(elem).getPropertyValue(stl))) {
            elem = elem.parentElement;
        } 

    return ret;
}

export function Highlight(elem) {
    const bgcolor = GetActualStyle(elem, 'background-color');
    const color   = GetActualStyle(elem, 'color');

    if (bgcolor && color) {
        elem.style.setProperty('color', bgcolor);
        elem.style.setProperty('background-color', color);
    } 
}
