<template>
    <div class="el-main-div">
        <el-row :gutter="20">
            <el-col :span="6">
                <h3>{{this.pageTitle}}</h3>
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
                                id="1"
                        >
                            <el-icon><Plus /></el-icon>
                        </el-upload>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">优惠券</el-col>
                    <el-col :span="8">
                        <el-upload
                                class="avatar-uploader"
                                :action="uploadUrl"
                                :show-file-list="false"
                                :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.coupon)}"
                        >
                            <img v-if="form.coupon.url" :src="form.coupon.url" class="middle-avatar" />
                            <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                        </el-upload>
                    </el-col>
                    <el-col :span="8">
                        <el-upload
                                class="avatar-uploader"
                                :action="uploadUrl"
                                :show-file-list="false"
                                :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.coupon1)}"
                        >
                            <img v-if="form.coupon1.url" :src="form.coupon1.url" class="middle-avatar" />
                            <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                        </el-upload>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">课程名称</el-col>
                    <el-col :span="6">
                        <el-form-item>
                            <el-input v-model="form.courseName.name" placeholder="请输入课程名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item>
                            <el-input v-model="form.courseName.subName" placeholder="请输入副标题"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item>
                            <el-input v-model="form.courseName.desc" placeholder="请输入课程介绍"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">课程价格</el-col>
                    <el-col :span="6">
                        <el-form-item>
                            <el-input v-model="form.coursePrice" placeholder="请输入课程价格"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">课程分类</el-col>
                    <el-col :span="20">
                        <div v-for="(item, index) in form.courseClassification" :key="index" style="width: 100%">
                            <el-row :gutter="10">
                                <el-col :span="6">
                                    <el-form-item>
                                        <el-input v-model="item.name" placeholder="请输入课程名称"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item>
                                        <el-input v-model="item.price" placeholder="请输入课程价格"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-button circle @click="addList(form.courseClassification)" v-if="index ===0">
                                        <el-icon><Plus /></el-icon>
                                    </el-button>
                                    <el-button circle  @click="subList(form.courseClassification,index)" v-if="index>0">
                                        <el-icon><SemiSelect /></el-icon>
                                    </el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">热线电话</el-col>
                    <el-col :span="18">
                        <el-row :gutter="10">
                            <el-col :span="6">
                                <el-form-item>
                                    <el-input v-model="form.hotline.phone" placeholder="请输入电话"></el-input>
                                </el-form-item>
                            </el-col>

                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="6">
                            <el-upload
                                    class="avatar-uploader"
                                    :action="uploadUrl"
                                    :show-file-list="false"
                                    :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.hotline)}"
                            >
                                <img v-if="form.hotline.url" :src="form.hotline.url" class="middle-avatar" />
                                <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                            </el-upload>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">课程详情</el-col>
                    <el-col :span="20">
                        <el-row :gutter="10">
                            <el-col :span="6">
                                <el-form-item>
                                    <el-input v-model="form.courseDetail.title" placeholder="请输入模块标题"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <div v-for="(item, index) in form.courseDetail.detail" :key="index" style="width: 100%">
                            <el-row :gutter="10">
                                <el-col :span="6">
                                    <el-form-item>
                                        <el-input v-model="item.desc" :placeholder="courseDesc[index]"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
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
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">课程表</el-col>
                    <el-col :span="20">
                        <el-row :gutter="10">
                            <el-col :span="6">
                                <el-form-item>
                                    <el-input v-model="form.courseSchedule.title" placeholder="请输入模块标题"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <div v-for="(item, index) in form.courseSchedule.detail" :key="index" style="width: 100%">
                            <el-row :gutter="10">
                                <el-col :span="6">
                                    <el-form-item>
                                        <el-input v-model="item.name" placeholder="请输入课程名称"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item>
                                        <el-input v-model="item.desc" placeholder="请输入课程介绍"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-button circle @click="addList(form.courseSchedule.detail)" v-if="index ===0">
                                        <el-icon><Plus /></el-icon>
                                    </el-button>
                                    <el-button circle  @click="subList(form.courseSchedule.detail,index)" v-if="index>0">
                                        <el-icon><SemiSelect /></el-icon>
                                    </el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">咨询老师</el-col>
                    <el-col :span="18">
                        <el-row :gutter="10">
                            <el-col :span="6">
                                <el-form-item>
                                    <el-input v-model="form.consultTeacher.title" placeholder="请输入模块标题"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <div v-for="(item, index) in form.consultTeacher.detail" :key="index">
                            <el-row :gutter="10">
                                <el-col :span="6">
                                    <el-upload
                                            class="avatar-uploader"
                                            :action="uploadUrl"
                                            :show-file-list="false"
                                            :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,item)}"
                                    >
                                        <img v-if="item.url" :src="item.url" class="middle-avatar" />
                                        <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                                    </el-upload>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item style="margin-top: 70px">
                                        <el-input v-model="item.name" placeholder="请输入老师名称"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4" style="margin-top: 70px">
                                    <el-button circle @click="addList(form.consultTeacher.detail)" v-if="index ===0">
                                        <el-icon><Plus /></el-icon>
                                    </el-button>
                                    <el-button circle  @click="subList(form.consultTeacher.detail,index)" v-if="index>0">
                                        <el-icon><SemiSelect /></el-icon>
                                    </el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="el-row-box">
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
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">老师简介</el-col>
                    <el-col :span="20">
                        <el-row :gutter="10">
                            <el-col :span="6">
                                <el-form-item>
                                    <el-input v-model="form.teacherProfile.title" placeholder="请输入模块标题"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-col :span="18">
                            <el-upload
                                    :action="uploadUrl"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :file-list="form.teacherProfile.picUrl"
                                    id="2"
                            >
                                <el-icon><Plus /></el-icon>
                            </el-upload>
                        </el-col>
                    </el-col>

                </el-row>
                <el-row :gutter="10" class="el-row-box">
                    <el-col :span="3">课程评价</el-col>
                    <el-col :span="20">
                        <el-row :gutter="10">
                            <el-col :span="6">
                                <el-form-item>
                                    <el-input v-model="form.courseComment.title" placeholder="请输入模块名称"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item>
                                    <el-input v-model="form.courseComment.count" placeholder="总评价数量"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <div v-for="(item, index) in form.courseComment.detail" :key="index" style="width: 100%;">
                                <el-col :span="22">
                                    <el-form-item>
                                        <el-card shadow="never">
                                            <el-col :span="6">
                                                <el-form-item label="用户昵称">
                                                <el-input v-model="item.userName" placeholder="请输入"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="时间">
                                                <el-input v-model="item.time" placeholder="请输入"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="来自的老师">
                                                    <el-input v-model="item.fromTeacher" placeholder="请输入"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="评价内容">
                                                    <el-input type="textarea" v-model="item.content" placeholder="请输入"></el-input>
                                                </el-form-item>
                                            </el-col>

                                            <el-col :span="18">
                                                <el-form-item>
                                                    <el-tag
                                                            v-for="(tag, index) in item.label"
                                                            :key="tag"
                                                            class="mx-1"
                                                            closable
                                                            :disable-transitions="false"
                                                            @close="subList(item.label, index)"
                                                    >
                                                        {{ tag }}
                                                    </el-tag>
                                                    <el-input
                                                              v-if="item.inputVisible"
                                                              v-model="item.inputValue"
                                                              class="ml-1 w-20"
                                                              size="small"
                                                              @keyup.enter="handleInputConfirm(item,item.label)"
                                                              @blur="handleInputConfirm(item,item.label)"
                                                              placeholder="请输入标签"
                                                    />
                                                    <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput(item)">
                                                        + New Tag
                                                    </el-button>
                                                </el-form-item>
                                            </el-col>
                                        </el-card>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="2" style="margin-top: 70px">
                                    <el-button circle @click="addList(form.courseComment.detail)" v-if="index ===0">
                                        <el-icon><Plus /></el-icon>
                                    </el-button>
                                    <el-button circle  @click="subList(form.courseComment.detail,index)" v-if="index>0">
                                        <el-icon><SemiSelect /></el-icon>
                                    </el-button>
                                </el-col>
                            </div>

                        </el-row>
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
                    <el-col :span="3">退换课规则</el-col>
                    <el-col :span="18">
                        <el-upload
                                class="avatar-uploader"
                                :action="uploadUrl"
                                :show-file-list="false"
                                :on-success="(res,file)=>{handleObjectAvatarSuccess(res,file,form.returnRules)}"
                        >
                            <img v-if="form.returnRules.url" :src="form.returnRules.url" class="middle-avatar" />
                            <el-icon v-else class="min-avatar-uploader-icon"><Plus/></el-icon>
                        </el-upload>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4" :offset="20">
                        <el-button type="primary" round @click="savePage">确认上传</el-button>
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
    import router from "@/router";
    import axios from "axios"
    import { useRoute } from "vue-router"
    export default {
        name: "CourseUpload",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                uploadUrl: "/api/upload/image",
                pageTitle:"成人高考",
                courseDesc:["请输入课程起止日期","请输入课时总数","请输入课程形式","请输入配套资料","请输入团队老师姓名"],
                inputVisible:false,
                inputValue:'',
                courseId:'',
                form: {
                    rollingPicUrl: [],
                    coupon:{url:''},
                    coupon1:{url:''},
                    courseName:{
                        name:'',
                        subName:'',
                        desc:'',
                    },
                    coursePrice:'',
                    courseClassification:[{name:'', price:''}],
                    hotline: {url:'', phone:''},
                    courseDetail:{
                        title:'',
                        detail:[{desc:''},{desc:''},{desc:''},{desc:''},{desc:''}],
                    },
                    learningGroup:{
                        displayImage:{url:''},
                        groupQR:{url:''}
                    },
                    courseSchedule:{
                        title:'',
                        detail:[{name:'', desc:''}],
                    },
                    consultTeacher:{
                        title:'',
                        detail:[{
                            url:'',
                            name:''}]

                    },
                    courseBook:{url:''},
                    teacherProfile:{
                        title:'',
                        picUrl:[]

                    },
                    courseComment:{
                        title:'',
                        count:'',
                        detail:[{userName:'', time:'', content:'',label:[],fromTeacher:''}]
                    },
                    advisoryService:{url:''},
                    banner:{url:''},
                    returnRules:{url:''},

                }
            }
        },
        created(){
            this.search();
        },
        methods:{
            returnBack(){
                router.push("/courseList")
            },
            savePage(){
                let request = {}
                request.courseId = this.courseId;
                console.info(this.form)
                let rolling = this.transferPicUrl(this.form.rollingPicUrl, [])
                request.rollingPicUrl = this.jsonToString(rolling);
                request.coupon = this.jsonToString(this.form.coupon);
                request.coupon1 = this.jsonToString(this.form.coupon1);
                request.courseName = this.jsonToString(this.form.courseName);
                request.coursePrice = this.jsonToString(this.form.coursePrice);
                request.courseClassification = this.jsonToString(this.form.courseClassification);
                request.hotline = this.jsonToString(this.form.hotline);
                request.courseDetail = this.jsonToString(this.form.courseDetail);
                request.learningGroup = this.jsonToString(this.form.learningGroup);
                request.courseSchedule = this.jsonToString(this.form.courseSchedule);
                request.consultTeacher = this.jsonToString(this.form.consultTeacher);
                request.courseBook = this.jsonToString(this.form.courseBook);
                let teacher = this.transferPicUrl(this.form.teacherProfile.picUrl, [])
                request.teacherProfile = this.jsonToString({title:this.form.teacherProfile.title, picUrl: teacher});
                request.courseComment = this.jsonToString(this.form.courseComment);
                request.advisoryService = this.jsonToString(this.form.advisoryService);
                request.banner = this.jsonToString(this.form.banner);
                request.returnRules = this.jsonToString(this.form.returnRules);
                axios.post("/admin/course/detail/save", request).then(() => {
                    ElMessage.success("保存成功")
                }).catch(()=>{
                    ElMessage.error("保存失败");
                })
            },
            jsonToString(val){
                return JSON.stringify(val);
            },
            transferPicUrl(origin, target){
                if (origin && origin.length>0){
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
            search(){
                this.courseId = useRoute().query.id;
                this.pageTitle = useRoute().query.name;
                axios.get("/admin/course/detail/"+this.courseId).then((response) => {
                    let res = response.data
                    if(res) {
                        this.form.rollingPicUrl = this.stringToJson(res.rollingPicUrl);
                        this.form.coupon = this.stringToJson(res.coupon);
                        if (res.coupon1){
                            this.form.coupon1 = this.stringToJson(res.coupon1);
                        }

                        this.form.courseName = this.stringToJson(res.courseName);
                        this.form.coursePrice = this.stringToJson(res.coursePrice);
                        this.form.courseClassification = this.stringToJson(res.courseClassification);
                        this.form.hotline = this.stringToJson(res.hotline);
                        this.form.courseDetail = this.stringToJson(res.courseDetail);
                        this.form.learningGroup = this.stringToJson(res.learningGroup);
                        this.form.courseSchedule = this.stringToJson(res.courseSchedule);
                        this.form.consultTeacher = this.stringToJson(res.consultTeacher);
                        this.form.courseBook = this.stringToJson(res.courseBook);
                        this.form.teacherProfile = this.stringToJson(res.teacherProfile);
                        this.form.courseComment = this.stringToJson(res.courseComment);
                        this.form.advisoryService = this.stringToJson(res.advisoryService);
                        this.form.banner = this.stringToJson(res.banner);
                        this.form.returnRules = this.stringToJson(res.returnRules);
                    }
                }).catch(()=>{
                    ElMessage.error("返回重新查询");
                })

            },
            stringToJson(val){
                return val ? JSON.parse(val) : val
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

            // eslint-disable-next-line no-unused-vars
            handleAvatarSuccess(response, uploadFile,brandIntroductionPicUrl, index) {
                if (brandIntroductionPicUrl){
                    brandIntroductionPicUrl[index].picUrl=response;
                }

            },
            addList(list) {
                list.push({})
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