import { request } from "./request.js"
export function getmaindata() {
    return request({
        url: "/home/multidata"
    })
}
export function gethomegoods(type, page) {
    return request({
        url: "/api/n3/home/data",
        params: {
            type,
            page
        }
    })
}
export function getcategory() {
    return request({ url: '/api/n3/category' })
}
export function getSubcategory(maitKey) {
    return request({
        url: '/api/n3/subcategory',
        params: {
            maitKey
        }
    })
}

export function getCategoryDetail(miniWallkey, type) {
    return request({
        url: '/api/n3/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}
export function getDetail(iid) {
    return request({
        url: '/api/n3/detail',
        params: {
            iid
        }
    })
}