"use strict";angular.module("Helpers",[]),angular.module("ngAnimationcssApp",["ngCookies","ngResource","ngSanitize","ngRoute","ngAnimate","Helpers"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/use",{templateUrl:"views/use.html"}).otherwise({redirectTo:"/"})}]),angular.module("ngAnimationcssApp").controller("MainCtrl",["$scope","$timeout",function(a,b){var c="padding-bottom, padding-top and max-height must be set to use",d="perspective must be set on the parent container for a 3D effect";a.transitionsEnabled=Modernizr.csstransitions,a.activeAnimation="slide-left",b(function(){a.animationTypes=[{name:"fade"},{name:"collapse",condition:c},{name:"slide-up",condition:c},{name:"slide-down",condition:c},{name:"slide-left"},{name:"slide-right"},{name:"squash-vertical",condition:c},{name:"squash-left"},{name:"squash-right"},{name:"rotate-left",condition:d},{name:"rotate-right",condition:d},{name:"rotate-up",condition:d},{name:"rotate-down",condition:d}],a.refreshClasses()},100),a.speed="nga-default",a.stagger=" nga-stagger",a.selectMain=function(){for(var b=0;b<a.animationTypes.length;b++){var c=a.animationTypes[b];c.allActive=null,c.aActive=null,c.rActive=null,c.mActive=null,a.refreshClasses()}},a.selectComponent=function(){a.activeAnimation=null,a.refreshClasses()},a.refreshClasses=function(){a.classes="";for(var b=0;b<a.animationTypes.length;b++){var c=a.animationTypes[b];a.activeAnimation==c.name&&(a.classes+="nga-"+c.name+" "),c.allActive&&(a.classes+="nga-"+c.name+"-all "),c.aActive&&(a.classes+="nga-"+c.name+"-add "),c.rActive&&(a.classes+="nga-"+c.name+"-remove "),c.mActive&&(a.classes+="nga-"+c.name+"-move ")}a.toggleSingleActive=function(){a.singleActive=!a.singleActive}}}]),angular.module("Helpers").directive("tooltip",function(){return{link:function(a,b,c){b.attr("data-toggle","tooltip").tooltip(),c.$observe("tooltip",function(a){b.attr("data-original-title",a).tooltip("fixTitle")})}}});