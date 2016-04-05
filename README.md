# Iecap

> JavaScript library to detect the version of Internet Explorer and display a warning screen.

### Demo

Example is located [here](http://fedotov.work/iecap/).

### Usage

Install via bower:

```
$ bower install iecap --save
```

or download the `iecap.min.js` file into your repo.

Then, include script file and initialize the library:

```js
iecap.getVersion();
```

### Methods

You can use the following methods:

* `getVersion` — Return the current version of IE browser;
* `displayVersion(availability)` — Display the IE version on `body` container and return the IE version;
* `showScreen(language, availability)` — Show warning screen if the IE version is outdated.

### Options

The some methods use the following params:

* `language` — The language for the template (`en`, `ru`). Defaults to `en`;
* `availability` — The IE version from which the warning screen is displayed. Defaults to `9`;

### Release History

* 1.0.1 — Fixed bugs.
* 1.0.0 — Added bower support.

### License

MIT © [Ilya Fedotov](http://fedotov.me)