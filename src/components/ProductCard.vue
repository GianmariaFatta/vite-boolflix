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
    <div class="card text-center w-25 h-100">
        <img class="img-fluid poster" :src="url" alt="">
        <div class="card-back h-100">
            <ul class="">
                <li>Titolo: {{ item.title || item.name }}</li>
                <li v-if="!(item.title || !item.name)">Titolo Originale: {{ item.original_title || item.original_name }}
                </li>
                <li>
                    <img class="w-25" v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
                    <div>{{ item.original_language }}</div>
                </li>
                <li class="text-danger">Overview: {{ item.overview }}</li>
                <li>{{ Math.ceil(item.vote_average / 2) }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss" >
.card {
    max-width: 300px;
    max-height: 350px;
    border: 2px dashed darkred;
    padding: 0;

}

.card:hover {
    .poster {
        display: none
    }

    .card-back {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
}

.card-back {
    width: 300px;
    height: 350px;
    background-color: black;
    border: 2px solid #fff;
    color: #fff;
    display: none;
    overflow: auto;
}
</style>