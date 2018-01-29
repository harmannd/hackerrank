$(document).ready ( function(){
    let button = document.createElement("button");
    button.type = "button";
    button.id = "btn";
    button.innerHTML = 0;
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        this.innerHTML = parseInt(this.innerHTML) + 1;
    });
});