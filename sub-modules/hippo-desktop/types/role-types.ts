import type { UserInfo } from "./user-types"

interface RoleInfo {
    id: string
    roleName: string
    roleType: string
    roleTypeName: string
    roleUser: UserInfo[]
}

export type { RoleInfo }