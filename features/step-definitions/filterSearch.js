import { Given, Then, When } from "@wdio/cucumber-framework";
import dashboardPage from "../pageObject/dashboard.page.js";
import filterPage from "../pageObject/filter.page.js";

When('user see explore button', async function () {
    await expect(filterPage.exploreButton).toBeExisting();
   // console.log('see explore button')

})

When('user clicks on explore button', async function () {
    await filterPage.selectButton();
})
Then('user should see the filter options', async function () {
    await expect(filterPage.filterOptions).toBeExisting();
    await expect(filterPage.filterOptions).toHaveTextContaining('Filter Options')
})