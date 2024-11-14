
<header>
    <a href="/"><h1>Pig Latin Translator</h1></a>
    <nav>
        <a href="/about_me">About Me</a>
    </nav>
</header>

<style>
    header {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        background-color: #A52422;
        box-shadow: 0px 5px 10px #202020;
        color: #fefefe;
        top: 0;
        position: sticky;
        z-index: 999;
    }

    h1 {
        font-size: 300%;
        padding-left: 1em;
    }

    nav {
        display: flex;
        flex-direction: row;
        padding-right: 10em;
        font-size: 125%;
    }

    @media (max-width: 1320px) {
        h1 {
            font-size: 200%;
        }
    }

    @media (max-width: 1070px) {
        nav {
            padding-right: 1em;
        }
    }
</style>