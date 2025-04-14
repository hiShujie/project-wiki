<template>
    <div :class="this.className">
        <ul class="w-full left flex-col  pt-4 text-lg">
            <button class="back" type="button" style="color: #6bac74" @click="closeSubMenu()">BACK</button>
            <span class="arrow-left"></span>
            <slot/>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        className: {type: String},
        closeSubMenu: {type: Function},
        selected: {type: String}
    },
}
</script>