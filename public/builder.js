async function fetchHTML(key) {
    const response = await fetch("https://campaignbuilder-cf2fa.firebaseio.com/html/" + key + ".json");
    const json = await response.json();
    return json;
}
const src = document.querySelector('[src*="builder.js?key="]').src;
const key = src.substring(src.indexOf('?key=') + 5);
fetchHTML(key).then(html => {
    document.querySelector('#campaign-wrapper').innerHTML = html;
});