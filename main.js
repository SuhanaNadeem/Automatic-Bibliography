// // // function 1: on load, enter the link
// // // funcion 2: click the SEARCH button
// // // function 3: on load, click the CITE button
// // // function 4: on load, click the CONTINUE button
// // // function 5: on load, click the COMPLETE CITATION button

// // // website: https://www.easybib.com/mla8/website/search-form

// // let toCite = "https://www.khanacademy.org/science/physics/forces-newtons-laws"

// // function clickBtn(className) {
// //     let hashtagBtns = document.querySelectorAll(className)
// //     hashtagBtns.forEach(btn => btn.click())
// // }

// // // WORK ON ENTERING LINK FROM TIS FUNCTION, and
// // // then clicking search
// // function enterLink() {

// //     document.getElementsByClassName(".sc-blIhvV").value = toCite
// //     clickBtn(searchClassName);
// // }

// // let searchClassName = ".sc-bYTsla"
// // let citeClassName = ".sc-gisBJw"
// // let continueClassName = ".sc-gisBJw"
// // let completeClassName = "sc-kjoXOD"

// // // clickBtn(searchClassName);

// // //uncomment this search call once link thing works
// // window.onload = function search() {
// //     clickBtn(searchClassName);
// // };
// // window.onload = function cite() {
// //     clickBtn(citeClassName);
// // };
// // window.onload = function continuee(){
// //     clickBtn(continueClassName);
// // };
// // window.onload = function complete() {
// //     clickBtn(completeClassName);
// // };

const {Builder, By, Key, util} = require("selenium-webdriver");
async function example() {
    // let driver = await new Builder().forBrowser("firefox").build();

    var webdriver = require('selenium-webdriver');

    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    await driver.get("https://www.easybib.com/mla8/source");
    
    // Open EasyBib after searching on Google
    // await driver.findElement(By.name("q")).sendKeys("EasyBib",Key.RETURN);
    // await driver.findElement(By.linkText("Easy Bib")).click();
    
    let toCite = "https://www.khanacademy.org/science/physics/forces-newtons-laws";
    let citeClassName = "sc-gisBJw";
    let continueClassName = "sc-gisBJw";
    let completeClassName = "sc-kjoXOD";
    let websiteClassName = "sc-cbMPqi";
    let searchFieldClassName = "sc-blIhvV";

    // Search link in first field, then click subsequent buttons.
    await driver.findElement(By.className(websiteClassName)).click();

    await driver.findElement(By.className(searchFieldClassName)).sendKeys(toCite,Key.RETURN);
    
    // driver.sleep(5000)
    // await driver.findElement(By.className(citeClassName)).sendKeys(Keys.RETURN);
    await driver.findElement(By.className(citeClassName)).click();
    // await driver.findElement(By.linkText("Cite")).click();

    // await driver.findElement(By.className(continueClassName)).click();
    // await driver.findElement(By.className(completeClassName)).click();

}
example();

// // Sources:
// // - https://www.youtube.com/watch?v=QwymPtk4zWo