function GetVoices() {    
    const voice = document.getElementById('voice');
    voice.replaceChildren();

    let frag = document.createDocumentFragment();
    speechSynthesis.getVoices().forEach(v => {
        const opt = document.createElement('option');
        opt.value = v.name;
        opt.innerText = `${v.name} [ ${v.lang} ]`;
        frag.append(opt);
    });
    
    voice.appendChild(frag);
}

window.onload = () => {
    speechSynthesis.onvoiceschanged = GetVoices; 
    document.getElementById('fill-voices').addEventListener('click', () => {
        speechSynthesis.onvoiceschanged();
    });
}