const {Builder, By, Key, util} = require("selenium-webdriver");
async function cite() {
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
cite();