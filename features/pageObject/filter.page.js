class filterPage {

    get exploreButton() {
        return $('.p-button-rounded > .p-button-label')
    }



    get filterOptions() {
        return $('=Filter Options');
    }


    async selectButton() {
        await this.exploreButton.click();
        await browser.pause(5000);
    }
}
export default new filterPage();