import create from "zustand";
import produce from "immer";
import User from "../models/user";
import Settings from "../core/Settings";
import Profile from "../models/profile";
type AppStoreData = {
    profile: any | null,
    setProfile: Function,
    session: {userInfo: User, loggedIn: boolean, ready: boolean},
    setSession: Function,
    logout: Function
}

export const useAppStore = create<AppStoreData>((set) => ({
    profile: null,
    session: {
        loggedIn: false,
        userInfo: new User('', '', 'guest', "confirmed"),
        ready: false
    },
    setProfile: (payload:Profile) => set(produce((draft:AppStoreData) => {
        draft.profile = payload;
    })),
    setSession: (payload:User) => set(produce((draft:AppStoreData) => {
        draft.session = {
            userInfo: payload,
            ready: true,
            loggedIn: payload.email ? true : false
        };
    })),
    logout: async () => {
        Settings.logout().then(() => {
            set(produce((draft:AppStoreData) => {
                let user = new User('', '', 'guest', 'confirmed');
                draft.session = {
                    loggedIn: false,
                    userInfo: user,
                    ready: true
                };
            }))
        });
    } 
}));