<template>
	<div class="home">
		<el-row :gutter="20">
			<el-col :span="10">
				<el-input type="textarea" :rows="30" placeholder="请输入内容" v-model="entity">
				</el-input>
			</el-col>
			<el-col :span="4">
				<el-button type="primary" round @click="execute">执行</el-button>
			</el-col>
			<el-col :span="10">
				<el-input type="textarea" :rows="30" placeholder="请输入内容" v-model="result">
				</el-input>
			</el-col>
		</el-row>



	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				entity: null,
				result: null
			}
		},
		components: {},
		mounted() {

			this.dApi.getEntieyCode()
				.then(data => {
					this.entity = JSON.stringify(data.data, null, " ")
				})
		},
		methods: {
			execute() {
				
				this.dApi.execute(this.entity)
					.then(res => {
						this.result = JSON.stringify(res.data, null, " ")
					})

			}
		}
	}
</script>
