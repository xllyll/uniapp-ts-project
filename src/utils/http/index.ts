import { useUserStore, type UserInfoType } from "@/store/modules/user";
import { isNullOrUnDef } from "../is";

export class HttpAction {
  /**
   * @description: 设置通用header
   */
  setHeader(headers: any): void {
    headers["yunlios-tenant-client-id"] = `${import.meta.env.VITE_APP_ID}`;
    const user: UserInfoType = useUserStore().getUserInfo;
    if (!isNullOrUnDef(user)) {
      const selectTenantCode = user["selectTenantCode"];
      if (!isNullOrUnDef(selectTenantCode)) {
        headers["yunlios-tenant-code"] = `${selectTenantCode}`;
      }
      const userGuid = user.guid;
      if (!isNullOrUnDef(userGuid)) {
        headers["yunlios-tenant-user-guid"] = `${userGuid}`;
      }
      const phone = user.phone;
      if (!isNullOrUnDef(phone)) {
        headers["yunlios-tenant-user-name"] = `${phone}`;
      }
    }
  }
  request<T = any>(options: any): Promise<T> {
    let baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}`;
    let url = baseUrl + options.url;
    let headers = options.headers || {};
    this.setHeader(headers);
    return new Promise((resolve, reject) => {
      uni.request({
        url: url,
        method: options.method,
        header: headers,
        dataType: options.dataType || "json",
        data: options.data,
        params: options.params,
        success: (res) => {
          resolve(res as any);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  }
}

export const http = new HttpAction();
