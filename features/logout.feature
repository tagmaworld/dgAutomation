Feature: DataGardener User logout

    @logout
    Scenario: DG User logout
        Given User is on DataGardener website
        When User select login link
        And User enters 'moxeyol466@keshitv.com' and 'Noida123' to login
        Then User should see the dashboard page
        When user select logout link
        And user select yes from promptScreen
        Then user should see loginPage
