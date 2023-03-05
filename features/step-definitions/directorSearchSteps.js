import { Given, Then, When } from "@wdio/cucumber-framework";
import dashboardPage from "../pageObject/director.page.js";



When('user select director from dropdown', async function(){
    await browser.pause(5000);
})

When('User search for director {string}', async function(searchInput){
    await dashboardPage.searchForDirector(searchInput);
    await browser.pause(5000);
});

