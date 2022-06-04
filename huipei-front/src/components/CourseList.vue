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
            <el-table :data="tableData" style="width: 100%" @cell-dblclick = "edit" :cell-style="{textAlign:'center'}" :header-cell-style="{textAlign:'center'}">
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
                                active-text="启用"
                                inactive-text="禁用"
                                @click="handleChange(scope.row)"
                        />
                    </template>
                </el-table-column>
            </el-table>
            <span style="color:red; font-size: xx-small;">提示：双击列表行可进行修改</span>
            <div class="pagination">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="form.pageNo"
                               :page-size="form.pageSize" layout="total, prev, pager, next" :total="form.pageTotal">
                </el-pagination>
            </div>
        </el-card>
        <el-dialog v-model="dialogVisible" :title="dialogTitle">
            <el-form>
                <el-row :gutter="20">
                    <el-col :span="15" :offset="3">
                        <el-form-item label="详情页名称:">
                            <el-input v-model="dialog.name" placeholder="请输入详情页名称"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="15" :offset="3">
                        <el-form-item label="所属专题:&#12288;">
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
                    <el-col :span="15" :offset="3">
                        <el-form-item label="课程列表展示"></el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4" :offset="3">
                        <el-form-item>
                            <el-upload
                                    class="avatar-uploader"
                                    :action="uploadUrl"
                                    :show-file-list="false"
                                    :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,dialog.detail)}"
                            >
                                <img v-if="dialog.detail.url" :src="dialog.detail.url" class="min-avatar" />
                                <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16" :offset="1">
                        <el-row :gutter="20" >
                            <el-form-item label="&#12288;&ensp;¥">
                                <el-input style="width: 60%"  type="number" v-model="dialog.detail.price" placeholder="请输入价格"></el-input>
                            </el-form-item>
                        </el-row>
                        <el-row :gutter="20">
                            <el-form-item label="标签">
                                <el-tag
                                        v-for="(tag, index) in dialog.detail.label"
                                        :key="tag"
                                        class="mx-1"
                                        closable
                                        :disable-transitions="false"
                                        @close="subList(dialog.detail.label, index)"
                                >
                                    {{ tag }}
                                </el-tag>
                                <el-input
                                        style="width: 50%"
                                        v-if="dialog.detail.inputVisible"
                                        v-model="dialog.detail.inputValue"
                                        class="ml-1 w-20"
                                        size="small"
                                        @keyup.enter="handleInputConfirm(dialog.detail,dialog.detail.label)"
                                        @blur="handleInputConfirm(dialog.detail,dialog.detail.label)"
                                        placeholder="请输入标签"
                                />
                                <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput(dialog.detail)">
                                    + New Tag
                                </el-button>
                            </el-form-item>
                        </el-row>

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
                uploadUrl: "/api/upload/image",
                dialog: {
                    id:'',
                    name: '',
                    code:'',
                    detail:{
                        url:'',
                        price:'',
                        label:[]
                    }
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
                    this.tableData.forEach(item=> {
                        item.enable = item.enable === 1;
                        item.detail = this.stringToJson(item.detail)
                    });
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
                if (row.detail){
                    this.dialog.detail = row.detail;
                }
            },
            editSave(){
                this.dialogVisible = false;
                let request = this.dialog;
                request.detail = this.jsonToString(this.dialog.detail);
                axios.post("/admin/course/save",request).then(() => {
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
            handleObjectAvatarSuccess(response, uploadFile,object) {
                if (object){
                    object.url = response;
                }

            },
            //减号
            subList(list, index) {
                list.splice(index, 1)
            },
            handleInputConfirm(item, list){
                if (item.inputValue) {
                    list.push(item.inputValue)
                }
                item.inputVisible = false
                item.inputValue = ''
            },
            showInput(item){
                item.inputVisible = true
            },
            stringToJson(val){
                return val ? JSON.parse(val) : val
            },
            jsonToString(val){
                return JSON.stringify(val);
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

    .min-avatar {
        width: 100px;
        height: 100px;
        display: block;
    }
    .min-avatar-uploader-icon{
        font-size: 18px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        text-align: center;
    }
</style>
