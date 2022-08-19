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
            console.log('getting ', stl, ' from parent ', elem.tagName);
        } 

    return ret;
}

function Highlight(elem) {
    const bgcolor = GetActualStyle(elem, 'background-color');
    const color   = GetActualStyle(elem, 'color');

    if (bgcolor && color) {
        elem.style.setProperty('color', bgcolor);
        elem.style.setProperty('background-color', color);
    } 
}

var currentSel = undefined;

function CreateList(cls) {
    let frag = document.createDocumentFragment();

    const div = document.createElement('div');
    div.classList.add(cls);

    const p = document.createElement('p');
    p.innerText = cls.toUpperCase();
    div.appendChild(p);

    const ul = document.createElement('ul');    

    for (let i = 0; i < 4; ++i) {
        const li = document.createElement('li');
        li.innerText = 'elem_' + i;
        li.addEventListener('click', (ev) => {
            ev.stopPropagation();
            console.log('click in ', cls);
            if (currentSel) {
                Highlight(currentSel);
            }
            currentSel = li;
            Highlight(currentSel);
        });
        ul.appendChild(li);
    }

    div.appendChild(ul);

    frag.appendChild(div);

    document.querySelector('body').appendChild(frag);
}


window.onload = () => {    
    CreateList('white-on-green');
    CreateList('yel-on-blue');

    document.querySelector('body').addEventListener('click', () => {
        console.log('click outside lists');
        if (currentSel) {
            Highlight(currentSel);
            currentSel = undefined;
        }
    });
}