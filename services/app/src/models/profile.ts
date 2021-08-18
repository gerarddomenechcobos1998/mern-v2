//declare Interface
type ProfileInterface = {
    email: string,
    name: string;
}

class Profile {
    // define Props with interface
    email: string;
    name:string;
    
    constructor(email: string, name:string) {
        this.email = email;
        this.name = name;
    }
    // Creates new Profile object
    load(data: any): Profile {
        return new Profile(data.email, data.name);
    }
    // Creates an object given the data
    toObject(): any {
        return { email: this.email, type: this.name };
    }
    // Check if it is empty Profile
    isEmpty(): boolean {
        return this.email == undefined;
    }
}
export default Profile;