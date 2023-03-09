class reportsPage{
    get dashboardText(){
        return $('=dashboard')
    }
    get pdfReportsLink(){
        return $('=PDF Reports')
    }
    get pdfReportsPage(){
        return $('.p-button-label=Reset Table')
    }
    async clickPdfReportsLink(){
        await this.pdfReportsLink.click()
    }

        
    }

    export default new reportsPage();