export async function load({fetch}) {
    const randomPage = Math.floor(Math.random() * 3);
    console.log(randomPage);
    const fetchURLBase = "https://reqres.in/api/users?page=";
    const fetchURL = fetchURLBase.concat(randomPage);
    const response = await fetch(fetchURL);
    const profiles = await response.json();
    return { profiles };
}