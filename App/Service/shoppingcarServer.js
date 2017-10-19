/**
 * Created by lenovo on 2017/10/18.
 */
app.factory("shoppingcarServer",["ajaxServer",function(ajaxServer){
    var factory={
        getshopping:function(type,url){
            return ajaxServer.ajax(type,url);
        }
    };
    return factory;
}]);