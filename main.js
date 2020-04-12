// function 1: on load, enter the link
// funcion 2: click the SEARCH button
// function 3: on load, click the CITE button
// function 4: on load, click the CONTINUE button
// function 5: on load, click the COMPLETE CITATION button

// website: https://www.easybib.com/mla8/website/search-form

let toCite = "https://www.khanacademy.org/science/physics/forces-newtons-laws"

function enterLink() {

    document.getElementsByClassName(".sc-blIhvV").value = toCite
}

function clickBtn(className) {
    let hashtagBtns = document.querySelectorAll(className)
    hashtagBtns.forEach(btn => btn.click())
}

let searchClassName = ".sc-bYTsla"
let citeClassName = ".sc-gisBJw"
let continueClassName = ".sc-gisBJw"
let completeClassName = "sc-kjoXOD"

// clickBtn(searchClassName);

window.onload = function() {
    clickBtn(searchClassName);
};

// function clickSearch() {
//     let hashtagBtns = document.querySelectorAll('.sc-bYTsla')
//     hashtagBtns.forEach(btn => btn.click())
// }

// function clickCite() {
//     let hashtagBtns = document.querySelectorAll('.sc-gisBJw')
//     hashtagBtns.forEach(btn => btn.click())
// }

// function clickContinue() {
// }

// function clickComplete() {
//     // alert("This is the first.");
// }

window.onload=enterLink();
window.onload=clickSearch();
window.onload=clickCite();
window.onload=clickContinue();
window.onload=clickComplete();
