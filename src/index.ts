import fs from 'fs';
import path from 'path';
import json2string from './json2string';
import { IApi } from 'umi-plugin-types';

export default function(api: IApi, option = {} as Option) {
  const opt = json2string(option);
  const code = `import arms from 'arms.js';arms(${opt});`;
  const target = path.join(__dirname, 'arms.js');
  fs.writeFileSync(target, code);

  api.addEntryPolyfillImports({
    source: target,
  });
}
