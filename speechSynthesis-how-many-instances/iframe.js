window.onload = () => {    
    document.getElementById('compare').addEventListener('click', () => {
        document.getElementById('res').innerHTML = 
            speechSynthesis.onvoiceschanged ? 'Equal' : 'Unequal';        
    });
}