import { GetSubjectList} from './data.js';

function FillSubjectList(parent, entryList, status) {
    let children = parent.querySelectorAll(':scope div');
    for (let child of children) {
        parent.removeChild(child);
    }

    let frag = document.createDocumentFragment();
    
    for (let [id, e] of entryList) {
        if (status == e.status) {
            const div = document.createElement('div');

            const inp = document.createElement('input');
            inp.type  = 'checkbox';
            inp.id    = id;
            inp.classList.add('hidden');
            div.appendChild(inp);

            const lbl = document.createElement('label');
            lbl.htmlFor   = id;
            lbl.classList.add('button');
            lbl.innerHTML = e.title;
            div.appendChild(lbl);

            frag.appendChild(div);
        }
    }
    parent.appendChild(frag);
}

function FillSubjectLists() {
    const subjList = GetSubjectList();
    FillSubjectList(document.getElementById('actual'), subjList, 'actual');
    FillSubjectList(document.getElementById('potential'), subjList, 'potential');
}

function UpdateSubjectLists(fromList, toList) {
    console.log(`UpdateSubjectLists(${fromList}, ${toList})`);

    const parent = document.getElementById(fromList);
    const subjList = GetSubjectList();
    const entries = parent.querySelectorAll(':scope input[type="checkbox"]:checked');

    for (let e of entries) {        
        subjList.get(e.id).status = toList;
    }

    FillSubjectLists();
}

window.onload = () => {

    FillSubjectLists();

    const addEntry = document.getElementById('add');
    addEntry.addEventListener('click', () => UpdateSubjectLists('potential', 'actual'));

    const remEntry = document.getElementById('rem');
    remEntry.addEventListener('click', () => UpdateSubjectLists('actual', 'potential'));
}