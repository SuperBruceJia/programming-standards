module.exports = {
  rules: {
    /**
     * 禁止使用 ++ 或 --
     */
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
  },
};