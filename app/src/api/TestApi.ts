//!
import { TestModel, TestCollection } from '../models/test'
import ApiCaller from '../core/ApiCaller';

class ProfileApiBase {
    apiCaller: ApiCaller;

    constructor(apiCaller: ApiCaller) {
        this.apiCaller = apiCaller;
    }

    async all(): Promise<TestCollection> {
        const data = await this.apiCaller.call('/v1/profile', 'GET');
        return new TestCollection(data.map((item:any) => {
            return new TestModel(item);
        }));
    }

    async read(id: string): Promise<TestModel> {
        const data = await this.apiCaller.call('/v1/profile/'+id, 'GET');
        return new TestModel(data);
    }

    async create(profile: TestModel): Promise<void>{
        return this.apiCaller.call('/v1/profile', 'POST', profile.toObject());
    }

    async update(id: string, profile: TestModel): Promise<TestModel>{
        const data = this.apiCaller.call('/v1/profile/'+id, 'POST', profile.toObject());
        return data;
    }

    async delete(id: string): Promise<void>{
        return this.apiCaller.call('/v1/profile/'+id+'/delete', 'POST', {});
    }
}

export default ProfileApiBase;