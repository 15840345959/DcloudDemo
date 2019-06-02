/*
 * 此文件封装的是接口调用方法
 *
 * 即项目的测试环境，生产环境应通过该方法进行调用，包括校验机制、加密机制的处理等
 *
 *
 */
// 测试环境标识
// true:测试环境 false:生产环境

var TESTMODE = true;

var SERVER_URL = TESTMODE ? "http://testwlds.isart.me/api" : "http://testwlds.isart.me/api";

/*
 * 统一封装的ajax请求方法
 *
 * @param
 *  param:请求参数
 *  url:请求地址
 *  method:请求方法 get post
 *  callBack:回调函数
 *  loading_flag:加载图标
 */

function ajax(param, url, method, callBack, loading_flag) {

    consoledebug.log("ajax param is:" + "param:"
        + JSON.stringify(param) + " url:" + url + " method:" + method + " loading_flag:" + loading_flag);

    mui.ajax(SERVER_URL + url, {
        data: param,
        dataType: 'json',//服务器返回json格式数据
        type: method,//HTTP请求类型
        timeout: 10000,//超时时间设置为10秒；
        headers: {'Content-Type': 'application/json'},
        success: function (data) {
            callBack(data);
        },
        error: function (xhr, type, errorThrown) {
            //异常处理；
            consoledebug.log(type);
        }
    });
}