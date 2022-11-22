import { Highlight } from 'https://cdn.jsdelivr.net/gh/beit-ilinsky/HTML-CSS-JS-snippets@latest/lib/highlight.js';

var currentSel = undefined;

function CreateList(cls) {
    let frag = document.createDocumentFragment();

    const div = document.createElement('div');
    if (cls) {
        div.classList.add(cls);
    }
    

    const p = document.createElement('p');
    p.innerText = cls ? cls.toUpperCase() : 'DEFAULT';
    div.appendChild(p);

    const ul = document.createElement('ul');    

    for (let i = 0; i < 4; ++i) {
        const li = document.createElement('li');
        li.innerText = 'elem_' + i;
        li.addEventListener('click', (ev) => {
            ev.stopPropagation();            
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
    CreateList();

    document.querySelector('body').addEventListener('click', () => {        
        if (currentSel) {
            Highlight(currentSel);
            currentSel = undefined;
        }
    });
}