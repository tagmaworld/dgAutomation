Feature: Search for filter options
@filterPage
    Scenario: Navigating to filter options

        Given User is on DataGardener website
        When User select login link
        And User enters 'moxeyol466@keshitv.com' and 'Noida123' to login
        Then User should see the dashboard page
        When user see explore button
        And user clicks on explore button
        Then user should see the filter options