class ComponentService {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.componentSubscribers = [];
        this.componentEditSubscribers = [];
    }
    async fetchComponents(query) {
        query = query || '';
        const response = await fetch(baseURL + 'components1' + (query ? '/' + query : '') + '.json');
        const json = await response.json();
        return json || [];
        return [];
    }

    async postComponents(components,query) {
        const response = await fetch(baseURL + 'components1/'+query+'.json', {method: 'put', body: JSON.stringify(components)});
        console.log(response)
    }
    async fetchCampaigns() {
        const response = await fetch(baseURL + 'campaign.json');
        const json = await response.json();
        return json || [];
        return [];
    }

    async postCampaign(campaign) {
        const response = await fetch(baseURL + 'campaign.json', {method: 'post', body: JSON.stringify(campaign)});
        const json = await response.json();
        return json;
    }

    notifyComponentChange(data) {
        this.componentSubscribers.forEach(fn => fn(data));
    }

    addComponentChangeSubscriber(fn) {
        this.componentSubscribers.push(fn);
    }

    addComponentEditSubscriber(fn) {
        this.componentEditSubscribers.push(fn);
    }

    notifyComponentEdit(attributes) {
        this.componentEditSubscribers.forEach(fn => fn(attributes));

    }

    async submitForm(data, query) {
        const response = await fetch(baseURL + 'forms/'+query+'.json', {method: 'post', body: JSON.stringify(data)});
        const json = await response.json();
        return json;
    }


}
const baseURL = "https://campaignbuilder-cf2fa.firebaseio.com/";
const componentService = new ComponentService(baseURL);
export default componentService;