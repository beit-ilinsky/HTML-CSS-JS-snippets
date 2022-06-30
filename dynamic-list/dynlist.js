
function FillList(lst, itemlabels, btnlabel, btnclass, itemtag = 'li') {
    console.log('')
    lst.replaceChildren(); //empty list
    if (itemlabels) { //in some cases can be empty/undefined
        let frag = document.createDocumentFragment();        
        for (let l of itemlabels) {
            let item = document.createElement(itemtag);            

            let spn = document.createElement('span');            
            spn.innerText = l + ' ';

            let btn = document.createElement('button');
            btn.classList.add(btnclass);
            btn.innerText = btnlabel;
            btn.addEventListener('click', (e) => { 
                const p = e.target.parentElement;
                p.remove();
            }, false);

            item.appendChild(spn);
            item.appendChild(btn);

            frag.appendChild(item);
       }
        lst.appendChild(frag);
    }
}

function Reset(prefix) {
    if ('ul' == prefix) {
        FillList(document.getElementById('ul-example'), ['an item', 'another item', 'yet another item'], '✔', 'ok-btn');
    }
    else if ('ol' == prefix) {
        FillList(document.getElementById('ol-example'), ['One', 'Two', 'Three', 'Four'], '✘', 'del-btn');
    }
}

Reset('ol');
Reset('ul');

document.getElementById('ul-reset').addEventListener('click', () => { Reset('ul');});
document.getElementById('ol-reset').addEventListener('click', () => { Reset('ol');});



