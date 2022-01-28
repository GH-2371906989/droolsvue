<template>
	<div class="home">
		<el-row :gutter="15">
			<el-col :span="10">
				<JsonEditor v-model="entity" :mode="'code'">
				</JsonEditor>
			</el-col>
			<el-col :span="4">
				<el-button type="primary" round @click="execute">执行</el-button>
			</el-col>
			<el-col :span="10">
				<JsonEditor v-model="result" :mode="'code'">
				</JsonEditor>
			</el-col>
		</el-row>
		


	</div>
</template>

<script>
	import JsonEditor from './JsonEduto'
	export default {
		name: 'Home',
		data() {
			return {
				entity: null,
				result: null
			}
		},
		components: {
			JsonEditor
		},
		mounted() {

			this.dApi.getEntieyCode()
				.then(data => {
					this.entity = data.data
				})
		},
		methods: {
			execute() {
				
				this.dApi.execute(JSON.stringify(this.entity))
					.then(res => {
						this.result = res.data
					})

			}
		}
	}
</script>
