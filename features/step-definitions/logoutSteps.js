import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pageObject/login.page.js";
import logoutPage from "../pageObject/logout.page.js";

When('user select logout link', async function() {
   await logoutPage.clickLogoutLink();
    
})
When('user select yes from promptScreen', async function(){
    await logoutPage.clickYesButton();
    await browser.pause(3000)

})
Then('user should see loginPage', async function (){
    await expect(loginPage.username).toBeExisting();
    await expect(loginPage.loginHeader).toHaveTextContaining('Login');
})