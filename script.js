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
    if (this.style.background != "white") {
        this.style.cssText = 'background: white; color: #2196f3;';
    } 
    else {
        this.style.cssText = 'background: #2196f3; color: white;';
    }
}

function menu() {
    if (this.style.background != "white") {
        this.style.cssText = 'background: white;  border-radius: 360px;';
        document.getElementById('menu').style.cssText = 'margin-left: 0px; box-shadow: 0 0 2px 2.5px rgba(0, 0, 0, 0.125);'
        document.getElementById('header').style.cssText = 'overflow: visible;';
        
    } 
    else {
        
        this.style.cssText = 'background: #fff;  border-radius: 0px;';
        document.getElementById('menu').style.cssText = 'margin-left: -170px; box-shadow: 0 0 2px 2.5px rgba(0, 0, 0, 0);'
        document.getElementById('header').style.cssText = 'overflow: hidden;';

    }
}