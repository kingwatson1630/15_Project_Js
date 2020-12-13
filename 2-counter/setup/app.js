// initialisation
let count = 0;

//selection de value et des boutons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "#a55eea";
        }
        if(count < 0){
            value.style.color = "#4cd137";
        }
        if(count === 0){
            value.style.color = "#eb3b5a";
        }
        value.textContent = count;
    });
});