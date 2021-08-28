export interface TestInterface {
    _id?: string,
    email: string,
    name: string,
}


export class TestModel {
    props: TestInterface;

    constructor(profileData: TestInterface) {
        this.props = profileData;
    }

    getId(): string | undefined {
        return this.props._id;
    }

    get(key: string): any {
        if(this.props.hasOwnProperty(key)) {
            //@ts-ignore
            return this.props[key];
        }
        throw "Error: Profile doesn't have the property: " + key;
    }

    toObject(): TestInterface {
        return this.props;
    }

    static keys(): string[] {
        return ["email", "name", ];
    }
}

export class TestCollection {
    profileArr: TestModel[];

    constructor(profileList: TestModel[]) {
        this.profileArr = profileList;
    }

    findBy(key: string, value: string): TestModel[] {
        return this.profileArr.filter((profile: TestModel) => profile.get(key) === value);
    }

    length() {
        return this.profileArr.length;
    }

    items() {
        return this.profileArr;
    }
}

