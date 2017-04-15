import { infinite } from './infinite';
import { GetQueryString } from './getQueryString';

if(document.querySelector("#circle")) {

    var circle = new Vue({
        el: "#circle",
        data: {
            circleDetail:{
                htmlLink:'',
                title:'',
                likePerson:'',
                imgs: [],
                nickname: "",
                headImg: "",
                content: "",
                createTime: "",
                commentPerson: '',
            },
            circleComment:{
                list: []
            },
            PostingsId:"",
            page:"1",
            infiniteFlag:false,
            loading:true,
        },
        mounted: function () {
            this.$nextTick(function () {
                this.PostingsId = GetQueryString('PostingsId');
                this.ajaxDetail();
                this.ajaxComment();
                this.infinite();
            })
        },
        methods:{
            photoLoad:function (e) {
                let w = e.target.clientWidth,
                    h = e.target.clientHeight;
                if(w > h){
                    e.target.style.width = 'auto';
                    e.target.style.height = '100%';
                }
                else {
                    e.target.style.width = '100%';
                    e.target.style.height = 'auto';
                }
            },
            ajaxDetail:function () {
                let _this = this;
                $.ajax({
                    url:'http://106.14.38.136/SanYanLiangYu/Share/getPostingsDetails.do?PostingsId='+_this.PostingsId,//'../demoJson/circleDetail.json',
                    dataType:'json',
                    type:'post',
                    success:function (res) {
                        if(res.resultCode != 1000){
                            alert('获取数据失败'+res.resultCode)
                        }
                        else {
                            _this.circleDetail = res.returnObject
                        }
                    }
                })
            },
            ajaxComment:function () {
                let _this = this;
                $.ajax({
                    url:'http://106.14.38.136/SanYanLiangYu/Share/postingsComments.do?PostingsId='+_this.PostingsId+'&page='+_this.page,//'../demoJson/circleComment.json',
                    dataType:'json',
                    type:'post',
                    success:function (res) {
                        if(res.resultCode != 1000){
                            alert('获取数据失败'+res.resultCode)
                        }
                        else if(res.returnObject.list.length == 0){
                            _this.infiniteFlag = true;
                            _this.loading = false;
                            return;
                        }
                        else {
                            _this.circleComment.list.push(...res.returnObject.list);
                            _this.page++;
                            _this.infiniteFlag = false;
                        }
                    }
                })
            },
            infinite:function () {
                var _this = this;
                $(document.body).infinite().on('infinite',function(){
                    if(_this.infiniteFlag) return;
                    _this.infiniteFlag = true;
                    _this.ajaxComment();
                })
            }
        }
    })
}