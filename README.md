## Commands

```bash
# Opens up the cypress app UI
$ npm run cypress:open

# Runs the tests headlessly
$ npm run cypress:run --browser electron

# See the cypress CLI page for more info

```

## Configuring for environments

The environment details are stored in the `cypress.json` file. To change environment, change the `baseUrl` to your desired env.

To enable the framework work with products, a product url path needs to be added into `cyress/fixtures/productData.json`, with the key of `productUrl`.

## Tech Details

* Cypress - Self proclaiming E2E test framework. Designed to keep UI tests simple and reliable. https://www.cypress.io/

* Cypress/Mocha + Chai - Cypress uses the Mocha & Chai combination for test runner and assertion library.

## Project Structure

```bash
# All the test code lives in here
./cypress/

# New commands and supporting helpers are stored in this directory
./cypress/support/

# Page helpers are stored in here. This is where custom cypress commands
# are stored such as: cy.visitProductPage();
./cypress/support/pages/

# Storage of static data. Can be accessed by cy.fixtures('filename') command. I suggest a read up on the async nature of Cypress prior to this. An example of its use resides in the ./cypress/pages/product.js file, the cy.visitProductPage() function...
./cypress/fixtures/

# Cypress plugins
./cypress/plugins/

# Location of all test files
./cypress/integration/