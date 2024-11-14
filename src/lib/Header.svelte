
<header>
    <h1>Pig Latin Translator</h1>
    <nav>
        <ul>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres</li>
            <li>Quatro</li>
            <li>Cinco</li>
        </ul>
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

    nav ul {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
    }

    nav ul li {
        list-style: none;
        padding: 0.5em;
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

    @media (max-width: 640px) {

        li {
            display: none;
        }
    }
</style>