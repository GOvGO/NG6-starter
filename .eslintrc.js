module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:jasmine/recommended",
    "plugin:protractor/recommended",
  ],
  "plugins": [
    "import",
    "jasmine",
    "protractor",
  ],
  "rules": {
    "class-methods-use-this": ["off"],
    "func-names": ["error", "never"],
    "linebreak-style": 0,
    "no-param-reassign": ["error", { "props": false }],
    "no-underscore-dangle": 0,
    "no-unused-expressions": ["error", { "allowShortCircuit": true }]
  },
  "globals": {
    "window": true,
    "module": true,
    "inject": true,
  },
  "env": {
    jasmine: true,
  }
};
