(function(ko) {
var exportSymbol = function(publicPath, object) {
  var tokens = publicPath.split(".");
  var target = window;
  for (var i = 0; i < tokens.length - 1; i++)
    target = target[tokens[i]];
  target[tokens[tokens.length - 1]] = object;
};
var exportProperty = function(owner, publicName, object) {
  owner[publicName] = object;
};

exportSymbol('KO', ko['observable']);
exportSymbol('KOA', ko['observableArray']);
exportSymbol('KOD', ko['dependentObservable']);

(function(bindingHandlers){

var kou = function() {
  var ku = ko['utils'];
  return {
    unwrap: ku['unwrapObservable'],
    regEventHandler: ku['registerEventHandler'],
    toggleClass: ku['toggleDomNodeCssClass']
  };
}();


})(ko['bindingHandlers']);

})(ko);