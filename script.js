let inputResult = document.getElementById("result");

let insert = (num) => {
    inputResult.value = inputResult.value + num;
}

let deleteNumber = () => {
    inputResult.value = inputResult.value.substring(0, inputResult.value.length - 1);
}

let clean = () => {
    inputResult.value = null;
}

let equal = () => {

    if (inputResult.value) {
        inputResult.value = eval(inputResult.value);
    }
    else {
        inputResult.value = "ERROR"
    }

}

// MODIFY THEMES

const ballTheme1 = document.getElementById("theme1");
const ballTheme2 = document.getElementById("theme2");
const ballTheme3 = document.getElementById("theme3");
const buttons = document.querySelectorAll("button");

let theme1 = () => {

    ballTheme1.style.backgroundColor = "hsl(6, 63%, 50%)";
    ballTheme2.style.backgroundColor = "hsl(223, 31%, 20%)";
    ballTheme3.style.backgroundColor = "hsl(223, 31%, 20%)";

    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    document.getElementsByTagName("input")[0].style.backgroundColor = "hsl(224, 36%, 15%)";
    document.getElementsByTagName("section")[0].style.backgroundColor = "hsl(223, 31%, 20%)";
    document.getElementById("theme").style.backgroundColor = "hsl(223, 31%, 20%)";
    document.body.style.color = "white";

    buttons.forEach((button) => {
        button.style.color = "hsl(221, 14%, 31%)";
        button.style.backgroundColor = "hsl(30, 25%, 89%)";
        button.style.boxShadow = "inset 0 -0.5vh hsl(28, 16%, 65%)";
    })

    document.getElementsByTagName("input")[0].style.color = "hsl(224, 36%, 15%)";
    document.getElementById("del").style.backgroundColor = "hsl(225, 21%, 49%)";
    document.getElementById("reset").style.backgroundColor = "hsl(225, 21%, 49%)";
    document.getElementById("equal").style.backgroundColor = "hsl(6, 63%, 50%)";
    document.getElementById("del").style.color = "white";
    document.getElementById("reset").style.color = "white";
    document.getElementById("equal").style.color = "white";
    document.getElementById("del").style.boxShadow = "inset 0 -0.5vh hsl(224, 28%, 35%)";
    document.getElementById("reset").style.boxShadow = "inset 0 -0.5vh hsl(224, 28%, 35%)";
    document.getElementById("equal").style.boxShadow = "inset 0 -0.5vh hsl(6, 70%, 34%)";

    document.styleSheets[1].cssRules[11].style.backgroundColor = "hsl(6, 63%, 60%)";
    document.styleSheets[1].cssRules[13].style.backgroundColor = "hsl(223, 31%, 30%)";
    document.styleSheets[1].cssRules[15].style.backgroundColor = "hsl(223, 31%, 30%)";
    document.styleSheets[1].cssRules[21].style.backgroundColor = "hsl(30, 25%, 99%)";
    document.styleSheets[1].cssRules[23].style.backgroundColor = "hsl(225, 21%, 59%)";
    document.styleSheets[1].cssRules[26].style.backgroundColor = "hsl(6, 63%, 60%)";

}

let theme2 = () => {

    ballTheme1.style.backgroundColor = "hsl(0, 5%, 81%)";
    ballTheme2.style.backgroundColor = "hsl(25, 98%, 40%)";
    ballTheme3.style.backgroundColor = "hsl(0, 5%, 81%)";

    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    document.getElementsByTagName("input")[0].style.backgroundColor = "hsl(0, 0%, 93%)";
    document.getElementsByTagName("section")[0].style.backgroundColor = "hsl(0, 5%, 81%)";
    document.getElementById("theme").style.backgroundColor = "hsl(0, 5%, 81%)";
    document.body.style.color = "hsl(60, 10%, 19%)";

    buttons.forEach((button) => {
        button.style.color = "hsl(60, 10%, 19%)";
        button.style.backgroundColor = "hsl(45, 7%, 89%)";
        button.style.boxShadow = "inset 0 -0.5vh hsl(35, 11%, 61%)";
    })

    document.getElementsByTagName("input")[0].style.color = "hsl(60, 10%, 19%)";
    document.getElementById("del").style.backgroundColor = "hsl(185, 42%, 37%)";
    document.getElementById("reset").style.backgroundColor = "hsl(185, 42%, 37%)";
    document.getElementById("equal").style.backgroundColor = "hsl(25, 98%, 40%)";
    document.getElementById("del").style.color = "white";
    document.getElementById("reset").style.color = "white";
    document.getElementById("equal").style.color = "white";
    document.getElementById("del").style.boxShadow = "inset 0 -0.5vh hsl(185, 58%, 25%)";
    document.getElementById("reset").style.boxShadow = "inset 0 -0.5vh hsl(185, 58%, 25%)";
    document.getElementById("equal").style.boxShadow = "inset 0 -0.5vh hsl(25, 99%, 27%)";

    document.styleSheets[1].cssRules[11].style.backgroundColor = "hsl(0, 5%, 91%)";
    document.styleSheets[1].cssRules[13].style.backgroundColor = "hsl(25, 98%, 50%)";
    document.styleSheets[1].cssRules[15].style.backgroundColor = "hsl(0, 5%, 91%)";
    document.styleSheets[1].cssRules[21].style.backgroundColor = "hsl(45, 7%, 99%)";
    document.styleSheets[1].cssRules[23].style.backgroundColor = "hsl(185, 42%, 47%)";
    document.styleSheets[1].cssRules[26].style.backgroundColor = "hsl(25, 98%, 50%)";

}

let theme3 = () => {

    ballTheme1.style.backgroundColor = "hsl(268, 71%, 12%)";
    ballTheme2.style.backgroundColor = "hsl(268, 71%, 12%)";
    ballTheme3.style.backgroundColor = "hsl(176, 100%, 44%)";

    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    document.getElementsByTagName("input")[0].style.backgroundColor = "hsl(268, 71%, 12%)";
    document.getElementsByTagName("section")[0].style.backgroundColor = "hsl(268, 71%, 12%)";
    document.getElementById("theme").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.body.style.color = "hsl(52, 100%, 62%)";

    buttons.forEach((button) => {
        button.style.color = "hsl(52, 100%, 62%)";
        button.style.backgroundColor = "hsl(268, 47%, 21%)";
        button.style.boxShadow = "inset 0 -0.5vh hsl(290, 70%, 36%)";
    })

    document.getElementsByTagName("input")[0].style.color = "hsl(52, 100%, 62%)";
    document.getElementById("del").style.backgroundColor = "hsl(281, 89%, 26%)";
    document.getElementById("reset").style.backgroundColor = "hsl(281, 89%, 26%)";
    document.getElementById("equal").style.backgroundColor = "hsl(176, 100%, 44%)";
    document.getElementById("del").style.color = "white";
    document.getElementById("reset").style.color = "white";
    document.getElementById("equal").style.color = "hsl(198, 20%, 13%)";
    document.getElementById("del").style.boxShadow = "inset 0 -0.5vh hsl(285, 91%, 52%)";
    document.getElementById("reset").style.boxShadow = "inset 0 -0.5vh hsl(285, 91%, 52%)";
    document.getElementById("equal").style.boxShadow = "inset 0 -0.5vh hsl(177, 92%, 70%)";

    document.styleSheets[1].cssRules[11].style.backgroundColor = "hsl(268, 71%, 22%)";
    document.styleSheets[1].cssRules[13].style.backgroundColor = "hsl(268, 71%, 22%)";
    document.styleSheets[1].cssRules[15].style.backgroundColor = "hsl(176, 100%, 54%)";
    document.styleSheets[1].cssRules[21].style.backgroundColor = "hsl(268, 47%, 31%)";
    document.styleSheets[1].cssRules[23].style.backgroundColor = "hsl(281, 89%, 36%)";
    document.styleSheets[1].cssRules[26].style.backgroundColor = "hsl(176, 100%, 54%)";

}