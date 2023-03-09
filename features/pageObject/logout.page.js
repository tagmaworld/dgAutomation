class LogoutPage {

    get logoutLink() {
        return $('//span[contains(.,"Logout")]')
        
    }
    get header() {
        return $('#pr_id_306-label')

    }
    get yesButton() {
        return $('.p-button-lg:nth-child(1) > .p-button-label')
    }

    async clickLogoutLink(){
        await (await this.logoutLink).waitForDisplayed();
        await this.logoutLink.click();
      
    }

    async clickYesButton(){
        await (await this.yesButton).waitForDisplayed();
        await this.yesButton.click();
    }
}

export default new LogoutPage();