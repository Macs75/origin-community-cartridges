function org_rhq_enterprise_gui_coregui_CoreGUI(){
  var $wnd_0 = window, $doc_0 = document, $stats = $wnd_0.__gwtStatsEvent?function(a){
    return $wnd_0.__gwtStatsEvent(a);
  }
  :null, $sessionId_0 = $wnd_0.__gwtStatsSessionId?$wnd_0.__gwtStatsSessionId:null, scriptsDone, loadDone, bodyDone, base = '', metaProps = {}, values = [], providers = [], answers = [], softPermutationId = 0, onLoadErrorFunc, propertyErrorFunc;
  $stats && $stats({moduleName:'org.rhq.enterprise.gui.coregui.CoreGUI', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'begin'});
  if (!$wnd_0.__gwt_stylesLoaded) {
    $wnd_0.__gwt_stylesLoaded = {};
  }
  if (!$wnd_0.__gwt_scriptsLoaded) {
    $wnd_0.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    var result = false;
    try {
      var query = $wnd_0.location.search;
      return (query.indexOf('gwt.codesvr=') != -1 || (query.indexOf('gwt.hosted=') != -1 || $wnd_0.external && $wnd_0.external.gwtOnLoad)) && query.indexOf('gwt.hybrid') == -1;
    }
     catch (e) {
    }
    isHostedMode = function(){
      return result;
    }
    ;
    return result;
  }

  function maybeStartModule(){
    if (scriptsDone && loadDone) {
      var iframe = $doc_0.getElementById('org.rhq.enterprise.gui.coregui.CoreGUI');
      var frameWnd = iframe.contentWindow;
      if (isHostedMode()) {
        frameWnd.__gwt_getProperty = function(name_0){
          return computePropValue(name_0);
        }
        ;
      }
      org_rhq_enterprise_gui_coregui_CoreGUI = null;
      frameWnd.gwtOnLoad(onLoadErrorFunc, 'org.rhq.enterprise.gui.coregui.CoreGUI', base, softPermutationId);
      $stats && $stats({moduleName:'org.rhq.enterprise.gui.coregui.CoreGUI', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'end'});
    }
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    function ensureAbsoluteUrl(url){
      if (url.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc_0.createElement('img');
        img.src = url + 'clear.cache.gif';
        url = getDirectoryOfFile(img.src);
      }
      return url;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty('baseUrl');
      if (metaVal != null) {
        return metaVal;
      }
      return '';
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc_0.getElementsByTagName('script');
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf('org.rhq.enterprise.gui.coregui.CoreGUI.nocache.js') != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return '';
    }

    function tryMarkerScript(){
      var thisScript;
      if (typeof isBodyLoaded == 'undefined' || !isBodyLoaded()) {
        var markerId = '__gwt_marker_org.rhq.enterprise.gui.coregui.CoreGUI';
        var markerScript;
        $doc_0.write('<script id="' + markerId + '"><\/script>');
        markerScript = $doc_0.getElementById(markerId);
        thisScript = markerScript && markerScript.previousSibling;
        while (thisScript && thisScript.tagName != 'SCRIPT') {
          thisScript = thisScript.previousSibling;
        }
        if (markerScript) {
          markerScript.parentNode.removeChild(markerScript);
        }
        if (thisScript && thisScript.src) {
          return getDirectoryOfFile(thisScript.src);
        }
      }
      return '';
    }

    function tryBaseTag(){
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return '';
    }

    function isLocationOk(){
      var loc = $doc_0.location;
      return loc.href == loc.protocol + '//' + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == '') {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == '') {
      tempBase = tryMarkerScript();
    }
    if (tempBase == '') {
      tempBase = tryBaseTag();
    }
    if (tempBase == '' && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc_0.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    base = tempBase;
    return tempBase;
  }

  function processMetas(){
    var metas = document.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute('name'), content_0;
      if (name_0) {
        name_0 = name_0.replace('org.rhq.enterprise.gui.coregui.CoreGUI::', '');
        if (name_0.indexOf('::') >= 0) {
          continue;
        }
        if (name_0 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_0 = content_0.substring(0, eq);
              value = content_0.substring(eq + 1);
            }
             else {
              name_0 = content_0;
              value = '';
            }
            metaProps[name_0] = value;
          }
        }
         else if (name_0 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_0 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
  }

  function __gwt_isKnownPropertyValue(propName, propValue){
    return propValue in values[propName];
  }

  function __gwt_getMetaProperty(name_0){
    var value = metaProps[name_0];
    return value == null?null:value;
  }

  function unflattenKeylistIntoAnswers(propValArray, value){
    var answer = answers;
    for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
      answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
    }
    answer[propValArray[n]] = value;
  }

  function computePropValue(propName){
    var value = providers[propName](), allowedValuesMap = values[propName];
    if (value in allowedValuesMap) {
      return value;
    }
    var allowedValuesList = [];
    for (var k in allowedValuesMap) {
      allowedValuesList[allowedValuesMap[k]] = k;
    }
    if (propertyErrorFunc) {
      propertyErrorFunc(propName, allowedValuesList, value);
    }
    throw null;
  }

  var frameInjected;
  function maybeInjectFrame(){
    if (!frameInjected) {
      frameInjected = true;
      var iframe = $doc_0.createElement('iframe');
      iframe.src = "javascript:''";
      iframe.id = 'org.rhq.enterprise.gui.coregui.CoreGUI';
      iframe.style.cssText = 'position:absolute;width:0;height:0;border:none';
      iframe.tabIndex = -1;
      $doc_0.body.appendChild(iframe);
      $stats && $stats({moduleName:'org.rhq.enterprise.gui.coregui.CoreGUI', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'moduleRequested'});
      iframe.contentWindow.location.replace(base + initialHtml);
    }
  }

  providers['locale'] = function(){
    var locale = null;
    var rtlocale = 'en';
    try {
      if (!locale) {
        var queryParam = location.search;
        var qpStart = queryParam.indexOf('locale=');
        if (qpStart >= 0) {
          var value = queryParam.substring(qpStart + 7);
          var end = queryParam.indexOf('&', qpStart);
          if (end < 0) {
            end = queryParam.length;
          }
          locale = queryParam.substring(qpStart + 7, end);
        }
      }
      if (!locale) {
        locale = __gwt_getMetaProperty('locale');
      }
      if (!locale) {
        var language = navigator.browserLanguage?navigator.browserLanguage:navigator.language;
        if (language) {
          var parts = language.split(/[-_]/);
          if (parts.length > 1) {
            parts[1] = parts[1].toUpperCase();
          }
          locale = parts.join('_');
        }
      }
      if (!locale) {
        locale = $wnd_0['__gwt_Locale'];
      }
      if (locale) {
        rtlocale = locale;
      }
      while (locale && !__gwt_isKnownPropertyValue('locale', locale)) {
        var lastIndex = locale.lastIndexOf('_');
        if (lastIndex < 0) {
          locale = null;
          break;
        }
        locale = locale.substring(0, lastIndex);
      }
    }
     catch (e) {
      alert('Unexpected exception in locale detection, using default: ' + e);
    }
    $wnd_0['__gwt_Locale'] = rtlocale;
    return locale || 'en';
  }
  ;
  values['locale'] = {cs:0, de:1, 'default':2, en:3, ja:4, pt:5, ru:6, zh:7};
  org_rhq_enterprise_gui_coregui_CoreGUI.onScriptLoad = function(){
    if (frameInjected) {
      loadDone = true;
      maybeStartModule();
    }
  }
  ;
  org_rhq_enterprise_gui_coregui_CoreGUI.onInjectionDone = function(){
    scriptsDone = true;
    $stats && $stats({moduleName:'org.rhq.enterprise.gui.coregui.CoreGUI', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'loadExternalRefs', millis:(new Date).getTime(), type:'end'});
    maybeStartModule();
  }
  ;
  processMetas();
  computeScriptBase();
  var strongName;
  var initialHtml;
  if (isHostedMode()) {
    if ($wnd_0.external && ($wnd_0.external.initModule && $wnd_0.external.initModule('org.rhq.enterprise.gui.coregui.CoreGUI'))) {
      $wnd_0.location.reload();
      return;
    }
    initialHtml = 'hosted.html?org_rhq_enterprise_gui_coregui_CoreGUI';
    strongName = '';
  }
  $stats && $stats({moduleName:'org.rhq.enterprise.gui.coregui.CoreGUI', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'selectingPermutation'});
  if (!isHostedMode()) {
    try {
      unflattenKeylistIntoAnswers(['en'], '3B6D8ABFB757D1AA5952A02E170DFC19');
      unflattenKeylistIntoAnswers(['zh'], '3CE10F7599B1CAF980E336300DD4F9A7');
      unflattenKeylistIntoAnswers(['ru'], '41330ABA2D8D9E98BAD9F0142354483E');
      unflattenKeylistIntoAnswers(['ja'], '5759E42EFE3BD7FD112C85B6D639A69F');
      unflattenKeylistIntoAnswers(['cs'], '8928C12EBA89C1C8D33842C2C498D854');
      unflattenKeylistIntoAnswers(['de'], '9508DD330EF7F96388E22BEA0D39FB78');
      unflattenKeylistIntoAnswers(['pt'], 'B752D872621FE30C9F358779B6CE96F6');
      unflattenKeylistIntoAnswers(['default'], 'DB25CA949583EBEC4E48706F456A4D67');
      strongName = answers[computePropValue('locale')];
      var idx = strongName.indexOf(':');
      if (idx != -1) {
        softPermutationId = Number(strongName.substring(idx + 1));
        strongName = strongName.substring(0, idx);
      }
      initialHtml = strongName + '.cache.html';
    }
     catch (e) {
      return;
    }
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      maybeStartModule();
      if ($doc_0.removeEventListener) {
        $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc_0.addEventListener) {
    $doc_0.addEventListener('DOMContentLoaded', function(){
      maybeInjectFrame();
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc_0.readyState)) {
      maybeInjectFrame();
      onBodyDone();
    }
  }
  , 50);
  $stats && $stats({moduleName:'org.rhq.enterprise.gui.coregui.CoreGUI', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'end'});
  $stats && $stats({moduleName:'org.rhq.enterprise.gui.coregui.CoreGUI', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'loadExternalRefs', millis:(new Date).getTime(), type:'begin'});
  if (!__gwt_scriptsLoaded['sc/modules/ISC_Core.js']) {
    __gwt_scriptsLoaded['sc/modules/ISC_Core.js'] = true;
    document.write('<script language="javascript" src="' + base + 'sc/modules/ISC_Core.js"><\/script>');
  }
  if (!__gwt_scriptsLoaded['sc/modules/ISC_Foundation.js']) {
    __gwt_scriptsLoaded['sc/modules/ISC_Foundation.js'] = true;
    document.write('<script language="javascript" src="' + base + 'sc/modules/ISC_Foundation.js"><\/script>');
  }
  if (!__gwt_scriptsLoaded['sc/modules/ISC_Containers.js']) {
    __gwt_scriptsLoaded['sc/modules/ISC_Containers.js'] = true;
    document.write('<script language="javascript" src="' + base + 'sc/modules/ISC_Containers.js"><\/script>');
  }
  if (!__gwt_scriptsLoaded['sc/modules/ISC_Grids.js']) {
    __gwt_scriptsLoaded['sc/modules/ISC_Grids.js'] = true;
    document.write('<script language="javascript" src="' + base + 'sc/modules/ISC_Grids.js"><\/script>');
  }
  if (!__gwt_scriptsLoaded['sc/modules/ISC_Forms.js']) {
    __gwt_scriptsLoaded['sc/modules/ISC_Forms.js'] = true;
    document.write('<script language="javascript" src="' + base + 'sc/modules/ISC_Forms.js"><\/script>');
  }
  if (!__gwt_scriptsLoaded['sc/modules/ISC_RichTextEditor.js']) {
    __gwt_scriptsLoaded['sc/modules/ISC_RichTextEditor.js'] = true;
    document.write('<script language="javascript" src="' + base + 'sc/modules/ISC_RichTextEditor.js"><\/script>');
  }
  if (!__gwt_scriptsLoaded['sc/modules/ISC_Calendar.js']) {
    __gwt_scriptsLoaded['sc/modules/ISC_Calendar.js'] = true;
    document.write('<script language="javascript" src="' + base + 'sc/modules/ISC_Calendar.js"><\/script>');
  }
  if (!__gwt_scriptsLoaded['sc/modules/ISC_DataBinding.js']) {
    __gwt_scriptsLoaded['sc/modules/ISC_DataBinding.js'] = true;
    document.write('<script language="javascript" src="' + base + 'sc/modules/ISC_DataBinding.js"><\/script>');
  }
  if (!__gwt_scriptsLoaded['sc/skins/Enterprise/load_skin.js']) {
    __gwt_scriptsLoaded['sc/skins/Enterprise/load_skin.js'] = true;
    document.write('<script language="javascript" src="' + base + 'sc/skins/Enterprise/load_skin.js"><\/script>');
  }
  if (!__gwt_scriptsLoaded['/coregui/js/jquery.sparkline-2.0.min.js']) {
    __gwt_scriptsLoaded['/coregui/js/jquery.sparkline-2.0.min.js'] = true;
    document.write('<script language="javascript" src="/coregui/js/jquery.sparkline-2.0.min.js"><\/script>');
  }
  $doc_0.write('<script defer="defer">org_rhq_enterprise_gui_coregui_CoreGUI.onInjectionDone(\'org.rhq.enterprise.gui.coregui.CoreGUI\')<\/script>');
}

org_rhq_enterprise_gui_coregui_CoreGUI();
