//掌门接口返回统一格式
interface ZMResponse<T> {
    code: string;
    data: T;
    message?: string;
}

//掌门接口分页格式
interface Page<T> {
    currentPage: number;
    totalCount: number;
    totalPage: number;
    list: T;
}

//用户信息定义
interface ZMUserInfo {
    baseYearHolidayStartDate?: string;
    createUserName?: string;
    district?: district;
    email?: string;
    enterRoleGroupDate?: string;
    firstLevelOrg?: string;
    jobId?: number;
    jobLevel?: string;
    jobName?: string;
    jobPosition?: string;
    mobile?: string;
    operApps?: string;
    orgId?: number;
    orgName?: string;
    personCode?: string;
    personId?: number;
    personName?: string;
    personStatus?: number;
    personStatusString?: string;
    personType?: number;
    role?: string;
    secondLevelOrg?: string;
    stuffHiredate?: number
    thirdLevelOrg?: string;
    userId?: number;
}

//掌门菜单定义
interface ZMMenu {
    ext1: string;
    ext2: string;
    ext3: string;
    ext4: string;
    ext5: string;
    icon: string;
    id: number;
    menuName: string;
    path: string;
    permission: string;
    subMenu: ZMMenu[] | null
}

//初始化信息定义
interface InitInfo {
    me: ZMUserInfo;
    menu: ZMMenu[];
    permission: string[]
}


