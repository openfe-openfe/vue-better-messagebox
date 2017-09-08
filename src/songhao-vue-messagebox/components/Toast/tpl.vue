<style>
	.songhao-fade-enter {
	  opacity: 0
	}
	.songhao-fade-enter-active, .songhao-fade-leave-active {
	  transition: opacity .4s
	}
	.songhao-fade-leave-active {
		opacity: 0;
	}

</style>
<template>
	<transition name="songhao-fade">
		<div class="songhao-toast" v-if="show">
			<div class="songhao-toast-message">
				{{content}}
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
				content: '',
				duration: 1500
			}
		}
	}
</script>