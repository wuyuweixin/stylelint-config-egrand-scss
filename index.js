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
    "scss/selector-no-redundant-nesting-selector": true,
    "no-descending-specificity": null,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        "ignorePseudoElements": [
          "v-deep"
        ]
      }
    ],
    "no-duplicate-selectors": null,
    "no-empty-source": null,
    "font-family-no-missing-generic-family-keyword": null,
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "mixin",
          "extend",
          "content",
          "include"
        ]
      }
    ],
    "max-nesting-depth": 3,
    "selector-max-id": 3,
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-empty-line-before": "never",
    "block-closing-brace-empty-line-before": "never",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-newline-after": "never-multi-line",
    "block-closing-brace-newline-after": "always",
    "selector-list-comma-space-after": "always",
    "selector-list-comma-space-before": "never",
    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always",
    "declaration-bang-space-before": "always",
    "declaration-bang-space-after": "never",
    "max-empty-lines": 1,
    "selector-max-empty-lines": 0,
    "rule-empty-line-before": [
      "always",
      {
        "except": [
          "after-single-line-comment"
        ]
      }
    ],
    "no-empty-first-line": true,
    "declaration-block-trailing-semicolon": "always",
    "block-opening-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "selector-class-pattern": null,
    "declaration-property-value-disallowed-list": null,
    "function-comma-newline-before": "never-multi-line",
    "function-comma-newline-after": "never-multi-line",
    "comment-no-empty": true,
    "comment-empty-line-before": "always",
    "selector-no-qualifying-type": [
      true,
      {
        "ignore": [
          "attribute",
          "class",
          "id"
        ]
      }
    ]
  }
}
