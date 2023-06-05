window.onload = function() {
    let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByTagName('button'));
    buttons.map(button => {
        button.addEventListener('click', (e) => {
            switch(e.target.innerText){
                case 'C':
                    display.value = '';
                    break;
                case '=':
                    try{
                        display.value = eval(display.value);
                    } catch {
                        display.value = "Error"
                    }
                    break;
                case 'sqrt':
                    try {
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
                        display.value = Math.log10(eval(display.value));
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
