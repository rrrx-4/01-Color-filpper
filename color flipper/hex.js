const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","F"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let ranNo = "#";
    for(let i=0; i<6; i++)
    {
        ranNo+=hex[genRanNo()];

        document.body.style.backgroundColor = ranNo;
        color.textContent = ranNo;
    }
})

function genRanNo()
{
return Math.floor(Math.random()*hex.length);
}