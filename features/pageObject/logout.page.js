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
        await this.logoutLink.click();
        await browser.pause(5000);
    }

    async clickYesButton(){
        await this.yesButton.click();
    }

}

export default new LogoutPage();