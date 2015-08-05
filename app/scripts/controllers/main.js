'use strict';

/**
 * @ngdoc function
 * @name geekAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geekAngularApp
 */
angular.module('geekAngularApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.blogs = [];
    
	    // Simple GET request example :
	

	$scope.refreshBlogs = function ()
	{
		$http.get('http://localhost:9001/blogs'). 
	   then(function(response) {
	    $scope.blogs = response.data;
	  }, function(response) {
		   $scope.error ="service not ready";
 		}
	  );
	}

	$scope.refreshBlogs();

    $scope.createNewBlogPost = function () {
    	 var newPost = 
    	    {
    	    	title:$scope.title,
	    		content:$scope.content,
	    		post_by:"ChatChai",
	    		comments:[] 
	    	};
        $http.post('http://localhost:9001/blogs',newPost).
        then(function()
        {
        	$scope.refreshBlogs();
        });
       
    	$scope.title ="";
    	$scope.content="";
    	//$scope.myInput ='';
    }

    


  });
