ko.exportSymbol('KO', ko['observable']);
ko.exportSymbol('KOA', ko['observableArray']);
ko.exportSymbol('KOD', ko['dependentObservable']);

(function(bindingHandlers){

var kou = function() {
  var ku = ko['utils'];
  return {
    unwrap: ku['unwrapObservable'],
    regEventHandler: ku['registerEventHandler'],
    toggleClass: ku['toggleDomNodeCssClass']
  };
}();

bindingHandlers['html'] = {
  'update': function (element, valueAccessor) {
    var value = kou.unwrap(valueAccessor());
    if ((value === null) || (value === undefined))
      value = "";
    element.innerHTML = value;
  }
};

bindingHandlers['event'] = {
  'init': function (element, valueAccessor, allBindingsAccessor, viewModel) {
    var value = kou.unwrap(valueAccessor());
    for (var eventName in value) {
      if (typeof eventName == "string") {
        var eventHandler = kou.unwrap(value[eventName]);
        kou.regEventHandler(element, eventName, function(event) {
          var retVal;
          try {retVal = eventHandler.call(viewModel, element);}
          finally {
            if (!retVal) {
              if (event.preventDefault)
                  event.preventDefault();
              else
                  event.returnValue = false;
            }
          }
        });
      }
    }
  }
};

bindingHandlers['attr'] = {
  update: function(element, valueAccessor, allBindingsAccessor) {
    var value = kou.unwrap(valueAccessor() || {});
    for (var attrName in value) {
      if (typeof attrName == "string") {
        var attrValue = kou.unwrap(value[attrName]);
        element.setAttribute(attrName, attrValue);
      }
    }
  }
};

bindingHandlers['clazz'] = {
  update: function(element, valueAccessor, allBindingsAccessor) {
    var value = valueAccessor();
    var valueUnwrapped = kou.unwrap(value);
    var classes = value.split(" ");
    for (var i = 0, j = classes.length; i < j; ++i) {
      kou.toggleClass(element, kou.unwrap(classes[i]), true);
    }
  }
};


})(ko['bindingHandlers']);
