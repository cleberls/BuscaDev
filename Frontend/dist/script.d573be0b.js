// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/script.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Objeto de estado global da aplicação,
 * que será manipulado pelo usuário através dos inputs
 */
var globalState = {
  allCountries: [],
  filteredCountries: [],
  loadingData: true,
  currentFilter: "",
  radioAnd: false,
  radioOr: true,
  checkboxes: [{
    filter: "Java",
    description: "Java",
    checked: true
  }, {
    filter: "JavaScript",
    description: "JavaScript",
    checked: true
  }, {
    filter: "Python",
    description: "Python",
    checked: true
  }]
};
/**
 * Variáveis globais que mapeiam elementos HTML
 */

var globalDivCountries = document.querySelector("#divCountries");
var globalInputName = document.querySelector("#inputName");
var globalDivCheckboxes = document.querySelector("#checkboxes");
var globalRadioAnd = document.querySelector("#radioAnd");
var globalRadioOr = document.querySelector("#radioOr");
/**
 * Tudo começa aqui. A invocação desta função é feita
 * na última linha de código deste arquivo
 */

function start() {
  return _start.apply(this, arguments);
}
/**
 * Função para montar os checkboxes
 * dinamicamente a partir de globalState
 */


function _start() {
  _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /**
             * Adicionando eventos aos inputs, checkboxes e radio buttons
             */
            globalInputName.addEventListener("input", handleInputChange);
            globalRadioAnd.addEventListener("input", handleRadioClick);
            globalRadioOr.addEventListener("input", handleRadioClick);
            /**
             * Renderizando os checkboxes de forma dinâmica
             */

            renderCheckboxes();
            /**
             * Obtendo todos os países do backend
             * de forma assíncrona
             */

            _context.next = 6;
            return fetchAll();

          case 6:
            /**
             * Iniciamos o app já filtrando os países conforme
             * valor inicial dos inputs
             */
            filterCountries();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _start.apply(this, arguments);
}

function renderCheckboxes() {
  var checkboxes = globalState.checkboxes;
  var inputCheckboxes = checkboxes.map(function (checkbox) {
    var id = checkbox.filter,
        description = checkbox.description,
        checked = checkbox.checked; // prettier-ignore

    return "<label class=\"option\">\n        <input \n          id=\"".concat(id, "\" \n          type=\"checkbox\" \n          checked=\"").concat(checked, "\"\n        />\n        <span>").concat(description, "</span>\n      </label>");
  });
  globalDivCheckboxes.innerHTML = inputCheckboxes.join("");
  /**
   * Adicionando eventos
   */

  checkboxes.forEach(function (checkbox) {
    var id = checkbox.filter;
    var element = document.querySelector("#".concat(id));
    element.addEventListener("input", handleCheckboxClick);
  });
}
/**
 * Esta função é executada somente uma vez
 * e traz todos os países do backend. Além disso,
 * faz uma transformação nos dados, incluindo um
 * campo para facilitar a pesquisa (removendo acentos,
 * espaços em branco e tornando todo o texto minúsculo) e
 * também um array contendo somente o nome das línguas
 * faladas em determinado país
 */


function fetchAll() {
  return _fetchAll.apply(this, arguments);
}

function _fetchAll() {
  _fetchAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var url, resource, json, jsonWithImprovedSearch;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = "http://localhost:3001/devs";
            _context2.next = 3;
            return fetch(url);

          case 3:
            resource = _context2.sent;
            _context2.next = 6;
            return resource.json();

          case 6:
            json = _context2.sent;
            jsonWithImprovedSearch = json.map(function (item) {
              var name = item.name,
                  picture = item.picture,
                  id = item.id;
              var lowerCaseName = name.toLocaleLowerCase();
              return _objectSpread(_objectSpread({}, item), {}, {
                searchName: removeAccentMarksFrom(lowerCaseName).split("").filter(function (char) {
                  return char !== " ";
                }).join(""),
                searchLanguages: getOnlyLanguagesFrom(id)
              });
            });
            /**
             * Atribuindo valores aos campos
             * através de cópia
             */

            globalState.allCountries = _toConsumableArray(jsonWithImprovedSearch);
            globalState.filteredCountries = _toConsumableArray(jsonWithImprovedSearch);
            globalState.loadingData = false;

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchAll.apply(this, arguments);
}

function handleInputChange(_ref) {
  var target = _ref.target;

  /**
   * Atribuindo valor do input ao
   * globalState
   */
  globalState.currentFilter = target.value.toLocaleLowerCase().trim();
  filterCountries();
}
/**
 * Lidando com os cliques nos checkboxes
 * de forma dinâmica
 */


function handleCheckboxClick(_ref2) {
  var target = _ref2.target;
  var id = target.id,
      checked = target.checked;
  var checkboxes = globalState.checkboxes;
  /**
   * Refletindo o estado dos checkboxes
   * em globalState
   */

  var checkboxToChange = checkboxes.find(function (checkbox) {
    return checkbox.filter === id;
  });
  checkboxToChange.checked = checked;
  filterCountries();
}
/**
 * Aqui garantimos que uma e somente uma das opções
 * de radio de state permaneça como true. Em seguida,
 * filtramos os países
 */


function handleRadioClick(_ref3) {
  var target = _ref3.target;
  var radioId = target.id;
  globalState.radioAnd = radioId === "radioAnd";
  globalState.radioOr = radioId === "radioOr";
  filterCountries();
}
/**
 * Função para varrer o array de idiomas
 * e trazer somente o nome em minúsculas, de forma ordenada
 */


function getOnlyLanguagesFrom(language) {
  return id.map(function (id) {
    return id.toLocaleLowerCase();
  }).sort();
}
/**
 * Função para remover acentos e caracteres especiais
 * de determinado texto
 */


function removeAccentMarksFrom(text) {
  var WITH_ACCENT_MARKS = "áãâäàéèêëíìîïóôõöòúùûüñ".split("");
  var WITHOUT_ACCENT_MARKS = "aaaaaeeeeiiiiooooouuuun".split("");
  var newText = text.toLocaleLowerCase().split("").map(function (char) {
    /**
     * Se indexOf retorna -1, indica
     * que o elemento não foi encontrado
     * no array. Caso contrário, indexOf
     * retorna a posição de determinado
     * caractere no array de busca
     */
    var index = WITH_ACCENT_MARKS.indexOf(char);
    /**
     * Caso o caractere acentuado tenha sido
     * encontrado, substituímos pelo equivalente
     * do array b
     */

    if (index > -1) {
      return WITHOUT_ACCENT_MARKS[index];
    }

    return char;
  }).join("");
  return newText;
}
/**
 * Principal função deste app.
 *
 * Filtra os países conforme definições
 * do usuário e invoca a renderização
 * da tela
 */


function filterCountries() {
  var allCountries = globalState.allCountries,
      radioOr = globalState.radioOr,
      currentFilter = globalState.currentFilter,
      checkboxes = globalState.checkboxes;
  /**
   * Obtendo array de idiomas a partir dos
   * checkboxes que estão marcados, retornando somente o id
   * da linguagem para facilitar a busca.
   */

  var filterCountries = checkboxes.filter(function (_ref4) {
    var checked = _ref4.checked;
    return checked;
  }).map(function (_ref5) {
    var filter = _ref5.filter;
    return filter;
  }).sort();
  /**
   * Obtendo os países com base nos idiomas
   * e se o usuário escolheu "OU", o que abrange mais opções do
   * que "E" (mais limitado)
   */

  var filteredCountries = allCountries.filter(function (_ref6) {
    var searchLanguages = _ref6.searchLanguages;

    /**
     * Com "OU", verificamos se pelo menos um dos idiomas
     * escolhidos pelo usuário pertence a determinado país.
     * Ex: Se o usuário escolheu somente Inglês, vai retornar paíse
     * que fala tanto inglês quanto francês, por exemplo
     *
     * Com "E", verificamos a comparação exata do(s) idioma(s)
     * Ex: Se o usuário escolheu somente Francês, vai retornar país
     * que fala somente o francês
     */
    return radioOr ? filterCountries.some(function (item) {
      return searchLanguages.includes(item);
    }) : filterCountries.join("") === searchLanguages.join("");
  });
  /**
   * Após o primeiro filtro, filtramos mais uma vez
   * conforme o texto do input
   */

  if (currentFilter) {
    filteredCountries = filteredCountries.filter(function (_ref7) {
      var searchName = _ref7.searchName;
      return searchName.includes(currentFilter);
    });
  }
  /**
   * Definimos os países filtrados no estado do app
   * e invocamos a função de renderização em seguida.
   */


  globalState.filteredCountries = filteredCountries;
  renderCountries();
}
/**
 * Função de renderização dos países em tela
 */


function renderCountries() {
  var filteredCountries = globalState.filteredCountries;
  var countriesToShow = filteredCountries.map(function (country) {
    return renderCountry(country);
  }).join("");
  var renderedHTML = "\n     <div>\n       <h2>".concat(filteredCountries.length, " Dev(es) encontrado(s)</h2>\n       <div class='row'>\n         ").concat(countriesToShow, "\n       </div>\n     </div>\n  ");
  globalDivCountries.innerHTML = renderedHTML;
}
/**
 * Isolamos a função para renderizar um país,
 * utilizando algumas classes do Materialize
 * e o próprio CSS do app
 */


function renderCountry(country) {
  var name = country.name,
      picture = country.picture,
      id = country.id;
  return "\n    <div class='col s12 m6 l4'>\n      <div class='country-card'>\n        <img class='flag' src=\"".concat(picture, "\" />\n        <div class='data'>\n          <span>").concat(name, "</span>\n          <span class='language'>\n            <strong>").concat(id, "</strong>\n            \n          </span>\n        </div>\n      </div>\n    </div>\n  ");
}
/**
 * Função para renderizar os idiomas.
 */


function renderLanguages(languages) {
  var checkboxes = globalState.checkboxes;
  return languages.map(function (language) {
    return checkboxes.find(function (item) {
      return item.filter === language;
    }).description;
  }).join(", ");
}
/**
 * Inicializando o app
 */


start();
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60633" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map