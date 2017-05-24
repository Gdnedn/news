import { GetQueryString } from './getQueryString';

if(document.querySelector("#news")){
    var news = new Vue({
        el:"#news",
        data:{
            newTitle:'',
            createTime:'',
            newImg:'',
            newDec:'',
            id:''
        },
        mounted: function () {
            this.$nextTick(function () {
                this.id = GetQueryString('id');
                this.ajaxInfo();
            })
        },
        methods:{
            ajaxInfo:function() {
                var _this = this;
                $.ajax({
                    url:'http://112.124.122.151:8080/SanYanLiangYu/Share/getNewsDetails.do?id='+_this.id,//'../demoJson/news.json',
                    dataType:'json',
                    type:'post',
                    success:function (res) {
                        if(res.resultCode != 1000){
                            alert('获取数据失败'+res.resultCode)
                        }
                        else {
                            _this.newTitle = res.returnObject.newTitle;
                            _this.createTime = res.returnObject.createTime;
                            _this.newImg = res.returnObject.newImg;
                            _this.newDec = res.returnObject.newDec;
                        }
                    }
                })
            }
        }
    });
}
