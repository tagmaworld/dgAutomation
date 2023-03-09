import { Given, Then, When } from "@wdio/cucumber-framework";
import dashboardPage from "../pageObject/dashboard.page.js";

When('User search for a company {string}', async function(searchInput){
    await dashboardPage.searchForACompany(searchInput);
});

Then('User should see the results', async function(){
    await expect(dashboardPage.searchResultTab).toBeExisting();
})