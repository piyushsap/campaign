class ComponentService {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.componentSubscribers = [];
        this.componentEditSubscribers = [];
    }
    async fetchComponents() {
        // const response = await fetch(baseURL + 'components.json');
        // const json = await response.json();
        // return json || [];
        return [];
    }

    async postComponents(components) {
        const response = await fetch(baseURL + 'components.json', {method: 'put', body: JSON.stringify(components)});
        console.log(response)
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


}
const baseURL = "https://campaignbuilder-cf2fa.firebaseio.com/";
const componentService = new ComponentService(baseURL);
export default componentService;