<template>
	<div>
		<h3>{{ getcounter }}</h3>
		<el-button @click="cusClick()">点击</el-button>
	</div>
</template>

<script>
	// import * as monaco from 'monaco-editor'
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		name: "Editer",
		data() {
			return {}
		},
		mounted() {
			this.initEditor()
		},
		methods: {
			...mapMutations('app',['increment']),
			...mapActions({
			}),
			initEditor() {},
			cusClick() {
				this.increment();
			}
		},
		computed: {
			...mapState('app',['counter']),
			...mapGetters(['getcounter']),

		}
	}
</script>

<style>
</style>
