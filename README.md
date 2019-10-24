# [umi-plugin-arms](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/umi-plugin-arms/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/umi-plugin-arms.svg?style=flat)](https://www.npmjs.com/package/arms.js) [![npm downloads](https://img.shields.io/npm/dm/umi-plugin-arms.svg)](https://npmcharts.com/compare/umi-plugin-arms?minimal=true) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Alibaba Cloud Application Real-Time Monitoring Service (ARMS).

*前端监控专用, F2E only.*

* **Npm:** working under npm.
* **Import as polyfill:** arms will be imported as a polyfill.
* **Customized active status:** choose when to active arms.
* **Woking when not active:** `window.__bl` is awalys available even arms not active.
* **Debug:** console debug when arms not active.

## Installation

```
npm install umi-plugin-arms
```

## Usage

```js
// umirc.js

plugins: [
  [
    'umi-plugin-arms',
    {
      pid: 'your arms pid',
    },
  ],
]
```

```js
// usage example
window.__bl.api();
```

## Option

- `pid` string, required.
- `active` boolean, default `process.env.NODE_ENV === 'production'`

*check docs for more options*

## Docs

[开通 ARMS](https://helpcdn.aliyun.com/document_detail/65257.html)

[API 使用指南](https://helpcdn.aliyun.com/document_detail/58657.html)

[前端监控 SDK 配置项](https://helpcdn.aliyun.com/document_detail/58655.html)

[Activate ARMS](https://www.alibabacloud.com/help/doc-detail/65257.htm)

[API user guide](https://www.alibabacloud.com/help/doc-detail/58657.htm)

[SDK configuration items](https://www.alibabacloud.com/help/doc-detail/58655.htm)
