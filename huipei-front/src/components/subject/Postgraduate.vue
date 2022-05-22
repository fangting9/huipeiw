<template>
    <div class="el-main-div">
        <el-row :gutter="20">
            <el-col :span="6">
                <h3>研究生</h3>
            </el-col>
            <el-col :span="2" :offset="15">
                <el-button type="primary" @click="returnBack"><el-icon><Back /></el-icon>返回</el-button>
            </el-col>
        </el-row>
        <el-card class="box-card" shadow="never">
            <el-form>
                <el-row :gutter="20" class="el-row-box">
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
                <el-row :gutter="20" class="el-row-box">
                    <el-col :span="4">考研辅导</el-col>
                    <el-col :span="18">
                        <el-row :gutter="20">
                            <el-form-item>
                                <el-input v-model="form.tutorial.title" placeholder="请输入标题"></el-input>
                            </el-form-item>
                        </el-row>
                        <el-row :gutter="20">
                            <el-upload
                                    :action="uploadUrl"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :file-list="form.tutorial.picUrls"
                            >
                                <el-icon><Plus /></el-icon>
                            </el-upload>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="el-row-box">
                    <el-col :span="3">学习群</el-col>
                    <el-col :span="18">
                        <el-row :gutter="20">
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
                <el-row :gutter="20" class="el-row-box">
                    <el-col :span="3">banner</el-col>
                    <el-col :span="18">
                        <el-upload
                                class="avatar-uploader"
                                :action="uploadUrl"
                                :show-file-list="false"
                                :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.bannerFirst)}"
                        >
                            <img v-if="form.banner.url" :src="form.bannerFirst.url" class="middle-avatar" />
                            <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                        </el-upload>
                    </el-col>
                </el-row>

                <el-row :gutter="20" class="el-row-box">
                    <el-col :span="3">课程规划</el-col>
                    <el-col :span="18">
                        <el-row :gutter="20">
                            <el-form-item>
                                <el-input v-model="form.coursePlan.title" placeholder="请输入标题"></el-input>
                            </el-form-item>
                        </el-row>
                        <el-row :gutter="20">
                            <el-upload
                                    :action="uploadUrl"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :file-list="form.coursePlan.picUrls"
                            >
                                <el-icon><Plus /></el-icon>
                            </el-upload>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="el-row-box">
                    <el-col :span="3">课程咨询</el-col>
                    <el-col :span="18">
                        <el-row :gutter="20">
                            <el-form-item>
                                <el-input v-model="form.courseConsult.title" placeholder="请输入标题"></el-input>
                            </el-form-item>
                        </el-row>
                        <el-row :gutter="20">
                            <el-upload
                                    class="avatar-uploader"
                                    :action="uploadUrl"
                                    :show-file-list="false"
                                    :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.courseConsult.banner)}"
                            >
                                <img v-if="form.courseConsult.banner.url" :src="form.courseConsult.banner.url" class="middle-avatar" />
                                <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                            </el-upload>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="el-row-box">
                    <el-col :span="3">banner-2</el-col>
                    <el-col :span="18">
                        <el-upload
                                class="avatar-uploader"
                                :action="uploadUrl"
                                :show-file-list="false"
                                :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.bannerSecond)}"
                        >
                            <img v-if="form.bannerSecond.url" :src="form.bannerSecond.url" class="middle-avatar" />
                            <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                        </el-upload>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="el-row-box">
                    <el-col :span="3">购课服务</el-col>
                    <el-col :span="18">
                        <el-row :gutter="20">
                            <el-form-item>
                                <el-input v-model="form.coursePurchase.title" placeholder="请输入标题"></el-input>
                            </el-form-item>
                        </el-row>
                        <el-row :gutter="20">
                            <el-upload
                                    class="avatar-uploader"
                                    :action="uploadUrl"
                                    :show-file-list="false"
                                    :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.coursePurchase.banner)}"
                            >
                                <img v-if="form.coursePurchase.banner.url" :src="form.coursePurchase.banner.url" class="middle-avatar" />
                                <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                            </el-upload>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="el-row-box">
                    <el-col :span="3">预约课程</el-col>
                    <el-col :span="18">
                        <el-upload
                                class="avatar-uploader"
                                :action="uploadUrl"
                                :show-file-list="false"
                                :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.courseBook)}"
                        >
                            <img v-if="form.courseBook.url" :src="form.courseBook.url" class="middle-avatar" />
                            <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                        </el-upload>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="el-row-box">
                    <el-col :span="3">报名流程</el-col>
                    <el-col :span="18">
                        <el-row :gutter="20">
                            <el-form-item>
                                <el-input v-model="form.signUpProcess.title" placeholder="请输入标题"></el-input>
                            </el-form-item>
                        </el-row>
                        <el-row :gutter="20">
                            <el-upload
                                    class="avatar-uploader"
                                    :action="uploadUrl"
                                    :show-file-list="false"
                                    :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.signUp.banner)}"
                            >
                                <img v-if="form.signUp.banner.url" :src="form.signUp.banner.url" class="middle-avatar" />
                                <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                            </el-upload>
                        </el-row>
                    </el-col>
                </el-row>

                <el-row :gutter="20" class="el-row-box">
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
                <el-row :gutter="20" class="el-row-box">
                    <el-col :span="3">底部栏</el-col>
                    <el-col :span="18">
                        <el-row :gutter="20">
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
                        <el-row :gutter="20">
                            <el-row :gutter="20">
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
                        </el-row>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
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
        // eslint-disable-next-line vue/multi-word-component-names
        name: "PostGraduate.vue",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                uploadUrl: "/api/upload/image",
                form: {
                    rollingPicUrl: [],
                    tutorial:{
                        title: '',
                        picUrls: [],
                    },
                    learningGroup:{
                        displayImage:{url:''},
                        groupQR:{url:''}
                    },
                    bannerFirst:{url:''},
                    coursePlan: {
                        title: '',
                        picUrls: [],
                    },
                    courseConsult:{
                        title: '',
                        banner:{url:''}
                    },
                    bannerSecond:{url:''},
                    coursePurchase:{
                        title: '',
                        banner:{url:''}
                    },
                    courseBook:{url:''},
                    signUp:{
                        title: '',
                        banner:{url:''}
                    },
                    advisoryService:{url:''},
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
                axios.get("/admin/graduate/detail").then((response) => {
                    if (response.data){
                        this.form = response.data;
                    }
                }).catch(()=>{
                    ElMessage.error("查询失败");
                })
            },
            saveData(){
                let request = this.form;
                request.rollingPicUrl = this.transferPicUrl(this.form.rollingPicUrl, request.rollingPicUrl);
                request.tutorial.picUrls = this.transferPicUrl(this.form.tutorial.picUrls, request.tutorial.picUrls);
                request.coursePlan.picUrls = this.transferPicUrl(this.form.coursePlan.picUrls, request.coursePlan.picUrls);

                axios.post("/admin/graduate/save",request).then(() => {
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
    .dialog-img{
        width: 100%;
        height: 100%;
    }
    .div-dotted{
        border:1px dashed rgba(169, 169, 169, 0.1);
        height:0;
        width: 500px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>