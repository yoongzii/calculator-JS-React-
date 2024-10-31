
const buttons = document.querySelectorAll('button');
const resultButton = document.querySelector('.result');
const ce = document.querySelector('.ce');
const input = document.querySelector('input');

class Calculator { //Calculator 클래스 생성
    constructor(input) { //생성자 메소드()
        this.displayElement = input;
        this.clear();
    }

    appendNumber(number) {
        this.displayContent += number;
        this.updateDisplay();
    }

    removerNumber() {
        this.displayContent = this.displayContent.slice(0, -1);
        this.updateDisplay();
    }

    appendOperator(operator) {
        this.displayContent += operator;
        this.updateDisplay();
    }

    updateDisplay() {
    //.Calculator에 속성값은 Calculator의 content  이거나 0 
        this.displayElement.value = this.displayContent || '0';
    }

    clear() {
        this.displayContent = '';
        this.updateDisplay();
    }
    
    compute() {
        this.displayContent = eval(this.displayContent
            .replace('\u00D7', '*')
            .replace('\u00F7', '/')
        )
    }
    
    evaluate() {
        try {
            this.displayContent = String(eval(this.displayContent));

        } catch (error) {
            this.displayContent = 'result';
        }
        this.updateDisplay();
    }
}

const calculator = new Calculator(input);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'operator':
                calculator.appendOperator(button.innerText);
                break;
            case 'ac':
                calculator.clear();
                break;
            case 'result':
                calculator.compute()
                calculator.evaluate();
                break;
            case 'ce':
                calculator.removerNumber();
                break;
            default:
                calculator.appendNumber(button.innerText);
                break;
        }
    });
});
