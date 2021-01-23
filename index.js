"use strict"

module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-config-prettier"
  ],
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "no-descending-specificity": null,
    "no-empty-source": null,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        "ignorePseudoElements": [
          "v-deep"
        ]
      }
    ],
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "mixin",
          "extend",
          "include"
        ]
      }
    ]
  }
}
