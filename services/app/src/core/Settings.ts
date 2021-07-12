import apiUrl from './environment';
import User from '../models/user';
import Storage from './Storage';

const getCurrentUser = async (): Promise<User> => {
    const data = await Storage.read('user');
    const currentUser = User.prototype.load(data);
    return currentUser;
}
const logout = async () =>{
    await Storage.remove('user')
}
var Settings = {
    getApiURL: () => {
        return apiUrl;
    },
    getCurrentUser: getCurrentUser,
    logout: logout
}

export default Settings;