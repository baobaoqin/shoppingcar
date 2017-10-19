/**
 * Created by lenovo on 2017/10/18.
 */
app.controller("shoppingcarController", ["$scope","shoppingcarServer",function($scope,shoppingcarServer){
    $scope.flag=false;
    shoppingcarServer.getshopping("get","./Data/shopping.json").then(function(res){
        $scope.shopping=res.data;

        price();

    });
    $scope.$on("deleteItem",function(event,index){
        $scope.shopping.splice(index,1);
        price();
    });
    $scope.$on("itemChecked",function(event,index){
        var count=0;
        $scope.shopping[index].state=!$scope.shopping[index].state;
        for(var i=0;i<$scope.shopping.length;i++){
            if($scope.shopping[i].state) {
                count++;
            }
        }
        if(count==$scope.shopping.length){
            $scope.flag=true;
        }else{
            $scope.flag=false;
        }
        price();
    });
    $scope.checkAll=function(){
        $scope.flag=!$scope.flag;

        for(var i=0;i<$scope.shopping.length;i++){
            if($scope.flag){
                $scope.shopping[i].state=true;
            }else{
                $scope.shopping[i].state=false;
            }
        }
        price();
    };
    $scope.$on("countChange",function(){
        price();
    });
    function price(){
        $scope.goodsPrice=0;
        $scope.goodsCount=0;

        $scope.shopping.forEach(function(item,index){
            if(item.state){
                $scope.goodsPrice+=item.num*item.price;
                $scope.goodsCount+=item.num;
            }
        })
    }
}]);