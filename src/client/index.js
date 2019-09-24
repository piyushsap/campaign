async function fetchHTML() {
    const response = await fetch("https://campaignbuilder-cf2fa.firebaseio.com/html/-LpJ7Cb-dbw8f63P6QPy.json");
    const json = await response.json();
    return json;
}

fetchHTML().then(html => {
    document.querySelector('#campaign-wrapper').innerHTML = html;
});