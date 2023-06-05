window.onload = function() {
    let display = document.getElementById('display');
    let history = document.getElementById('history');
    let cheatSheet = document.getElementById('cheat-sheet');
    let buttons = Array.from(document.getElementsByTagName('button'));
    buttons.map(button => {
        button.addEventListener('click', (e) => {
            switch(e.target.innerText){
                case 'C':
                    display.value = '';
                    history.innerText = '';
                    break;
                case '=':
                    try{
                        history.innerText = display.value + ' =';
                        display.value = eval(display.value);
                    } catch {
                        display.value = "Error"
                    }
                    break;
                case 'sqrt':
                    try {
                        history.innerText = 'sqrt(' + display.value + ') =';
                        display.value = Math.sqrt(eval(display.value));
                    } catch {
                        display.value = "Error";
                    }
                    break;
                case '^':
                    display.value += '**';
                    break;
                case 'log':
                    try {
                        history.innerText = 'log(' + display.value + ') =';
                        display.value = Math.log10(eval(display.value));
                    } catch {
                        display.value = "Error";
                    }
                    break;
                case 'back':
                    display.value = display.value.slice(0, -1);
                    break;
                case 'trig':
                    cheatSheet.style.display = cheatSheet.style.display == 'none' ? 'block' : 'none';
                    break;
                default:
                    display.value += e.target.innerText;
            }
        });
    });
}
