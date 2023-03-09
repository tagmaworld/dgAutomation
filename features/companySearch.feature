Feature: Company search on DG portal


    Scenario: User search for a company in Data Gardener
        Given User is on DataGardener website
        When User select login link
        And User enters 'moxeyol466@keshitv.com' and 'Noida123' to login
        Then User should see the dashboard page
        When User search for a company 'Data Gardener'
        Then User should see the results


    







