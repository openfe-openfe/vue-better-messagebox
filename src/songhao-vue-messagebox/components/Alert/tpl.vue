<template>
    <transition name="songhao">
        <div v-if="show" class="songhao">
            <div class="songhao-popup songhao-popup-in">
                <div class="songhao-popup-inner">
                    <div class="songhao-popup-title" v-if="title">{{title}}</div>
                    <div class="songhao-popup-text">{{content}}</div>
                </div>
                <div class="songhao-popup-buttons">
                    <span class="songhao-popup-button songhao-popup-button-bold" :style="btn.style" @click="success">
                        {{btn.text}}
                    </span>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import pageChange from '../../mixins'
    export default {
        mixins: [pageChange],
        data () {
            return {
                show: false,
                title: '提示',
                content: '',
                btn: {
                    text: '确定',
                    style: {}
                }
            }
        },
        mounted () {
        },
        methods: {
            success () {
                this.show = false;
            }
        }
    }
</script>