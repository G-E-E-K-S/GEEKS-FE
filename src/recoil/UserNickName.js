import { atom, selector } from "recoil"

export const UserNickName = atom({
    key:'userKey', //전역적으로 유일해야함
    default:'name'
});