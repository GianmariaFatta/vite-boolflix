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
        },
        vote() {
            return Math.ceil(this.item.vote_average / 2)
        }
    }
}
</script>

<template>
    <div class="col-3 d-flex justify-content-left align-items-center ">
        <div class="card ">
            <!-- <img v-if="src === " class=" img-fluid " src="../assets/img/boolflix-no-poster.png"
                :alt="item.title || item.name"> -->
            <img class=" img-fluid " :src="url" :alt="item.title || item.name">


        </div>
        <div class="card-back ">
            <div class="">
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
                    <li>
                        <i v-for="n in 5" :class="n <= vote ? 'fa-solid' : 'fa-regular'" class=" fa-star"></i>
                    </li>
                    <!-- <li class="text-danger">Overview: {{ item.overview }}</li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss" >
.card {
    // min-width: 200px;
    width: 100%;
    height: 80%;
    // border: 2px dashed darkred;
    margin-bottom: 10px;

}

img {
    width: 100%;
    height: 450px;
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
    text-align: center;
}

.col-3:hover {
    .card {
        display: none
    }

    .card-back {
        display: block;
        width: 100%;
        height: 450px;
        // border: 2px dashed blue;
    }
}


.col {
    height: 100%;
    flex-wrap: wrap;
    align-content: flex-start
}
</style>