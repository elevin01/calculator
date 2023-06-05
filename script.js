window.onload = function() {
    let display = document.getElementById('display');
    let history = document.getElementById('history');
    let buttons = Array.from(document.getElementsByTagName('button'));
    let trigKeys = document.getElementById('trig-keys');
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
                    trigKeys.style.display = trigKeys.style.display == 'none' ? 'block' : 'none';
                    break;
                case 'sin':
                    try {
                        history.innerText = 'sin(' + display.value + ') =';
                        display.value = Math.sin(eval(display.value));
                    } catch {
                        display.value = "Error";
                    }
                    break;
                case 'cos':
                    try {
                        history.innerText = 'cos(' + display.value + ') =';
                        display.value = Math.cos(eval(display.value));
                    } catch {
                        display.value = "Error";
                    }
                    break;
                case 'tan':
                    try {
                        history.innerText = 'tan(' + display.value + ') =';
                        display.value = Math.tan(eval(display.value));
                    } catch {
                        display.value = "Error";
                    }
                    break;
                case 'asin':
                    try {
                        history.innerText = 'asin(' + display.value + ') =';
                        display.value = Math.asin(eval(display.value));
                    } catch {
                        display.value = "Error";
                    }
                    break;
                case 'acos':
                    try {
                        history.innerText = 'acos(' + display.value + ') =';
                        display.value = Math.acos(eval(display.value));
                    } catch {
                        display.value = "Error";
                    }
                    break;
                case 'atan':
                    try {
                        history.innerText = 'atan(' + display.value + ') =';
                        display.value = Math.atan(eval(display.value));
                    } catch {
                        display.value = "Error";
                    }
                    break;
                default:
                    display.value += e.target.innerText;
            }
        });
    });
}
