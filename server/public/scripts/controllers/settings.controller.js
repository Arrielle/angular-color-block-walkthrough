colorBlocks.controller('SettingsController',['DataFactory', function(DataFactory) {
  console.log("settings controller running");

  var self = this;
  self.colors = DataFactory.colorArray;
  self.newColor = '';

  self.addNewColor = function(){
    console.log('add new color button was clicked');
    DataFactory.addNewColor(self.newColor);
  }

}]);
