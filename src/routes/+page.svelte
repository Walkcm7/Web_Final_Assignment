<script>
    import Header from "$lib/Header.svelte"
    import { onMount } from "svelte";

    let codeInput;
    let codeOutput;
    let textArea;
    let lineNumbers;

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

    onMount(() => {
        codeInput.focus();
        updateLineNumbers();
    });
</script>

<Header />

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



<style>

    .cardcontainer {
        display: grid;
        width: 80em;
        height: 40em;
        margin-top: 1em;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 8fr 1fr;
        grid-column-gap: 1em;
        grid-row-gap: 0.2em;
        justify-self: center; 
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

</style>
