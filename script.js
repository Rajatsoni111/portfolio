function showsidebar() {
    const sidebar = document.querySelector('#slidebar')
    sidebar.style.display = 'flex'
}   

function hideslidebar() {
    const sidebar = document.querySelector('#slidebar')
    sidebar.style.display = 'none'
}   


let htmlProgress = document.querySelector(".circular-progress")
let cssProgress = document.querySelector(".circular-progress2")
let figmaProgress = document.querySelector(".circular-progress3")
let javaProgress = document.querySelector(".circular-progress4")
let photoProgress = document.querySelector(".circular-progress5")

let htmlValue = document.querySelector(".progress-value")
let cssValue = document.querySelector(".progress-value2")
let figmaValue = document.querySelector(".progress-value3")
let javaValue = document.querySelector(".progress-value4")
let photoValue = document.querySelector(".progress-value5")


let progressStartValue = 0
let htmlEndValue = 90
let cssEndValue = 80
let figmaEndValue = 50
let javaEndValue = 70
let photoEndValue = 90

let speed = 50

let html = setInterval(() => {
    progressStartValue++;

    htmlValue.textContent = `${progressStartValue}%`
    htmlProgress.style.background = `conic-gradient( rgb(108, 158, 209) ${progressStartValue*3.6}deg , white 0deg)`
  
    if(progressStartValue == htmlEndValue) {
        clearInterval(html)
    }
    
}, speed);
let css = setInterval(() => {
    progressStartValue++;

    cssValue.textContent = `${progressStartValue}%`
    cssProgress.style.background = `conic-gradient( rgb(108, 158, 209) ${progressStartValue*3.6}deg , white 0deg)`
  
    if(progressStartValue == cssEndValue) {
        clearInterval(css)
        console.log("working");
    }
    
}, speed);



