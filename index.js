function Component() {}

Component.prototype.view = __dirname;

Component.prototype.create = function (model) {
  var self = this;
  var path = model.get('path');

  this.listener = model.on('change', 'value',
    function (val, prev) {
      if (val === prev) return;
      var render = model.get('render');
      var segment = model.get('segment');
      var url = model.root.get('$render.url').split('/');
      url[segment] = val;
      url = url.join('/');
      self.app.history.replace(url, render);
    }
  );
};

module.exports = Component;
