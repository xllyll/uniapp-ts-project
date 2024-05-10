import { defineStore } from "pinia";
import { store } from "@/store";
import { ACCESS_TOKEN, CURRENT_USER } from "@/store/mutation-types";
import { storage } from "@/utils/storage";
import { isNullOrUnDef } from "@/utils/is";
import { logoutClient } from "@/api/system/theme.service";

export type UserInfoType = {
  // TODO: add your own data
  [key: string]: any;
  /** Name for current user */
  name?: string;
  /** Avatar for current user */
  avatar?: string;
  /** Email for current user */
  email?: string;
  /** 用户ID */
  guid?: string;
  /** 用户登录名 */
  login?: string;
  /** 用户手机号 */
  phone?: string;
  /** 用户别名 */
  alias?: string;
  /** 用户隶属租户Code */
  selectTenantCode?: string;
};

export interface IUserState {
  token: string;
  username: string;
  avatar: string;
  permissions: any[];
  info: UserInfoType;
}

export const useUserStore = defineStore({
  id: "app-user",
  state: (): IUserState => ({
    token: storage.get(ACCESS_TOKEN, null),
    username: "",
    avatar: "",
    permissions: [],
    info: storage.get(CURRENT_USER, null),
  }),
  getters: {
    getToken(): string {
      return this.token;
    },
    getAvatar(): string {
      return this.avatar;
    },
    getNickname(): string {
      return this.username;
    },
    getPermissions(): [any][] {
      return this.permissions;
    },
    getUserInfo(): UserInfoType {
      return this.info;
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
      storage.set(ACCESS_TOKEN, token);
    },
    setPermissions(permissions: any) {
      this.permissions = permissions;
    },
    setUserInfo(info: UserInfoType) {
      this.info = info;
      if (!isNullOrUnDef(info.guid)) {
        this.username = info.name || info.alias || "";
        this.avatar = info.avatar || "";
      }
      storage.set(CURRENT_USER, info);
    },

    // 登出
    async logout(accessToken:any) {
      const result = await logoutClient(accessToken);
      this.setPermissions([]);
      this.setUserInfo({});
      this.setToken("");
      storage.clear();
      storage.clearCookie();
      return result;
    },
  },
});

// Need to be used outside the setup
export function useUser() {
  return useUserStore(store);
}
