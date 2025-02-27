module.exports = {
  rules: {
    /** 同 JS 规则的 TS 版本 */
    '@typescript-eslint/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }]
  }
}
