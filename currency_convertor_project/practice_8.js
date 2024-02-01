const baseUrl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
const dropdowns = document.querySelectorAll(".dropdown select");
const imgs = document.querySelectorAll("img");
const button = document.querySelector("button");
const input = document.querySelector("input");
const msg =document.querySelector(".msg");


(async function () {
    let a ="usd";
    let b = "inr";
    const url=baseUrl+"/"+a+"/"+b+".json";
    let response = await fetch(url);
    let data = await response.json();
    let c =input.value * data[b];
    document.querySelector(".date").innerText = `${data["date"]}`;
    msg.innerText=`${input.value}${a} = ${c}${b}`;
})();

for( let select of dropdowns){
    for(code in countryList){
        let newOption =document.createElement("option");
        newOption.innerText =  code;
        newOption.value = code;
        if((select.name==="from"&&code==="USD")||(select.name==="to"&&code==="INR")){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
}


dropdowns[0].addEventListener('click',()=>{
    imgs[0].src = `https://flagsapi.com/${countryList[dropdowns[0].value]}/flat/64.png`;
});

dropdowns[1].addEventListener('click',()=>{
    imgs[1].src = `https://flagsapi.com/${countryList[dropdowns[1].value]}/flat/64.png`;
    
});

button.addEventListener("click",async (evt) => {
    evt.preventDefault();
    if(input.value===""||input.value<1){
        input.value = "1";
    }
    let a =dropdowns[0].value.toLowerCase();
    let b = dropdowns[1].value.toLowerCase();
    const url=baseUrl+"/"+a+"/"+b+".json";
    let response = await fetch(url);
    let data = await response.json();
    let c =input.value * data[b];

    msg.innerText=`${input.value}${a} = ${c}${b}`;
});
