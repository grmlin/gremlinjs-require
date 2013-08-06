//@ sourceMappingURL=gremlin.require.map
(function() {
  require(['GremlinJS'], function(G) {
    return G.on(G.ON_DEFINITION_PENDING, function(el) {
      var name;
      if (el.getAttribute('data-gremlin-async') === 'true') {
        name = el.getAttribute('data-gremlin-found');
        return require([name], function(Gremlin) {
          G.debug.console.log("Loaded gremlin definition <" + name + "> successfully with require.");
          try {
            return G.add(name, Gremlin);
          } catch (_error) {}
        });
      }
    });
  });

}).call(this);
