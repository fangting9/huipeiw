import Fingerprint2 from 'fingerprintjs2'
import axios from "axios"
export default {
    //ws:'ws://localhost:8088/api/socket/',
    ws:'ws://www.huipeiw.com/api/socket/',
    specialSubject:[
        {name:'学历提升',code:'1'},
        {name:'会计培训',code:'2'},
        {name:'研究生',code:'3'},
        {name:'建工培训',code:'4'},
        {name:'职业考证',code:'5'},
    ],
    consultType:[
        {name:'课程预约',code:'0'},
        {name:'考试报名',code:'1'},
        {name:'在线咨询',code:'2'},

    ],
    logList:[],
    murmur:'',
    createFingerprint() {
        // 浏览器指纹
        Fingerprint2.get((components) => {
            // 参数只有回调函数时，默认浏览器指纹依据所有配置信息进行生成
            const values = components.map((component) => component.value) // 配置的值的数组
            this.murmur = Fingerprint2.x64hash128(values.join(''), 31);
        });
    },

    getSid(req){
        axios.post("/consult/sid", req);
    }
}