# Javascript Datepicker Exercise

## Overview

Create a javascript datepicker that has no library dependencies.

Guidelines for this exercise:

* No javascript frameworks or libraries (e.g. jQuery, Angular, React).
* No CSS Pre-Compilers (LESS, SASS)
* Chrome compliance is all that's required, all functions and features available in Chrome are in play.
* Datepicker should look good across all viewport sizes.
* Documentation
* Modular
* Utilities (helper methods)

## Timeframe

3 to 5 days (No more than a week).

## Design Specifications

None.

### Javascript

Usage:

```js
datepicker();
```

## Config Options

The user should be able to set:
- Initial date
- Start and end years

Take into consideration having defaults.

```js
let config = {
  period: {
    start: 1900,
    end: 2100
  }
};

datepicker(config);
```