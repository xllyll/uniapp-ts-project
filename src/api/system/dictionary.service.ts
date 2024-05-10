import { http } from '@/utils/http';
import { RequestEnum } from '@/enums/httpEnum';

export function dicAll() {
	
  const pagesize =
    import.meta.env.VITE_APP_PAGE_SIZE *
    import.meta.env.VITE_APP_PAGE_SIZE *
    import.meta.env.VITE_APP_PAGE_SIZE;
  
  return http.request({
    url: `${import.meta.env.VITE_APP_GATEWAY_URL}${
      import.meta.env.VITE_APP_FRAMEWORK_URL
    }service/param/fuzzy`,
    params: { pageSize: pagesize },
    method: RequestEnum.GET,
  });
}

export function getDictionaryData(
  typeNameEn: string,
  name?: string,
  status?: string,
  clientId?: string
) {
  return http.request({
    url: `${import.meta.env.VITE_APP_GATEWAY_URL}${
      import.meta.env.VITE_APP_FRAMEWORK_URL
    }service/dictionary/fuzzy`,
    params: {
      pageSize: import.meta.env.VITE_APP_PAGE_SIZE * import.meta.env.VITE_APP_PAGE_SIZE,
      pageNum: 1,
      total: 0,
      orderColumn: 'code asc',
      typeNameEn: typeNameEn,
      name: name,
      status: status,
      clientId: clientId,
    },
    method: RequestEnum.GET,
  });
}

export function getTree(codeEn: String, isShowStop: Boolean) {
  return http.request({
    url: `${import.meta.env.VITE_APP_GATEWAY_URL}${
      import.meta.env.VITE_APP_FRAMEWORK_URL
    }service/dictionary/tree`,
    params: { codeEn: codeEn, isShowStop: isShowStop },
    method: RequestEnum.GET,
  });
}
