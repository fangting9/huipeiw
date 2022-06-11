<template>
    <div class="el-main-div">
        <h3>首页上传</h3>
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
            <el-col :span="3">金刚区</el-col>
            <el-col :span="18">
                <div v-for="(item, index) in form.brandIntroductionPicUrl" :key="index">
                    <el-row>
                        <el-col :span="4">
                            <el-upload
                                    class="avatar-uploader"
                                    :action="uploadUrl"
                                    :show-file-list="false"
                                    :on-success="(res,file)=>{handleAvatarSuccess(res,file,form.brandIntroductionPicUrl,index)}"
                            >
                                <img v-if="item.picUrl" :src="item.picUrl" class="min-avatar" />
                                <el-icon v-else class="min-avatar-uploader-icon"><Plus /></el-icon>
                            </el-upload>
                        </el-col>
                        <el-col :span="6" style="margin-top: 70px">
                            <el-form-item >
                                <el-input v-model="item.name" placeholder="请输入标题" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6" style="margin-top: 70px">
                            <el-form-item >
                                <el-select v-model="item.code" placeholder="请选择对应的专题">
                                    <el-option
                                            v-for="i in specialSubject"
                                            :key="i.code"
                                            :label="i.name"
                                            :value="i.code"
                                    />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" style="margin-left:10px; margin-top: 70px">
                            <el-button circle @click="addList(form.brandIntroductionPicUrl)" v-if="index ===0">
                                <el-icon><Plus /></el-icon>
                            </el-button>
                            <el-button circle  @click="subList(form.brandIntroductionPicUrl,index)" v-if="index>0">
                                <el-icon><SemiSelect /></el-icon>
                            </el-button>
                        </el-col>
                    </el-row>
                </div>

            </el-col>
        </el-row>
        <el-row :gutter="20" class="el-row-box">
            <el-col :span="3">热门课程</el-col>
            <el-col :span="18">
                <el-row :gutter="20">
                <el-form-item>
                    <el-input v-model="form.hotTopic.title" placeholder="请输入模块标题"></el-input>
                </el-form-item>
                </el-row>
                <div v-for="(item, index) in form.hotTopic.detail" :key="index">
                    <div class="div-dotted" v-if="index>0"></div>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-upload
                                    class="avatar-uploader"
                                    :action="uploadUrl"
                                    :show-file-list="false"
                                    :on-success="(res,file)=>{handleAvatarSuccess(res,file,form.hotTopic.detail,index)}"
                            >
                                <img v-if="item.picUrl" :src="item.picUrl" class="avatar" />
                                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                            </el-upload>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item >
                                <el-input v-model="item.courseName" placeholder="请输入课程标题" ></el-input>
                            </el-form-item>
                            <el-form-item >
                                <el-input type="number" v-model="item.applyNum" placeholder="请输入报名人数" ></el-input>
                            </el-form-item>
                            <el-form-item >
                                <el-input type="textarea" v-model="item.desc" placeholder="请输入课程介绍" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" style="margin-left:10px; margin-top: 70px">
                            <el-button circle @click="addList(form.hotTopic.detail)" v-if="index ===0">
                                <el-icon><Plus /></el-icon>
                            </el-button>
                            <el-button circle  @click="subList(form.hotTopic.detail,index)" v-if="index>0">
                                <el-icon><SemiSelect /></el-icon>
                            </el-button>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="el-row-box">
            <el-col :span="3">考试大赛</el-col>
            <el-col :span="18">
                <el-row :gutter="20">
                <el-form-item>
                    <el-input v-model="form.examContest.title" placeholder="请输入模块标题"></el-input>
                </el-form-item>
                </el-row>
                <div v-for="(item, index) in form.examContest.detail" :key="index">
                    <div class="div-dotted" v-if="index>0"></div>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-upload
                                    class="avatar-uploader"
                                    :action="uploadUrl"
                                    :show-file-list="false"
                                    :on-success="(res,file)=>{handleAvatarSuccess(res,file,form.examContest.detail,index)}"
                            >
                                <img v-if="item.picUrl" :src="item.picUrl" class="middle-avatar" />
                                <el-icon v-else class="min-avatar-uploader-icon"><Plus /></el-icon>
                            </el-upload>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item >
                                <el-input v-model="item.desc" placeholder="请输入考试科目" ></el-input>
                            </el-form-item>
                            <el-form-item >
                                <el-input type="number" v-model="item.price" placeholder="请输入考试价格" ></el-input>
                            </el-form-item>
                            <el-form-item >
                                <el-input v-model="item.status" placeholder="请输入开始状态" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" style="margin-left:10px; margin-top: 70px">
                            <el-button circle @click="addList(form.examContest.detail)" v-if="index ===0">
                                <el-icon><Plus /></el-icon>
                            </el-button>
                            <el-button circle  @click="subList(form.examContest.detail,index)" v-if="index>0">
                                <el-icon><SemiSelect /></el-icon>
                            </el-button>
                        </el-col>
                    </el-row>

                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="el-row-box">
            <el-col :span="3">校区照片</el-col>
            <el-col :span="18">
                <el-row :gutter="20">
                    <el-form-item>
                        <el-input v-model="form.campusEnvironment.title" placeholder="请输入标题"></el-input>
                    </el-form-item>
                </el-row>
                <el-row :gutter="20">
                    <el-upload
                            :action="uploadUrl"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :file-list="form.campusEnvironment.picUrls"
                    >
                        <el-icon><Plus /></el-icon>
                    </el-upload>
                </el-row>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="el-row-box">
            <el-col :span="3">品牌优势</el-col>
            <el-col :span="18">
                <el-row :gutter="20">
                    <el-form-item>
                        <el-input v-model="form.brandAdvantage.title" placeholder="请输入标题"></el-input>
                    </el-form-item>
                </el-row>
                <el-row :gutter="20">
                    <el-upload
                            :action="uploadUrl"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :file-list="form.brandAdvantage.picUrls"
                    >
                        <el-icon><Plus /></el-icon>
                    </el-upload>
                </el-row>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="el-row-box">
            <el-col :span="3">关于我们</el-col>
            <el-col :span="18">
                <el-row :gutter="20">
                    <el-form-item>
                        <el-input v-model="form.aboutUs.title" placeholder="请输入标题"></el-input>
                    </el-form-item>
                </el-row>
                <el-row :gutter="20">
                    <el-upload
                            :action="uploadUrl"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :file-list="form.aboutUs.picUrls"
                    >
                        <el-icon><Plus /></el-icon>
                    </el-upload>
                </el-row>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="el-row-box">
            <el-col :span="3">联系我们</el-col>
            <el-col :span="18">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item>
                            <el-input v-model="form.contact.title" placeholder="请输入标题"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item>
                            <el-input v-model="form.contact.phone" placeholder="请输入联系电话"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row :gutter="20">
                    <el-col>
                    <el-upload
                            :action="uploadUrl"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :file-list="form.contact.picUrls"
                    >
                        <el-icon><Plus /></el-icon>
                    </el-upload>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
            <el-row :gutter="20">
                <el-col :span="4" :offset="20">
                    <el-button type="primary" round @click="saveHomePage">确认上传</el-button>
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
    //import router from "@/router";

    //import { Plus } from '@element-plus/icons-vue'
    import { ElMessage, } from 'element-plus'
    import UploadProps from 'element-plus'
    import axios from "axios"
    import commonData from "@/data/commonData";

    //import { UploadUserFile } from 'element-plus'

    export default {
        name: "HemeUpload",
        data() {
            return {
                dialogImageUrl:'',
                dialogVisible:false,
                uploadUrl:"/api/upload/image",
                specialSubject:commonData.specialSubject,
                form: {
                    rollingPicUrl: [],
                    brandIntroductionPicUrl: [
                        {picUrl: '', name: '', code: ''},
                    ],
                    hotTopic: {
                        title: '',
                        detail: [
                            {picUrl: '', courseName: '', desc: '', applyNum: ''}
                        ]
                    },
                    examContest: {
                        title: '',
                        detail: [
                            {
                                picUrl: '',
                                price: '', desc: '', status: ''
                            },
                        ]
                    },
                    campusEnvironment: {
                        title: '',
                        picUrls: [],
                    },
                    brandAdvantage: {
                        title: '',
                        picUrls: [],
                    },
                    aboutUs: {
                        title: '',
                        picUrls: [],
                    },
                    contact: {
                        title: '',
                        phone: '',
                        picUrls: [],
                    }
                }
            }
        },
        created(){
            this.detailHomePage();
        },
        methods:{
            test(){
                axios.get("/upload/test").then((response) => {
                    console.log (response.data)
                }).catch(()=>{
                    ElMessage.error("上传失败");
                })
            },
            handlePictureCardPreview(uploadFile) {
                this.dialogImageUrl= uploadFile.url
                this.dialogVisible = true
            },

            // eslint-disable-next-line no-unused-vars
            handleAvatarSuccess(response, uploadFile,brandIntroductionPicUrl, index) {
                if (brandIntroductionPicUrl){
                    brandIntroductionPicUrl[index].picUrl=response;
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
            addList(list) {
                list.push({})
            },
            //减号
            subList(list, index) {
                list.splice(index, 1)
            },

            detailHomePage(){
                axios.get("/admin/home/detail").then((response) => {
                    if (response.data){
                        this.form = response.data
                    }

                }).catch(()=>{
                    ElMessage.error("查询失败");
                })
            },
            saveHomePage(){
                let request = this.form;
                request.rollingPicUrl = this.transferPicUrl(this.form.rollingPicUrl, request.rollingPicUrl);
                request.campusEnvironment.picUrls = this.transferPicUrl(this.form.campusEnvironment.picUrls, request.campusEnvironment.picUrls);
                request.brandAdvantage.picUrls = this.transferPicUrl(this.form.brandAdvantage.picUrls, request.brandAdvantage.picUrls);
                request.aboutUs.picUrls = this.transferPicUrl(this.form.aboutUs.picUrls, request.aboutUs.picUrls);
                request.contact.picUrls = this.transferPicUrl(this.form.contact.picUrls, request.contact.picUrls);
                axios.post("/admin/home/save",request).then(() => {
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
        font-size: 28px;
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