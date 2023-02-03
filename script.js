clone()
function clone() {
    for (let n=0; n<12; n++) {
        let parent = document.getElementById('group');
        let elem = parent.querySelector('.block');
        let clone = elem.cloneNode(true);
        clone = parent.appendChild(clone);
    }
}

function favorites() {
    if (this.style.background != "lightcoral") {
        this.style.cssText = 'background: lightcoral;';
    } 
    else {
        this.style.cssText = 'background: #00000040;';
    }
}

function trash() {
    if (this.style.background != "lightsalmon") {
        this.style.cssText = 'background: lightsalmon;';
    } 
    else {
        this.style.cssText = 'background: #00000040;';
    }
}