<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="12">
				<div style="height: 500px; border: #000000 1px solid;" ref="container">
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	// import * as monaco from 'monaco-editor'

	export default {
		name: "Editer",
		data() {
			return {
				monacoEditor: {}
			}
		},
		mounted() {
			this.initEditor()
		},
		methods: {
			initEditor() {
				// 初始化编辑器，确保dom已经渲染
				/* this.editor = monaco.editor.create(document.getElementById('container'), {
					value: '', //编辑器初始显示文字
					language: 'sql', //语言支持自行查阅demo
					automaticLayout: true, //自动布局
					theme: 'vs-dark' //官方自带三种主题vs, hc-black, or vs-dark
				}); */
			},
		}
	}
</script>

<style>
</style>
