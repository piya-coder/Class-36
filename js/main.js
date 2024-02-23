

const Gbutton = document.querySelector(".Gbutton");
const Cbutton = document.querySelector(".Cbutton");
const mainBoxColorCode = document.querySelector(".mainBoxColorCode");
const colorGeneratorBox = document.querySelector(".colorGeneratorBox");



Gbutton.addEventListener("click", function(){
    const ourRandomColor = generateColor();
    mainBoxColorCode.value = ourRandomColor;
    mainBoxColorCode.style.border = ourRandomColor;
    colorGeneratorBox.style.backgroundColor = ourRandomColor;
    

    Cbutton.addEventListener("click", function(){
        navigator.clipboard.writeText(ourRandomColor);
        Cbutton.innerHTML = "Copied";
    })


})

function generateColor(){
    const red = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const rgb = `rgb(${red}, ${blue}, ${green})`;
    return rgb;
}

