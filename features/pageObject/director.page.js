

class DashboardPage {

    get dashboardText() {
        return $('=Dashboard')
    }

    get clickButton() {
        return $('.p-dropdown-trigger.ng-tns-c81-634')
    }

    get findDirector() {
        return $('span.ng-star-inserted')
    }

    get companyTab() {
        //return $("//*[starts-with(@id, 'pr_id_')]");
        return $("//div[2]/p-dropdown/div/span");
    }
    get directorTab(){
        return $('[aria-label="Director"]');
    }
    get searchInputArea() {
        return $('[role="searchbox"]');
    }

    get searchButton() {
        return $('[type="button"]');
    }
    get searchResultTab() {
        return $('div.col-12.xl\:col-8 > h4');
    }

    //Search for a director
    // OPen the website
   //Login
        // click on login link
        // type username in username input area
        // type password in password input area
        // Click login button

 //From dashboard click company tab
 //From the dropdown list click on Director
 //Type director name in search input area

    async searchForDirector(directorName) {
        await this.companyTab.click();
        await browser.pause(2000);
        await this.directorTab.click();
        await browser.pause(2000);
        await this.searchInputArea.setValue(directorName);
        await this.searchButton.click();
    }

}

export default new DashboardPage()





