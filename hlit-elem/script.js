import { Highlight } from 'https://cdn.jsdelivr.net/gh/beit-ilinsky/HTML-CSS-JS-snippets/lib/highlight.js';

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