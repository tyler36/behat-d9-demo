# Behat with drupal demo <!-- omit in toc -->

- [Requirements](#requirements)
- [Installation](#installation)
- [Drivers](#drivers)
  - [Goutte](#goutte)
- [Errors](#errors)
  - [cURL error 60: SSL certificate problem](#curl-error-60-ssl-certificate-problem)
- [Cypress-local](#cypress-local)

## Requirements

Based on `Drupal 9.3`, it has the following requirements:

- PHP 8.0
- Mysql database

## Installation

Based on [How to use behavior-driven development in Drupal with Behat](https://opensource.com/article/19/3/how-drupal-behat)

- Install behat with Drupal extenstions.

```shell
composer require drupal/drupal-extension --dev -W
```

- Add `behat.yml` config

```yml
# behat.yml
default:
  suites:
    default:
      contexts:
        - Drupal\DrupalExtension\Context\DrupalContext
        - Drupal\DrupalExtension\Context\MinkContext
        - Drupal\DrupalExtension\Context\MessageContext
        - Drupal\DrupalExtension\Context\DrushContext
  extensions:
    Behat\MinkExtension:
      goutte: ~
      base_url: http://example.org/  # Replace with your site's URL
    Drupal\DrupalExtension:
      blackbox: ~
```

- initialize behat project

```shell
./vendor/bin/behat -init

## Behat

- Show step definitions

```shell
$ ./vendor/bin/behat -dl
default | Given I am an anonymous user
default | Given I am not logged in
default | Then I log out
default | Given I am logged in as a user with the :role role(s)
default | Given I am logged in as a/an :role
default | Given I am logged in as a user with the :role role(s) and I have the following fields:
default | Given I am logged in as :name
default | Given I am logged in as a user with the :permissions permission(s)
default | Then I should see (the text ):text in the :rowText row
default | Then I should not see (the text ):text in the :rowText row
default | Given I click :link in the :rowText row
default | Then I (should )see the :link in the :rowText row
default | Given the cache has been cleared
default | Given I run cron
default | Given I am viewing a/an :type (content )with the title :title
default | Given a/an :type (content )with the title :title
default | Given I am viewing my :type (content )with the title :title
default | Given :type content:
default | Given I am viewing a/an :type( content):
default | Then I should be able to edit a/an :type( content)
default | Given I am viewing a/an :vocabulary term with the name :name
default | Given a/an :vocabulary term with the name :name
default | Given users:
default | Given :vocabulary terms:
default | Given the/these (following )languages are available:
default | Then (I )break

# Show step definitions in different language, eg. JA
$ ./vendor/bin/behat -dl --lang=ja
```

- Show story-syntax in different language

```shell
behat --story-syntax --lang=ja
```

## Drivers

- [list of supported drivers](https://mink.behat.org/en/latest/guides/drivers.html)

### Goutte

- command-line browser
- does **NOT** support javascript

## Errors

### cURL error 60: SSL certificate problem

- Issue: Trying to access a DDEV-hosted website

```shell
$ behat

  Scenario: A visitor can use the site-wide contact form     # features/contact-form.feature:6
    Given I am at "contact/feedback"                         # \DrupalExtension\Context\MinkContext::assertAtPath()
      cURL error 60: SSL certificate problem: unable to get local issuer certificate (see https://curl.haxx.se/libcurl/c/libcurl-errors.html) (GuzzleHttp\Exception\RequestException)
```

- Occurs when trying to access a HTTPS site with a self-signed certificate
- Solution:  Update `behat.yml`

```yml
  extensions:
    Behat\MinkExtension:
      goutte:
        guzzle_parameters:
          verify: false
```


## Cypress-local

- Install cypress

```shell
npm install cypress@^9 --save-dev
```

- Run install config

```shell
cypress install
```

- Add `cypress.json` config; should include updated `baseUrl`

```json
{
    "baseUrl": "https://behat-demo.ddev.site"
}
```

- Remove unused tests in `./cypress.intergration`
- Add additional test
- Run Cypress

```shell
cypress open
```
