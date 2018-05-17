var data ={
    "status": 1,
    "msg": "获取订单信息成功",
    "data": {
    "orderList": [{
        "orderType": "商品",
        "total": 0.01,
        "orderNumber": "201805141740288950",
        "orderId": 10021,
        "stats": "待支付"
    }, {
        "orderType": "商品",
        "total": 0.01,
        "orderNumber": "201805101505388794",
        "orderId": 9732,
        "stats": "待支付"
    }, {
        "orderType": "商品",
        "total": 0.01,
        "orderNumber": "201805101505155583",
        "orderId": 9731,
        "stats": "待支付"
    }, {
        "orderType": "商品",
        "total": 0.01,
        "orderNumber": "201805101505000746",
        "orderId": 9730,
        "stats": "待支付"
    }, {
        "orderType": "商品",
        "total": 0.01,
        "orderNumber": "201805091710044903",
        "orderId": 9696,
        "stats": "待支付"
    }, {
        "orderType": "照片打印",
        "total": 1.0,
        "orderNumber": "201805091708355554",
        "orderId": 9695,
        "stats": "待支付"
    }, {
        "orderType": "商品",
        "total": 0.01,
        "orderNumber": "201805091708155132",
        "orderId": 9694,
        "stats": "待支付"
    }, {
        "orderType": "商品",
        "total": 0.01,
        "orderNumber": "201805091708111452",
        "orderId": 9693,
        "stats": "待支付"
    } ,{
        "orderType": "商品",
        "total": 0.01,
        "orderNumber": "201805051737455351",
        "orderId": 9408,
        "stats": "待支付"
    }, {
        "orderType": "商品",
        "total": 0.01,
        "orderNumber": "201805051736433464",
        "orderId": 9407,
        "stats": "待支付"
    }, {
        "orderType": "商品",
        "total": 0.03,
        "orderNumber": "201805051139222950",
        "orderId": 9300,
        "stats": "已退款"
    }, {
        "orderType": "商品",
        "total": 0.01,
        "orderNumber": "201805051124222855",
        "orderId": 9296,
        "stats": "已退款"
    }, {
        "orderType": "商品",
        "total": 0.01,
        "orderNumber": "201805051115544741",
        "orderId": 9294,
        "stats": "已退款"
    }, {
        "orderType": "商品",
        "total": 0.02,
        "orderNumber": "201805051107055192",
        "orderId": 9293,
        "stats": "完成"
    }, {
        "orderType": "商品",
        "total": 0.03,
        "orderNumber": "201805051102488371",
        "orderId": 9292,
        "stats": "已退款"
    }, {
        "orderType": "商品",
        "total": 0.01,
        "orderNumber": "201805051036400233",
        "orderId": 9289,
        "stats": "已退款"
    }, {
        "orderType": "商品",
        "total": 0.01,
        "orderNumber": "201805051031533724",
        "orderId": 9287,
        "stats": "已退款"
    }, {
        "orderType": "商品",
        "total": 0.01,
        "orderNumber": "201805041946044629",
        "orderId": 9249,
        "stats": "待支付"
    }],
        "userId": 854
},
    "code": null
}
$(function(){
//用户订单数据处理
    function dataHandle(){
        console.log(data)
        if(data.data.orderList.length == 0 ){ //暂无订单
            var No_order = '<div class="no_order"><img src="./img/logo.png" alt=""><p>您的订单暂时为空！</p></div>'
            $('.orderList').append(No_order);
        }else{
            $.each(data.data.orderList,function(index,item){
                var orderList = '<a href="orderDetail.html">'+'<div class="orderList_con">' +
                        '<div class="orderList_left">' +
                            '<img src="img/orderList_01.png" alt="">' +
                        '</div>' +
                        '<ul class="orderList_right">' +
                        '<li class="list_type">' +
                            '<p class="list_type_type">'+item.orderType+'</p>' +
                            '<p class="list_type_time">'+item.orderNumber+'</p>' +
                        '</li>' +
                        '<li class="list_price">￥'+item.total+'</li>' +
                        '<li class="list_stats">'+item.stats+'</li>' +
                        '</ul>' +
                    '</div>'+'</a>'

                $('.orderList').append(orderList);
                /* $('<a></a>').attr({
                     orderId:item.orderId,
                     //class:'weui-cell weui-cell_access',
                 }).html(orderList).appendTo($('.orderList'));*/
            })

        }
    }
    dataHandle()


})