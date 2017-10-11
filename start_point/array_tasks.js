var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var squared = arr.map(function(item) {
			return item *= item
		});
		return squared;
	},

	sum: function (arr) {
		  var total = 0;
		  var total = arr.reduce(function (runningTotal, arrayNumbers) {
		    return runningTotal += arrayNumbers
		  }, 0);
		  return total;
		},

	findDuplicates: function (arr) {
		duplicateArray = arr.filter(function(item, position) {
			return arr.indexOf(item) !== position;
		})
		uniqueArray = duplicateArray.filter(function (item, position) {
			return duplicateArray.indexOf(item) == position;
		})
		return uniqueArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		clonedArray = arr.filter(function(number) {
			return number !==valueToRemove;
		})
		return clonedArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var foundArray = [];
		var arrayPosition = arr.indexOf(itemToFind);
		while (arrayPosition != -1) {
		  foundArray.push(arrayPosition);
		  arrayPosition = arr.indexOf(itemToFind, arrayPosition + 1);
		}
		return foundArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evenNumbers = arr.filter(function(number){
				return number % 2 === 0;
		})

		var numbersSquared = evenNumbers.map(function(number) {
				return number * number;
		})

		var sum = numbersSquared.reduce(function(sum, number){
				return sum + number;
		})

		return sum;

	}

}

module.exports = arrayTasks
