
class User {
    // define Props with interface
    email: string;
    token: string;
    type: string;
    confirmed: boolean;
    
    constructor(email: string, token: string, type: string, confirmed: boolean) {
        this.email = email;
        this.token = token;
        this.type = type;
        this.confirmed = confirmed;
    }
    // Creates new User object
    load(data: any): User {
        return new User(data.email, data.token, data.type, data.confirmed);
    }
    // Creates an object given the data
    toObject(): any {
        return { email: this.email, type: this.type, confirmed: this.confirmed };
    }
    // Check if it is empty user
    isEmpty(): boolean {
        return this.email == undefined;
    }
}
export default User;