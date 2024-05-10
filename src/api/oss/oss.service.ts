import { http } from '@/utils/http';
import { RequestEnum } from '@/enums/httpEnum';

const _url = `${import.meta.env.VITE_APP_GATEWAY_URL}${import.meta.env.VITE_APP_OSS_URL}`;

export function Fuzzy(params: any) {
  return http.request({
    url: `${_url}service/oss/fuzzy`,
    method: RequestEnum.GET,
    params,
  });
}
