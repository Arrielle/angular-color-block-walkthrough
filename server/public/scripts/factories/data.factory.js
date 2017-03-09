colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];

//You want to create functions inside of the factory because then they can be used on other pages. 
  function addingNewColorToFactoryArray(newColor){
    colors.push(newColor);
  }

  return {
    colorArray: colors,
    addNewColor: addingNewColorToFactoryArray
  }

}]);
