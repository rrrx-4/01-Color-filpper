const colors = ["red", "green", "#FFA500",  "#A020F0" ];

const btn = document.querySelector(".btn");
const colorr = document.querySelector(".colorr");

btn.addEventListener("click", function(){
    const randomNum = Math.floor(genRandom());
    document.body.style.backgroundColor = colors[randomNum];
    colorr.textContent = colors[randomNum];
})

function genRandom(){
    return Math.random()*colors.length;
}