import apiUrl from './environment';
import User from '../models/user';
import Storage from './Storage';

const getCurrentUser = async (): Promise<User> => {
    const currentUser = await Storage.read('user');
    return currentUser;
}
const logout = async (): Promise<void> =>{
    await Storage.remove('user');
}
var Settings = {
    getApiURL: () => {
        return apiUrl;
    },
    getCurrentUser: getCurrentUser,
    logout: logout
}

export default Settings;