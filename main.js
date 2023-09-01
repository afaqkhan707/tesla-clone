let scrolling = false;
function scrollToNextPage(event) {
    if (!scrolling) {
        scrolling = true;
        const deltaY = event.deltaY;
        const nextPage = window.scrollY + window.innerHeight * (deltaY > 0 ? 1 : -1);
        window.scrollTo({
            top: nextPage,
            behavior: "smooth"
        });
        setTimeout(() => {
            scrolling = false;
        }, 500);
    }
}
document.addEventListener("wheel", scrollToNextPage);

let button1 = document.getElementById("drop1");
let dropdow1= document.getElementById("dropdown1");

button1.addEventListener("mouseover",() =>{
    dropdown1.style.display = "block";
    console.log("mouse is working")
})
let button2 = document.getElementById("drop2");
let dropdown2= document.getElementById("dropdown2");
button2.addEventListener("mouseover",() =>{
    dropdown2.style.display = "block";
    console.log("mouse is working")
})

let button3 = document.getElementById("drop3");
let dropdown3= document.getElementById("dropdown3");
button3.addEventListener("mouseover",() =>{
    dropdown3.style.display = "block";
    console.log("mouse is working")
})
let button4 = document.getElementById("drop4");
let dropdown4= document.getElementById("dropdown4");
button4.addEventListener("mouseover",() =>{
    dropdown4.style.display = "block";
    console.log("mouse is working")
})
let button5 = document.getElementById("drop5");
let dropdown5= document.getElementById("dropdown5");
button5.addEventListener("mouseover",() =>{
    dropdown5.style.display = "block";
    console.log("mouse is working")
})

