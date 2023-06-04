// export function localGet (key: string) {
//     const value = window.localStorage.getItem(key)
//     try {
//         return JSON.parse(window.localStorage.getItem(key))
//     } catch (error) {
//         return value
//     }
// }

export const localGet1 = (key:string) => {
    let value:boolean = false;
    try {
        value = JSON.parse(localStorage.getItem(key) || '')
    } catch (error) {
        return value;
    }
}

export const localSet = (key:string, token:string) => {
    localStorage.setItem(key, token);
}

export function localRemove (key:string) {
    window.localStorage.removeItem(key)
}

export const pathMap = {
    login: '登录',
    index: '首页',
    add: '添加商品',
    swiper: '轮播图配置',
}

export const uploadImgServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/file';