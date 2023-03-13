@login
Feature: Dg User login

    Background:
        Given User is on DataGardener website
        When User select login link
        And User enters 'moxeyol466@keshitv.com' and 'Noida123' to login

    Scenario: Dg User login with valid credentials
        Then User should see the dashboard page

    Scenario: DG User selecting pdfReports
        When user select pdfReports link
        Then user should see pdfReportsPage


    Scenario: DG User logout from DG portal
        When user select logout link
        And user select yes from promptScreen
        Then user should see loginPage