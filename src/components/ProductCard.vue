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
    <ul>
        <li>
            <img :src="url" alt="">
        </li>
        <li>{{ item.title || item.name }}</li>
        <li>{{ item.original_title || item.original_name }}</li>
        <li>{{ item.overview }}</li>
        <li>
            <img v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
            <div>{{ item.original_language }}</div>
        </li>
        <li>{{ item.vote_average }}</li>
    </ul>

</template>

<style>

</style>