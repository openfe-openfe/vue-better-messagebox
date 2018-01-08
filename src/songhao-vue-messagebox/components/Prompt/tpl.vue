<template>
    <transition name="songhao">
        <div v-if="show" class="songhao">
            <div class="songhao-popup songhao-popup-in">
                <div class="songhao-popup-inner">
                    <div class="songhao-popup-title" v-if="title">{{title}}</div>
                    <div class="songhao-popup-text">{{content}}</div>
                    <div class="songhao-popup-input">
                        <input type="text" autofocus="" :placeholder="placeholder" v-model="value" ref="input">
                    </div>                    
                </div>
                <div class="songhao-popup-buttons">
                    <span class="songhao-popup-button" :style="yesStyle" @click="success">{{yes.text}}</span>
                    <span class="songhao-popup-button" :style="noStyle" @click="cancel">{{no.text}}</span>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import pageChange from '../../mixins'
    // import preventPageScroll from 'songhao-utils/prevent-page-scroll'
    export default {
        mixins: [pageChange],
        data () {
            return {
                show: false,
                title: '提示',
                content: '',
                placeholder: '',
                value: '',
                style: {},
                yes: {
                    text: '确定',
                    style: {}
                },
                no: {
                    text: '取消',
                    style: {}
                }
            }
        },
        computed: {
            yesStyle () {
                let o = {};
                for (let key in this.style) {
                    o[key] = this.style[key]
                }
                return Object.assign(o, this.yes.style);
            },
            noStyle () {
                let o = {};
                for (let key in this.style) {
                    o[key] = this.style[key]
                }
                return Object.assign(o, this.no.style);
            }
        },        
        mounted () {
            setTimeout(()=>{
                this.$refs.input.focus();
                document.querySelector('.songhao-popup-input input').focus();
                // alert(document.querySelector('.songhao-popup-input input'))
            },400)
        },
        methods: {
            success () {
                this.show = false;
            },
            cancel () {
                this.show = false;
            }
        }
    }
</script>