import { Given, Then, When } from "@wdio/cucumber-framework";
import dashboardPage from "../pageObject/dashboard.page.js";
import reportsPage from "../pageObject/pdfReports.page.js";


When('user select pdfReports link', async function(){
    await reportsPage.clickPdfReportsLink();
})

Then('user should see pdfReportsPage', async function(){
    // await expect(reportsPage.pdfReportsPage).toBeExisting();
    await expect(reportsPage.pdfReportsPage).toBeExisting;
    await expect(reportsPage.pdfReportsPage).toHaveText('RESET TABLE')
    await expect(reportsPage.pdfReportsPage).toHaveTextContaining('RESET');

})