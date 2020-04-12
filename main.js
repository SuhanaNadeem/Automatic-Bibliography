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

function clickSearch() {
    let hashtagBtns = document.querySelectorAll('.sc-bYTsla')
    hashtagBtns.forEach(btn => btn.click())
}

function clickCite() {
    // alert("This is the first.");
}

function clickContinue() {
    // alert("This is the first.");
}

function clickComplete() {
    // alert("This is the first.");
}

window.onload=enterLink();
window.onload=clickSearch();
window.onload=clickCite();
window.onload=clickContinue();
window.onload=clickComplete();
