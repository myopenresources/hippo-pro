import type { MenuInfo, RequestResultData } from "../types";

export default class MenuApi {

   static updateCommonMenus(menuList: MenuInfo[]) {
        return new Promise<RequestResultData<Object>>((resolve) => {
            resolve({
                status: 200,
                success: true,
                msg: '',
                data: {}
            })
        });

    }

}