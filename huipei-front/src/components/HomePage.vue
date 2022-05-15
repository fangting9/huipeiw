<template>
    <div class="common-layout">
        <el-container class="home_container">
            <el-aside width="200px">
                <div>
                    <img src="../../static/logo.jpg"/>
                </div>
                <el-menu default-active="2"
                         class="el-menu-vertical-demo" router>
                    <el-menu-item index="/dateReport" >
                        <el-icon><histogram/></el-icon>
                        <span>数据报表</span>
                    </el-menu-item>
                    <el-menu-item index="/homeUpload">
                        <el-icon><upload-filled /></el-icon>
                        <span>首页区域上传</span>
                    </el-menu-item>
                    <el-menu-item index="/subjectUpload">
                        <el-icon><expand /></el-icon>
                        <span>专题页区域上传</span>
                    </el-menu-item>
                    <el-menu-item index="/courseUpload">
                        <el-icon><reading /></el-icon>
                        <span>详情页区域上传</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                        <div style="width: 100%">
                            <el-dropdown trigger="click" style="float: right">
                        <span class="el-dropdown-link">
                          管理员 <el-icon class="el-icon--right"><CaretBottom /></el-icon>
                        </span>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item >退出</el-dropdown-item>

                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                </el-header>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import router from "@/router";
    import Fingerprint2 from 'fingerprintjs2'
    //import { ArrowDown } from '@element-plus/icons-vue'
    export default {
        name: "HomePage",
        data() {
            return {
                murmur:''
            }
        },
        created(){
            this.createFingerprint();
            if (window.sessionStorage.getItem('token') != window.sessionStorage.getItem("murmur")){
                router.push("/login")
            }
        },
        activated(){
            this.createFingerprint();
        },
        methods:{
            createFingerprint() {
                const murmur1 = '';
                // 浏览器指纹
                Fingerprint2.get((components) => {
                    // 参数只有回调函数时，默认浏览器指纹依据所有配置信息进行生成
                    const values = components.map((component) => component.value) // 配置的值的数组
                    this.murmur1 = Fingerprint2.x64hash128(values.join(''), 31) // 生成浏览器指纹
                    // console.log(components, values,murmur,'你好')
                    //murmur就是浏览器指纹啦

                    window.sessionStorage.setItem("murmur", murmur1);
                });
                console.info("2222" + window.sessionStorage.getItem("murmur"))
            },
        }

    }
</script>

<style  scoped>
    .home_container{
        height: 50em;
    }
    .el-header{
        background-color: #ebf0ff;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        color: #fff;
        font-size: 20px;

    }
    .el-aside{
        background-color: rgba(253, 253, 254, 0);
    }
    .el-main{
        background-color: rgba(247, 248, 250, 0.18);
    }
</style>