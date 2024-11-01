<script>
    export let profile;
</script>

<article>
    <img src={profile.avatar} alt="This users profile avatar">
    <h3>{profile.first_name} {profile.last_name}</h3>
    <p><em>This is the greatest website I have ever visited</em></p>
    <figure>
        <img src="src\lib\SVG\gold-star.svg" alt="gold star" class="star">
        <img src="src\lib\SVG\gold-star.svg" alt="gold star" class="star">
        <img src="src\lib\SVG\gold-star.svg" alt="gold star" class="star">
        <img src="src\lib\SVG\gold-star.svg" alt="gold star" class="star">
        <img src="src\lib\SVG\black-star.svg" alt="black star" class="star">
    </figure>

</article>

<style>

    article {
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-rows: 1fr 1fr;
        border: 1px solid black;
        border-radius: 5px;
        width: 60%;
        justify-self: center;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    img {
        border-radius: 50%;
        grid-column: 1 / span 1;
        grid-row: 1 / span 2;
        margin: 0.5em;
    }

    h3 {
        grid-column: 2 / span 1;
        grid-row: 1 / span 1;
        padding-top: 1em;
    }

    p {
        grid-column: 2 / span 2;
        grid-row: 2 / span 1;
    }

    figure {
        grid-column: 3 / span 1;
        grid-row: 1 / span 1;
        padding-top: 0.5em;
    }

    .star {
        width: 1em;
        height: auto;
    }

</style>