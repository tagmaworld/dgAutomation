Feature: DataGardener User checking pdfReports

    @pdfReports @regression
    Scenario: DG User selecting pdfReports
        Given User is on DataGardener website
        When User select login link
        And User enters 'moxeyol466@keshitv.com' and 'Noida123' to login
        Then User should see the dashboard page
        When user select pdfReports link
        Then user should see pdfReportsPage