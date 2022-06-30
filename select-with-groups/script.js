import { FillSelect, GetProps  } from './data.js';

window.onload = () => {

    const sel = document.getElementById('docs');
    FillSelect(sel);
    sel.addEventListener('change', e => {
        const props = GetProps(e.target);
        if (props) {
            document.getElementById('lang').innerHTML = props.lang;
            document.getElementById('regex').innerHTML = props.regex;
            document.getElementById('docid').innerHTML = props.docid;
            document.getElementById('docname').innerHTML = props.docname;
        }
    });

};