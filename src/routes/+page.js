export async function load({fetch}) {
    const response = await fetch(`https://reqres.in/api/users?page=2`);
    const profiles = await response.json();
    return { profiles };
}