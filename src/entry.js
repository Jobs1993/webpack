/**
 * Created by mr.yang on 2017/10/28.
 */
import css from './css/index.css';
import less from './css/color.less';
// import sass from './css/color.sass';
//测试15小节内容 babel 转译
let esText = 'Hello Webpack--webpack打包';
document.getElementById('title').innerHTML= esText;

function night() {
    alert('我要办张卡,你觉得那')
}
module.exports = night;
import $ from 'jquery';
$('#title').css({
    'fontSize': '30px'
    })
