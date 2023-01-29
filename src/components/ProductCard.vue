<script>
export default {
    name: "produCard",
    props: {
        item: Object,
        url: String,
    },
    computed: {

        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.item.original_language);
        },
        flagSrc() {
            const url = new URL(`../assets/img/${this.item.original_language}.png`, import.meta.url);
            return url.href;
        }
    }
}
</script>

<template>
    <div class="col d-flex justify-content-left align-items-center w-25">
        <div class="card">
            <img class="img-fluid poster" :src="url" alt="">
        </div>
        <div class="card-back ">
            <div class="text-center">
                <ul class="text-center p-3">
                    <li>Titolo: {{ item.title || item.name }}</li>
                    <li v-if="(!item.title && !item.name)">Titolo Originale: {{
                        item.original_title ||
                            item.original_name
                    }}
                    </li>
                    <li>
                        <img class="img-fluid flag" v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
                        <div>{{ item.original_language }}</div>
                    </li>
                    <!-- <li class="text-danger">Overview: {{ item.overview }}</li> -->
                    <li>{{ Math.ceil(item.vote_average / 2) }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss" >
.card {
    min-width: 200px;
    max-width: 100%;
    height: 80%;
    border: 2px dashed darkred;
    padding: 0;

}

img {
    width: 200px;
    height: 300px;
}

.flag {
    width: 60px;
    height: 40px;
}

.card-back {
    width: 200px;
    height: 300px;
    background-color: black;
    border: 2px solid #fff;
    color: #fff;
    display: none;
    overflow: auto;
    padding: 5px;
    text-align: center;
}

.col:hover {
    .card {
        display: none
    }

    .card-back {
        display: block;
        width: 200px;
        height: 300px;
        border: 2px dashed blue;
    }
}


.col {
    height: 100%;
    width: 100%;
}
</style>