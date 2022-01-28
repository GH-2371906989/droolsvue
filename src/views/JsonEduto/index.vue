<template>
	<div>
		<hr />
		<div ref="jsoneditor-vue" class="jsoneditor-vue"></div>
	</div>
</template>

<script>
	import "./jsoneditor.css";
	import JSONEditor from "./jsoneditor";
	export default {
		props: {
			value: [String, Number, Object, Array],
			mode: {
				type: String,
				default: "tree"
			},
			expandedOnStart: {
				type: Boolean,
				default: false
			},
			modes: {
				type: Array,
				default: function() {
					return ["tree", "code", "form", "text", "view"];
				}
			},
		},
		watch: {
			value: {
				immediate: true,
				async handler(val) {
					if (!this.internalChange) {
						await this.setEditor(val);

						this.error = false;
						this.expandAll();
					}
				},
				deep: true
			}
		},
		data() {
			return {
				editor: null,
				json: this.value,
				error: false,
				internalChange: false, //内部变化
				expandedModes: ["tree", "view", "form"],
			}
		},
		mounted() {
			let self = this;
			var element = this.$refs["jsoneditor-vue"]
			let options = {
				//模式
				mode: this.mode,
				modes: this.modes, // allowed modes
				//改变之后调用
				onChange() {
					try {
					  let json = self.editor.get();
					  self.json = json;
					  self.error = false;
					  self.internalChange = true;
					  self.$emit("input", JSON.stringify(json,null,' '));
					  self.$nextTick(function() {
					    self.internalChange = false;
					  });
					} catch (e) {
					  self.error = true;
					}
				},
				//模式改变调用
				onModeChange() {
					self.expandAll();
				}
			};
			this.editor = new JSONEditor(element, options, this.json);
		},
		methods: {
			expandAll() {
				if (
					this.expandedOnStart &&
					this.expandedModes.includes(this.editor.getMode())
				) {
					this.editor.expandAll();
				}
			},
			async setEditor(value) {
				if (this.editor) this.editor.set(value);
			}
		}


	}
</script>

<style>
	.jsoneditor-vue {
	  height: 641px;
	}
</style>
