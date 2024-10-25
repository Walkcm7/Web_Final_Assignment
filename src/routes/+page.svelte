<script>
    import Header from "$lib/Header.svelte"
</script>

<Header />

<div class="cardcontainer">
    <textarea type="text">
    </textarea>
    <div class="output">

    </div>
</div>



<style>

    .cardcontainer {
        display: flex;
        justify-self: center;
    }

    textarea,.output {
        background-color: #eee;
        width: 30em;
        height: 30em;
    }
</style>
