class ComponentService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    async fetchComponents() {
        const response = await fetch(baseURL + 'components1.json');
        const json = await response.json();
        return json || [];
        return [];
    }

    async postComponents(components) {
        const response = await fetch(baseURL + 'components1.json', {method: 'put', body: JSON.stringify(components)});
        console.log(response)
    }

}
const baseURL = "https://campaignbuilder-cf2fa.firebaseio.com/";
const componentService = new ComponentService(baseURL);
export default componentService;