<template>
    <div class="el-main-div">
        <h3>咨询列表</h3>
        <el-card class="box-card" shadow="never">
            <el-form>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-form-item label="请输入昵称">
                            <el-input v-model="form.name" placeholder="请输入"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="请输入电话号码">
                            <el-input v-model="form.phone" placeholder="请输入"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="请输入类型">
                            <el-select v-model="form.type" placeholder="请选择类型" style="width: 100%">
                                <el-option
                                        v-for="item in consultType"
                                        :key="item.code"
                                        :label="item.name"
                                        :value="item.code"
                                />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col class="text_right" :span="4">
                        <el-button  type="primary" @click="search">查询</el-button>
                    </el-col>
                </el-row>
            </el-form>

            <el-table :data="tableData"  size="small" style="width: 100%;" :row-style="{height:0+'px'}" :cell-style="{textAlign:'center',padding:0+'px'}" :header-cell-style="{textAlign:'center'}">
                <el-table-column type="index" label="序号" width="100"/>
                <el-table-column  prop="name" label="昵称"/>
                <el-table-column  prop="phone" label="联系方式"/>
                <el-table-column  prop="type" label="类型" >
                    <template #default="scope">
                        <p v-if="scope.row.type === 0">课程预约</p>
                        <p v-if="scope.row.type === 1">考试报名</p>
                        <p v-if="scope.row.type === 2">在线咨询</p>
                    </template>
                </el-table-column>
                <el-table-column prop="source" label="来源"/>
                <el-table-column prop="createTime" label="创建日期" />
                <el-table-column label="操作"  width="150" >
                    <template #default="scope">
                        <div style="text-align: left; margin-left:30px;">
                            <el-icon @click="handleEdit(scope.row)"><Edit /></el-icon>&nbsp;&nbsp;
                            <el-icon @click="openChatDialog(scope.row)" v-if="scope.row.type === 2 && scope.row.unread === 0"><ChatDotRound /></el-icon>
                            <el-badge is-dot class="item" v-if="scope.row.unread >0">
                                <el-icon @click="openChatDialog(scope.row)" ><ChatDotRound /></el-icon>
                            </el-badge>
                        </div>
                        <!--<el-button @click="handleEdit(scope.row)" type="primary" circle >编辑</el-button>-->

                    </template>

                </el-table-column>
            </el-table>
            <div class="pagination" style="text-align: right; width: 100%;">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="form.pageNo"
                               :page-size="form.pageSize" layout="total, prev, pager, next" :total="form.pageTotal">
                </el-pagination>
            </div>
            <div>
                <el-dialog :with-header="false" draggable :close-on-click-modal="false" :modal="false"
                           v-model="chatDialog.display" @close="closeChatDialog">
                    <AdminChat  v-if="chatDialog.display" :containDisplay="chatDialog.display" :source="chatDialog.source"
                                :consultId="chatDialog.consultId" :name="chatDialog.name" :phone="chatDialog.phone"></AdminChat>
                </el-dialog>
            </div>
        </el-card>

        <el-dialog v-model="editDialogVisible" title="备注">
            <el-form>
                <el-row :gutter="20">
                    <el-col :span="15" :offset="3">
                        <el-form-item label="昵称&#12288;&#12288;">
                            <el-input maxlength="32" v-model="editDialog.name" placeholder="请输入昵称"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="15" :offset="3">
                        <el-form-item label="联系方式">
                            <el-input maxlength="32" v-model="editDialog.phone" placeholder="请输入专联系方式"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="13" :offset="10" class="text_right">
                        <el-button  type="primary" @click="editSave">保存</el-button>
                        <el-button  type="primary" @click="cancelVisble">取消</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </el-dialog>

    </div>
</template>

<script>
    import commonData from "@/data/commonData";
    import axios from "axios";
    import { ElMessage, } from 'element-plus'
    import AdminChat from './AdminChat'

    export default {
        name: "ConsultList",
        components:{
            AdminChat
        },
        data() {
            return {
                editDialogVisible:false,
                editDialog:{
                    name:'',
                    phone:'',
                    consultId:'',
                },
                chatDialog:{
                    display:false,
                    consultId:'',
                    title:'',
                    name:'',
                    phone:'',
                    source:''
                },
                consultType: commonData.consultType,
                tableData:[
                ],
                form:{
                    name:'',
                    phone:'',
                    type:'',
                    pageSize:10,
                    pageNo:1,
                    pageTotal:0,
                },
            }
        },
        created(){
            this.search();
        },
        methods:{
            search(){
                axios.post("/admin/consult/list",this.form).then((response) => {
                    this.tableData = response.data.list
                    this.form.pageTotal = response.data.total
                }).catch(()=>{
                    ElMessage.error("查询失败");
                })
            },
            handleSizeChange: function(pageSize) {
                this.form.pageSize = pageSize;
                this.search();
            },
            handleCurrentChange: function(pageNo) {
                this.form.pageNo = pageNo;
                this.search();
            },
            openChatDialog(row){
                this.chatDialog.display = true;
                this.chatDialog.consultId = row.id;
                this.chatDialog.title = row.name;
                this.chatDialog.name = row.name;
                this.chatDialog.phone = row.phone;
                this.chatDialog.source = row.source;
                this.$store.commit("SET_UNREAD", 0);
            },
            closeChatDialog(){
                this.chatDialog.display = false;
                this.search();
            },
            handleEdit(row){
                this.editDialogVisible = true;
                this.editDialog.name = row.name;
                this.editDialog.phone = row.phone;
                this.editDialog.consultId = row.id;
            },
            cancelVisble(){
                this.editDialogVisible = false;
            },
            editSave(){
                axios.post("/admin/consult/edit",this.editDialog).then((response) => {
                    if (response.data){
                        ElMessage.success("保存成功");
                        this.editDialogVisible = false;
                        this.search();
                    }
                }).catch(()=>{
                    ElMessage.error("保存失败");
                })
            },

        },
    }
</script>

<style scoped>
    .item {
        margin-top: 5px;
    }
    .eldialog{
        height: 400px;
    }
    .eldialog .el-dialog .el-dialog__body{
        height: 400px;
    }
</style>