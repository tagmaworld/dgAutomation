Feature: director search on DG portal

    @companySearch @regression
    Scenario: User search for a director in DG
        Given User is on DataGardener website
        When User select login link
        And User enters 'moxeyol466@keshitv.com' and 'Noida123' to login
        Then User should see the dashboard page
        When user select director from dropdown
        And User search for director 'Ken Murphy'
        Then User should see the results