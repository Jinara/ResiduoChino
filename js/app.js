var App = (function(){

	var myApp = angular.module('chineseRemainder', []);

	myApp.controller('chineseRemainderController',function($scope,$http, $interval){
		$scope.equationsNumber = 0;
		$scope.result = "";
		$scope.equations = [];
		$scope.onChangeEquationsNumber = function(){
			$scope.equations = [];
			for (var i = 0; i<$scope.equationsNumber;i++){
				$scope.equations.push({a:0,b:0});
			}
		}

		$scope.showEquations = function(){
			console.log($scope.equations);
		}

		$scope.calculateChinese = function(){
			var arrayA = [];
			var arrayB = [];

			for (var i = 0; i<$scope.equationsNumber; i++){
				arrayA.push($scope.equations[i].a);
				arrayB.push($scope.equations[i].b);
			}
			var result = Utilities.chineseRemainder(arrayA, arrayB);
			$scope.result='x = '+ result.value +' + '+ result.kCoef+'k';

		}
	});

	//Ejemplo:
	console.log( 'Suponiendo que tenemos el siguiente sistema de congruencias' );
	console.log( '   x = 5 mod4' );
	console.log( '   x = 3 mod5' );
	console.log( '   x = 7 mod11' );
	var result = Utilities.chineseRemainder([5,3,7], [4,5,11]);
	console.log( '  La solucion es: ' + 'x = '+ result.value +' + '+ result.kCoef+'k');
	var result = Utilities.chineseRemainder([5,3,7], [4,5,11]); 
})();