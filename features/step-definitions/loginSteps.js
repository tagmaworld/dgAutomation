import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pageObject/login.page.js";
import dashboardPage from "../pageObject/dashboard.page.js";

Given('User is on DataGardener website', async function(){
    await browser.url('/');
    await browser.maximizeWindow();
    await browser.pause(5000);
});

When('User select login link', async function(){
   await loginPage.clickLoginLink();
})

When('User enters {string} and {string} to login', async function(username, password){
    await loginPage.LoginToDG(username, password)
    await browser.pause(5000);

})
Then('User should see the dashboard page', async function(){
     await expect(dashboardPage.dashboardText).toBeExisting();
     await expect(dashboardPage.dashboardText).toHaveTextContaining('Dashboard');
})