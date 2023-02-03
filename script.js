clone()
function clone() {
    for (let n=0; n<12; n++) {
        let parent = document.getElementById('group');
        let elem = parent.querySelector('.block');
        let clone = elem.cloneNode(true);
        clone = parent.appendChild(clone);
    }
}

document.getElementById('favorites').onclick = favorites

function favorites(){
    let check = document.getElementById("favorites");
    if (check.style.color != "red") {
        document.getElementById('favorites').style.cssText = 'color: red;';
    } 
    else {
        document.getElementById('favorites').style.cssText = 'color: #fff;';
    }
    
}