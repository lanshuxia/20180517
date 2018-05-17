var data = {
    "status": 1,
    "msg": "用户信息查询成功",
    "data": {
        "userId": 854,
        "userName": null,
        "password": null,
        "weixinId": "ojc_S1Z_PEEVb1_1RnawRkiJGR3A",
        "nikeName": "兰淑霞",
        "phone": null,
        "headImg": "http://thirdwx.qlogo.cn/mmopen/vi_32/WCcouXsOEyK4vLP3j8B29gSAQg8zAB26fycUYaXInQOicS6YoRyQOApgptEaiayJibLMGnfs8ro77giaZsnp1v9BcA/132",
        "gender": 2,
        "insertTime": "2018-04-23 09:43:40",
        "lastTime": "2018-05-04 14:09:04",
        "score": null
    },
    "code": 0
}
console.log(data);
$(function(){
    //用户信息处理
    function dataHandle(){
        console.log(data);
        //用户头像
        $('.userPic').attr('src',data.data.headImg)

        //用户名
        $('.userName').text( data.data.nikeName )

    }
    dataHandle()
})
