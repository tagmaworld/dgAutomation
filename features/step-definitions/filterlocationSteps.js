import { Given, Then, When } from "@wdio/cucumber-framework";
import dashboardPage from "../pageObject/dashboard.page.js";
import filterPage from "../pageObject/filtersearch.page.js";
import filterLocationPage from "../pageObject/filterlocation.page.js";   


When('user see Location option',async function (){
    await expect(filterLocationPage.locationText).toBeExisting();
    
    
})

//When('user clicks on location option',async function (){
    //await filterLocationPage.locationButton();
    
//})
Then('user should see postcode and Town options',async function (){
    await expect(filterLocationPage.postCodeText).toBeExisting;
    await expect(filterLocationPage.postCodeText).toHaveTextContaining('Post Code');      
 
    await expect(filterLocationPage.townText).toBeExisting;
    await expect(filterLocationPage.townText).toHaveTextContaining('Town / City');      
  

})