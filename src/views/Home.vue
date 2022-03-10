<template>
	<div class="home">
		
		<!-- {{cuslist}}
		<el-button @click="ass()">改变</el-button> -->
		<!-- <CusTabel>
			
		</CusTabel>
		<el-divider></el-divider> -->
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



		<el-input placeholder="规则ID" v-model="RuleId" clearable style="width: 20%;">
		</el-input>
		<el-button type="text" @click="CreatDrl(RuleId)">生成规则</el-button>
		<el-button type="text" @click="test()">测试</el-button>
		<el-button
		  size="mini"
		  type="primary"
		  @click="useEditer()"
		  style="font-size: 12px !important;float: right;margin-right: 20px;"
		>
		编辑器
		</el-button>
		<el-dialog title="提示" :visible.sync="centerDialogVisible" width="90%" center @close="cleardialog()">
			<span>
				<el-card class="box-card">
					<el-input style="font-size:20px;font-family:'Microsoft YaHei'" type="textarea" :rows="15"
						v-model="drl">
					</el-input>
				</el-card>
			</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="cleardialog()">取 消</el-button>
			</span>
		</el-dialog>
		
		<!-- 上传 -->
		
		<el-upload
		  class="upload-demo"
		  drag
		  action="http://localhost:9999/drools/upload"
		  multiple>
		  <i class="el-icon-upload"></i>
		  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
		</el-upload>
		
		
	</div>
</template>

<script>
	import JsonEditor from './JsonEduto'
	import CusTabel from './Tabel'
	export default {
		name: 'Home',
		data() {
			return {
				RuleId: null,
				centerDialogVisible: false,
				entity: null,
				result: null,
				cuslist: [
					11, 22, 33
				],
				drl: null
			}
		},
		components: {
			JsonEditor,
			CusTabel
		},
		mounted() {

			this.dApi.getEntieyCode()
				.then(data => {
					this.entity = data.data
				})
		},
		methods: {
			useEditer(){
				this.$router.push({ name: "Editer", params: {} });
			},
			test(){
				let {log:ss} = console
				ss("ss")
				let {success:yes,error:no} = this.$message
				yes("seccess")
			},
			async CreatDrl(id) {
				await this.dApi.getDrl(id)
					.then(res => {
						this.drl = res.data.drl
					})

				this.centerDialogVisible = true;
			},
			cleardialog() {
				this.centerDialogVisible = false;
			},
			execute() {

				this.dApi.execute(JSON.stringify(this.entity))
					.then(res => {
						this.result = res.data
					})

			}
		}
	}
</script>
