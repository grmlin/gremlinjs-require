require ['GremlinJS'], (G) ->
  G.on G.ON_DEFINITION_PENDING, (el) ->
    if el.getAttribute('data-gremlin-async') is 'true'
      name = el.getAttribute 'data-gremlin-found'
      require [name], (Gremlin) ->
        try
          G.add name, Gremlin 