/**
 * Created by lenovo on 2017/10/18.
 */
app.directive("shopping",function(){
    return {
        templateUrl:"./App/View/temp/shopping.html",
        scope:{
            item:"=item",
            index:"@index"
        },
        controller:"shoppingcarItemController"
    }
});