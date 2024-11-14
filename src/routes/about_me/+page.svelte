<div class="contentcontainer">

    <article>
        <div class="imagecontainer"><img src="src\lib\Images\beep.jpg" alt="Callum"></div>              
        <aside><em>Callum Mark Walker (an old photo)</em></aside>
        <p>Meet Callum, a force of nature who somehow stumbled into higher education despite a series of questionable life choices and a constant battle with his alarm clock. Currently pursuing a degree in [insert field here], Callum's true passion lies in perfecting the art of procrastination and debating whether "just one more episode" is a valid reason to delay his academic responsibilities.</p>
        <p>When not in lectures, Callum can be found trying to remember where he left his student ID, searching for Wi-Fi that actually works, and pretending to understand whatever he's reading for class. He’s also honed the rare skill of making instant noodles that taste surprisingly like actual food, thanks to countless late-night study sessions.</p>
        <p>If you spot Callum on campus, he’ll likely be carrying a stack of textbooks that’s suspiciously taller than him. Approach with caution—he may be deep in a philosophical debate about which fast food chain has the superior fries. He’s excited to continue his academic journey, though he’s taking it one snack at a time.</p>
            <ul>
                <li><strong>Fun Facts about Callum:</strong></li>
                <li>Has a 73% success rate in actually showing up to 8 AM classes.</li>
                <li>Once tried to organize a student protest against “the existential dread of group projects”—the protest was very well-intentioned, but poorly executed (he forgot to send the email).</li>
                <li>Has a deep, inexplicable love for spreadsheets, even though he has no idea how to use them effectively.</li>
                <li>Has a pet plush octopus named Terrance. Terrance has survived against all odds.</li>
            </ul>
    </article>

</div>

<style>

    .contentcontainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: calc(100vh - 2em);
    }

    article {
        width: 50%;
        padding: 5em 1em 1em 1em;
        border-radius: 5px;
        margin-top: 10em;
        margin-bottom: 10em;
        background-color: #eee;
        color: #202020;
        position: relative;
        box-sizing: border-box;
        overflow: visible;
    }

    img {
        display: block;
        border-radius: 50%;
        width: 16%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0.5em;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%) translateY(-100%);        
    }

    .imagecontainer {
        width: 100%;
        height: 100%;
        position: relative;
        top: -20%;
    }

    aside {
        text-align: center;
        margin-bottom: 1em;
    }

    p {
        padding-left: 1em;
        padding-right: 1em;
        padding-bottom: 0.5em;
        line-height: 1.5;
        text-align: justify;
    }

    ul {
        margin-top: 1em;
    }

    li {
        list-style: circle;
        margin-left: 2em;
        padding-left: 1em;
        padding-right: 1em;
    }

    li:first-child {
        list-style: none;
        margin-left: 0;
    }

    @media (max-width: 1000px) {
        article {
            width: 80%;
            margin-top: 5em;
            margin-bottom: 5em;
        }
    }

    @media (max-width: 700px) {
        article {
            width: 95%;
            margin-top: 1em;
            margin-bottom: 1em;
        }
    }
</style>