class filterLocationPage {

    get locationText() {
        return $('#p-accordiontab-2 > .p-accordion-toggle-icon')
    }
    //get clickLocation() {
       // return $('#p-accordiontab-2');
    //}
    get postCodeText() {
        return $('=Post Code');
    }
    get townText() {
        return $('=Town / City');
    }




}
export default new filterLocationPage();