function GetSelected() {
    return localStorage.getItem('selected');
}

function SetSelected(sel) {
    localStorage.setItem('selected', sel);
}

function FillSelect(items, itemtag = 'li') {    
    const lst = document.getElementById('lst');
    lst.replaceChildren();
    
    if (items) {
        let sel = GetSelected();

        let frag = document.createDocumentFragment();
        for (let item of items) {
            let el = document.createElement(itemtag);

            let swatch = document.createElement('span');
            swatch.innerHTML = '&#x25A0; ';
            swatch.style.setProperty('color', item.color);
            swatch.classList.add('swatch'); 
            

            let lbl = document.createElement('span');
            lbl.innerText = item.label;
            lbl.value     = item.value;
            lbl.classList.add('hover-hlit');
            lbl.addEventListener('click', (e) => {
                SetSelected(item.value);
                
                document.querySelector('label[for="show-hide"]').innerHTML = e.target.parentElement.innerHTML;
                document.getElementById('show-hide').checked = false;
            });
    
            el.appendChild(swatch);
            el.appendChild(lbl);

            if (sel == item.value) {
                document.querySelector('label[for="show-hide"]').innerHTML = el.innerHTML;
            }

            frag.appendChild(el);
        }
        lst.appendChild(frag);
    }
}

window.onload = () => {
    const items = [
        { 
            label: 'Projects',
            value: '1',
            color: '#080'
        },
        {
            label: 'Chores',
            value: '2',
            color: '#aa0'
        },
        {
            label: 'Learning',
            value: '3',
            color: 'cyan'
        }
    ];
    FillSelect(items);
}