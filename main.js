const {Builder, By, Key, util} = require("selenium-webdriver");
async function cite(links) {
    var webdriver = require('selenium-webdriver');
    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    
    await driver.get("https://www.easybib.com/mla8/source");
    
    let citeClassName = "sc-gisBJw";
    let continueXPath = "//button[contains(@class,'flNamk')]";    
    let completeXPath = "//button[contains(@class,'complete-citation')]";
    let websiteClassName = "sc-cbMPqi";
    let searchFieldClassName = "sc-blIhvV";
    let createClassName = "sc-fZwumE";

    let i;
    for (i = 0; i < links.length; i++) {
        let toCite = links[i];

        await driver.findElement(By.className(websiteClassName)).click();
        await driver.findElement(By.className(searchFieldClassName)).sendKeys(toCite,Key.RETURN);

        await driver.sleep(3000);
        await driver.findElement(By.className(citeClassName)).click();

        await driver.sleep(3000);
        await driver.findElement(By.xpath(continueXPath)).click();

        await driver.sleep(5000);
        await driver.findElement(By.xpath(completeXPath)).click();

        await driver.sleep(2000);
        await driver.findElement(By.className(createClassName)).click();
    }
}

// Read link text file into array
var fs = require("fs");
var allLinks = fs.readFileSync("./links.txt").toString('utf-8');
let links = allLinks.split("\n")

cite(links);