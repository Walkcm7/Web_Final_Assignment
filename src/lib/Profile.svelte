<script>
    export let profile;
</script>

<article>
    <img src={profile.avatar} alt="This users profile avatar">
    <h3>{profile.first_name} {profile.last_name}</h3>
    <p>This is the greatest website I have ever visited</p>
    <figure>*****</figure>

</article>

<style>

    article {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        border: 1px solid black;
    }

    img {
        border-radius: 50%;
        grid-column: 1 / span 1;
        grid-row: 1 / span 2;
    }

    h3 {
        grid-column: 2 / span 1;
        grid-row: 1 / span 1;
    }

    p {
        grid-column: 2 / span 2;
        grid-row: 2 / span 1;
    }

    figure {
        grid-column: 3 / span 1;
        grid-row: 1 / span 1;
    }

</style>