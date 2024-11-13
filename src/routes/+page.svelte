<script>
    import { onMount } from "svelte";
    import Profile from "../lib/Profile.svelte";

    export let data;
    const profiles = data.profiles.data;
    let codeInput;
    let codeOutput;
    let textArea;
    let reviewContainer;
    let reviewText = '';
    let userName = '';
    let rating = 5; // Default rating

    let reviews = profiles.map(profile => ({
        ...profile,
        reviewText: 'This is the greatest website I have ever visited',
        rating: 5,
    }));

    function translate() {
        let lines = codeInput.split('\n'); // Split the input into an array of lines
        let translatedLines = lines.map(line => {
            // Split the line into words
            let words = line.split(/\s+/);  // Split by spaces and tabs
            
            // Translate each word individually
            let translatedWords = words.map(word => {
                let str = word.trim().toLowerCase(); // Clean each word
                
                if (!str) {
                    return ''; // If the word is empty, return it as is
                }

                // Find the first vowel
                var n = str.search(/[aeiou]/);

                if (n === 0) {
                    // If the word starts with a vowel, add 'way'
                    return str + "way";
                } else if (n === -1) {
                    // If no vowels are found, add 'ay'
                    return str + "ay";
                } else {
                    // Standard case: word starts with a consonant
                    return str.replace(/([^aeiou]*)([aeiou]\w*)/, "$2$1ay");
                }
            });

            // Join the translated words back into a single line
            return translatedWords.join(' ');
        });

        // Join the translated lines back together with newlines
        codeOutput = translatedLines.join('\n');
    }

    function handleKey(event) {
        updateLineNumbers();
        if(event.key == "Enter") translate();
        if (event.repeat) return;
    }

    let lineNumbers = 1;
    function updateLineNumbers() {
        const lines = codeInput.split('\n').length;
        lineNumbers = Array.from({ length: lines }, (_, i) => i + 1);
    }

    function syncScroll() {
        lineNumbers.scrollTop = textArea.scrollTop;
    }

    function submitReview(event) {
        event.preventDefault();
        
        const newReview = {
            first_name: userName,
            last_name: '',
            avatar: 'https://www.gravatar.com/avatar/placeholder',
            reviewText: reviewText,
            rating: rating,
        };

        console.log('Adding new review:', newReview);

        reviews = [
            ...reviews,
            newReview
        ];

        userName = '';
        reviewText = '';
        rating = 5;
    }

    onMount(() => {
        codeInput.focus();
        updateLineNumbers();
    });

</script>

<div class="contentcontainer">

    <!--Container for text areas-->
    <div class="cardcontainer">

        <div class="editor">
            <div class="linenumbers">
                {#each lineNumbers as line}
                    <div>{line}</div>
                {/each}
            </div>
            <textarea
                bind:value={codeInput}
                bind:this={textArea}
                on:keyup={handleKey}
                on:keydown={handleKey}
                on:scroll={syncScroll}
                placeholder="English text here..."></textarea>
        </div>

        <button class="submitbutton" on:click={translate}>
            <p>Translate!</p>
        </button>

        <!--Pig Latin Output Box-->
        <div class="output">
            <pre>{codeOutput}</pre>
        </div>
    </div>

    <!--Auto generated reviews-->
    <div class="reviewcontainer" bind:this={reviewContainer}>
        {#each reviews as profile}
            <Profile {profile} />
        {/each}
    </div>

    <!--Review Card-->
    <form class="reviewform" on:submit|preventDefault={submitReview}>
        <h3>Feel free to leave a review</h3>

        <label for="name">Enter your name: </label>
        <input
            type="text"
            name="name"
            id="name"
            bind:value={userName}
            required/>

        <div class="rate">
            <input
                type="radio"
                id="star5"
                name="rate"
                value="5"
                bind:group={rating}/>
            <label for="star5" title="5 stars">5 stars</label>

            <input
                type="radio"
                id="star4"
                name="rate"
                value="4"
                bind:group={rating}/>
            <label for="star4" title="4 stars">4 stars</label>

            <input
                type="radio"
                id="star3"
                name="rate"
                value="3"
                bind:group={rating}/>
            <label for="star3" title="3 stars">3 stars</label>

            <input
                type="radio"
                id="star2"
                name="rate"
                value="2"
                bind:group={rating}/>
            <label for="star2" title="2 stars">2 stars</label>

            <input
                type="radio"
                id="star1"
                name="rate"
                value="1"
                bind:group={rating}/>
            <label for="star1" title="1 star">1 star</label>

        </div>

        <textarea
            class="reviewtextarea"
            bind:value={reviewText}
            placeholder="This is the greatest website I have ever visited"
            rows="3"
            maxlength="300"
            required></textarea>

        <input type="submit" value="Submit" id="submitbutton" />
    </form>
</div>

<style>
    /* General Layout */
    .contentcontainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* Card Container */
    .cardcontainer {
        display: grid;
        width: 80vw;
        height: 35vw;
        margin-top: 1em;
        margin-bottom: 0.5em;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 8fr 1fr;
        grid-column-gap: 1em;
        grid-row-gap: 0.2em;
        justify-self: center;
    }

    /* Editor Section */
    .editor {
        width: 100%;
        height: 100%;
        grid-row: 1 / span 1;
        position: relative;
        overflow: hidden;
    }

    /* Line Numbers */
    .linenumbers {
        position: absolute;
        top: 0;
        left: 0;
        width: 2em;
        height: 100%;
        padding-top: 0.45em;
        padding-left: 0.2em;
        padding-right: 0.2em;
        text-align: right;
        user-select: none;
        box-sizing: border-box;
        overflow: hidden;
        border-right: 1px solid #ccc;
    }

    /* Textarea (Code Output Area) */
    textarea {
        width: 100%;
        height: 100%;
        padding-left: 3em;
        padding-top: 0.4em;
        font-size: 1em;
        background-color: #eee;
        box-sizing: border-box;
        resize: none;
        overflow: auto;
    }

    /* Output Section (Displays assembled code) */
    .output {
        width: 100%;
        min-height: 100%;
        grid-row: 1 / span 2;
        padding-left: 0.6em;
        padding-top: 0.4em;
        background-color: lightgray;
    }

    /* Assemble Button */
    .submitbutton {
        width: 100%;
        height: 100%;
        background-color: red;
        border-radius: 5px;
        box-shadow: inset 0px 0px 5px black;
    }

    .submitbutton:hover {
        box-shadow: inset 0px 0px 15px black;
    }

    /* Review Form Styles */
    .reviewform {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        max-width: 800px;
        padding: 20px;
        margin: 20px auto;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .reviewform h3 {
        font-size: 1.4rem;
        font-weight: 600;
        color: #333;
        margin-bottom: 16px;
    }

    .reviewform label {
        font-size: 1rem;
        font-weight: 500;
        color: #333;
        margin-bottom: 8px;
    }

    /* Input Fields */
    .reviewtextarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 16px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 1rem;
        box-sizing: border-box;
        transition: border-color 0.3s ease;
        resize: none;
    }

    .reviewtextarea:focus {
        border-color: #0056b3;
        outline: none;
    }

    .reviewtextarea {
        height: 120px;
    }

    /* Submit Button Styles */
    #submitbutton {
        width: 100%;
        padding: 12px;
        background-color: #2a91ff;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 1.1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    #submitbutton:hover {
        background-color: #0056b3;
    }

    #submitbutton:active {
        background-color: #004085;
    }

    /* Star Rating System */
    .rate {
        float: left;
        height: 46px;
        padding: 0 10px;
    }

    .rate:not(:checked) > input {
        position: absolute;
        visibility: hidden;
    }

    .rate:not(:checked) > label {
        float: right;
        width: 1em;
        overflow: hidden;
        white-space: nowrap;
        cursor: pointer;
        font-size: 30px;
        color: #ccc;
    }

    .rate:not(:checked) > label:before {
        content: '★ ';
    }

    .rate > input:checked ~ label {
        color: #ffc700;
    }

    .rate:not(:checked) > label:hover,
    .rate:not(:checked) > label:hover ~ label {
        color: #deb217;
    }

    .rate > input:checked + label:hover,
    .rate > input:checked + label:hover ~ label,
    .rate > input:checked ~ label:hover,
    .rate > input:checked ~ label:hover ~ label,
    .rate > label:hover ~ input:checked ~ label {
        color: #c59b08;
    }

    /* Responsive Layout */
    @media (max-width: 1300px) {
        .cardcontainer {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 9fr 1fr 9fr;
            width: 90vw;
            height: 100em;
        }

        .editor {
            grid-row: 1 / span 1;
        }

        .submitbutton {
            grid-row: 2 / span 1;
        }

        .output {
            grid-row: 3 / span 1;
        }
    }
</style>