module.exports = {
  hooks: {
    preCommit: 'npm run test && npm lint:fix',
  },
};
