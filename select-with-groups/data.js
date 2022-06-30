const langs = [{id: 'bg', name: 'български', re: /bg-/i},
               {id: 'ru', name: 'русский', re: /ru-/i},
               {id: 'cs', name: 'čeština', re: /cs-/i}
              ].sort((l, r) => l.id.localeCompare(r.id));

const docs = [{id: 'bg_2', name: 'Студени играчки са звездите'}, 
              {id: 'bg_3', name: 'Звездната сянка'},
              {id: 'bg_0', name: 'Каруци'}, 
              {id: 'bg_1', name: '100-годишни шофьори'},
              {id: 'ru_2', name: 'Звезды – холодные игрушки'},
              {id: 'ru_3', name: 'Звездная тень'},
              {id: 'cs_2', name: 'HVĚZDY, TY STUDENÉ HRAČKY'},
              {id: 'cs_3', name: 'SVĚT STÍNU'},
            ].sort((l, r) => l.id.localeCompare(r.id));


export function FillSelect(sel) {
    let frag = document.createDocumentFragment();

    let i = 0;
    for (let l of langs) {
        let optgr = document.createElement('optgroup');
        optgr.label = l.name;
        optgr.id    = l.id;
        optgr.re    = l.re;
        frag.appendChild(optgr);

        let d = docs[i];
        for (; (i < docs.length) && d.id.startsWith(l.id); d = docs[++i]) {
            let opt = document.createElement('option');
            opt.innerHTML = d.name;
            opt.value     = d.id;
            optgr.appendChild(opt);
        }
    }

    sel.appendChild(frag);
}

export function GetProps(sel) {
    for (let i = 0, opt = sel[i]; opt; opt = sel[++i]) {
        if (opt.value == sel.value) {
            return { lang: opt.parentElement.label, 
                    regex: opt.parentElement.re,
                    docid: opt.value,
                    docname: opt.label };
        }
    }

    return undefined;
}