# update-notifier

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[update-notifier][update-notifier] with custom scope registry

## Usage

No new concept, use [update-notifier][update-notifier] under the hood.

```bash
npm i @hspkg/update-notifier -S
```

```javascript
const chalk = require('chalk')
const updateNotifier = require('@hspkg/update-notifier')
const pkg = require('./package.json')

const notifier = updateNotifier({
  // optional, default is package scope
  scope: '@ali',
  // optional, default is https://registry.npmjs.org
  registry: 'https://registry.npm.taobao.org',
})({ pkg })

// optional, the same as update-notifier
notifier.update && notifier.notify({
  message: `发现新版本 ${chalk.gray(notifier.update.current)} -> ${chalk.green(notifier.update.latest)}
  运行 ${chalk.cyan('cnpm i -g ') + notifier.packageName} 更新`
})

// Put your code here
```

![](https://cdn.int64ago.org/bza98mea.png)

## Tips

The tool writes custom registry into `$HOME/.config/npm` whose priority is lower than `$HOME/.npmrc`, so users can override the custom registry in `$HOME/.npmrc`.

## License

MIT © [Cody Chan](https://int64ago.org/)

[npm-image]: https://img.shields.io/npm/v/@hspkg/update-notifier.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@hspkg/update-notifier
[downloads-image]: https://img.shields.io/npm/dt/@hspkg/update-notifier.svg?style=flat-square

[update-notifier]: https://github.com/yeoman/update-notifier
