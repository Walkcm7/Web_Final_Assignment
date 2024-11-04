<script>
    import { onMount } from "svelte";
    import Profile from "../lib/Profile.svelte";

    export let data;
    const profiles = data.profiles.data;
    console.log(profiles);

    let codeInput;
    let codeOutput;
    let textArea;
    let lineNumbers;
    let reviewContainer;

    let starsSliderValue;
    $: console.log(starsSliderValue);

    function assembleCode() {
        codeOutput = codeInput;
    }

    function onKeyUp(event) {

        if(event.repeat) return;

        if(event.key === "Enter") {
            event.preventDefault();
            assembleCode();
        }

        updateLineNumbers();
        
    }

    function onKeyDown(event) {
        updateLineNumbers();

        if(event.key === "Tab") event.preventDefault();
    }

    function updateLineNumbers() {
        const lines = codeInput.split('\n').length;
        lineNumbers.innerHTML = Array.from({ length: lines }, (_,i) => i + 1).join('<br/>');
    }

    function syncScroll() {
        lineNumbers.scrollTop = textArea.scrollTop;
    }

    function submitReview() {
        //reviewContainer.appendChild(<Profile {} >);
    }

    onMount(() => {
        codeInput.focus();
        updateLineNumbers();
    });

</script>

<div class="cardcontainer">   
    
    <div class="editor">
        <div class="linenumbers" bind:this={lineNumbers}></div>

        <textarea type="text" bind:value={codeInput} bind:this={textArea} on:keyup={onKeyUp}  on:keydown={onKeyDown} on:scroll={syncScroll} placeholder="Insert code here..."></textarea>
    </div>

    <button class="submitbutton" on:click={assembleCode}>
        <p>Assemble</p>
    </button>

    <div class="output">
        <p bind:innerText={codeOutput} contenteditable></p>
    </div>

</div>

<div class="reviewcontainer" bind:this={reviewContainer}>
    {#each profiles as profile}
        <Profile {profile} />
    {/each}
</div>


<form>
    <h3>Feel free to leave a review</h3>

    <label for="name">Enter your name: </label>
    <input type="text" name="name" id ="name" required />

    <label for="stars">You've rated us {starsSliderValue}</label>
    <input type="range" name="stars" id="stars" min="1" max="5" step="1" on:change={(e) => starsSliderValue = e.detail.value}/>

    <label for="review">Your review:</label>
    <input type="textArea" name="review" id="review" placeholder="This is the greatest website I have ever visited" required />

    <input type="submit" value="Submit" id="submitbutton" on:click{submitReview} />
</form>

<style>

    .cardcontainer {
        display: grid;
        width: 80vw;
        height: 35vw;
        margin-top: 1em;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 8fr 1fr;
        grid-column-gap: 1em;
        grid-row-gap: 0.2em;
        justify-self: center; 
        margin-bottom: 0.5em;
    }

    .editor {
        width: 100%;
        height: 100%;
        grid-row: 1 / span 1;
        position: relative;
        overflow: hidden;
    }

    .linenumbers {
        position: absolute;
        width: 2em;
        top: 0;
        left: 0;
        padding-top: 0.45em;
        padding-left: 0.2em;
        padding-right: 0.2em;
        text-align: right;
        user-select: none;
        box-sizing: border-box;
        overflow: hidden;
        height: 100%;
        border-right: 1px solid 
    }

    textarea {
        width: 100%;
        height: 100%;
        padding-left: 3em;
        padding-top: 0.4em;
        background-color: #eee;
        font-size: 1em;
        box-sizing: border-box;
        resize: none;
        overflow: auto;
    }

    .output {
        background-color: #eee;
        width: 100%;
        height: 100%;
        grid-row: 1 / span 2;
        padding-left: 0.6em;
        padding-top: 0.4em;
    }

    .submitbutton {
        width: 100%;
        height: 100%;
        background-color: red;
    }

    form {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border: 1px solid black;
        border-radius: 5px;
        width: 60%;
        justify-self: center;
        padding: 1em;
        margin-bottom: 1em;
    }

    #name {
        width: 20%;
        padding: 0.2em;
    }

    #review {
        padding: 0.2em;
    }

    #submitbutton {
        background-color: #7fffd4;
        width: 20%;
        margin-top: 0.5em;
        padding: 0.5em;
    }

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
