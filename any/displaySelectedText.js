(() => {
/*
    This is a simple script that builds an interface demonstrating
        how to track and capture text selection.
    The core selection logic is in the nested getSelectedText()
        method.
*/

const DIR = {
    FORWARD: 'forward',
    BACKWARD: 'backward',
    NONE: 'none'
};

// MAIN
main();

function main() {
    setUpUI();
}

function setUpUI() {
    document.body.innerText = '';
    setGlobalStyles();

    const appBox = document.createElement('div');
    appBox.className = 'app';
    document.body.appendChild(appBox);

    const appHeader = document.createElement('h1');
    appHeader.setAttribute('style', 'font-size: 16px; font-weight: bold;');
    appHeader.innerText = 'Display Selected Text';
    appBox.appendChild(appHeader);

    const selectedTextHeader = document.createElement('h2');
    selectedTextHeader.innerText = 'Selected Text';
    const selectedTextMirror = document.createElement('p');
    const selectedTextWithDirectionHeader = document.createElement('h2');
    selectedTextWithDirectionHeader.innerText = 'Selected Text By Direction';
    const selectedTextWithDirectionMirror = document.createElement('p');

    const textAreaHeader = document.createElement('h2');
    textAreaHeader.innerText = 'Type and Select Text';
    const textAreaElement = document.createElement('textarea');
    appBox.appendChild(textAreaElement);
    function getSelectedText(e) {
        setTimeout(() => {
            const { value, selectionStart, selectionEnd, selectionDirection } = e.target;
            // console.log(`start: ${selectionStart} end: ${selectionEnd} value: ${value}`);
            if (selectionStart === selectionEnd) {
                selectedTextMirror.innerText = '';
                selectedTextWithDirectionMirror.innerText = '';
            } else {
                const selectedText = value.slice(selectionStart, selectionEnd);
                selectedTextMirror.innerText = selectedText;
                console.log(`direction: ${selectionDirection}`);
                if (selectionDirection !== 'none') {
                    selectedTextWithDirectionMirror.innerText = (selectionDirection === DIR.FORWARD) ?
                                                                    selectedText : selectedText.split('').reverse().join('');

                } else {
                    selectedTextWithDirectionMirror.innerText = 'Can\'t track direction with mouse (only shift+arrow select)';    
                }
            }
        }, 0);
    }

    textAreaElement.onselect = getSelectedText;
    textAreaElement.onclick = getSelectedText;

    appBox.appendChild(textAreaHeader);
    appBox.appendChild(textAreaElement);
    appBox.appendChild(selectedTextHeader);
    appBox.appendChild(selectedTextMirror);
    appBox.appendChild(selectedTextWithDirectionHeader);
    appBox.appendChild(selectedTextWithDirectionMirror);
}

function setGlobalStyles() {
    // clear existing style
    const oldStyleElements = [
        ...Array.from(document.getElementsByTagName('style')),
        ...Array.from(document.getElementsByTagName('link')).filter(el => el.rel === 'stylesheet')
    ];
    oldStyleElements.forEach(element => {
        element.parentNode.removeChild(element);
    });

    // set up new styles
    const STYLE_RULES = `
        * {
            font-family: "Helvetica", Arial, sans-serif;
            color: white;
        }
        h1,h2,h3,h4,h5,h6 {
            font-weight: bold;
            margin-bottom: 5px;
        }
        h1 {
            font-size: 16px;
        }
        h2 {
            font-size: 14px;
        }
        textarea {
            background-color: black;
            font-size: 14px;
            min-height: 50px;
            min-width: 300px;
            border-color: #777;
            border-radius: 3px;
            padding: 3px;
        }
        textarea::selection {
            background-color: #c00;
        }
        .app {
            display: inline-block;
            min-width: 50%;
            background-color: #333;
            margin: 5px;
            padding: 5px;
            border: 1px solid black;
            border-radius: 4px;
            box-shadow: 2px 2px 4px #444;
        }
    `;
    const style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = STYLE_RULES;
    } else {
        style.appendChild(document.createTextNode(STYLE_RULES));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}
})();