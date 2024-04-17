const img = document.getElementById('images');
let toggle = true;
img.addEventListener('click', function(){
    toggle= !toggle;
    if(toggle)
    {
        img.src="assets/images/icon-plus.svg";
    }
    else
    {
        img.src="assets/images/icon-minus.svg"
    }
})