var Vb=Object.defineProperty;var Fb=(e,t,r)=>t in e?Vb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Hf=(e,t,r)=>Fb(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();var Wy={exports:{}},fo={},jy={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=Symbol.for("react.element"),qb=Symbol.for("react.portal"),Hb=Symbol.for("react.fragment"),Gb=Symbol.for("react.strict_mode"),Kb=Symbol.for("react.profiler"),Qb=Symbol.for("react.provider"),Xb=Symbol.for("react.context"),Zb=Symbol.for("react.forward_ref"),Yb=Symbol.for("react.suspense"),Jb=Symbol.for("react.memo"),e3=Symbol.for("react.lazy"),Gf=Symbol.iterator;function t3(e){return e===null||typeof e!="object"?null:(e=Gf&&e[Gf]||e["@@iterator"],typeof e=="function"?e:null)}var Vy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fy=Object.assign,qy={};function mi(e,t,r){this.props=e,this.context=t,this.refs=qy,this.updater=r||Vy}mi.prototype.isReactComponent={};mi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hy(){}Hy.prototype=mi.prototype;function Id(e,t,r){this.props=e,this.context=t,this.refs=qy,this.updater=r||Vy}var zd=Id.prototype=new Hy;zd.constructor=Id;Fy(zd,mi.prototype);zd.isPureReactComponent=!0;var Kf=Array.isArray,Gy=Object.prototype.hasOwnProperty,Nd={current:null},Ky={key:!0,ref:!0,__self:!0,__source:!0};function Qy(e,t,r){var n,i={},a=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Gy.call(t,n)&&!Ky.hasOwnProperty(n)&&(i[n]=t[n]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var l=Array(o),d=0;d<o;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)i[n]===void 0&&(i[n]=o[n]);return{$$typeof:ka,type:e,key:a,ref:s,props:i,_owner:Nd.current}}function r3(e,t){return{$$typeof:ka,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Od(e){return typeof e=="object"&&e!==null&&e.$$typeof===ka}function n3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Qf=/\/+/g;function Yo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?n3(""+e.key):t.toString(36)}function ws(e,t,r,n,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ka:case qb:s=!0}}if(s)return s=e,i=i(s),e=n===""?"."+Yo(s,0):n,Kf(i)?(r="",e!=null&&(r=e.replace(Qf,"$&/")+"/"),ws(i,t,r,"",function(d){return d})):i!=null&&(Od(i)&&(i=r3(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Qf,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=n===""?".":n+":",Kf(e))for(var o=0;o<e.length;o++){a=e[o];var l=n+Yo(a,o);s+=ws(a,t,r,l,i)}else if(l=t3(e),typeof l=="function")for(e=l.call(e),o=0;!(a=e.next()).done;)a=a.value,l=n+Yo(a,o++),s+=ws(a,t,r,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Va(e,t,r){if(e==null)return e;var n=[],i=0;return ws(e,n,"","",function(a){return t.call(r,a,i++)}),n}function i3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var lt={current:null},$s={transition:null},a3={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:$s,ReactCurrentOwner:Nd};function Xy(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:Va,forEach:function(e,t,r){Va(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Va(e,function(){t++}),t},toArray:function(e){return Va(e,function(t){return t})||[]},only:function(e){if(!Od(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=mi;me.Fragment=Hb;me.Profiler=Kb;me.PureComponent=Id;me.StrictMode=Gb;me.Suspense=Yb;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a3;me.act=Xy;me.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Fy({},e.props),i=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=Nd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)Gy.call(t,l)&&!Ky.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){o=Array(l);for(var d=0;d<l;d++)o[d]=arguments[d+2];n.children=o}return{$$typeof:ka,type:e.type,key:i,ref:a,props:n,_owner:s}};me.createContext=function(e){return e={$$typeof:Xb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qb,_context:e},e.Consumer=e};me.createElement=Qy;me.createFactory=function(e){var t=Qy.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:Zb,render:e}};me.isValidElement=Od;me.lazy=function(e){return{$$typeof:e3,_payload:{_status:-1,_result:e},_init:i3}};me.memo=function(e,t){return{$$typeof:Jb,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=$s.transition;$s.transition={};try{e()}finally{$s.transition=t}};me.unstable_act=Xy;me.useCallback=function(e,t){return lt.current.useCallback(e,t)};me.useContext=function(e){return lt.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return lt.current.useDeferredValue(e)};me.useEffect=function(e,t){return lt.current.useEffect(e,t)};me.useId=function(){return lt.current.useId()};me.useImperativeHandle=function(e,t,r){return lt.current.useImperativeHandle(e,t,r)};me.useInsertionEffect=function(e,t){return lt.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return lt.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return lt.current.useMemo(e,t)};me.useReducer=function(e,t,r){return lt.current.useReducer(e,t,r)};me.useRef=function(e){return lt.current.useRef(e)};me.useState=function(e){return lt.current.useState(e)};me.useSyncExternalStore=function(e,t,r){return lt.current.useSyncExternalStore(e,t,r)};me.useTransition=function(){return lt.current.useTransition()};me.version="18.3.1";jy.exports=me;var ht=jy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s3=ht,o3=Symbol.for("react.element"),l3=Symbol.for("react.fragment"),u3=Object.prototype.hasOwnProperty,d3=s3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c3={key:!0,ref:!0,__self:!0,__source:!0};function Zy(e,t,r){var n,i={},a=null,s=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)u3.call(t,n)&&!c3.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:o3,type:e,key:a,ref:s,props:i,_owner:d3.current}}fo.Fragment=l3;fo.jsx=Zy;fo.jsxs=Zy;Wy.exports=fo;var U=Wy.exports,wu={},Yy={exports:{}},It={},Jy={exports:{}},ev={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(W,P){var K=W.length;W.push(P);e:for(;0<K;){var L=K-1>>>1,V=W[L];if(0<i(V,P))W[L]=P,W[K]=V,K=L;else break e}}function r(W){return W.length===0?null:W[0]}function n(W){if(W.length===0)return null;var P=W[0],K=W.pop();if(K!==P){W[0]=K;e:for(var L=0,V=W.length,Y=V>>>1;L<Y;){var F=2*(L+1)-1,ge=W[F],We=F+1,Ce=W[We];if(0>i(ge,K))We<V&&0>i(Ce,ge)?(W[L]=Ce,W[We]=K,L=We):(W[L]=ge,W[F]=K,L=F);else if(We<V&&0>i(Ce,K))W[L]=Ce,W[We]=K,L=We;else break e}}return P}function i(W,P){var K=W.sortIndex-P.sortIndex;return K!==0?K:W.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],d=[],f=1,p=null,h=3,_=!1,w=!1,$=!1,E=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(W){for(var P=r(d);P!==null;){if(P.callback===null)n(d);else if(P.startTime<=W)n(d),P.sortIndex=P.expirationTime,t(l,P);else break;P=r(d)}}function S(W){if($=!1,x(W),!w)if(r(l)!==null)w=!0,J(T);else{var P=r(d);P!==null&&re(S,P.startTime-W)}}function T(W,P){w=!1,$&&($=!1,y(b),b=-1),_=!0;var K=h;try{for(x(P),p=r(l);p!==null&&(!(p.expirationTime>P)||W&&!G());){var L=p.callback;if(typeof L=="function"){p.callback=null,h=p.priorityLevel;var V=L(p.expirationTime<=P);P=e.unstable_now(),typeof V=="function"?p.callback=V:p===r(l)&&n(l),x(P)}else n(l);p=r(l)}if(p!==null)var Y=!0;else{var F=r(d);F!==null&&re(S,F.startTime-P),Y=!1}return Y}finally{p=null,h=K,_=!1}}var I=!1,z=null,b=-1,O=5,M=-1;function G(){return!(e.unstable_now()-M<O)}function Q(){if(z!==null){var W=e.unstable_now();M=W;var P=!0;try{P=z(!0,W)}finally{P?X():(I=!1,z=null)}}else I=!1}var X;if(typeof m=="function")X=function(){m(Q)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,ee=A.port2;A.port1.onmessage=Q,X=function(){ee.postMessage(null)}}else X=function(){E(Q,0)};function J(W){z=W,I||(I=!0,X())}function re(W,P){b=E(function(){W(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(W){W.callback=null},e.unstable_continueExecution=function(){w||_||(w=!0,J(T))},e.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<W?Math.floor(1e3/W):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(W){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var K=h;h=P;try{return W()}finally{h=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(W,P){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var K=h;h=W;try{return P()}finally{h=K}},e.unstable_scheduleCallback=function(W,P,K){var L=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?L+K:L):K=L,W){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=K+V,W={id:f++,callback:P,priorityLevel:W,startTime:K,expirationTime:V,sortIndex:-1},K>L?(W.sortIndex=K,t(d,W),r(l)===null&&W===r(d)&&($?(y(b),b=-1):$=!0,re(S,K-L))):(W.sortIndex=V,t(l,W),w||_||(w=!0,J(T))),W},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(W){var P=h;return function(){var K=h;h=P;try{return W.apply(this,arguments)}finally{h=K}}}})(ev);Jy.exports=ev;var p3=Jy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f3=ht,Ct=p3;function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tv=new Set,sa={};function On(e,t){si(e,t),si(e+"Capture",t)}function si(e,t){for(sa[e]=t,e=0;e<t.length;e++)tv.add(t[e])}var wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=Object.prototype.hasOwnProperty,h3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xf={},Zf={};function m3(e){return $u.call(Zf,e)?!0:$u.call(Xf,e)?!1:h3.test(e)?Zf[e]=!0:(Xf[e]=!0,!1)}function g3(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function y3(e,t,r,n){if(t===null||typeof t>"u"||g3(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ut(e,t,r,n,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ye[e]=new ut(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ye[t]=new ut(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ye[e]=new ut(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ye[e]=new ut(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ye[e]=new ut(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ye[e]=new ut(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ye[e]=new ut(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ye[e]=new ut(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ye[e]=new ut(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rd=/[\-:]([a-z])/g;function Ad(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rd,Ad);Ye[t]=new ut(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rd,Ad);Ye[t]=new ut(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rd,Ad);Ye[t]=new ut(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ye[e]=new ut(e,1,!1,e.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ye[e]=new ut(e,1,!1,e.toLowerCase(),null,!0,!0)});function Md(e,t,r,n){var i=Ye.hasOwnProperty(t)?Ye[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(y3(t,r,i,n)&&(r=null),n||i===null?m3(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Sr=f3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fa=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),rv=Symbol.for("react.provider"),nv=Symbol.for("react.context"),Dd=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),Su=Symbol.for("react.suspense_list"),Pd=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),iv=Symbol.for("react.offscreen"),Yf=Symbol.iterator;function Si(e){return e===null||typeof e!="object"?null:(e=Yf&&e[Yf]||e["@@iterator"],typeof e=="function"?e:null)}var Be=Object.assign,Jo;function ji(e){if(Jo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Jo=t&&t[1]||""}return`
`+Jo+e}var el=!1;function tl(e,t){if(!e||el)return"";el=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=n.stack.split(`
`),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==a[o]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=o);break}}}finally{el=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ji(e):""}function v3(e){switch(e.tag){case 5:return ji(e.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 2:case 15:return e=tl(e.type,!1),e;case 11:return e=tl(e.type.render,!1),e;case 1:return e=tl(e.type,!0),e;default:return""}}function ku(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case Un:return"Portal";case xu:return"Profiler";case Bd:return"StrictMode";case bu:return"Suspense";case Su:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nv:return(e.displayName||"Context")+".Consumer";case rv:return(e._context.displayName||"Context")+".Provider";case Dd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pd:return t=e.displayName||null,t!==null?t:ku(e.type)||"Memo";case Br:t=e._payload,e=e._init;try{return ku(e(t))}catch{}}return null}function _3(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ku(t);case 8:return t===Bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function av(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function w3(e){var t=av(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qa(e){e._valueTracker||(e._valueTracker=w3(e))}function sv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=av(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function As(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Eu(e,t){var r=t.checked;return Be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Jf(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Xr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ov(e,t){t=t.checked,t!=null&&Md(e,"checked",t,!1)}function Tu(e,t){ov(e,t);var r=Xr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cu(e,t.type,r):t.hasOwnProperty("defaultValue")&&Cu(e,t.type,Xr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eh(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Cu(e,t,r){(t!=="number"||As(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Vi=Array.isArray;function ei(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Xr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Iu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(q(91));return Be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function th(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(q(92));if(Vi(r)){if(1<r.length)throw Error(q(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Xr(r)}}function lv(e,t){var r=Xr(t.value),n=Xr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function rh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ha,dv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oa(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$3=["Webkit","ms","Moz","O"];Object.keys(Xi).forEach(function(e){$3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xi[t]=Xi[e]})});function cv(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Xi.hasOwnProperty(e)&&Xi[e]?(""+t).trim():t+"px"}function pv(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=cv(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var x3=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nu(e,t){if(t){if(x3[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(q(62))}}function Ou(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ru=null;function Ld(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Au=null,ti=null,ri=null;function nh(e){if(e=Ca(e)){if(typeof Au!="function")throw Error(q(280));var t=e.stateNode;t&&(t=vo(t),Au(e.stateNode,e.type,t))}}function fv(e){ti?ri?ri.push(e):ri=[e]:ti=e}function hv(){if(ti){var e=ti,t=ri;if(ri=ti=null,nh(e),t)for(e=0;e<t.length;e++)nh(t[e])}}function mv(e,t){return e(t)}function gv(){}var rl=!1;function yv(e,t,r){if(rl)return e(t,r);rl=!0;try{return mv(e,t,r)}finally{rl=!1,(ti!==null||ri!==null)&&(gv(),hv())}}function la(e,t){var r=e.stateNode;if(r===null)return null;var n=vo(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(q(231,t,typeof r));return r}var Mu=!1;if(wr)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{Mu=!1}function b3(e,t,r,n,i,a,s,o,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(f){this.onError(f)}}var Zi=!1,Ms=null,Bs=!1,Bu=null,S3={onError:function(e){Zi=!0,Ms=e}};function k3(e,t,r,n,i,a,s,o,l){Zi=!1,Ms=null,b3.apply(S3,arguments)}function E3(e,t,r,n,i,a,s,o,l){if(k3.apply(this,arguments),Zi){if(Zi){var d=Ms;Zi=!1,Ms=null}else throw Error(q(198));Bs||(Bs=!0,Bu=d)}}function Rn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function vv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ih(e){if(Rn(e)!==e)throw Error(q(188))}function T3(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(q(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return ih(i),e;if(a===n)return ih(i),t;a=a.sibling}throw Error(q(188))}if(r.return!==n.return)r=i,n=a;else{for(var s=!1,o=i.child;o;){if(o===r){s=!0,r=i,n=a;break}if(o===n){s=!0,n=i,r=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===r){s=!0,r=a,n=i;break}if(o===n){s=!0,n=a,r=i;break}o=o.sibling}if(!s)throw Error(q(189))}}if(r.alternate!==n)throw Error(q(190))}if(r.tag!==3)throw Error(q(188));return r.stateNode.current===r?e:t}function _v(e){return e=T3(e),e!==null?wv(e):null}function wv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wv(e);if(t!==null)return t;e=e.sibling}return null}var $v=Ct.unstable_scheduleCallback,ah=Ct.unstable_cancelCallback,C3=Ct.unstable_shouldYield,I3=Ct.unstable_requestPaint,Ue=Ct.unstable_now,z3=Ct.unstable_getCurrentPriorityLevel,Ud=Ct.unstable_ImmediatePriority,xv=Ct.unstable_UserBlockingPriority,Ds=Ct.unstable_NormalPriority,N3=Ct.unstable_LowPriority,bv=Ct.unstable_IdlePriority,ho=null,lr=null;function O3(e){if(lr&&typeof lr.onCommitFiberRoot=="function")try{lr.onCommitFiberRoot(ho,e,void 0,(e.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:M3,R3=Math.log,A3=Math.LN2;function M3(e){return e>>>=0,e===0?32:31-(R3(e)/A3|0)|0}var Ga=64,Ka=4194304;function Fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ps(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,s=r&268435455;if(s!==0){var o=s&~i;o!==0?n=Fi(o):(a&=s,a!==0&&(n=Fi(a)))}else s=r&~i,s!==0?n=Fi(s):a!==0&&(n=Fi(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Zt(t),i=1<<r,n|=e[r],t&=~i;return n}function B3(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D3(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-Zt(a),o=1<<s,l=i[s];l===-1?(!(o&r)||o&n)&&(i[s]=B3(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}}function Du(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sv(){var e=Ga;return Ga<<=1,!(Ga&4194240)&&(Ga=64),e}function nl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ea(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Zt(t),e[t]=r}function P3(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Zt(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function Wd(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Zt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var be=0;function kv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ev,jd,Tv,Cv,Iv,Pu=!1,Qa=[],jr=null,Vr=null,Fr=null,ua=new Map,da=new Map,Pr=[],L3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sh(e,t){switch(e){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":ua.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(t.pointerId)}}function Ei(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ca(t),t!==null&&jd(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function U3(e,t,r,n,i){switch(t){case"focusin":return jr=Ei(jr,e,t,r,n,i),!0;case"dragenter":return Vr=Ei(Vr,e,t,r,n,i),!0;case"mouseover":return Fr=Ei(Fr,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return ua.set(a,Ei(ua.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,da.set(a,Ei(da.get(a)||null,e,t,r,n,i)),!0}return!1}function zv(e){var t=yn(e.target);if(t!==null){var r=Rn(t);if(r!==null){if(t=r.tag,t===13){if(t=vv(r),t!==null){e.blockedOn=t,Iv(e.priority,function(){Tv(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Lu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ru=n,r.target.dispatchEvent(n),Ru=null}else return t=Ca(r),t!==null&&jd(t),e.blockedOn=r,!1;t.shift()}return!0}function oh(e,t,r){xs(e)&&r.delete(t)}function W3(){Pu=!1,jr!==null&&xs(jr)&&(jr=null),Vr!==null&&xs(Vr)&&(Vr=null),Fr!==null&&xs(Fr)&&(Fr=null),ua.forEach(oh),da.forEach(oh)}function Ti(e,t){e.blockedOn===t&&(e.blockedOn=null,Pu||(Pu=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,W3)))}function ca(e){function t(i){return Ti(i,e)}if(0<Qa.length){Ti(Qa[0],e);for(var r=1;r<Qa.length;r++){var n=Qa[r];n.blockedOn===e&&(n.blockedOn=null)}}for(jr!==null&&Ti(jr,e),Vr!==null&&Ti(Vr,e),Fr!==null&&Ti(Fr,e),ua.forEach(t),da.forEach(t),r=0;r<Pr.length;r++)n=Pr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Pr.length&&(r=Pr[0],r.blockedOn===null);)zv(r),r.blockedOn===null&&Pr.shift()}var ni=Sr.ReactCurrentBatchConfig,Ls=!0;function j3(e,t,r,n){var i=be,a=ni.transition;ni.transition=null;try{be=1,Vd(e,t,r,n)}finally{be=i,ni.transition=a}}function V3(e,t,r,n){var i=be,a=ni.transition;ni.transition=null;try{be=4,Vd(e,t,r,n)}finally{be=i,ni.transition=a}}function Vd(e,t,r,n){if(Ls){var i=Lu(e,t,r,n);if(i===null)fl(e,t,n,Us,r),sh(e,n);else if(U3(i,e,t,r,n))n.stopPropagation();else if(sh(e,n),t&4&&-1<L3.indexOf(e)){for(;i!==null;){var a=Ca(i);if(a!==null&&Ev(a),a=Lu(e,t,r,n),a===null&&fl(e,t,n,Us,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else fl(e,t,n,null,r)}}var Us=null;function Lu(e,t,r,n){if(Us=null,e=Ld(n),e=yn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=vv(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Us=e,null}function Nv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z3()){case Ud:return 1;case xv:return 4;case Ds:case N3:return 16;case bv:return 536870912;default:return 16}default:return 16}}var Ur=null,Fd=null,bs=null;function Ov(){if(bs)return bs;var e,t=Fd,r=t.length,n,i="value"in Ur?Ur.value:Ur.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===i[a-n];n++);return bs=i.slice(e,1<n?1-n:void 0)}function Ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xa(){return!0}function lh(){return!1}function zt(e){function t(r,n,i,a,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Xa:lh,this.isPropagationStopped=lh,this}return Be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),t}var gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=zt(gi),Ta=Be({},gi,{view:0,detail:0}),F3=zt(Ta),il,al,Ci,mo=Be({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ci&&(Ci&&e.type==="mousemove"?(il=e.screenX-Ci.screenX,al=e.screenY-Ci.screenY):al=il=0,Ci=e),il)},movementY:function(e){return"movementY"in e?e.movementY:al}}),uh=zt(mo),q3=Be({},mo,{dataTransfer:0}),H3=zt(q3),G3=Be({},Ta,{relatedTarget:0}),sl=zt(G3),K3=Be({},gi,{animationName:0,elapsedTime:0,pseudoElement:0}),Q3=zt(K3),X3=Be({},gi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z3=zt(X3),Y3=Be({},gi,{data:0}),dh=zt(Y3),J3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tS[e])?!!t[e]:!1}function Hd(){return rS}var nS=Be({},Ta,{key:function(e){if(e.key){var t=J3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hd,charCode:function(e){return e.type==="keypress"?Ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iS=zt(nS),aS=Be({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ch=zt(aS),sS=Be({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hd}),oS=zt(sS),lS=Be({},gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),uS=zt(lS),dS=Be({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cS=zt(dS),pS=[9,13,27,32],Gd=wr&&"CompositionEvent"in window,Yi=null;wr&&"documentMode"in document&&(Yi=document.documentMode);var fS=wr&&"TextEvent"in window&&!Yi,Rv=wr&&(!Gd||Yi&&8<Yi&&11>=Yi),ph=" ",fh=!1;function Av(e,t){switch(e){case"keyup":return pS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function hS(e,t){switch(e){case"compositionend":return Mv(t);case"keypress":return t.which!==32?null:(fh=!0,ph);case"textInput":return e=t.data,e===ph&&fh?null:e;default:return null}}function mS(e,t){if(jn)return e==="compositionend"||!Gd&&Av(e,t)?(e=Ov(),bs=Fd=Ur=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rv&&t.locale!=="ko"?null:t.data;default:return null}}var gS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gS[e.type]:t==="textarea"}function Bv(e,t,r,n){fv(n),t=Ws(t,"onChange"),0<t.length&&(r=new qd("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Ji=null,pa=null;function yS(e){Gv(e,0)}function go(e){var t=qn(e);if(sv(t))return e}function vS(e,t){if(e==="change")return t}var Dv=!1;if(wr){var ol;if(wr){var ll="oninput"in document;if(!ll){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),ll=typeof mh.oninput=="function"}ol=ll}else ol=!1;Dv=ol&&(!document.documentMode||9<document.documentMode)}function gh(){Ji&&(Ji.detachEvent("onpropertychange",Pv),pa=Ji=null)}function Pv(e){if(e.propertyName==="value"&&go(pa)){var t=[];Bv(t,pa,e,Ld(e)),yv(yS,t)}}function _S(e,t,r){e==="focusin"?(gh(),Ji=t,pa=r,Ji.attachEvent("onpropertychange",Pv)):e==="focusout"&&gh()}function wS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return go(pa)}function $S(e,t){if(e==="click")return go(t)}function xS(e,t){if(e==="input"||e==="change")return go(t)}function bS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var er=typeof Object.is=="function"?Object.is:bS;function fa(e,t){if(er(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!$u.call(t,i)||!er(e[i],t[i]))return!1}return!0}function yh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vh(e,t){var r=yh(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=yh(r)}}function Lv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uv(){for(var e=window,t=As();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=As(e.document)}return t}function Kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function SS(e){var t=Uv(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Lv(r.ownerDocument.documentElement,r)){if(n!==null&&Kd(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=vh(r,a);var s=vh(r,n);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kS=wr&&"documentMode"in document&&11>=document.documentMode,Vn=null,Uu=null,ea=null,Wu=!1;function _h(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wu||Vn==null||Vn!==As(n)||(n=Vn,"selectionStart"in n&&Kd(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ea&&fa(ea,n)||(ea=n,n=Ws(Uu,"onSelect"),0<n.length&&(t=new qd("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Vn)))}function Za(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Fn={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},ul={},Wv={};wr&&(Wv=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function yo(e){if(ul[e])return ul[e];if(!Fn[e])return e;var t=Fn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Wv)return ul[e]=t[r];return e}var jv=yo("animationend"),Vv=yo("animationiteration"),Fv=yo("animationstart"),qv=yo("transitionend"),Hv=new Map,wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(e,t){Hv.set(e,t),On(t,[e])}for(var dl=0;dl<wh.length;dl++){var cl=wh[dl],ES=cl.toLowerCase(),TS=cl[0].toUpperCase()+cl.slice(1);Jr(ES,"on"+TS)}Jr(jv,"onAnimationEnd");Jr(Vv,"onAnimationIteration");Jr(Fv,"onAnimationStart");Jr("dblclick","onDoubleClick");Jr("focusin","onFocus");Jr("focusout","onBlur");Jr(qv,"onTransitionEnd");si("onMouseEnter",["mouseout","mouseover"]);si("onMouseLeave",["mouseout","mouseover"]);si("onPointerEnter",["pointerout","pointerover"]);si("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CS=new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));function $h(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,E3(n,t,void 0,e),e.currentTarget=null}function Gv(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],l=o.instance,d=o.currentTarget;if(o=o.listener,l!==a&&i.isPropagationStopped())break e;$h(i,o,d),a=l}else for(s=0;s<n.length;s++){if(o=n[s],l=o.instance,d=o.currentTarget,o=o.listener,l!==a&&i.isPropagationStopped())break e;$h(i,o,d),a=l}}}if(Bs)throw e=Bu,Bs=!1,Bu=null,e}function ze(e,t){var r=t[Hu];r===void 0&&(r=t[Hu]=new Set);var n=e+"__bubble";r.has(n)||(Kv(t,e,2,!1),r.add(n))}function pl(e,t,r){var n=0;t&&(n|=4),Kv(r,e,n,t)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function ha(e){if(!e[Ya]){e[Ya]=!0,tv.forEach(function(r){r!=="selectionchange"&&(CS.has(r)||pl(r,!1,e),pl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ya]||(t[Ya]=!0,pl("selectionchange",!1,t))}}function Kv(e,t,r,n){switch(Nv(t)){case 1:var i=j3;break;case 4:i=V3;break;default:i=Vd}r=i.bind(null,t,r,e),i=void 0,!Mu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function fl(e,t,r,n,i){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;o!==null;){if(s=yn(o),s===null)return;if(l=s.tag,l===5||l===6){n=a=s;continue e}o=o.parentNode}}n=n.return}yv(function(){var d=a,f=Ld(r),p=[];e:{var h=Hv.get(e);if(h!==void 0){var _=qd,w=e;switch(e){case"keypress":if(Ss(r)===0)break e;case"keydown":case"keyup":_=iS;break;case"focusin":w="focus",_=sl;break;case"focusout":w="blur",_=sl;break;case"beforeblur":case"afterblur":_=sl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=H3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=oS;break;case jv:case Vv:case Fv:_=Q3;break;case qv:_=uS;break;case"scroll":_=F3;break;case"wheel":_=cS;break;case"copy":case"cut":case"paste":_=Z3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=ch}var $=(t&4)!==0,E=!$&&e==="scroll",y=$?h!==null?h+"Capture":null:h;$=[];for(var m=d,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,y!==null&&(S=la(m,y),S!=null&&$.push(ma(m,S,x)))),E)break;m=m.return}0<$.length&&(h=new _(h,w,null,r,f),p.push({event:h,listeners:$}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",h&&r!==Ru&&(w=r.relatedTarget||r.fromElement)&&(yn(w)||w[$r]))break e;if((_||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,_?(w=r.relatedTarget||r.toElement,_=d,w=w?yn(w):null,w!==null&&(E=Rn(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(_=null,w=d),_!==w)){if($=uh,S="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&($=ch,S="onPointerLeave",y="onPointerEnter",m="pointer"),E=_==null?h:qn(_),x=w==null?h:qn(w),h=new $(S,m+"leave",_,r,f),h.target=E,h.relatedTarget=x,S=null,yn(f)===d&&($=new $(y,m+"enter",w,r,f),$.target=x,$.relatedTarget=E,S=$),E=S,_&&w)t:{for($=_,y=w,m=0,x=$;x;x=Pn(x))m++;for(x=0,S=y;S;S=Pn(S))x++;for(;0<m-x;)$=Pn($),m--;for(;0<x-m;)y=Pn(y),x--;for(;m--;){if($===y||y!==null&&$===y.alternate)break t;$=Pn($),y=Pn(y)}$=null}else $=null;_!==null&&xh(p,h,_,$,!1),w!==null&&E!==null&&xh(p,E,w,$,!0)}}e:{if(h=d?qn(d):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var T=vS;else if(hh(h))if(Dv)T=xS;else{T=wS;var I=_S}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=$S);if(T&&(T=T(e,d))){Bv(p,T,r,f);break e}I&&I(e,h,d),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Cu(h,"number",h.value)}switch(I=d?qn(d):window,e){case"focusin":(hh(I)||I.contentEditable==="true")&&(Vn=I,Uu=d,ea=null);break;case"focusout":ea=Uu=Vn=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,_h(p,r,f);break;case"selectionchange":if(kS)break;case"keydown":case"keyup":_h(p,r,f)}var z;if(Gd)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else jn?Av(e,r)&&(b="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(b="onCompositionStart");b&&(Rv&&r.locale!=="ko"&&(jn||b!=="onCompositionStart"?b==="onCompositionEnd"&&jn&&(z=Ov()):(Ur=f,Fd="value"in Ur?Ur.value:Ur.textContent,jn=!0)),I=Ws(d,b),0<I.length&&(b=new dh(b,e,null,r,f),p.push({event:b,listeners:I}),z?b.data=z:(z=Mv(r),z!==null&&(b.data=z)))),(z=fS?hS(e,r):mS(e,r))&&(d=Ws(d,"onBeforeInput"),0<d.length&&(f=new dh("onBeforeInput","beforeinput",null,r,f),p.push({event:f,listeners:d}),f.data=z))}Gv(p,t)})}function ma(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ws(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=la(e,r),a!=null&&n.unshift(ma(e,a,i)),a=la(e,t),a!=null&&n.push(ma(e,a,i))),e=e.return}return n}function Pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xh(e,t,r,n,i){for(var a=t._reactName,s=[];r!==null&&r!==n;){var o=r,l=o.alternate,d=o.stateNode;if(l!==null&&l===n)break;o.tag===5&&d!==null&&(o=d,i?(l=la(r,a),l!=null&&s.unshift(ma(r,l,o))):i||(l=la(r,a),l!=null&&s.push(ma(r,l,o)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var IS=/\r\n?/g,zS=/\u0000|\uFFFD/g;function bh(e){return(typeof e=="string"?e:""+e).replace(IS,`
`).replace(zS,"")}function Ja(e,t,r){if(t=bh(t),bh(e)!==t&&r)throw Error(q(425))}function js(){}var ju=null,Vu=null;function Fu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qu=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,Sh=typeof Promise=="function"?Promise:void 0,OS=typeof queueMicrotask=="function"?queueMicrotask:typeof Sh<"u"?function(e){return Sh.resolve(null).then(e).catch(RS)}:qu;function RS(e){setTimeout(function(){throw e})}function hl(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),ca(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);ca(t)}function qr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function kh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var yi=Math.random().toString(36).slice(2),or="__reactFiber$"+yi,ga="__reactProps$"+yi,$r="__reactContainer$"+yi,Hu="__reactEvents$"+yi,AS="__reactListeners$"+yi,MS="__reactHandles$"+yi;function yn(e){var t=e[or];if(t)return t;for(var r=e.parentNode;r;){if(t=r[$r]||r[or]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=kh(e);e!==null;){if(r=e[or])return r;e=kh(e)}return t}e=r,r=e.parentNode}return null}function Ca(e){return e=e[or]||e[$r],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function vo(e){return e[ga]||null}var Gu=[],Hn=-1;function en(e){return{current:e}}function Ne(e){0>Hn||(e.current=Gu[Hn],Gu[Hn]=null,Hn--)}function Ie(e,t){Hn++,Gu[Hn]=e.current,e.current=t}var Zr={},it=en(Zr),yt=en(!1),Sn=Zr;function oi(e,t){var r=e.type.contextTypes;if(!r)return Zr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function vt(e){return e=e.childContextTypes,e!=null}function Vs(){Ne(yt),Ne(it)}function Eh(e,t,r){if(it.current!==Zr)throw Error(q(168));Ie(it,t),Ie(yt,r)}function Qv(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(q(108,_3(e)||"Unknown",i));return Be({},r,n)}function Fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zr,Sn=it.current,Ie(it,e),Ie(yt,yt.current),!0}function Th(e,t,r){var n=e.stateNode;if(!n)throw Error(q(169));r?(e=Qv(e,t,Sn),n.__reactInternalMemoizedMergedChildContext=e,Ne(yt),Ne(it),Ie(it,e)):Ne(yt),Ie(yt,r)}var mr=null,_o=!1,ml=!1;function Xv(e){mr===null?mr=[e]:mr.push(e)}function BS(e){_o=!0,Xv(e)}function tn(){if(!ml&&mr!==null){ml=!0;var e=0,t=be;try{var r=mr;for(be=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}mr=null,_o=!1}catch(i){throw mr!==null&&(mr=mr.slice(e+1)),$v(Ud,tn),i}finally{be=t,ml=!1}}return null}var Gn=[],Kn=0,qs=null,Hs=0,Ot=[],Rt=0,kn=null,yr=1,vr="";function pn(e,t){Gn[Kn++]=Hs,Gn[Kn++]=qs,qs=e,Hs=t}function Zv(e,t,r){Ot[Rt++]=yr,Ot[Rt++]=vr,Ot[Rt++]=kn,kn=e;var n=yr;e=vr;var i=32-Zt(n)-1;n&=~(1<<i),r+=1;var a=32-Zt(t)+i;if(30<a){var s=i-i%5;a=(n&(1<<s)-1).toString(32),n>>=s,i-=s,yr=1<<32-Zt(t)+i|r<<i|n,vr=a+e}else yr=1<<a|r<<i|n,vr=e}function Qd(e){e.return!==null&&(pn(e,1),Zv(e,1,0))}function Xd(e){for(;e===qs;)qs=Gn[--Kn],Gn[Kn]=null,Hs=Gn[--Kn],Gn[Kn]=null;for(;e===kn;)kn=Ot[--Rt],Ot[Rt]=null,vr=Ot[--Rt],Ot[Rt]=null,yr=Ot[--Rt],Ot[Rt]=null}var Et=null,kt=null,Oe=!1,Kt=null;function Yv(e,t){var r=At(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ch(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Et=e,kt=qr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Et=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=kn!==null?{id:yr,overflow:vr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=At(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Et=e,kt=null,!0):!1;default:return!1}}function Ku(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qu(e){if(Oe){var t=kt;if(t){var r=t;if(!Ch(e,t)){if(Ku(e))throw Error(q(418));t=qr(r.nextSibling);var n=Et;t&&Ch(e,t)?Yv(n,r):(e.flags=e.flags&-4097|2,Oe=!1,Et=e)}}else{if(Ku(e))throw Error(q(418));e.flags=e.flags&-4097|2,Oe=!1,Et=e}}}function Ih(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Et=e}function es(e){if(e!==Et)return!1;if(!Oe)return Ih(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fu(e.type,e.memoizedProps)),t&&(t=kt)){if(Ku(e))throw Jv(),Error(q(418));for(;t;)Yv(e,t),t=qr(t.nextSibling)}if(Ih(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){kt=qr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=Et?qr(e.stateNode.nextSibling):null;return!0}function Jv(){for(var e=kt;e;)e=qr(e.nextSibling)}function li(){kt=Et=null,Oe=!1}function Zd(e){Kt===null?Kt=[e]:Kt.push(e)}var DS=Sr.ReactCurrentBatchConfig;function Ii(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(q(309));var n=r.stateNode}if(!n)throw Error(q(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var o=i.refs;s===null?delete o[a]:o[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(q(284));if(!r._owner)throw Error(q(290,e))}return e}function ts(e,t){throw e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zh(e){var t=e._init;return t(e._payload)}function e1(e){function t(y,m){if(e){var x=y.deletions;x===null?(y.deletions=[m],y.flags|=16):x.push(m)}}function r(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function n(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=Qr(y,m),y.index=0,y.sibling=null,y}function a(y,m,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<m?(y.flags|=2,m):x):(y.flags|=2,m)):(y.flags|=1048576,m)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function o(y,m,x,S){return m===null||m.tag!==6?(m=xl(x,y.mode,S),m.return=y,m):(m=i(m,x),m.return=y,m)}function l(y,m,x,S){var T=x.type;return T===Wn?f(y,m,x.props.children,S,x.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Br&&zh(T)===m.type)?(S=i(m,x.props),S.ref=Ii(y,m,x),S.return=y,S):(S=Ns(x.type,x.key,x.props,null,y.mode,S),S.ref=Ii(y,m,x),S.return=y,S)}function d(y,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=bl(x,y.mode,S),m.return=y,m):(m=i(m,x.children||[]),m.return=y,m)}function f(y,m,x,S,T){return m===null||m.tag!==7?(m=$n(x,y.mode,S,T),m.return=y,m):(m=i(m,x),m.return=y,m)}function p(y,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=xl(""+m,y.mode,x),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Fa:return x=Ns(m.type,m.key,m.props,null,y.mode,x),x.ref=Ii(y,null,m),x.return=y,x;case Un:return m=bl(m,y.mode,x),m.return=y,m;case Br:var S=m._init;return p(y,S(m._payload),x)}if(Vi(m)||Si(m))return m=$n(m,y.mode,x,null),m.return=y,m;ts(y,m)}return null}function h(y,m,x,S){var T=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:o(y,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Fa:return x.key===T?l(y,m,x,S):null;case Un:return x.key===T?d(y,m,x,S):null;case Br:return T=x._init,h(y,m,T(x._payload),S)}if(Vi(x)||Si(x))return T!==null?null:f(y,m,x,S,null);ts(y,x)}return null}function _(y,m,x,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return y=y.get(x)||null,o(m,y,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Fa:return y=y.get(S.key===null?x:S.key)||null,l(m,y,S,T);case Un:return y=y.get(S.key===null?x:S.key)||null,d(m,y,S,T);case Br:var I=S._init;return _(y,m,x,I(S._payload),T)}if(Vi(S)||Si(S))return y=y.get(x)||null,f(m,y,S,T,null);ts(m,S)}return null}function w(y,m,x,S){for(var T=null,I=null,z=m,b=m=0,O=null;z!==null&&b<x.length;b++){z.index>b?(O=z,z=null):O=z.sibling;var M=h(y,z,x[b],S);if(M===null){z===null&&(z=O);break}e&&z&&M.alternate===null&&t(y,z),m=a(M,m,b),I===null?T=M:I.sibling=M,I=M,z=O}if(b===x.length)return r(y,z),Oe&&pn(y,b),T;if(z===null){for(;b<x.length;b++)z=p(y,x[b],S),z!==null&&(m=a(z,m,b),I===null?T=z:I.sibling=z,I=z);return Oe&&pn(y,b),T}for(z=n(y,z);b<x.length;b++)O=_(z,y,b,x[b],S),O!==null&&(e&&O.alternate!==null&&z.delete(O.key===null?b:O.key),m=a(O,m,b),I===null?T=O:I.sibling=O,I=O);return e&&z.forEach(function(G){return t(y,G)}),Oe&&pn(y,b),T}function $(y,m,x,S){var T=Si(x);if(typeof T!="function")throw Error(q(150));if(x=T.call(x),x==null)throw Error(q(151));for(var I=T=null,z=m,b=m=0,O=null,M=x.next();z!==null&&!M.done;b++,M=x.next()){z.index>b?(O=z,z=null):O=z.sibling;var G=h(y,z,M.value,S);if(G===null){z===null&&(z=O);break}e&&z&&G.alternate===null&&t(y,z),m=a(G,m,b),I===null?T=G:I.sibling=G,I=G,z=O}if(M.done)return r(y,z),Oe&&pn(y,b),T;if(z===null){for(;!M.done;b++,M=x.next())M=p(y,M.value,S),M!==null&&(m=a(M,m,b),I===null?T=M:I.sibling=M,I=M);return Oe&&pn(y,b),T}for(z=n(y,z);!M.done;b++,M=x.next())M=_(z,y,b,M.value,S),M!==null&&(e&&M.alternate!==null&&z.delete(M.key===null?b:M.key),m=a(M,m,b),I===null?T=M:I.sibling=M,I=M);return e&&z.forEach(function(Q){return t(y,Q)}),Oe&&pn(y,b),T}function E(y,m,x,S){if(typeof x=="object"&&x!==null&&x.type===Wn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Fa:e:{for(var T=x.key,I=m;I!==null;){if(I.key===T){if(T=x.type,T===Wn){if(I.tag===7){r(y,I.sibling),m=i(I,x.props.children),m.return=y,y=m;break e}}else if(I.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Br&&zh(T)===I.type){r(y,I.sibling),m=i(I,x.props),m.ref=Ii(y,I,x),m.return=y,y=m;break e}r(y,I);break}else t(y,I);I=I.sibling}x.type===Wn?(m=$n(x.props.children,y.mode,S,x.key),m.return=y,y=m):(S=Ns(x.type,x.key,x.props,null,y.mode,S),S.ref=Ii(y,m,x),S.return=y,y=S)}return s(y);case Un:e:{for(I=x.key;m!==null;){if(m.key===I)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){r(y,m.sibling),m=i(m,x.children||[]),m.return=y,y=m;break e}else{r(y,m);break}else t(y,m);m=m.sibling}m=bl(x,y.mode,S),m.return=y,y=m}return s(y);case Br:return I=x._init,E(y,m,I(x._payload),S)}if(Vi(x))return w(y,m,x,S);if(Si(x))return $(y,m,x,S);ts(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(r(y,m.sibling),m=i(m,x),m.return=y,y=m):(r(y,m),m=xl(x,y.mode,S),m.return=y,y=m),s(y)):r(y,m)}return E}var ui=e1(!0),t1=e1(!1),Gs=en(null),Ks=null,Qn=null,Yd=null;function Jd(){Yd=Qn=Ks=null}function ec(e){var t=Gs.current;Ne(Gs),e._currentValue=t}function Xu(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function ii(e,t){Ks=e,Yd=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(gt=!0),e.firstContext=null)}function Bt(e){var t=e._currentValue;if(Yd!==e)if(e={context:e,memoizedValue:t,next:null},Qn===null){if(Ks===null)throw Error(q(308));Qn=e,Ks.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return t}var vn=null;function tc(e){vn===null?vn=[e]:vn.push(e)}function r1(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,tc(t)):(r.next=i.next,i.next=r),t.interleaved=r,xr(e,n)}function xr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Dr=!1;function rc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _r(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Hr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,_e&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,xr(e,r)}return i=n.interleaved,i===null?(t.next=t,tc(n)):(t.next=i.next,i.next=t),n.interleaved=t,xr(e,r)}function ks(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Wd(e,r)}}function Nh(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Qs(e,t,r,n){var i=e.updateQueue;Dr=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,d=l.next;l.next=null,s===null?a=d:s.next=d,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==s&&(o===null?f.firstBaseUpdate=d:o.next=d,f.lastBaseUpdate=l))}if(a!==null){var p=i.baseState;s=0,f=d=l=null,o=a;do{var h=o.lane,_=o.eventTime;if((n&h)===h){f!==null&&(f=f.next={eventTime:_,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,$=o;switch(h=t,_=r,$.tag){case 1:if(w=$.payload,typeof w=="function"){p=w.call(_,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=$.payload,h=typeof w=="function"?w.call(_,p,h):w,h==null)break e;p=Be({},p,h);break e;case 2:Dr=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[o]:h.push(o))}else _={eventTime:_,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(d=f=_,l=p):f=f.next=_,s|=h;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Tn|=s,e.lanes=s,e.memoizedState=p}}function Oh(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(q(191,i));i.call(n)}}}var Ia={},ur=en(Ia),ya=en(Ia),va=en(Ia);function _n(e){if(e===Ia)throw Error(q(174));return e}function nc(e,t){switch(Ie(va,t),Ie(ya,e),Ie(ur,Ia),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zu(t,e)}Ne(ur),Ie(ur,t)}function di(){Ne(ur),Ne(ya),Ne(va)}function i1(e){_n(va.current);var t=_n(ur.current),r=zu(t,e.type);t!==r&&(Ie(ya,e),Ie(ur,r))}function ic(e){ya.current===e&&(Ne(ur),Ne(ya))}var Ae=en(0);function Xs(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gl=[];function ac(){for(var e=0;e<gl.length;e++)gl[e]._workInProgressVersionPrimary=null;gl.length=0}var Es=Sr.ReactCurrentDispatcher,yl=Sr.ReactCurrentBatchConfig,En=0,Me=null,Ve=null,Ke=null,Zs=!1,ta=!1,_a=0,PS=0;function Je(){throw Error(q(321))}function sc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!er(e[r],t[r]))return!1;return!0}function oc(e,t,r,n,i,a){if(En=a,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Es.current=e===null||e.memoizedState===null?jS:VS,e=r(n,i),ta){a=0;do{if(ta=!1,_a=0,25<=a)throw Error(q(301));a+=1,Ke=Ve=null,t.updateQueue=null,Es.current=FS,e=r(n,i)}while(ta)}if(Es.current=Ys,t=Ve!==null&&Ve.next!==null,En=0,Ke=Ve=Me=null,Zs=!1,t)throw Error(q(300));return e}function lc(){var e=_a!==0;return _a=0,e}function sr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Me.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Dt(){if(Ve===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=Ke===null?Me.memoizedState:Ke.next;if(t!==null)Ke=t,Ve=e;else{if(e===null)throw Error(q(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ke===null?Me.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function wa(e,t){return typeof t=="function"?t(e):t}function vl(e){var t=Dt(),r=t.queue;if(r===null)throw Error(q(311));r.lastRenderedReducer=e;var n=Ve,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var o=s=null,l=null,d=a;do{var f=d.lane;if((En&f)===f)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var p={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(o=l=p,s=n):l=l.next=p,Me.lanes|=f,Tn|=f}d=d.next}while(d!==null&&d!==a);l===null?s=n:l.next=o,er(n,t.memoizedState)||(gt=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,Me.lanes|=a,Tn|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function _l(e){var t=Dt(),r=t.queue;if(r===null)throw Error(q(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);er(a,t.memoizedState)||(gt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function a1(){}function s1(e,t){var r=Me,n=Dt(),i=t(),a=!er(n.memoizedState,i);if(a&&(n.memoizedState=i,gt=!0),n=n.queue,uc(u1.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,$a(9,l1.bind(null,r,n,i,t),void 0,null),Qe===null)throw Error(q(349));En&30||o1(r,t,i)}return i}function o1(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function l1(e,t,r,n){t.value=r,t.getSnapshot=n,d1(t)&&c1(e)}function u1(e,t,r){return r(function(){d1(t)&&c1(e)})}function d1(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!er(e,r)}catch{return!0}}function c1(e){var t=xr(e,1);t!==null&&Yt(t,e,1,-1)}function Rh(e){var t=sr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},t.queue=e,e=e.dispatch=WS.bind(null,Me,e),[t.memoizedState,e]}function $a(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function p1(){return Dt().memoizedState}function Ts(e,t,r,n){var i=sr();Me.flags|=e,i.memoizedState=$a(1|t,r,void 0,n===void 0?null:n)}function wo(e,t,r,n){var i=Dt();n=n===void 0?null:n;var a=void 0;if(Ve!==null){var s=Ve.memoizedState;if(a=s.destroy,n!==null&&sc(n,s.deps)){i.memoizedState=$a(t,r,a,n);return}}Me.flags|=e,i.memoizedState=$a(1|t,r,a,n)}function Ah(e,t){return Ts(8390656,8,e,t)}function uc(e,t){return wo(2048,8,e,t)}function f1(e,t){return wo(4,2,e,t)}function h1(e,t){return wo(4,4,e,t)}function m1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function g1(e,t,r){return r=r!=null?r.concat([e]):null,wo(4,4,m1.bind(null,t,e),r)}function dc(){}function y1(e,t){var r=Dt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&sc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function v1(e,t){var r=Dt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&sc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function _1(e,t,r){return En&21?(er(r,t)||(r=Sv(),Me.lanes|=r,Tn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=r)}function LS(e,t){var r=be;be=r!==0&&4>r?r:4,e(!0);var n=yl.transition;yl.transition={};try{e(!1),t()}finally{be=r,yl.transition=n}}function w1(){return Dt().memoizedState}function US(e,t,r){var n=Kr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},$1(e))x1(t,r);else if(r=r1(e,t,r,n),r!==null){var i=ot();Yt(r,e,n,i),b1(r,t,n)}}function WS(e,t,r){var n=Kr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if($1(e))x1(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,o=a(s,r);if(i.hasEagerState=!0,i.eagerState=o,er(o,s)){var l=t.interleaved;l===null?(i.next=i,tc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=r1(e,t,i,n),r!==null&&(i=ot(),Yt(r,e,n,i),b1(r,t,n))}}function $1(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function x1(e,t){ta=Zs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function b1(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Wd(e,r)}}var Ys={readContext:Bt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},jS={readContext:Bt,useCallback:function(e,t){return sr().memoizedState=[e,t===void 0?null:t],e},useContext:Bt,useEffect:Ah,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ts(4194308,4,m1.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ts(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ts(4,2,e,t)},useMemo:function(e,t){var r=sr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=sr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=US.bind(null,Me,e),[n.memoizedState,e]},useRef:function(e){var t=sr();return e={current:e},t.memoizedState=e},useState:Rh,useDebugValue:dc,useDeferredValue:function(e){return sr().memoizedState=e},useTransition:function(){var e=Rh(!1),t=e[0];return e=LS.bind(null,e[1]),sr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Me,i=sr();if(Oe){if(r===void 0)throw Error(q(407));r=r()}else{if(r=t(),Qe===null)throw Error(q(349));En&30||o1(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,Ah(u1.bind(null,n,a,e),[e]),n.flags|=2048,$a(9,l1.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=sr(),t=Qe.identifierPrefix;if(Oe){var r=vr,n=yr;r=(n&~(1<<32-Zt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=_a++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=PS++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},VS={readContext:Bt,useCallback:y1,useContext:Bt,useEffect:uc,useImperativeHandle:g1,useInsertionEffect:f1,useLayoutEffect:h1,useMemo:v1,useReducer:vl,useRef:p1,useState:function(){return vl(wa)},useDebugValue:dc,useDeferredValue:function(e){var t=Dt();return _1(t,Ve.memoizedState,e)},useTransition:function(){var e=vl(wa)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:a1,useSyncExternalStore:s1,useId:w1,unstable_isNewReconciler:!1},FS={readContext:Bt,useCallback:y1,useContext:Bt,useEffect:uc,useImperativeHandle:g1,useInsertionEffect:f1,useLayoutEffect:h1,useMemo:v1,useReducer:_l,useRef:p1,useState:function(){return _l(wa)},useDebugValue:dc,useDeferredValue:function(e){var t=Dt();return Ve===null?t.memoizedState=e:_1(t,Ve.memoizedState,e)},useTransition:function(){var e=_l(wa)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:a1,useSyncExternalStore:s1,useId:w1,unstable_isNewReconciler:!1};function Ht(e,t){if(e&&e.defaultProps){t=Be({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Zu(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Be({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var $o={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ot(),i=Kr(e),a=_r(n,i);a.payload=t,r!=null&&(a.callback=r),t=Hr(e,a,i),t!==null&&(Yt(t,e,i,n),ks(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ot(),i=Kr(e),a=_r(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Hr(e,a,i),t!==null&&(Yt(t,e,i,n),ks(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ot(),n=Kr(e),i=_r(r,n);i.tag=2,t!=null&&(i.callback=t),t=Hr(e,i,n),t!==null&&(Yt(t,e,n,r),ks(t,e,n))}};function Mh(e,t,r,n,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,s):t.prototype&&t.prototype.isPureReactComponent?!fa(r,n)||!fa(i,a):!0}function S1(e,t,r){var n=!1,i=Zr,a=t.contextType;return typeof a=="object"&&a!==null?a=Bt(a):(i=vt(t)?Sn:it.current,n=t.contextTypes,a=(n=n!=null)?oi(e,i):Zr),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$o,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Bh(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&$o.enqueueReplaceState(t,t.state,null)}function Yu(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},rc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Bt(a):(a=vt(t)?Sn:it.current,i.context=oi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Zu(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&$o.enqueueReplaceState(i,i.state,null),Qs(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ci(e,t){try{var r="",n=t;do r+=v3(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function wl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ju(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var qS=typeof WeakMap=="function"?WeakMap:Map;function k1(e,t,r){r=_r(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){eo||(eo=!0,ud=n),Ju(e,t)},r}function E1(e,t,r){r=_r(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Ju(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Ju(e,t),typeof n!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function Dh(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new qS;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=ak.bind(null,e,t,r),t.then(e,e))}function Ph(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lh(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=_r(-1,1),t.tag=2,Hr(r,t,1))),r.lanes|=1),e)}var HS=Sr.ReactCurrentOwner,gt=!1;function st(e,t,r,n){t.child=e===null?t1(t,null,r,n):ui(t,e.child,r,n)}function Uh(e,t,r,n,i){r=r.render;var a=t.ref;return ii(t,i),n=oc(e,t,r,n,a,i),r=lc(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,br(e,t,i)):(Oe&&r&&Qd(t),t.flags|=1,st(e,t,n,i),t.child)}function Wh(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!vc(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,T1(e,t,a,n,i)):(e=Ns(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:fa,r(s,n)&&e.ref===t.ref)return br(e,t,i)}return t.flags|=1,e=Qr(a,n),e.ref=t.ref,e.return=t,t.child=e}function T1(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(fa(a,n)&&e.ref===t.ref)if(gt=!1,t.pendingProps=n=a,(e.lanes&i)!==0)e.flags&131072&&(gt=!0);else return t.lanes=e.lanes,br(e,t,i)}return ed(e,t,r,n,i)}function C1(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Zn,bt),bt|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(Zn,bt),bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,Ie(Zn,bt),bt|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,Ie(Zn,bt),bt|=n;return st(e,t,i,r),t.child}function I1(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ed(e,t,r,n,i){var a=vt(r)?Sn:it.current;return a=oi(t,a),ii(t,i),r=oc(e,t,r,n,a,i),n=lc(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,br(e,t,i)):(Oe&&n&&Qd(t),t.flags|=1,st(e,t,r,i),t.child)}function jh(e,t,r,n,i){if(vt(r)){var a=!0;Fs(t)}else a=!1;if(ii(t,i),t.stateNode===null)Cs(e,t),S1(t,r,n),Yu(t,r,n,i),n=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=Bt(d):(d=vt(r)?Sn:it.current,d=oi(t,d));var f=r.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==n||l!==d)&&Bh(t,s,n,d),Dr=!1;var h=t.memoizedState;s.state=h,Qs(t,n,s,i),l=t.memoizedState,o!==n||h!==l||yt.current||Dr?(typeof f=="function"&&(Zu(t,r,f,n),l=t.memoizedState),(o=Dr||Mh(t,r,o,n,h,l,d))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=d,n=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,n1(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:Ht(t.type,o),s.props=d,p=t.pendingProps,h=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=Bt(l):(l=vt(r)?Sn:it.current,l=oi(t,l));var _=r.getDerivedStateFromProps;(f=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==p||h!==l)&&Bh(t,s,n,l),Dr=!1,h=t.memoizedState,s.state=h,Qs(t,n,s,i);var w=t.memoizedState;o!==p||h!==w||yt.current||Dr?(typeof _=="function"&&(Zu(t,r,_,n),w=t.memoizedState),(d=Dr||Mh(t,r,d,n,h,w,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),s.props=n,s.state=w,s.context=l,n=d):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return td(e,t,r,n,a,i)}function td(e,t,r,n,i,a){I1(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return i&&Th(t,r,!1),br(e,t,a);n=t.stateNode,HS.current=t;var o=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=ui(t,e.child,null,a),t.child=ui(t,null,o,a)):st(e,t,o,a),t.memoizedState=n.state,i&&Th(t,r,!0),t.child}function z1(e){var t=e.stateNode;t.pendingContext?Eh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Eh(e,t.context,!1),nc(e,t.containerInfo)}function Vh(e,t,r,n,i){return li(),Zd(i),t.flags|=256,st(e,t,r,n),t.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function nd(e){return{baseLanes:e,cachePool:null,transitions:null}}function N1(e,t,r){var n=t.pendingProps,i=Ae.current,a=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ie(Ae,i&1),e===null)return Qu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,a?(n=t.mode,a=t.child,s={mode:"hidden",children:s},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=So(s,n,0,null),e=$n(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=nd(r),t.memoizedState=rd,e):cc(t,s));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return GS(e,t,s,n,o,i,r);if(a){a=n.fallback,s=t.mode,i=e.child,o=i.sibling;var l={mode:"hidden",children:n.children};return!(s&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Qr(i,l),n.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=Qr(o,a):(a=$n(a,s,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,s=e.child.memoizedState,s=s===null?nd(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~r,t.memoizedState=rd,n}return a=e.child,e=a.sibling,n=Qr(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function cc(e,t){return t=So({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rs(e,t,r,n){return n!==null&&Zd(n),ui(t,e.child,null,r),e=cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function GS(e,t,r,n,i,a,s){if(r)return t.flags&256?(t.flags&=-257,n=wl(Error(q(422))),rs(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=So({mode:"visible",children:n.children},i,0,null),a=$n(a,i,s,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&ui(t,e.child,null,s),t.child.memoizedState=nd(s),t.memoizedState=rd,a);if(!(t.mode&1))return rs(e,t,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var o=n.dgst;return n=o,a=Error(q(419)),n=wl(a,n,void 0),rs(e,t,s,n)}if(o=(s&e.childLanes)!==0,gt||o){if(n=Qe,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,xr(e,i),Yt(n,e,i,-1))}return yc(),n=wl(Error(q(421))),rs(e,t,s,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=sk.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,kt=qr(i.nextSibling),Et=t,Oe=!0,Kt=null,e!==null&&(Ot[Rt++]=yr,Ot[Rt++]=vr,Ot[Rt++]=kn,yr=e.id,vr=e.overflow,kn=t),t=cc(t,n.children),t.flags|=4096,t)}function Fh(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Xu(e.return,t,r)}function $l(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function O1(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(st(e,t,n.children,r),n=Ae.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fh(e,r,t);else if(e.tag===19)Fh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Ie(Ae,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Xs(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),$l(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xs(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}$l(t,!0,r,null,a);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function br(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,r=Qr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Qr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function KS(e,t,r){switch(t.tag){case 3:z1(t),li();break;case 5:i1(t);break;case 1:vt(t.type)&&Fs(t);break;case 4:nc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;Ie(Gs,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Ie(Ae,Ae.current&1),t.flags|=128,null):r&t.child.childLanes?N1(e,t,r):(Ie(Ae,Ae.current&1),e=br(e,t,r),e!==null?e.sibling:null);Ie(Ae,Ae.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return O1(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Ae,Ae.current),n)break;return null;case 22:case 23:return t.lanes=0,C1(e,t,r)}return br(e,t,r)}var R1,id,A1,M1;R1=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};id=function(){};A1=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,_n(ur.current);var a=null;switch(r){case"input":i=Eu(e,i),n=Eu(e,n),a=[];break;case"select":i=Be({},i,{value:void 0}),n=Be({},n,{value:void 0}),a=[];break;case"textarea":i=Iu(e,i),n=Iu(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=js)}Nu(r,n);var s;r=null;for(d in i)if(!n.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var o=i[d];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(sa.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in n){var l=n[d];if(o=i!=null?i[d]:void 0,n.hasOwnProperty(d)&&l!==o&&(l!=null||o!=null))if(d==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(a||(a=[]),a.push(d,r)),r=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(sa.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&ze("scroll",e),a||o===l||(a=[])):(a=a||[]).push(d,l))}r&&(a=a||[]).push("style",r);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};M1=function(e,t,r,n){r!==n&&(t.flags|=4)};function zi(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function QS(e,t,r){var n=t.pendingProps;switch(Xd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return vt(t.type)&&Vs(),et(t),null;case 3:return n=t.stateNode,di(),Ne(yt),Ne(it),ac(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(es(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Kt!==null&&(pd(Kt),Kt=null))),id(e,t),et(t),null;case 5:ic(t);var i=_n(va.current);if(r=t.type,e!==null&&t.stateNode!=null)A1(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(q(166));return et(t),null}if(e=_n(ur.current),es(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[or]=t,n[ga]=a,e=(t.mode&1)!==0,r){case"dialog":ze("cancel",n),ze("close",n);break;case"iframe":case"object":case"embed":ze("load",n);break;case"video":case"audio":for(i=0;i<qi.length;i++)ze(qi[i],n);break;case"source":ze("error",n);break;case"img":case"image":case"link":ze("error",n),ze("load",n);break;case"details":ze("toggle",n);break;case"input":Jf(n,a),ze("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},ze("invalid",n);break;case"textarea":th(n,a),ze("invalid",n)}Nu(r,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?n.textContent!==o&&(a.suppressHydrationWarning!==!0&&Ja(n.textContent,o,e),i=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&Ja(n.textContent,o,e),i=["children",""+o]):sa.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&ze("scroll",n)}switch(r){case"input":qa(n),eh(n,a,!0);break;case"textarea":qa(n),rh(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=js)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uv(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[or]=t,e[ga]=n,R1(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ou(r,n),r){case"dialog":ze("cancel",e),ze("close",e),i=n;break;case"iframe":case"object":case"embed":ze("load",e),i=n;break;case"video":case"audio":for(i=0;i<qi.length;i++)ze(qi[i],e);i=n;break;case"source":ze("error",e),i=n;break;case"img":case"image":case"link":ze("error",e),ze("load",e),i=n;break;case"details":ze("toggle",e),i=n;break;case"input":Jf(e,n),i=Eu(e,n),ze("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Be({},n,{value:void 0}),ze("invalid",e);break;case"textarea":th(e,n),i=Iu(e,n),ze("invalid",e);break;default:i=n}Nu(r,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?pv(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dv(e,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&oa(e,l):typeof l=="number"&&oa(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(sa.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ze("scroll",e):l!=null&&Md(e,a,l,s))}switch(r){case"input":qa(e),eh(e,n,!1);break;case"textarea":qa(e),rh(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Xr(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?ei(e,!!n.multiple,a,!1):n.defaultValue!=null&&ei(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=js)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)M1(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(q(166));if(r=_n(va.current),_n(ur.current),es(t)){if(n=t.stateNode,r=t.memoizedProps,n[or]=t,(a=n.nodeValue!==r)&&(e=Et,e!==null))switch(e.tag){case 3:Ja(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ja(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[or]=t,t.stateNode=n}return et(t),null;case 13:if(Ne(Ae),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&kt!==null&&t.mode&1&&!(t.flags&128))Jv(),li(),t.flags|=98560,a=!1;else if(a=es(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(q(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(q(317));a[or]=t}else li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;et(t),a=!1}else Kt!==null&&(pd(Kt),Kt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?Fe===0&&(Fe=3):yc())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return di(),id(e,t),e===null&&ha(t.stateNode.containerInfo),et(t),null;case 10:return ec(t.type._context),et(t),null;case 17:return vt(t.type)&&Vs(),et(t),null;case 19:if(Ne(Ae),a=t.memoizedState,a===null)return et(t),null;if(n=(t.flags&128)!==0,s=a.rendering,s===null)if(n)zi(a,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Xs(e),s!==null){for(t.flags|=128,zi(a,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ie(Ae,Ae.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ue()>pi&&(t.flags|=128,n=!0,zi(a,!1),t.lanes=4194304)}else{if(!n)if(e=Xs(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),zi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Oe)return et(t),null}else 2*Ue()-a.renderingStartTime>pi&&r!==1073741824&&(t.flags|=128,n=!0,zi(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(r=a.last,r!==null?r.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ue(),t.sibling=null,r=Ae.current,Ie(Ae,n?r&1|2:r&1),t):(et(t),null);case 22:case 23:return gc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?bt&1073741824&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(q(156,t.tag))}function XS(e,t){switch(Xd(t),t.tag){case 1:return vt(t.type)&&Vs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return di(),Ne(yt),Ne(it),ac(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ic(t),null;case 13:if(Ne(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Ae),null;case 4:return di(),null;case 10:return ec(t.type._context),null;case 22:case 23:return gc(),null;case 24:return null;default:return null}}var ns=!1,nt=!1,ZS=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Xn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Pe(e,t,n)}else r.current=null}function ad(e,t,r){try{r()}catch(n){Pe(e,t,n)}}var qh=!1;function YS(e,t){if(ju=Ls,e=Uv(),Kd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,o=-1,l=-1,d=0,f=0,p=e,h=null;t:for(;;){for(var _;p!==r||i!==0&&p.nodeType!==3||(o=s+i),p!==a||n!==0&&p.nodeType!==3||(l=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(_=p.firstChild)!==null;)h=p,p=_;for(;;){if(p===e)break t;if(h===r&&++d===i&&(o=s),h===a&&++f===n&&(l=s),(_=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=_}r=o===-1||l===-1?null:{start:o,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Vu={focusedElem:e,selectionRange:r},Ls=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var $=w.memoizedProps,E=w.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?$:Ht(t.type,$),E);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(S){Pe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return w=qh,qh=!1,w}function ra(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&ad(t,r,a)}i=i.next}while(i!==n)}}function xo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function sd(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function B1(e){var t=e.alternate;t!==null&&(e.alternate=null,B1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[or],delete t[ga],delete t[Hu],delete t[AS],delete t[MS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function D1(e){return e.tag===5||e.tag===3||e.tag===4}function Hh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||D1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function od(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=js));else if(n!==4&&(e=e.child,e!==null))for(od(e,t,r),e=e.sibling;e!==null;)od(e,t,r),e=e.sibling}function ld(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ld(e,t,r),e=e.sibling;e!==null;)ld(e,t,r),e=e.sibling}var Xe=null,Gt=!1;function Or(e,t,r){for(r=r.child;r!==null;)P1(e,t,r),r=r.sibling}function P1(e,t,r){if(lr&&typeof lr.onCommitFiberUnmount=="function")try{lr.onCommitFiberUnmount(ho,r)}catch{}switch(r.tag){case 5:nt||Xn(r,t);case 6:var n=Xe,i=Gt;Xe=null,Or(e,t,r),Xe=n,Gt=i,Xe!==null&&(Gt?(e=Xe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Xe.removeChild(r.stateNode));break;case 18:Xe!==null&&(Gt?(e=Xe,r=r.stateNode,e.nodeType===8?hl(e.parentNode,r):e.nodeType===1&&hl(e,r),ca(e)):hl(Xe,r.stateNode));break;case 4:n=Xe,i=Gt,Xe=r.stateNode.containerInfo,Gt=!0,Or(e,t,r),Xe=n,Gt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&ad(r,t,s),i=i.next}while(i!==n)}Or(e,t,r);break;case 1:if(!nt&&(Xn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){Pe(r,t,o)}Or(e,t,r);break;case 21:Or(e,t,r);break;case 22:r.mode&1?(nt=(n=nt)||r.memoizedState!==null,Or(e,t,r),nt=n):Or(e,t,r);break;default:Or(e,t,r)}}function Gh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new ZS),t.forEach(function(n){var i=ok.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ut(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:Xe=o.stateNode,Gt=!1;break e;case 3:Xe=o.stateNode.containerInfo,Gt=!0;break e;case 4:Xe=o.stateNode.containerInfo,Gt=!0;break e}o=o.return}if(Xe===null)throw Error(q(160));P1(a,s,i),Xe=null,Gt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){Pe(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)L1(t,e),t=t.sibling}function L1(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ut(t,e),ir(e),n&4){try{ra(3,e,e.return),xo(3,e)}catch($){Pe(e,e.return,$)}try{ra(5,e,e.return)}catch($){Pe(e,e.return,$)}}break;case 1:Ut(t,e),ir(e),n&512&&r!==null&&Xn(r,r.return);break;case 5:if(Ut(t,e),ir(e),n&512&&r!==null&&Xn(r,r.return),e.flags&32){var i=e.stateNode;try{oa(i,"")}catch($){Pe(e,e.return,$)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=r!==null?r.memoizedProps:a,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&ov(i,a),Ou(o,s);var d=Ou(o,a);for(s=0;s<l.length;s+=2){var f=l[s],p=l[s+1];f==="style"?pv(i,p):f==="dangerouslySetInnerHTML"?dv(i,p):f==="children"?oa(i,p):Md(i,f,p,d)}switch(o){case"input":Tu(i,a);break;case"textarea":lv(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var _=a.value;_!=null?ei(i,!!a.multiple,_,!1):h!==!!a.multiple&&(a.defaultValue!=null?ei(i,!!a.multiple,a.defaultValue,!0):ei(i,!!a.multiple,a.multiple?[]:"",!1))}i[ga]=a}catch($){Pe(e,e.return,$)}}break;case 6:if(Ut(t,e),ir(e),n&4){if(e.stateNode===null)throw Error(q(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch($){Pe(e,e.return,$)}}break;case 3:if(Ut(t,e),ir(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{ca(t.containerInfo)}catch($){Pe(e,e.return,$)}break;case 4:Ut(t,e),ir(e);break;case 13:Ut(t,e),ir(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(hc=Ue())),n&4&&Gh(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(nt=(d=nt)||f,Ut(t,e),nt=d):Ut(t,e),ir(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(ne=e,f=e.child;f!==null;){for(p=ne=f;ne!==null;){switch(h=ne,_=h.child,h.tag){case 0:case 11:case 14:case 15:ra(4,h,h.return);break;case 1:Xn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch($){Pe(n,r,$)}}break;case 5:Xn(h,h.return);break;case 22:if(h.memoizedState!==null){Qh(p);continue}}_!==null?(_.return=h,ne=_):Qh(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=cv("display",s))}catch($){Pe(e,e.return,$)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch($){Pe(e,e.return,$)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ut(t,e),ir(e),n&4&&Gh(e);break;case 21:break;default:Ut(t,e),ir(e)}}function ir(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(D1(r)){var n=r;break e}r=r.return}throw Error(q(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(oa(i,""),n.flags&=-33);var a=Hh(e);ld(e,a,i);break;case 3:case 4:var s=n.stateNode.containerInfo,o=Hh(e);od(e,o,s);break;default:throw Error(q(161))}}catch(l){Pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function JS(e,t,r){ne=e,U1(e)}function U1(e,t,r){for(var n=(e.mode&1)!==0;ne!==null;){var i=ne,a=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||ns;if(!s){var o=i.alternate,l=o!==null&&o.memoizedState!==null||nt;o=ns;var d=nt;if(ns=s,(nt=l)&&!d)for(ne=i;ne!==null;)s=ne,l=s.child,s.tag===22&&s.memoizedState!==null?Xh(i):l!==null?(l.return=s,ne=l):Xh(i);for(;a!==null;)ne=a,U1(a),a=a.sibling;ne=i,ns=o,nt=d}Kh(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,ne=a):Kh(e)}}function Kh(e){for(;ne!==null;){var t=ne;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:nt||xo(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!nt)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Ht(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Oh(t,a,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Oh(t,s,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ca(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}nt||t.flags&512&&sd(t)}catch(h){Pe(t,t.return,h)}}if(t===e){ne=null;break}if(r=t.sibling,r!==null){r.return=t.return,ne=r;break}ne=t.return}}function Qh(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ne=r;break}ne=t.return}}function Xh(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{xo(4,t)}catch(l){Pe(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){Pe(t,i,l)}}var a=t.return;try{sd(t)}catch(l){Pe(t,a,l)}break;case 5:var s=t.return;try{sd(t)}catch(l){Pe(t,s,l)}}}catch(l){Pe(t,t.return,l)}if(t===e){ne=null;break}var o=t.sibling;if(o!==null){o.return=t.return,ne=o;break}ne=t.return}}var ek=Math.ceil,Js=Sr.ReactCurrentDispatcher,pc=Sr.ReactCurrentOwner,Mt=Sr.ReactCurrentBatchConfig,_e=0,Qe=null,je=null,Ze=0,bt=0,Zn=en(0),Fe=0,xa=null,Tn=0,bo=0,fc=0,na=null,mt=null,hc=0,pi=1/0,hr=null,eo=!1,ud=null,Gr=null,is=!1,Wr=null,to=0,ia=0,dd=null,Is=-1,zs=0;function ot(){return _e&6?Ue():Is!==-1?Is:Is=Ue()}function Kr(e){return e.mode&1?_e&2&&Ze!==0?Ze&-Ze:DS.transition!==null?(zs===0&&(zs=Sv()),zs):(e=be,e!==0||(e=window.event,e=e===void 0?16:Nv(e.type)),e):1}function Yt(e,t,r,n){if(50<ia)throw ia=0,dd=null,Error(q(185));Ea(e,r,n),(!(_e&2)||e!==Qe)&&(e===Qe&&(!(_e&2)&&(bo|=r),Fe===4&&Lr(e,Ze)),_t(e,n),r===1&&_e===0&&!(t.mode&1)&&(pi=Ue()+500,_o&&tn()))}function _t(e,t){var r=e.callbackNode;D3(e,t);var n=Ps(e,e===Qe?Ze:0);if(n===0)r!==null&&ah(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&ah(r),t===1)e.tag===0?BS(Zh.bind(null,e)):Xv(Zh.bind(null,e)),OS(function(){!(_e&6)&&tn()}),r=null;else{switch(kv(n)){case 1:r=Ud;break;case 4:r=xv;break;case 16:r=Ds;break;case 536870912:r=bv;break;default:r=Ds}r=K1(r,W1.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function W1(e,t){if(Is=-1,zs=0,_e&6)throw Error(q(327));var r=e.callbackNode;if(ai()&&e.callbackNode!==r)return null;var n=Ps(e,e===Qe?Ze:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ro(e,n);else{t=n;var i=_e;_e|=2;var a=V1();(Qe!==e||Ze!==t)&&(hr=null,pi=Ue()+500,wn(e,t));do try{nk();break}catch(o){j1(e,o)}while(!0);Jd(),Js.current=a,_e=i,je!==null?t=0:(Qe=null,Ze=0,t=Fe)}if(t!==0){if(t===2&&(i=Du(e),i!==0&&(n=i,t=cd(e,i))),t===1)throw r=xa,wn(e,0),Lr(e,n),_t(e,Ue()),r;if(t===6)Lr(e,n);else{if(i=e.current.alternate,!(n&30)&&!tk(i)&&(t=ro(e,n),t===2&&(a=Du(e),a!==0&&(n=a,t=cd(e,a))),t===1))throw r=xa,wn(e,0),Lr(e,n),_t(e,Ue()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(q(345));case 2:fn(e,mt,hr);break;case 3:if(Lr(e,n),(n&130023424)===n&&(t=hc+500-Ue(),10<t)){if(Ps(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){ot(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qu(fn.bind(null,e,mt,hr),t);break}fn(e,mt,hr);break;case 4:if(Lr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-Zt(n);a=1<<s,s=t[s],s>i&&(i=s),n&=~a}if(n=i,n=Ue()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ek(n/1960))-n,10<n){e.timeoutHandle=qu(fn.bind(null,e,mt,hr),n);break}fn(e,mt,hr);break;case 5:fn(e,mt,hr);break;default:throw Error(q(329))}}}return _t(e,Ue()),e.callbackNode===r?W1.bind(null,e):null}function cd(e,t){var r=na;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=ro(e,t),e!==2&&(t=mt,mt=r,t!==null&&pd(t)),e}function pd(e){mt===null?mt=e:mt.push.apply(mt,e)}function tk(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!er(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lr(e,t){for(t&=~fc,t&=~bo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Zt(t),n=1<<r;e[r]=-1,t&=~n}}function Zh(e){if(_e&6)throw Error(q(327));ai();var t=Ps(e,0);if(!(t&1))return _t(e,Ue()),null;var r=ro(e,t);if(e.tag!==0&&r===2){var n=Du(e);n!==0&&(t=n,r=cd(e,n))}if(r===1)throw r=xa,wn(e,0),Lr(e,t),_t(e,Ue()),r;if(r===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fn(e,mt,hr),_t(e,Ue()),null}function mc(e,t){var r=_e;_e|=1;try{return e(t)}finally{_e=r,_e===0&&(pi=Ue()+500,_o&&tn())}}function Cn(e){Wr!==null&&Wr.tag===0&&!(_e&6)&&ai();var t=_e;_e|=1;var r=Mt.transition,n=be;try{if(Mt.transition=null,be=1,e)return e()}finally{be=n,Mt.transition=r,_e=t,!(_e&6)&&tn()}}function gc(){bt=Zn.current,Ne(Zn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,NS(r)),je!==null)for(r=je.return;r!==null;){var n=r;switch(Xd(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Vs();break;case 3:di(),Ne(yt),Ne(it),ac();break;case 5:ic(n);break;case 4:di();break;case 13:Ne(Ae);break;case 19:Ne(Ae);break;case 10:ec(n.type._context);break;case 22:case 23:gc()}r=r.return}if(Qe=e,je=e=Qr(e.current,null),Ze=bt=t,Fe=0,xa=null,fc=bo=Tn=0,mt=na=null,vn!==null){for(t=0;t<vn.length;t++)if(r=vn[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var s=a.next;a.next=i,n.next=s}r.pending=n}vn=null}return e}function j1(e,t){do{var r=je;try{if(Jd(),Es.current=Ys,Zs){for(var n=Me.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Zs=!1}if(En=0,Ke=Ve=Me=null,ta=!1,_a=0,pc.current=null,r===null||r.return===null){Fe=1,xa=t,je=null;break}e:{var a=e,s=r.return,o=r,l=t;if(t=Ze,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=Ph(s);if(_!==null){_.flags&=-257,Lh(_,s,o,a,t),_.mode&1&&Dh(a,d,t),t=_,l=d;var w=t.updateQueue;if(w===null){var $=new Set;$.add(l),t.updateQueue=$}else w.add(l);break e}else{if(!(t&1)){Dh(a,d,t),yc();break e}l=Error(q(426))}}else if(Oe&&o.mode&1){var E=Ph(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Lh(E,s,o,a,t),Zd(ci(l,o));break e}}a=l=ci(l,o),Fe!==4&&(Fe=2),na===null?na=[a]:na.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=k1(a,l,t);Nh(a,y);break e;case 1:o=l;var m=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Gr===null||!Gr.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=E1(a,o,t);Nh(a,S);break e}}a=a.return}while(a!==null)}q1(r)}catch(T){t=T,je===r&&r!==null&&(je=r=r.return);continue}break}while(!0)}function V1(){var e=Js.current;return Js.current=Ys,e===null?Ys:e}function yc(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Qe===null||!(Tn&268435455)&&!(bo&268435455)||Lr(Qe,Ze)}function ro(e,t){var r=_e;_e|=2;var n=V1();(Qe!==e||Ze!==t)&&(hr=null,wn(e,t));do try{rk();break}catch(i){j1(e,i)}while(!0);if(Jd(),_e=r,Js.current=n,je!==null)throw Error(q(261));return Qe=null,Ze=0,Fe}function rk(){for(;je!==null;)F1(je)}function nk(){for(;je!==null&&!C3();)F1(je)}function F1(e){var t=G1(e.alternate,e,bt);e.memoizedProps=e.pendingProps,t===null?q1(e):je=t,pc.current=null}function q1(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=XS(r,t),r!==null){r.flags&=32767,je=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,je=null;return}}else if(r=QS(r,t,bt),r!==null){je=r;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Fe===0&&(Fe=5)}function fn(e,t,r){var n=be,i=Mt.transition;try{Mt.transition=null,be=1,ik(e,t,r,n)}finally{Mt.transition=i,be=n}return null}function ik(e,t,r,n){do ai();while(Wr!==null);if(_e&6)throw Error(q(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(P3(e,a),e===Qe&&(je=Qe=null,Ze=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||is||(is=!0,K1(Ds,function(){return ai(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Mt.transition,Mt.transition=null;var s=be;be=1;var o=_e;_e|=4,pc.current=null,YS(e,r),L1(r,e),SS(Vu),Ls=!!ju,Vu=ju=null,e.current=r,JS(r),I3(),_e=o,be=s,Mt.transition=a}else e.current=r;if(is&&(is=!1,Wr=e,to=i),a=e.pendingLanes,a===0&&(Gr=null),O3(r.stateNode),_t(e,Ue()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(eo)throw eo=!1,e=ud,ud=null,e;return to&1&&e.tag!==0&&ai(),a=e.pendingLanes,a&1?e===dd?ia++:(ia=0,dd=e):ia=0,tn(),null}function ai(){if(Wr!==null){var e=kv(to),t=Mt.transition,r=be;try{if(Mt.transition=null,be=16>e?16:e,Wr===null)var n=!1;else{if(e=Wr,Wr=null,to=0,_e&6)throw Error(q(331));var i=_e;for(_e|=4,ne=e.current;ne!==null;){var a=ne,s=a.child;if(ne.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var d=o[l];for(ne=d;ne!==null;){var f=ne;switch(f.tag){case 0:case 11:case 15:ra(8,f,a)}var p=f.child;if(p!==null)p.return=f,ne=p;else for(;ne!==null;){f=ne;var h=f.sibling,_=f.return;if(B1(f),f===d){ne=null;break}if(h!==null){h.return=_,ne=h;break}ne=_}}}var w=a.alternate;if(w!==null){var $=w.child;if($!==null){w.child=null;do{var E=$.sibling;$.sibling=null,$=E}while($!==null)}}ne=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,ne=s;else e:for(;ne!==null;){if(a=ne,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ra(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,ne=y;break e}ne=a.return}}var m=e.current;for(ne=m;ne!==null;){s=ne;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,ne=x;else e:for(s=m;ne!==null;){if(o=ne,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:xo(9,o)}}catch(T){Pe(o,o.return,T)}if(o===s){ne=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ne=S;break e}ne=o.return}}if(_e=i,tn(),lr&&typeof lr.onPostCommitFiberRoot=="function")try{lr.onPostCommitFiberRoot(ho,e)}catch{}n=!0}return n}finally{be=r,Mt.transition=t}}return!1}function Yh(e,t,r){t=ci(r,t),t=k1(e,t,1),e=Hr(e,t,1),t=ot(),e!==null&&(Ea(e,1,t),_t(e,t))}function Pe(e,t,r){if(e.tag===3)Yh(e,e,r);else for(;t!==null;){if(t.tag===3){Yh(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Gr===null||!Gr.has(n))){e=ci(r,e),e=E1(t,e,1),t=Hr(t,e,1),e=ot(),t!==null&&(Ea(t,1,e),_t(t,e));break}}t=t.return}}function ak(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ot(),e.pingedLanes|=e.suspendedLanes&r,Qe===e&&(Ze&r)===r&&(Fe===4||Fe===3&&(Ze&130023424)===Ze&&500>Ue()-hc?wn(e,0):fc|=r),_t(e,t)}function H1(e,t){t===0&&(e.mode&1?(t=Ka,Ka<<=1,!(Ka&130023424)&&(Ka=4194304)):t=1);var r=ot();e=xr(e,t),e!==null&&(Ea(e,t,r),_t(e,r))}function sk(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),H1(e,r)}function ok(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(q(314))}n!==null&&n.delete(t),H1(e,r)}var G1;G1=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)gt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return gt=!1,KS(e,t,r);gt=!!(e.flags&131072)}else gt=!1,Oe&&t.flags&1048576&&Zv(t,Hs,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Cs(e,t),e=t.pendingProps;var i=oi(t,it.current);ii(t,r),i=oc(null,t,n,e,i,r);var a=lc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,vt(n)?(a=!0,Fs(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rc(t),i.updater=$o,t.stateNode=i,i._reactInternals=t,Yu(t,n,e,r),t=td(null,t,n,!0,a,r)):(t.tag=0,Oe&&a&&Qd(t),st(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Cs(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=uk(n),e=Ht(n,e),i){case 0:t=ed(null,t,n,e,r);break e;case 1:t=jh(null,t,n,e,r);break e;case 11:t=Uh(null,t,n,e,r);break e;case 14:t=Wh(null,t,n,Ht(n.type,e),r);break e}throw Error(q(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ht(n,i),ed(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ht(n,i),jh(e,t,n,i,r);case 3:e:{if(z1(t),e===null)throw Error(q(387));n=t.pendingProps,a=t.memoizedState,i=a.element,n1(e,t),Qs(t,n,null,r);var s=t.memoizedState;if(n=s.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=ci(Error(q(423)),t),t=Vh(e,t,n,r,i);break e}else if(n!==i){i=ci(Error(q(424)),t),t=Vh(e,t,n,r,i);break e}else for(kt=qr(t.stateNode.containerInfo.firstChild),Et=t,Oe=!0,Kt=null,r=t1(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(li(),n===i){t=br(e,t,r);break e}st(e,t,n,r)}t=t.child}return t;case 5:return i1(t),e===null&&Qu(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,Fu(n,i)?s=null:a!==null&&Fu(n,a)&&(t.flags|=32),I1(e,t),st(e,t,s,r),t.child;case 6:return e===null&&Qu(t),null;case 13:return N1(e,t,r);case 4:return nc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ui(t,null,n,r):st(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ht(n,i),Uh(e,t,n,i,r);case 7:return st(e,t,t.pendingProps,r),t.child;case 8:return st(e,t,t.pendingProps.children,r),t.child;case 12:return st(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Ie(Gs,n._currentValue),n._currentValue=s,a!==null)if(er(a.value,s)){if(a.children===i.children&&!yt.current){t=br(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===n){if(a.tag===1){l=_r(-1,r&-r),l.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?l.next=l:(l.next=f.next,f.next=l),d.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),Xu(a.return,r,t),o.lanes|=r;break}l=l.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(q(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),Xu(s,r,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}st(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,ii(t,r),i=Bt(i),n=n(i),t.flags|=1,st(e,t,n,r),t.child;case 14:return n=t.type,i=Ht(n,t.pendingProps),i=Ht(n.type,i),Wh(e,t,n,i,r);case 15:return T1(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ht(n,i),Cs(e,t),t.tag=1,vt(n)?(e=!0,Fs(t)):e=!1,ii(t,r),S1(t,n,i),Yu(t,n,i,r),td(null,t,n,!0,e,r);case 19:return O1(e,t,r);case 22:return C1(e,t,r)}throw Error(q(156,t.tag))};function K1(e,t){return $v(e,t)}function lk(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,r,n){return new lk(e,t,r,n)}function vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uk(e){if(typeof e=="function")return vc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dd)return 11;if(e===Pd)return 14}return 2}function Qr(e,t){var r=e.alternate;return r===null?(r=At(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ns(e,t,r,n,i,a){var s=2;if(n=e,typeof e=="function")vc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Wn:return $n(r.children,i,a,t);case Bd:s=8,i|=8;break;case xu:return e=At(12,r,t,i|2),e.elementType=xu,e.lanes=a,e;case bu:return e=At(13,r,t,i),e.elementType=bu,e.lanes=a,e;case Su:return e=At(19,r,t,i),e.elementType=Su,e.lanes=a,e;case iv:return So(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rv:s=10;break e;case nv:s=9;break e;case Dd:s=11;break e;case Pd:s=14;break e;case Br:s=16,n=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return t=At(s,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function $n(e,t,r,n){return e=At(7,e,n,t),e.lanes=r,e}function So(e,t,r,n){return e=At(22,e,n,t),e.elementType=iv,e.lanes=r,e.stateNode={isHidden:!1},e}function xl(e,t,r){return e=At(6,e,null,t),e.lanes=r,e}function bl(e,t,r){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dk(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nl(0),this.expirationTimes=nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nl(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _c(e,t,r,n,i,a,s,o,l){return e=new dk(e,t,r,o,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=At(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},rc(a),e}function ck(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Q1(e){if(!e)return Zr;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(q(171))}if(e.tag===1){var r=e.type;if(vt(r))return Qv(e,r,t)}return t}function X1(e,t,r,n,i,a,s,o,l){return e=_c(r,n,!0,e,i,a,s,o,l),e.context=Q1(null),r=e.current,n=ot(),i=Kr(r),a=_r(n,i),a.callback=t??null,Hr(r,a,i),e.current.lanes=i,Ea(e,i,n),_t(e,n),e}function ko(e,t,r,n){var i=t.current,a=ot(),s=Kr(i);return r=Q1(r),t.context===null?t.context=r:t.pendingContext=r,t=_r(a,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Hr(i,t,s),e!==null&&(Yt(e,i,s,a),ks(e,i,s)),s}function no(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function wc(e,t){Jh(e,t),(e=e.alternate)&&Jh(e,t)}function pk(){return null}var Z1=typeof reportError=="function"?reportError:function(e){console.error(e)};function $c(e){this._internalRoot=e}Eo.prototype.render=$c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));ko(e,t,null,null)};Eo.prototype.unmount=$c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){ko(null,e,null,null)}),t[$r]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cv();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Pr.length&&t!==0&&t<Pr[r].priority;r++);Pr.splice(r,0,e),r===0&&zv(e)}};function xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function em(){}function fk(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var d=no(s);a.call(d)}}var s=X1(t,n,e,0,null,!1,!1,"",em);return e._reactRootContainer=s,e[$r]=s.current,ha(e.nodeType===8?e.parentNode:e),Cn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var o=n;n=function(){var d=no(l);o.call(d)}}var l=_c(e,0,!1,null,null,!1,!1,"",em);return e._reactRootContainer=l,e[$r]=l.current,ha(e.nodeType===8?e.parentNode:e),Cn(function(){ko(t,l,r,n)}),l}function Co(e,t,r,n,i){var a=r._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var o=i;i=function(){var l=no(s);o.call(l)}}ko(t,s,e,i)}else s=fk(r,t,e,i,n);return no(s)}Ev=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Fi(t.pendingLanes);r!==0&&(Wd(t,r|1),_t(t,Ue()),!(_e&6)&&(pi=Ue()+500,tn()))}break;case 13:Cn(function(){var n=xr(e,1);if(n!==null){var i=ot();Yt(n,e,1,i)}}),wc(e,1)}};jd=function(e){if(e.tag===13){var t=xr(e,134217728);if(t!==null){var r=ot();Yt(t,e,134217728,r)}wc(e,134217728)}};Tv=function(e){if(e.tag===13){var t=Kr(e),r=xr(e,t);if(r!==null){var n=ot();Yt(r,e,t,n)}wc(e,t)}};Cv=function(){return be};Iv=function(e,t){var r=be;try{return be=e,t()}finally{be=r}};Au=function(e,t,r){switch(t){case"input":if(Tu(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=vo(n);if(!i)throw Error(q(90));sv(n),Tu(n,i)}}}break;case"textarea":lv(e,r);break;case"select":t=r.value,t!=null&&ei(e,!!r.multiple,t,!1)}};mv=mc;gv=Cn;var hk={usingClientEntryPoint:!1,Events:[Ca,qn,vo,fv,hv,mc]},Ni={findFiberByHostInstance:yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mk={bundleType:Ni.bundleType,version:Ni.version,rendererPackageName:Ni.rendererPackageName,rendererConfig:Ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_v(e),e===null?null:e.stateNode},findFiberByHostInstance:Ni.findFiberByHostInstance||pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var as=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!as.isDisabled&&as.supportsFiber)try{ho=as.inject(mk),lr=as}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hk;It.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(t))throw Error(q(200));return ck(e,t,null,r)};It.createRoot=function(e,t){if(!xc(e))throw Error(q(299));var r=!1,n="",i=Z1;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_c(e,1,!1,null,null,r,!1,n,i),e[$r]=t.current,ha(e.nodeType===8?e.parentNode:e),new $c(t)};It.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=_v(t),e=e===null?null:e.stateNode,e};It.flushSync=function(e){return Cn(e)};It.hydrate=function(e,t,r){if(!To(t))throw Error(q(200));return Co(null,e,t,!0,r)};It.hydrateRoot=function(e,t,r){if(!xc(e))throw Error(q(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",s=Z1;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=X1(t,null,e,1,r??null,i,!1,a,s),e[$r]=t.current,ha(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Eo(t)};It.render=function(e,t,r){if(!To(t))throw Error(q(200));return Co(null,e,t,!1,r)};It.unmountComponentAtNode=function(e){if(!To(e))throw Error(q(40));return e._reactRootContainer?(Cn(function(){Co(null,null,e,!1,function(){e._reactRootContainer=null,e[$r]=null})}),!0):!1};It.unstable_batchedUpdates=mc;It.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!To(r))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return Co(e,t,r,!1,n)};It.version="18.3.1-next-f1338f8080-20240426";function Y1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y1)}catch(e){console.error(e)}}Y1(),Yy.exports=It;var gk=Yy.exports,tm=gk;wu.createRoot=tm.createRoot,wu.hydrateRoot=tm.hydrateRoot;/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var bc=Object.defineProperty,yk=Object.getOwnPropertyDescriptor,vk=Object.getOwnPropertyNames,_k=Object.prototype.hasOwnProperty,wk=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),j=(e,t)=>()=>(e&&(t=e(e=0)),t),vi=(e,t)=>{for(var r in t)bc(e,r,{get:t[r],enumerable:!0})},$k=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of vk(t))!_k.call(e,i)&&i!==r&&bc(e,i,{get:()=>t[i],enumerable:!(n=yk(t,i))||n.enumerable});return e},ba=e=>$k(bc({},"__esModule",{value:!0}),e),Oi,Rr,Yn,rm,J1,e_=j(()=>{Oi=new Map,Rr=[],Yn=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=Oi.get(e);if(n===void 0)Oi.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=Rr.indexOf(e);i!==-1&&Rr.splice(i,1);for(let a=0;a<Rr.length;a++)if(Oi.get(Rr[a]).priority<=r){Rr.splice(a,0,e);return}Rr.push(e)}return}throw new TypeError("not a valid backend")},rm=async e=>{let t=Oi.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},J1=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),n=r.length===0?Rr:r,i,a=[],s=new Set;for(let l of n){let d=await rm(l);typeof d=="string"?a.push({name:l,err:d}):(i||(i=d),i===d&&s.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of a)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),xk=j(()=>{e_()}),t_,bk=j(()=>{t_="1.27.0"}),Sl,He,r_=j(()=>{bk(),Sl="warning",He={wasm:{},webgl:{},webgpu:{},versions:{common:t_},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Sl=e}},get logLevel(){return Sl}},Object.defineProperty(He,"logLevel",{enumerable:!0})}),Te,Sk=j(()=>{r_(),Te=He}),n_,i_,kk=j(()=>{n_=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let f=a*i,p=0,h=f,_=f*2,w=-1;s==="RGBA"?(p=0,h=f,_=f*2,w=f*3):s==="RGB"?(p=0,h=f,_=f*2):s==="RBG"&&(p=0,_=f,h=f*2);for(let $=0;$<a;$++)for(let E=0;E<i;E++){let y=(e.data[p++]-d[0])*l[0],m=(e.data[h++]-d[1])*l[1],x=(e.data[_++]-d[2])*l[2],S=w===-1?255:(e.data[w++]-d[3])*l[3];n.fillStyle="rgba("+y+","+m+","+x+","+S+")",n.fillRect(E,$,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},i_=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,f;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?f=[0,0,0,0]:typeof l.bias=="number"?f=[l.bias,l.bias,l.bias,l.bias]:(f=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(f[3]=l.bias[3]));let p=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,_=0,w=1,$=2,E=3,y=0,m=p,x=p*2,S=-1;o==="RGBA"?(y=0,m=p,x=p*2,S=p*3):o==="RGB"?(y=0,m=p,x=p*2):o==="RBG"&&(y=0,x=p,m=p*2),n=r.createImageData(i,a);for(let T=0;T<a*i;_+=h,w+=h,$+=h,E+=h,T++)n.data[_]=(e.data[y++]-f[0])*d[0],n.data[w]=(e.data[m++]-f[1])*d[1],n.data[$]=(e.data[x++]-f[2])*d[2],n.data[E]=S===-1?255:(e.data[S++]-f[3])*d[3]}else throw new Error("Can not access image data");return n}}),ss,a_,s_,o_,l_,u_,Ek=j(()=>{Sc(),ss=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,f=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),p=4,h=0,_=1,w=2,$=3,E=0,y=d,m=d*2,x=-1;o==="RGB"&&(p=3,h=0,_=1,w=2,$=-1),l==="RGBA"?x=d*3:l==="RBG"?(E=0,m=d,y=d*2):l==="BGR"&&(m=0,y=d,E=d*2);for(let S=0;S<d;S++,h+=p,w+=p,_+=p,$+=p)f[E++]=(e[h]+s[0])/a[0],f[y++]=(e[_]+s[1])/a[1],f[m++]=(e[w]+s[2])/a[2],x!==-1&&$!==-1&&(f[x++]=(e[$]+s[3])/a[3]);return l==="RGBA"?new St("float32",f,[1,4,r,n]):new St("float32",f,[1,3,r,n])},a_=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=l();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let h=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=_}else o.tensorFormat="RGBA",o.height=h,o.width=_;p.drawImage(e,0,0),s=p.getImageData(0,0,_,h).data}else throw new Error("Can not access image data")}else if(n){let f,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,p=t.resizedWidth):(f=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=f,o.width=p,t!==void 0){let h=l();h.width=p,h.height=f;let _=d(h);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,p,f).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=l();f.width=e.width,f.height=e.height;let p=d(f);if(p!=null){let h=e.height,_=e.width;return p.drawImage(e,0,0,_,h),s=p.getImageData(0,0,_,h).data,o.height=h,o.width=_,ss(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((f,p)=>{let h=l(),_=d(h);if(!e||!_)return p();let w=new Image;w.crossOrigin="Anonymous",w.src=e,w.onload=()=>{h.width=w.width,h.height=w.height,_.drawImage(w,0,0,h.width,h.height);let $=_.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,f(ss($.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return ss(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},s_=(e,t)=>{let{width:r,height:n,download:i,dispose:a}=t,s=[1,n,r,4];return new St({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},o_=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:a}=t;return new St({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:a})},l_=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:a}=t;return new St({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:a})},u_=(e,t,r)=>new St({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),hn,Hi,kl,d_,Tk=j(()=>{hn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Hi=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),kl=!1,d_=()=>{if(!kl){kl=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(hn.set("int64",BigInt64Array),Hi.set(BigInt64Array,"int64")),t&&(hn.set("uint64",BigUint64Array),Hi.set(BigUint64Array,"uint64")),n?(hn.set("float16",r),Hi.set(r,"float16")):hn.set("float16",Uint16Array)}}}),c_,p_,Ck=j(()=>{Sc(),c_=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},p_=(e,t)=>{switch(e.location){case"cpu":return new St(e.type,e.data,t);case"cpu-pinned":return new St({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new St({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new St({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new St({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),St,Sc=j(()=>{kk(),Ek(),Tk(),Ck(),St=class{constructor(e,t,r){d_();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=hn.get(n);if(!s)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=hn.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")n="string",s=e;else if(l==="boolean")n="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",s=Uint8Array.from(e);else{let l=Hi.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=l,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let a=c_(i);if(this.cpuData&&a!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=a}static async fromImage(e,t){return a_(e,t)}static fromTexture(e,t){return s_(e,t)}static fromGpuBuffer(e,t){return o_(e,t)}static fromMLTensor(e,t){return l_(e,t)}static fromPinnedBuffer(e,t,r){return u_(e,t,r)}toDataURL(e){return n_(this,e)}toImageData(e){return i_(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return p_(this,e)}}}),Xt,f_=j(()=>{Sc(),Xt=St}),io,El,dr,Jt,xn,bn,h_=j(()=>{r_(),io=(e,t)=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||console.timeStamp(`${e}::ORT::${t}`)},El=(e,t)=>{var i;let r=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],n=!1;for(let a=0;a<r.length;a++){if(n&&!r[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),io("CPU",s);return}r[a].includes("TRACE_FUNC")&&(n=!0)}},dr=e=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||El("BEGIN",e)},Jt=e=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||El("END",e)},xn=e=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||console.time(`ORT::${e}`)},bn=e=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||console.timeEnd(`ORT::${e}`)}}),m_,Ik=j(()=>{e_(),f_(),h_(),m_=class g_{constructor(t){this.handler=t}async run(t,r,n){dr(),xn("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Xt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Xt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,f=Object.getOwnPropertyNames(r);for(let p of this.outputNames)if(f.indexOf(p)!==-1){let h=r[p];(h===null||h instanceof Xt)&&(d=!0,s=!1,i[p]=h)}if(d){if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,a),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let f=o[d];f instanceof Xt?l[d]=f:l[d]=new Xt(f.type,f.data,f.dims)}return bn("InferenceSession.run"),Jt(),l}async release(){return this.handler.dispose()}static async create(t,r,n,i){dr(),xn("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,p=0,h=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(h=t.byteLength-p,typeof n=="number"){if(h=n,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||p+h>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-p}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(f,p,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await J1(s),d=await o.createInferenceSessionHandler(a,l);return bn("InferenceSession.create"),Jt(),new g_(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),kc,zk=j(()=>{Ik(),kc=m_}),Nk=j(()=>{}),Ok=j(()=>{}),Rk=j(()=>{}),Ak=j(()=>{}),Mk={};vi(Mk,{InferenceSession:()=>kc,TRACE:()=>io,TRACE_EVENT_BEGIN:()=>xn,TRACE_EVENT_END:()=>bn,TRACE_FUNC_BEGIN:()=>dr,TRACE_FUNC_END:()=>Jt,Tensor:()=>Xt,env:()=>Te,registerBackend:()=>Yn});var Pt=j(()=>{xk(),Sk(),zk(),f_(),Nk(),Ok(),h_(),Rk(),Ak()}),Ec=j(()=>{}),y_={};vi(y_,{default:()=>v_});var Tl,Cl,v_,Bk=j(()=>{var e;b2(),An(),Tc(),Tl="ort-wasm-proxy-worker",Cl=((e=globalThis.self)==null?void 0:e.name)===Tl,Cl&&(self.onmessage=t=>{let{type:r,in:n}=t.data;try{switch(r){case"init-wasm":Cc(n.wasm).then(()=>{qc(n).then(()=>{postMessage({type:r})},i=>{postMessage({type:r,err:i})})},i=>{postMessage({type:r,err:i})});break;case"init-ep":{let{epName:i,env:a}=n;Hc(a,i).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:i}=n,a=po(i);postMessage({type:r,out:a});break}case"create":{let{model:i,options:a}=n;Gc(i,a).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":Kc(n),postMessage({type:r});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:o,options:l}=n;Qc(i,a,s,o,new Array(o.length).fill(null),l).then(d=>{d.some(f=>f[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},Zc([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Xc(n),postMessage({type:r});break;default:}}catch(i){postMessage({type:r,err:i})}}),v_=Cl?null:t=>new Worker(t??xt,{type:"module",name:Tl})}),__={};vi(__,{default:()=>w_});async function nm(e={}){var Ff,qf;var t=e,r=!!globalThis.window,n=!!globalThis.WorkerGlobalScope,i=n&&((Ff=self.name)==null?void 0:Ff.startsWith("em-pthread"));t.mountExternalData=(u,c)=>{u.startsWith("./")&&(u=u.substring(2)),(t.Xc||(t.Xc=new Map)).set(u,c)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=u=>async(...c)=>{var v;try{if(t.Yc)throw Error("Session already started");let g=t.Yc={Kd:c[0],errors:[]},k=await u(...c);if(t.Yc!==g)throw Error("Session mismatch");(v=t.dd)==null||v.flush();let C=g.errors;if(0<C.length){let N=await Promise.all(C);if(N=N.filter(B=>B),0<N.length)throw Error(N.join(`
`))}return k}finally{t.Yc=null}};t.jsepInit=(u,c)=>{if(u==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=c;let v=t.dd;t.jsepRegisterBuffer=(g,k,C,N)=>v.registerBuffer(g,k,C,N),t.jsepGetBuffer=g=>v.getBuffer(g),t.jsepCreateDownloader=(g,k,C)=>v.createDownloader(g,k,C),t.jsepOnCreateSession=g=>{v.onCreateSession(g)},t.jsepOnReleaseSession=g=>{v.onReleaseSession(g)},t.jsepOnRunStart=g=>v.onRunStart(g),t.Id=(g,k)=>{v.upload(g,k)}}else if(u==="webnn"){let v=c[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=c.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=g=>v.onRunStart(g),t.webnnOnRunEnd=v.onRunEnd.bind(v),t.webnnOnReleaseSession=g=>{v.onReleaseSession(g)},t.webnnCreateMLTensorDownloader=(g,k)=>v.createMLTensorDownloader(g,k),t.webnnRegisterMLTensor=(g,k,C,N)=>v.registerMLTensor(g,k,C,N),t.webnnCreateMLContext=g=>v.createMLContext(g),t.webnnRegisterMLConstant=(g,k,C,N,B,H)=>v.registerMLConstant(g,k,C,N,B,t.Xc,H),t.webnnRegisterGraphInput=v.registerGraphInput.bind(v),t.webnnIsGraphInput=v.isGraphInput.bind(v),t.webnnRegisterGraphOutput=v.registerGraphOutput.bind(v),t.webnnIsGraphOutput=v.isGraphOutput.bind(v),t.webnnCreateTemporaryTensor=v.createTemporaryTensor.bind(v),t.webnnIsGraphInputOutputTypeSupported=v.isGraphInputOutputTypeSupported.bind(v)}};let s=()=>{let u=c=>(...v)=>{let g=rr;return v=c(...v),rr!=g?new Promise((k,C)=>{Lo={resolve:k,reject:C}}):v};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[c]=u(t[c])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,l,d=(u,c)=>{throw c},f=import.meta.url,p="";if(r||n){try{p=new URL(".",f).href}catch{}n&&(l=u=>{var c=new XMLHttpRequest;return c.open("GET",u,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),o=async u=>{if(z(u))return new Promise((v,g)=>{var k=new XMLHttpRequest;k.open("GET",u,!0),k.responseType="arraybuffer",k.onload=()=>{k.status==200||k.status==0&&k.response?v(k.response):g(k.status)},k.onerror=g,k.send(null)});var c=await fetch(u,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var h,_,w,$,E,y,m=console.log.bind(console),x=console.error.bind(console),S=m,T=x,I=!1,z=u=>u.startsWith("file://");function b(){Cr.buffer!=M.buffer&&V()}if(i){let u=function(c){try{var v=c.data,g=v.Sc;if(g==="load"){let k=[];self.onmessage=C=>k.push(C),y=()=>{postMessage({Sc:"loaded"});for(let C of k)u(C);self.onmessage=u};for(let C of v.xd)t[C]&&!t[C].proxy||(t[C]=(...N)=>{postMessage({Sc:"callHandler",wd:C,args:N})},C=="print"&&(S=t[C]),C=="printErr"&&(T=t[C]));Cr=v.Od,V(),_=v.Pd,We(),ja()}else if(g==="run"){(function(k){var C=(b(),ee)[k+52>>>2>>>0];k=(b(),ee)[k+56>>>2>>>0],Jp(C,C-k),ce(C)})(v.Rc),Fo(v.Rc,0,0,1,0,0),ep(),Bo(v.Rc),O||(Gp(),O=!0);try{M2(v.Md,v.bd)}catch(k){if(k!="unwind")throw k}}else v.target!=="setimmediate"&&(g==="checkMailbox"?O&&Ma():g&&(T(`worker: received unknown command ${g}`),T(v)))}catch(k){throw Kp(),k}};var O=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=u}var M,G,Q,X,A,ee,J,re,W,P,K,L=!1;function V(){var u=Cr.buffer;t.HEAP8=M=new Int8Array(u),Q=new Int16Array(u),t.HEAPU8=G=new Uint8Array(u),X=new Uint16Array(u),t.HEAP32=A=new Int32Array(u),t.HEAPU32=ee=new Uint32Array(u),J=new Float32Array(u),re=new Float64Array(u),W=new BigInt64Array(u),P=new BigUint64Array(u)}function Y(){L=!0,i?y():pr.sb()}function F(u){throw T(u="Aborted("+u+")"),I=!0,u=new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info."),E==null||E(u),u}function ge(){return{a:{ma:ib,gb:nb,g:B2,J:D2,f:P2,o:L2,h:U2,ha:W2,b:j2,T:V2,Ha:sp,n:F2,$:dp,Xa:cp,Da:pp,Fa:fp,Ya:hp,Va:mp,Oa:gp,Ua:yp,ka:vp,Ea:_p,Ba:wp,Wa:$p,Ca:xp,bb:q2,ea:H2,wa:G2,ua:Q2,da:Z2,O:Y2,H:J2,va:ex,_:ox,xa:lx,Ra:ux,za:cx,Ia:px,sa:fx,fa:hx,Qa:Bo,_a:mx,R:_x,r:Sx,c:Ao,hb:kx,y:Ex,M:Tx,D:Cx,l:Ix,s:zp,ib:zx,I:Nx,S:Ox,j:Rx,u:Ax,q:Mx,k:Bx,La:Dx,Ma:Px,Na:Lx,Ja:Ap,Ka:Mp,ta:Bp,db:Wx,ab:Vx,v:Fx,aa:qx,ga:Hx,$a:jx,W:Gx,Za:Kx,Aa:Qx,F:Ux,U:Xx,la:Ua,ya:Yx,fb:Zx,eb:Jx,Sa:Up,Ta:Wp,Ga:_i,V:jp,ja:Vp,Pa:Fp,ia:qp,kb:Ub,na:Mb,lb:Lb,oa:Ab,G:kb,e:lb,t:sb,w:ab,B:vb,mb:Nb,K:xb,x:cb,pa:Ob,Y:Bb,ba:zb,nb:Ib,ob:Cb,P:_b,qa:Tb,pb:Eb,N:bb,Z:Rb,d:ob,A:db,m:ub,jb:Wb,p:fb,z:hb,C:pb,E:mb,L:wb,qb:Sb,Q:Db,ca:$b,X:Pb,rb:yb,ra:gb,i:tb,a:Cr,cb:$t}}}async function We(){function u(g,k){var C=pr=g.exports;g={};for(let[N,B]of Object.entries(C))typeof B=="function"?(C=gx(B),g[N]=C):g[N]=B;return pr=g,pr=function(){var N=pr,B=Z=>de=>Z(de)>>>0,H=Z=>()=>Z()>>>0;return(N=Object.assign({},N)).tb=B(N.tb),N.Xb=H(N.Xb),N.Zb=B(N.Zb),N.lc=B(N.lc),N.mc=H(N.mc),N.qc=B(N.qc),N}(),Yc.push(pr._b),Hp=(g=pr).tb,Gp=g.ub,t._OrtInit=g.vb,t._OrtGetLastError=g.wb,t._OrtCreateSessionOptions=g.xb,t._OrtAppendExecutionProvider=g.yb,t._OrtAddFreeDimensionOverride=g.zb,t._OrtAddSessionConfigEntry=g.Ab,t._OrtReleaseSessionOptions=g.Bb,t._OrtCreateSession=g.Cb,t._OrtReleaseSession=g.Db,t._OrtGetInputOutputCount=g.Eb,t._OrtGetInputOutputMetadata=g.Fb,t._OrtFree=g.Gb,t._OrtCreateTensor=g.Hb,t._OrtGetTensorData=g.Ib,t._OrtReleaseTensor=g.Jb,t._OrtCreateRunOptions=g.Kb,t._OrtAddRunConfigEntry=g.Lb,t._OrtReleaseRunOptions=g.Mb,t._OrtCreateBinding=g.Nb,t._OrtBindInput=g.Ob,t._OrtBindOutput=g.Pb,t._OrtClearBoundOutputs=g.Qb,t._OrtReleaseBinding=g.Rb,t._OrtRunWithBinding=g.Sb,t._OrtRun=g.Tb,t._OrtEndProfiling=g.Ub,t._JsepOutput=g.Vb,t._JsepGetNodeName=g.Wb,Wa=g.Xb,nr=t._free=g.Yb,xi=t._malloc=g.Zb,Fo=g.ac,Kp=g.bc,Qp=g.cc,Xp=g.dc,qo=g.ec,Zp=g.fc,Yp=g.gc,fe=g.hc,bi=g.ic,Jp=g.jc,ce=g.kc,Ho=g.lc,pe=g.mc,ef=g.nc,Go=g.oc,tf=g.pc,rf=g.qc,nf=g.rc,Ko=g.sc,af=g.tc,sf=g.uc,of=g.vc,lf=g.wc,uf=g.xc,df=g.yc,cf=g.zc,pf=g.Ac,ff=g.Bc,hf=g.Cc,mf=g.Dc,gf=g.Ec,yf=g.Fc,vf=g.Gc,_f=g.Hc,wf=g.Ic,$f=g.Jc,xf=g.Kc,bf=g.Lc,Sf=g.Mc,kf=g.Nc,Ef=g.Pc,Tf=g.Qc,Cf=g.$c,If=g.ad,zf=g.fd,Nf=g.jd,Of=g.kd,Rf=g.ld,Af=g.md,Mf=g.nd,Bf=g.od,Df=g.pd,Pf=g.qd,Lf=g.vd,Uf=g.Td,Wf=g.Ud,jf=g.Vd,Vf=g.Wd,_=k,pr}var c,v=ge();return t.instantiateWasm?new Promise(g=>{t.instantiateWasm(v,(k,C)=>{g(u(k,C))})}):i?u(new WebAssembly.Instance(_,ge()),_):(K??(K=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/scalpcheck-web/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href),c=await async function(g){var k=K;if(!h&&!z(k))try{var C=fetch(k,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,g)}catch(N){T(`wasm streaming compile failed: ${N}`),T("falling back to ArrayBuffer instantiation")}return async function(N,B){try{var H=await async function(Z){if(!h)try{var de=await o(Z);return new Uint8Array(de)}catch{}if(Z==K&&h)Z=new Uint8Array(h);else{if(!l)throw"both async and sync fetching of the wasm failed";Z=l(Z)}return Z}(N);return await WebAssembly.instantiate(H,B)}catch(Z){T(`failed to asynchronously prepare wasm: ${Z}`),F(Z)}}(k,g)}(v),u(c.instance,c.module))}class Ce{constructor(c){Hf(this,"name","ExitStatus");this.message=`Program terminated with exit(${c})`,this.status=c}}var dt=u=>{u.terminate(),u.onmessage=()=>{}},ct=[],wt=0,pt=null,Er=u=>{Tr.length==0&&(rp(),tp(Tr[0]));var c=Tr.pop();if(!c)return 6;wi.push(c),nn[u.Rc]=c,c.Rc=u.Rc;var v={Sc:"run",Md:u.Ld,bd:u.bd,Rc:u.Rc};return c.postMessage(v,u.rd),0},ke=0,oe=(u,c,...v)=>{var g,k=16*v.length,C=pe(),N=Ho(k),B=N>>>3;for(g of v)typeof g=="bigint"?((b(),W)[B++>>>0]=1n,(b(),W)[B++>>>0]=g):((b(),W)[B++>>>0]=0n,(b(),re)[B++>>>0]=g);return u=Qp(u,0,k,N,c),ce(C),u};function $t(u){if(i)return oe(0,1,u);if(w=u,!(0<ke)){for(var c of wi)dt(c);for(c of Tr)dt(c);Tr=[],wi=[],nn={},I=!0}d(0,new Ce(u))}function za(u){if(i)return oe(1,0,u);_i(u)}var _i=u=>{if(w=u,i)throw za(u),"unwind";$t(u)},Tr=[],wi=[],Yc=[],nn={},Jc=u=>{var c=u.Rc;delete nn[c],Tr.push(u),wi.splice(wi.indexOf(u),1),u.Rc=0,Xp(c)};function ep(){Yc.forEach(u=>u())}var tp=u=>new Promise(c=>{u.onmessage=k=>{var C=k.data;if(k=C.Sc,C.Zc&&C.Zc!=Wa()){var N=nn[C.Zc];N?N.postMessage(C,C.rd):T(`Internal error! Worker sent a message "${k}" to target pthread ${C.Zc}, but that thread no longer exists!`)}else k==="checkMailbox"?Ma():k==="spawnThread"?Er(C):k==="cleanupThread"?Aa(()=>{Jc(nn[C.Nd])}):k==="loaded"?(u.loaded=!0,c(u)):C.target==="setimmediate"?u.postMessage(C):k==="uncaughtException"?u.onerror(C.error):k==="callHandler"?t[C.wd](...C.args):k&&T(`worker sent an unknown command ${k}`)},u.onerror=k=>{throw T(`worker sent an error! ${k.filename}:${k.lineno}: ${k.message}`),k};var v,g=[];for(v of[])t.propertyIsEnumerable(v)&&g.push(v);u.postMessage({Sc:"load",xd:g,Od:Cr,Pd:_})});function rp(){var u=new Worker((()=>{let c=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new c("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Tr.push(u)}var Cr,M2=(u,c)=>{ke=0,u=Ko(u,c),0<ke?w=u:qo(u)},Na=[],Oa=0;function B2(u){var c=new zo(u>>>=0);return(b(),M)[c.Tc+12>>>0]==0&&(np(c,!0),Oa--),ip(c,!1),Na.push(c),rf(u)}var Bn=0,D2=()=>{fe(0,0);var u=Na.pop();ef(u.cd),Bn=0};function np(u,c){c=c?1:0,(b(),M)[u.Tc+12>>>0]=c}function ip(u,c){c=c?1:0,(b(),M)[u.Tc+13>>>0]=c}class zo{constructor(c){this.cd=c,this.Tc=c-24}}var No=u=>{var c=Bn;if(!c)return bi(0),0;var v=new zo(c);(b(),ee)[v.Tc+16>>>2>>>0]=c;var g=(b(),ee)[v.Tc+4>>>2>>>0];if(!g)return bi(0),c;for(var k of u){if(k===0||k===g)break;if(tf(k,g,v.Tc+16))return bi(k),c}return bi(g),c};function P2(){return No([])}function L2(u){return No([u>>>0])}function U2(u,c,v,g){return No([u>>>0,c>>>0,v>>>0,g>>>0])}var W2=()=>{var u=Na.pop();u||F("no exception to throw");var c=u.cd;throw(b(),M)[u.Tc+13>>>0]==0&&(Na.push(u),ip(u,!0),np(u,!1),Oa++),Go(c),Bn=c};function j2(u,c,v){var g=new zo(u>>>=0);throw c>>>=0,v>>>=0,(b(),ee)[g.Tc+16>>>2>>>0]=0,(b(),ee)[g.Tc+4>>>2>>>0]=c,(b(),ee)[g.Tc+8>>>2>>>0]=v,Go(u),Oa++,Bn=u}var V2=()=>Oa;function ap(u,c,v,g){return i?oe(2,1,u,c,v,g):sp(u,c,v,g)}function sp(u,c,v,g){if(u>>>=0,c>>>=0,v>>>=0,g>>>=0,!globalThis.SharedArrayBuffer)return 6;var k=[];return i&&k.length===0?ap(u,c,v,g):(u={Ld:v,Rc:u,bd:g,rd:k},i?(u.Sc="spawnThread",postMessage(u,k),0):Er(u))}function F2(u){throw Bn||(Bn=u>>>0),Bn}var op=globalThis.TextDecoder&&new TextDecoder,lp=(u,c,v,g)=>{if(v=c+v,g)return v;for(;u[c]&&!(c>=v);)++c;return c},up=(u,c=0,v,g)=>{if(16<(v=lp(u,c>>>=0,v,g))-c&&u.buffer&&op)return op.decode(u.buffer instanceof ArrayBuffer?u.subarray(c,v):u.slice(c,v));for(g="";c<v;){var k=u[c++];if(128&k){var C=63&u[c++];if((224&k)==192)g+=String.fromCharCode((31&k)<<6|C);else{var N=63&u[c++];65536>(k=(240&k)==224?(15&k)<<12|C<<6|N:(7&k)<<18|C<<12|N<<6|63&u[c++])?g+=String.fromCharCode(k):(k-=65536,g+=String.fromCharCode(55296|k>>10,56320|1023&k))}}else g+=String.fromCharCode(k)}return g},Le=(u,c,v)=>(u>>>=0)?up((b(),G),u,c,v):"";function dp(u,c,v){return i?oe(3,1,u,c,v):0}function cp(u,c){if(i)return oe(4,1,u,c)}function pp(u,c){if(i)return oe(5,1,u,c)}function fp(u,c,v){if(i)return oe(6,1,u,c,v)}function hp(u,c,v){return i?oe(7,1,u,c,v):0}function mp(u,c){if(i)return oe(8,1,u,c)}function gp(u,c,v){if(i)return oe(9,1,u,c,v)}function yp(u,c,v,g){if(i)return oe(10,1,u,c,v,g)}function vp(u,c,v,g){if(i)return oe(11,1,u,c,v,g)}function _p(u,c,v,g){if(i)return oe(12,1,u,c,v,g)}function wp(u){if(i)return oe(13,1,u)}function $p(u,c){if(i)return oe(14,1,u,c)}function xp(u,c,v){if(i)return oe(15,1,u,c,v)}var q2=()=>F(""),tr=u=>{u>>>=0;for(var c="";;){var v=(b(),G)[u++>>>0];if(!v)return c;c+=String.fromCharCode(v)}},Oo={},Ro={},Dn=class extends Error{constructor(u){super(u),this.name="BindingError"}};function cr(u,c,v={}){return function(g,k,C={}){var N=k.name;if(!g)throw new Dn(`type "${N}" must have a positive integer typeid pointer`);if(Ro.hasOwnProperty(g)){if(C.yd)return;throw new Dn(`Cannot register type '${N}' twice`)}Ro[g]=k,Oo.hasOwnProperty(g)&&(k=Oo[g],delete Oo[g],k.forEach(B=>B()))}(u,c,v)}var bp=(u,c,v)=>{switch(c){case 1:return v?g=>(b(),M)[g>>>0]:g=>(b(),G)[g>>>0];case 2:return v?g=>(b(),Q)[g>>>1>>>0]:g=>(b(),X)[g>>>1>>>0];case 4:return v?g=>(b(),A)[g>>>2>>>0]:g=>(b(),ee)[g>>>2>>>0];case 8:return v?g=>(b(),W)[g>>>3>>>0]:g=>(b(),P)[g>>>3>>>0];default:throw new TypeError(`invalid integer width (${c}): ${u}`)}};function H2(u,c,v,g,k){u>>>=0,v>>>=0,c=tr(c>>>0);let C=N=>N;if(g=g===0n){let N=8*v;C=B=>BigInt.asUintN(N,B),k=C(k)}cr(u,{name:c,Oc:C,Vc:(N,B)=>(typeof B=="number"&&(B=BigInt(B)),B),Uc:bp(c,v,!g),Wc:null})}function G2(u,c,v,g){cr(u>>>=0,{name:c=tr(c>>>0),Oc:function(k){return!!k},Vc:function(k,C){return C?v:g},Uc:function(k){return this.Oc((b(),G)[k>>>0])},Wc:null})}var Sp=[],an=[0,1,,1,null,1,!0,1,!1,1];function Ao(u){9<(u>>>=0)&&--an[u+1]===0&&(an[u]=void 0,Sp.push(u))}var Nt=u=>{if(!u)throw new Dn(`Cannot use deleted val. handle = ${u}`);return an[u]},Lt=u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Sp.pop()||an.length;return an[c]=u,an[c+1]=1,c}};function Mo(u){return this.Oc((b(),ee)[u>>>2>>>0])}var K2={name:"emscripten::val",Oc:u=>{var c=Nt(u);return Ao(u),c},Vc:(u,c)=>Lt(c),Uc:Mo,Wc:null};function Q2(u){return cr(u>>>0,K2)}var X2=(u,c)=>{switch(c){case 4:return function(v){return this.Oc((b(),J)[v>>>2>>>0])};case 8:return function(v){return this.Oc((b(),re)[v>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${u}`)}};function Z2(u,c,v){v>>>=0,cr(u>>>=0,{name:c=tr(c>>>0),Oc:g=>g,Vc:(g,k)=>k,Uc:X2(c,v),Wc:null})}function Y2(u,c,v,g,k){u>>>=0,v>>>=0,c=tr(c>>>0);let C=B=>B;if(g===0){var N=32-8*v;C=B=>B<<N>>>N,k=C(k)}cr(u,{name:c,Oc:C,Vc:(B,H)=>H,Uc:bp(c,v,g!==0),Wc:null})}function J2(u,c,v){function g(C){var N=(b(),ee)[C>>>2>>>0];return C=(b(),ee)[C+4>>>2>>>0],new k((b(),M).buffer,C,N)}var k=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];cr(u>>>=0,{name:v=tr(v>>>0),Oc:g,Uc:g},{yd:!0})}var Ir=(u,c,v)=>{var g=(b(),G);if(c>>>=0,0<v){var k=c;v=c+v-1;for(var C=0;C<u.length;++C){var N=u.codePointAt(C);if(127>=N){if(c>=v)break;g[c++>>>0]=N}else if(2047>=N){if(c+1>=v)break;g[c++>>>0]=192|N>>6,g[c++>>>0]=128|63&N}else if(65535>=N){if(c+2>=v)break;g[c++>>>0]=224|N>>12,g[c++>>>0]=128|N>>6&63,g[c++>>>0]=128|63&N}else{if(c+3>=v)break;g[c++>>>0]=240|N>>18,g[c++>>>0]=128|N>>12&63,g[c++>>>0]=128|N>>6&63,g[c++>>>0]=128|63&N,C++}}g[c>>>0]=0,u=c-k}else u=0;return u},Ra=u=>{for(var c=0,v=0;v<u.length;++v){var g=u.charCodeAt(v);127>=g?c++:2047>=g?c+=2:55296<=g&&57343>=g?(c+=4,++v):c+=3}return c};function ex(u,c){cr(u>>>=0,{name:c=tr(c>>>0),Oc(v){var g=(b(),ee)[v>>>2>>>0];return g=Le(v+4,g,!0),nr(v),g},Vc(v,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var k=typeof g=="string";if(!(k||ArrayBuffer.isView(g)&&g.BYTES_PER_ELEMENT==1))throw new Dn("Cannot pass non-string to std::string");var C=k?Ra(g):g.length,N=xi(4+C+1),B=N+4;return(b(),ee)[N>>>2>>>0]=C,k?Ir(g,B,C+1):(b(),G).set(g,B>>>0),v!==null&&v.push(nr,N),N},Uc:Mo,Wc(v){nr(v)}})}var kp=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,tx=(u,c,v)=>{if(u>>>=1,16<(c=lp((b(),X),u,c/2,v))-u&&kp)return kp.decode((b(),X).slice(u,c));for(v="";u<c;++u){var g=(b(),X)[u>>>0];v+=String.fromCharCode(g)}return v},rx=(u,c,v)=>{if(v??(v=2147483647),2>v)return 0;var g=c;v=(v-=2)<2*u.length?v/2:u.length;for(var k=0;k<v;++k){var C=u.charCodeAt(k);(b(),Q)[c>>>1>>>0]=C,c+=2}return(b(),Q)[c>>>1>>>0]=0,c-g},nx=u=>2*u.length,ix=(u,c,v)=>{var g="";u>>>=2;for(var k=0;!(k>=c/4);k++){var C=(b(),ee)[u+k>>>0];if(!C&&!v)break;g+=String.fromCodePoint(C)}return g},ax=(u,c,v)=>{if(c>>>=0,v??(v=2147483647),4>v)return 0;var g=c;v=g+v-4;for(var k=0;k<u.length;++k){var C=u.codePointAt(k);if(65535<C&&k++,(b(),A)[c>>>2>>>0]=C,(c+=4)+4>v)break}return(b(),A)[c>>>2>>>0]=0,c-g},sx=u=>{for(var c=0,v=0;v<u.length;++v)65535<u.codePointAt(v)&&v++,c+=4;return c};function ox(u,c,v){if(u>>>=0,c>>>=0,v=tr(v>>>=0),c===2)var g=tx,k=rx,C=nx;else g=ix,k=ax,C=sx;cr(u,{name:v,Oc:N=>{var B=(b(),ee)[N>>>2>>>0];return B=g(N+4,B*c,!0),nr(N),B},Vc:(N,B)=>{if(typeof B!="string")throw new Dn(`Cannot pass non-string to C++ string type ${v}`);var H=C(B),Z=xi(4+H+c);return(b(),ee)[Z>>>2>>>0]=H/c,k(B,Z+4,H+c),N!==null&&N.push(nr,Z),Z},Uc:Mo,Wc(N){nr(N)}})}function lx(u,c){cr(u>>>=0,{zd:!0,name:c=tr(c>>>0),Oc:()=>{},Vc:()=>{}})}function ux(u){Fo(u>>>0,!n,1,!r,131072,!1),ep()}var Aa=u=>{if(!I)try{if(u(),!(0<ke))try{i?Wa()&&qo(w):_i(w)}catch(c){c instanceof Ce||c=="unwind"||d(0,c)}}catch(c){c instanceof Ce||c=="unwind"||d(0,c)}},dx=!Atomics.waitAsync||((qf=globalThis.navigator)==null?void 0:qf.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Bo(u){u>>>=0,dx||(Atomics.waitAsync((b(),A),u>>>2,u).value.then(Ma),u+=128,Atomics.store((b(),A),u>>>2,1))}var Ma=()=>Aa(()=>{var u=Wa();u&&(Bo(u),Yp())});function cx(u,c){(u>>>=0)==c>>>0?setTimeout(Ma):i?postMessage({Zc:u,Sc:"checkMailbox"}):(u=nn[u])&&u.postMessage({Sc:"checkMailbox"})}var Do=[];function px(u,c,v,g,k){for(c>>>=0,k>>>=0,Do.length=0,v=k>>>3,g=k+g>>>3;v<g;){var C;C=(b(),W)[v++>>>0]?(b(),W)[v++>>>0]:(b(),re)[v++>>>0],Do.push(C)}return(c?Qo[c]:rb[u])(...Do)}var fx=()=>{ke=0};function hx(u){u>>>=0,i?postMessage({Sc:"cleanupThread",Nd:u}):Jc(nn[u])}function mx(u){}var Ba=u=>{try{u()}catch(c){F(c)}};function gx(u){var c=(...v)=>{Da.push(u);try{return u(...v)}finally{I||(Da.pop(),rr&&zr===1&&Da.length===0&&(zr=0,ke+=1,Ba(Wf),typeof Fibers<"u"&&Fibers.Zd()))}};return Cp.set(u,c),c}var zr=0,rr=null,Ep=0,Da=[],Po=new Map,Tp=new Map,Cp=new Map,yx=0,Lo=null,vx=[],Ip=u=>function(c){if(!I){if(zr===0){var v=!1,g=!1;c((k=0)=>{if(!I&&(Ep=k,v=!0,g)){zr=2,Ba(()=>jf(rr)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),k=!1;try{var C=function(){var H=(b(),A)[rr+8>>>2>>>0];return H=Tp.get(H),H=Cp.get(H),--ke,H()}()}catch(H){C=H,k=!0}var N=!1;if(!rr){var B=Lo;B&&(Lo=null,(k?B.reject:B.resolve)(C),N=!0)}if(k&&!N)throw C}}),g=!0,v||(zr=1,rr=function(){var k=xi(65548),C=k+12;if((b(),ee)[k>>>2>>>0]=C,(b(),ee)[k+4>>>2>>>0]=C+65536,C=Da[0],!Po.has(C)){var N=yx++;Po.set(C,N),Tp.set(N,C)}return C=Po.get(C),(b(),A)[k+8>>>2>>>0]=C,k}(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Ba(()=>Uf(rr)))}else zr===2?(zr=0,Ba(Vf),nr(rr),rr=null,vx.forEach(Aa)):F(`invalid state: ${zr}`);return Ep}}(c=>{u().then(c)});function _x(u){return u>>>=0,Ip(async()=>{var c=await Nt(u);return Lt(c)})}var Uo=[],wx=u=>{var c=Uo.length;return Uo.push(u),c},$x=(u,c)=>{for(var v=Array(u),g=0;g<u;++g){var k=g,C=(b(),ee)[c+4*g>>>2>>>0],N=Ro[C];if(N===void 0)throw u=`parameter ${g}`,C=Hp(C),c=tr(C),nr(C),new Dn(`${u} has unknown type ${c}`);v[k]=N}return v},xx=(u,c,v)=>{var g=[];return u=u(g,v),g.length&&((b(),ee)[c>>>2>>>0]=Lt(g)),u},bx={},Pa=u=>{var c=bx[u];return c===void 0?tr(u):c};function Sx(u,c,v){var[g,...k]=$x(u,c>>>0);c=g.Vc.bind(g);var C=k.map(H=>H.Uc.bind(H));u--;var N={toValue:Nt};switch(u=C.map((H,Z)=>{var de=`argFromPtr${Z}`;return N[de]=H,`${de}(args${Z?"+"+8*Z:""})`}),v){case 0:var B="toValue(handle)";break;case 2:B="new (toValue(handle))";break;case 3:B="";break;case 1:N.getStringOrSymbol=Pa,B="toValue(handle)[getStringOrSymbol(methodName)]"}return B+=`(${u})`,g.zd||(N.toReturnWire=c,N.emval_returnValue=xx,B=`return emval_returnValue(toReturnWire, destructorsRef, ${B})`),B=`return function (handle, methodName, destructorsRef, args) {
  ${B}
  }`,v=new Function(Object.keys(N),B)(...Object.values(N)),B=`methodCaller<(${k.map(H=>H.name)}) => ${g.name}>`,wx(Object.defineProperty(v,"name",{value:B}))}function kx(u,c){return c>>>=0,(u=Nt(u>>>0))==Nt(c)}function Ex(u){return(u>>>=0)?(u=Pa(u),Lt(globalThis[u])):Lt(globalThis)}function Tx(u){return u=Pa(u>>>0),Lt(t[u])}function Cx(u,c){return c>>>=0,u=Nt(u>>>0),c=Nt(c),Lt(u[c])}function Ix(u){9<(u>>>=0)&&(an[u+1]+=1)}function zp(u,c,v,g,k){return Uo[u>>>0](c>>>0,v>>>0,g>>>0,k>>>0)}function zx(u,c,v,g,k){return zp(u>>>0,c>>>0,v>>>0,g>>>0,k>>>0)}function Nx(){return Lt([])}function Ox(u){u=Nt(u>>>0);for(var c=Array(u.length),v=0;v<u.length;v++)c[v]=u[v];return Lt(c)}function Rx(u){return Lt(Pa(u>>>0))}function Ax(){return Lt({})}function Mx(u){for(var c=Nt(u>>>=0);c.length;){var v=c.pop();c.pop()(v)}Ao(u)}function Bx(u,c,v){c>>>=0,v>>>=0,u=Nt(u>>>0),c=Nt(c),v=Nt(v),u[c]=v}function Dx(u,c){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),c>>>=0,u=new Date(1e3*u),(b(),A)[c>>>2>>>0]=u.getUTCSeconds(),(b(),A)[c+4>>>2>>>0]=u.getUTCMinutes(),(b(),A)[c+8>>>2>>>0]=u.getUTCHours(),(b(),A)[c+12>>>2>>>0]=u.getUTCDate(),(b(),A)[c+16>>>2>>>0]=u.getUTCMonth(),(b(),A)[c+20>>>2>>>0]=u.getUTCFullYear()-1900,(b(),A)[c+24>>>2>>>0]=u.getUTCDay(),u=(u.getTime()-Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(b(),A)[c+28>>>2>>>0]=u}var Np=u=>u%4==0&&(u%100!=0||u%400==0),Op=[0,31,60,91,121,152,182,213,244,274,305,335],Rp=[0,31,59,90,120,151,181,212,243,273,304,334];function Px(u,c){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),c>>>=0,u=new Date(1e3*u),(b(),A)[c>>>2>>>0]=u.getSeconds(),(b(),A)[c+4>>>2>>>0]=u.getMinutes(),(b(),A)[c+8>>>2>>>0]=u.getHours(),(b(),A)[c+12>>>2>>>0]=u.getDate(),(b(),A)[c+16>>>2>>>0]=u.getMonth(),(b(),A)[c+20>>>2>>>0]=u.getFullYear()-1900,(b(),A)[c+24>>>2>>>0]=u.getDay();var v=(Np(u.getFullYear())?Op:Rp)[u.getMonth()]+u.getDate()-1|0;(b(),A)[c+28>>>2>>>0]=v,(b(),A)[c+36>>>2>>>0]=-60*u.getTimezoneOffset(),v=new Date(u.getFullYear(),6,1).getTimezoneOffset();var g=new Date(u.getFullYear(),0,1).getTimezoneOffset();u=0|(v!=g&&u.getTimezoneOffset()==Math.min(g,v)),(b(),A)[c+32>>>2>>>0]=u}function Lx(u){u>>>=0;var c=new Date((b(),A)[u+20>>>2>>>0]+1900,(b(),A)[u+16>>>2>>>0],(b(),A)[u+12>>>2>>>0],(b(),A)[u+8>>>2>>>0],(b(),A)[u+4>>>2>>>0],(b(),A)[u>>>2>>>0],0),v=(b(),A)[u+32>>>2>>>0],g=c.getTimezoneOffset(),k=new Date(c.getFullYear(),6,1).getTimezoneOffset(),C=new Date(c.getFullYear(),0,1).getTimezoneOffset(),N=Math.min(C,k);return 0>v?(b(),A)[u+32>>>2>>>0]=+(k!=C&&N==g):0<v!=(N==g)&&(k=Math.max(C,k),c.setTime(c.getTime()+6e4*((0<v?N:k)-g))),(b(),A)[u+24>>>2>>>0]=c.getDay(),v=(Np(c.getFullYear())?Op:Rp)[c.getMonth()]+c.getDate()-1|0,(b(),A)[u+28>>>2>>>0]=v,(b(),A)[u>>>2>>>0]=c.getSeconds(),(b(),A)[u+4>>>2>>>0]=c.getMinutes(),(b(),A)[u+8>>>2>>>0]=c.getHours(),(b(),A)[u+12>>>2>>>0]=c.getDate(),(b(),A)[u+16>>>2>>>0]=c.getMonth(),(b(),A)[u+20>>>2>>>0]=c.getYear(),u=c.getTime(),BigInt(isNaN(u)?-1:u/1e3)}function Ap(u,c,v,g,k,C,N){return i?oe(16,1,u,c,v,g,k,C,N):-52}function Mp(u,c,v,g,k,C){if(i)return oe(17,1,u,c,v,g,k,C)}var $i={},Ux=()=>performance.timeOrigin+performance.now();function Bp(u,c){if(i)return oe(18,1,u,c);if($i[u]&&(clearTimeout($i[u].id),delete $i[u]),!c)return 0;var v=setTimeout(()=>{delete $i[u],Aa(()=>Zp(u,performance.timeOrigin+performance.now()))},c);return $i[u]={id:v,Yd:c},0}function Wx(u,c,v,g){u>>>=0,c>>>=0,v>>>=0,g>>>=0;var k=new Date().getFullYear(),C=new Date(k,0,1).getTimezoneOffset();k=new Date(k,6,1).getTimezoneOffset();var N=Math.max(C,k);(b(),ee)[u>>>2>>>0]=60*N,(b(),A)[c>>>2>>>0]=+(C!=k),u=(c=B=>{var H=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(H/60)).padStart(2,"0")}${String(H%60).padStart(2,"0")}`})(C),c=c(k),k<C?(Ir(u,v,17),Ir(c,g,17)):(Ir(u,g,17),Ir(c,v,17))}var jx=()=>Date.now();function Vx(u,c,v){return v>>>=0,0<=u&&3>=u?(u===0?u=Date.now():u=performance.timeOrigin+performance.now(),u=Math.round(1e6*u),(b(),W)[v>>>3>>>0]=BigInt(u),0):28}var Wo=[],Dp=(u,c)=>{Wo.length=0;for(var v;v=(b(),G)[u++>>>0];){var g=v!=105;c+=(g&=v!=112)&&c%8?4:0,Wo.push(v==112?(b(),ee)[c>>>2>>>0]:v==106?(b(),W)[c>>>3>>>0]:v==105?(b(),A)[c>>>2>>>0]:(b(),re)[c>>>3>>>0]),c+=g?8:4}return Wo};function Fx(u,c,v){return u>>>=0,c=Dp(c>>>0,v>>>0),Qo[u](...c)}function qx(u,c,v){return u>>>=0,c=Dp(c>>>0,v>>>0),Qo[u](...c)}var Hx=()=>{};function Gx(u,c){return T(Le(u>>>0,c>>>0))}var Kx=()=>{throw ke+=1,"unwind"};function Qx(){return 4294901760}var Xx=()=>navigator.hardwareConcurrency,sn={},La=u=>{var c;return(c=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(u))?+c[1]:(c=/:(\d+):\d+(?:\)|$)/.exec(u))?2147483648|+c[1]:0},Pp=u=>{for(var c of u)(u=La(c))&&(sn[u]=c)};function Zx(){var u=Error().stack.toString().split(`
`);return u[0]=="Error"&&u.shift(),Pp(u),sn.gd=La(u[3]),sn.Jd=u,sn.gd}function Ua(u){if(!(u=sn[u>>>0]))return 0;var c;if(c=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(u))u=c[1];else if(c=/^\s+at (.*) \(.*\)$/.exec(u))u=c[1];else{if(!(c=/^(.+?)@/.exec(u)))return 0;u=c[1]}nr(Ua.hd??0),c=Ra(u)+1;var v=xi(c);return v&&Ir(u,v,c),Ua.hd=v,Ua.hd}function Yx(u){u>>>=0;var c=(b(),G).length;if(u<=c||4294901760<u)return!1;for(var v=1;4>=v;v*=2){var g=c*(1+.2/v);g=Math.min(g,u+100663296);e:{g=(Math.min(4294901760,65536*Math.ceil(Math.max(u,g)/65536))-Cr.buffer.byteLength+65535)/65536|0;try{Cr.grow(g),V();var k=1;break e}catch{}k=void 0}if(k)return!0}return!1}function Jx(u,c,v){if(u>>>=0,c>>>=0,sn.gd==u)var g=sn.Jd;else(g=Error().stack.toString().split(`
`))[0]=="Error"&&g.shift(),Pp(g);for(var k=3;g[k]&&La(g[k])!=u;)++k;for(u=0;u<v&&g[u+k];++u)(b(),A)[c+4*u>>>2>>>0]=La(g[u+k]);return u}var jo,Vo={},Lp=()=>{var g;if(!jo){var u,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((g=globalThis.navigator)==null?void 0:g.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(u in Vo)Vo[u]===void 0?delete c[u]:c[u]=Vo[u];var v=[];for(u in c)v.push(`${u}=${c[u]}`);jo=v}return jo};function Up(u,c){if(i)return oe(19,1,u,c);u>>>=0,c>>>=0;var v,g=0,k=0;for(v of Lp()){var C=c+g;(b(),ee)[u+k>>>2>>>0]=C,g+=Ir(v,C,1/0)+1,k+=4}return 0}function Wp(u,c){if(i)return oe(20,1,u,c);u>>>=0,c>>>=0;var v=Lp();for(var g of((b(),ee)[u>>>2>>>0]=v.length,u=0,v))u+=Ra(g)+1;return(b(),ee)[c>>>2>>>0]=u,0}function jp(u){return i?oe(21,1,u):52}function Vp(u,c,v,g){return i?oe(22,1,u,c,v,g):52}function Fp(u,c,v,g){return i?oe(23,1,u,c,v,g):70}var eb=[null,[],[]];function qp(u,c,v,g){if(i)return oe(24,1,u,c,v,g);c>>>=0,v>>>=0,g>>>=0;for(var k=0,C=0;C<v;C++){var N=(b(),ee)[c>>>2>>>0],B=(b(),ee)[c+4>>>2>>>0];c+=8;for(var H=0;H<B;H++){var Z=u,de=(b(),G)[N+H>>>0],ye=eb[Z];de===0||de===10?((Z===1?S:T)(up(ye)),ye.length=0):ye.push(de)}k+=B}return(b(),ee)[g>>>2>>>0]=k,0}function tb(u){return u>>>0}i||function(){for(var u=t.numThreads-1;u--;)rp();ct.push(async()=>{var c=async function(){if(!i)return Promise.all(Tr.map(tp))}();wt++,await c,--wt==0&&pt&&(c=pt,pt=null,c())})}(),i||(Cr=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),V()),t.wasmBinary&&(h=t.wasmBinary),t.stackSave=()=>pe(),t.stackRestore=u=>ce(u),t.stackAlloc=u=>Ho(u),t.setValue=function(u,c,v="i8"){switch(v.endsWith("*")&&(v="*"),v){case"i1":case"i8":(b(),M)[u>>>0]=c;break;case"i16":(b(),Q)[u>>>1>>>0]=c;break;case"i32":(b(),A)[u>>>2>>>0]=c;break;case"i64":(b(),W)[u>>>3>>>0]=BigInt(c);break;case"float":(b(),J)[u>>>2>>>0]=c;break;case"double":(b(),re)[u>>>3>>>0]=c;break;case"*":(b(),ee)[u>>>2>>>0]=c;break;default:F(`invalid type for setValue: ${v}`)}},t.getValue=function(u,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return(b(),M)[u>>>0];case"i16":return(b(),Q)[u>>>1>>>0];case"i32":return(b(),A)[u>>>2>>>0];case"i64":return(b(),W)[u>>>3>>>0];case"float":return(b(),J)[u>>>2>>>0];case"double":return(b(),re)[u>>>3>>>0];case"*":return(b(),ee)[u>>>2>>>0];default:F(`invalid type for getValue: ${c}`)}},t.UTF8ToString=Le,t.stringToUTF8=Ir,t.lengthBytesUTF8=Ra;var Hp,Gp,Wa,nr,xi,Fo,Kp,Qp,Xp,qo,Zp,Yp,fe,bi,Jp,ce,Ho,pe,ef,Go,tf,rf,nf,Ko,af,sf,of,lf,uf,df,cf,pf,ff,hf,mf,gf,yf,vf,_f,wf,$f,xf,bf,Sf,kf,Ef,Tf,Cf,If,zf,Nf,Of,Rf,Af,Mf,Bf,Df,Pf,Lf,Uf,Wf,jf,Vf,pr,rb=[$t,za,ap,dp,cp,pp,fp,hp,mp,gp,yp,vp,_p,wp,$p,xp,Ap,Mp,Bp,Up,Wp,jp,Vp,Fp,qp],Qo={1003524:(u,c,v,g,k)=>{if(t===void 0||!t.Xc)return 1;if((u=Le(Number(u>>>0))).startsWith("./")&&(u=u.substring(2)),!(u=t.Xc.get(u)))return 2;if(c=Number(c>>>0),v=Number(v>>>0),g=Number(g>>>0),c+v>u.byteLength)return 3;try{let C=u.subarray(c,c+v);switch(k){case 0:(b(),G).set(C,g>>>0);break;case 1:t.Qd?t.Qd(g,C):t.Id(g,C);break;default:return 4}return 0}catch{return 4}},1004348:(u,c,v)=>{t.td(u,(b(),G).subarray(c>>>0,c+v>>>0))},1004412:()=>t.Sd(),1004454:u=>{t.sd(u)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:u=>t.Ad(u),1004609:u=>t.Ed(u),1004641:(u,c,v)=>{t.ed(Number(u),Number(c),Number(v),!0)},1004704:(u,c,v)=>{t.ed(Number(u),Number(c),Number(v))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:u=>{t.$b("Abs",u,void 0)},1004869:u=>{t.$b("Neg",u,void 0)},1004920:u=>{t.$b("Floor",u,void 0)},1004973:u=>{t.$b("Ceil",u,void 0)},1005025:u=>{t.$b("Reciprocal",u,void 0)},1005083:u=>{t.$b("Sqrt",u,void 0)},1005135:u=>{t.$b("Exp",u,void 0)},1005186:u=>{t.$b("Erf",u,void 0)},1005237:u=>{t.$b("Sigmoid",u,void 0)},1005292:(u,c,v)=>{t.$b("HardSigmoid",u,{alpha:c,beta:v})},1005371:u=>{t.$b("Log",u,void 0)},1005422:u=>{t.$b("Sin",u,void 0)},1005473:u=>{t.$b("Cos",u,void 0)},1005524:u=>{t.$b("Tan",u,void 0)},1005575:u=>{t.$b("Asin",u,void 0)},1005627:u=>{t.$b("Acos",u,void 0)},1005679:u=>{t.$b("Atan",u,void 0)},1005731:u=>{t.$b("Sinh",u,void 0)},1005783:u=>{t.$b("Cosh",u,void 0)},1005835:u=>{t.$b("Asinh",u,void 0)},1005888:u=>{t.$b("Acosh",u,void 0)},1005941:u=>{t.$b("Atanh",u,void 0)},1005994:u=>{t.$b("Tanh",u,void 0)},1006046:u=>{t.$b("Not",u,void 0)},1006097:(u,c,v)=>{t.$b("Clip",u,{min:c,max:v})},1006166:u=>{t.$b("Clip",u,void 0)},1006218:(u,c)=>{t.$b("Elu",u,{alpha:c})},1006276:u=>{t.$b("Gelu",u,void 0)},1006328:u=>{t.$b("Relu",u,void 0)},1006380:(u,c)=>{t.$b("LeakyRelu",u,{alpha:c})},1006444:(u,c)=>{t.$b("ThresholdedRelu",u,{alpha:c})},1006514:(u,c)=>{t.$b("Cast",u,{to:c})},1006572:u=>{t.$b("Add",u,void 0)},1006623:u=>{t.$b("Sub",u,void 0)},1006674:u=>{t.$b("Mul",u,void 0)},1006725:u=>{t.$b("Div",u,void 0)},1006776:u=>{t.$b("Pow",u,void 0)},1006827:u=>{t.$b("Equal",u,void 0)},1006880:u=>{t.$b("Greater",u,void 0)},1006935:u=>{t.$b("GreaterOrEqual",u,void 0)},1006997:u=>{t.$b("Less",u,void 0)},1007049:u=>{t.$b("LessOrEqual",u,void 0)},1007108:(u,c,v,g,k)=>{t.$b("ReduceMean",u,{keepDims:!!c,noopWithEmptyAxes:!!v,axes:g?Array.from((b(),A).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},1007283:(u,c,v,g,k)=>{t.$b("ReduceMax",u,{keepDims:!!c,noopWithEmptyAxes:!!v,axes:g?Array.from((b(),A).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},1007457:(u,c,v,g,k)=>{t.$b("ReduceMin",u,{keepDims:!!c,noopWithEmptyAxes:!!v,axes:g?Array.from((b(),A).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},1007631:(u,c,v,g,k)=>{t.$b("ReduceProd",u,{keepDims:!!c,noopWithEmptyAxes:!!v,axes:g?Array.from((b(),A).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},1007806:(u,c,v,g,k)=>{t.$b("ReduceSum",u,{keepDims:!!c,noopWithEmptyAxes:!!v,axes:g?Array.from((b(),A).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},1007980:(u,c,v,g,k)=>{t.$b("ReduceL1",u,{keepDims:!!c,noopWithEmptyAxes:!!v,axes:g?Array.from((b(),A).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},1008153:(u,c,v,g,k)=>{t.$b("ReduceL2",u,{keepDims:!!c,noopWithEmptyAxes:!!v,axes:g?Array.from((b(),A).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},1008326:(u,c,v,g,k)=>{t.$b("ReduceLogSum",u,{keepDims:!!c,noopWithEmptyAxes:!!v,axes:g?Array.from((b(),A).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},1008503:(u,c,v,g,k)=>{t.$b("ReduceSumSquare",u,{keepDims:!!c,noopWithEmptyAxes:!!v,axes:g?Array.from((b(),A).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},1008683:(u,c,v,g,k)=>{t.$b("ReduceLogSumExp",u,{keepDims:!!c,noopWithEmptyAxes:!!v,axes:g?Array.from((b(),A).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},1008863:u=>{t.$b("Where",u,void 0)},1008916:(u,c,v)=>{t.$b("Transpose",u,{perm:c?Array.from((b(),A).subarray(Number(c)>>>0,Number(v)>>>0)):[]})},1009040:(u,c,v,g)=>{t.$b("DepthToSpace",u,{blocksize:c,mode:Le(v),format:g?"NHWC":"NCHW"})},1009173:(u,c,v,g)=>{t.$b("DepthToSpace",u,{blocksize:c,mode:Le(v),format:g?"NHWC":"NCHW"})},1009306:(u,c,v,g,k,C,N,B,H,Z,de,ye,xe,Ee,Nr)=>{t.$b("ConvTranspose",u,{format:H?"NHWC":"NCHW",autoPad:c,dilations:[v],group:g,kernelShape:[k],pads:[C,N],strides:[B],wIsConst:()=>!!(b(),M)[Z>>>0],outputPadding:de?Array.from((b(),A).subarray(Number(de)>>>0,Number(ye)>>>0)):[],outputShape:xe?Array.from((b(),A).subarray(Number(xe)>>>0,Number(Ee)>>>0)):[],activation:Le(Nr)})},1009739:(u,c,v,g,k,C,N,B,H,Z,de,ye,xe,Ee)=>{t.$b("ConvTranspose",u,{format:B?"NHWC":"NCHW",autoPad:c,dilations:Array.from((b(),A).subarray(Number(v)>>>0,(Number(v)>>>0)+2>>>0)),group:g,kernelShape:Array.from((b(),A).subarray(Number(k)>>>0,(Number(k)>>>0)+2>>>0)),pads:Array.from((b(),A).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((b(),A).subarray(Number(N)>>>0,(Number(N)>>>0)+2>>>0)),wIsConst:()=>!!(b(),M)[H>>>0],outputPadding:Z?Array.from((b(),A).subarray(Number(Z)>>>0,Number(de)>>>0)):[],outputShape:ye?Array.from((b(),A).subarray(Number(ye)>>>0,Number(xe)>>>0)):[],activation:Le(Ee)})},1010400:(u,c,v,g,k,C,N,B,H,Z,de,ye,xe,Ee,Nr)=>{t.$b("ConvTranspose",u,{format:H?"NHWC":"NCHW",autoPad:c,dilations:[v],group:g,kernelShape:[k],pads:[C,N],strides:[B],wIsConst:()=>!!(b(),M)[Z>>>0],outputPadding:de?Array.from((b(),A).subarray(Number(de)>>>0,Number(ye)>>>0)):[],outputShape:xe?Array.from((b(),A).subarray(Number(xe)>>>0,Number(Ee)>>>0)):[],activation:Le(Nr)})},1010833:(u,c,v,g,k,C,N,B,H,Z,de,ye,xe,Ee)=>{t.$b("ConvTranspose",u,{format:B?"NHWC":"NCHW",autoPad:c,dilations:Array.from((b(),A).subarray(Number(v)>>>0,(Number(v)>>>0)+2>>>0)),group:g,kernelShape:Array.from((b(),A).subarray(Number(k)>>>0,(Number(k)>>>0)+2>>>0)),pads:Array.from((b(),A).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((b(),A).subarray(Number(N)>>>0,(Number(N)>>>0)+2>>>0)),wIsConst:()=>!!(b(),M)[H>>>0],outputPadding:Z?Array.from((b(),A).subarray(Number(Z)>>>0,Number(de)>>>0)):[],outputShape:ye?Array.from((b(),A).subarray(Number(ye)>>>0,Number(xe)>>>0)):[],activation:Le(Ee)})},1011494:(u,c)=>{t.$b("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},1011585:(u,c,v,g,k,C,N,B,H,Z,de,ye,xe,Ee)=>{t.$b("AveragePool",u,{format:Ee?"NHWC":"NCHW",auto_pad:c,ceil_mode:v,count_include_pad:g,storage_order:k,dilations:C?Array.from((b(),A).subarray(Number(C)>>>0,Number(N)>>>0)):[],kernel_shape:B?Array.from((b(),A).subarray(Number(B)>>>0,Number(H)>>>0)):[],pads:Z?Array.from((b(),A).subarray(Number(Z)>>>0,Number(de)>>>0)):[],strides:ye?Array.from((b(),A).subarray(Number(ye)>>>0,Number(xe)>>>0)):[]})},1012064:(u,c)=>{t.$b("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},1012155:(u,c,v,g,k,C,N,B,H,Z,de,ye,xe,Ee)=>{t.$b("AveragePool",u,{format:Ee?"NHWC":"NCHW",auto_pad:c,ceil_mode:v,count_include_pad:g,storage_order:k,dilations:C?Array.from((b(),A).subarray(Number(C)>>>0,Number(N)>>>0)):[],kernel_shape:B?Array.from((b(),A).subarray(Number(B)>>>0,Number(H)>>>0)):[],pads:Z?Array.from((b(),A).subarray(Number(Z)>>>0,Number(de)>>>0)):[],strides:ye?Array.from((b(),A).subarray(Number(ye)>>>0,Number(xe)>>>0)):[]})},1012634:(u,c)=>{t.$b("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},1012721:(u,c,v,g,k,C,N,B,H,Z,de,ye,xe,Ee)=>{t.$b("MaxPool",u,{format:Ee?"NHWC":"NCHW",auto_pad:c,ceil_mode:v,count_include_pad:g,storage_order:k,dilations:C?Array.from((b(),A).subarray(Number(C)>>>0,Number(N)>>>0)):[],kernel_shape:B?Array.from((b(),A).subarray(Number(B)>>>0,Number(H)>>>0)):[],pads:Z?Array.from((b(),A).subarray(Number(Z)>>>0,Number(de)>>>0)):[],strides:ye?Array.from((b(),A).subarray(Number(ye)>>>0,Number(xe)>>>0)):[]})},1013196:(u,c)=>{t.$b("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},1013283:(u,c,v,g,k,C,N,B,H,Z,de,ye,xe,Ee)=>{t.$b("MaxPool",u,{format:Ee?"NHWC":"NCHW",auto_pad:c,ceil_mode:v,count_include_pad:g,storage_order:k,dilations:C?Array.from((b(),A).subarray(Number(C)>>>0,Number(N)>>>0)):[],kernel_shape:B?Array.from((b(),A).subarray(Number(B)>>>0,Number(H)>>>0)):[],pads:Z?Array.from((b(),A).subarray(Number(Z)>>>0,Number(de)>>>0)):[],strides:ye?Array.from((b(),A).subarray(Number(ye)>>>0,Number(xe)>>>0)):[]})},1013758:(u,c,v,g,k)=>{t.$b("Gemm",u,{alpha:c,beta:v,transA:g,transB:k})},1013862:u=>{t.$b("MatMul",u,void 0)},1013916:(u,c,v,g)=>{t.$b("ArgMax",u,{keepDims:!!c,selectLastIndex:!!v,axis:g})},1014024:(u,c,v,g)=>{t.$b("ArgMin",u,{keepDims:!!c,selectLastIndex:!!v,axis:g})},1014132:(u,c)=>{t.$b("Softmax",u,{axis:c})},1014195:(u,c)=>{t.$b("Concat",u,{axis:c})},1014255:(u,c,v,g,k)=>{t.$b("Split",u,{axis:c,numOutputs:v,splitSizes:g?Array.from((b(),A).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},1014411:u=>{t.$b("Expand",u,void 0)},1014465:(u,c)=>{t.$b("Gather",u,{axis:Number(c)})},1014536:(u,c)=>{t.$b("GatherElements",u,{axis:Number(c)})},1014615:(u,c)=>{t.$b("GatherND",u,{batch_dims:Number(c)})},1014694:(u,c,v,g,k,C,N,B,H,Z,de)=>{t.$b("Resize",u,{antialias:c,axes:v?Array.from((b(),A).subarray(Number(v)>>>0,Number(g)>>>0)):[],coordinateTransformMode:Le(k),cubicCoeffA:C,excludeOutside:N,extrapolationValue:B,keepAspectRatioPolicy:Le(H),mode:Le(Z),nearestMode:Le(de)})},1015056:(u,c,v,g,k,C,N)=>{t.$b("Slice",u,{starts:c?Array.from((b(),A).subarray(Number(c)>>>0,Number(v)>>>0)):[],ends:g?Array.from((b(),A).subarray(Number(g)>>>0,Number(k)>>>0)):[],axes:C?Array.from((b(),A).subarray(Number(C)>>>0,Number(N)>>>0)):[]})},1015320:u=>{t.$b("Tile",u,void 0)},1015372:(u,c,v)=>{t.$b("InstanceNormalization",u,{epsilon:c,format:v?"NHWC":"NCHW"})},1015486:(u,c,v)=>{t.$b("InstanceNormalization",u,{epsilon:c,format:v?"NHWC":"NCHW"})},1015600:u=>{t.$b("Range",u,void 0)},1015653:(u,c)=>{t.$b("Einsum",u,{equation:Le(c)})},1015734:(u,c,v,g,k)=>{t.$b("Pad",u,{mode:c,value:v,pads:g?Array.from((b(),A).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},1015877:(u,c,v,g,k,C)=>{t.$b("BatchNormalization",u,{epsilon:c,momentum:v,spatial:!!k,trainingMode:!!g,format:C?"NHWC":"NCHW"})},1016046:(u,c,v,g,k,C)=>{t.$b("BatchNormalization",u,{epsilon:c,momentum:v,spatial:!!k,trainingMode:!!g,format:C?"NHWC":"NCHW"})},1016215:(u,c,v)=>{t.$b("CumSum",u,{exclusive:Number(c),reverse:Number(v)})},1016312:(u,c,v)=>{t.$b("DequantizeLinear",u,{axis:c,blockSize:v})},1016402:(u,c,v,g,k)=>{t.$b("GridSample",u,{align_corners:c,mode:Le(v),padding_mode:Le(g),format:k?"NHWC":"NCHW"})},1016572:(u,c,v,g,k)=>{t.$b("GridSample",u,{align_corners:c,mode:Le(v),padding_mode:Le(g),format:k?"NHWC":"NCHW"})},1016742:(u,c)=>{t.$b("ScatterND",u,{reduction:Le(c)})},1016827:(u,c,v,g,k,C,N,B,H)=>{t.$b("Attention",u,{numHeads:c,isUnidirectional:v,maskFilterValue:g,scale:k,doRotary:C,qkvHiddenSizes:N?Array.from((b(),A).subarray(Number(B)>>>0,Number(B)+N>>>0)):[],pastPresentShareBuffer:!!H})},1017099:u=>{t.$b("BiasAdd",u,void 0)},1017154:u=>{t.$b("BiasSplitGelu",u,void 0)},1017215:u=>{t.$b("FastGelu",u,void 0)},1017271:(u,c,v,g,k,C,N,B,H,Z,de,ye,xe,Ee,Nr,Xo)=>{t.$b("Conv",u,{format:ye?"NHWC":"NCHW",auto_pad:c,dilations:v?Array.from((b(),A).subarray(Number(v)>>>0,Number(g)>>>0)):[],group:k,kernel_shape:C?Array.from((b(),A).subarray(Number(C)>>>0,Number(N)>>>0)):[],pads:B?Array.from((b(),A).subarray(Number(B)>>>0,Number(H)>>>0)):[],strides:Z?Array.from((b(),A).subarray(Number(Z)>>>0,Number(de)>>>0)):[],w_is_const:()=>!!(b(),M)[Number(xe)>>>0],activation:Le(Ee),activation_params:Nr?Array.from((b(),J).subarray(Number(Nr)>>>0,Number(Xo)>>>0)):[]})},1017855:u=>{t.$b("Gelu",u,void 0)},1017907:(u,c,v,g,k,C,N,B,H)=>{t.$b("GroupQueryAttention",u,{numHeads:c,kvNumHeads:v,scale:g,softcap:k,doRotary:C,rotaryInterleaved:N,smoothSoftmax:B,localWindowSize:H})},1018124:(u,c,v,g)=>{t.$b("LayerNormalization",u,{axis:c,epsilon:v,simplified:!!g})},1018235:(u,c,v,g)=>{t.$b("LayerNormalization",u,{axis:c,epsilon:v,simplified:!!g})},1018346:(u,c,v,g,k,C)=>{t.$b("MatMulNBits",u,{k:c,n:v,accuracyLevel:g,bits:k,blockSize:C})},1018473:(u,c,v,g,k,C)=>{t.$b("MultiHeadAttention",u,{numHeads:c,isUnidirectional:v,maskFilterValue:g,scale:k,doRotary:C})},1018632:(u,c)=>{t.$b("QuickGelu",u,{alpha:c})},1018696:(u,c,v,g,k)=>{t.$b("RotaryEmbedding",u,{interleaved:!!c,numHeads:v,rotaryEmbeddingDim:g,scale:k})},1018835:(u,c,v)=>{t.$b("SkipLayerNormalization",u,{epsilon:c,simplified:!!v})},1018937:(u,c,v)=>{t.$b("SkipLayerNormalization",u,{epsilon:c,simplified:!!v})},1019039:(u,c,v,g)=>{t.$b("GatherBlockQuantized",u,{gatherAxis:c,quantizeAxis:v,blockSize:g})},1019160:u=>{t.Fd(u)},1019194:(u,c)=>t.Hd(Number(u),Number(c),t.Yc.Kd,t.Yc.errors)};function nb(u,c,v){return Ip(async()=>{await t.Dd(Number(u),Number(c),Number(v))})}function ib(){return typeof wasmOffsetConverter<"u"}function ab(u,c,v,g){var k=pe();try{return pf(u,c,v,g)}catch(C){if(ce(k),C!==C+0)throw C;fe(1,0)}}function sb(u,c,v){var g=pe();try{return lf(u,c,v)}catch(k){if(ce(g),k!==k+0)throw k;fe(1,0)}}function ob(u){var c=pe();try{af(u)}catch(v){if(ce(c),v!==v+0)throw v;fe(1,0)}}function lb(u,c){var v=pe();try{return Ko(u,c)}catch(g){if(ce(v),g!==g+0)throw g;fe(1,0)}}function ub(u,c,v){var g=pe();try{nf(u,c,v)}catch(k){if(ce(g),k!==k+0)throw k;fe(1,0)}}function db(u,c){var v=pe();try{ff(u,c)}catch(g){if(ce(v),g!==g+0)throw g;fe(1,0)}}function cb(u,c,v,g,k,C,N){var B=pe();try{return df(u,c,v,g,k,C,N)}catch(H){if(ce(B),H!==H+0)throw H;fe(1,0)}}function pb(u,c,v,g,k,C){var N=pe();try{sf(u,c,v,g,k,C)}catch(B){if(ce(N),B!==B+0)throw B;fe(1,0)}}function fb(u,c,v,g){var k=pe();try{cf(u,c,v,g)}catch(C){if(ce(k),C!==C+0)throw C;fe(1,0)}}function hb(u,c,v,g,k){var C=pe();try{of(u,c,v,g,k)}catch(N){if(ce(C),N!==N+0)throw N;fe(1,0)}}function mb(u,c,v,g,k,C,N){var B=pe();try{mf(u,c,v,g,k,C,N)}catch(H){if(ce(B),H!==H+0)throw H;fe(1,0)}}function gb(u,c,v,g,k,C,N){var B=pe();try{gf(u,c,v,g,k,C,N)}catch(H){if(ce(B),H!==H+0)throw H;fe(1,0)}}function yb(u,c,v,g,k,C,N,B){var H=pe();try{wf(u,c,v,g,k,C,N,B)}catch(Z){if(ce(H),Z!==Z+0)throw Z;fe(1,0)}}function vb(u,c,v,g,k){var C=pe();try{return hf(u,c,v,g,k)}catch(N){if(ce(C),N!==N+0)throw N;fe(1,0)}}function _b(u,c,v){var g=pe();try{return $f(u,c,v)}catch(k){if(ce(g),k!==k+0)throw k;fe(1,0)}}function wb(u,c,v,g,k,C,N,B){var H=pe();try{xf(u,c,v,g,k,C,N,B)}catch(Z){if(ce(H),Z!==Z+0)throw Z;fe(1,0)}}function $b(u,c,v,g,k,C,N,B,H,Z,de,ye){var xe=pe();try{yf(u,c,v,g,k,C,N,B,H,Z,de,ye)}catch(Ee){if(ce(xe),Ee!==Ee+0)throw Ee;fe(1,0)}}function xb(u,c,v,g,k,C){var N=pe();try{return vf(u,c,v,g,k,C)}catch(B){if(ce(N),B!==B+0)throw B;fe(1,0)}}function bb(u,c,v){var g=pe();try{return bf(u,c,v)}catch(k){if(ce(g),k!==k+0)throw k;return fe(1,0),0n}}function Sb(u,c,v,g,k,C,N,B,H){var Z=pe();try{uf(u,c,v,g,k,C,N,B,H)}catch(de){if(ce(Z),de!==de+0)throw de;fe(1,0)}}function kb(u){var c=pe();try{return Sf(u)}catch(v){if(ce(c),v!==v+0)throw v;fe(1,0)}}function Eb(u,c){var v=pe();try{return Lf(u,c)}catch(g){if(ce(v),g!==g+0)throw g;return fe(1,0),0n}}function Tb(u){var c=pe();try{return kf(u)}catch(v){if(ce(c),v!==v+0)throw v;return fe(1,0),0n}}function Cb(u,c,v,g){var k=pe();try{return Nf(u,c,v,g)}catch(C){if(ce(k),C!==C+0)throw C;fe(1,0)}}function Ib(u,c,v,g,k){var C=pe();try{return Of(u,c,v,g,k)}catch(N){if(ce(C),N!==N+0)throw N;fe(1,0)}}function zb(u,c,v,g,k,C){var N=pe();try{return Rf(u,c,v,g,k,C)}catch(B){if(ce(N),B!==B+0)throw B;fe(1,0)}}function Nb(u,c,v,g,k,C){var N=pe();try{return Af(u,c,v,g,k,C)}catch(B){if(ce(N),B!==B+0)throw B;fe(1,0)}}function Ob(u,c,v,g,k,C,N,B){var H=pe();try{return _f(u,c,v,g,k,C,N,B)}catch(Z){if(ce(H),Z!==Z+0)throw Z;fe(1,0)}}function Rb(u,c,v,g,k){var C=pe();try{return Mf(u,c,v,g,k)}catch(N){if(ce(C),N!==N+0)throw N;return fe(1,0),0n}}function Ab(u,c,v,g){var k=pe();try{return Bf(u,c,v,g)}catch(C){if(ce(k),C!==C+0)throw C;fe(1,0)}}function Mb(u,c,v,g){var k=pe();try{return Df(u,c,v,g)}catch(C){if(ce(k),C!==C+0)throw C;fe(1,0)}}function Bb(u,c,v,g,k,C,N,B,H,Z,de,ye){var xe=pe();try{return Pf(u,c,v,g,k,C,N,B,H,Z,de,ye)}catch(Ee){if(ce(xe),Ee!==Ee+0)throw Ee;fe(1,0)}}function Db(u,c,v,g,k,C,N,B,H,Z,de){var ye=pe();try{If(u,c,v,g,k,C,N,B,H,Z,de)}catch(xe){if(ce(ye),xe!==xe+0)throw xe;fe(1,0)}}function Pb(u,c,v,g,k,C,N,B,H,Z,de,ye,xe,Ee,Nr,Xo){var jb=pe();try{zf(u,c,v,g,k,C,N,B,H,Z,de,ye,xe,Ee,Nr,Xo)}catch(Zo){if(ce(jb),Zo!==Zo+0)throw Zo;fe(1,0)}}function Lb(u,c,v){var g=pe();try{return Ef(u,c,v)}catch(k){if(ce(g),k!==k+0)throw k;fe(1,0)}}function Ub(u,c,v){var g=pe();try{return Tf(u,c,v)}catch(k){if(ce(g),k!==k+0)throw k;fe(1,0)}}function Wb(u,c,v,g){var k=pe();try{Cf(u,c,v,g)}catch(C){if(ce(k),C!==C+0)throw C;fe(1,0)}}function ja(){if(0<wt)pt=ja;else if(i)$==null||$(t),Y();else{for(var u=ct;0<u.length;)u.shift()(t);0<wt?pt=ja:(t.calledRun=!0,I||(Y(),$==null||$(t)))}}return i||(pr=await We(),ja()),t.PTR_SIZE=4,L?t:new Promise((u,c)=>{$=u,E=c})}var w_,im,Dk=j(()=>{var e,t;w_=nm,im=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),im&&nm()}),Il,fd,am,xt,$_,os,sm,om,zl,lm,Nl,x_,Ol,b_,Tc=j(()=>{Ec(),Il=typeof location>"u"?void 0:location.origin,fd=import.meta.url>"file:"&&import.meta.url<"file;",am=()=>{{if(fd){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Il).href}return import.meta.url}},xt=am(),$_=()=>{if(xt&&!xt.startsWith("blob:"))return xt.substring(0,xt.lastIndexOf("/")+1)},os=(e,t)=>{try{let r=t??xt;return(r?new URL(e,r):new URL(e)).origin===Il}catch{return!1}},sm=(e,t)=>{let r=t??xt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},om=(e,t)=>`${t??"./"}${e}`,zl=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},lm=async e=>(await import(e)).default,Nl=(Bk(),ba(y_)).default,x_=async()=>{if(!xt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(os(xt))return[void 0,Nl()];let e=await zl(xt);return[e,Nl(e)]},Ol=(Dk(),ba(__)).default,b_=async(e,t,r,n)=>{let i=Ol&&!(e||t);if(i)if(xt)i=os(xt)||n&&!r;else if(n&&!r)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Ol];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??sm(a,t),o=r&&s&&!os(s,t),l=o?await zl(s):s??om(a,t);return[o?l:void 0,await lm(l)]}}}),Rl,ls,Ri,Al,um,dm,cm,Cc,Se,An=j(()=>{Tc(),ls=!1,Ri=!1,Al=!1,um=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},dm=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},cm=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Cc=async e=>{if(ls)return Promise.resolve();if(Ri)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Al)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ri=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!cm())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!dm())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=um();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i==null?void 0:i.mjs,o=(s==null?void 0:s.href)??s,l=i==null?void 0:i.wasm,d=(l==null?void 0:l.href)??l,f=e.wasmBinary,[p,h]=await b_(o,a,r>1,!!f||!!d),_=!1,w=[];if(t>0&&w.push(new Promise($=>{setTimeout(()=>{_=!0,$()},t)})),w.push(new Promise(($,E)=>{let y={numThreads:r};if(f)y.wasmBinary=f,y.locateFile=m=>m;else if(d||a)y.locateFile=m=>d??a+m;else if(o&&o.indexOf("blob:")!==0)y.locateFile=m=>new URL(m,o).href;else if(p){let m=$_();m&&(y.locateFile=x=>m+x)}h(y).then(m=>{Ri=!1,ls=!0,Rl=m,$(),p&&URL.revokeObjectURL(p)},m=>{Ri=!1,Al=!0,E(m)})})),await Promise.race(w),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Se=()=>{if(ls&&Rl)return Rl;throw new Error("WebAssembly is not initialized yet.")}}),Qt,ao,$e,Ic=j(()=>{An(),Qt=(e,t)=>{let r=Se(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},ao=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,a])=>{let s=t?t+i:i;if(typeof a=="object")ao(a,s+".",r,n);else if(typeof a=="string"||typeof a=="number")n(s,a.toString());else if(typeof a=="boolean")n(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},$e=e=>{let t=Se(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);let a=Number(t.getValue(i,n===4?"i32":"i64")),s=t.getValue(i+n,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),S_,Pk=j(()=>{An(),Ic(),S_=e=>{let t=Se(),r=0,n=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=Qt(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),r===0&&$e("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&ao(e.extra,"",new WeakSet,(s,o)=>{let l=Qt(s,n),d=Qt(o,n);t._OrtAddRunConfigEntry(r,l,d)!==0&&$e(`Can't set a run config entry: ${s} - ${o}.`)}),[r,n]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(s=>t._free(s)),a}}}),pm,fm,hm,on,mm,k_,Lk=j(()=>{An(),Ic(),pm=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},fm=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},hm=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},on=(e,t,r,n)=>{let i=Qt(t,n),a=Qt(r,n);Se()._OrtAddSessionConfigEntry(e,i,a)!==0&&$e(`Can't set a session config entry: ${t} - ${r}.`)},mm=async(e,t,r)=>{let n=t.executionProviders;for(let i of n){let a=typeof i=="string"?i:i.name,s=[];switch(a){case"webnn":if(a="WEBNN",on(e,"session.disable_quant_qdq","1",r),on(e,"session.disable_qdq_constant_folding","1",r),typeof i!="string"){let p=i==null?void 0:i.deviceType;p&&on(e,"deviceType",p,r)}break;case"webgpu":if(a="JS",typeof i!="string"){let p=i;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);on(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=Qt(a,r),l=s.length,d=0,f=0;if(l>0){d=Se()._malloc(l*Se().PTR_SIZE),r.push(d),f=Se()._malloc(l*Se().PTR_SIZE),r.push(f);for(let p=0;p<l;p++)Se().setValue(d+p*Se().PTR_SIZE,s[p][0],"*"),Se().setValue(f+p*Se().PTR_SIZE,s[p][1],"*")}await Se()._OrtAppendExecutionProvider(e,o,d,f,l)!==0&&$e(`Can't append execution provider: ${a}.`)}},k_=async e=>{let t=Se(),r=0,n=[],i=e||{};hm(i);try{let a=pm(i.graphOptimizationLevel??"all"),s=fm(i.executionMode??"sequential"),o=typeof i.logId=="string"?Qt(i.logId,n):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let f=typeof i.optimizedModelFilePath=="string"?Qt(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,l,d,f),r===0&&$e("Can't create session options."),i.executionProviders&&await mm(r,i,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);on(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[p,h]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let _=Qt(p,n);t._OrtAddFreeDimensionOverride(r,_,h)!==0&&$e(`Can't set a free dimension override: ${p} - ${h}.`)}return i.extra!==void 0&&ao(i.extra,"",new WeakSet,(p,h)=>{on(r,p,h,n)}),[r,n]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&$e("Can't release session options."),n.forEach(s=>t._free(s)),a}}}),mn,gr,gn,Io,so,zc,Nc,hd,se=j(()=>{mn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},gr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},gn=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return r>0?Math.ceil(n*r):void 0},Io=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},so=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},zc=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Nc=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",hd=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Oc,E_=j(()=>{Ec(),Oc=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let l=Math.ceil(n/65536);a=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let s=0;for(;;){let{done:o,value:l}=await i.read();if(o)break;let d=l.byteLength;new Uint8Array(a,s,d).set(l),s+=d}return new Uint8Array(a,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),gm,ym,vm,_m,Rc,wm,he,kr=j(()=>{se(),gm=["V","I","W","E","F"],ym=(e,t)=>{console.log(`[${gm[e]},${new Date().toISOString()}]${t}`)},Rc=(e,t)=>{vm=e,_m=t},wm=(e,t)=>{let r=so(e),n=so(vm);r>=n&&ym(r,typeof t=="function"?t():t)},he=(...e)=>{_m&&wm(...e)}}),$m,fi,R,oo,T_,C_,I_,le=j(()=>{$m=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},fi=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(n<2||i<2)return;let o=$m.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=r?3:1;o<=a;o++){let l=n-o<0?1:e[n-o],d=i-o<0?1:t[i-o];if(l!==d&&l>1&&d>1)return;let f=Math.max(l,d);if(l&&d)s[a-o]=Math.max(l,d);else{if(f>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},R=class Os{static size(t){return Os.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),a=n-1;for(;a>=0;){if(t[a]%r===0){i[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,r/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Os.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Os.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let a=r;a<n;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,a)=>i+r[a]+r[a+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},oo=class Gi{static adjustPoolAttributes(t,r,n,i,a,s){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<n.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=n[o]||s[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)Gi.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],n[l],i[l],a,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,n,i,a,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return Gi.computeShapeHelper(t,r,l,n,i,a,s,o),l}static computeConvOutputShape(t,r,n,i,a,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return Gi.computeShapeHelper(!1,t,l,n,i,a,s,o),l}static computeShapeHelper(t,r,n,i,a,s,o,l){if(t)for(let d=0;d<r.length-2;d++)n.push(1);else for(let d=0;d<r.length-2;d++)n.push(Gi.adjustPadAndReturnShape(r[d+2],i[d],a[d],s[d],o,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,n,i,a,s,o,l){let d=n*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+i-t;return a[s]=Math.floor(l==="SAME_LOWER"?(f+1)/2:f/2),a[o]=f-a[s],Math.floor((t+f-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-d)/r+1)}},T_=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let l=-1;if(n?(o=r[0],l=1):(o=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!fi.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},C_=-34028234663852886e22,I_=34028234663852886e22}),Ac,z_=j(()=>{se(),Ac=(e,t)=>new(Io(t))(e)}),Ml,md,Bl,xm,Dl,bm,Pl,Ll,Ul,Sm,N_,Uk=j(()=>{se(),kr(),Ml=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),md=(e,t)=>{if(t==="int32")return e;let r=Ml.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=e.byteLength/n,a=new(Io(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let l=a[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Bl=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},xm=1,Dl=()=>xm++,bm=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Pl=(e,t)=>{let r=Ml.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},Ll=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Pl(this.dataType,this.tensorShape)}destroy(){he("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Bl(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},Ul=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=bm.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);he("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==Pl(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,s),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=md(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else he("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let n=(t=this.wrapper)!=null&&t.isDataConverted?Bl(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(n):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(n);return}else return n.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Sm=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Dl();return this.tensorTrackersById.set(e,new Ul(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){he("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,n,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){he("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let i=this.getMLContext(e),a=Dl(),s=new Ll({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(a,new Ul(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,n,i,a,s){let o=this.getMLContext(e);for(let[d,f]of this.freeTensors.entries())if(f.canReuseTensor(o,t,r)){he("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let p=this.freeTensors.splice(d,1)[0];return p.sessionId=e,p}he("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:n,writable:i,readable:a});return new Ll({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},N_=(...e)=>new Sm(...e)}),Ai,km,O_,Wk=j(()=>{se(),An(),z_(),Uk(),kr(),Ai=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),km=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,a)=>i===n[a]&&e[i]===t[i])},O_=class{constructor(e){this.tensorManager=N_(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Rc(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){he("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){he("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)he("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>km(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){he("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){let a=Ai.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,n,i)}async createTemporaryTensor(e,t,r){he("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=Ai.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Se().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");he("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Ac(r,t)}}registerMLTensor(e,t,r,n){let i=Ai.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,i,n);return he("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,n,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=a.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,f;switch(i.dataType){case"float32":f=new Float32Array(d);break;case"float16":f=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":f=new Int32Array(d);break;case"uint32":f=new Uint32Array(d);break;case"int64":if(s){let p=md(new Uint8Array(d),"int64");f=new Int32Array(p.buffer),i.dataType="int32"}else f=new BigInt64Array(d);break;case"uint64":f=new BigUint64Array(d);break;case"int8":f=new Int8Array(d);break;case"int4":case"uint4":case"uint8":f=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return he("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),n.constant(i,f)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=Ai.get(mn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof n>"u"?!1:r?!!(i!=null&&i.input.dataTypes.includes(n)):!!(i!=null&&i.output.dataTypes.includes(n))}flush(){}}}),Mc=j(()=>{}),Wl,us,ds,Em,Tm,jl,gd,Cm,R_,jk=j(()=>{kr(),Mc(),Wl=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),us=[],ds=e=>Math.ceil(Number(e)/16)*16,Em=e=>{for(let t=0;t<us.length;t++){let r=us[t];if(e<=r)return r}return Math.ceil(e/16)*16},Tm=1,jl=()=>Tm++,gd=async(e,t,r,n)=>{let i=ds(r),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(n){let l=n();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{a.destroy()}},Cm=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Wl)us.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,a=ds(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,n,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([d.finish()]),o.destroy(),he("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=ds(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=jl();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),he("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Em(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let s={id:jl(),type:0,buffer:n};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),he("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return he("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await gd(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Wl.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(he("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},R_=(...e)=>new Cm(...e)}),Im,we,De=j(()=>{Im=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},we=e=>new Im(e)}),hi,cs,qe,rt,ae,Re,yd,Jn,Yr,ie,Mi,D,te,A_,Bc,zm,M_,ue=j(()=>{se(),le(),hi=64,cs=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},qe=(e,t=1)=>{let r=cs(e,t);return typeof r=="string"?r:r[0]},rt=(e,t=1)=>{let r=cs(e,t);return typeof r=="string"?r:r[1]},ae=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:R.computeStrides(r)})}),t},Re=e=>e%4===0?4:e%2===0?2:1,yd=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Jn=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Yr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ie=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Mi=(e,t,r,n,i)=>{let a=typeof r=="number",s=a?r:r.length,o=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=cs(t,i),f=typeof d=="string"?d:d[1],p=typeof d=="string"?d:d[0],h={indices:l,value:f,storage:p,tensor:t},_=L=>typeof L=="string"?L:`${L}u`,w={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=a?"uniforms.":"",E=`${$}${e}_shape`,y=`${$}${e}_strides`,m="";for(let L=0;L<s-1;L++)m+=`
    let dim${L} = current / ${ie(y,L,s)};
    let rest${L} = current % ${ie(y,L,s)};
    indices[${L}] = dim${L};
    current = rest${L};
    `;m+=`indices[${s-1}] = current;`;let x=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${m}
    return indices;
  }`,S=L=>(w.offsetToIndices=!0,s<2?L:`o2i_${e}(${L})`),T=[];if(s>=2)for(let L=s-1;L>=0;L--)T.push(`${ie(y,L,s)} * (indices[${L}])`);let I=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${T.join("+")};
  }`,z=L=>(w.indicesToOffset=!0,s<2?L:`i2o_${e}(${L})`),b=(...L)=>s===0?"0u":`${h.indices}(${L.map(_).join(",")})`,O=(L,V)=>s<2?`${L}`:`${ie(L,V,s)}`,M=(L,V,Y)=>s<2?`${L}=${Y};`:`${ie(L,V,s)}=${Y};`,G={},Q=(L,V)=>{w.broadcastedIndicesToOffset=!0;let Y=`${V.name}broadcastedIndicesTo${e}Offset`;if(Y in G)return`${Y}(${L})`;let F=[];for(let ge=s-1;ge>=0;ge--){let We=V.indicesGet("outputIndices",ge+V.rank-s);F.push(`${O(y,ge)} * (${We} % ${O(E,ge)})`)}return G[Y]=`fn ${Y}(outputIndices: ${V.type.indices}) -> u32 {
             return ${F.length>0?F.join("+"):"0u"};
           }`,`${Y}(${L})`},X=(L,V)=>(()=>{if(h.storage===h.value)return`${e}[${L}]=${V};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${L}]=vec2<u32>(u32(${V}), select(0u, 0xFFFFFFFFu, ${V} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${L}]=vec2<u32>(u32(${V}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${L}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${V}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),A=L=>(()=>{if(h.storage===h.value)return`${e}[${L}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${L}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${L}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${L}] & 0xFFu), bool(${e}[${L}] & 0xFF00u), bool(${e}[${L}] & 0xFF0000u), bool(${e}[${L}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),ee=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${f} {
    return ${A(`i2o_${e}(indices)`)};
  }`,J=s<2?"":(()=>{let L=o.map(Y=>`d${Y}: u32`).join(", "),V=o.map(Y=>`d${Y}`).join(", ");return`
  fn get_${e}(${L}) -> ${f} {
    return get_${e}ByIndices(${b(V)});
  }`})(),re=(...L)=>{if(L.length!==s)throw new Error(`indices length must be ${s}`);let V=L.map(_).join(",");return s===0?A("0u"):s===1?A(V[0]):(w.get=!0,w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}(${V})`)},W=L=>s<2?A(L):(w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}ByIndices(${L})`),P=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${f}) {
    ${X(`i2o_${e}(indices)`,"value")}
  }`,K=s<2?"":(()=>{let L=o.map(Y=>`d${Y}: u32`).join(", "),V=o.map(Y=>`d${Y}`).join(", ");return`
  fn set_${e}(${L}, value: ${f}) {
    set_${e}ByIndices(${b(V)}, value);
  }`})();return{impl:()=>{let L=[],V=!1;return w.offsetToIndices&&(L.push(x),V=!0),w.indicesToOffset&&(L.push(I),V=!0),w.broadcastedIndicesToOffset&&(Object.values(G).forEach(Y=>L.push(Y)),V=!0),w.set&&(L.push(K),V=!0),w.setByIndices&&(L.push(P),V=!0),w.get&&(L.push(J),V=!0),w.getByIndices&&(L.push(ee),V=!0),!a&&V&&L.unshift(`const ${E} = ${h.indices}(${r.join(",")});`,`const ${y} = ${h.indices}(${R.computeStrides(r).join(",")});`),L.join(`
`)},type:h,offsetToIndices:S,indicesToOffset:z,broadcastedIndicesToOffset:Q,indices:b,indicesGet:O,indicesSet:M,set:(...L)=>{if(L.length!==s+1)throw new Error(`indices length must be ${s}`);let V=L[s];if(typeof V!="string")throw new Error("value must be string");let Y=L.slice(0,s).map(_).join(",");return s===0?X("0u",V):s===1?X(Y[0],V):(w.set=!0,w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}(${Y}, ${V})`)},setByOffset:X,setByIndices:(L,V)=>s<2?X(L,V):(w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}ByIndices(${L}, ${V});`),get:re,getByOffset:A,getByIndices:W,usage:n,name:e,strides:y,shape:E,rank:s}},D=(e,t,r,n=1)=>Mi(e,t,r,"input",n),te=(e,t,r,n=1)=>Mi(e,t,r,"output",n),A_=(e,t,r)=>Mi(e,t,r,"atomicOutput",1),Bc=(e,t,r,n=1)=>Mi(e,t,r,"internal",n),zm=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=hi){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{let i=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},M_=(e,t)=>new zm(e,t)}),Nm,Vl,Om,Rm,Am,Mm,Tt,B_,D_,rn=j(()=>{se(),le(),De(),ue(),Nm=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Vl=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Om=(e,t)=>R.sortBasedOnPerm(e,Vl(e.length,t)),Rm=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Am=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},Mm=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},Tt=(e,t)=>{let r=e.dataType,n=e.dims.length,i=Vl(n,t),a=Om(e.dims,i),s=e.dims,o=a,l=n<2||Mm(i,e.dims),d;if(l)return d=w=>{let $=D("input",r,s,4),E=te("output",r,o,4);return`
  ${w.registerUniform("output_size","u32").declareVariables($,E)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(w/4)}]}},getShaderSource:d};let{newShape:f,newPerm:p}=Am(e.dims,i),h=R.areEqual(p,[2,3,1]),_=R.areEqual(p,[3,1,2]);if(f.length===2||h||_){s=h?[f[0],f[1]*f[2]]:_?[f[0]*f[1],f[2]]:f,o=[s[1],s[0]];let w=16;return d=$=>{let E=D("a",r,s.length),y=te("output",r,o.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(E,y)}
  var<workgroup> tile : array<array<${y.type.value}, ${w+1}>, ${w}>;
  ${$.mainStart([w,w,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${w} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${w}u + local_id.x;
    let input_row = workgroup_id_x * ${w}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${E.getByIndices(`${E.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${w}u + local_id.x;
    let output_row = workgroup_id_y * ${w}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${y.setByIndices(`${y.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/w),y:Math.ceil(o[0]/w)},programUniforms:[{type:12,data:$},...ae(s,o)]}},getShaderSource:d}}return d=w=>{let $=D("a",r,s.length),E=te("output",r,o.length);return`
  ${w.registerUniform("output_size","u32").declareVariables($,E)}

  ${Rm(i,n,$,E)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${E.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${E.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let w=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...ae(s,o)]}},getShaderSource:d}},B_=(e,t)=>{Nm(e.inputs,t.perm),e.compute(Tt(e.inputs[0],t.perm))},D_=e=>we({perm:e.perm})}),Bm,Dm,Pm,Lm,Um,Wm,jm,Vm,Fm,qm,Wt,P_,L_,U_,W_,j_,V_,F_,q_,H_,G_,Vk=j(()=>{se(),le(),ue(),Dc(),rn(),Bm={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Dm={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Pm={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Lm={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Um=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},Wm=(e,t)=>{let r=[],n=e.length;for(let a=0;a<n;a++)t.indexOf(a)===-1&&r.push(e[a]);let i=t.map(a=>e[a]);return[r,i]},jm=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?n.push(e[i++]):n.push(1);return n},Vm=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Fm=(e,t)=>{let r=[];if(!Vm(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},qm=(e,t,r,n,i,a,s)=>{let o=r[0].dims,l=R.size(a),d=R.size(s),f=D("_A",r[0].dataType,o),p=te("output",i,a),h=64;l===1&&(h=256);let _=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,w=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(f,p)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Pm[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${Bm[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Dm[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${n==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${Lm[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Wt=(e,t,r,n)=>{let i=e.inputs.length===1?r:vd(e.inputs,r),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((_,w)=>w));let s=R.normalizeAxes(a,e.inputs[0].dims.length),o=s,l=e.inputs[0],d=Fm(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Tt(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Um(o.length,l.dims.length));let[f,p]=Wm(l.dims,o),h=f;i.keepDims&&(h=jm(f,s)),e.compute(qm(t,i.cacheKey,[l],n,e.inputs[0].dataType,h,p),{inputs:[l]})},P_=(e,t)=>{Wt(e,"ReduceMeanShared",t,"mean")},L_=(e,t)=>{Wt(e,"ReduceL1Shared",t,"l1")},U_=(e,t)=>{Wt(e,"ReduceL2Shared",t,"l2")},W_=(e,t)=>{Wt(e,"ReduceLogSumExpShared",t,"logSumExp")},j_=(e,t)=>{Wt(e,"ReduceMaxShared",t,"max")},V_=(e,t)=>{Wt(e,"ReduceMinShared",t,"min")},F_=(e,t)=>{Wt(e,"ReduceProdShared",t,"prod")},q_=(e,t)=>{Wt(e,"ReduceSumShared",t,"sum")},H_=(e,t)=>{Wt(e,"ReduceSumSquareShared",t,"sumSquare")},G_=(e,t)=>{Wt(e,"ReduceLogSumShared",t,"logSum")}}),jt,Hm,lo,vd,Vt,Gm,Km,Qm,Xm,Zm,Ym,Jm,eg,tg,rg,Ft,K_,Q_,X_,Z_,Y_,J_,ew,tw,rw,nw,Dc=j(()=>{se(),le(),De(),ue(),Vk(),jt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Hm=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],lo=(e,t,r,n,i,a,s=!1,o=!1)=>{let l=[],d=r[0].dims,f=d.length,p=R.normalizeAxes(i,f),h=!o&&p.length===0;d.forEach(($,E)=>{h||p.indexOf(E)>=0?s&&l.push(1):l.push($)});let _=l.length,w=R.size(l);return{name:e,shaderCache:t,getShaderSource:$=>{let E=[],y=D("_A",r[0].dataType,f),m=te("output",a,_),x=n(y,m,p),S=x[2];for(let T=0,I=0;T<f;T++)h||p.indexOf(T)>=0?(s&&I++,S=`for(var j${T}: u32 = 0; j${T} < ${d[T]}; j${T}++) {
                  ${x[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${y.indicesSet("input_indices",T,`j${T}`)}
                  ${S}
                }`):(E.push(`${y.indicesSet("input_indices",T,m.indicesGet("output_indices",I))};`),I++);return`

        ${$.registerUniform("output_size","u32").declareVariables(y,m)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${y.type.indices};
          let output_indices = ${m.offsetToIndices("global_idx")};

          ${E.join(`
`)}
          ${x[0]}       // init ops for reduce max/min
          ${x[1]}
          ${S}
          ${x[3]}
          ${x.length===4?m.setByOffset("global_idx","value"):x.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...ae(d,l)]})}},vd=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),we({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Vt=(e,t,r,n)=>{let i=e.inputs,a=i.length===1?r:vd(i,r);e.compute(lo(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?Hm:n,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Gm=(e,t)=>{jt(e.inputs),Vt(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Km=(e,t)=>{jt(e.inputs),Vt(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Qm=(e,t)=>{jt(e.inputs),Vt(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Xm=(e,t)=>{jt(e.inputs),Vt(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Zm=(e,t)=>{jt(e.inputs),Vt(e,"ReduceMax",t,(r,n,i)=>{let a=[];for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Ym=(e,t)=>{jt(e.inputs),Vt(e,"ReduceMean",t,(r,n,i)=>{let a=1;for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${a});`]})},Jm=(e,t)=>{jt(e.inputs),Vt(e,"ReduceMin",t,(r,n,i)=>{let a=[];for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},eg=(e,t)=>{jt(e.inputs),Vt(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},tg=(e,t)=>{jt(e.inputs),Vt(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},rg=(e,t)=>{jt(e.inputs),Vt(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ft=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?n*=e[a]:i*=e[a];return i<32&&n>1024},K_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ym(e,t):P_(e,t)},Q_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Km(e,t):L_(e,t)},X_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qm(e,t):U_(e,t)},Z_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xm(e,t):W_(e,t)},Y_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zm(e,t):j_(e,t)},J_=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jm(e,t):V_(e,t)},ew=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eg(e,t):F_(e,t)},tw=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tg(e,t):q_(e,t)},rw=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rg(e,t):H_(e,t)},nw=(e,t)=>{Ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Gm(e,t):G_(e,t)}}),Fl,iw,aw,_d,Fk=j(()=>{se(),De(),Dc(),Fl=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},iw=(e,t)=>{Fl(e.inputs);let r=(n,i,a)=>{let s=[];for(let o=0;o<n.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(lo("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},aw=(e,t)=>{Fl(e.inputs);let r=(n,i,a)=>{let s=[];for(let o=0;o<n.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(lo("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},_d=e=>we(e)}),ng,ps,ig,ag,sg,Sa,og,sw,Pc=j(()=>{se(),le(),Mc(),ue(),ng=(e,t)=>{let r=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],f=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,h=p,_=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let x of t.qkvHiddenSizes)if(x%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let w=d;if(p!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+h+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(s){if(h!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=s.dims[3])}let E=w+$,y=-1,m=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==E)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:$,kvSequenceLength:w,totalSequenceLength:E,maxSequenceLength:y,inputHiddenSize:f,hiddenSize:p,vHiddenSize:_,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:m,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ps=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,ig=(e,t,r,n,i,a,s,o)=>{let l=Re(s?1:a),d=64,f=a/l;f<d&&(d=32);let p=Math.ceil(a/l/d),h=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:f},{type:12,data:p}],_=qe(e.dataType,l),w=rt(1,l),$=["type"];s&&$.push("type"),o&&$.push("type");let E=y=>{let m=te("x",e.dataType,e.dims,l),x=[m],S=s?D("seq_lens",s.dataType,s.dims):void 0;S&&x.push(S);let T=o?D("total_sequence_length_input",o.dataType,o.dims):void 0;T&&x.push(T);let I=rt(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${y.registerUniforms(z).declareVariables(...x)}
  ${y.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${ps(S,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${w}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${w}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${w}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${w}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${m.type.value}(${I}(1.0) / ${I}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${w}(x[offset + i]);
        x[offset + i] = ${m.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${m.type.value}(${I}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${_};${l}`,inputDependencies:$},getShaderSource:E,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:h})}},ag=(e,t,r,n,i,a,s,o,l)=>{let d=s+a.kvSequenceLength,f=[a.batchSize,a.numHeads,a.sequenceLength,d],p=e>1&&n,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,_=p?[a.batchSize,h,d,a.headSize]:void 0,w=a.nReps?a.nReps:1,$=a.scale===0?1/Math.sqrt(a.headSize):a.scale,E=Re(a.headSize),y=a.headSize/E,m=12,x={x:Math.ceil(d/m),y:Math.ceil(a.sequenceLength/m),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:y},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:$},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:w}],T=p&&n&&R.size(n.dims)>0,I=["type","type"];T&&I.push("type"),i&&I.push("type"),o&&I.push("type"),l&&I.push("type");let z=[{dims:f,dataType:t.dataType,gpuDataType:0}];p&&z.push({dims:_,dataType:t.dataType,gpuDataType:0});let b=O=>{let M=D("q",t.dataType,t.dims,E),G=D("key",r.dataType,r.dims,E),Q=[M,G];if(T){let P=D("past_key",n.dataType,n.dims,E);Q.push(P)}i&&Q.push(D("attention_bias",i.dataType,i.dims));let X=o?D("seq_lens",o.dataType,o.dims):void 0;X&&Q.push(X);let A=l?D("total_sequence_length_input",l.dataType,l.dims):void 0;A&&Q.push(A);let ee=te("output",t.dataType,f),J=[ee];p&&J.push(te("present_key",t.dataType,_,E));let re=rt(1,E),W=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${m}u;

  var<workgroup> tileQ: array<${M.type.storage}, ${m*m}>;
  var<workgroup> tileK: array<${M.type.storage}, ${m*m}>;
  ${O.registerUniforms(W).declareVariables(...Q,...J)}
  ${O.mainStart([m,m,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${w===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${w===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${ps(X,A,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${re}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&p?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${p?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${re}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(E){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${E}`)}})()};
        output[outputIdx] = ${ee.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${E};${i!==void 0};${n!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:z,dispatchGroup:x,programUniforms:S}),getShaderSource:b}},sg=(e,t,r,n,i,a,s=void 0,o=void 0)=>{let l=a+i.kvSequenceLength,d=i.nReps?i.nReps:1,f=i.vHiddenSize*d,p=e>1&&n,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,_=p?[i.batchSize,h,l,i.headSize]:void 0,w=[i.batchSize,i.sequenceLength,f],$=12,E={x:Math.ceil(i.vHeadSize/$),y:Math.ceil(i.sequenceLength/$),z:i.batchSize*i.numHeads},y=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:f},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:d}],m=p&&n&&R.size(n.dims)>0,x=["type","type"];m&&x.push("type"),s&&x.push("type"),o&&x.push("type");let S=[{dims:w,dataType:t.dataType,gpuDataType:0}];p&&S.push({dims:_,dataType:t.dataType,gpuDataType:0});let T=I=>{let z=D("probs",t.dataType,t.dims),b=D("v",r.dataType,r.dims),O=[z,b];m&&O.push(D("past_value",n.dataType,n.dims));let M=s?D("seq_lens",s.dataType,s.dims):void 0;s&&O.push(M);let G=o?D("total_sequence_length_input",o.dataType,o.dims):void 0;o&&O.push(G);let Q=[te("output",t.dataType,w)];p&&Q.push(te("present_value",t.dataType,_));let X=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${z.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${z.type.value}, ${$*$}>;
  ${I.registerUniforms(X).declareVariables(...O,...Q)}
  ${I.mainStart([$,$,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ps(M,G,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${m&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${m&&p?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${p?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:S,dispatchGroup:E,programUniforms:y}),getShaderSource:T}},Sa=(e,t,r,n,i,a,s,o,l,d,f=void 0,p=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),_=h>1?s:void 0,w=h>1?o:void 0,$=h>1?d.pastSequenceLength:0,E=$+d.kvSequenceLength,y=l&&R.size(l.dims)>0?l:void 0,m=[t,r];_&&R.size(_.dims)>0&&m.push(_),y&&m.push(y),f&&m.push(f),p&&m.push(p);let x=e.compute(ag(h,t,r,_,y,d,$,f,p),{inputs:m,outputs:h>1?[-1,1]:[-1]})[0];e.compute(ig(x,d.batchSize,d.numHeads,$,d.sequenceLength,E,f,p),{inputs:f&&p?[x,f,p]:[x],outputs:[]});let S=[x,n];w&&R.size(w.dims)>0&&S.push(w),f&&S.push(f),p&&S.push(p),e.compute(sg(h,x,n,w,d,$,f,p),{inputs:S,outputs:h>1?[0,2]:[0]})},og=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=p=>{let h=te("output_q",l[0].dataType,r),_=te("output_k",l[0].dataType,r),w=te("output_v",l[0].dataType,r),$=D("input",l[0].dataType,l[0].dims),E=D("weight",l[1].dataType,l[1].dims),y=D("bias",l[2].dataType,l[2].dims),m=$.type.storage,x=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${m}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${m}, ${s*s}>;
  var<workgroup> tileWeightK: array<${m}, ${s*s}>;
  var<workgroup> tileWeightV: array<${m}, ${s*s}>;
  ${p.registerUniforms(x).declareVariables($,E,y,h,_,w)}
  ${p.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${m}(0);
    var valueK = ${m}(0);
    var valueV = ${m}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:f},{inputs:l,outputs:[-1,-1,-1]})},sw=(e,t)=>{let r=ng(e.inputs,t),[n,i,a]=og(e,r);return Sa(e,n,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),lg,ug,dg,ow,qk=j(()=>{Pt(),se(),le(),De(),ue(),lg=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,a)=>{let s=i.length;if(s!==n.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,l)=>{if(o!==n[l])throw new Error(`${a}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},ug=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,a=e[0].dims,s=n?Re(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,l=R.size(a)/s,d=n,f=d?a.length:a,p=D("x",e[0].dataType,e[0].dims,s),h=D("scale",e[1].dataType,e[1].dims,o),_=D("bias",e[2].dataType,e[2].dims,o),w=D("inputMean",e[3].dataType,e[3].dims,o),$=D("inputVar",e[4].dataType,e[4].dims,o),E=te("y",e[0].dataType,f,s),y=()=>{let x="";if(n)x=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")x=`
            ${E.indicesSet("outputIndices","0","0")}
            let cOffset = ${E.indicesToOffset("outputIndices")};`;else{x=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<h.rank;S++)x+=`cIndices[${S}] = outputIndices[${S}];`;x+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return x},m=x=>`
  const epsilon = ${r};
  ${x.registerUniform("outputSize","u32").declareVariables(p,h,_,w,$,E)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${E.offsetToIndices(`global_idx * ${s}`)};
    ${y()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${w.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${E.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:m,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...ae(a)]:[{type:12,data:l}]})}},dg=e=>we(e),ow=(e,t)=>{let{inputs:r,outputCount:n}=e,i=dg({...t,outputCount:n});if(Te.webgpu.validateInputContent&&lg(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(ug(r,i))}}),cg,pg,lw,Hk=j(()=>{le(),ue(),cg=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},pg=e=>{let t=e[0].dims,r=e[0].dims[2],n=R.size(t)/4,i=e[0].dataType,a=D("input",i,t,4),s=D("bias",i,[r],4),o=D("residual",i,t,4),l=te("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,s,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},lw=e=>{cg(e.inputs),e.compute(pg(e.inputs))}}),fg,ve,uw,dw,cw,pw,fw,hw,mw,gw,yw,hg,vw,_w,ww,$w,Ki,xw,Rs,bw,Sw,kw,Ew,Tw,Cw,Iw,zw,Nw,Ow,Rw,Aw,Mw,Bw,Dw,Pw,ql,Lw,wd,$d,Uw,Ww,jw,mg,gg,Vw,Lc=j(()=>{se(),le(),De(),ue(),fg=(e,t,r,n,i,a,s)=>{let o=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=D("inputData",r,[o],4),f=te("outputData",n,[o],4),p=[{name:"vec_size",type:"u32"}];return s&&p.push(...s),`
      ${e.registerUniforms(p).declareVariables(d,f)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",l)}
  }`},ve=(e,t,r,n,i,a=e.dataType,s,o)=>{let l=[{type:12,data:Math.ceil(R.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>fg(d,R.size(e.dims),e.dataType,a,r,n,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(R.size(d[0].dims)/64/4)},programUniforms:l})}},uw=e=>{e.compute(ve(e.inputs[0],"Abs","abs"))},dw=e=>{e.compute(ve(e.inputs[0],"Acos","acos"))},cw=e=>{e.compute(ve(e.inputs[0],"Acosh","acosh"))},pw=e=>{e.compute(ve(e.inputs[0],"Asin","asin"))},fw=e=>{e.compute(ve(e.inputs[0],"Asinh","asinh"))},hw=e=>{e.compute(ve(e.inputs[0],"Atan","atan"))},mw=e=>{e.compute(ve(e.inputs[0],"Atanh","atanh"))},gw=e=>we(e),yw=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ve(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},hg=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return we({min:t,max:r})},vw=(e,t)=>{let r=t||hg(e.inputs),n=rt(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},_w=e=>{e.compute(ve(e.inputs[0],"Ceil","ceil"))},ww=e=>{e.compute(ve(e.inputs[0],"Cos","cos"))},$w=e=>{e.compute(ve(e.inputs[0],"Cosh","cosh"))},Ki=e=>we(e),xw=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Rs=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,bw=e=>{let t=rt(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Rs(t)))},Sw=e=>{e.compute(ve(e.inputs[0],"Exp","exp"))},kw=e=>{e.compute(ve(e.inputs[0],"Floor","floor"))},Ew=e=>{let t=rt(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Rs(t)))},Tw=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Cw=e=>{e.compute(ve(e.inputs[0],"Not",t=>`!${t}`))},Iw=e=>{e.compute(ve(e.inputs[0],"Neg",t=>`-${t}`))},zw=e=>{e.compute(ve(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Nw=e=>{let t=rt(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Ow=e=>{e.compute(ve(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Rw=e=>we(e),Aw=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Mw=e=>{e.compute(ve(e.inputs[0],"Sin","sin"))},Bw=e=>{e.compute(ve(e.inputs[0],"Sinh","sinh"))},Dw=e=>{e.compute(ve(e.inputs[0],"Sqrt","sqrt"))},Pw=e=>{e.compute(ve(e.inputs[0],"Tan","tan"))},ql=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Lw=e=>{e.compute(ve(e.inputs[0],"Tanh",ql))},wd=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ql("v")};
}
`,$d=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Uw=e=>{let t=rt(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"FastGelu",$d,wd(t),void 0,e.inputs[0].dataType))},Ww=(e,t)=>{let r=rt(e.inputs[0].dataType);return e.compute(ve(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},jw=e=>{e.compute(ve(e.inputs[0],"Log","log"))},mg=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,gg=e=>`quick_gelu_impl(${e})`,Vw=(e,t)=>{let r=rt(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"QuickGelu",gg,mg(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),yg,vg,Fw,Gk=j(()=>{le(),ue(),Lc(),yg=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},vg=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=D("input",e[0].dataType,e[0].dims,4),n=D("bias",e[0].dataType,[e[0].dims[2]],4),i=te("output",e[0].dataType,t,4),a=R.size(t)/4,s=qe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,n,i)}

  ${Rs(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Fw=e=>{yg(e.inputs),e.compute(vg(e.inputs))}}),_g,wg,qt,qw,Hw,Gw,Kw,Qw,Xw,Zw,Yw,Jw,e$,Kk=j(()=>{se(),le(),ue(),_g=(e,t,r,n,i,a,s,o,l,d,f,p)=>{let h,_;typeof o=="string"?h=_=(m,x)=>`${o}((${m}),(${x}))`:typeof o=="function"?h=_=o:(h=o.scalar,_=o.vector);let w=te("outputData",f,n.length,4),$=D("aData",l,t.length,4),E=D("bData",d,r.length,4),y;if(i)if(a){let m=R.size(t)===1,x=R.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,T=r.length>0&&r[r.length-1]%4===0;m||x?y=w.setByOffset("global_idx",_(m?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),x?`${E.type.value}(${E.getByOffset("0")}.x)`:E.getByOffset("global_idx"))):y=`
            let outputIndices = ${w.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",w)};
            let offsetB = ${E.broadcastedIndicesToOffset("outputIndices",w)};
            ${w.setByOffset("global_idx",_(s||S?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||T?E.getByOffset("offsetB / 4u"):`${E.type.value}(${E.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else y=w.setByOffset("global_idx",_($.getByOffset("global_idx"),E.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let m=(x,S,T="")=>{let I=`aData[indexA${S}][componentA${S}]`,z=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${w.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${$.broadcastedIndicesToOffset(`outputIndices${S}`,w)};
            let offsetB${S} = ${E.broadcastedIndicesToOffset(`outputIndices${S}`,w)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${x}[${S}] = ${T}(${h(I,z)});
          `};f===9?y=`
            var data = vec4<u32>(0);
            ${m("data",0,"u32")}
            ${m("data",1,"u32")}
            ${m("data",2,"u32")}
            ${m("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:y=`
            ${m("outputData[global_idx]",0)}
            ${m("outputData[global_idx]",1)}
            ${m("outputData[global_idx]",2)}
            ${m("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables($,E,w)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${y}
      }`},wg=(e,t,r,n,i,a,s=r.dataType)=>{let o=r.dims.map(Number),l=n.dims.map(Number),d=!R.areEqual(o,l),f=o,p=R.size(o),h=!1,_=!1,w=[d];if(d){let $=fi.calcShape(o,l,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");f=$.slice(),p=R.size(f);let E=R.size(o)===1,y=R.size(l)===1,m=o.length>0&&o[o.length-1]%4===0,x=l.length>0&&l[l.length-1]%4===0;w.push(E),w.push(y),w.push(m),w.push(x);let S=1;for(let T=1;T<f.length;T++){let I=o[o.length-T],z=l[l.length-T];if(I===z)S*=I;else break}S%4===0?(_=!0,h=!0):(E||y||m||x)&&(h=!0)}else h=!0;return w.push(h),{name:e,shaderCache:{hint:t+w.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>_g($,o,l,f,h,d,_,i,r.dataType,n.dataType,s,a),getRunData:()=>({outputs:[{dims:f,dataType:s}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(R.size(f)/4)},...ae(o,l,f)]})}},qt=(e,t,r,n,i,a)=>{e.compute(wg(t,i??"",e.inputs[0],e.inputs[1],r,n,a))},qw=e=>{qt(e,"Add",(t,r)=>`${t}+${r}`)},Hw=e=>{qt(e,"Div",(t,r)=>`${t}/${r}`)},Gw=e=>{qt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Kw=e=>{qt(e,"Mul",(t,r)=>`${t}*${r}`)},Qw=e=>{let t=D("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;qt(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Xw=e=>{qt(e,"Sub",(t,r)=>`${t}-${r}`)},Zw=e=>{qt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Yw=e=>{qt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Jw=e=>{qt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},e$=e=>{qt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),$g,xg,bg,Sg,t$,r$,Qk=j(()=>{se(),le(),De(),ue(),$g=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,a=n.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==n.dims[d])throw new Error("non concat dimensions must match")})}})},xg=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,bg=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(a):i===0?n.push(`if (inputIndex == ${i}u) { ${a} }`):i===r-1?n.push(`else { ${a} }`):n.push(`else if (inputIndex == ${i}) { ${a} }`)}return n.join(`
`)},Sg=(e,t,r,n)=>{let i=R.size(r),a=new Array(e.length),s=new Array(e.length),o=0,l=[],d=[],f=[{type:12,data:i}];for(let $=0;$<e.length;++$)o+=e[$].dims[t],a[$]=o,d.push(e[$].dims.length),s[$]=D(`input${$}`,n,d[$]),l.push("rank"),f.push({type:12,data:a[$]});for(let $=0;$<e.length;++$)f.push(...ae(e[$].dims));f.push(...ae(r));let p=te("output",n,r.length),h=p.indicesGet("indices",t),_=Array.from(Array(a.length).keys()).map($=>`uniforms.sizeInConcatAxis${$}`).join(","),w=$=>`

  ${(()=>{$.registerUniform("outputSize","u32");for(let E=0;E<e.length;E++)$.registerUniform(`sizeInConcatAxis${E}`,"u32");return $.declareVariables(...s,p)})()}

  ${xg(a.length,_)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${_});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${bg(s,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f}),getShaderSource:w}},t$=(e,t)=>{let r=e.inputs,n=r[0].dims,i=R.normalizeAxis(t.axis,n.length);$g(r,i);let a=n.slice();a[i]=r.reduce((o,l)=>o+(l.dims.length>i?l.dims[i]:0),0);let s=r.filter(o=>R.size(o.dims)>0);e.compute(Sg(s,i,a,r[0].dataType),{inputs:s})},r$=e=>we({axis:e.axis})}),In,zn,Nn,Uc,Mn=j(()=>{se(),le(),In=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},zn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Nn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Uc=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,n]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=(e==null?void 0:e.activation_params)||[C_,I_];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ge,n$,Wc=j(()=>{Ge=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},n$=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),i$,Xk=j(()=>{i$=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),aa,jc,Vc=j(()=>{se(),le(),ue(),Mn(),aa=(e,t,r,n,i)=>{let a=n-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${ie(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ie(i,o+a,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},jc=(e,t,r,n,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,l=s[s.length-2],d=o[o.length-1],f=s[s.length-1],p=Re(d),h=Re(f),_=Re(l),w=R.size(r)/p/_,$=e.length>2,E=n?n.slice(0,-2):r.slice(0,-2),y=[R.size(E),l,d],m=[{type:12,data:w},{type:12,data:l},{type:12,data:d},{type:12,data:f}];zn(t,m),m.push(...ae(E,s,o)),$&&m.push(...ae(e[2].dims)),m.push(...ae(y));let x=S=>{let T=Bc("batch_dims",e[0].dataType,E.length),I=D("a",e[0].dataType,s.length,h),z=D("b",e[1].dataType,o.length,p),b=te("output",e[0].dataType,y.length,p),O=qe(b.type.tensor),M=In(t,b.type.value,O),G=[I,z],Q="";if($){let ee=i?p:1;G.push(D("bias",e[2].dataType,e[2].dims.length,ee)),Q=`${i?`value += bias[col / ${ee}];`:`value += ${b.type.value}(bias[row + i]);`}`}let X=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Nn(t,X);let A=()=>{let ee=`var a_data: ${I.type.value};`;for(let J=0;J<h;J++)ee+=`
              let b_data${J} = b[(b_offset + (k + ${J}) * uniforms.N + col) / ${p}];`;for(let J=0;J<_;J++){ee+=`a_data = a[(a_offset + (row + ${J}) * uniforms.K + k) / ${h}];`;for(let re=0;re<h;re++)ee+=`
            values[${J}] = fma(${z.type.value}(a_data${h===1?"":`[${re}]`}), b_data${re}, values[${J}]);
`}return ee};return`
  ${S.registerUniforms(X).registerInternalVariables(T).declareVariables(...G,b)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${I.type.indices};
    ${aa("a_indices",I,I.rank-2,T.rank,"batch_indices")}
    ${I.indicesSet("a_indices",I.rank-2,0)}
    ${I.indicesSet("a_indices",I.rank-1,0)}
    let a_offset = ${I.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${aa("b_indices",z,z.rank-2,T.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${b.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${A()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${Q}
      ${M}
      let cur_indices = ${b.type.indices}(batch, row + i, col);
      let offset = ${b.indicesToOffset("cur_indices")};
      ${b.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${h};${_};${i}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:m}),getShaderSource:x}}}),kg,Eg,xd,Hl,Tg,bd,Cg,uo,Fc=j(()=>{se(),le(),ue(),Mn(),Vc(),Wc(),kg=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Eg=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,xd=(e,t,r="f32",n,i=!1,a=32,s=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],f=i?l:a,p=i?a:l,h=f/t[0],_=a/t[1];if(!((i&&h===4&&e[1]===4||!i&&(h===3||h===4))&&f%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${f/h}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${kg(i,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Eg(i,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Hl=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Tg=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",bd=(e,t,r="f32",n,i=!1,a=32,s=!1,o=32,l=!1)=>{let d=e[1]*t[1],f=e[0]*t[0],p=i?d:a,h=i?a:d;if(!(h%t[1]===0&&p%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let _=h/t[1],w=p/t[0],$=a/t[1],E=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${Hl(i,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${w};
let tileRowB = i32(localId.y) * ${$};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${w}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Hl(i,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Tg(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${p}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${f}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${E}
  }
`},Cg=(e,t,r,n,i=!1)=>{let[a,s,o,l]=n,d=qe(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ge(e,d)} {
      var value = ${Ge(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${aa("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ge(e,d)} {
      var value = ${Ge(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${aa("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ge(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Ge(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},uo=(e,t,r,n,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,l=s.slice(0,-2),d=o.slice(0,-2),f=n?n.slice(0,-2):r.slice(0,-2),p=R.size(f),h=s[s.length-2],_=s[s.length-1],w=o[o.length-1],$=_%4===0&&w%4===0,E=h<=8?[4,1,1]:[4,4,1],y=[8,8,1],m=[Math.ceil(w/y[0]/E[0]),Math.ceil(h/y[1]/E[1]),Math.ceil(p/y[2]/E[2])],x=$?4:1,S=[...l,h,_/x],T=S.length,I=[...d,_,w/x],z=I.length,b=[p,h,w/x],O=[{type:6,data:h},{type:6,data:w},{type:6,data:_}];zn(t,O),O.push(...ae(f,S,I));let M=["rank","rank"],G=e.length>2;G&&(O.push(...ae(e[2].dims)),M.push("rank")),O.push(...ae(b));let Q=X=>{let A=f.length,ee=Bc("batchDims",e[0].dataType,A,1),J=qe(e[0].dataType),re=D("a",e[0].dataType,T,x),W=D("b",e[1].dataType,z,x),P=te("result",e[0].dataType,b.length,x),K=[re,W];if(G){let ge=i?x:1;K.push(D("bias",e[2].dataType,e[2].dims.length,ge))}let L=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Nn(t,L);let V=qe(P.type.tensor),Y=In(t,P.type.value,V),F=Cg(x,G,Y,[ee,re,W,P],i);return`
  ${X.registerUniforms(L).registerInternalVariables(ee).declareVariables(...K,P)}
  ${F}
  ${$?xd(E,y,J,ee):bd(E,y,J,ee)}
                   `};return{name:"MatMul",shaderCache:{hint:`${E};${t.activation};${$};${i}`,inputDependencies:M},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:m[0],y:m[1],z:m[2]},programUniforms:O}),getShaderSource:Q}}}),Ig,a$,Zk=j(()=>{se(),kr(),ue(),Mn(),Wc(),Xk(),Fc(),Ig=(e,t,r,n,i=!1,a,s=4,o=4,l=4,d="f32")=>{let f=O=>{switch(O){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},p=O=>{switch(O){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,w=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",$=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",E=e?"row":"col",y=e?"col":"row",m=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${E} / outWidth;
    let outCol = ${E} % outWidth;

    let WRow = ${y} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${y} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${y} % inChannels;
    var resData = ${Ge(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${w} && xCol >= 0 && xCol < ${$}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(s)}
    }
    return resData;`,x=e?t&&n?`
    let col = colIn * ${s};
    ${m}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${m}
    }
    return ${Ge(s,d)}(0.0);`:n&&r?`
    let col = colIn * ${s};
    ${m}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${m}
    }
    return ${Ge(s,d)}(0.0);`,S=e?n&&r?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Ge(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Ge(o,d)}(0.0);`,T=Ge(l,d),I=Ge(e?s:o,d),z=Ge(e?o:s,d),b=In(a,T,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?x:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?S:x}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${n$(i)}
      ${b}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},a$=(e,t,r,n,i,a,s,o,l)=>{let d=t.format==="NHWC",f=d?e[0].dims[3]:e[0].dims[1],p=r[0],h=d?r[2]:r[3],_=d?r[1]:r[2],w=d?r[3]:r[1],$=d&&(f%4===0||f%3===0)&&w%4===0,E=d?w:h*_,y=d?h*_:w,m=[8,8,1],x=n<=8?[4,1,1]:[4,4,1],S=[Math.ceil(E/m[0]/x[0]),Math.ceil(y/m[1]/x[1]),Math.ceil(p/m[2]/x[2])];he("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let T=$?d&&f%4!==0?3:4:1,I=m[1]*x[1],z=m[0]*x[0],b=Math.max(m[0]*T,m[1]),O=n%I===0,M=i%z===0,G=a%b===0,Q=$?[T,4,4]:[1,1,1],X=[{type:6,data:n},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];zn(t,X),X.push(...ae(e[0].dims,e[1].dims));let A=["rank","rank"];s&&(X.push(...ae(e[2].dims)),A.push("rank")),X.push(...ae(r));let ee=J=>{let re=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Nn(t,re);let W=$?4:1,P=qe(e[0].dataType),K=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${P}>`:P}) {
        result[flatIndex] = ${$?`vec4<${P}>`:P}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${P}>`:P}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,L=D("x",e[0].dataType,e[0].dims.length,T===3?1:T),V=D("w",e[1].dataType,e[1].dims.length,W),Y=[L,V],F=te("result",e[0].dataType,r.length,W);if(s){let ge=D("bias",e[2].dataType,e[2].dims.length,W);Y.push(ge),K+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${P}>`:P} {
          return bias[coords.${d?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${i$("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${J.registerUniforms(re).declareVariables(...Y,F)}
        ${K}
        ${Ig(d,O,M,G,s,t,Q[0],Q[1],Q[2],P)}
        ${$?xd(x,m,P,void 0,!d,b):bd(x,m,P,void 0,!d,b,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${$};${O};${M};${G};${I};${z};${b}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:X}),getShaderSource:ee}}}),zg,Gl,Bi,Ng,Kl,Og,s$,o$,Yk=j(()=>{se(),kr(),le(),ue(),Mn(),Wc(),zg=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Gl=e=>typeof e=="number"?[e,e,e]:e,Bi=(e,t)=>t<=1?e:e+(e-1)*(t-1),Ng=(e,t,r,n=1)=>{let i=Bi(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},Kl=(e,t,r,n,i)=>{i==null&&(i=Ng(e,t[0],n[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/n[s]+1));return a},Og=(e,t,r,n,i,a,s,o,l,d)=>{let f,p,h,_;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let w=Kl([t,r,n,1],[o,l,d],1,[i,a,s],e);p=w[0],h=w[1],_=w[2]}else if(Array.isArray(e)){if(!e.every(($,E,y)=>$===y[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let w=Kl([t,r,n,1],[o,l,d],1,[i,a,s],e[0]);p=w[0],h=w[1],_=w[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),h=Math.ceil(r/a),_=Math.ceil(n/s);let w=(p-1)*i+o-t,$=(h-1)*a+l-r,E=(_-1)*s+d-n,y=Math.floor(w/2),m=w-y,x=Math.floor($/2),S=$-x,T=Math.floor(E/2),I=E-T;f={top:x,bottom:S,left:T,right:I,front:y,back:m}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:p,outHeight:h,outWidth:_}},s$=(e,t,r,n,i,a=!1,s="channelsLast")=>{let o,l,d,f,p;if(s==="channelsLast")[o,l,d,f,p]=e;else if(s==="channelsFirst")[o,p,l,d,f]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,_,w,$]=t,[E,y,m]=Gl(r),[x,S,T]=Gl(n),I=Bi(_,x),z=Bi(w,S),b=Bi($,T),{padInfo:O,outDepth:M,outHeight:G,outWidth:Q}=Og(i,l,d,f,E,y,m,I,z,b),X=a?h*p:h,A=[0,0,0,0,0];return s==="channelsFirst"?A=[o,X,M,G,Q]:s==="channelsLast"&&(A=[o,M,G,Q,X]),{batchSize:o,dataFormat:s,inDepth:l,inHeight:d,inWidth:f,inChannels:p,outDepth:M,outHeight:G,outWidth:Q,outChannels:X,padInfo:O,strideDepth:E,strideHeight:y,strideWidth:m,filterDepth:_,filterHeight:w,filterWidth:$,effectiveFilterDepth:I,effectiveFilterHeight:z,effectiveFilterWidth:b,dilationDepth:x,dilationHeight:S,dilationWidth:T,inShape:e,outShape:A,filterShape:t}},o$=(e,t,r,n,i,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:r.map((E,y)=>y)},d=[Math.ceil(zg(l.x.map(E=>r[E]))/o[0]),1,1];he("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let f=1,p=R.size(r),h=[{type:12,data:p},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];zn(t,h),h.push(...ae(e[0].dims,e[1].dims));let _=["rank","rank"],w=e.length===3;w&&(h.push(...ae(e[2].dims)),_.push("rank")),h.push(...ae(r));let $=E=>{let y=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Nn(t,y);let m=1,x=qe(e[0].dataType),S=D("x",e[0].dataType,e[0].dims.length,f),T=D("W",e[1].dataType,e[1].dims.length,m),I=[S,T],z=te("result",e[0].dataType,r.length,m),b="";if(w){let G=D("bias",e[2].dataType,e[2].dims.length,m);I.push(G),b+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${x} {
          return bias[${s?ie("coords",4,5):ie("coords",1,5)}];
        }`}let O=Ge(f,x),M=In(t,O,x);return`
            ${b}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${E.registerUniforms(y).declareVariables(...I,z)}
          ${E.mainStart()}
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${ie("coords",0,S.rank)};
              let d2 = ${s?ie("coords",S.rank-1,S.rank):ie("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?ie("coords",1,S.rank):ie("coords",2,S.rank)},
              ${s?ie("coords",2,S.rank):ie("coords",3,S.rank)},
              ${s?ie("coords",3,S.rank):ie("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?ie("uniforms.x_shape",1,S.rank):ie("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?ie("uniforms.x_shape",2,S.rank):ie("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?ie("uniforms.x_shape",3,S.rank):ie("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?ie("uniforms.x_shape",4,S.rank):ie("uniforms.x_shape",1,S.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${w?"value = value + getBiasByOutputCoords(coords)":""};
              ${M}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${f};${w}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:h}),getShaderSource:$}}}),l$,u$,Jk=j(()=>{se(),le(),ue(),Mn(),l$=(e,t,r,n)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],f=d/t.group,p=l&&f>=4?Re(d):1,h=R.size(r)/p,_=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];zn(t,_),_.push(...ae(s,[o[0],o[1],o[2],o[3]/p]));let w=i?["rank","rank","rank"]:["rank","rank"];_.push(...ae([r[0],r[1],r[2],r[3]/p]));let $=E=>{let y=te("output",e[0].dataType,r.length,p),m=qe(y.type.tensor),x=In(t,y.type.value,m),S=D("x",e[0].dataType,s.length),T=D("w",e[1].dataType,o.length,p),I=[S,T];i&&I.push(D("b",e[2].dataType,e[2].dims,p));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Nn(t,z);let b=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${T.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${E.registerUniforms(z).declareVariables(...I,y)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${y.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${y.type.value} = ${y.type.value}(0);
    ${b}
    ${a}
    ${x}
    ${y.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:_}),getShaderSource:$}},u$=(e,t,r,n)=>{let i=e.length>2,a=Re(r[3]),s=Re(r[2]),o=R.size(r)/a/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],f=[r[0],r[1],r[2],r[3]/a],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];zn(t,p),p.push(...ae(l,d,f));let h=(s-1)*t.strides[1]+d[1],_=w=>{let $=te("output",e[0].dataType,f.length,a),E=qe($.type.tensor),y=In(t,$.type.value,E),m=D("x",e[0].dataType,l.length,a),x=D("w",e[1].dataType,d.length,a),S=[m,x];i&&S.push(D("b",e[2].dataType,e[2].dims,a));let T=i?"value += b[output_channel];":"",I=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Nn(t,I),`
  ${w.registerUniforms(I).declareVariables(...S,$)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${m.type.value}, ${h}>;
    var values: array<${$.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${m.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${m.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${x.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${T}
      ${y}
      ${$.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${h};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:_}}}),Rg,fs,Ag,hs,Sd,Ql,Mg,Bg,kd,eE=j(()=>{le(),Zk(),Yk(),Fc(),Jk(),Mn(),Vc(),rn(),Rg=(e,t,r,n,i,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),l=o.length,d=t[0],f=t.slice(2).map((h,_)=>h+(h-1)*(r[_]-1)),p=o.map((h,_)=>h+n[_]+n[_+l]).map((h,_)=>Math.floor((h-f[_]+i[_])/i[_]));return p.splice(0,0,s),p.splice(a?3:1,0,d),p},fs=[2,3,1,0],Ag=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},hs=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let n=e.pads.slice();oo.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},Sd=e=>{let t=Uc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:a,kernelShape:s,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Ql=(e,t,r,n)=>{let i=r.format==="NHWC",a=Rg(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let I=[t[0]];if(i){let z=e.kernelCustomData.wT??e.compute(Tt(t[1],fs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),I.push(z)}else I.push(t[1]);t.length===3&&I.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(u$(I,r,a,n),{inputs:I}):e.compute(l$(I,r,a,n),{inputs:I});return}let s=t.length===3,o=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],f=t[1].dims[2],p=t[1].dims[3],h=a[i?1:2],_=a[i?2:3],w=a[i?3:1],$=i&&f===o&&p===l&&r.pads[0]===0&&r.pads[1]===0;if($||f===1&&p===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let I=a[0],z,b,O,M=[];if(i){let X=e.kernelCustomData.wT??e.compute(Tt(t[1],fs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=X),$){let A=o*l*d;z=t[0].reshape([1,I,A]),b=X.reshape([1,A,w]),O=[1,I,w]}else z=t[0].reshape([I,o*l,d]),b=X.reshape([1,d,w]),O=[I,h*_,w];M.push(z),M.push(b)}else z=t[0].reshape([I,d,o*l]),b=t[1].reshape([1,w,d]),O=[I,w,h*_],M.push(b),M.push(z);s&&M.push(t[2]);let G=O[2],Q=M[0].dims[M[0].dims.length-1];G<8&&Q<8?e.compute(jc(M,r,a,O,i,n),{inputs:M}):e.compute(uo(M,r,a,O,i,n),{inputs:M});return}let E=!0,y=e.kernelCustomData.wT??e.compute(Tt(t[1],fs),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=y);let m=[t[0],y];s&&m.push(t[2]);let x=i?h*_:w,S=i?w:h*_,T=f*p*d;e.compute(a$(m,r,a,x,S,T,s,E,n),{inputs:m})},Mg=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=hs({...t,pads:i,strides:a,dilations:s,kernelShape:o},n);Ql(e,n,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Bg=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=hs(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=s$(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,n);e.compute(o$(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],n))},kd=(e,t)=>{if(Ag(e.inputs,t),e.inputs[0].dims.length===3)Mg(e,t);else if(e.inputs[0].dims.length===5)Bg(e,e.inputs,t);else{let r=hs(t,e.inputs);Ql(e,e.inputs,r)}}}),d$,tE=j(()=>{se(),kr(),le(),ue(),d$=(e,t,r)=>{let n=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,l=o[2]/s,d=o[3],f=a?Re(l):1,p=a&&d===1&&l>=4,h=p?Math.floor(l/4)*4:Math.floor(l/f)*f,_=l-h,w=a?Re(d):1,$=a?d===1?f:w:1,E=R.size(i)/w,y=[Math.ceil(E/64),1,1];he("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${y}`);let m=["rank","rank"],x=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],T=[t.dilations[0],t.dilations[1]],I=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],z=[I[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),I[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],b=[{type:12,data:E},{type:12,data:x},{type:12,data:S},{type:12,data:T},{type:12,data:I},{type:6,data:z},{type:12,data:h},{type:12,data:l},{type:12,data:d},...ae(e[0].dims,e[1].dims)];n&&(b.push(...ae(e[2].dims)),m.push("rank")),b.push(...ae(i));let O=M=>{let G=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:x.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:I.length},{name:"pads",type:"i32",length:z.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Q=qe(e[0].dataType),X=a?1:2,A=a?2:3,ee=a?3:1,J=D("W",e[1].dataType,e[1].dims.length,$),re=D("Dy",e[0].dataType,e[0].dims.length,f),W=[re,J];n&&W.push(D("bias",e[2].dataType,[i[ee]].length,w));let P=te("result",e[0].dataType,i.length,w),K=()=>{let Y="";if(p)f===4?Y+=`
        let xValue = ${re.getByOffset("x_offset")};
        let wValue = ${J.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:f===2?Y+=`
          dotProd = dotProd + dot(vec4<${Q}>(${re.getByOffset("x_offset")}, ${re.getByOffset("x_offset + 1u")}), vec4<${Q}>(${J.getByOffset("w_offset")}, ${J.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:f===1&&(Y+=`
          dotProd = dotProd + dot(vec4<${Q}>(${re.getByOffset("x_offset")}, ${re.getByOffset("x_offset + 1u")}, ${re.getByOffset("x_offset + 2u")}, ${re.getByOffset("x_offset + 3u")}), vec4<${Q}>(${J.getByOffset("w_offset")}, ${J.getByOffset("w_offset + 1u")}, ${J.getByOffset("w_offset + 2u")}, ${J.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Y+=`
                  let xValue = ${a?re.getByOffset(`${re.indicesToOffset(`${re.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):re.get("batch","inputChannel","idyR","idyC")};
        `,f===1)Y+=`
          let w_offset = ${J.indicesToOffset(`${J.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${J.getByOffset(`w_offset / ${$}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let F=0;F<f;F++)Y+=`
            let wValue${F} = ${J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${F}, wOutChannel)`)} / ${$}`)};
            dotProd = dotProd + xValue[${F}] * wValue${F};`;return Y},L=()=>{if(_===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let Y="";if(f===1){Y+="dotProd = dotProd";for(let F=0;F<_;F++)Y+=`
            + ${re.getByOffset(`x_offset + ${F}`)} * ${J.getByOffset(`w_offset + ${F}`)}`;Y+=";"}else if(f===2){if(_!==2)throw new Error(`Invalid inputChannelsRemainder ${_}.`);Y+=`
          let xValue = ${re.getByOffset("x_offset")};
          let wValue = ${J.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Y},V=`
            let outputIndices = ${P.offsetToIndices(`global_idx * ${w}`)};
            let batch = ${P.indicesGet("outputIndices",0)};
            let d1 = ${P.indicesGet("outputIndices",ee)};
            let r = ${P.indicesGet("outputIndices",X)};
            let c = ${P.indicesGet("outputIndices",A)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${P.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${Q}(dyRCorner) + ${Q}(wR)) / ${Q}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${Q}(uniforms.Dy_shape[${X}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${Q}(dyCCorner) + ${Q}(wC)) / ${Q}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${Q}(uniforms.Dy_shape[${A}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${re.indicesToOffset(`${re.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f};
                var w_offset = ${J.indicesToOffset(`${J.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${$};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:f}) {
                  ${K()}
                  inputChannel = inputChannel + ${p?4:f};
                }
                ${L()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${w}]`:""};
            ${P.setByOffset("global_idx","value")};
          `;return`
    ${M.registerUniforms(G).declareVariables(...W,P)}
      ${M.mainStart()}
      ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${V}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${$}${w}${p}${_}`,inputDependencies:m},getRunData:()=>({dispatchGroup:{x:y[0],y:y[1],z:y[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:b}),getShaderSource:O}}}),Dg,Pg,Lg,Xl,c$,Ug,Zl,Wg,p$,rE=j(()=>{tE(),Mn(),rn(),Dg=(e,t,r,n,i,a)=>(e-1)*t+r+(n-1)*i+1-a,Pg=(e,t,r,n,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=a,r[i]=e-a):t==="SAME_LOWER"&&(r[n]=e-a,r[i]=a)},Lg=(e,t,r,n,i,a,s,o,l,d)=>{let f=e.length-2,p=d.length===0;l.length<f&&l.push(...Array(f-l.length).fill(0));let h=e[0],_=t[o?3:1]*i;for(let w=0,$=e.length-f-(o?1:0);w<f;++w,++$){let E=e[$],y=p?E*s[w]:d[w],m=Dg(E,s[w],a[w],t[$],r[w],y);Pg(m,n,a,w,w+f),p&&d.push(s[w]*(E-1)+l[w]+(t[$]-1)*r[w]+1-a[w]-a[w+f])}d.splice(0,0,h),d.splice(o?3:1,0,_)},Xl=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,h)=>p*h,1)===0){r.length=0;for(let p=2;p<t[1].dims.length;++p)r.push(t[1].dims[p])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}let d=e.strides.slice();if(d.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;d=new Array(p).fill(1)}Lg(o,r,l,e.autoPad,e.group,i,d,n,s,a);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:i,outputPadding:s,outputShape:a,dilations:l,strides:d}),f},c$=e=>{let t=Uc(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),f=e.outputPadding,p=e.outputShape;return{autoPad:n,format:r,dilations:i,group:a,kernelShape:s,outputPadding:f,outputShape:p,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Ug=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Zl=(e,t,r,n)=>{let i=e.kernelCustomData.wT??e.compute(Tt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(d$(a,r,n),{inputs:a})},Wg=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let d=Xl({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:l},n);Zl(e,n,d,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},p$=(e,t)=>{if(Ug(e.inputs,t),e.inputs[0].dims.length===3)Wg(e,t);else{let r=Xl(t,e.inputs);Zl(e,e.inputs,r)}}}),jg,f$,h$,nE=j(()=>{se(),le(),De(),ue(),jg=(e,t,r,n)=>{let i=R.size(t),a=t.length,s=D("input",e,a),o=te("output",e,a),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=R.normalizeAxis(l,a),f=p=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=ie("uniforms.input_shape","uniforms.axis",a),w=n.reverse?h+(n.exclusive?" + 1":""):"0",$=n.reverse?_:h+(n.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${w};
                  let last : i32 = ${$};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...ae(t,t)]}),getShaderSource:f}},f$=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(jg(n,r,i,t),{inputs:[0]})},h$=e=>{let t=e.exclusive===1,r=e.reverse===1;return we({exclusive:t,reverse:r})}}),Vg,Fg,qg,m$,g$,iE=j(()=>{se(),le(),De(),ue(),Vg=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Fg=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)i.push(r.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},qg=(e,t)=>{let r,n,i,a,s,o,l=t.format==="NHWC",d=t.blocksize,f=t.mode==="DCR";l?([r,n,i,a]=e.dims,s=f?[r,n,i,d,d,a/d**2]:[r,n,i,a/d**2,d,d],o=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=f?[r,d,d,a/d**2,n,i]:[r,a/d**2,d,d,n,i],o=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(s),h=p.dims.length,_=e.dataType,w=D("a",_,h),$=te("output",_,h),E=y=>`
  ${y.registerUniform("output_size","u32").declareVariables(w,$)}

  ${Fg(o,h,w,$)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:y=>{let m=l?[r,n*d,i*d,a/d**2]:[r,a/d**2,n*d,i*d],x=R.size(m),S=p.dims,T=R.sortBasedOnPerm(S,o);return{outputs:[{dims:m,dataType:y[0].dataType}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:[{type:12,data:x},...ae(S,T)]}},getShaderSource:E}},m$=(e,t)=>{Vg(e.inputs),e.compute(qg(e.inputs[0],t))},g$=e=>we({blocksize:e.blocksize,mode:e.mode,format:e.format})}),ms,Di,Yl,Hg,Gg,Kg,Qg,Jl,Xg,y$,v$,aE=j(()=>{se(),le(),De(),ue(),ms="[a-zA-Z]|\\.\\.\\.",Di="("+ms+")+",Yl="^"+Di+"$",Hg="("+Di+",)*"+Di,Gg="^"+Hg+"$",Kg=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Qg=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Gg)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(Yl)))throw new Error("Invalid LHS term");let l=this.processTerm(a,!0,o,s);this.lhs.push(l)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!n.match(RegExp(Di)))throw new Error("Invalid RHS");(i=n.match(RegExp(ms,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,a=!1,s=[],o=0;if(!e.match(RegExp(Yl))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(ms,"g")),d=new Kg(n);return l==null||l.forEach((f,p)=>{if(f==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let h=i-l.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let w=String.fromCharCode(48+_);d.addSymbol(w,p+_),this.addSymbol(w,r[o++],n)}}else d.addSymbol(f,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[o++],n)}),d}},Jl=e=>e+"_max",Xg=(e,t,r,n)=>{let i=e.map(d=>d.length).map((d,f)=>D(`input${f}`,t,d)),a=R.size(n),s=te("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let f=[],p="var prod = 1.0;",h="var sum = 0.0;",_="sum += prod;",w=[],$=[],E=[],y=[],m=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,T)=>{var I;if(r.rhs.symbolToIndices.has(T)){let z=(I=r.rhs.symbolToIndices.get(T))==null?void 0:I[0];z!==void 0&&r.lhs.forEach((b,O)=>{if(S.inputIndices.includes(O)){let M=b.symbolToIndices.get(T);if(M===void 0)throw new Error("Invalid symbol error");M.forEach(G=>{f.push(`${i[O].indicesSet(`input${O}Indices`,G,s.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,b)=>{if(S.inputIndices.includes(b)){let O=z.symbolToIndices.get(T);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(M=>{w.push(`${i[b].indicesSet(`input${b}Indices`,M,`${T}`)}`)}),y.push(`prod *= ${i[b].getByIndices(`input${b}Indices`)};`)}}),$.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${Jl(T)}; ${T}++) {`),E.push("}")});let x=m?[...f,`let sum = ${i.map((S,T)=>S.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...f,h,...$,...w,p,...y,_,...E];return`
            ${d.registerUniforms(o.map(S=>({name:`${Jl(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((S,T)=>`var input${T}Indices: ${i[T].type.indices};`).join(`
`)}
            ${x.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(p=>r.symbolToInfo.has(p)).map(p=>{var h;return{type:12,data:((h=r.symbolToInfo.get(p))==null?void 0:h.dimValue)||0}});d.push({type:12,data:a});let f=e.map((p,h)=>[...ae(p)]).reduce((p,h)=>p.concat(h),d);return f.push(...ae(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:f}},getShaderSource:l}},y$=(e,t)=>{let r=new Qg(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(Xg(i,e.inputs[0].dataType,r,n))},v$=e=>{let t=e.equation.replace(/\s+/g,"");return we({equation:t})}}),Zg,eu,Yg,Jg,_$,sE=j(()=>{se(),le(),ue(),Zg=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},eu=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},Yg=(e,t)=>e.length>t.length?eu(e,t):eu(t,e),Jg=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=Yg(t,r),i=e[0].dataType,a=i===9||R.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||n.length>0&&n[n.length-1]%4===0?4:1,l=Math.ceil(R.size(n)/o),d=p=>{let h=D("input",i,t.length,s),_=te("output",i,n.length,o),w;if(i===9){let $=(E,y,m="")=>`
          let outputIndices${y} = ${_.offsetToIndices(`outputOffset + ${y}u`)};
          let offset${y} = ${h.broadcastedIndicesToOffset(`outputIndices${y}`,_)};
          let index${y} = offset${y} / 4u;
          let component${y} = offset${y} % 4u;
          ${E}[${y}] = ${m}(${h.getByOffset(`index${y}`)}[component${y}]);
        `;w=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${$("data",0,"u32")}
        ${$("data",1,"u32")}
        ${$("data",2,"u32")}
        ${$("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else w=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(h,_)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${w}`},f=[{type:12,data:l},...ae(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f})}},_$=e=>{Zg(e.inputs),e.compute(Jg(e.inputs),{inputs:[0]})}}),e0,w$,oE=j(()=>{se(),le(),ue(),Lc(),e0=e=>{let t=e[0].dataType,r=R.size(e[0].dims),n=R.size(e[1].dims),i=n%4===0,a=s=>{let o=D("x",t,[1],4),l=D("bias",t,[1],4),d=te("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${l.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,h=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(f).declareVariables(o,l,d)}

    ${wd(rt(t))}

    ${s.mainStart(hi)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",$d("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/hi/4)}})}},w$=e=>{e.inputs.length<2||R.size(e.inputs[1].dims)===0?Uw(e):e.compute(e0(e.inputs))}}),t0,r0,$$,x$,lE=j(()=>{se(),le(),De(),ue(),t0=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},r0=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,a=R.normalizeAxis(t.axis,i),s=r.slice(0);s.splice(a,1,...n);let o=r[a],l=e[0].dataType===9?4:1,d=Math.ceil(R.size(s)/l),f=[{type:12,data:d},{type:6,data:o},{type:12,data:a},...ae(e[0].dims,e[1].dims,s)],p=h=>{let _=D("data",e[0].dataType,e[0].dims.length,l),w=D("inputIndices",e[1].dataType,e[1].dims.length),$=te("output",e[0].dataType,s.length,l),E=m=>{let x=n.length,S=`var indicesIndices${m}  = ${w.type.indices}(0);`;for(let T=0;T<x;T++)S+=`${x>1?`indicesIndices${m}[${T}]`:`indicesIndices${m}`} = ${s.length>1?`outputIndices${m}[uniforms.axis + ${T}]`:`outputIndices${m}`};`;S+=`
          var idx${m} = ${w.getByIndices(`indicesIndices${m}`)};
          if (idx${m} < 0) {
            idx${m} = idx${m} + uniforms.axisDimLimit;
          }
          var dataIndices${m} : ${_.type.indices};
        `;for(let T=0,I=0;T<i;T++)T===a?(S+=`${i>1?`dataIndices${m}[${T}]`:`dataIndices${m}`} = u32(idx${m});`,I+=x):(S+=`${i>1?`dataIndices${m}[${T}]`:`dataIndices${m}`} = ${s.length>1?`outputIndices${m}[${I}]`:`outputIndices${m}`};`,I++);return S},y;if(e[0].dataType===9){let m=(x,S,T="")=>`
          let outputIndices${S} = ${$.offsetToIndices(`outputOffset + ${S}u`)};
          ${E(S)};
          let offset${S} = ${_.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${x}[${S}] = ${T}(${_.getByOffset(`index${S}`)}[component${S}]);
        `;y=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${m("value",0,"u32")}
        ${m("value",1,"u32")}
        ${m("value",2,"u32")}
        ${m("value",3,"u32")}
        ${$.setByOffset("global_idx","value")}
      `}else y=`
      let outputIndices = ${$.offsetToIndices("global_idx")};
      ${E("")};
      let value = ${_.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,w,$)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${y}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:p}},$$=e=>we({axis:e.axis}),x$=(e,t)=>{let r=e.inputs;t0(r),e.compute(r0(e.inputs,t))}}),n0,b$,S$,uE=j(()=>{se(),le(),ue(),n0=(e,t,r,n,i,a,s,o,l)=>{let d=[{type:12,data:a},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:l}],f=[a];d.push(...ae(t.dims,f));let p=h=>{let _=D("indices_data",t.dataType,t.dims.length),w=te("input_slice_offsets_data",12,1,1),$=[_,w],E=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(E).declareVariables(...$)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},b$=(e,t)=>{let r=e.inputs,n=r[0].dims,i=r[0].dataType,a=r[1].dims,s=a[a.length-1],o=R.sizeToDimension(a,a.length-1),l=R.sizeFromDimension(n,t.batchDims+s),d=R.sizeToDimension(n,t.batchDims),f=R.sizeFromDimension(n,t.batchDims),p=o/d,h=new Array(s),_=l;for(let S=0;S<s;++S)h[s-1-S]=_,_*=n[t.batchDims+s-1-S];let w=n0(e,r[1],h,t.batchDims,n,o,p,f,s),$=t.batchDims+s;if($>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let E=a.slice(0,-1).concat(n.slice($)),y=R.size(E),m=[{type:12,data:y},{type:12,data:l},...ae(r[0].dims,w.dims,E)],x=S=>{let T=D("data",r[0].dataType,r[0].dims.length),I=D("slice_offsets",12,w.dims.length),z=te("output",r[0].dataType,E.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,I,z)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:E,dataType:i}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:m}),getShaderSource:x},{inputs:[r[0],w]})},S$=e=>({batchDims:e.batch_dims,cacheKey:""})}),i0,a0,k$,E$,dE=j(()=>{se(),le(),De(),ue(),i0=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=R.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,l)=>l===r?Math.ceil(o/n)===a.dims[l]:o===a.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,l)=>o===a.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},a0=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,a=R.normalizeAxis(t.gatherAxis,i),s=R.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(a,1,...n);let l=R.size(o),d=e[2].dataType,f=e[0].dataType===22,p=[{type:12,data:l},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...ae(...e.map((_,w)=>_.dims),o)],h=_=>{let w=D("data",e[0].dataType,e[0].dims.length),$=D("inputIndices",e[1].dataType,e[1].dims.length),E=D("scales",e[2].dataType,e[2].dims.length),y=e.length>3?D("zeroPoint",e[3].dataType,e[3].dims.length):void 0,m=te("output",d,o.length),x=[w,$,E];y&&x.push(y);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(S).declareVariables(...x,m)}
        ${_.mainStart()}
        let output_indices = ${m.offsetToIndices("global_idx")};
        var indices_indices = ${$.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${m.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${$.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${m.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${w.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${m.indicesGet("output_indices","i")};
          ${w.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${$.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${w.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${m.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${w.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${w.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${w.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${E.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${E.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${E.getByIndices("scale_indices")};
        ${y?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${y.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${y.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${rt(d)}(quantized_data - zero_point) * scale;
        ${m.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,w)=>w!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,w)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:h}},k$=(e,t)=>{let r=e.inputs;i0(r,t),e.compute(a0(e.inputs,t))},E$=e=>we({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),s0,o0,T$,C$,cE=j(()=>{se(),le(),De(),ue(),s0=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},o0=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,a=e[1].dims,s=e[1].dataType,o=R.normalizeAxis(t.axis,i),l=r[o],d=a.slice(0),f=R.size(d),p=D("input",n,i),h=D("indicesInput",s,a.length),_=te("output",n,d.length),w=[{type:12,data:f},{type:6,data:l},{type:12,data:o}];return w.push(...ae(r,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:w}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,h,_)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},T$=e=>we({axis:e.axis}),C$=(e,t)=>{let r=e.inputs;s0(r),e.compute(o0(e.inputs,t))}}),l0,u0,I$,z$,pE=j(()=>{se(),le(),ue(),l0=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},u0=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,a,s]=T_.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(a/l),f=Math.ceil(i/l),p=!0,h=R.size(o),_=[{type:12,data:p?d:h},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],w=["type","type"];e.length===3&&(_.push(...ae(e[2].dims)),w.push("rank")),_.push(...ae(o));let $=y=>{let m="";t.transA&&t.transB?m="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?m="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?m="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(m="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let x=t.alpha===1?"":"value *= uniforms.alpha;",S=D("a",e[0].dataType,e[0].dims),T=D("b",e[1].dataType,e[1].dims),I=S.type.value,z=null,b=[S,T];e.length===3&&(z=D("c",e[2].dataType,e[2].dims.length),b.push(z));let O=te("output",e[0].dataType,o.length);b.push(O);let M=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${y.registerUniforms(M).declareVariables(...b)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${I}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${m}
    }

    ${x}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",O)}; value += ${I}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},E=y=>{let m=D("a",e[0].dataType,e[0].dims),x=D("b",e[1].dataType,e[1].dims),S=null,T=[m,x];e.length===3&&(S=D("c",e[2].dataType,e[2].dims.length),T.push(S));let I=te("output",e[0].dataType,o.length);T.push(I);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],b="",O="";t.transA&&t.transB?(O=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,b="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(O=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,b="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(O=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,b="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(O=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${m.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,b="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let M=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${y.registerUniforms(z).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${m.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${x.type.storage}, ${l}>, ${l}>;
  ${y.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${I.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${O}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${b}
      }
      workgroupBarrier();
    }

    ${M}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",I)}; value += ${I.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*f},programUniforms:_}),getShaderSource:E}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:_}),getShaderSource:$}},I$=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},z$=(e,t)=>{l0(e.inputs),e.compute(u0(e.inputs,t))}}),ar,fr,ln,un,d0,c0,p0,f0,h0,m0,g0,y0,N$,O$,fE=j(()=>{se(),le(),De(),ue(),[ar,fr,ln,un]=[0,1,2,3],d0=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},c0=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,p0=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,f0=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,h0=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,m0=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ar}] = batch;
     indices[${fr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${ln}] = u32(r);
            indices[${un}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${ln}] = u32(clamp(r, 0, H - 1));
          indices[${un}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${ln}] = gs_reflect(r, border[1], border[3]);
          indices[${un}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,g0=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ar}], indices[${fr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ar}], indices[${fr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ar}], indices[${fr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ar}], indices[${fr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ar}], indices[${fr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ar}], indices[${fr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,y0=(e,t)=>{let r=D("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=D("grid",e[1].dataType,n.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ar,fr,ln,un]=[0,3,1,2]);let s=te("output",e[0].dataType,a.length),o=r.type.value,l=R.size(a),d=[{type:12,data:l},...ae(e[0].dims,n,a)],f=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(r,i,s)}
  ${c0}
  ${p0(o)}
  ${f0(t)}
  ${h0(t)}
  ${m0(r,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${ln}]);
      let W_in = i32(uniforms.x_shape[${un}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${ar}], indices[${ln}], indices[${un}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${g0(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let h=R.size(a);return{outputs:[{dims:a,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:d}},getShaderSource:f}},N$=(e,t)=>{d0(e.inputs),e.compute(y0(e.inputs,t))},O$=e=>we({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),at,v0,R$,tu,_0,Qi,A$,M$=j(()=>{se(),le(),De(),Mc(),Pc(),ue(),rn(),at=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,v0=(e,t)=>{let r=e[0],n=at(e,1),i=at(e,2),a=at(e,3),s=at(e,4),o=at(e,5),l=at(e,6),d=at(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],p=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=p,w=0,$=0,E=Math.floor(h/t.numHeads);if(l&&d&&R.size(l.dims)&&R.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==f||l.dims[1]!==t.numHeads||l.dims[3]!==E)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==E)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=l.dims[2],$=l.dims[2]}else if(l&&R.size(l.dims)||d&&R.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y;if(n&&R.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');y=2,_=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==E)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');y=5,_=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==E)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');y=0,_=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}if(a&&R.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let m=w+_,x=0;if(s&&R.size(s.dims)>0){x=8;let z=s.dims;throw z.length===1?z[0]===f?x=1:z[0]===3*f+2&&(x=3):z.length===2&&z[0]===f&&z[1]===m&&(x=5),x===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,T=h;if(i&&R.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(_!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(_!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],S=!0}}let I=!1;if(s&&R.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&R.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==f||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==m)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:p,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:m,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:h,vHiddenSize:T,headSize:E,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:I,passPastInKv:S,qkvFormat:y}},R$=e=>we({...e}),tu=we({perm:[0,2,1,3]}),_0=(e,t,r,n,i,a,s)=>{let o=[n,i,a],l=R.size(o),d=[{type:12,data:l},{type:12,data:s},{type:12,data:a}],f=p=>{let h=te("qkv_with_bias",t.dataType,o),_=D("qkv",t.dataType,o),w=D("bias",r.dataType,o),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms($).declareVariables(_,w,h)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},Qi=(e,t,r,n,i,a,s,o)=>{let l=a;if(s&&R.size(s.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=_0(e,a,s,t,n,r*i,o),l=l.reshape([t,n,r,i]),r===1||n===1?l:e.compute(Tt(l,tu.perm),{inputs:[l],outputs:[-1]})[0]}else return a.dims.length===3&&(l=a.reshape([t,n,r,i])),r===1||n===1?l:e.compute(Tt(l,tu.perm),{inputs:[l],outputs:[-1]})[0]},A$=(e,t)=>{let r=v0(e.inputs,t),n=e.inputs[0],i=at(e.inputs,1),a=at(e.inputs,2),s=at(e.inputs,3),o=at(e.inputs,4),l=at(e.inputs,5),d=at(e.inputs,6),f=at(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let p=i&&a&&i.dims.length===4&&a.dims.length===4,h=Qi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,s,0);if(p)return Sa(e,h,i,a,o,void 0,d,f,l,r);if(!i||!a)throw new Error("key and value must be provided");let _=Qi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,s,r.hiddenSize),w=Qi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);Sa(e,h,_,w,o,void 0,d,f,l,r)}}),w0,$0,x0,b0,Ed,B$,D$,P$=j(()=>{se(),le(),De(),ue(),w0=e=>{if(!e||e.length<1)throw new Error("too few inputs")},$0=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),we({numOutputs:n,axis:t.axis,splitSizes:r})},x0=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ie("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,b0=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Ed=(e,t)=>{let r=e[0].dims,n=R.size(r),i=e[0].dataType,a=R.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=D("input",i,r.length),l=new Array(t.numOutputs),d=[],f=[],p=0,h=[{type:12,data:n}];for(let w=0;w<t.numOutputs;w++){p+=t.splitSizes[w],l[w]=p;let $=r.slice();$[a]=t.splitSizes[w],f.push($),s[w]=te(`output${w}`,i,$.length),d.push({dims:f[w],dataType:e[0].dataType})}h.push({type:12,data:l},...ae(r,...f));let _=w=>`
  ${w.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...s)}
  ${x0(l.length)}
  ${b0(s)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ie("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:h})}},B$=(e,t)=>{w0(e.inputs);let r=e.inputs.length===1?t:$0(e.inputs,t);e.compute(Ed(e.inputs,r),{inputs:[0]})},D$=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return we({axis:t,numOutputs:n,splitSizes:r})}}),S0,co,L$,U$=j(()=>{se(),le(),De(),ue(),S0=(e,t)=>{let[r,n,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!R.areEqual(n.dims,[])&&!R.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!R.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],f=i.dims[0],p=R.sizeFromDimension(r.dims,1)/d,h=o===0?i.dims[1]*2:p/s;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(l!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(d>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},co=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=R.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,f=e[2].dims[1],p=i===0?f*2:d/n,h=new Array(s,l,d/p,p-f),_=R.computeStrides(h),w=[{type:1,data:a},{type:12,data:h},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[o,d,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,l*p,1]}):[],...ae(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=E=>{let y=D("input",e[0].dataType,e[0].dims.length),m=D("position_ids",e[1].dataType,e[1].dims.length),x=D("cos_cache",e[2].dataType,e[2].dims.length),S=D("sin_cache",e[3].dataType,e[3].dims.length),T=te("output",e[0].dataType,e[0].dims.length);return E.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${E.declareVariables(y,m,x,S,T)}

        ${E.mainStart(hi)}
          let half_rotary_emb_dim = uniforms.${x.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${m.broadcastedIndicesToOffset("bsnh.xy",te("",m.type.tensor,2))};
            let position_id =
                u32(${m.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${y.getByOffset("i")} * ${x.get("position_id","bsnh[3]")} -
                ${y.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${y.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${y.getByOffset("j")} * ${x.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",y.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:we({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(h)/hi)},programUniforms:w})}},L$=(e,t)=>{S0(e.inputs,t),e.compute(co(e.inputs,t))}}),k0,E0,ru,T0,W$,hE=j(()=>{De(),se(),Pc(),M$(),P$(),rn(),U$(),ue(),k0=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],f=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],p=d,h=0,_=!n||n.dims.length===0,w=Math.floor(_?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);_&&(f=w*t.numHeads);let $=a&&a.dims.length!==0,E=s&&s.dims.length!==0;if($&&a.dims.length===4&&a.dims[0]===l&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===w)throw new Error("BSNH pastKey/pastValue is not supported");if($&&E){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=a.dims[2]}else if($||E)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}let m=0,x=!1,S=t.kvNumHeads?w*t.kvNumHeads:f;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],x=!0}}let T=e.length>4?e[5]:void 0;if(T){if(T.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let I=T.dims.reduce((z,b)=>z*b,1);if(I!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${I}.`);for(let z=0;z<T.dims.length;z++)if(T.dims[z]!==1&&T.dims[z]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${z}] = ${T.dims[z]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:h,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:S,headSize:w,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:m,scale:t.scale,broadcastResPosBias:!1,passPastInKv:x,qkvFormat:y}},E0=we({perm:[0,2,1,3]}),ru=(e,t,r)=>{let n=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute(Tt(n,E0.perm),{inputs:[n],outputs:[-1]})[0]),n},T0=(e,t,r,n)=>{let i=7,a=["type","type"],s=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=f=>{let p=D("seq_lens",r.dataType,r.dims),h=D("total_seq_lens",n.dataType,n.dims),_=te("pos_ids",i,s),w=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${f.registerUniforms(w).declareVariables(p,h,_)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${p.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${_.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},W$=(e,t)=>{var S;let r=k0(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=we({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[h,_,w]=!i&&!a?e.compute(Ed([n],p),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,a],$,E;if(t.doRotary){let T=e.compute(T0(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],I=e.inputs[7],z=e.inputs[8],b=we({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),O=[h,T,I,z],M=[-1];$=e.compute(co(O,b),{inputs:O,outputs:M})[0],O.splice(0,1,_);let G=we({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});E=e.compute(co(O,G),{inputs:O,outputs:M})[0]}let y=Qi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?$:h,void 0,0),m=ru(e,t.doRotary?E:_,r),x=ru(e,w,r);Sa(e,y,m,x,void 0,void 0,s,o,void 0,r,l,d)}}),nu,C0,I0,j$,mE=j(()=>{se(),le(),rn(),ue(),nu=(e,t,r,n,i,a,s,o)=>{let l=Re(a),d=l===1?"f32":`vec${l}f`,f=l===1?"vec2f":`mat2x${l}f`,p=i*s,h=64;p===1&&(h=256);let _=[i,s,a/l],w=[i,s,2],$=["rank","type","type"],E=[];E.push(...ae(_,w));let y=m=>{let x=D("x",t.dataType,3,l),S=D("scale",r.dataType,r.dims),T=D("bias",n.dataType,n.dims),I=te("output",1,3,2),z=[x,S,T,I];return`
  var<workgroup> workgroup_shared : array<${f}, ${h}>;
  const workgroup_size = ${h}u;
  ${m.declareVariables(...z)}
  ${m.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${x.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Yr("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${Yr("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${h}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:w,dataType:1}],dispatchGroup:{x:p},programUniforms:E}),getShaderSource:y},{inputs:[t,r,n],outputs:[-1]})[0]},C0=(e,t,r)=>{let n=t[0].dims,i=n,a=2,s=n[0],o=n[1],l=R.sizeFromDimension(n,a),d=Re(l),f=R.size(i)/d,p=nu(e,t[0],t[1],t[2],s,l,o,r.epsilon),h=[s,o,l/d],_=[s,o],w=["type","none"],$=E=>{let y=D("x",t[0].dataType,h.length,d),m=D("scale_shift",1,_.length,2),x=te("output",t[0].dataType,h.length,d),S=[y,m,x];return`
  ${E.registerUniform("output_size","u32").declareVariables(...S)}
  ${E.mainStart()}
  ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${x.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${m.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${y.getByOffset("global_idx")} * ${x.type.value}(scale_shift.x) + ${x.type.value}(scale_shift.y);
      ${x.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...ae(h,_,h)]}),getShaderSource:$},{inputs:[t[0],p]})},I0=(e,t,r)=>{let n=t[0].dims,i=n,a=n[0],s=n[n.length-1],o=R.sizeFromDimension(n,1)/s,l=Re(s),d=R.size(i)/l,f=[{type:12,data:o},{type:12,data:Math.floor(s/l)}],p=["type","type"],h=!1,_=[0,n.length-1];for(let y=0;y<n.length-2;y++)h=h||n[y+1]!==1,_.push(y+1);h=h&&n[n.length-1]!==1;let w=h?e.compute(Tt(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(y,m)=>n[_[m]])),$=nu(e,w,t[1],t[2],a,o,s,r.epsilon),E=y=>{let m=qe(t[0].dataType),x=l===1?"vec2f":`mat${l}x2f`,S=z=>{let b=z===0?"x":"y",O=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${m}(${O}(scale.${b}))`;case 2:return`vec2<${m}>(${O}(scale[0].${b}, scale[1].${b}))`;case 4:return`vec4<${m}>(${O}(scale[0].${b}, scale[1].${b}, scale[2].${b}, scale[3].${b}))`;default:throw new Error(`Not supported compoents ${l}`)}},T=D("input",t[0].dataType,t[0].dims,l),I=te("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${x}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${I.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${y.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:E},{inputs:[t[0],$]})},j$=(e,t)=>{t.format==="NHWC"?I0(e,e.inputs,t):C0(e,e.inputs,t)}}),z0,N0,V$,gE=j(()=>{se(),le(),ue(),z0=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},N0=(e,t,r)=>{let n=t.simplified,i=e[0].dims,a=e[1],s=!n&&e[2],o=i,l=R.normalizeAxis(t.axis,i.length),d=R.sizeToDimension(i,l),f=R.sizeFromDimension(i,l),p=R.size(a.dims),h=s?R.size(s.dims):0;if(p!==f||s&&h!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${h}`);let _=[];for(let T=0;T<i.length;++T)T<l?_.push(i[T]):_.push(1);let w=Re(f),$=["type","type"],E=[{type:12,data:d},{type:1,data:f},{type:12,data:Math.floor(f/w)},{type:1,data:t.epsilon}];s&&$.push("type");let y=r>1,m=r>2,x=T=>{let I=qe(e[0].dataType),z=[D("x",e[0].dataType,e[0].dims,w),D("scale",a.dataType,a.dims,w)];s&&z.push(D("bias",s.dataType,s.dims,w)),z.push(te("output",e[0].dataType,o,w)),y&&z.push(te("mean_data_output",1,_)),m&&z.push(te("inv_std_output",1,_));let b=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(b).declareVariables(...z)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${yd("f32",w)};
    var mean_square_vector = ${yd("f32",w)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Jn(I,w,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Yr("mean_vector",w)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Yr("mean_square_vector",w)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Jn(I,w,"x[j + offset]")};
      let f32scale = ${Jn(I,w,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Jn(I,w,"bias[j]")}`:""}
      );
    }

    ${y?"mean_data_output[global_idx] = mean":""};
    ${m?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return y&&S.push({dims:_,dataType:1}),m&&S.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${w};${r};${n}`,inputDependencies:$},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:E}),getShaderSource:x}},V$=(e,t)=>{z0(e.inputs),e.compute(N0(e.inputs,t,e.outputCount))}}),O0,F$,yE=j(()=>{le(),Vc(),Fc(),O0=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},F$=e=>{O0(e.inputs);let t=fi.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(jc(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=R.size(e.inputs[0].dims.slice(0,-2)),s=R.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,a,n]),l=e.inputs[1].reshape([1,n,r]),d=[1,a,r],f=[o,l];e.compute(uo(f,{activation:""},t,d),{inputs:f})}else e.compute(uo(e.inputs,{activation:""},t))}}}),R0,A0,M0,q$,H$,vE=j(()=>{se(),le(),De(),ue(),R0=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!R.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(R.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(R.size(l)!==d)throw new Error("zeroPoints input size error.")}},A0=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],a=t.k,s=t.n,o=r.slice(0,n-2),l=R.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=Re(t.k),h=Re(d),_=Re(s),w=o.concat([i,s]),$=i>1&&s/_%2===0?2:1,E=R.size(w)/_/$,y=64,m=[],x=[l,i,a/p],S=R.convertShape(e[1].dims).slice();S.splice(-1,1,d/h),m.push(...ae(x)),m.push(...ae(S)),m.push(...ae(e[2].dims)),e.length===4&&m.push(...ae(R.convertShape(e[3].dims)));let T=[l,i,s/_];m.push(...ae(T));let I=z=>{let b=x.length,O=D("a",e[0].dataType,b,p),M=D("b",12,S.length,h),G=D("scales",e[2].dataType,e[2].dims.length),Q=[O,M,G],X=e.length===4?D("zero_points",12,e[3].dims.length):void 0;X&&Q.push(X);let A=T.length,ee=te("output",e[0].dataType,A,_),J=qe(e[0].dataType),re=(()=>{switch(p){case 1:return`array<${J}, 8>`;case 2:return`mat4x2<${J}>`;case 4:return`mat2x4<${J}>`;default:throw new Error(`${p}-component is not supported.`)}})(),W=Math.floor(32/t.bits),P=Math.floor(W/8),K=()=>{let Y="";for(let F=0;F<P;F++){let ge=F*t.bits*4,We=ge+t.bits;Y+=`
          // reuse a data (pass ${F})
            var input_offset${F>0?F:""} = ${F===0?O.indicesToOffset(`${O.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${F>0?F:""}: ${re};
            for (var j${F>0?F:""}: u32 = 0; j${F>0?F:""} < ${8/p}; j${F>0?F:""}++) {
              a_data${F>0?F:""}[j${F>0?F:""}] = ${O.getByOffset(`input_offset${F>0?F:""}`)};
              input_offset${F>0?F:""}++;
            }
          `;for(let Ce=0;Ce<_*$;Ce++)Y+=`
            b_value = ${h===1?`b${Ce}_data`:`b${Ce}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${F*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ge}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${We}u) & b_mask);`}
            b_quantized_values = ${re}(${Array.from({length:4},(dt,ct)=>`${J}(b_value_lower[${ct}]), ${J}(b_value_upper[${ct}])`).join(", ")});
            b_dequantized_values = ${p===1?`${re}(${Array.from({length:8},(dt,ct)=>`(b_quantized_values[${ct}] - ${X?`zero_point${Ce}`:"zero_point"}) * scale${Ce}`).join(", ")});`:`(b_quantized_values - ${re}(${Array(8).fill(`${X?`zero_point${Ce}`:"zero_point"}`).join(",")})) * scale${Ce};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(Ce/_)}]${_>1?`[${Ce%_}]`:""} += ${Array.from({length:8/p},(dt,ct)=>`${p===1?`a_data${F>0?F:""}[${ct}] * b_dequantized_values[${ct}]`:`dot(a_data${F>0?F:""}[${ct}], b_dequantized_values[${ct}])`}`).join(" + ")};
          `}return Y},L=()=>{let Y=`
            var col_index = col * ${_};
            ${X?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${J}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let F=0;F<_*$;F++)Y+=`
            let scale${F} = ${G.getByOffset("col_index * nBlocksPerCol + block")};
            ${X?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${X.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${F} = ${J}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Y},V=()=>{let Y=`col_index = col * ${_};`;for(let F=0;F<_*$;F++)Y+=`
            let b${F}_data = ${M.getByIndices(`${M.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Y+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${re};
            var b_dequantized_values: ${re};`,Y};return`
        var<workgroup> workgroup_shared: array<${ee.type.value}, ${$*y}>;
        ${z.declareVariables(...Q,ee)}
        ${z.mainStart([y,1,1])}
          let output_indices = ${ee.offsetToIndices(`(global_idx / ${y}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${y}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${L()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${V()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${K()}
                word_offset += ${W/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${ee.type.value} = ${ee.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${y}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${ee.setByIndices(`${ee.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${h};${_};${$};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:w,dataType:f}],dispatchGroup:{x:E},programUniforms:m}),getShaderSource:I}},M0=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],a=t.k,s=t.n,o=r.slice(0,n-2),l=R.size(o),d=e[1].dims[2]/4,f=e[0].dataType,p=Re(t.k),h=Re(d),_=o.concat([i,s]),w=128,$=s%8===0?8:s%4===0?4:1,E=w/$,y=Math.floor(32/t.bits),m=E*h*y,x=m/p,S=m/t.blockSize,T=R.size(_)/$,I=[],z=[l,i,a/p],b=R.convertShape(e[1].dims).slice();b.splice(-1,1,d/h),I.push(...ae(z)),I.push(...ae(b)),I.push(...ae(e[2].dims)),e.length===4&&I.push(...ae(R.convertShape(e[3].dims)));let O=[l,i,s];I.push(...ae(O));let M=G=>{let Q=z.length,X=D("a",e[0].dataType,Q,p),A=D("b",12,b.length,h),ee=D("scales",e[2].dataType,e[2].dims.length),J=[X,A,ee],re=e.length===4?D("zero_points",12,e[3].dims.length):void 0;re&&J.push(re);let W=O.length,P=te("output",e[0].dataType,W),K=qe(e[0].dataType),L=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${K}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${K}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${K}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${K}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${X.type.value}, ${x}>;
        var<workgroup> inter_results: array<array<${P.type.value}, ${E}>, ${$}>;
        ${G.declareVariables(...J,P)}
        ${G.mainStart([E,$,1])}
          let output_indices = ${P.offsetToIndices(`workgroup_index * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${x};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${x}; a_offset += ${w})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${X.getByIndices(`${X.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${X.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${re?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${re.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${K}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${K}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${ee.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${A.getByIndices(`${A.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let V=Math.floor(y/8),Y="";for(let F=0;F<V;F++){let ge=F*t.bits*4,We=ge+t.bits;Y+=`
              ${L()}
              {${t.bits===2?`
                let half_word = b_value >> ${F*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ge}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${We}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${K}>(${Array.from({length:4},(Ce,dt)=>`${K}(b_value_lower[${dt}]), ${K}(b_value_upper[${dt}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${K}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Ce,dt)=>`${`dot(a_data${dt}, b_dequantized_values[${dt}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return Y})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${P.type.value} = ${P.type.value}(0);
            for (var b = 0u; b < ${E}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${P.setByIndices(`${P.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${h};${E};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:f}],dispatchGroup:{x:T},programUniforms:I}),getShaderSource:M}},q$=(e,t)=>{R0(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(M0(e.inputs,t)):e.compute(A0(e.inputs,t))},H$=e=>we(e)}),B0,D0,P0,L0,U0,W0,j0,V0,G$,_E=j(()=>{se(),le(),ue(),B0=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},D0=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${ie("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ie("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${ie("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},P0=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ie("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ie("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ie("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ie("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},L0=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ie("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ie("uniforms.x_shape",i,t)})) {
                  k = i32(${ie("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${ie("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},U0=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ie("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${ie("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${ie("uniforms.x_shape",i,t)})) {
                  k -= i32(${ie("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${ie("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},W0=(e,t,r)=>{switch(r.mode){case 0:return D0(e,t,r.pads.length);case 1:return P0(e,t,r.pads.length);case 2:return L0(e,t,r.pads.length);case 3:return U0(e,t,r.pads.length);default:throw new Error("Invalid mode")}},j0=(e,t)=>{let r=R.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=R.size(r),a=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...ae(e[0].dims,r));let o=["rank"],l=d=>{let f=te("output",e[0].dataType,r.length),p=D("x",e[0].dataType,n.length),h=p.type.value,_=W0(f,n.length,t),w=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&w.push({name:"constant_value",type:s?h:"f32"}),`
            ${d.registerUniforms(w).declareVariables(p,f)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(r)/64)},programUniforms:a}),getShaderSource:l}},V0=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)a[Number(o[l])]=Number(r[l]),a[Number(o[l])+i]=Number(r[l+o.length])}else r.forEach((o,l)=>a[Number(l)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:n,pads:s}}else return t},G$=(e,t)=>{B0(e.inputs);let r=V0(e.inputs,t);e.compute(j0(e.inputs,r),{inputs:[0]})}}),Pi,iu,au,su,ou,F0,q0,lu,uu,K$,Q$,du,X$,Z$,cu,Y$,J$,e2,t2,wE=j(()=>{Pt(),se(),le(),ue(),Pi=e=>{if(Te.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},iu=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),l=a?t.dilations.slice():[],d=t.pads.slice();oo.adjustPoolAttributes(r,i,s,o,l,d);let f=oo.computePoolOutputShape(r,i,o,l,s,d,t.autoPad),p=Object.assign({},t);a?Object.assign(p,{kernelShape:s,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let h=f.slice();return h.push(h.splice(1,1)[0]),[p,n?h:f]},au=(e,t)=>{let r=t.format==="NHWC",n=R.size(e),i=R.size(t.kernelShape),a=[{type:12,data:n},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],p=!!(d+f);a.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:f}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],w=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],E=t.pads[t.pads.length-2];h=!!($+E),a.push({type:12,data:_},{type:12,data:w},{type:12,data:$},{type:12,data:E}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,p,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=R.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,f)=>d+f);return[a,s,!!l,!1,!1]}},su=(e,t,r,n,i,a,s,o,l,d,f,p)=>{let h=i.format==="NHWC",_=t.type.value,w=te("output",t.type.tensor,n);if(i.kernelShape.length<=2){let $="",E="",y="",m=r-(h?2:1);if(f?$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${m}] = indices[${m}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${m}] < 0 || xIndices[${m}]
                      >= uniforms.x_shape[${m}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${m}] = indices[${m}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,i.kernelShape.length===2){let x=r-(h?3:2);p?E=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${x}] < 0 || xIndices[${x}] >= uniforms.x_shape[${x}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:E=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sh - uniforms.phStart + j;
                `,y=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var value = ${_}(${o});
              var pad = 0;
              ${E}
              ${$}
              ${y}
              ${s}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let $=i.kernelShape.length,E=i.pads.length,y="";return d?y=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:y=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(l).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var offsets: array<u32, ${$}>;

              var value = ${_}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${$-1}u; j++) {
                  offsets[j] = offset / ${ie("uniforms.kernelStrides","j",$)};
                  offset -= offsets[j] * ${ie("uniforms.kernelStrides","j",$)};
                }
                offsets[${$-1}] = offset;

                isPad = false;
                for (var j = ${r-$}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${ie("uniforms.strides",`j - ${r-$}u`,$)}
                    + offsets[j - ${r-$}u] - ${ie("uniforms.pads","j - 2u",E)};
                  ${y}
              }
              ${s}

              output[global_idx] = value;
            }`}},ou=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,F0=e=>`${ou(e)};${e.countIncludePad}`,q0=e=>`${ou(e)};${e.storageOrder};${e.dilations}`,lu=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),uu=(e,t,r,n)=>{let[i,a]=iu(t,n,r),s=D("x",t.dataType,t.dims.length),o=s.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[f,p,h,_,w]=au(a,i);f.push(...ae(t.dims,a));let $=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${h};${_};${w}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:f}),getShaderSource:E=>su(E,s,t.dims.length,a.length,i,l,d,0,p,h,_,w)}},K$=e=>{let t=e.count_include_pad!==0,r=lu(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:F0(n)}},Q$=(e,t)=>{Pi(e.inputs),e.compute(uu("AveragePool",e.inputs[0],!1,t))},du={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},X$=e=>{let t=e.format;return{format:t,...du,cacheKey:t}},Z$=(e,t)=>{Pi(e.inputs),e.compute(uu("GlobalAveragePool",e.inputs[0],!0,t))},cu=(e,t,r,n)=>{let[i,a]=iu(t,n,r),s=`
      value = max(x_val, value);
    `,o="",l=D("x",t.dataType,t.dims.length),d=["rank"],[f,p,h,_,w]=au(a,i);return f.push(...ae(t.dims,a)),{name:e,shaderCache:{hint:`${n.cacheKey};${h};${_};${w}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:f}),getShaderSource:$=>su($,l,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,p,h,_,w)}},Y$=(e,t)=>{Pi(e.inputs),e.compute(cu("MaxPool",e.inputs[0],!1,t))},J$=e=>{let t=e.storage_order,r=e.dilations,n=lu(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:q0(i)}},e2=e=>{let t=e.format;return{format:t,...du,cacheKey:t}},t2=(e,t)=>{Pi(e.inputs),e.compute(cu("GlobalMaxPool",e.inputs[0],!0,t))}}),H0,G0,r2,n2,$E=j(()=>{se(),le(),De(),ue(),H0=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},G0=(e,t)=>{let r=R.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,a=e[0].dims,s=e[1].dataType,o=R.size(a),l=n===3||n===2,d=l?[Math.ceil(R.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,p=e.length>2?e[2]:void 0,h=p?l?[Math.ceil(R.size(p.dims)/4)]:p.dims:void 0,_=f.length===0||f.length===1&&f[0]===1,w=_===!1&&f.length===1,$=Re(o),E=_&&(!l||$===4),y=E?$:1,m=E&&!l?$:1,x=D("input",l?12:n,d.length,m),S=D("scale",s,f.length),T=p?D("zero_point",l?12:n,h.length):void 0,I=te("output",s,a.length,y),z=[x,S];T&&z.push(T);let b=[d,f];p&&b.push(h);let O=[{type:12,data:o/y},{type:12,data:r},{type:12,data:t.blockSize},...ae(...b,a)],M=G=>{let Q=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${G.registerUniforms(Q).declareVariables(...z,I)}
      ${G.mainStart()}
          ${G.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${I.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${x.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${y===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${x.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${S.getByOffset("0")}`:w?`
            let scale_index = ${I.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?_?l?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:w?l?`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":x.type.value}(0);`};
      // Compute and write output
      ${I.setByOffset("global_idx",`${I.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:M,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/y/64),y:1,z:1},programUniforms:O})}},r2=(e,t)=>{H0(e.inputs,t),e.compute(G0(e.inputs,t))},n2=e=>we({axis:e.axis,blockSize:e.blockSize})}),K0,Q0,i2,xE=j(()=>{Pt(),se(),ue(),K0=(e,t,r)=>{let n=e===t,i=e<t&&r<0,a=e>t&&r>0;if(n||i||a)throw new Error("Range these inputs' contents are invalid.")},Q0=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),a=[i],s=i,o=[{type:12,data:s},{type:n,data:e},{type:n,data:r},...ae(a)],l=d=>{let f=te("output",n,a.length),p=f.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${d.registerUniforms(h).declareVariables(f)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},i2=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),Te.webgpu.validateInputContent&&K0(t,r,n),e.compute(Q0(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),X0,Z0,a2,s2,bE=j(()=>{se(),le(),De(),ue(),X0=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${t}, bitcast<${n}>(${r}));`:`
              ${i}bitcast<${n}>(oldValue) + (${r})${a}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${a}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Z0=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r,a=1,s=Math.ceil(R.sizeToDimension(n,n.length-1)/a),o=n[n.length-1],l=R.sizeFromDimension(r,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:l},...ae(e[1].dims,e[2].dims,i)],f=p=>{let h=D("indices",e[1].dataType,e[1].dims.length),_=D("updates",e[2].dataType,e[2].dims.length,a),w=t.reduction!=="none"&&t.reduction!==""?A_("output",e[0].dataType,i.length):te("output",e[0].dataType,i.length,a);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,_,w)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${X0(t.reduction,"output[data_offset + i]","value",w.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:f}},a2=e=>we({reduction:e.reduction}),s2=(e,t)=>{e.compute(Z0(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Y0,J0,ey,pu,ty,ry,ny,iy,ay,sy,oy,ly,fu,uy,dy,cy,py,fy,o2,l2,SE=j(()=>{se(),le(),De(),ue(),Y0=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},J0=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((i,a)=>n[i]=e[a]),n},ey=(e,t,r,n,i,a)=>{let[s,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(f=>a.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(f=>n.push(f)),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Y0(n,t),t.axes.length>0&&J0(n,t.axes,d).forEach((f,p)=>n[p]=f)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(f=>i.push(Number(f))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},pu=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,ty=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${pu("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${pu("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ry=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ny=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((a,s)=>{n[a]=i[s],n[s+r]=i[t.length+s]}),n):i},iy=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(a=>i.push(a)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((a,s)=>i[a]=r[s])}else r.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},ay=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=n),r.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(n,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},sy=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ie("uniforms.scales","i",n)};
        var roi_low = ${ie("uniforms.roi","i",i)};
        var roi_hi = ${ie("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ie("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ie("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,oy=(e,t,r,n,i,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ie("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ie("uniforms.roi","i",a)};
          var roi_hi = ${ie("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${ie("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ie("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,ly=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ie("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,fu=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",uy=(e,t,r,n,i)=>{let[a,s,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${fu(e,l,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
      ${n?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},dy=(e,t,r,n,i,a,s,o,l,d)=>{let f=r.length===2,[p,h]=f?[0,1]:[2,3],_=e.type.value,w=$=>{let E=$===p?"row":"col";return`
      fn ${E}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",$)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[$]},
        ${n[$]}, ${r[$]}, ${a[$]}, ${a[$]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[$]} - 1))) {
          return ${l};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${E}: ${_} = originalIdx + ${_}(i);
          if (${E} < 0 || ${E} >= ${r[$]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${E} = max(0, min(${E}, ${r[$]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",$,`u32(${E})`)};
          data[i + 1] = ${$===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${w(p)};
    ${w(h)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},cy=(e,t,r,n,i)=>{let[a,s,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${fu(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${s}];
      var height:${f} = originalIndices[${o}];
      var width:${f} = originalIndices[${l}];
      ${n?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},py=(e,t,r,n,i,a)=>{let s=e.dims,o=ny(a,t.axes,s.length),l=iy(s,n,i,t.axes),d=n.slice();n.length===0&&(d=s.map((m,x)=>m===0?1:l[x]/m),t.keepAspectRatioPolicy!=="stretch"&&(l=ay(s,d,t)));let f=te("output",e.dataType,l.length),p=D("input",e.dataType,s.length),h=R.size(l),_=s.length===l.length&&s.every((m,x)=>m===l[x]),w=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,E=p.type.value,y=m=>`
      ${_?"":`
      ${ty(t.coordinateTransformMode,E)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${ly(p,s)};
              ${ry(t.nearestMode,r,E)};
              ${oy(p,f,s,l,d.length,o.length,w)};
              `;case"linear":return`
              ${sy(f,s,l,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${uy(p,f,s,w,$)}`;if(s.length===3||s.length===5)return`${cy(p,f,s,w,$)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${dy(p,f,s,l,d,o,t.cubicCoeffA,w,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${m.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(p,f)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:o},...ae(s,l)]})}},fy=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},o2=(e,t)=>{let r=[],n=[],i=[],a=fy(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");ey(e.inputs,t,a,r,n,i),e.compute(py(e.inputs[0],t,a,r,n,i),{inputs:[0]})},l2=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return we({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),hy,my,u2,kE=j(()=>{se(),le(),ue(),hy=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},my=(e,t,r,n)=>{let i=t.simplified,a=e[0].dims,s=R.size(a),o=a,l=s,d=a.slice(-1)[0],f=n?a.slice(0,-1).concat(1):[],p=!i&&e.length>3,h=e.length>4,_=n&&r>1,w=n&&r>2,$=r>3,E=64,y=Re(d),m=[{type:12,data:l},{type:12,data:y},{type:12,data:d},{type:1,data:t.epsilon}],x=T=>{let I=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[D("x",e[0].dataType,e[0].dims,y),D("skip",e[1].dataType,e[1].dims,y),D("gamma",e[2].dataType,e[2].dims,y)];p&&z.push(D("beta",e[3].dataType,e[3].dims,y)),h&&z.push(D("bias",e[4].dataType,e[4].dims,y)),z.push(te("output",e[0].dataType,o,y)),_&&z.push(te("mean_output",1,f)),w&&z.push(te("inv_std_output",1,f)),$&&z.push(te("input_skip_bias_sum",e[0].dataType,o,y));let b=qe(e[0].dataType),O=qe(1,y);return`

      ${T.registerUniforms(I).declareVariables(...z)}
      var<workgroup> sum_shared : array<${O}, ${E}>;
      var<workgroup> sum_squared_shared : array<${O}, ${E}>;

      ${T.mainStart([E,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${E};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${E};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${E-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":b+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Jn(b,y,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${E};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Yr("sum",y)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Yr("square_sum",y)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${w?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${b}(mean)`}) *
            ${b}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return r>1&&S.push({dims:f,dataType:1}),r>2&&S.push({dims:f,dataType:1}),r>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${y};${_};${w};${$}`,inputDependencies:e.map((T,I)=>"type")},getShaderSource:x,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:m})}},u2=(e,t)=>{hy(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(my(e.inputs,t,e.outputCount,!1),{outputs:r})}}),gy,Li,yy,hu,vy,_y,d2,c2,EE=j(()=>{se(),le(),De(),ue(),gy=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},Li=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},yy=(e,t)=>{if(e.length>1){let r=Li(e,1),n=Li(e,2),i=Li(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),we({starts:r,ends:n,axes:i})}else return t},hu=(e,t,r,n,i)=>{let a=e;return e<0&&(a+=r[n[t]]),i[t]<0?Math.max(0,Math.min(a,r[n[t]]-1)):Math.max(0,Math.min(a,r[n[t]]))},vy=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${ie("uniforms.input_shape","i",r.length)};
            let steps_i = ${ie("uniforms.steps","i",r.length)};
            let signs_i = ${ie("uniforms.signs","i",r.length)};
            let starts_i = ${ie("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,_y=(e,t)=>{let r=e[0].dims,n=R.size(r),i=t.axes.length>0?R.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=Li(e,4);a.forEach(y=>y!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let s=t.starts.map((y,m)=>hu(y,m,r,i,a)),o=t.ends.map((y,m)=>hu(y,m,r,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let y=0;y<r.length;++y)i.includes(y)||(s.splice(y,0,0),o.splice(y,0,r[y]),a.splice(y,0,1));let l=a.map(y=>Math.sign(y));a.forEach((y,m,x)=>{if(y<0){let S=(o[m]-s[m])/y,T=s[m],I=T+S*a[m];s[m]=I,o[m]=T,x[m]=-y}});let d=r.slice(0);i.forEach((y,m)=>{d[y]=Math.ceil((o[y]-s[y])/a[y])});let f={dims:d,dataType:e[0].dataType},p=te("output",e[0].dataType,d.length),h=D("input",e[0].dataType,e[0].dims.length),_=R.size(d),w=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:a.length}],$=[{type:12,data:_},{type:12,data:s},{type:6,data:l},{type:12,data:a},...ae(e[0].dims,d)],E=y=>`
      ${y.registerUniforms(w).declareVariables(h,p)}
        ${vy(h,p,r)}
        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:E,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:$})}},d2=(e,t)=>{gy(e.inputs,t);let r=yy(e.inputs,t);e.compute(_y(e.inputs,r),{inputs:[0]})},c2=e=>{let t=e.starts,r=e.ends,n=e.axes;return we({starts:t,ends:r,axes:n})}}),wy,$y,p2,f2,TE=j(()=>{se(),le(),De(),rn(),ue(),wy=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},$y=(e,t)=>{let r=e.inputs[0],n=r.dims,i=R.size(n),a=n.length,s=R.normalizeAxis(t.axis,a),o=s<n.length-1,l,d=[];o?(d=Array.from({length:a},(z,b)=>b),d[s]=a-1,d[a-1]=s,l=e.compute(Tt(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let f=l.dims,p=f[a-1],h=i/p,_=Re(p),w=p/_,$=64;h===1&&($=256);let E=(z,b)=>b===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:b===2?`max(${z}.x, ${z}.y)`:b===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,y=D("x",l.dataType,l.dims,_),m=te("result",l.dataType,l.dims,_),x=y.type.value,S=qe(l.dataType)==="f32"?`var threadMax = ${x}(-3.4028234663852886e+38f);`:`var threadMax = ${x}(-65504.0h);`,T=z=>`
      var<workgroup> rowMaxShared : ${x};
      var<workgroup> rowSumShared : ${x};
      var<workgroup> threadShared : array<${x}, ${$}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${x} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${x}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables(y,m)}
      ${z.mainStart($)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${$};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${x}(${E("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${x}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${x}(${Yr("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${x}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,I=e.compute({name:"Softmax",shaderCache:{hint:`${_};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:l.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:w}]}),getShaderSource:T},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(Tt(I,d),{inputs:[I]})},p2=(e,t)=>{wy(e.inputs),$y(e,t)},f2=e=>we({axis:e.axis})}),mu,xy,by,Sy,h2,CE=j(()=>{se(),le(),ue(),mu=e=>Array.from(e.getBigInt64Array(),Number),xy=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(mu(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},by=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},Sy=(e,t)=>{let r=e[0].dims,n=t??mu(e[1]),i=by(r,n),a=R.size(i),s=e[0].dataType,o=D("input",s,r.length),l=te("output",s,i.length),d=f=>`
      const inputShape = ${o.indices(...r)};
      ${f.registerUniform("output_size","u32").declareVariables(o,l)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ae(e[0].dims,i)]}),getShaderSource:d}},h2=e=>{xy(e.inputs),e.compute(Sy(e.inputs),{inputs:[0]})}}),ky,Ey,m2,IE=j(()=>{se(),le(),ue(),ky=(e,t,r,n,i)=>{let a=te("output_data",i,r.length,4),s=D("a_data",t[1].dataType,t[1].dims.length,4),o=D("b_data",t[2].dataType,t[2].dims.length,4),l=D("c_data",t[0].dataType,t[0].dims.length,4),d,f=(p,h,_)=>`select(${h}, ${p}, ${_})`;if(!n)d=a.setByOffset("global_idx",f(s.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let p=(h,_,w="")=>{let $=`a_data[index_a${_}][component_a${_}]`,E=`b_data[index_b${_}][component_b${_}]`,y=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${a.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${s.broadcastedIndicesToOffset(`output_indices${_}`,a)};
            let offset_b${_} = ${o.broadcastedIndicesToOffset(`output_indices${_}`,a)};
            let offset_c${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,a)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${h}[${_}] = ${w}(${f($,E,y)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Ey=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,a=!(R.areEqual(t,r)&&R.areEqual(r,n)),s=t,o=R.size(t);if(a){let d=fi.calcShape(fi.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=R.size(s)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>ky(d,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...ae(n,t,r,s)]})}},m2=e=>{e.compute(Ey(e.inputs))}}),g2,zE=j(()=>{Fk(),Pc(),qk(),Hk(),Gk(),Kk(),Qk(),eE(),rE(),nE(),iE(),aE(),sE(),oE(),lE(),uE(),dE(),cE(),pE(),fE(),hE(),mE(),gE(),yE(),vE(),M$(),_E(),wE(),$E(),xE(),bE(),Dc(),SE(),U$(),kE(),EE(),TE(),P$(),CE(),rn(),Lc(),IE(),g2=new Map([["Abs",[uw]],["Acos",[dw]],["Acosh",[cw]],["Add",[qw]],["ArgMax",[aw,_d]],["ArgMin",[iw,_d]],["Asin",[pw]],["Asinh",[fw]],["Atan",[hw]],["Atanh",[mw]],["Attention",[sw]],["AveragePool",[Q$,K$]],["BatchNormalization",[ow]],["BiasAdd",[lw]],["BiasSplitGelu",[Fw]],["Cast",[yw,gw]],["Ceil",[_w]],["Clip",[vw]],["Concat",[t$,r$]],["Conv",[kd,Sd]],["ConvTranspose",[p$,c$]],["Cos",[ww]],["Cosh",[$w]],["CumSum",[f$,h$]],["DepthToSpace",[m$,g$]],["DequantizeLinear",[r2,n2]],["Div",[Hw]],["Einsum",[y$,v$]],["Elu",[xw,Ki]],["Equal",[Gw]],["Erf",[bw]],["Exp",[Sw]],["Expand",[_$]],["FastGelu",[w$]],["Floor",[kw]],["FusedConv",[kd,Sd]],["Gather",[x$,$$]],["GatherElements",[C$,T$]],["GatherBlockQuantized",[k$,E$]],["GatherND",[b$,S$]],["Gelu",[Ew]],["Gemm",[z$,I$]],["GlobalAveragePool",[Z$,X$]],["GlobalMaxPool",[t2,e2]],["Greater",[Zw]],["GreaterOrEqual",[Jw]],["GridSample",[N$,O$]],["GroupQueryAttention",[W$]],["HardSigmoid",[Aw,Rw]],["InstanceNormalization",[j$]],["LayerNormalization",[V$]],["LeakyRelu",[Tw,Ki]],["Less",[Yw]],["LessOrEqual",[e$]],["Log",[jw]],["MatMul",[F$]],["MatMulNBits",[q$,H$]],["MaxPool",[Y$,J$]],["Mul",[Kw]],["MultiHeadAttention",[A$,R$]],["Neg",[Iw]],["Not",[Cw]],["Pad",[G$]],["Pow",[Qw]],["QuickGelu",[Vw,Ki]],["Range",[i2]],["Reciprocal",[zw]],["ReduceMin",[J_]],["ReduceMean",[K_]],["ReduceMax",[Y_]],["ReduceSum",[tw]],["ReduceProd",[ew]],["ReduceL1",[Q_]],["ReduceL2",[X_]],["ReduceLogSum",[nw]],["ReduceLogSumExp",[Z_]],["ReduceSumSquare",[rw]],["Relu",[Nw]],["Resize",[o2,l2]],["RotaryEmbedding",[L$]],["ScatterND",[s2,a2]],["Sigmoid",[Ow]],["Sin",[Mw]],["Sinh",[Bw]],["Slice",[d2,c2]],["SkipLayerNormalization",[u2]],["Split",[B$,D$]],["Sqrt",[Dw]],["Softmax",[p2,f2]],["Sub",[Xw]],["Tan",[Pw]],["Tanh",[Lw]],["ThresholdedRelu",[Ww,Ki]],["Tile",[h2]],["Transpose",[B_,D_]],["Where",[m2]]])}),y2,NE=j(()=>{Pt(),kr(),ue(),y2=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){dr(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let l=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Jt(e.programInfo.name)}dispose(){}build(e,t){dr(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let i=M_(t,this.backend.device.limits),a=e.getShaderSource(i),s=`${n.join(`
`)}
${i.additionalImplementations}
${a}`,o=r.createShaderModule({code:s,label:e.name});he("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Jt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let a=t*r*n,s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),v2={};vi(v2,{WebGpuBackend:()=>_2});var Ty,Cy,Iy,_2,OE=j(()=>{Pt(),se(),kr(),z_(),jk(),zE(),NE(),Ty=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let a=e[n].dims.length;r.push(`${i};${a}`);break}case"dims":{let a=e[n].dims.join(",");r.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},Cy=(e,t,r)=>{var i,a;let n=e.name;return(i=e.shaderCache)!=null&&i.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${Ty(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,n},Iy=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},_2=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=o=>t.features.has(o)&&r.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(n);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new Iy(s),this.gpuDataManager=R_(this),this.programManager=new y2(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Rc(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;dr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var n;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],s=a.kernelId,o=this.kernels.get(s),l=o.kernelType,d=o.kernelName,f=a.programName,p=a.inputTensorViews,h=a.outputTensorViews,_=t[i*2],w=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let $=Number(_-this.queryTimeBase),E=Number(w-this.queryTimeBase);if(!Number.isSafeInteger($)||!Number.isSafeInteger(E))throw new RangeError("incorrect timestamp range");if((n=this.env.webgpu.profiling)!=null&&n.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(y=>({dims:y.dims,dataType:gr(y.dataType)})),outputsMetadata:h.map(y=>({dims:y.dims,dataType:gr(y.dataType)})),kernelId:s,kernelType:l,kernelName:d,programName:f,startTime:$,endTime:E});else{let y="";p.forEach((x,S)=>{y+=`input[${S}]: [${x.dims}] | ${gr(x.dataType)}, `});let m="";h.forEach((x,S)=>{m+=`output[${S}]: [${x.dims}] | ${gr(x.dataType)}, `}),console.log(`[profiling] kernel "${s}|${l}|${d}|${f}" ${y}${m}start time: ${$} ns, execution time: ${E-$} ns`)}io("GPU",`${f}::${_}::${w}`)}e.unmap(),this.pendingQueries.delete(e)}),Jt()}run(e,t,r,n,i,a){dr(e.name);let s=[];for(let m=0;m<t.length;++m){let x=t[m].data;if(x===0)continue;let S=this.gpuDataManager.get(x);if(!S)throw new Error(`no GPU data for input: ${x}`);s.push(S)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),f=r.length===0?o.map((m,x)=>x):r;if(f.length!==o.length)throw new Error(`Output size ${f.length} must be equal to ${o.length}.`);let p=[],h=[];for(let m=0;m<o.length;++m){if(!Number.isInteger(f[m])||f[m]<-3||f[m]>=a)throw new Error(`Invalid output index: ${f[m]}`);if(f[m]===-3)continue;let x=f[m]===-1,S=f[m]===-2,T=x||S?i(o[m].dataType,o[m].dims):n(f[m],o[m].dataType,o[m].dims);if(p.push(T),T.data===0)continue;let I=this.gpuDataManager.get(T.data);if(!I)throw new Error(`no GPU data for output: ${T.data}`);if(x&&this.temporaryData.push(I),S){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(I)}h.push(I)}if(s.length!==t.length||h.length!==p.length){if(h.length===0)return Jt(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(d){let m=0,x=[];d.forEach(z=>{let b=typeof z.data=="number"?[z.data]:z.data;if(b.length===0)return;let O=z.type===10?2:4,M,G;z.type===10?(G=b.length>4?16:b.length>2?8:b.length*O,M=b.length>4?16:O*b.length):(G=b.length<=2?b.length*O:16,M=16),m=Math.ceil(m/G)*G,x.push(m);let Q=z.type===10?8:4;m+=b.length>4?Math.ceil(b.length/Q)*M:b.length*O});let S=16;m=Math.ceil(m/S)*S;let T=new ArrayBuffer(m);d.forEach((z,b)=>{let O=x[b],M=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(T,O,M.length).set(M);else if(z.type===12)new Uint32Array(T,O,M.length).set(M);else if(z.type===10)new Uint16Array(T,O,M.length).set(M);else if(z.type===1)new Float32Array(T,O,M.length).set(M);else throw new Error(`Unsupported uniform type: ${gr(z.type)}`)});let I=this.gpuDataManager.create(m,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(I.buffer,0,T,0,m),this.gpuDataManager.release(I.id),_={offset:0,size:m,buffer:I.buffer}}let w=this.programManager.normalizeDispatchGroupSize(l),$=w[1]===1&&w[2]===1,E=Cy(e,t,$),y=this.programManager.getArtifact(E);if(y||(y=this.programManager.build(e,w),this.programManager.setArtifact(E,y),he("info",()=>`[artifact] key: ${E}, programName: ${e.name}`)),d&&y.uniformVariablesInfo){if(d.length!==y.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${y.uniformVariablesInfo.length}, got ${d.length} in program "${y.programInfo.name}".`);for(let m=0;m<d.length;m++){let x=d[m],S=x.type,T=typeof x.data=="number"?1:x.data.length,[I,z]=y.uniformVariablesInfo[m];if(S!==I||T!==z)throw new Error(`Uniform variable ${m} mismatch: expect type ${I} with size ${z}, got type ${S} with size ${T} in program "${y.programInfo.name}".`)}}if(he("info",()=>`[ProgramManager] run "${e.name}" (key=${E}) with ${w[0]}x${w[1]}x${w[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let m={kernelId:this.currentKernelId,programName:y.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(m),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(m)}return this.programManager.run(y,s,h,w,_),Jt(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=g2.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,a=n.kernelName,s=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),he("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(r,n,a);return i.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await gd(this,e,t);return Ac(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){he("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){he("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){he("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),a=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),w2={};vi(w2,{init:()=>$2});var gs,zy,$2,RE=j(()=>{se(),kr(),le(),Wk(),gs=class x2{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(R.size(t)!==R.size(this.dims))throw new Error("Invalid new shape");return new x2(this.module,this.dataType,this.data,t)}},zy=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,i=r/e.PTR_SIZE,a=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,a));let s=Number(e.getValue(n*i++,a));this.outputCount=Number(e.getValue(n*i++,a)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,a));let o=[];for(let l=0;l<s;l++){let d=Number(e.getValue(n*i++,a)),f=Number(e.getValue(n*i++,"*")),p=Number(e.getValue(n*i++,a)),h=[];for(let _=0;_<p;_++)h.push(Number(e.getValue(n*i++,a)));o.push(new gs(e,d,f,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,n=(t==null?void 0:t.outputs)??[],i=(o,l,d)=>new gs(this.module,l,this.output(o,d),d),a=(o,l)=>{let d=gn(o,l);if(!d)throw new Error(`Unsupported data type: ${o}`);let f=d>0?this.backend.gpuDataManager.create(d).id:0;return new gs(this.module,o,f,l)};return this.backend.run(e,r,n,i,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,i=n===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*n);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+n*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},$2=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(OE(),ba(v2)).WebGpuBackend,s=new a;await s.initialize(r,n),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,l,d,f=!1)=>{if(f)he("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(o),Number(l));else{he("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(l),p)}},async(o,l,d)=>{he("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>s.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>s.releaseKernel(o),(o,l,d,f)=>{he("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let p=new zy(t,s,Number(l));return s.computeKernel(Number(o),p,f)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new O_(r);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,l,d,f)=>a.ensureTensor(s,o,l,d,f),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!r.trace])}}}),Ny,qc,Hc,Ar,Oy,gu,po,Gc,Kc,yu,Qc,Xc,Zc,b2=j(()=>{Pt(),Pk(),Lk(),se(),An(),Ic(),E_(),Ny=(e,t)=>{Se()._OrtInit(e,t)!==0&&$e("Can't initialize onnxruntime.")},qc=async e=>{Ny(e.wasm.numThreads,so(e.logLevel))},Hc=async(e,t)=>{var n,i;(i=(n=Se()).asyncInit)==null||i.call(n);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(RE(),ba(w2)).init;t==="webgpu"&&await a("webgpu",Se(),e,r),t==="webnn"&&await a("webnn",Se(),e)}},Ar=new Map,Oy=e=>{let t=Se(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&$e("Can't get session input/output count.");let a=n===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+n,a))]}finally{t.stackRestore(r)}},gu=(e,t)=>{let r=Se(),n=r.stackSave(),i=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&$e("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));i=Number(r.getValue(s+a,"*"));let l=r.HEAP32[i/4];if(l===0)return[o,0];let d=r.HEAPU32[i/4+1],f=[];for(let p=0;p<d;p++){let h=Number(r.getValue(i+8+p*a,"*"));f.push(h!==0?r.UTF8ToString(h):Number(r.getValue(i+8+(p+d)*a,"*")))}return[o,l,f]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},po=e=>{let t=Se(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Gc=async(e,t)=>{var p,h,_,w;let r,n,i=Se();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=po(e);let a=0,s=0,o=0,l=[],d=[],f=[];try{if([s,l]=await k_(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let b=[];for(let O of t.externalData){let M=typeof O=="string"?O:O.path;b.push(Oc(typeof O=="string"?O:O.data).then(G=>{i.mountExternalData(M,G)}))}await Promise.all(b)}for(let b of(t==null?void 0:t.executionProviders)??[])if((typeof b=="string"?b:b.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof b!="string"){let O=b,M=O==null?void 0:O.context,G=O==null?void 0:O.gpuDevice,Q=O==null?void 0:O.deviceType,X=O==null?void 0:O.powerPreference;M?i.currentContext=M:G?i.currentContext=await i.webnnCreateMLContext(G):i.currentContext=await i.webnnCreateMLContext({deviceType:Q,powerPreference:X})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(r,n,s),(p=i.webgpuOnCreateSession)==null||p.call(i,a),a===0&&$e("Can't create a session."),(h=i.jsepOnCreateSession)==null||h.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[$,E]=Oy(a),y=!!(t!=null&&t.enableGraphCapture),m=[],x=[],S=[],T=[],I=[];for(let b=0;b<$;b++){let[O,M,G]=gu(a,b);O===0&&$e("Can't get an input name."),d.push(O);let Q=i.UTF8ToString(O);m.push(Q),S.push(M===0?{name:Q,isTensor:!1}:{name:Q,isTensor:!0,type:gr(M),shape:G})}for(let b=0;b<E;b++){let[O,M,G]=gu(a,b+$);O===0&&$e("Can't get an output name."),f.push(O);let Q=i.UTF8ToString(O);x.push(Q),T.push(M===0?{name:Q,isTensor:!1}:{name:Q,isTensor:!0,type:gr(M),shape:G});{if(y&&(t==null?void 0:t.preferredOutputLocation)===void 0){I.push("gpu-buffer");continue}let X=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((_=t==null?void 0:t.preferredOutputLocation)==null?void 0:_[Q])??"cpu",A=i.webnnIsGraphOutput;if(X==="cpu"&&A&&A(a,Q)){I.push("ml-tensor-cpu-output");continue}if(X!=="cpu"&&X!=="cpu-pinned"&&X!=="gpu-buffer"&&X!=="ml-tensor")throw new Error(`Not supported preferred output location: ${X}.`);if(y&&X!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${X}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);I.push(X)}}let z=null;return I.some(b=>b==="gpu-buffer"||b==="ml-tensor"||b==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&$e("Can't create IO binding."),z={handle:o,outputPreferredLocations:I,outputPreferredLocationsEncoded:I.map(b=>b==="ml-tensor-cpu-output"?"ml-tensor":b).map(b=>hd(b))}),Ar.set(a,[a,d,f,z,y,!1]),[a,m,x,S,T]}catch($){throw d.forEach(E=>i._OrtFree(E)),f.forEach(E=>i._OrtFree(E)),o!==0&&i._OrtReleaseBinding(o)!==0&&$e("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&$e("Can't release session."),$}finally{i._free(r),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&$e("Can't release session options."),l.forEach($=>i._free($)),(w=i.unmountExternalData)==null||w.call(i)}},Kc=e=>{var l,d,f;let t=Se(),r=Ar.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,a,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&$e("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&$e("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(f=t.webgpuOnReleaseSession)==null||f.call(t,e),i.forEach(p=>t._OrtFree(p)),a.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(n)!==0&&$e("Can't release session."),Ar.delete(e)},yu=async(e,t,r,n,i,a,s=!1)=>{if(!e){t.push(0);return}let o=Se(),l=o.PTR_SIZE,d=e[0],f=e[1],p=e[3],h=p,_,w;if(d==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let y=e[2].gpuBuffer;w=gn(mn(d),f);{let m=o.jsepRegisterBuffer;if(!m)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=m(n,a,y,w)}}else if(p==="ml-tensor"){let y=e[2].mlTensor;w=gn(mn(d),f);let m=o.webnnRegisterMLTensor;if(!m)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=m(n,y,mn(d),f)}else{let y=e[2];if(Array.isArray(y)){w=l*y.length,_=o._malloc(w),r.push(_);for(let m=0;m<y.length;m++){if(typeof y[m]!="string")throw new TypeError(`tensor data at index ${m} is not a string`);o.setValue(_+m*l,Qt(y[m],r),"*")}}else{let m=o.webnnIsGraphInput,x=o.webnnIsGraphOutput;if(d!=="string"&&m&&x){let S=o.UTF8ToString(i);if(m(n,S)||x(n,S)){let T=mn(d);w=gn(T,f),h="ml-tensor";let I=o.webnnCreateTemporaryTensor,z=o.webnnUploadTensor;if(!I||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let b=await I(n,T,f);z(b,new Uint8Array(y.buffer,y.byteOffset,y.byteLength)),_=b}else w=y.byteLength,_=o._malloc(w),r.push(_),o.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,w),_)}else w=y.byteLength,_=o._malloc(w),r.push(_),o.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,w),_)}}let $=o.stackSave(),E=o.stackAlloc(4*f.length);try{f.forEach((m,x)=>o.setValue(E+x*l,m,l===4?"i32":"i64"));let y=o._OrtCreateTensor(mn(d),_,w,E,f.length,hd(h));y===0&&$e(`Can't create tensor for input/output. session=${n}, index=${a}.`),t.push(y)}finally{o.stackRestore($)}},Qc=async(e,t,r,n,i,a)=>{var Q,X,A,ee;let s=Se(),o=s.PTR_SIZE,l=Ar.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],f=l[1],p=l[2],h=l[3],_=l[4],w=l[5],$=t.length,E=n.length,y=0,m=[],x=[],S=[],T=[],I=[],z=s.stackSave(),b=s.stackAlloc($*o),O=s.stackAlloc($*o),M=s.stackAlloc(E*o),G=s.stackAlloc(E*o);try{[y,m]=S_(a),xn("wasm prepareInputOutputTensor");for(let P=0;P<$;P++)await yu(r[P],x,T,e,f[t[P]],t[P],_);for(let P=0;P<E;P++)await yu(i[P],S,T,e,p[n[P]],$+n[P],_);bn("wasm prepareInputOutputTensor");for(let P=0;P<$;P++)s.setValue(b+P*o,x[P],"*"),s.setValue(O+P*o,f[t[P]],"*");for(let P=0;P<E;P++)s.setValue(M+P*o,S[P],"*"),s.setValue(G+P*o,p[n[P]],"*");if(h&&!w){let{handle:P,outputPreferredLocations:K,outputPreferredLocationsEncoded:L}=h;if(f.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${f.length}).`);xn("wasm bindInputsOutputs");for(let V=0;V<$;V++){let Y=t[V];await s._OrtBindInput(P,f[Y],x[V])!==0&&$e(`Can't bind input[${V}] for session=${e}.`)}for(let V=0;V<E;V++){let Y=n[V];(Q=i[V])!=null&&Q[3]?(I.push(S[V]),s._OrtBindOutput(P,p[Y],S[V],0)!==0&&$e(`Can't bind pre-allocated output[${V}] for session=${e}.`)):s._OrtBindOutput(P,p[Y],0,L[Y])!==0&&$e(`Can't bind output[${V}] to ${K[V]} for session=${e}.`)}bn("wasm bindInputsOutputs"),Ar.set(e,[d,f,p,h,_,!0])}(X=s.jsepOnRunStart)==null||X.call(s,d),(A=s.webnnOnRunStart)==null||A.call(s,d);let J;h?J=await s._OrtRunWithBinding(d,h.handle,E,M,y):J=await s._OrtRun(d,O,b,$,G,E,M,y),J!==0&&$e("failed to call OrtRun().");let re=[],W=[];xn("wasm ProcessOutputTensor");for(let P=0;P<E;P++){let K=Number(s.getValue(M+P*o,"*"));if(K===S[P]||I.includes(S[P])){re.push(i[P]),K!==S[P]&&s._OrtReleaseTensor(K)!==0&&$e("Can't release tensor.");continue}let L=s.stackSave(),V=s.stackAlloc(4*o),Y=!1,F,ge=0;try{s._OrtGetTensorData(K,V,V+o,V+2*o,V+3*o)!==0&&$e(`Can't access output tensor data on index ${P}.`);let We=o===4?"i32":"i64",Ce=Number(s.getValue(V,We));ge=s.getValue(V+o,"*");let dt=s.getValue(V+o*2,"*"),ct=Number(s.getValue(V+o*3,We)),wt=[];for(let ke=0;ke<ct;ke++)wt.push(Number(s.getValue(dt+ke*o,We)));s._OrtFree(dt)!==0&&$e("Can't free memory for tensor dims.");let pt=wt.reduce((ke,oe)=>ke*oe,1);F=gr(Ce);let Er=h==null?void 0:h.outputPreferredLocations[n[P]];if(F==="string"){if(Er==="gpu-buffer"||Er==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ke=[];for(let oe=0;oe<pt;oe++){let $t=s.getValue(ge+oe*o,"*"),za=s.getValue(ge+(oe+1)*o,"*"),_i=oe===pt-1?void 0:za-$t;ke.push(s.UTF8ToString($t,_i))}re.push([F,wt,ke,"cpu"])}else if(Er==="gpu-buffer"&&pt>0){let ke=s.jsepGetBuffer;if(!ke)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let oe=ke(ge),$t=gn(Ce,pt);if($t===void 0||!zc(F))throw new Error(`Unsupported data type: ${F}`);Y=!0,re.push([F,wt,{gpuBuffer:oe,download:s.jsepCreateDownloader(oe,$t,F),dispose:()=>{s._OrtReleaseTensor(K)!==0&&$e("Can't release tensor.")}},"gpu-buffer"])}else if(Er==="ml-tensor"&&pt>0){let ke=s.webnnEnsureTensor,oe=s.webnnIsGraphInputOutputTypeSupported;if(!ke||!oe)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(gn(Ce,pt)===void 0||!Nc(F))throw new Error(`Unsupported data type: ${F}`);if(!oe(e,F,!1))throw new Error(`preferredLocation "ml-tensor" for ${F} output is not supported by current WebNN Context.`);let $t=await ke(e,ge,Ce,wt,!1);Y=!0,re.push([F,wt,{mlTensor:$t,download:s.webnnCreateMLTensorDownloader(ge,F),dispose:()=>{s.webnnReleaseTensorId(ge),s._OrtReleaseTensor(K)}},"ml-tensor"])}else if(Er==="ml-tensor-cpu-output"&&pt>0){let ke=s.webnnCreateMLTensorDownloader(ge,F)(),oe=re.length;Y=!0,W.push((async()=>{let $t=[oe,await ke];return s.webnnReleaseTensorId(ge),s._OrtReleaseTensor(K),$t})()),re.push([F,wt,[],"cpu"])}else{let ke=Io(F),oe=new ke(pt);new Uint8Array(oe.buffer,oe.byteOffset,oe.byteLength).set(s.HEAPU8.subarray(ge,ge+oe.byteLength)),re.push([F,wt,oe,"cpu"])}}finally{s.stackRestore(L),F==="string"&&ge&&s._free(ge),Y||s._OrtReleaseTensor(K)}}h&&!_&&(s._OrtClearBoundOutputs(h.handle)!==0&&$e("Can't clear bound outputs."),Ar.set(e,[d,f,p,h,_,!1]));for(let[P,K]of await Promise.all(W))re[P][2]=K;return bn("wasm ProcessOutputTensor"),re}finally{(ee=s.webnnOnRunEnd)==null||ee.call(s,d),s.stackRestore(z),x.forEach(J=>s._OrtReleaseTensor(J)),S.forEach(J=>s._OrtReleaseTensor(J)),T.forEach(J=>s._free(J)),y!==0&&s._OrtReleaseRunOptions(y),m.forEach(J=>s._free(J))}},Xc=e=>{let t=Se(),r=Ar.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&$e("Can't get an profile file name."),t._OrtFree(i)},Zc=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),Mr,ft,Ln,Ui,Wi,ys,vu,vs,dn,cn,Ry,S2,k2,E2,T2,C2,I2,z2,N2=j(()=>{Pt(),b2(),An(),Tc(),Mr=()=>!!Te.wasm.proxy&&typeof document<"u",Ln=!1,Ui=!1,Wi=!1,vs=new Map,dn=(e,t)=>{let r=vs.get(e);r?r.push(t):vs.set(e,[t])},cn=()=>{if(Ln||!Ui||Wi||!ft)throw new Error("worker not ready")},Ry=e=>{switch(e.data.type){case"init-wasm":Ln=!1,e.data.err?(Wi=!0,vu[1](e.data.err)):(Ui=!0,vu[0]()),ys&&(URL.revokeObjectURL(ys),ys=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=vs.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},S2=async()=>{if(!Ui){if(Ln)throw new Error("multiple calls to 'initWasm()' detected.");if(Wi)throw new Error("previous call to 'initWasm()' failed.");if(Ln=!0,Mr())return new Promise((e,t)=>{ft==null||ft.terminate(),x_().then(([r,n])=>{try{ft=n,ft.onerror=a=>t(a),ft.onmessage=Ry,vu=[e,t];let i={type:"init-wasm",in:Te};!i.in.wasm.wasmPaths&&(r||fd)&&(i.in.wasm.wasmPaths={wasm:new URL("/scalpcheck-web/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href}),ft.postMessage(i),ys=r}catch(i){t(i)}},t)});try{await Cc(Te.wasm),await qc(Te),Ui=!0}catch(e){throw Wi=!0,e}finally{Ln=!1}}},k2=async e=>{if(Mr())return cn(),new Promise((t,r)=>{dn("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:Te}};ft.postMessage(n)});await Hc(Te,e)},E2=async e=>Mr()?(cn(),new Promise((t,r)=>{dn("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};ft.postMessage(n,[e.buffer])})):po(e),T2=async(e,t)=>{if(Mr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return cn(),new Promise((r,n)=>{dn("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),ft.postMessage(i,a)})}else return Gc(e,t)},C2=async e=>{if(Mr())return cn(),new Promise((t,r)=>{dn("release",[t,r]);let n={type:"release",in:e};ft.postMessage(n)});Kc(e)},I2=async(e,t,r,n,i,a)=>{if(Mr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return cn(),new Promise((s,o)=>{dn("run",[s,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:n,options:a}};ft.postMessage(d,Zc(l))})}else return Qc(e,t,r,n,i,a)},z2=async e=>{if(Mr())return cn(),new Promise((t,r)=>{dn("end-profiling",[t,r]);let n={type:"end-profiling",in:e};ft.postMessage(n)});Xc(e)}}),_u,Ay,O2,AE=j(()=>{Pt(),N2(),se(),Ec(),E_(),_u=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Ay=e=>{switch(e[3]){case"cpu":return new Xt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!zc(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return Xt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!Nc(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return Xt.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},O2=class{async fetchModelAndCopyToWasmMemory(e){return E2(await Oc(e))}async loadModel(e,t){dr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await T2(r,t),Jt()}async dispose(){return C2(this.sessionId)}async run(e,t,r){dr();let n=[],i=[];Object.entries(e).forEach(p=>{let h=p[0],_=p[1],w=this.inputNames.indexOf(h);if(w===-1)throw new Error(`invalid input '${h}'`);n.push(_),i.push(w)});let a=[],s=[];Object.entries(t).forEach(p=>{let h=p[0],_=p[1],w=this.outputNames.indexOf(h);if(w===-1)throw new Error(`invalid output '${h}'`);a.push(_),s.push(w)});let o=n.map((p,h)=>_u(p,()=>`input "${this.inputNames[i[h]]}"`)),l=a.map((p,h)=>p?_u(p,()=>`output "${this.outputNames[s[h]]}"`):null),d=await I2(this.sessionId,i,o,s,l,r),f={};for(let p=0;p<d.length;p++)f[this.outputNames[s[p]]]=a[p]??Ay(d[p]);return Jt(),f}startProfiling(){}endProfiling(){z2(this.sessionId)}}}),R2={};vi(R2,{OnnxruntimeWebAssemblyBackend:()=>Cd,initializeFlags:()=>Td,wasmBackend:()=>A2});var Td,Cd,A2,ME=j(()=>{Pt(),N2(),AE(),Td=()=>{(typeof Te.wasm.initTimeout!="number"||Te.wasm.initTimeout<0)&&(Te.wasm.initTimeout=0);let e=Te.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Te.wasm.simd=!1),typeof Te.wasm.proxy!="boolean"&&(Te.wasm.proxy=!1),typeof Te.wasm.trace!="boolean"&&(Te.wasm.trace=!1),typeof Te.wasm.numThreads!="number"||!Number.isInteger(Te.wasm.numThreads)||Te.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Te.wasm.numThreads=1;else{let t=typeof navigator>"u"?wk("node:os").cpus().length:navigator.hardwareConcurrency;Te.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Cd=class{async init(e){Td(),await S2(),await k2(e)}async createInferenceSessionHandler(e,t){let r=new O2;return await r.loadModel(e,t),r}},A2=new Cd});Pt();Pt();Pt();var BE="1.27.0";{let e=(ME(),ba(R2)).wasmBackend;Yn("webgpu",e,5),Yn("webnn",e,5),Yn("cpu",e,10),Yn("wasm",e,10)}Object.defineProperty(Te.versions,"web",{value:BE,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Te.wasm.wasmPaths="/scalpcheck-web/ort-wasm/";const DE="/scalpcheck-web/best.onnx",tt=640,PE=.3,My=["Head_Lice","dandruff","Alopecia_Areata","Psoriasis","Folliculitis","Contact_Dermatitis","dry_hair","grey_hair","low_hair_density"],LE={Head_Lice:{he:"כינים",severity:"high",recs:["השתמש בשמפו נגד כינים (פרמטרין/דימטיקון)","סרק עם מסרק ייעודי כל יומיים","כבס מצעים ב-60°C לפחות","בדוק את שאר בני המשפחה","פנה לרופא ילדים"]},dandruff:{he:"קשקשים",severity:"low",recs:["השתמש בשמפו נגד קשקשים (zinc pyrithione)","הימנע ממים חמים","שטוף ראש באופן סדיר","הפחת סטרס"]},Alopecia_Areata:{he:"נשירת שיער",severity:"medium",recs:["פנה לדרמטולוג","בדוק רמות ברזל וויטמין D","הימנע ממתיחת שיער","שקול מינוקסידיל (בייעוץ רופא)"]},Psoriasis:{he:"פסוריאזיס בקרקפת",severity:"medium",recs:["פנה לדרמטולוג","השתמש בשמפו עם coal tar","הימנע מגירוד","שמור על לחות הקרקפת"]},Folliculitis:{he:"דלקת זקיקי שיער",severity:"medium",recs:["פנה לרופא - עלול להצריך אנטיביוטיקה","הימנע ממגע ידיים","שמור על ניקיון","הימנע ממוצרים שמנוניים"]},Contact_Dermatitis:{he:"דלקת עור אלרגית",severity:"medium",recs:["זהה וסלק את החומר המגרה","פנה לדרמטולוג","הימנע משריטה","קורטיזון קל (בייעוץ רופא)"]},dry_hair:{he:"שיער יבש",severity:"low",recs:["השתמש במרכך לאחר כל שטיפה","הפחת מייבש ומחליק","מסכת שיער מזינה פעם בשבוע","שתה הרבה מים"]},grey_hair:{he:"שיער אפור",severity:"none",recs:["שיער אפור הוא תופעה טבעית","ניתן לצבוע אם רוצים","תזונה עשירה בB12 עשויה לסייע"]},low_hair_density:{he:"דלילות שיער",severity:"low",recs:["בדוק רמות ברזל ואבץ","שקול מינוקסידיל (בייעוץ רופא)","הימנע ממתיחות שיער","תזונה עשירה בחלבון"]}};let _s=null;async function UE(e){if(_s)return _s;e==null||e(0);const t=await fetch(DE),r=+t.headers.get("Content-Length")||1,n=t.body.getReader(),i=[];let a=0;for(;;){const{done:l,value:d}=await n.read();if(l)break;i.push(d),a+=d.length,e==null||e(Math.round(a/r*80))}const s=new Uint8Array(a);let o=0;for(const l of i)s.set(l,o),o+=l.length;return _s=await kc.create(s.buffer,{executionProviders:["wasm"]}),e==null||e(100),_s}function WE(e){const t=document.createElement("canvas");t.width=tt,t.height=tt;const r=t.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,tt,tt);const n=Math.min(tt/e.naturalWidth,tt/e.naturalHeight),i=Math.round(e.naturalWidth*n),a=Math.round(e.naturalHeight*n);r.drawImage(e,(tt-i)/2,(tt-a)/2,i,a);const{data:s}=r.getImageData(0,0,tt,tt),o=new Float32Array(3*tt*tt),l=tt*tt;for(let d=0;d<l;d++)o[d]=s[d*4]/255,o[l+d]=s[d*4+1]/255,o[2*l+d]=s[d*4+2]/255;return o}async function jE(e,t){const r=new Image,n=URL.createObjectURL(e);await new Promise((w,$)=>{r.onload=w,r.onerror=$,r.src=n}),URL.revokeObjectURL(n);const i=await UE(t),a=new Xt("float32",WE(r),[1,3,tt,tt]),s=i.inputNames[0],l=(await i.run({[s]:a}))[i.outputNames[0]].data,d=8400,f=My.length,p=new Set,h=[],_=[];for(let w=0;w<d;w++){let $=0,E=0;for(let y=0;y<f;y++){const m=l[(4+y)*d+w];m>$&&($=m,E=y)}$>=PE&&_.push({classIdx:E,confidence:$})}_.sort((w,$)=>$.confidence-w.confidence);for(const{classIdx:w,confidence:$}of _){const E=My[w];if(p.has(E))continue;p.add(E);const y=LE[E]||{};if(h.push({class:E,class_he:y.he||E,confidence:Math.round($*100),severity:y.severity||"low",recommendations:y.recs||[]}),h.length>=3)break}return h.length===0?{status:"healthy",detections:[{class:"healthy",class_he:"שיער תקין",confidence:99,severity:"none",recommendations:["לא זוהו בעיות. המשך לשמור על היגיינת שיער תקינה!"]}],disclaimer:"כלי בירור ראשוני בלבד — אינו מחליף אבחון רפואי מקצועי"}:{status:h[0].severity==="high"?"urgent":"issue_found",detections:h,disclaimer:"כלי בירור ראשוני בלבד — אינו מחליף אבחון רפואי מקצועי"}}function VE({language:e="he",onResult:t,onBack:r}){const[n,i]=ht.useState(null),[a,s]=ht.useState(null),[o,l]=ht.useState(!1),[d,f]=ht.useState(0),[p,h]=ht.useState(null),_=ht.useRef(),w=ht.useRef(),$=y=>{if(y){if(y.size>10*1024*1024){h("התמונה גדולה מדי (מקסימום 10MB)");return}i(y),s(URL.createObjectURL(y)),h(null)}},E=async()=>{if(n){l(!0),h(null),f(0);try{const y=await jE(n,f);t(y)}catch{h("שגיאה בניתוח. נסה תמונה אחרת.")}finally{l(!1)}}};return U.jsxs("div",{className:"py-6",children:[U.jsx("button",{onClick:r,className:"flex items-center gap-1 text-gray-500 mb-6 text-sm",children:"→ חזרה"}),U.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-2",children:"העלה תמונה"}),U.jsx("p",{className:"text-gray-500 text-sm mb-6",children:"צלם את הקרקפת מקרוב, ודא תאורה טובה ופתח את השיער"}),p&&!a&&U.jsxs("div",{className:"bg-red-50 border border-red-200 text-red-600 p-4 rounded-2xl text-sm mb-4 flex gap-2",children:[U.jsx("span",{children:"⚠️"}),U.jsx("span",{children:p})]}),a?U.jsxs("div",{className:"mb-6",children:[U.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-lg mb-4",children:[U.jsx("img",{src:a,alt:"preview",className:"w-full object-cover max-h-64"}),!o&&U.jsx("button",{onClick:()=>{i(null),s(null),h(null)},className:"absolute top-3 left-3 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm",children:"✕"})]}),p&&U.jsxs("div",{className:"bg-red-50 border border-red-200 text-red-600 p-4 rounded-2xl text-sm mb-4 flex gap-2",children:[U.jsx("span",{children:"⚠️"}),U.jsx("span",{children:p})]}),o&&U.jsxs("div",{className:"mb-4",children:[U.jsxs("div",{className:"flex justify-between text-sm text-gray-500 mb-1",children:[U.jsx("span",{children:d<80?"טוען מודל AI...":"מנתח תמונה..."}),U.jsxs("span",{children:[d,"%"]})]}),U.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:U.jsx("div",{className:"bg-indigo-600 h-2 rounded-full transition-all duration-300",style:{width:`${d}%`}})})]}),U.jsx("button",{onClick:E,disabled:o,className:"w-full bg-indigo-600 text-white py-4 rounded-2xl text-lg font-bold shadow-lg hover:bg-indigo-700 disabled:opacity-50 active:scale-95 transition-all",children:o?"מנתח...":"🔍 נתח תמונה"})]}):U.jsxs("div",{className:"space-y-3 mb-6",children:[U.jsx("button",{onClick:()=>w.current.click(),className:"w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow hover:bg-indigo-700 active:scale-95 transition-all",children:"📷 צלם עכשיו"}),U.jsx("input",{ref:w,type:"file",accept:"image/*",capture:"environment",className:"hidden",onChange:y=>$(y.target.files[0])}),U.jsx("button",{onClick:()=>_.current.click(),className:"w-full bg-white border-2 border-dashed border-gray-300 text-gray-600 py-4 rounded-2xl font-medium flex items-center justify-center gap-3 hover:border-indigo-400 active:scale-95 transition-all",children:"🖼️ העלה מהגלריה"}),U.jsx("input",{ref:_,type:"file",accept:"image/*",className:"hidden",onChange:y=>$(y.target.files[0])})]}),U.jsxs("div",{className:"bg-blue-50 rounded-2xl p-4",children:[U.jsx("p",{className:"text-sm font-bold text-blue-800 mb-2",children:"טיפים לתמונה טובה:"}),U.jsxs("ul",{className:"text-sm text-blue-700 space-y-1",children:[U.jsx("li",{children:"• פתח את השיער לפני הצילום"}),U.jsx("li",{children:'• צלם מקרוב (10-20 ס"מ)'}),U.jsx("li",{children:"• ודא שיש מספיק אור"}),U.jsx("li",{children:"• צלם את הקרקפת, לא קצות השיער"})]})]})]})}const By={none:"bg-green-100 text-green-800 border-green-200",low:"bg-yellow-100 text-yellow-800 border-yellow-200",medium:"bg-orange-100 text-orange-800 border-orange-200",high:"bg-red-100 text-red-800 border-red-200"},Dy={he:{none:"✅ תקין",low:"💛 קל",medium:"🟠 בינוני",high:"🔴 דורש טיפול"},en:{none:"✅ Normal",low:"💛 Mild",medium:"🟠 Moderate",high:"🔴 Needs treatment"},ar:{none:"✅ طبيعي",low:"💛 خفيف",medium:"🟠 متوسط",high:"🔴 يحتاج علاجاً"},ru:{none:"✅ Норма",low:"💛 Лёгкое",medium:"🟠 Среднее",high:"🔴 Требует лечения"},fr:{none:"✅ Normal",low:"💛 Léger",medium:"🟠 Modéré",high:"🔴 Traitement requis"},es:{none:"✅ Normal",low:"💛 Leve",medium:"🟠 Moderado",high:"🔴 Necesita tratamiento"}},Py={he:{title:"תוצאת הבדיקה",confidence:"ביטחון:",extra:"ממצאים נוספים:",recs:"המלצות:",again:"🔍 בדיקה נוספת"},en:{title:"Check Result",confidence:"Confidence:",extra:"Additional findings:",recs:"Recommendations:",again:"🔍 Scan Again"},ar:{title:"نتيجة الفحص",confidence:"الثقة:",extra:"نتائج إضافية:",recs:"التوصيات:",again:"🔍 فحص مجدد"},ru:{title:"Результат проверки",confidence:"Уверенность:",extra:"Дополнительные находки:",recs:"Рекомендации:",again:"🔍 Ещё раз"},fr:{title:"Résultat de l'examen",confidence:"Confiance:",extra:"Résultats supplémentaires:",recs:"Recommandations:",again:"🔍 Nouveau scan"},es:{title:"Resultado del examen",confidence:"Confianza:",extra:"Hallazgos adicionales:",recs:"Recomendaciones:",again:"🔍 Escanear de nuevo"}};function FE({result:e,language:t="he",onScanAgain:r}){var l;if(!e)return null;const n=Py[t]||Py.he,i=Dy[t]||Dy.he,a=e.detections[0],s=e.detections.slice(1),o=By[a.severity]||By.low;return U.jsxs("div",{className:"py-6",children:[U.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-6",children:n.title}),U.jsxs("div",{className:`rounded-2xl border-2 p-5 mb-4 ${o}`,children:[U.jsxs("div",{className:"flex items-center justify-between mb-3",children:[U.jsx("span",{className:"text-2xl font-bold",children:a.class_he}),U.jsx("span",{className:"text-sm font-medium px-3 py-1 bg-white bg-opacity-60 rounded-full",children:i[a.severity]})]}),U.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[U.jsx("span",{className:"text-sm",children:n.confidence}),U.jsx("div",{className:"flex-1 bg-white bg-opacity-50 rounded-full h-2",children:U.jsx("div",{className:"bg-current rounded-full h-2 transition-all",style:{width:`${a.confidence}%`}})}),U.jsxs("span",{className:"text-sm font-bold",children:[a.confidence,"%"]})]})]}),s.length>0&&U.jsxs("div",{className:"mb-4",children:[U.jsx("p",{className:"text-sm text-gray-500 mb-2 font-medium",children:n.extra}),U.jsx("div",{className:"space-y-2",children:s.map((d,f)=>U.jsxs("div",{className:"bg-white rounded-xl p-3 flex items-center justify-between shadow-sm",children:[U.jsx("span",{className:"text-sm font-medium text-gray-700",children:d.class_he}),U.jsxs("span",{className:"text-xs text-gray-400",children:[d.confidence,"%"]})]},f))})]}),((l=a.recommendations)==null?void 0:l.length)>0&&U.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm mb-4",children:[U.jsx("p",{className:"font-bold text-gray-800 mb-3",children:n.recs}),U.jsx("ul",{className:"space-y-2",children:a.recommendations.map((d,f)=>U.jsxs("li",{className:"flex items-start gap-2 text-sm text-gray-700",children:[U.jsx("span",{className:"text-indigo-500 mt-0.5 flex-shrink-0",children:"•"}),d]},f))})]}),U.jsx("div",{className:"bg-gray-50 rounded-xl p-3 mb-6 border border-gray-200",children:U.jsxs("p",{className:"text-xs text-gray-500 text-center",children:["⚠️ ",e.disclaimer]})}),U.jsx("button",{onClick:r,className:"w-full bg-indigo-600 text-white py-4 rounded-2xl text-lg font-bold shadow-lg hover:bg-indigo-700 active:scale-95 transition-all",children:n.again})]})}function qE(){return U.jsx("header",{className:"bg-white shadow-sm mb-6",children:U.jsxs("div",{className:"max-w-lg mx-auto px-4 py-4 flex items-center gap-3",children:[U.jsx("div",{className:"w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl",children:"🔬"}),U.jsxs("div",{children:[U.jsx("h1",{className:"text-lg font-bold text-gray-800",children:"OYR123"}),U.jsx("p",{className:"text-xs text-gray-500",children:"בדיקת שיער וקרקפת חכמה"})]}),U.jsx("div",{className:"mr-auto",children:U.jsx("span",{className:"bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium",children:"כלי בירור בלבד"})})]})})}const Ly={he:{title:"בדיקת שיער חכמה",sub:"צלם את השיער וקבל אבחון מיידי",ai:"מופעל על ידי בינה מלאכותית",start:"התחל בדיקה",disclaimer:"אינו מחליף אבחון רפואי מקצועי",features:["זיהוי כינים וביצים","זיהוי קשקשים","המלצות טיפול","פרטיות מלאה"]},en:{title:"Smart Scalp Check",sub:"Photograph your hair and get instant diagnosis",ai:"Powered by Artificial Intelligence",start:"Start Check",disclaimer:"Not a substitute for professional medical diagnosis",features:["Lice & nits detection","Dandruff detection","Treatment tips","Full privacy"]},ar:{title:"فحص الشعر الذكي",sub:"صوّر شعرك واحصل على تشخيص فوري",ai:"مدعوم بالذكاء الاصطناعي",start:"ابدأ الفحص",disclaimer:"لا يغني عن التشخيص الطبي المتخصص",features:["كشف القمل والصيبان","كشف القشرة","نصائح العلاج","خصوصية تامة"]},ru:{title:"Умная проверка кожи головы",sub:"Сфотографируйте волосы и получите диагноз",ai:"На основе искусственного интеллекта",start:"Начать проверку",disclaimer:"Не заменяет профессиональный медицинский диагноз",features:["Обнаружение вшей","Обнаружение перхоти","Советы по лечению","Полная приватность"]},fr:{title:"Examen capillaire intelligent",sub:"Photographiez vos cheveux et obtenez un diagnostic",ai:"Propulsé par l'intelligence artificielle",start:"Commencer",disclaimer:"Ne remplace pas un diagnostic médical professionnel",features:["Détection de poux","Détection de pellicules","Conseils de traitement","Confidentialité totale"]},es:{title:"Revisión inteligente del cuero cabelludo",sub:"Fotografía tu cabello y obtén un diagnóstico instantáneo",ai:"Impulsado por inteligencia artificial",start:"Empezar",disclaimer:"No sustituye el diagnóstico médico profesional",features:["Detección de piojos","Detección de caspa","Consejos de tratamiento","Privacidad total"]}},HE=["🔍","❄️","🧴","🔒"];function GE({language:e="he",onStart:t}){const r=Ly[e]||Ly.he;return U.jsxs("div",{className:"text-center py-8",children:[U.jsx("div",{className:"text-7xl mb-4",children:"🔬"}),U.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:r.title}),U.jsxs("p",{className:"text-gray-500 mb-8 text-sm leading-relaxed",children:[r.sub,U.jsx("br",{}),U.jsx("span",{className:"text-indigo-500 font-medium",children:r.ai})]}),U.jsx("div",{className:"grid grid-cols-2 gap-3 mb-8",children:r.features.map((n,i)=>U.jsxs("div",{className:"bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3",children:[U.jsx("span",{className:"text-2xl",children:HE[i]}),U.jsx("span",{className:"text-sm text-gray-700 font-medium",children:n})]},i))}),U.jsx("button",{onClick:t,className:"w-full bg-indigo-600 text-white py-4 rounded-2xl text-lg font-bold shadow-lg hover:bg-indigo-700 active:scale-95 transition-all",children:r.start}),U.jsxs("p",{className:"text-xs text-gray-400 mt-4",children:["⚠️ ",r.disclaimer]})]})}const KE=[{code:"he",label:"עברית",flag:"🇮🇱"},{code:"ar",label:"العربية",flag:"🇸🇦"},{code:"en",label:"English",flag:"🇺🇸"},{code:"ru",label:"Русский",flag:"🇷🇺"},{code:"fr",label:"Français",flag:"🇫🇷"},{code:"es",label:"Español",flag:"🇪🇸"}];function QE({onDone:e}){return U.jsxs("div",{className:"py-8 text-center",children:[U.jsx("div",{className:"text-6xl mb-4",children:"🔬"}),U.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"ScalpCheck"}),U.jsx("p",{className:"text-gray-500 mb-8",children:"בחר שפה / Choose language"}),U.jsx("div",{className:"grid grid-cols-2 gap-3 mb-8",children:KE.map(t=>U.jsxs("button",{onClick:()=>e(t.code),className:"bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 hover:bg-indigo-50 hover:shadow-md active:scale-95 transition-all border-2 border-transparent hover:border-indigo-200",children:[U.jsx("span",{className:"text-3xl",children:t.flag}),U.jsx("span",{className:"text-base font-semibold text-gray-700",children:t.label})]},t.code))})]})}const Uy=[{id:"single",icon:"🔍",title:"בדיקה חד פעמית",price:"₪5",sub:"תשלום חד פעמי",color:"border-gray-200 bg-white",btn:"bg-gray-700"},{id:"monthly",icon:"⭐",title:"מנוי חודשי",price:"₪20",sub:"לחודש, ביטול בכל עת",color:"border-indigo-500 bg-indigo-50",btn:"bg-indigo-600",popular:!0},{id:"family",icon:"👨‍👩‍👧‍👦",title:"מנוי משפחתי",price:"₪50",sub:"לחודש עד 5 בני משפחה",color:"border-blue-300 bg-blue-50",btn:"bg-blue-600"},{id:"yearly",icon:"🏆",title:"מנוי שנתי",price:"₪180",sub:"לשנה — חסכון של 25%",color:"border-green-300 bg-green-50",btn:"bg-green-600"}];function XE({language:e="he",onSuccess:t}){const[r,n]=ht.useState("monthly"),[i,a]=ht.useState(!1),s=()=>{r==="monthly"?window.open("https://buy.stripe.com/test_eVq5kD9B89hkfOE3dnbwk00","_blank"):(a(!0),setTimeout(()=>{a(!1),t()},800))},o=Uy.find(l=>l.id===r);return U.jsxs("div",{className:"py-6",children:[U.jsxs("div",{className:"text-center mb-6",children:[U.jsx("div",{className:"text-5xl mb-2",children:"💳"}),U.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"בחר תוכנית"})]}),U.jsx("div",{className:"space-y-3 mb-6",children:Uy.map(l=>U.jsxs("button",{onClick:()=>n(l.id),className:`w-full rounded-2xl border-2 p-4 flex items-center gap-4 transition-all text-right ${l.color} ${r===l.id?"shadow-md scale-[1.02]":"opacity-80"}`,children:[U.jsx("span",{className:"text-3xl",children:l.icon}),U.jsxs("div",{className:"flex-1",children:[U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx("span",{className:"font-bold text-gray-800",children:l.title}),l.popular&&U.jsx("span",{className:"bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full",children:"פופולרי"})]}),U.jsx("p",{className:"text-xs text-gray-500",children:l.sub})]}),U.jsx("div",{className:"text-right",children:U.jsx("span",{className:"text-xl font-bold text-gray-800",children:l.price})}),U.jsx("div",{className:`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${r===l.id?"border-indigo-600 bg-indigo-600":"border-gray-300"}`,children:r===l.id&&U.jsx("div",{className:"w-2 h-2 bg-white rounded-full"})})]},l.id))}),U.jsx("button",{onClick:s,disabled:i,className:`w-full ${o.btn} text-white py-4 rounded-2xl font-bold text-lg shadow-lg disabled:opacity-50 active:scale-95 transition-all mb-3`,children:i?"...":`שלם ${o.price}`}),U.jsx("p",{className:"text-center text-xs text-gray-400 mb-4",children:"🔒 תשלום מאובטח"}),U.jsx("button",{onClick:t,className:"w-full text-gray-400 text-sm underline text-center",children:"המשך לניסיון חינם"})]})}function ZE(){const[e,t]=ht.useState("payment"),[r,n]=ht.useState("he"),[i,a]=ht.useState(null);return U.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100",dir:r==="ar"||r==="he"?"rtl":"ltr",children:[e!=="payment"&&e!=="onboarding"&&U.jsx(qE,{}),U.jsxs("main",{className:"max-w-lg mx-auto px-4 pb-12",children:[e==="payment"&&U.jsx(XE,{language:r,onSuccess:()=>t("onboarding")}),e==="onboarding"&&U.jsx(QE,{onDone:s=>{n(s),t("landing")}}),e==="landing"&&U.jsx(GE,{language:r,onStart:()=>t("scan")}),e==="scan"&&U.jsx(VE,{language:r,onResult:s=>{a(s),t("result")},onBack:()=>t("landing")}),e==="result"&&U.jsx(FE,{result:i,language:r,onScanAgain:()=>{a(null),t("scan")}})]})]})}wu.createRoot(document.getElementById("root")).render(U.jsx(ZE,{}));
