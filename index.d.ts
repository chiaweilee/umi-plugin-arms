interface Option {
  active: boolean;
  prePipe?: any[];
  pid: string;
  imgUrl?: string;
  uid?: string;
  tag?: string;
  page?: string;
  enableSPA?: boolean;
  parseHash?: (hash: string) => string;
  disableHook?: boolean;
  ignoreUrlCase?: boolean;
  urlHelper?: any;
  apiHelper?: any;
  parseResponse?: (res: any) => any;
  ignore?: {
    ignoreUrls?: any[];
    ignoreApis?: any[];
    ignoreErrors?: any[];
  };
  disabled?: boolean;
  sample?: number;
  sendResource?: boolean;
  useFmp?: boolean;
  enableLinkTrace?: boolean;
  release?: string;
  environment?: string;
}

interface BL {
  api: (api: string, success: boolean, time: number, code?: string | number, msg?: string) => void;
  error: (error: Error, pos?: { filename?: string; lineno?: number; colno?: number }) => void;
  sum: (key: string, value?: number) => void;
  avg: (key: string, value?: number) => void;
  setConfig: (next: Option) => void;
  setPage: (page: string, sendPv?: boolean) => void;
}

interface Window {
  __bl: BL;
}
