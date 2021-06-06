class ApiCaller {
    constructor() {
    }

    async call(url:string, method:string, params?:object) : Promise<any>{
        
        var fetchParams:any = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if(params) {
            fetchParams.body = JSON.stringify(params);
        }
        return fetch('http://localhost:3000/api', fetchParams)
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