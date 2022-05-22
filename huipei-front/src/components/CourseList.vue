<template>
    <div class="el-main-div">
        <h3>详情页列表</h3>
        <el-card class="box-card" shadow="never">
            <el-form>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-form-item label="详情页名称">
                            <el-input v-model="form.vague" placeholder="请输入"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col class="text_right" :span="15">
                        <el-button  type="primary" @click="search">查询</el-button>
                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary" @click="add">添加</el-button>
                    </el-col>
                </el-row>

            </el-form>
            <el-table :data="tableData" style="width: 100%" @cell-dblclick = "edit">
                <el-table-column type="index" label="序号" width="100"/>
                <el-table-column  prop="name" label="详情页名称" >
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
            <span style="color:red; font-size: xx-small;">提示：双击列表行可进行修改</span>
            <div class="pagination">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-sizes="[20, 50, 100, 200]"
                               :page-size="form.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="form.pageTotal">
                </el-pagination>
            </div>
        </el-card>
        <el-dialog v-model="dialogVisible" :title="dialogTitle">
            <el-form>
                <el-row :gutter="20">
                    <el-col :span="15" :offset="3">
                        <el-form-item label="详情页名称">
                            <el-input v-model="dialog.name" placeholder="请输入详情页名称"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="15" :offset="3">
                        <el-form-item label="专题名称&#12288;">
                            <el-select v-model="dialog.code" placeholder="请选择所属专题" style="width: 100%">
                                <el-option
                                        v-for="item in specialSubject"
                                        :key="item.code"
                                        :label="item.name"
                                        :value="item.code"
                                />
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="13" :offset="10" class="text_right">
                        <el-button  type="primary" @click="editSave">保存</el-button>
                        <el-button  type="primary" @click="cancel">取消</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import router from "@/router";
    import { ElMessage, } from 'element-plus'
    import axios from "axios"
    import commonData from "@/data/commonData";
    export default {
        name: "CourseList",
        data() {
            return {
                dialogTitle:"新增",
                dialogVisible:false,
                dialog: {
                    id:'',
                    name: '',
                    code:''
                },
                specialSubject:commonData.specialSubject,
                tableData:[
                ],
                form:{
                    vague:'',
                    pageSize:10,
                    pageNo:1,
                    pageTotal:0,
                }
            }
        },
        created(){
            this.search();
        },
        methods:{
            handleEdit(row){
                router.push({path:"/courseUpload", query:{id:row.id, name:row.name}})
            },
            handleChange(row){
                console.info(row);
                ElMessage.info("触发成功")
            },
            search(){
                axios.post("/admin/course/list",this.form).then((response) => {
                    this.tableData = response.data.list
                    this.tableData.forEach(item=> item.enable = item.enable === 1);
                    this.form.pageTotal = response.data.total
                }).catch(()=>{
                    ElMessage.error("查询失败");
                })
            },
            add(){
                this.dialogTitle = '新增';
                this.dialogVisible = true;
            },
            edit(row){
                this.dialogTitle = '修改';
                this.dialogVisible = true;
                this.dialog.name = row.name;
                this.dialog.id = row.id;
                this.dialog.code = row.code;
            },
            editSave(){
                this.dialogVisible = false;
                axios.post("/admin/course/save",this.dialog).then(() => {
                    ElMessage.success("保存成功");
                }).catch(()=>{
                    ElMessage.error("保存失败");
                })
                this.search();
            },
            cancel(){
                this.dialogVisible = false;
                this.dialog={}
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
