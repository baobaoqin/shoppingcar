/**
 * Created by lenovo on 2017/10/18.
 */
var app=angular.module("app",["ui.router"]);


app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("shoppingcar",{
            url:"/shopping",
            templateUrl:"./App/View/_shopping.html",
            controller:"shoppingcarController"
        });
    $urlRouterProvider.otherwise("/shopping");
});