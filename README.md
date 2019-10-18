# [arms.js](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/arms.js/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/arms.js.svg?style=flat)](https://www.npmjs.com/package/arms.js) [![npm downloads](https://img.shields.io/npm/dm/arms.js.svg)](https://npmcharts.com/compare/arms.js?minimal=true) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Alibaba Cloud Application Real-Time Monitoring Service (ARMS).

*前端监控专用, F2E only.*

## Installation

```
npm install arms.js --save
```

## Usage

```js
import arms from 'arms.js';

const __bl = arms({ pid: 'your pid', active: process.env.NODE_ENV === 'production' });

__bl.api( /* argv */ );
__bl.sum( /* argv */ );
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
