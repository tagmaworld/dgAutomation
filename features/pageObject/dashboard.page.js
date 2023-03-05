class DashboardPage {

    get dashboardText(){
        return $('=Dashboard')
    }

    get searchInputArea(){
        return $('[role="searchbox"]')
    }

    get searchButton(){
        return $('[type="button"]')
    }
    get searchResultTab(){
        return $('.p-datatable-header.ng-star-inserted');
    }

    async searchForACompany(companyName){
        await this.searchInputArea.setValue(companyName);
        await this.searchButton.click();
    }

}

export default new DashboardPage()