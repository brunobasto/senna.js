document.addEventListener('DOMContentLoaded', function(event) {
  const app = new senna.App();

  app.setBasePath('/examples/nested_routes');
  app.addSurfaces('content');
  app.addRoutes(new senna.Route(/.*/, senna.HtmlScreen));

  window.SPA = app;

  if (window.SPA_LISTENERS) {
    window.SPA_LISTENERS.forEach(function(callback) {
      callback(app)
    });
  }
});

window.onSPA = function (callback) {
  if (window.SPA) {
    callback(window.SPA);
  }
  else {
    window.SPA_LISTENERS || (window.SPA_LISTENERS = []);
    window.SPA_LISTENERS.push(callback);
  }
}
