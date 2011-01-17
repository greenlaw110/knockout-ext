
function prepareTestNode() {
  var existingNode = document.getElementById("testNode");
  if (existingNode != null)
    existingNode.parentNode.removeChild(existingNode);
  testNode = document.createElement("div");
  testNode.id = "testNode";
  document.body.appendChild(testNode);
}

describe('Binding: Event', {
  before_each: prepareTestNode,
  
  'Should prevent default action': function () {
    testNode.innerHTML = "<a href='http://www.example.com/' data-bind='event: {name: \"click\", handler: function(){}}'>click me</a>";
    ko.applyBindings(null, testNode);
    ko.utils.triggerEvent(testNode.childNodes[0], "click");
    // Assuming we haven't been redirected to http://www.example.com/, this spec has now passed
  },
  
  'Should invoke the supplied function on [change] event, using model as \'this\' param': function() {
    var model = { wasCalled: false, doCall: function () { this.wasCalled = true; } };
    testNode.innerHTML = "<input type='text' data-bind='event: {name: \"change\", handler: doCall}'></input>";
    ko.applyBindings(model, testNode);
    ko.utils.triggerEvent(testNode.childNodes[0], "change");
    value_of(model.wasCalled).should_be(true);
  },

});
