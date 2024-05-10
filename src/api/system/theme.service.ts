import { http } from "@/utils/http";
import { RequestEnum, ContentTypeEnum } from "@/enums/httpEnum";

export function queryThemeByClientID() {
  return http.request({
    url: `${import.meta.env.VITE_APP_GATEWAY_URL}${
      import.meta.env.VITE_APP_AUTHORIZE_URL
    }api/theme`,
    params: { clientId: import.meta.env.VITE_APP_ID },
    method: RequestEnum.GET,
  });
}

export function logoutClient(accessToken: string) {
  return http.request({
    url: `${import.meta.env.VITE_APP_GATEWAY_URL}${
      import.meta.env.VITE_APP_AUTHORIZE_URL
    }auth/logout`,
    headers: { "Content-Type": ContentTypeEnum.FORM_URLENCODED },
    params: { clientId: import.meta.env.VITE_APP_ID, token: accessToken },
    method: RequestEnum.POST,
  });
}
