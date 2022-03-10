<template>
	<div>
		<el-table :data="tabeldata" style="width: 100%">
			<el-table-column type="index" width="100" label="序号:">
			</el-table-column>
			<el-table-column label="起止日期:">
				<template slot-scope="scope">
					<el-date-picker value-format="yyyy-MM-dd" v-model="scope.row.falstdate" type="date">
					</el-date-picker>
				</template>
			</el-table-column>
			<el-table-column label="工作单位:">
				<template slot-scope="scope">
					<el-input placeholder="请输入内容" v-model="scope.row.addr" clearable>
					</el-input>
				</template>
			</el-table-column>
			<el-table-column label="职位:">
				<template slot-scope="scope">
					<el-input placeholder="请输入内容" v-model="scope.row.position" clearable>
					</el-input>
				</template>
			</el-table-column>
			<el-table-column label="操作:">
				<template slot-scope="scope">
					 <el-button type="primary" @click="add()">+</el-button>
					 <el-button type="primary" @click="remove()">-</el-button>
				</template>
			</el-table-column>
		</el-table>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabeldata: [{
					falstdate: null,
					addr: "",
					position: "",
					sum: 0
				}]
			}
		},
		methods:{
			add(){
				this.tabeldata.push({
					falstdate: null,
					addr: "",
					position: "",
					sum: 0
				})
			},
			remove(){
				if(this.tabeldata.length>1){
				}
			}
		}
	}
</script>

<style>
</style>
