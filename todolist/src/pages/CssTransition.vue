<template>
    <div id="ex">
        <div class="ease">ease</div>
        <div class="linear">linear</div>
        <div class="ease-in">ease-in</div>
        <div class="ease-out">ease-out</div>
        <div class="ease-in-out">ease-in-out</div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
    #ex div {
        float: left;
        width: 100px;
        height: 50px;
        margin: 5px 10px;
        padding: 5px;
        color: white;
        background-color: #006aff;
        border-radius: 5px;
        text-align: center;
        font-weight: bold;
    }
    #ex:hover div {
        height: 400px;
        background-color: aqua;
    }
    #ex .ease {
        transition-duration: 3s, 1s;
        transition-property: height, background-color;
    }
    #ex .linear {
        transition: 3s linear;
    }
    #ex .ease-in {
        transition: 3s ease-in;
    }
    #ex .ease-out {
        transition: 3s ease-out;
    }
    #ex .ease-in-out {
        transition:3s ease-in-out;
    }
</style>