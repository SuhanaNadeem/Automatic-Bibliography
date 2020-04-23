// // function 1: on load, enter the link
// // funcion 2: click the SEARCH button
// // function 3: on load, click the CITE button
// // function 4: on load, click the CONTINUE button
// // function 5: on load, click the COMPLETE CITATION button

// // website: https://www.easybib.com/mla8/website/search-form

// let toCite = "https://www.khanacademy.org/science/physics/forces-newtons-laws"

// function clickBtn(className) {
//     let hashtagBtns = document.querySelectorAll(className)
//     hashtagBtns.forEach(btn => btn.click())
// }

// // WORK ON ENTERING LINK FROM TIS FUNCTION, and
// // then clicking search
// function enterLink() {

//     document.getElementsByClassName(".sc-blIhvV").value = toCite
//     clickBtn(searchClassName);
// }

// let searchClassName = ".sc-bYTsla"
// let citeClassName = ".sc-gisBJw"
// let continueClassName = ".sc-gisBJw"
// let completeClassName = "sc-kjoXOD"

// // clickBtn(searchClassName);

// //uncomment this search call once link thing works
// window.onload = function search() {
//     clickBtn(searchClassName);
// };
// window.onload = function cite() {
//     clickBtn(citeClassName);
// };
// window.onload = function continuee(){
//     clickBtn(continueClassName);
// };
// window.onload = function complete() {
//     clickBtn(completeClassName);
// };

const {Builder, By, Key, util} = require("selenium-webdriver");
async function example() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys("EasyBib",Key.RETURN);
}
example();