import zmAjax from "../index"


export function getUserInfo(params: { appCode: string; systemType?: number }) {
    //设置默认值
    if (!params.systemType) {
        params.systemType = 1;
    }
    return zmAjax.zmGet<InitInfo>("/api/auth/sys/initInfo", { params }).then(res => {
        return res
    });
}