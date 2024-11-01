
<header>
    <h1>6502 Assembly to Hex Converter</h1>
    <nav>
        <ul>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres</li>
            <li>Quatro</li>
            <li>Cinco</li>
        </ul>
        <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
              <a href="google.com">Link 1</a>
              <a href="google.com">Link 2</a>
              <a href="google.com">Link 3</a>
            </div>
          </div>
    </nav>
</header>

<style>
    header {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-top: 1em;
        padding-bottom: 1em;
        background-color: #7fffd4;
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

    .dropdown {
        display: inline-block;
        position: relative;
    }

    .dropbtn {
        background-color: #04AA6D;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
        display: none;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown:hover .dropdown-content {display: block;}

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

        .dropbtn {
            display: inline-block;
        }
    }
</style>