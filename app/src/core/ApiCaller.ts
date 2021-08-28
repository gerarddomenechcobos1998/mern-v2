import Settings from './Settings';

class ApiCaller {
    apiUrl: string;
    token: string;
    constructor( token?: string, apiUrl?: string) {
        this.apiUrl = apiUrl ? apiUrl : Settings.getApiURL() 
        this.token = token ? token:"";
    }

    async call(url:string, method:string, params?:object) : Promise<any>{  
        var fetchParams:any = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.token
            }
            
        }

        if(params) {
            fetchParams.body = JSON.stringify(params); // convert params to string
        }
        // define separator to fetch params to the URL.
        let separator = '?';
        if(url.indexOf('?') != -1) {
            separator = '&';
        }

        var ApiRoute = url;
        //Settings.getApiURL()+ApiRoute
        return fetch(Settings.getApiURL()+ApiRoute, fetchParams)
            .then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
    }
}

export default ApiCaller;