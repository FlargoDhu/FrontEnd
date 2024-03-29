var nodeTodo = angular.module("nodeTodo", []);

function mainController($scope, $http) {
  $scope.formData = {};

  $scope.cos = "Flar Likes Jam";

  // when landing on the page, get all todos and show them
  $http
    .get("/api/todos")
    .success(function(data) {
      $scope.todos = data;
    })
    .error(function(data) {
      console.log("Error: " + data);
    });

    $scope.filterTrue = function() {
      $http
        .get("/api/todos/true", $scope.formData)
        .success(function(data) {
          $scope.todos = data;
        })
        .error(function(data) {
          console.log("Error: " + data);
        });
    };

    $scope.filterFalse = function() {
      $http
        .get("/api/todos/false", $scope.formData)
        .success(function(data) {
          $scope.todos = data;
        })
        .error(function(data) {
          console.log("Error: " + data);
        });
    };

    $scope.showAll = function() {
      $http
        .get("/api/todos/null");
      $http
        .get("/api/todos", $scope.formData)
        .success(function(data) {
          $scope.todos = data;
        })
        .error(function(data) {
          console.log("Error: " + data);
        });
    };

  // when submitting the add form, send the text to the node API
  $scope.createTodo = function() {
    $http
      .post("/api/todos", $scope.formData)
      .success(function(data) {
        $("input").val("");
        $scope.todos = data;
      })
      .error(function(data) {
        console.log("Error: " + data);
      });
  };

  // update a todo after checking it
  $scope.updateTodo = function(id,done) {
    $http
    .post("/api/todos/update/"+done+'/'+id)
    .success(function(data) {
      $scope.todos = data;
    })
    .error(function(data) {
      console.log("Error: " + data);
    });
  };

  // delete a todo after checking it
  $scope.deleteTodo = function(id) {
    $http
      .delete("/api/todos/" + id)
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(data) {
        console.log("Error: " + data);
      });
  };
}
