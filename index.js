const updateNotifier = require('update-notifier');
const { parse, stringify } = require('ini');
const { readFileSync, writeFileSync, ensureFileSync } = require('fs-extra');
const { homedir } = require('os');
const { join } = require('path');

const NPM_RC = join(homedir(), '.config/npm');
ensureFileSync(NPM_RC);

module.exports = ({
  scope = '',
  registry = 'https://registry.npmjs.org',
} = {}) => {
  const config = parse(readFileSync(NPM_RC, 'utf-8'));

  return (options = {}) => {
    config[`${scope || ((options.pkg || {}).name || '').split('/')[0]}:registry`] = registry;
    writeFileSync(NPM_RC, stringify(config));

    return updateNotifier(options);
  }
};
