import AsyncStorage from '@react-native-async-storage/async-storage';

var Storage = {
    write: async function write(key: string, value: any): Promise<void> {
        try{
            const jsonValue = JSON.stringify(value)
            const result = await AsyncStorage.setItem(key, jsonValue);
            return result;
        }
        catch(e){
            //save error
            console.log("Error writting to ", key, " key in local storage. Error: ", e)

        }
    },
    
    read: async function read(key: string): Promise<any> {
        try{
            const jsonValue = await AsyncStorage.getItem(key);
            return (jsonValue != null) ? JSON.parse(jsonValue):null;
        }catch(e){
            //save error
            console.log("Error reading ", key, " key from local storage. Error: ", e)
        }
    },
    
    remove: async function remove(key: string): Promise<void> {
        try{
            await AsyncStorage.removeItem(key);
        }catch(e){
            console.log("No se ha podido borrar la ", key, ", key especificada")
        }
    }
}
export default Storage