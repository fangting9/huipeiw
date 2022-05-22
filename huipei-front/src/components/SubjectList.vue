<template>
    <div class="el-main-div">
    <h3>专题列表</h3>
    <el-card class="box-card" shadow="never">
        <el-form>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="专题名称">
                        <el-input v-model="form.name" placeholder="请输入专题名称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col class="text_right" :span="4" :offset="12">
                    <el-button  type="primary" @click="search">查询</el-button>
                </el-col>
            </el-row>

        </el-form>
        <el-table :data="tableData" style="width: 100%" @cell-dblclick = "edit">
            <el-table-column type="index" label="序号" width="110"/>
            <el-table-column  prop="name" label="专题名称" >
            </el-table-column>
            <el-table-column prop="createTime" label="创建日期" />
            <el-table-column label="操作"  width="150">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.row)"
                    >编辑</el-button
                    >
                    <el-switch
                            class="left10"
                            v-model="scope.row.enable"
                            inline-prompt
                            active-text="启动"
                            inactive-text="禁用"
                            @click="handleChange(scope.row)"
                    />
                </template>
            </el-table-column>
        </el-table>
        <!--<div class="pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-sizes="[20, 50, 100, 200]"
                           :page-size="form.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="form.pageTotal">
            </el-pagination>
        </div>-->
    </el-card>
    <el-dialog v-model="dialogVisible" :title="dialogTitle">
        <el-form>
            <el-row :gutter="20">
                <el-col :span="15" :offset="3">
                <el-form-item label="专题名称">
                    <el-input v-model="dialog.name" placeholder="请输入专题名称"></el-input>
                </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="13" :offset="10" class="text_right">
                    <el-button  type="primary" @click="editSave">保存</el-button>
                    <el-button  type="primary" @click="dialogVisible=false">取消</el-button>
                </el-col>
            </el-row>
        </el-form>
    </el-dialog>
    </div>
</template>

<script>
    import { ElMessage, } from 'element-plus'
    import router from "@/router";
    import axios from "axios"

    export default {
        name: "SubjectList.vue",
        data() {
            return {
                dialogTitle:"名称修改",
                dialogVisible:false,
                dialog: {
                    code:'',
                    name: '',
                },
                tableData:[ ],
                form:{
                    name:''
                }
            }
        },
        created() {
            this.search();
        },
        methods:{
            handleEdit(row){
                if (row.code === '1'){
                    router.push("/educationImprove")
                }else if (row.code === '2'){
                    router.push("/accountingTraining")
                }else if (row.code === '3'){
                    router.push("/graduate")
                }else if (row.code === '4'){
                    router.push("/constructionEngineerTraining")
                }else if (row.code === '5'){
                    router.push("/textualCriticism")
                }
            },
            handleChange(row){
                let  status = row.enable?1:0;
                axios.get("/admin/subject/enable?status=" + status+"&id="+row.id).then((response) => {
                    if (response.data){
                        ElMessage.success("保存成功");
                    }else {
                        row.enable = !row.enable;
                        ElMessage.error("保存失败");
                    }
                }).catch(()=>{
                    row.enable = !row.enable;
                    ElMessage.error("保存失败");
                })
            },
            search(){
                axios.get("/admin/subject/list?vague=" + this.form.name).then((response) => {
                    this.tableData = response.data
                    this.tableData.forEach(item=> item.enable = item.enable === 1);
                }).catch(()=>{
                    ElMessage.error("查询失败");
                })
            },
            edit(row){
                this.dialogVisible = true
                this.dialog.name = row.name
                this.dialog.code = row.code
            },
            editSave(){
                this.dialogVisible = false
                axios.post("/admin/subject/save",this.dialog).then(() => {
                    ElMessage.success("保存成功");
                }).catch(()=>{
                    ElMessage.error("保存失败");
                })
                this.search();
            },
            handleSizeChange: function(pageSize) {
                this.form.pageSize = pageSize;
                this.search();
            },
            handleCurrentChange: function(pageNo) {
                this.form.pageNo = pageNo;
                this.search();
            },
        }
    }
</script>

<style scoped>
    .left10{
        margin-left: 10px;
    }
</style>
<style >
    .text_right{
        text-align: right;
    }
    .text_left{
        text-align: left;
    }
    .pagination {
        text-align: right;
        padding-top: 20px;
        margin-left: 50%;
    }
</style>
