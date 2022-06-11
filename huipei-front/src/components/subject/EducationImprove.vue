<template>
    <div class="el-main-div">
        <el-row :gutter="20">
            <el-col :span="6">
                <h3>学历提升</h3>
            </el-col>
            <el-col :span="2" :offset="15">
                <el-button type="primary" @click="returnBack"><el-icon><Back /></el-icon>返回</el-button>
            </el-col>
        </el-row>
        <el-card class="box-card" shadow="never">
            <el-form>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">滚动页</el-col>
                    <el-col :span="18">
                        <el-upload
                                :action="uploadUrl"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :file-list="form.rollingPicUrl"
                        >
                            <el-icon><Plus /></el-icon>
                        </el-upload>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">金刚区</el-col>
                    <el-col :span="18">
                        <el-upload
                                :action="uploadUrl"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :file-list="form.introductionPicUrl"
                        >
                            <el-icon><Plus /></el-icon>
                        </el-upload>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">学历方案</el-col>
                    <el-col :span="18">
                        <el-row :gutter="10">
                            <el-form-item>
                                <el-input v-model="form.degreeProgram.title" placeholder="请输入标题"></el-input>
                            </el-form-item>
                        </el-row>
                        <el-row :gutter="10">
                            <el-upload
                                    :action="uploadUrl"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :file-list="form.degreeProgram.picUrls"
                            >
                                <el-icon><Plus /></el-icon>
                            </el-upload>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">学习群</el-col>
                    <el-col :span="18">
                        <el-row :gutter="10">
                            <el-col :span="6">
                                <el-upload
                                        class="avatar-uploader"
                                        :action="uploadUrl"
                                        :show-file-list="false"
                                        :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.learningGroup.displayImage)}"
                                >
                                    <img v-if="form.learningGroup.displayImage.url" :src="form.learningGroup.displayImage.url" class="middle-avatar" />
                                    <el-icon v-else class="min-avatar-uploader-icon">群图片</el-icon>
                                </el-upload>
                            </el-col>

                            <el-col :span="6">
                                <el-upload
                                        class="avatar-uploader"
                                        :action="uploadUrl"
                                        :show-file-list="false"
                                        :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.learningGroup.groupQR)}"
                                >
                                    <img v-if="form.learningGroup.groupQR.url" :src="form.learningGroup.groupQR.url" class="middle-avatar" />
                                    <el-icon v-else class="min-avatar-uploader-icon">群二维码</el-icon>
                                </el-upload>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>

                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">banner</el-col>
                    <el-col :span="18">
                        <el-upload
                                class="avatar-uploader"
                                :action="uploadUrl"
                                :show-file-list="false"
                                :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.banner)}"
                        >
                            <img v-if="form.banner.url" :src="form.banner.url" class="middle-avatar" />
                            <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                        </el-upload>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">热门专业</el-col>
                    <el-col :span="18">
                        <el-row :gutter="10">
                            <el-form-item>
                                <el-input v-model="form.hotMajor.title" placeholder="请输入模块标题"></el-input>
                            </el-form-item>
                        </el-row>
                        <div v-for="(item, index) in form.hotMajor.detail" :key="index">
                            <div class="div-dotted" v-if="index>0"></div>
                            <el-row :gutter="10">
                                <el-col :span="6">
                                    <el-upload
                                            class="avatar-uploader"
                                            :action="uploadUrl"
                                            :show-file-list="false"
                                            :on-success="(res,file)=>{handleAvatarSuccess(res,file,form.hotMajor.detail,index)}"
                                    >
                                        <img v-if="item.picUrl" :src="item.picUrl" class="avatar" />
                                        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                                    </el-upload>
                                </el-col>
                                <el-col :span="6" :offset="1">
                                    <el-form-item >
                                        <el-input v-model="item.majorName" placeholder="请输入专业名称" ></el-input>
                                    </el-form-item>
                                    <el-form-item >
                                        <el-input type="textarea" v-model="item.majorDesc" placeholder="请输入专业介绍" ></el-input>
                                    </el-form-item>
                                    <el-form-item >
                                        <el-input v-model="item.majorType" placeholder="请输入专业类型" ></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4" style="margin-left:10px; margin-top: 70px">
                                    <el-button circle @click="addList(form.hotMajor.detail)" v-if="index ===0">
                                        <el-icon><Plus /></el-icon>
                                    </el-button>
                                    <el-button circle  @click="subList(form.hotMajor.detail,index)" v-if="index>0">
                                        <el-icon><SemiSelect /></el-icon>
                                    </el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="el-row-box">
                <el-col :span="3">咨询服务</el-col>
                <el-col :span="18">
                    <el-upload
                            class="avatar-uploader"
                            :action="uploadUrl"
                            :show-file-list="false"
                            :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.advisoryService)}"
                    >
                        <img v-if="form.advisoryService.url" :src="form.advisoryService.url" class="middle-avatar" />
                        <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                    </el-upload>
                </el-col>
            </el-row>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">正规服务</el-col>
                    <el-col :span="18">
                        <el-row :gutter="20">
                            <el-form-item>
                                <el-input v-model="form.formalService.title" placeholder="请输入标题"></el-input>
                            </el-form-item>
                        </el-row>
                        <el-row :gutter="10">
                            <el-upload
                                    :action="uploadUrl"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :file-list="form.formalService.images"
                            >
                                <el-icon><Plus /></el-icon>
                            </el-upload>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">底部栏</el-col>
                    <el-col :span="18">
                        <el-row :gutter="10">
                            <el-col :span="22">
                                <div v-for="(item, index) in form.bottom.columnList" :key="index" style="width: 100%">
                                    <el-col :span="8" class="text_left">
                                        <el-input v-model="item.title" placeholder="请输入内容名称"></el-input>
                                    </el-col>
                                </div>
                                <el-col :span="2">
                                    <el-button @click="addList(form.bottom.columnList)">
                                        <el-icon><Plus /></el-icon>
                                    </el-button>
                                </el-col>
                                <el-col :span="2" >
                                    <el-button @click="subLast(form.bottom.columnList)">
                                        <el-icon><SemiSelect /></el-icon>
                                    </el-button>
                                </el-col>

                            </el-col>
                        </el-row>
                            <br>
                        <el-row :gutter="10">
                                <el-upload
                                        class="avatar-uploader"
                                        :action="uploadUrl"
                                        :show-file-list="false"
                                        :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.bottom.image)}"
                                >
                                    <img v-if="form.bottom.image.url" :src="form.bottom.image.url" class="middle-avatar" />
                                    <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                                </el-upload>
                        </el-row>
                    </el-col>
                </el-row>


                <el-row :gutter="10">
                    <el-col :span="4" :offset="20">
                        <el-button type="primary" round @click="saveData">确认上传</el-button>
                    </el-col>
                </el-row>

                <el-dialog v-model="dialogVisible" >
                    <img  :src="dialogImageUrl" class="dialog-img" alt="Preview Image" />
                </el-dialog>
            </el-form>
        </el-card>
    </div>

</template>

<script>
    import { ElMessage, } from 'element-plus'
    import UploadProps from 'element-plus'
    import axios from "axios"
    import router from "@/router";
    export default {
        name: "EducationImprove.vue",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                uploadUrl: "/api/upload/image",
                form: {
                    rollingPicUrl: [],
                    introductionPicUrl:[],
                    degreeProgram: {
                        title: '',
                        picUrls: [],
                    },
                    learningGroup:{
                        displayImage:{url:''},
                        groupQR:{url:''}
                    },
                    banner:{url:''},
                    hotMajor:{
                        title:'',
                        detail:[
                            {picUrl:'',majorName:'',majorDesc:'',majorType:''},
                        ]
                    },
                    advisoryService:{url:''},
                    formalService:{
                        title:'',
                        images:[]
                    },
                    bottom:{
                        columnList:[{title:''},],
                        image:{url:''},
                    }
                }
            }
        },
        created(){
           this.detail();
        },
        methods:{
            returnBack(){
                router.push("/subjectList")
            },
            handlePictureCardPreview(uploadFile) {
                this.dialogImageUrl= uploadFile.url
                this.dialogVisible = true
            },
            handleObjectAvatarSuccess(response, uploadFile,object) {
                if (object){
                    object.url = response;
                }

            },
            handleAvatarSuccess(response, uploadFile,picUrl, index) {
                if (picUrl){
                    picUrl[index].picUrl=response;
                }

            },
            beforeAvatarUpload() {
                UploadProps['beforeUpload'] = (rawFile) => {
                    if (rawFile.type !== 'image/jpeg') {
                        ElMessage.error('Avatar picture must be JPG format!')
                        return false
                    } else if (rawFile.size / 1024 / 1024 > 2) {
                        ElMessage.error('Avatar picture size can not exceed 2MB!')
                        return false
                    }
                    return true
                }
            },
            detail(){
                axios.get("/admin/edu/detail").then((response) => {
                    if (response.data){
                        this.form = response.data
                    }
                }).catch(()=>{
                    ElMessage.error("查询失败");
                })
            },
            saveData(){
                let request = this.form;
                request.rollingPicUrl = this.transferPicUrl(this.form.rollingPicUrl, request.rollingPicUrl);
                request.introductionPicUrl = this.transferPicUrl(this.form.introductionPicUrl, request.introductionPicUrl);
                request.degreeProgram.picUrls = this.transferPicUrl(this.form.degreeProgram.picUrls, request.degreeProgram.picUrls);
                request.formalService.images = this.transferPicUrl(this.form.formalService.images, request.formalService.images);

                axios.post("/admin/edu/save",request).then(() => {
                    ElMessage.success("保存成功");
                }).catch(()=>{
                    ElMessage.error("保存失败");
                })
            },
            transferPicUrl(origin, target){
                if (origin){
                    let picUrl = [];
                    origin.forEach((item)=>{
                        let pictureUrl={}
                        if(item.response){
                            pictureUrl.url = item.response;
                            picUrl.push(pictureUrl);
                        }else {
                            picUrl.push({url: item.url})
                        }
                    })
                    target = picUrl.length > 0 ? picUrl : target
                }
                return target;
            },
            addList(list) {
               list.push({})
            },
            addColumn(event){
                this.form.bottom.columnList.push(event.target.value)
            },
            //减号
            subList(list, index) {
                list.splice(index, 1)
            },
            subLast(list){
                if (list.length>1){
                    list.pop()
                }

            }
        }
    }
</script>

<style scoped>
    .avatar {
        width: 170px;
        height: 148px;
        display: block;
    }
    .middle-avatar {
        width: 170px;
        height: 138px;
        display: block;
    }
    .min-avatar {
        width: 100px;
        height: 100px;
        display: block;
    }
    .large-avatar{
        width: 100px;
        height: 100px;
        display: block;
    }
</style>
<style>
    .el-row-box{
        margin-bottom: 50px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
    }
    .avatar-uploader .el-upload:hover {
        border-color: var(--el-color-primary);
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        text-align: center;
    }
    .min-avatar-uploader-icon{
        font-size: 18px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        text-align: center;
    }

    .div-dotted{
        border:1px dashed rgba(169, 169, 169, 0.1);
        height:0;
        width: 500px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>