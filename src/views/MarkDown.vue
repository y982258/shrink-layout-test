<template>
    <div>
        mavonEditor：基于Vue的markdown编辑器。
        访问地址：<a href="https://github.com/hinesboy/mavonEditor" target="_blank">https://github.com/hinesboy/mavonEditor</a>
        <mavon-editor v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" style="min-height: 500px"/>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        data() {
            return {
                content:'',
                html:''
            }
        },
        components: {
            mavonEditor
        },
        methods: {
            // 将图片上传到服务器，返回地址替换到md中
            $imgAdd(pos, $file){
                var formdata = new FormData();
                formdata.append('file', $file);
                // 这里没有服务器供大家尝试，可将下面上传接口替换为你自己的服务器接口
                this.$axios({
                    url: '/common/upload',
                    method: 'post',
                    data: formdata,
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then((url) => {
                    this.$refs.md.$img2Url(pos, url);
                })
            },
            change(value, render){
                // render 为 markdown 解析后的结果
                this.html = render;
            }
        }
    }
</script>