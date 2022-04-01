const words = document.getElementById("change")

let text = ["focus", "konsisten", "jangan lupa subcribe"]

let j = 0
let i = 0

function autowr() {
    words.innerHTML = text[j].slice(0, i);
    i++;

    if( i > text[j].length) {
        i = 0;
        if(++j === text.length) {
            i = j = 0;
        }
    }
}

setInterval(() => {
    autowr()
}, 200)