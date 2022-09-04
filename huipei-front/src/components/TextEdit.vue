<template>
<div style="width: 100%">
    <div>
        <h3>咨询文章</h3>
        <el-upload
                class="avatar-uploader"
                name="file"
                :action="uploadUrl"
                :show-file-list="false"
                :data="uploadData"
                :on-success="(res,file)=>{handleAvatarSuccess(res,file)}"
        >
        </el-upload>
        <quill-editor ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)" @change="onEditorChange($event, item)" v-model="article"></quill-editor>
    </div>
    <div>
        <h3 style="color: #456ced">复制以下文本</h3>
        {{articleHtml}}
    </div>
    <!--<h3 style="color: #456ced">咨询文章内容展示</h3>
    <div v-html="articleHtml" class="ql-editor">
    </div>-->
</div>

</template>
<script>
    // 工具栏配置
    const toolbarOptions = [
        ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
        ["blockquote", "code-block"], // 引用  代码块
        [{ header: 1 }, { header: 2 }], // 1、2 级标题
        [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
        [{ script: "sub" }, { script: "super" }], // 上标/下标
        [{ indent: "-1" }, { indent: "+1" }], // 缩进
        // [{'direction': 'rtl'}],                         // 文本方向
        [{ size: ["small", false, "large", "huge"] }], // 字体大小
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
        [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
        [{ font: [] }], // 字体种类
        [{ align: [] }], // 对齐方式
        ["clean"], // 清除文本格式
        ["link", "image"], // 链接、图片、视频
    ];
    export default {
        components:{
        },
        name: "TextEdit",
        data() {
            return {
                uploadUrl: "/api/upload/image",
                uploadData: {},
                articleHtml: '',
                article: '',
                editorOption: {
                    placeholder: "请输入文章内容",
                    modules: {
                        toolbar: {
                            container: toolbarOptions,
                            handlers: {
                                image: function (value) {
                                    if (value) {
                                        // 触发input框选择图片文件
                                        document.querySelector(".avatar-uploader input").click();
                                    } else {
                                        this.quill.format("image", false);
                                    }
                                },
                            },
                        },
                    }
                }
            }
        },
        methods:{
            onEditorBlur(){}, // 失去焦点事件
            onEditorFocus(){},
            onEditorChange(editor) {
                //this.content = editor.html;
                console.log(editor);
                this.articleHtml = this.contentHandle(editor.html);
                this.article= editor.text;
            },
            contentHandle(text){
            return text.replace(/<img/g,"<img style='max-width:100%;height:auto;'")
            },
            // eslint-disable-next-line no-unused-vars
            handleAvatarSuccess(response, uploadFile){
                let quill = this.$refs.myQuillEditor.quill; // // 获取光标所在位置
                let length = quill.getSelection().index; //插入图片  后面为服务器返回的图片地址
                quill.insertEmbed(
                    length,
                    "image",
                    response
                );
                quill.setSelection(length + 1);
            },
        }
    }
</script>