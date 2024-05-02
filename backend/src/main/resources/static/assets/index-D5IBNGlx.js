(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function l8(c,a){const e=new Set(c.split(","));return a?r=>e.has(r.toLowerCase()):r=>e.has(r)}const i1={},W2=[],F1=()=>{},Fo=()=>!1,T4=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),f8=c=>c.startsWith("onUpdate:"),u1=Object.assign,o8=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Bo=Object.prototype.hasOwnProperty,j=(c,a)=>Bo.call(c,a),O=Array.isArray,j2=c=>E3(c)==="[object Map]",F4=c=>E3(c)==="[object Set]",W0=c=>E3(c)==="[object Date]",U=c=>typeof c=="function",m1=c=>typeof c=="string",p2=c=>typeof c=="symbol",r1=c=>c!==null&&typeof c=="object",H7=c=>(r1(c)||U(c))&&U(c.then)&&U(c.catch),u7=Object.prototype.toString,E3=c=>u7.call(c),Ro=c=>E3(c).slice(8,-1),V7=c=>E3(c)==="[object Object]",t8=c=>m1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,v3=l8(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),B4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},_o=/-(\w)/g,K1=B4(c=>c.replace(_o,(a,e)=>e?e.toUpperCase():"")),Eo=/\B([A-Z])/g,i3=B4(c=>c.replace(Eo,"-$1").toLowerCase()),R4=B4(c=>c.charAt(0).toUpperCase()+c.slice(1)),V6=B4(c=>c?`on${R4(c)}`:""),M2=(c,a)=>!Object.is(c,a),v4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},d4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},b3=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let j0;const p7=()=>j0||(j0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function m8(c){if(O(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],i=m1(r)?$o(r):m8(r);if(i)for(const s in i)a[s]=i[s]}return a}else if(m1(c)||r1(c))return c}const Do=/;(?![^(]*\))/g,qo=/:([^]+)/,Oo=/\/\*[^]*?\*\//g;function $o(c){const a={};return c.replace(Oo,"").split(Do).forEach(e=>{if(e){const r=e.split(qo);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function z8(c){let a="";if(m1(c))a=c;else if(O(c))for(let e=0;e<c.length;e++){const r=z8(c[e]);r&&(a+=r+" ")}else if(r1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Uo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Io=l8(Uo);function M7(c){return!!c||c===""}function Go(c,a){if(c.length!==a.length)return!1;let e=!0;for(let r=0;e&&r<c.length;r++)e=_4(c[r],a[r]);return e}function _4(c,a){if(c===a)return!0;let e=W0(c),r=W0(a);if(e||r)return e&&r?c.getTime()===a.getTime():!1;if(e=p2(c),r=p2(a),e||r)return c===a;if(e=O(c),r=O(a),e||r)return e&&r?Go(c,a):!1;if(e=r1(c),r=r1(a),e||r){if(!e||!r)return!1;const i=Object.keys(c).length,s=Object.keys(a).length;if(i!==s)return!1;for(const n in c){const l=c.hasOwnProperty(n),f=a.hasOwnProperty(n);if(l&&!f||!l&&f||!_4(c[n],a[n]))return!1}}return String(c)===String(a)}function Wo(c,a){return c.findIndex(e=>_4(e,a))}const h3=c=>m1(c)?c:c==null?"":O(c)||r1(c)&&(c.toString===u7||!U(c.toString))?JSON.stringify(c,C7,2):String(c),C7=(c,a)=>a&&a.__v_isRef?C7(c,a.value):j2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,i],s)=>(e[p6(r,s)+" =>"]=i,e),{})}:F4(a)?{[`Set(${a.size})`]:[...a.values()].map(e=>p6(e))}:p2(a)?p6(a):r1(a)&&!O(a)&&!V7(a)?String(a):a,p6=(c,a="")=>{var e;return p2(c)?`Symbol(${(e=c.description)!=null?e:a})`:c};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _1;class jo{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_1,!a&&_1&&(this.index=(_1.scopes||(_1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=_1;try{return _1=this,a()}finally{_1=e}}}on(){_1=this}off(){_1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Zo(c,a=_1){a&&a.active&&a.effects.push(c)}function Ko(){return _1}let k2;class v8{constructor(a,e,r,i){this.fn=a,this.trigger=e,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Zo(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,R2();for(let a=0;a<this._depsLength;a++){const e=this.deps[a];if(e.computed&&(Yo(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),_2()}return this._dirtyLevel>=4}set dirty(a){this._dirtyLevel=a?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=H2,e=k2;try{return H2=!0,k2=this,this._runnings++,Z0(this),this.fn()}finally{K0(this),this._runnings--,k2=e,H2=a}}stop(){var a;this.active&&(Z0(this),K0(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function Yo(c){return c.value}function Z0(c){c._trackId++,c._depsLength=0}function K0(c){if(c.deps.length>c._depsLength){for(let a=c._depsLength;a<c.deps.length;a++)d7(c.deps[a],c);c.deps.length=c._depsLength}}function d7(c,a){const e=c.get(a);e!==void 0&&a._trackId!==e&&(c.delete(a),c.size===0&&c.cleanup())}let H2=!0,T6=0;const L7=[];function R2(){L7.push(H2),H2=!1}function _2(){const c=L7.pop();H2=c===void 0?!0:c}function h8(){T6++}function H8(){for(T6--;!T6&&F6.length;)F6.shift()()}function g7(c,a,e){if(a.get(c)!==c._trackId){a.set(c,c._trackId);const r=c.deps[c._depsLength];r!==a?(r&&d7(r,c),c.deps[c._depsLength++]=a):c._depsLength++}}const F6=[];function x7(c,a,e){h8();for(const r of c.keys()){let i;r._dirtyLevel<a&&(i??(i=c.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=a),r._shouldSchedule&&(i??(i=c.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&F6.push(r.scheduler)))}H8()}const b7=(c,a)=>{const e=new Map;return e.cleanup=c,e.computed=a,e},B6=new WeakMap,P2=Symbol(""),R6=Symbol("");function y1(c,a,e){if(H2&&k2){let r=B6.get(c);r||B6.set(c,r=new Map);let i=r.get(e);i||r.set(e,i=b7(()=>r.delete(e))),g7(k2,i)}}function J1(c,a,e,r,i,s){const n=B6.get(c);if(!n)return;let l=[];if(a==="clear")l=[...n.values()];else if(e==="length"&&O(c)){const f=Number(r);n.forEach((t,o)=>{(o==="length"||!p2(o)&&o>=f)&&l.push(t)})}else switch(e!==void 0&&l.push(n.get(e)),a){case"add":O(c)?t8(e)&&l.push(n.get("length")):(l.push(n.get(P2)),j2(c)&&l.push(n.get(R6)));break;case"delete":O(c)||(l.push(n.get(P2)),j2(c)&&l.push(n.get(R6)));break;case"set":j2(c)&&l.push(n.get(P2));break}h8();for(const f of l)f&&x7(f,4);H8()}const Xo=l8("__proto__,__v_isRef,__isVue"),N7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(p2)),Y0=Qo();function Qo(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=Z(this);for(let s=0,n=this.length;s<n;s++)y1(r,"get",s+"");const i=r[a](...e);return i===-1||i===!1?r[a](...e.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){R2(),h8();const r=Z(this)[a].apply(this,e);return H8(),_2(),r}}),c}function Jo(c){const a=Z(this);return y1(a,"has",c),a.hasOwnProperty(c)}class S7{constructor(a=!1,e=!1){this._isReadonly=a,this._isShallow=e}get(a,e,r){const i=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!i;if(e==="__v_isReadonly")return i;if(e==="__v_isShallow")return s;if(e==="__v_raw")return r===(i?s?zt:k7:s?A7:w7).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(r)?a:void 0;const n=O(a);if(!i){if(n&&j(Y0,e))return Reflect.get(Y0,e,r);if(e==="hasOwnProperty")return Jo}const l=Reflect.get(a,e,r);return(p2(e)?N7.has(e):Xo(e))||(i||y1(a,"get",e),s)?l:w1(l)?n&&t8(e)?l:l.value:r1(l)?i?T7(l):D4(l):l}}class y7 extends S7{constructor(a=!1){super(!1,a)}set(a,e,r,i){let s=a[e];if(!this._isShallow){const f=J2(s);if(!L4(r)&&!J2(r)&&(s=Z(s),r=Z(r)),!O(a)&&w1(s)&&!w1(r))return f?!1:(s.value=r,!0)}const n=O(a)&&t8(e)?Number(e)<a.length:j(a,e),l=Reflect.set(a,e,r,i);return a===Z(i)&&(n?M2(r,s)&&J1(a,"set",e,r):J1(a,"add",e,r)),l}deleteProperty(a,e){const r=j(a,e);a[e];const i=Reflect.deleteProperty(a,e);return i&&r&&J1(a,"delete",e,void 0),i}has(a,e){const r=Reflect.has(a,e);return(!p2(e)||!N7.has(e))&&y1(a,"has",e),r}ownKeys(a){return y1(a,"iterate",O(a)?"length":P2),Reflect.ownKeys(a)}}class ct extends S7{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const at=new y7,et=new ct,rt=new y7(!0),u8=c=>c,E4=c=>Reflect.getPrototypeOf(c);function Q3(c,a,e=!1,r=!1){c=c.__v_raw;const i=Z(c),s=Z(a);e||(M2(a,s)&&y1(i,"get",a),y1(i,"get",s));const{has:n}=E4(i),l=r?u8:e?M8:N3;if(n.call(i,a))return l(c.get(a));if(n.call(i,s))return l(c.get(s));c!==i&&c.get(a)}function J3(c,a=!1){const e=this.__v_raw,r=Z(e),i=Z(c);return a||(M2(c,i)&&y1(r,"has",c),y1(r,"has",i)),c===i?e.has(c):e.has(c)||e.has(i)}function c4(c,a=!1){return c=c.__v_raw,!a&&y1(Z(c),"iterate",P2),Reflect.get(c,"size",c)}function X0(c){c=Z(c);const a=Z(this);return E4(a).has.call(a,c)||(a.add(c),J1(a,"add",c,c)),this}function Q0(c,a){a=Z(a);const e=Z(this),{has:r,get:i}=E4(e);let s=r.call(e,c);s||(c=Z(c),s=r.call(e,c));const n=i.call(e,c);return e.set(c,a),s?M2(a,n)&&J1(e,"set",c,a):J1(e,"add",c,a),this}function J0(c){const a=Z(this),{has:e,get:r}=E4(a);let i=e.call(a,c);i||(c=Z(c),i=e.call(a,c)),r&&r.call(a,c);const s=a.delete(c);return i&&J1(a,"delete",c,void 0),s}function c5(){const c=Z(this),a=c.size!==0,e=c.clear();return a&&J1(c,"clear",void 0,void 0),e}function a4(c,a){return function(r,i){const s=this,n=s.__v_raw,l=Z(n),f=a?u8:c?M8:N3;return!c&&y1(l,"iterate",P2),n.forEach((t,o)=>r.call(i,f(t),f(o),s))}}function e4(c,a,e){return function(...r){const i=this.__v_raw,s=Z(i),n=j2(s),l=c==="entries"||c===Symbol.iterator&&n,f=c==="keys"&&n,t=i[c](...r),o=e?u8:a?M8:N3;return!a&&y1(s,"iterate",f?R6:P2),{next(){const{value:z,done:h}=t.next();return h?{value:z,done:h}:{value:l?[o(z[0]),o(z[1])]:o(z),done:h}},[Symbol.iterator](){return this}}}}function f2(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function it(){const c={get(s){return Q3(this,s)},get size(){return c4(this)},has:J3,add:X0,set:Q0,delete:J0,clear:c5,forEach:a4(!1,!1)},a={get(s){return Q3(this,s,!1,!0)},get size(){return c4(this)},has:J3,add:X0,set:Q0,delete:J0,clear:c5,forEach:a4(!1,!0)},e={get(s){return Q3(this,s,!0)},get size(){return c4(this,!0)},has(s){return J3.call(this,s,!0)},add:f2("add"),set:f2("set"),delete:f2("delete"),clear:f2("clear"),forEach:a4(!0,!1)},r={get(s){return Q3(this,s,!0,!0)},get size(){return c4(this,!0)},has(s){return J3.call(this,s,!0)},add:f2("add"),set:f2("set"),delete:f2("delete"),clear:f2("clear"),forEach:a4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=e4(s,!1,!1),e[s]=e4(s,!0,!1),a[s]=e4(s,!1,!0),r[s]=e4(s,!0,!0)}),[c,e,a,r]}const[st,nt,lt,ft]=it();function V8(c,a){const e=a?c?ft:lt:c?nt:st;return(r,i,s)=>i==="__v_isReactive"?!c:i==="__v_isReadonly"?c:i==="__v_raw"?r:Reflect.get(j(e,i)&&i in r?e:r,i,s)}const ot={get:V8(!1,!1)},tt={get:V8(!1,!0)},mt={get:V8(!0,!1)},w7=new WeakMap,A7=new WeakMap,k7=new WeakMap,zt=new WeakMap;function vt(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ht(c){return c.__v_skip||!Object.isExtensible(c)?0:vt(Ro(c))}function D4(c){return J2(c)?c:p8(c,!1,at,ot,w7)}function P7(c){return p8(c,!1,rt,tt,A7)}function T7(c){return p8(c,!0,et,mt,k7)}function p8(c,a,e,r,i){if(!r1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=i.get(c);if(s)return s;const n=ht(c);if(n===0)return c;const l=new Proxy(c,n===2?r:e);return i.set(c,l),l}function Z2(c){return J2(c)?Z2(c.__v_raw):!!(c&&c.__v_isReactive)}function J2(c){return!!(c&&c.__v_isReadonly)}function L4(c){return!!(c&&c.__v_isShallow)}function F7(c){return Z2(c)||J2(c)}function Z(c){const a=c&&c.__v_raw;return a?Z(a):c}function B7(c){return Object.isExtensible(c)&&d4(c,"__v_skip",!0),c}const N3=c=>r1(c)?D4(c):c,M8=c=>r1(c)?T7(c):c;class R7{constructor(a,e,r,i){this.getter=a,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new v8(()=>a(this._value),()=>h4(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const a=Z(this);return(!a._cacheable||a.effect.dirty)&&M2(a._value,a._value=a.effect.run())&&h4(a,4),_7(a),a.effect._dirtyLevel>=2&&h4(a,2),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function Ht(c,a,e=!1){let r,i;const s=U(c);return s?(r=c,i=F1):(r=c.get,i=c.set),new R7(r,i,s||!i,e)}function _7(c){var a;H2&&k2&&(c=Z(c),g7(k2,(a=c.dep)!=null?a:c.dep=b7(()=>c.dep=void 0,c instanceof R7?c:void 0)))}function h4(c,a=4,e){c=Z(c);const r=c.dep;r&&x7(r,a)}function w1(c){return!!(c&&c.__v_isRef===!0)}function N1(c){return E7(c,!1)}function ut(c){return E7(c,!0)}function E7(c,a){return w1(c)?c:new Vt(c,a)}class Vt{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:Z(a),this._value=e?a:N3(a)}get value(){return _7(this),this._value}set value(a){const e=this.__v_isShallow||L4(a)||J2(a);a=e?a:Z(a),M2(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:N3(a),h4(this,4))}}function u2(c){return w1(c)?c.value:c}const pt={get:(c,a,e)=>u2(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const i=c[a];return w1(i)&&!w1(e)?(i.value=e,!0):Reflect.set(c,a,e,r)}};function D7(c){return Z2(c)?c:new Proxy(c,pt)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function V2(c,a,e,r){try{return r?c(...r):c()}catch(i){q4(i,a,e)}}function q1(c,a,e,r){if(U(c)){const s=V2(c,a,e,r);return s&&H7(s)&&s.catch(n=>{q4(n,a,e)}),s}const i=[];for(let s=0;s<c.length;s++)i.push(q1(c[s],a,e,r));return i}function q4(c,a,e,r=!0){const i=a?a.vnode:null;if(a){let s=a.parent;const n=a.proxy,l=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const t=s.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,n,l)===!1)return}s=s.parent}const f=a.appContext.config.errorHandler;if(f){V2(f,null,10,[c,n,l]);return}}Mt(c,e,i,r)}function Mt(c,a,e,r=!0){console.error(c)}let S3=!1,_6=!1;const C1=[];let j1=0;const K2=[];let m2=null,N2=0;const q7=Promise.resolve();let C8=null;function d8(c){const a=C8||q7;return c?a.then(this?c.bind(this):c):a}function Ct(c){let a=j1+1,e=C1.length;for(;a<e;){const r=a+e>>>1,i=C1[r],s=y3(i);s<c||s===c&&i.pre?a=r+1:e=r}return a}function L8(c){(!C1.length||!C1.includes(c,S3&&c.allowRecurse?j1+1:j1))&&(c.id==null?C1.push(c):C1.splice(Ct(c.id),0,c),O7())}function O7(){!S3&&!_6&&(_6=!0,C8=q7.then(U7))}function dt(c){const a=C1.indexOf(c);a>j1&&C1.splice(a,1)}function Lt(c){O(c)?K2.push(...c):(!m2||!m2.includes(c,c.allowRecurse?N2+1:N2))&&K2.push(c),O7()}function a5(c,a,e=S3?j1+1:0){for(;e<C1.length;e++){const r=C1[e];if(r&&r.pre){if(c&&r.id!==c.uid)continue;C1.splice(e,1),e--,r()}}}function $7(c){if(K2.length){const a=[...new Set(K2)].sort((e,r)=>y3(e)-y3(r));if(K2.length=0,m2){m2.push(...a);return}for(m2=a,N2=0;N2<m2.length;N2++)m2[N2]();m2=null,N2=0}}const y3=c=>c.id==null?1/0:c.id,gt=(c,a)=>{const e=y3(c)-y3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function U7(c){_6=!1,S3=!0,C1.sort(gt);try{for(j1=0;j1<C1.length;j1++){const a=C1[j1];a&&a.active!==!1&&V2(a,null,14)}}finally{j1=0,C1.length=0,$7(),S3=!1,C8=null,(C1.length||K2.length)&&U7()}}function xt(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||i1;let i=e;const s=a.startsWith("update:"),n=s&&a.slice(7);if(n&&n in r){const o=`${n==="modelValue"?"model":n}Modifiers`,{number:z,trim:h}=r[o]||i1;h&&(i=e.map(u=>m1(u)?u.trim():u)),z&&(i=e.map(b3))}let l,f=r[l=V6(a)]||r[l=V6(K1(a))];!f&&s&&(f=r[l=V6(i3(a))]),f&&q1(f,c,6,i);const t=r[l+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[l])return;c.emitted[l]=!0,q1(t,c,6,i)}}function I7(c,a,e=!1){const r=a.emitsCache,i=r.get(c);if(i!==void 0)return i;const s=c.emits;let n={},l=!1;if(!U(c)){const f=t=>{const o=I7(t,a,!0);o&&(l=!0,u1(n,o))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!s&&!l?(r1(c)&&r.set(c,null),null):(O(s)?s.forEach(f=>n[f]=null):u1(n,s),r1(c)&&r.set(c,n),n)}function O4(c,a){return!c||!T4(a)?!1:(a=a.slice(2).replace(/Once$/,""),j(c,a[0].toLowerCase()+a.slice(1))||j(c,i3(a))||j(c,a))}let S1=null,$4=null;function g4(c){const a=S1;return S1=c,$4=c&&c.type.__scopeId||null,a}function D3(c){$4=c}function q3(){$4=null}function bt(c,a=S1,e){if(!a||c._n)return c;const r=(...i)=>{r._d&&z5(-1);const s=g4(a);let n;try{n=c(...i)}finally{g4(s),r._d&&z5(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function M6(c){const{type:a,vnode:e,proxy:r,withProxy:i,props:s,propsOptions:[n],slots:l,attrs:f,emit:t,render:o,renderCache:z,data:h,setupState:u,ctx:b,inheritAttrs:S}=c;let R,M;const d=g4(c);try{if(e.shapeFlag&4){const D=i||r,I=D;R=W1(o.call(I,D,z,s,u,h,b)),M=f}else{const D=a;R=W1(D.length>1?D(s,{attrs:f,slots:l,emit:t}):D(s,null)),M=a.props?f:Nt(f)}}catch(D){p3.length=0,q4(D,c,1),R=c1(T2)}let A=R;if(M&&S!==!1){const D=Object.keys(M),{shapeFlag:I}=A;D.length&&I&7&&(n&&D.some(f8)&&(M=St(M,n)),A=c3(A,M))}return e.dirs&&(A=c3(A),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition&&(A.transition=e.transition),R=A,g4(d),R}const Nt=c=>{let a;for(const e in c)(e==="class"||e==="style"||T4(e))&&((a||(a={}))[e]=c[e]);return a},St=(c,a)=>{const e={};for(const r in c)(!f8(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function yt(c,a,e){const{props:r,children:i,component:s}=c,{props:n,children:l,patchFlag:f}=a,t=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return r?e5(r,n,t):!!n;if(f&8){const o=a.dynamicProps;for(let z=0;z<o.length;z++){const h=o[z];if(n[h]!==r[h]&&!O4(t,h))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===n?!1:r?n?e5(r,n,t):!0:!!n;return!1}function e5(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(a[s]!==c[s]&&!O4(e,s))return!0}return!1}function wt({vnode:c,parent:a},e){for(;a;){const r=a.subTree;if(r.suspense&&r.suspense.activeBranch===c&&(r.el=c.el),r===c)(c=a.vnode).el=e,a=a.parent;else break}}const G7="components";function E2(c,a){return kt(G7,c,!0,a)||c}const At=Symbol.for("v-ndc");function kt(c,a,e=!0,r=!1){const i=S1||d1;if(i){const s=i.type;if(c===G7){const l=gm(s,!1);if(l&&(l===a||l===K1(a)||l===R4(K1(a))))return s}const n=r5(i[c]||s[c],a)||r5(i.appContext[c],a);return!n&&r?s:n}}function r5(c,a){return c&&(c[a]||c[K1(a)]||c[R4(K1(a))])}const Pt=c=>c.__isSuspense;function Tt(c,a){a&&a.pendingBranch?O(c)?a.effects.push(...c):a.effects.push(c):Lt(c)}const Ft=Symbol.for("v-scx"),Bt=()=>c2(Ft),r4={};function H3(c,a,e){return W7(c,a,e)}function W7(c,a,{immediate:e,deep:r,flush:i,once:s,onTrack:n,onTrigger:l}=i1){if(a&&s){const E=a;a=(...a1)=>{E(...a1),I()}}const f=d1,t=E=>r===!0?E:y2(E,r===!1?1:void 0);let o,z=!1,h=!1;if(w1(c)?(o=()=>c.value,z=L4(c)):Z2(c)?(o=()=>t(c),z=!0):O(c)?(h=!0,z=c.some(E=>Z2(E)||L4(E)),o=()=>c.map(E=>{if(w1(E))return E.value;if(Z2(E))return t(E);if(U(E))return V2(E,f,2)})):U(c)?a?o=()=>V2(c,f,2):o=()=>(u&&u(),q1(c,f,3,[b])):o=F1,a&&r){const E=o;o=()=>y2(E())}let u,b=E=>{u=A.onStop=()=>{V2(E,f,4),u=A.onStop=void 0}},S;if(W4)if(b=F1,a?e&&q1(a,f,3,[o(),h?[]:void 0,b]):o(),i==="sync"){const E=Bt();S=E.__watcherHandles||(E.__watcherHandles=[])}else return F1;let R=h?new Array(c.length).fill(r4):r4;const M=()=>{if(!(!A.active||!A.dirty))if(a){const E=A.run();(r||z||(h?E.some((a1,V1)=>M2(a1,R[V1])):M2(E,R)))&&(u&&u(),q1(a,f,3,[E,R===r4?void 0:h&&R[0]===r4?[]:R,b]),R=E)}else A.run()};M.allowRecurse=!!a;let d;i==="sync"?d=M:i==="post"?d=()=>b1(M,f&&f.suspense):(M.pre=!0,f&&(M.id=f.uid),d=()=>L8(M));const A=new v8(o,F1,d),D=Ko(),I=()=>{A.stop(),D&&o8(D.effects,A)};return a?e?M():R=A.run():i==="post"?b1(A.run.bind(A),f&&f.suspense):A.run(),S&&S.push(I),I}function Rt(c,a,e){const r=this.proxy,i=m1(c)?c.includes(".")?j7(r,c):()=>r[c]:c.bind(r,r);let s;U(a)?s=a:(s=a.handler,e=a);const n=O3(this),l=W7(i,s.bind(r),e);return n(),l}function j7(c,a){const e=a.split(".");return()=>{let r=c;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}function y2(c,a,e=0,r){if(!r1(c)||c.__v_skip)return c;if(a&&a>0){if(e>=a)return c;e++}if(r=r||new Set,r.has(c))return c;if(r.add(c),w1(c))y2(c.value,a,e,r);else if(O(c))for(let i=0;i<c.length;i++)y2(c[i],a,e,r);else if(F4(c)||j2(c))c.forEach(i=>{y2(i,a,e,r)});else if(V7(c))for(const i in c)y2(c[i],a,e,r);return c}function Y2(c,a){if(S1===null)return c;const e=j4(S1)||S1.proxy,r=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[s,n,l,f=i1]=a[i];s&&(U(s)&&(s={mounted:s,updated:s}),s.deep&&y2(n),r.push({dir:s,instance:e,value:n,oldValue:void 0,arg:l,modifiers:f}))}return c}function x2(c,a,e,r){const i=c.dirs,s=a&&a.dirs;for(let n=0;n<i.length;n++){const l=i[n];s&&(l.oldValue=s[n].value);let f=l.dir[r];f&&(R2(),q1(f,e,8,[c.el,l,c,a]),_2())}}/*! #__NO_SIDE_EFFECTS__ */function g8(c,a){return U(c)?u1({name:c.name},a,{setup:c}):c}const H4=c=>!!c.type.__asyncLoader,Z7=c=>c.type.__isKeepAlive;function _t(c,a){K7(c,"a",a)}function Et(c,a){K7(c,"da",a)}function K7(c,a,e=d1){const r=c.__wdc||(c.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return c()});if(U4(a,r,e),e){let i=e.parent;for(;i&&i.parent;)Z7(i.parent.vnode)&&Dt(r,a,e,i),i=i.parent}}function Dt(c,a,e,r){const i=U4(a,c,r,!0);Y7(()=>{o8(r[a],i)},e)}function U4(c,a,e=d1,r=!1){if(e){const i=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;R2();const l=O3(e),f=q1(a,e,c,n);return l(),_2(),f});return r?i.unshift(s):i.push(s),s}}const i2=c=>(a,e=d1)=>(!W4||c==="sp")&&U4(c,(...r)=>a(...r),e),qt=i2("bm"),x8=i2("m"),Ot=i2("bu"),$t=i2("u"),Ut=i2("bum"),Y7=i2("um"),It=i2("sp"),Gt=i2("rtg"),Wt=i2("rtc");function jt(c,a=d1){U4("ec",c,a)}function X7(c,a,e,r){let i;const s=e&&e[r];if(O(c)||m1(c)){i=new Array(c.length);for(let n=0,l=c.length;n<l;n++)i[n]=a(c[n],n,void 0,s&&s[n])}else if(typeof c=="number"){i=new Array(c);for(let n=0;n<c;n++)i[n]=a(n+1,n,void 0,s&&s[n])}else if(r1(c))if(c[Symbol.iterator])i=Array.from(c,(n,l)=>a(n,l,void 0,s&&s[l]));else{const n=Object.keys(c);i=new Array(n.length);for(let l=0,f=n.length;l<f;l++){const t=n[l];i[l]=a(c[t],t,l,s&&s[l])}}else i=[];return e&&(e[r]=i),i}const E6=c=>c?o9(c)?j4(c)||c.proxy:E6(c.parent):null,u3=u1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>E6(c.parent),$root:c=>E6(c.root),$emit:c=>c.emit,$options:c=>b8(c),$forceUpdate:c=>c.f||(c.f=()=>{c.effect.dirty=!0,L8(c.update)}),$nextTick:c=>c.n||(c.n=d8.bind(c.proxy)),$watch:c=>Rt.bind(c)}),C6=(c,a)=>c!==i1&&!c.__isScriptSetup&&j(c,a),Zt={get({_:c},a){const{ctx:e,setupState:r,data:i,props:s,accessCache:n,type:l,appContext:f}=c;let t;if(a[0]!=="$"){const u=n[a];if(u!==void 0)switch(u){case 1:return r[a];case 2:return i[a];case 4:return e[a];case 3:return s[a]}else{if(C6(r,a))return n[a]=1,r[a];if(i!==i1&&j(i,a))return n[a]=2,i[a];if((t=c.propsOptions[0])&&j(t,a))return n[a]=3,s[a];if(e!==i1&&j(e,a))return n[a]=4,e[a];D6&&(n[a]=0)}}const o=u3[a];let z,h;if(o)return a==="$attrs"&&y1(c,"get",a),o(c);if((z=l.__cssModules)&&(z=z[a]))return z;if(e!==i1&&j(e,a))return n[a]=4,e[a];if(h=f.config.globalProperties,j(h,a))return h[a]},set({_:c},a,e){const{data:r,setupState:i,ctx:s}=c;return C6(i,a)?(i[a]=e,!0):r!==i1&&j(r,a)?(r[a]=e,!0):j(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:i,propsOptions:s}},n){let l;return!!e[n]||c!==i1&&j(c,n)||C6(a,n)||(l=s[0])&&j(l,n)||j(r,n)||j(u3,n)||j(i.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:j(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function i5(c){return O(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let D6=!0;function Kt(c){const a=b8(c),e=c.proxy,r=c.ctx;D6=!1,a.beforeCreate&&s5(a.beforeCreate,c,"bc");const{data:i,computed:s,methods:n,watch:l,provide:f,inject:t,created:o,beforeMount:z,mounted:h,beforeUpdate:u,updated:b,activated:S,deactivated:R,beforeDestroy:M,beforeUnmount:d,destroyed:A,unmounted:D,render:I,renderTracked:E,renderTriggered:a1,errorCaptured:V1,serverPrefetch:p1,expose:T1,inheritAttrs:n2,components:g2,directives:$1,filters:n3}=a;if(t&&Yt(t,r,null),n)for(const Q in n){const K=n[Q];U(K)&&(r[Q]=K.bind(e))}if(i){const Q=i.call(e,e);r1(Q)&&(c.data=D4(Q))}if(D6=!0,s)for(const Q in s){const K=s[Q],Y1=U(K)?K.bind(e,e):U(K.get)?K.get.bind(e,e):F1,l2=!U(K)&&U(K.set)?K.set.bind(e):F1,U1=H1({get:Y1,set:l2});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>U1.value,set:g1=>U1.value=g1})}if(l)for(const Q in l)Q7(l[Q],r,e,Q);if(f){const Q=U(f)?f.call(e):f;Reflect.ownKeys(Q).forEach(K=>{u4(K,Q[K])})}o&&s5(o,c,"c");function v1(Q,K){O(K)?K.forEach(Y1=>Q(Y1.bind(e))):K&&Q(K.bind(e))}if(v1(qt,z),v1(x8,h),v1(Ot,u),v1($t,b),v1(_t,S),v1(Et,R),v1(jt,V1),v1(Wt,E),v1(Gt,a1),v1(Ut,d),v1(Y7,D),v1(It,p1),O(T1))if(T1.length){const Q=c.exposed||(c.exposed={});T1.forEach(K=>{Object.defineProperty(Q,K,{get:()=>e[K],set:Y1=>e[K]=Y1})})}else c.exposed||(c.exposed={});I&&c.render===F1&&(c.render=I),n2!=null&&(c.inheritAttrs=n2),g2&&(c.components=g2),$1&&(c.directives=$1)}function Yt(c,a,e=F1){O(c)&&(c=q6(c));for(const r in c){const i=c[r];let s;r1(i)?"default"in i?s=c2(i.from||r,i.default,!0):s=c2(i.from||r):s=c2(i),w1(s)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:n=>s.value=n}):a[r]=s}}function s5(c,a,e){q1(O(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function Q7(c,a,e,r){const i=r.includes(".")?j7(e,r):()=>e[r];if(m1(c)){const s=a[c];U(s)&&H3(i,s)}else if(U(c))H3(i,c.bind(e));else if(r1(c))if(O(c))c.forEach(s=>Q7(s,a,e,r));else{const s=U(c.handler)?c.handler.bind(e):a[c.handler];U(s)&&H3(i,s,c)}}function b8(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:i,optionsCache:s,config:{optionMergeStrategies:n}}=c.appContext,l=s.get(a);let f;return l?f=l:!i.length&&!e&&!r?f=a:(f={},i.length&&i.forEach(t=>x4(f,t,n,!0)),x4(f,a,n)),r1(a)&&s.set(a,f),f}function x4(c,a,e,r=!1){const{mixins:i,extends:s}=a;s&&x4(c,s,e,!0),i&&i.forEach(n=>x4(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const l=Xt[n]||e&&e[n];c[n]=l?l(c[n],a[n]):a[n]}return c}const Xt={data:n5,props:l5,emits:l5,methods:m3,computed:m3,beforeCreate:L1,created:L1,beforeMount:L1,mounted:L1,beforeUpdate:L1,updated:L1,beforeDestroy:L1,beforeUnmount:L1,destroyed:L1,unmounted:L1,activated:L1,deactivated:L1,errorCaptured:L1,serverPrefetch:L1,components:m3,directives:m3,watch:Jt,provide:n5,inject:Qt};function n5(c,a){return a?c?function(){return u1(U(c)?c.call(this,this):c,U(a)?a.call(this,this):a)}:a:c}function Qt(c,a){return m3(q6(c),q6(a))}function q6(c){if(O(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function L1(c,a){return c?[...new Set([].concat(c,a))]:a}function m3(c,a){return c?u1(Object.create(null),c,a):a}function l5(c,a){return c?O(c)&&O(a)?[...new Set([...c,...a])]:u1(Object.create(null),i5(c),i5(a??{})):a}function Jt(c,a){if(!c)return a;if(!a)return c;const e=u1(Object.create(null),c);for(const r in a)e[r]=L1(c[r],a[r]);return e}function J7(){return{app:null,config:{isNativeTag:Fo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cm=0;function am(c,a){return function(r,i=null){U(r)||(r=u1({},r)),i!=null&&!r1(i)&&(i=null);const s=J7(),n=new WeakSet;let l=!1;const f=s.app={_uid:cm++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:bm,get config(){return s.config},set config(t){},use(t,...o){return n.has(t)||(t&&U(t.install)?(n.add(t),t.install(f,...o)):U(t)&&(n.add(t),t(f,...o))),f},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),f},component(t,o){return o?(s.components[t]=o,f):s.components[t]},directive(t,o){return o?(s.directives[t]=o,f):s.directives[t]},mount(t,o,z){if(!l){const h=c1(r,i);return h.appContext=s,z===!0?z="svg":z===!1&&(z=void 0),o&&a?a(h,t):c(h,t,z),l=!0,f._container=t,t.__vue_app__=f,j4(h.component)||h.component.proxy}},unmount(){l&&(c(null,f._container),delete f._container.__vue_app__)},provide(t,o){return s.provides[t]=o,f},runWithContext(t){const o=V3;V3=f;try{return t()}finally{V3=o}}};return f}}let V3=null;function u4(c,a){if(d1){let e=d1.provides;const r=d1.parent&&d1.parent.provides;r===e&&(e=d1.provides=Object.create(r)),e[c]=a}}function c2(c,a,e=!1){const r=d1||S1;if(r||V3){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:V3._context.provides;if(i&&c in i)return i[c];if(arguments.length>1)return e&&U(a)?a.call(r&&r.proxy):a}}function em(c,a,e,r=!1){const i={},s={};d4(s,G4,1),c.propsDefaults=Object.create(null),c9(c,a,i,s);for(const n in c.propsOptions[0])n in i||(i[n]=void 0);e?c.props=r?i:P7(i):c.type.props?c.props=i:c.props=s,c.attrs=s}function rm(c,a,e,r){const{props:i,attrs:s,vnode:{patchFlag:n}}=c,l=Z(i),[f]=c.propsOptions;let t=!1;if((r||n>0)&&!(n&16)){if(n&8){const o=c.vnode.dynamicProps;for(let z=0;z<o.length;z++){let h=o[z];if(O4(c.emitsOptions,h))continue;const u=a[h];if(f)if(j(s,h))u!==s[h]&&(s[h]=u,t=!0);else{const b=K1(h);i[b]=O6(f,l,b,u,c,!1)}else u!==s[h]&&(s[h]=u,t=!0)}}}else{c9(c,a,i,s)&&(t=!0);let o;for(const z in l)(!a||!j(a,z)&&((o=i3(z))===z||!j(a,o)))&&(f?e&&(e[z]!==void 0||e[o]!==void 0)&&(i[z]=O6(f,l,z,void 0,c,!0)):delete i[z]);if(s!==l)for(const z in s)(!a||!j(a,z))&&(delete s[z],t=!0)}t&&J1(c,"set","$attrs")}function c9(c,a,e,r){const[i,s]=c.propsOptions;let n=!1,l;if(a)for(let f in a){if(v3(f))continue;const t=a[f];let o;i&&j(i,o=K1(f))?!s||!s.includes(o)?e[o]=t:(l||(l={}))[o]=t:O4(c.emitsOptions,f)||(!(f in r)||t!==r[f])&&(r[f]=t,n=!0)}if(s){const f=Z(e),t=l||i1;for(let o=0;o<s.length;o++){const z=s[o];e[z]=O6(i,f,z,t[z],c,!j(t,z))}}return n}function O6(c,a,e,r,i,s){const n=c[e];if(n!=null){const l=j(n,"default");if(l&&r===void 0){const f=n.default;if(n.type!==Function&&!n.skipFactory&&U(f)){const{propsDefaults:t}=i;if(e in t)r=t[e];else{const o=O3(i);r=t[e]=f.call(null,a),o()}}else r=f}n[0]&&(s&&!l?r=!1:n[1]&&(r===""||r===i3(e))&&(r=!0))}return r}function a9(c,a,e=!1){const r=a.propsCache,i=r.get(c);if(i)return i;const s=c.props,n={},l=[];let f=!1;if(!U(c)){const o=z=>{f=!0;const[h,u]=a9(z,a,!0);u1(n,h),u&&l.push(...u)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!s&&!f)return r1(c)&&r.set(c,W2),W2;if(O(s))for(let o=0;o<s.length;o++){const z=K1(s[o]);f5(z)&&(n[z]=i1)}else if(s)for(const o in s){const z=K1(o);if(f5(z)){const h=s[o],u=n[z]=O(h)||U(h)?{type:h}:u1({},h);if(u){const b=m5(Boolean,u.type),S=m5(String,u.type);u[0]=b>-1,u[1]=S<0||b<S,(b>-1||j(u,"default"))&&l.push(z)}}}const t=[n,l];return r1(c)&&r.set(c,t),t}function f5(c){return c[0]!=="$"&&!v3(c)}function o5(c){return c===null?"null":typeof c=="function"?c.name||"":typeof c=="object"&&c.constructor&&c.constructor.name||""}function t5(c,a){return o5(c)===o5(a)}function m5(c,a){return O(a)?a.findIndex(e=>t5(e,c)):U(a)&&t5(a,c)?0:-1}const e9=c=>c[0]==="_"||c==="$stable",N8=c=>O(c)?c.map(W1):[W1(c)],im=(c,a,e)=>{if(a._n)return a;const r=bt((...i)=>N8(a(...i)),e);return r._c=!1,r},r9=(c,a,e)=>{const r=c._ctx;for(const i in c){if(e9(i))continue;const s=c[i];if(U(s))a[i]=im(i,s,r);else if(s!=null){const n=N8(s);a[i]=()=>n}}},i9=(c,a)=>{const e=N8(a);c.slots.default=()=>e},sm=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=Z(a),d4(a,"_",e)):r9(a,c.slots={})}else c.slots={},a&&i9(c,a);d4(c.slots,G4,1)},nm=(c,a,e)=>{const{vnode:r,slots:i}=c;let s=!0,n=i1;if(r.shapeFlag&32){const l=a._;l?e&&l===1?s=!1:(u1(i,a),!e&&l===1&&delete i._):(s=!a.$stable,r9(a,i)),n=a}else a&&(i9(c,a),n={default:1});if(s)for(const l in i)!e9(l)&&n[l]==null&&delete i[l]};function $6(c,a,e,r,i=!1){if(O(c)){c.forEach((h,u)=>$6(h,a&&(O(a)?a[u]:a),e,r,i));return}if(H4(r)&&!i)return;const s=r.shapeFlag&4?j4(r.component)||r.component.proxy:r.el,n=i?null:s,{i:l,r:f}=c,t=a&&a.r,o=l.refs===i1?l.refs={}:l.refs,z=l.setupState;if(t!=null&&t!==f&&(m1(t)?(o[t]=null,j(z,t)&&(z[t]=null)):w1(t)&&(t.value=null)),U(f))V2(f,l,12,[n,o]);else{const h=m1(f),u=w1(f);if(h||u){const b=()=>{if(c.f){const S=h?j(z,f)?z[f]:o[f]:f.value;i?O(S)&&o8(S,s):O(S)?S.includes(s)||S.push(s):h?(o[f]=[s],j(z,f)&&(z[f]=o[f])):(f.value=[s],c.k&&(o[c.k]=f.value))}else h?(o[f]=n,j(z,f)&&(z[f]=n)):u&&(f.value=n,c.k&&(o[c.k]=n))};n?(b.id=-1,b1(b,e)):b()}}}const b1=Tt;function lm(c){return fm(c)}function fm(c,a){const e=p7();e.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:n,createText:l,createComment:f,setText:t,setElementText:o,parentNode:z,nextSibling:h,setScopeId:u=F1,insertStaticContent:b}=c,S=(m,v,H,C=null,V=null,x=null,w=void 0,g=null,N=!!v.dynamicChildren)=>{if(m===v)return;m&&!f3(m,v)&&(C=p(m),g1(m,V,x,!0),m=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:L,ref:T,shapeFlag:q}=v;switch(L){case I4:R(m,v,H,C);break;case T2:M(m,v,H,C);break;case L6:m==null&&d(v,H,C,w);break;case k1:g2(m,v,H,C,V,x,w,g,N);break;default:q&1?I(m,v,H,C,V,x,w,g,N):q&6?$1(m,v,H,C,V,x,w,g,N):(q&64||q&128)&&L.process(m,v,H,C,V,x,w,g,N,B)}T!=null&&V&&$6(T,m&&m.ref,x,v||m,!v)},R=(m,v,H,C)=>{if(m==null)r(v.el=l(v.children),H,C);else{const V=v.el=m.el;v.children!==m.children&&t(V,v.children)}},M=(m,v,H,C)=>{m==null?r(v.el=f(v.children||""),H,C):v.el=m.el},d=(m,v,H,C)=>{[m.el,m.anchor]=b(m.children,v,H,C,m.el,m.anchor)},A=({el:m,anchor:v},H,C)=>{let V;for(;m&&m!==v;)V=h(m),r(m,H,C),m=V;r(v,H,C)},D=({el:m,anchor:v})=>{let H;for(;m&&m!==v;)H=h(m),i(m),m=H;i(v)},I=(m,v,H,C,V,x,w,g,N)=>{v.type==="svg"?w="svg":v.type==="math"&&(w="mathml"),m==null?E(v,H,C,V,x,w,g,N):p1(m,v,V,x,w,g,N)},E=(m,v,H,C,V,x,w,g)=>{let N,L;const{props:T,shapeFlag:q,transition:_,dirs:$}=m;if(N=m.el=n(m.type,x,T&&T.is,T),q&8?o(N,m.children):q&16&&V1(m.children,N,null,C,V,d6(m,x),w,g),$&&x2(m,null,C,"created"),a1(N,m,m.scopeId,w,C),T){for(const J in T)J!=="value"&&!v3(J)&&s(N,J,null,T[J],x,m.children,C,V,M1);"value"in T&&s(N,"value",null,T.value,x),(L=T.onVnodeBeforeMount)&&G1(L,C,m)}$&&x2(m,null,C,"beforeMount");const W=om(V,_);W&&_.beforeEnter(N),r(N,v,H),((L=T&&T.onVnodeMounted)||W||$)&&b1(()=>{L&&G1(L,C,m),W&&_.enter(N),$&&x2(m,null,C,"mounted")},V)},a1=(m,v,H,C,V)=>{if(H&&u(m,H),C)for(let x=0;x<C.length;x++)u(m,C[x]);if(V){let x=V.subTree;if(v===x){const w=V.vnode;a1(m,w,w.scopeId,w.slotScopeIds,V.parent)}}},V1=(m,v,H,C,V,x,w,g,N=0)=>{for(let L=N;L<m.length;L++){const T=m[L]=g?z2(m[L]):W1(m[L]);S(null,T,v,H,C,V,x,w,g)}},p1=(m,v,H,C,V,x,w)=>{const g=v.el=m.el;let{patchFlag:N,dynamicChildren:L,dirs:T}=v;N|=m.patchFlag&16;const q=m.props||i1,_=v.props||i1;let $;if(H&&b2(H,!1),($=_.onVnodeBeforeUpdate)&&G1($,H,v,m),T&&x2(v,m,H,"beforeUpdate"),H&&b2(H,!0),L?T1(m.dynamicChildren,L,g,H,C,d6(v,V),x):w||K(m,v,g,null,H,C,d6(v,V),x,!1),N>0){if(N&16)n2(g,v,q,_,H,C,V);else if(N&2&&q.class!==_.class&&s(g,"class",null,_.class,V),N&4&&s(g,"style",q.style,_.style,V),N&8){const W=v.dynamicProps;for(let J=0;J<W.length;J++){const f1=W[J],h1=q[f1],R1=_[f1];(R1!==h1||f1==="value")&&s(g,f1,h1,R1,V,m.children,H,C,M1)}}N&1&&m.children!==v.children&&o(g,v.children)}else!w&&L==null&&n2(g,v,q,_,H,C,V);(($=_.onVnodeUpdated)||T)&&b1(()=>{$&&G1($,H,v,m),T&&x2(v,m,H,"updated")},C)},T1=(m,v,H,C,V,x,w)=>{for(let g=0;g<v.length;g++){const N=m[g],L=v[g],T=N.el&&(N.type===k1||!f3(N,L)||N.shapeFlag&70)?z(N.el):H;S(N,L,T,null,C,V,x,w,!0)}},n2=(m,v,H,C,V,x,w)=>{if(H!==C){if(H!==i1)for(const g in H)!v3(g)&&!(g in C)&&s(m,g,H[g],null,w,v.children,V,x,M1);for(const g in C){if(v3(g))continue;const N=C[g],L=H[g];N!==L&&g!=="value"&&s(m,g,L,N,w,v.children,V,x,M1)}"value"in C&&s(m,"value",H.value,C.value,w)}},g2=(m,v,H,C,V,x,w,g,N)=>{const L=v.el=m?m.el:l(""),T=v.anchor=m?m.anchor:l("");let{patchFlag:q,dynamicChildren:_,slotScopeIds:$}=v;$&&(g=g?g.concat($):$),m==null?(r(L,H,C),r(T,H,C),V1(v.children||[],H,T,V,x,w,g,N)):q>0&&q&64&&_&&m.dynamicChildren?(T1(m.dynamicChildren,_,H,V,x,w,g),(v.key!=null||V&&v===V.subTree)&&s9(m,v,!0)):K(m,v,H,T,V,x,w,g,N)},$1=(m,v,H,C,V,x,w,g,N)=>{v.slotScopeIds=g,m==null?v.shapeFlag&512?V.ctx.activate(v,H,C,w,N):n3(v,H,C,V,x,w,N):D2(m,v,N)},n3=(m,v,H,C,V,x,w)=>{const g=m.component=pm(m,C,V);if(Z7(m)&&(g.ctx.renderer=B),Mm(g),g.asyncDep){if(V&&V.registerDep(g,v1),!m.el){const N=g.subTree=c1(T2);M(null,N,v,H)}}else v1(g,m,v,H,V,x,w)},D2=(m,v,H)=>{const C=v.component=m.component;if(yt(m,v,H))if(C.asyncDep&&!C.asyncResolved){Q(C,v,H);return}else C.next=v,dt(C.update),C.effect.dirty=!0,C.update();else v.el=m.el,C.vnode=v},v1=(m,v,H,C,V,x,w)=>{const g=()=>{if(m.isMounted){let{next:T,bu:q,u:_,parent:$,vnode:W}=m;{const $2=n9(m);if($2){T&&(T.el=W.el,Q(m,T,w)),$2.asyncDep.then(()=>{m.isUnmounted||g()});return}}let J=T,f1;b2(m,!1),T?(T.el=W.el,Q(m,T,w)):T=W,q&&v4(q),(f1=T.props&&T.props.onVnodeBeforeUpdate)&&G1(f1,$,T,W),b2(m,!0);const h1=M6(m),R1=m.subTree;m.subTree=h1,S(R1,h1,z(R1.el),p(R1),m,V,x),T.el=h1.el,J===null&&wt(m,h1.el),_&&b1(_,V),(f1=T.props&&T.props.onVnodeUpdated)&&b1(()=>G1(f1,$,T,W),V)}else{let T;const{el:q,props:_}=v,{bm:$,m:W,parent:J}=m,f1=H4(v);if(b2(m,!1),$&&v4($),!f1&&(T=_&&_.onVnodeBeforeMount)&&G1(T,J,v),b2(m,!0),q&&l1){const h1=()=>{m.subTree=M6(m),l1(q,m.subTree,m,V,null)};f1?v.type.__asyncLoader().then(()=>!m.isUnmounted&&h1()):h1()}else{const h1=m.subTree=M6(m);S(null,h1,H,C,m,V,x),v.el=h1.el}if(W&&b1(W,V),!f1&&(T=_&&_.onVnodeMounted)){const h1=v;b1(()=>G1(T,J,h1),V)}(v.shapeFlag&256||J&&H4(J.vnode)&&J.vnode.shapeFlag&256)&&m.a&&b1(m.a,V),m.isMounted=!0,v=H=C=null}},N=m.effect=new v8(g,F1,()=>L8(L),m.scope),L=m.update=()=>{N.dirty&&N.run()};L.id=m.uid,b2(m,!0),L()},Q=(m,v,H)=>{v.component=m;const C=m.vnode.props;m.vnode=v,m.next=null,rm(m,v.props,C,H),nm(m,v.children,H),R2(),a5(m),_2()},K=(m,v,H,C,V,x,w,g,N=!1)=>{const L=m&&m.children,T=m?m.shapeFlag:0,q=v.children,{patchFlag:_,shapeFlag:$}=v;if(_>0){if(_&128){l2(L,q,H,C,V,x,w,g,N);return}else if(_&256){Y1(L,q,H,C,V,x,w,g,N);return}}$&8?(T&16&&M1(L,V,x),q!==L&&o(H,q)):T&16?$&16?l2(L,q,H,C,V,x,w,g,N):M1(L,V,x,!0):(T&8&&o(H,""),$&16&&V1(q,H,C,V,x,w,g,N))},Y1=(m,v,H,C,V,x,w,g,N)=>{m=m||W2,v=v||W2;const L=m.length,T=v.length,q=Math.min(L,T);let _;for(_=0;_<q;_++){const $=v[_]=N?z2(v[_]):W1(v[_]);S(m[_],$,H,null,V,x,w,g,N)}L>T?M1(m,V,x,!0,!1,q):V1(v,H,C,V,x,w,g,N,q)},l2=(m,v,H,C,V,x,w,g,N)=>{let L=0;const T=v.length;let q=m.length-1,_=T-1;for(;L<=q&&L<=_;){const $=m[L],W=v[L]=N?z2(v[L]):W1(v[L]);if(f3($,W))S($,W,H,null,V,x,w,g,N);else break;L++}for(;L<=q&&L<=_;){const $=m[q],W=v[_]=N?z2(v[_]):W1(v[_]);if(f3($,W))S($,W,H,null,V,x,w,g,N);else break;q--,_--}if(L>q){if(L<=_){const $=_+1,W=$<T?v[$].el:C;for(;L<=_;)S(null,v[L]=N?z2(v[L]):W1(v[L]),H,W,V,x,w,g,N),L++}}else if(L>_)for(;L<=q;)g1(m[L],V,x,!0),L++;else{const $=L,W=L,J=new Map;for(L=W;L<=_;L++){const A1=v[L]=N?z2(v[L]):W1(v[L]);A1.key!=null&&J.set(A1.key,L)}let f1,h1=0;const R1=_-W+1;let $2=!1,U0=0;const l3=new Array(R1);for(L=0;L<R1;L++)l3[L]=0;for(L=$;L<=q;L++){const A1=m[L];if(h1>=R1){g1(A1,V,x,!0);continue}let I1;if(A1.key!=null)I1=J.get(A1.key);else for(f1=W;f1<=_;f1++)if(l3[f1-W]===0&&f3(A1,v[f1])){I1=f1;break}I1===void 0?g1(A1,V,x,!0):(l3[I1-W]=L+1,I1>=U0?U0=I1:$2=!0,S(A1,v[I1],H,null,V,x,w,g,N),h1++)}const I0=$2?tm(l3):W2;for(f1=I0.length-1,L=R1-1;L>=0;L--){const A1=W+L,I1=v[A1],G0=A1+1<T?v[A1+1].el:C;l3[L]===0?S(null,I1,H,G0,V,x,w,g,N):$2&&(f1<0||L!==I0[f1]?U1(I1,H,G0,2):f1--)}}},U1=(m,v,H,C,V=null)=>{const{el:x,type:w,transition:g,children:N,shapeFlag:L}=m;if(L&6){U1(m.component.subTree,v,H,C);return}if(L&128){m.suspense.move(v,H,C);return}if(L&64){w.move(m,v,H,B);return}if(w===k1){r(x,v,H);for(let q=0;q<N.length;q++)U1(N[q],v,H,C);r(m.anchor,v,H);return}if(w===L6){A(m,v,H);return}if(C!==2&&L&1&&g)if(C===0)g.beforeEnter(x),r(x,v,H),b1(()=>g.enter(x),V);else{const{leave:q,delayLeave:_,afterLeave:$}=g,W=()=>r(x,v,H),J=()=>{q(x,()=>{W(),$&&$()})};_?_(x,W,J):J()}else r(x,v,H)},g1=(m,v,H,C=!1,V=!1)=>{const{type:x,props:w,ref:g,children:N,dynamicChildren:L,shapeFlag:T,patchFlag:q,dirs:_}=m;if(g!=null&&$6(g,null,H,m,!0),T&256){v.ctx.deactivate(m);return}const $=T&1&&_,W=!H4(m);let J;if(W&&(J=w&&w.onVnodeBeforeUnmount)&&G1(J,v,m),T&6)X3(m.component,H,C);else{if(T&128){m.suspense.unmount(H,C);return}$&&x2(m,null,v,"beforeUnmount"),T&64?m.type.remove(m,v,H,V,B,C):L&&(x!==k1||q>0&&q&64)?M1(L,v,H,!1,!0):(x===k1&&q&384||!V&&T&16)&&M1(N,v,H),C&&q2(m)}(W&&(J=w&&w.onVnodeUnmounted)||$)&&b1(()=>{J&&G1(J,v,m),$&&x2(m,null,v,"unmounted")},H)},q2=m=>{const{type:v,el:H,anchor:C,transition:V}=m;if(v===k1){O2(H,C);return}if(v===L6){D(m);return}const x=()=>{i(H),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(m.shapeFlag&1&&V&&!V.persisted){const{leave:w,delayLeave:g}=V,N=()=>w(H,x);g?g(m.el,x,N):N()}else x()},O2=(m,v)=>{let H;for(;m!==v;)H=h(m),i(m),m=H;i(v)},X3=(m,v,H)=>{const{bum:C,scope:V,update:x,subTree:w,um:g}=m;C&&v4(C),V.stop(),x&&(x.active=!1,g1(w,m,v,H)),g&&b1(g,v),b1(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},M1=(m,v,H,C=!1,V=!1,x=0)=>{for(let w=x;w<m.length;w++)g1(m[w],v,H,C,V)},p=m=>m.shapeFlag&6?p(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el);let P=!1;const y=(m,v,H)=>{m==null?v._vnode&&g1(v._vnode,null,null,!0):S(v._vnode||null,m,v,null,null,null,H),P||(P=!0,a5(),$7(),P=!1),v._vnode=m},B={p:S,um:g1,m:U1,r:q2,mt:n3,mc:V1,pc:K,pbc:T1,n:p,o:c};let Y,l1;return a&&([Y,l1]=a(B)),{render:y,hydrate:Y,createApp:am(y,Y)}}function d6({type:c,props:a},e){return e==="svg"&&c==="foreignObject"||e==="mathml"&&c==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:e}function b2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function om(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function s9(c,a,e=!1){const r=c.children,i=a.children;if(O(r)&&O(i))for(let s=0;s<r.length;s++){const n=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=z2(i[s]),l.el=n.el),e||s9(n,l)),l.type===I4&&(l.el=n.el)}}function tm(c){const a=c.slice(),e=[0];let r,i,s,n,l;const f=c.length;for(r=0;r<f;r++){const t=c[r];if(t!==0){if(i=e[e.length-1],c[i]<t){a[r]=i,e.push(r);continue}for(s=0,n=e.length-1;s<n;)l=s+n>>1,c[e[l]]<t?s=l+1:n=l;t<c[e[s]]&&(s>0&&(a[r]=e[s-1]),e[s]=r)}}for(s=e.length,n=e[s-1];s-- >0;)e[s]=n,n=a[n];return e}function n9(c){const a=c.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:n9(a)}const mm=c=>c.__isTeleport,k1=Symbol.for("v-fgt"),I4=Symbol.for("v-txt"),T2=Symbol.for("v-cmt"),L6=Symbol.for("v-stc"),p3=[];let E1=null;function e1(c=!1){p3.push(E1=c?null:[])}function zm(){p3.pop(),E1=p3[p3.length-1]||null}let w3=1;function z5(c){w3+=c}function l9(c){return c.dynamicChildren=w3>0?E1||W2:null,zm(),w3>0&&E1&&E1.push(c),c}function t1(c,a,e,r,i,s){return l9(G(c,a,e,r,i,s,!0))}function M3(c,a,e,r,i){return l9(c1(c,a,e,r,i,!0))}function U6(c){return c?c.__v_isVNode===!0:!1}function f3(c,a){return c.type===a.type&&c.key===a.key}const G4="__vInternal",f9=({key:c})=>c??null,V4=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?m1(c)||w1(c)||U(c)?{i:S1,r:c,k:a,f:!!e}:c:null);function G(c,a=null,e=null,r=0,i=null,s=c===k1?0:1,n=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&f9(a),ref:a&&V4(a),scopeId:$4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:S1};return l?(S8(f,e),s&128&&c.normalize(f)):e&&(f.shapeFlag|=m1(e)?8:16),w3>0&&!n&&E1&&(f.patchFlag>0||s&6)&&f.patchFlag!==32&&E1.push(f),f}const c1=vm;function vm(c,a=null,e=null,r=0,i=null,s=!1){if((!c||c===At)&&(c=T2),U6(c)){const l=c3(c,a,!0);return e&&S8(l,e),w3>0&&!s&&E1&&(l.shapeFlag&6?E1[E1.indexOf(c)]=l:E1.push(l)),l.patchFlag|=-2,l}if(xm(c)&&(c=c.__vccOpts),a){a=hm(a);let{class:l,style:f}=a;l&&!m1(l)&&(a.class=z8(l)),r1(f)&&(F7(f)&&!O(f)&&(f=u1({},f)),a.style=m8(f))}const n=m1(c)?1:Pt(c)?128:mm(c)?64:r1(c)?4:U(c)?2:0;return G(c,a,e,r,i,n,s,!0)}function hm(c){return c?F7(c)||G4 in c?u1({},c):c:null}function c3(c,a,e=!1){const{props:r,ref:i,patchFlag:s,children:n}=c,l=a?Hm(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:l,key:l&&f9(l),ref:a&&a.ref?e&&i?O(i)?i.concat(V4(a)):[i,V4(a)]:V4(a):i,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==k1?s===-1?16:s|16:s,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&c3(c.ssContent),ssFallback:c.ssFallback&&c3(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function A3(c=" ",a=0){return c1(I4,null,c,a)}function C3(c="",a=!1){return a?(e1(),M3(T2,null,c)):c1(T2,null,c)}function W1(c){return c==null||typeof c=="boolean"?c1(T2):O(c)?c1(k1,null,c.slice()):typeof c=="object"?z2(c):c1(I4,null,String(c))}function z2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:c3(c)}function S8(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(O(a))e=16;else if(typeof a=="object")if(r&65){const i=a.default;i&&(i._c&&(i._d=!1),S8(c,i()),i._c&&(i._d=!0));return}else{e=32;const i=a._;!i&&!(G4 in a)?a._ctx=S1:i===3&&S1&&(S1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else U(a)?(a={default:a,_ctx:S1},e=32):(a=String(a),r&64?(e=16,a=[A3(a)]):e=8);c.children=a,c.shapeFlag|=e}function Hm(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const i in r)if(i==="class")a.class!==r.class&&(a.class=z8([a.class,r.class]));else if(i==="style")a.style=m8([a.style,r.style]);else if(T4(i)){const s=a[i],n=r[i];n&&s!==n&&!(O(s)&&s.includes(n))&&(a[i]=s?[].concat(s,n):n)}else i!==""&&(a[i]=r[i])}return a}function G1(c,a,e,r=null){q1(c,a,7,[e,r])}const um=J7();let Vm=0;function pm(c,a,e){const r=c.type,i=(a?a.appContext:c.appContext)||um,s={uid:Vm++,vnode:c,type:r,parent:a,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new jo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:a9(r,i),emitsOptions:I7(r,i),emit:null,emitted:null,propsDefaults:i1,inheritAttrs:r.inheritAttrs,ctx:i1,data:i1,props:i1,attrs:i1,slots:i1,refs:i1,setupState:i1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=xt.bind(null,s),c.ce&&c.ce(s),s}let d1=null,b4,I6;{const c=p7(),a=(e,r)=>{let i;return(i=c[e])||(i=c[e]=[]),i.push(r),s=>{i.length>1?i.forEach(n=>n(s)):i[0](s)}};b4=a("__VUE_INSTANCE_SETTERS__",e=>d1=e),I6=a("__VUE_SSR_SETTERS__",e=>W4=e)}const O3=c=>{const a=d1;return b4(c),c.scope.on(),()=>{c.scope.off(),b4(a)}},v5=()=>{d1&&d1.scope.off(),b4(null)};function o9(c){return c.vnode.shapeFlag&4}let W4=!1;function Mm(c,a=!1){a&&I6(a);const{props:e,children:r}=c.vnode,i=o9(c);em(c,e,i,a),sm(c,r);const s=i?Cm(c,a):void 0;return a&&I6(!1),s}function Cm(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=B7(new Proxy(c.ctx,Zt));const{setup:r}=e;if(r){const i=c.setupContext=r.length>1?Lm(c):null,s=O3(c);R2();const n=V2(r,c,0,[c.props,i]);if(_2(),s(),H7(n)){if(n.then(v5,v5),a)return n.then(l=>{h5(c,l,a)}).catch(l=>{q4(l,c,0)});c.asyncDep=n}else h5(c,n,a)}else t9(c,a)}function h5(c,a,e){U(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:r1(a)&&(c.setupState=D7(a)),t9(c,e)}let H5;function t9(c,a,e){const r=c.type;if(!c.render){if(!a&&H5&&!r.render){const i=r.template||b8(c).template;if(i){const{isCustomElement:s,compilerOptions:n}=c.appContext.config,{delimiters:l,compilerOptions:f}=r,t=u1(u1({isCustomElement:s,delimiters:l},n),f);r.render=H5(i,t)}}c.render=r.render||F1}{const i=O3(c);R2();try{Kt(c)}finally{_2(),i()}}}function dm(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return y1(c,"get","$attrs"),a[e]}}))}function Lm(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return dm(c)},slots:c.slots,emit:c.emit,expose:a}}function j4(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(D7(B7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in u3)return u3[e](c)},has(a,e){return e in a||e in u3}}))}function gm(c,a=!0){return U(c)?c.displayName||c.name:c.name||a&&c.__name}function xm(c){return U(c)&&"__vccOpts"in c}const H1=(c,a)=>Ht(c,a,W4);function y8(c,a,e){const r=arguments.length;return r===2?r1(a)&&!O(a)?U6(a)?c1(c,null,[a]):c1(c,a):c1(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&U6(e)&&(e=[e]),c1(c,a,e))}const bm="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Nm="http://www.w3.org/2000/svg",Sm="http://www.w3.org/1998/Math/MathML",v2=typeof document<"u"?document:null,u5=v2&&v2.createElement("template"),ym={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const i=a==="svg"?v2.createElementNS(Nm,c):a==="mathml"?v2.createElementNS(Sm,c):v2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:c=>v2.createTextNode(c),createComment:c=>v2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>v2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,i,s){const n=e?e.previousSibling:a.lastChild;if(i&&(i===s||i.nextSibling))for(;a.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{u5.innerHTML=r==="svg"?`<svg>${c}</svg>`:r==="mathml"?`<math>${c}</math>`:c;const l=u5.content;if(r==="svg"||r==="mathml"){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}a.insertBefore(l,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},wm=Symbol("_vtc");function Am(c,a,e){const r=c[wm];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const N4=Symbol("_vod"),m9=Symbol("_vsh"),km={beforeMount(c,{value:a},{transition:e}){c[N4]=c.style.display==="none"?"":c.style.display,e&&a?e.beforeEnter(c):o3(c,a)},mounted(c,{value:a},{transition:e}){e&&a&&e.enter(c)},updated(c,{value:a,oldValue:e},{transition:r}){!a!=!e&&(r?a?(r.beforeEnter(c),o3(c,!0),r.enter(c)):r.leave(c,()=>{o3(c,!1)}):o3(c,a))},beforeUnmount(c,{value:a}){o3(c,a)}};function o3(c,a){c.style.display=a?c[N4]:"none",c[m9]=!a}const Pm=Symbol(""),Tm=/(^|;)\s*display\s*:/;function Fm(c,a,e){const r=c.style,i=m1(e);let s=!1;if(e&&!i){if(a)if(m1(a))for(const n of a.split(";")){const l=n.slice(0,n.indexOf(":")).trim();e[l]==null&&p4(r,l,"")}else for(const n in a)e[n]==null&&p4(r,n,"");for(const n in e)n==="display"&&(s=!0),p4(r,n,e[n])}else if(i){if(a!==e){const n=r[Pm];n&&(e+=";"+n),r.cssText=e,s=Tm.test(e)}}else a&&c.removeAttribute("style");N4 in c&&(c[N4]=s?r.display:"",c[m9]&&(r.display="none"))}const V5=/\s*!important$/;function p4(c,a,e){if(O(e))e.forEach(r=>p4(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=Bm(c,a);V5.test(e)?c.setProperty(i3(r),e.replace(V5,""),"important"):c[r]=e}}const p5=["Webkit","Moz","ms"],g6={};function Bm(c,a){const e=g6[a];if(e)return e;let r=K1(a);if(r!=="filter"&&r in c)return g6[a]=r;r=R4(r);for(let i=0;i<p5.length;i++){const s=p5[i]+r;if(s in c)return g6[a]=s}return a}const M5="http://www.w3.org/1999/xlink";function Rm(c,a,e,r,i){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(M5,a.slice(6,a.length)):c.setAttributeNS(M5,a,e);else{const s=Io(a);e==null||s&&!M7(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function _m(c,a,e,r,i,s,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,i,s),c[a]=e??"";return}const l=c.tagName;if(a==="value"&&l!=="PROGRESS"&&!l.includes("-")){const t=l==="OPTION"?c.getAttribute("value")||"":c.value,o=e??"";(t!==o||!("_value"in c))&&(c.value=o),e==null&&c.removeAttribute(a),c._value=e;return}let f=!1;if(e===""||e==null){const t=typeof c[a];t==="boolean"?e=M7(e):e==null&&t==="string"?(e="",f=!0):t==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function S2(c,a,e,r){c.addEventListener(a,e,r)}function Em(c,a,e,r){c.removeEventListener(a,e,r)}const C5=Symbol("_vei");function Dm(c,a,e,r,i=null){const s=c[C5]||(c[C5]={}),n=s[a];if(r&&n)n.value=r;else{const[l,f]=qm(a);if(r){const t=s[a]=Um(r,i);S2(c,l,t,f)}else n&&(Em(c,l,n,f),s[a]=void 0)}}const d5=/(?:Once|Passive|Capture)$/;function qm(c){let a;if(d5.test(c)){a={};let r;for(;r=c.match(d5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):i3(c.slice(2)),a]}let x6=0;const Om=Promise.resolve(),$m=()=>x6||(Om.then(()=>x6=0),x6=Date.now());function Um(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;q1(Im(r,e.value),a,5,[r])};return e.value=c,e.attached=$m(),e}function Im(c,a){if(O(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>i=>!i._stopped&&r&&r(i))}else return a}const L5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Gm=(c,a,e,r,i,s,n,l,f)=>{const t=i==="svg";a==="class"?Am(c,r,t):a==="style"?Fm(c,e,r):T4(a)?f8(a)||Dm(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Wm(c,a,r,t))?_m(c,a,r,s,n,l,f):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),Rm(c,a,r,t))};function Wm(c,a,e,r){if(r)return!!(a==="innerHTML"||a==="textContent"||a in c&&L5(a)&&U(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const i=c.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return L5(a)&&m1(e)?!1:a in c}const S4=c=>{const a=c.props["onUpdate:modelValue"]||!1;return O(a)?e=>v4(a,e):a};function jm(c){c.target.composing=!0}function g5(c){const a=c.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const X2=Symbol("_assign"),w8={created(c,{modifiers:{lazy:a,trim:e,number:r}},i){c[X2]=S4(i);const s=r||i.props&&i.props.type==="number";S2(c,a?"change":"input",n=>{if(n.target.composing)return;let l=c.value;e&&(l=l.trim()),s&&(l=b3(l)),c[X2](l)}),e&&S2(c,"change",()=>{c.value=c.value.trim()}),a||(S2(c,"compositionstart",jm),S2(c,"compositionend",g5),S2(c,"change",g5))},mounted(c,{value:a}){c.value=a??""},beforeUpdate(c,{value:a,modifiers:{lazy:e,trim:r,number:i}},s){if(c[X2]=S4(s),c.composing)return;const n=i||c.type==="number"?b3(c.value):c.value,l=a??"";n!==l&&(document.activeElement===c&&c.type!=="range"&&(e||r&&c.value.trim()===l)||(c.value=l))}},z9={deep:!0,created(c,{value:a,modifiers:{number:e}},r){const i=F4(a);S2(c,"change",()=>{const s=Array.prototype.filter.call(c.options,n=>n.selected).map(n=>e?b3(y4(n)):y4(n));c[X2](c.multiple?i?new Set(s):s:s[0]),c._assigning=!0,d8(()=>{c._assigning=!1})}),c[X2]=S4(r)},mounted(c,{value:a,modifiers:{number:e}}){x5(c,a,e)},beforeUpdate(c,a,e){c[X2]=S4(e)},updated(c,{value:a,modifiers:{number:e}}){c._assigning||x5(c,a,e)}};function x5(c,a,e){const r=c.multiple,i=O(a);if(!(r&&!i&&!F4(a))){for(let s=0,n=c.options.length;s<n;s++){const l=c.options[s],f=y4(l);if(r)if(i){const t=typeof f;t==="string"||t==="number"?l.selected=a.includes(e?b3(f):f):l.selected=Wo(a,f)>-1}else l.selected=a.has(f);else if(_4(y4(l),a)){c.selectedIndex!==s&&(c.selectedIndex=s);return}}!r&&c.selectedIndex!==-1&&(c.selectedIndex=-1)}}function y4(c){return"_value"in c?c._value:c.value}const Zm=u1({patchProp:Gm},ym);let b5;function Km(){return b5||(b5=lm(Zm))}const Ym=(...c)=>{const a=Km().createApp(...c),{mount:e}=a;return a.mount=r=>{const i=Qm(r);if(!i)return;const s=a._component;!U(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const n=e(i,!1,Xm(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),n},a};function Xm(c){if(c instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&c instanceof MathMLElement)return"mathml"}function Qm(c){return m1(c)?document.querySelector(c):c}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const U2=typeof document<"u";function Jm(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const X=Object.assign;function b6(c,a){const e={};for(const r in a){const i=a[r];e[r]=O1(i)?i.map(c):c(i)}return e}const d3=()=>{},O1=Array.isArray,v9=/#/g,cz=/&/g,az=/\//g,ez=/=/g,rz=/\?/g,h9=/\+/g,iz=/%5B/g,sz=/%5D/g,H9=/%5E/g,nz=/%60/g,u9=/%7B/g,lz=/%7C/g,V9=/%7D/g,fz=/%20/g;function A8(c){return encodeURI(""+c).replace(lz,"|").replace(iz,"[").replace(sz,"]")}function oz(c){return A8(c).replace(u9,"{").replace(V9,"}").replace(H9,"^")}function G6(c){return A8(c).replace(h9,"%2B").replace(fz,"+").replace(v9,"%23").replace(cz,"%26").replace(nz,"`").replace(u9,"{").replace(V9,"}").replace(H9,"^")}function tz(c){return G6(c).replace(ez,"%3D")}function mz(c){return A8(c).replace(v9,"%23").replace(rz,"%3F")}function zz(c){return c==null?"":mz(c).replace(az,"%2F")}function k3(c){try{return decodeURIComponent(""+c)}catch{}return""+c}const vz=/\/$/,hz=c=>c.replace(vz,"");function N6(c,a,e="/"){let r,i={},s="",n="";const l=a.indexOf("#");let f=a.indexOf("?");return l<f&&l>=0&&(f=-1),f>-1&&(r=a.slice(0,f),s=a.slice(f+1,l>-1?l:a.length),i=c(s)),l>-1&&(r=r||a.slice(0,l),n=a.slice(l,a.length)),r=pz(r??a,e),{fullPath:r+(s&&"?")+s+n,path:r,query:i,hash:k3(n)}}function Hz(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function N5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function uz(c,a,e){const r=a.matched.length-1,i=e.matched.length-1;return r>-1&&r===i&&a3(a.matched[r],e.matched[i])&&p9(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function a3(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function p9(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!Vz(c[e],a[e]))return!1;return!0}function Vz(c,a){return O1(c)?S5(c,a):O1(a)?S5(a,c):c===a}function S5(c,a){return O1(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function pz(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=e.length-1,n,l;for(n=0;n<r.length;n++)if(l=r[n],l!==".")if(l==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+r.slice(n).join("/")}var P3;(function(c){c.pop="pop",c.push="push"})(P3||(P3={}));var L3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(L3||(L3={}));function Mz(c){if(!c)if(U2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),hz(c)}const Cz=/^[^#]+#/;function dz(c,a){return c.replace(Cz,"#")+a}function Lz(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const Z4=()=>({left:window.scrollX,top:window.scrollY});function gz(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),i=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!i)return;a=Lz(i,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.scrollX,a.top!=null?a.top:window.scrollY)}function y5(c,a){return(history.state?history.state.position-a:-1)+c}const W6=new Map;function xz(c,a){W6.set(c,a)}function bz(c){const a=W6.get(c);return W6.delete(c),a}let Nz=()=>location.protocol+"//"+location.host;function M9(c,a){const{pathname:e,search:r,hash:i}=a,s=c.indexOf("#");if(s>-1){let l=i.includes(c.slice(s))?c.slice(s).length:1,f=i.slice(l);return f[0]!=="/"&&(f="/"+f),N5(f,"")}return N5(e,c)+r+i}function Sz(c,a,e,r){let i=[],s=[],n=null;const l=({state:h})=>{const u=M9(c,location),b=e.value,S=a.value;let R=0;if(h){if(e.value=u,a.value=h,n&&n===b){n=null;return}R=S?h.position-S.position:0}else r(u);i.forEach(M=>{M(e.value,b,{delta:R,type:P3.pop,direction:R?R>0?L3.forward:L3.back:L3.unknown})})};function f(){n=e.value}function t(h){i.push(h);const u=()=>{const b=i.indexOf(h);b>-1&&i.splice(b,1)};return s.push(u),u}function o(){const{history:h}=window;h.state&&h.replaceState(X({},h.state,{scroll:Z4()}),"")}function z(){for(const h of s)h();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",o,{passive:!0}),{pauseListeners:f,listen:t,destroy:z}}function w5(c,a,e,r=!1,i=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:i?Z4():null}}function yz(c){const{history:a,location:e}=window,r={value:M9(c,e)},i={value:a.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function s(f,t,o){const z=c.indexOf("#"),h=z>-1?(e.host&&document.querySelector("base")?c:c.slice(z))+f:Nz()+c+f;try{a[o?"replaceState":"pushState"](t,"",h),i.value=t}catch(u){console.error(u),e[o?"replace":"assign"](h)}}function n(f,t){const o=X({},a.state,w5(i.value.back,f,i.value.forward,!0),t,{position:i.value.position});s(f,o,!0),r.value=f}function l(f,t){const o=X({},i.value,a.state,{forward:f,scroll:Z4()});s(o.current,o,!0);const z=X({},w5(r.value,f,null),{position:o.position+1},t);s(f,z,!1),r.value=f}return{location:r,state:i,push:l,replace:n}}function wz(c){c=Mz(c);const a=yz(c),e=Sz(c,a.state,a.location,a.replace);function r(s,n=!0){n||e.pauseListeners(),history.go(s)}const i=X({location:"",base:c,go:r,createHref:dz.bind(null,c)},a,e);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>a.state.value}),i}function Az(c){return typeof c=="string"||c&&typeof c=="object"}function C9(c){return typeof c=="string"||typeof c=="symbol"}const o2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},d9=Symbol("");var A5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(A5||(A5={}));function e3(c,a){return X(new Error,{type:c,[d9]:!0},a)}function X1(c,a){return c instanceof Error&&d9 in c&&(a==null||!!(c.type&a))}const k5="[^/]+?",kz={sensitive:!1,strict:!1,start:!0,end:!0},Pz=/[.+*?^${}()[\]/\\]/g;function Tz(c,a){const e=X({},kz,a),r=[];let i=e.start?"^":"";const s=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(i+="/");for(let z=0;z<t.length;z++){const h=t[z];let u=40+(e.sensitive?.25:0);if(h.type===0)z||(i+="/"),i+=h.value.replace(Pz,"\\$&"),u+=40;else if(h.type===1){const{value:b,repeatable:S,optional:R,regexp:M}=h;s.push({name:b,repeatable:S,optional:R});const d=M||k5;if(d!==k5){u+=10;try{new RegExp(`(${d})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${b}" (${d}): `+D.message)}}let A=S?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;z||(A=R&&t.length<2?`(?:/${A})`:"/"+A),R&&(A+="?"),i+=A,u+=20,R&&(u+=-8),S&&(u+=-20),d===".*"&&(u+=-50)}o.push(u)}r.push(o)}if(e.strict&&e.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}e.strict||(i+="/?"),e.end?i+="$":e.strict&&(i+="(?:/|$)");const n=new RegExp(i,e.sensitive?"":"i");function l(t){const o=t.match(n),z={};if(!o)return null;for(let h=1;h<o.length;h++){const u=o[h]||"",b=s[h-1];z[b.name]=u&&b.repeatable?u.split("/"):u}return z}function f(t){let o="",z=!1;for(const h of c){(!z||!o.endsWith("/"))&&(o+="/"),z=!1;for(const u of h)if(u.type===0)o+=u.value;else if(u.type===1){const{value:b,repeatable:S,optional:R}=u,M=b in t?t[b]:"";if(O1(M)&&!S)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const d=O1(M)?M.join("/"):M;if(!d)if(R)h.length<2&&(o.endsWith("/")?o=o.slice(0,-1):z=!0);else throw new Error(`Missing required param "${b}"`);o+=d}}return o||"/"}return{re:n,score:r,keys:s,parse:l,stringify:f}}function Fz(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===80?-1:1:c.length>a.length?a.length===1&&a[0]===80?1:-1:0}function Bz(c,a){let e=0;const r=c.score,i=a.score;for(;e<r.length&&e<i.length;){const s=Fz(r[e],i[e]);if(s)return s;e++}if(Math.abs(i.length-r.length)===1){if(P5(r))return 1;if(P5(i))return-1}return i.length-r.length}function P5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const Rz={type:0,value:""},_z=/[a-zA-Z0-9_]/;function Ez(c){if(!c)return[[]];if(c==="/")return[[Rz]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(u){throw new Error(`ERR (${e})/"${t}": ${u}`)}let e=0,r=e;const i=[];let s;function n(){s&&i.push(s),s=[]}let l=0,f,t="",o="";function z(){t&&(e===0?s.push({type:0,value:t}):e===1||e===2||e===3?(s.length>1&&(f==="*"||f==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:t,regexp:o,repeatable:f==="*"||f==="+",optional:f==="*"||f==="?"})):a("Invalid state to consume buffer"),t="")}function h(){t+=f}for(;l<c.length;){if(f=c[l++],f==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:f==="/"?(t&&z(),n()):f===":"?(z(),e=1):h();break;case 4:h(),e=r;break;case 1:f==="("?e=2:_z.test(f)?h():(z(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&l--);break;case 2:f===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+f:e=3:o+=f;break;case 3:z(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&l--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),z(),n(),i}function Dz(c,a,e){const r=Tz(Ez(c.path),e),i=X(r,{record:c,parent:a,children:[],alias:[]});return a&&!i.record.aliasOf==!a.record.aliasOf&&a.children.push(i),i}function qz(c,a){const e=[],r=new Map;a=B5({strict:!1,end:!0,sensitive:!1},a);function i(o){return r.get(o)}function s(o,z,h){const u=!h,b=Oz(o);b.aliasOf=h&&h.record;const S=B5(a,o),R=[b];if("alias"in o){const A=typeof o.alias=="string"?[o.alias]:o.alias;for(const D of A)R.push(X({},b,{components:h?h.record.components:b.components,path:D,aliasOf:h?h.record:b}))}let M,d;for(const A of R){const{path:D}=A;if(z&&D[0]!=="/"){const I=z.record.path,E=I[I.length-1]==="/"?"":"/";A.path=z.record.path+(D&&E+D)}if(M=Dz(A,z,S),h?h.alias.push(M):(d=d||M,d!==M&&d.alias.push(M),u&&o.name&&!F5(M)&&n(o.name)),b.children){const I=b.children;for(let E=0;E<I.length;E++)s(I[E],M,h&&h.children[E])}h=h||M,(M.record.components&&Object.keys(M.record.components).length||M.record.name||M.record.redirect)&&f(M)}return d?()=>{n(d)}:d3}function n(o){if(C9(o)){const z=r.get(o);z&&(r.delete(o),e.splice(e.indexOf(z),1),z.children.forEach(n),z.alias.forEach(n))}else{const z=e.indexOf(o);z>-1&&(e.splice(z,1),o.record.name&&r.delete(o.record.name),o.children.forEach(n),o.alias.forEach(n))}}function l(){return e}function f(o){let z=0;for(;z<e.length&&Bz(o,e[z])>=0&&(o.record.path!==e[z].record.path||!L9(o,e[z]));)z++;e.splice(z,0,o),o.record.name&&!F5(o)&&r.set(o.record.name,o)}function t(o,z){let h,u={},b,S;if("name"in o&&o.name){if(h=r.get(o.name),!h)throw e3(1,{location:o});S=h.record.name,u=X(T5(z.params,h.keys.filter(d=>!d.optional).concat(h.parent?h.parent.keys.filter(d=>d.optional):[]).map(d=>d.name)),o.params&&T5(o.params,h.keys.map(d=>d.name))),b=h.stringify(u)}else if(o.path!=null)b=o.path,h=e.find(d=>d.re.test(b)),h&&(u=h.parse(b),S=h.record.name);else{if(h=z.name?r.get(z.name):e.find(d=>d.re.test(z.path)),!h)throw e3(1,{location:o,currentLocation:z});S=h.record.name,u=X({},z.params,o.params),b=h.stringify(u)}const R=[];let M=h;for(;M;)R.unshift(M.record),M=M.parent;return{name:S,path:b,params:u,matched:R,meta:Uz(R)}}return c.forEach(o=>s(o)),{addRoute:s,resolve:t,removeRoute:n,getRoutes:l,getRecordMatcher:i}}function T5(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function Oz(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:$z(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function $z(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function F5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function Uz(c){return c.reduce((a,e)=>X(a,e.meta),{})}function B5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function L9(c,a){return a.children.some(e=>e===c||L9(c,e))}function Iz(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(h9," "),n=s.indexOf("="),l=k3(n<0?s:s.slice(0,n)),f=n<0?null:k3(s.slice(n+1));if(l in a){let t=a[l];O1(t)||(t=a[l]=[t]),t.push(f)}else a[l]=f}return a}function R5(c){let a="";for(let e in c){const r=c[e];if(e=tz(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(O1(r)?r.map(s=>s&&G6(s)):[r&&G6(r)]).forEach(s=>{s!==void 0&&(a+=(a.length?"&":"")+e,s!=null&&(a+="="+s))})}return a}function Gz(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=O1(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return a}const Wz=Symbol(""),_5=Symbol(""),k8=Symbol(""),g9=Symbol(""),j6=Symbol("");function t3(){let c=[];function a(r){return c.push(r),()=>{const i=c.indexOf(r);i>-1&&c.splice(i,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function h2(c,a,e,r,i,s=n=>n()){const n=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,f)=>{const t=h=>{h===!1?f(e3(4,{from:e,to:a})):h instanceof Error?f(h):Az(h)?f(e3(2,{from:a,to:h})):(n&&r.enterCallbacks[i]===n&&typeof h=="function"&&n.push(h),l())},o=s(()=>c.call(r&&r.instances[i],a,e,t));let z=Promise.resolve(o);c.length<3&&(z=z.then(t)),z.catch(h=>f(h))})}function S6(c,a,e,r,i=s=>s()){const s=[];for(const n of c)for(const l in n.components){let f=n.components[l];if(!(a!=="beforeRouteEnter"&&!n.instances[l]))if(jz(f)){const o=(f.__vccOpts||f)[a];o&&s.push(h2(o,e,r,n,l,i))}else{let t=f();s.push(()=>t.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${n.path}"`));const z=Jm(o)?o.default:o;n.components[l]=z;const u=(z.__vccOpts||z)[a];return u&&h2(u,e,r,n,l,i)()}))}}return s}function jz(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function E5(c){const a=c2(k8),e=c2(g9),r=H1(()=>a.resolve(u2(c.to))),i=H1(()=>{const{matched:f}=r.value,{length:t}=f,o=f[t-1],z=e.matched;if(!o||!z.length)return-1;const h=z.findIndex(a3.bind(null,o));if(h>-1)return h;const u=D5(f[t-2]);return t>1&&D5(o)===u&&z[z.length-1].path!==u?z.findIndex(a3.bind(null,f[t-2])):h}),s=H1(()=>i.value>-1&&Xz(e.params,r.value.params)),n=H1(()=>i.value>-1&&i.value===e.matched.length-1&&p9(e.params,r.value.params));function l(f={}){return Yz(f)?a[u2(c.replace)?"replace":"push"](u2(c.to)).catch(d3):Promise.resolve()}return{route:r,href:H1(()=>r.value.href),isActive:s,isExactActive:n,navigate:l}}const Zz=g8({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:E5,setup(c,{slots:a}){const e=D4(E5(c)),{options:r}=c2(k8),i=H1(()=>({[q5(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[q5(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=a.default&&a.default(e);return c.custom?s:y8("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:i.value},s)}}}),Kz=Zz;function Yz(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function Xz(c,a){for(const e in a){const r=a[e],i=c[e];if(typeof r=="string"){if(r!==i)return!1}else if(!O1(i)||i.length!==r.length||r.some((s,n)=>s!==i[n]))return!1}return!0}function D5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const q5=(c,a,e)=>c??a??e,Qz=g8({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=c2(j6),i=H1(()=>c.route||r.value),s=c2(_5,0),n=H1(()=>{let t=u2(s);const{matched:o}=i.value;let z;for(;(z=o[t])&&!z.components;)t++;return t}),l=H1(()=>i.value.matched[n.value]);u4(_5,H1(()=>n.value+1)),u4(Wz,l),u4(j6,i);const f=N1();return H3(()=>[f.value,l.value,c.name],([t,o,z],[h,u,b])=>{o&&(o.instances[z]=t,u&&u!==o&&t&&t===h&&(o.leaveGuards.size||(o.leaveGuards=u.leaveGuards),o.updateGuards.size||(o.updateGuards=u.updateGuards))),t&&o&&(!u||!a3(o,u)||!h)&&(o.enterCallbacks[z]||[]).forEach(S=>S(t))},{flush:"post"}),()=>{const t=i.value,o=c.name,z=l.value,h=z&&z.components[o];if(!h)return O5(e.default,{Component:h,route:t});const u=z.props[o],b=u?u===!0?t.params:typeof u=="function"?u(t):u:null,R=y8(h,X({},b,a,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(z.instances[o]=null)},ref:f}));return O5(e.default,{Component:R,route:t})||R}}});function O5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const Jz=Qz;function cv(c){const a=qz(c.routes,c),e=c.parseQuery||Iz,r=c.stringifyQuery||R5,i=c.history,s=t3(),n=t3(),l=t3(),f=ut(o2);let t=o2;U2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=b6.bind(null,p=>""+p),z=b6.bind(null,zz),h=b6.bind(null,k3);function u(p,P){let y,B;return C9(p)?(y=a.getRecordMatcher(p),B=P):B=p,a.addRoute(B,y)}function b(p){const P=a.getRecordMatcher(p);P&&a.removeRoute(P)}function S(){return a.getRoutes().map(p=>p.record)}function R(p){return!!a.getRecordMatcher(p)}function M(p,P){if(P=X({},P||f.value),typeof p=="string"){const v=N6(e,p,P.path),H=a.resolve({path:v.path},P),C=i.createHref(v.fullPath);return X(v,H,{params:h(H.params),hash:k3(v.hash),redirectedFrom:void 0,href:C})}let y;if(p.path!=null)y=X({},p,{path:N6(e,p.path,P.path).path});else{const v=X({},p.params);for(const H in v)v[H]==null&&delete v[H];y=X({},p,{params:z(v)}),P.params=z(P.params)}const B=a.resolve(y,P),Y=p.hash||"";B.params=o(h(B.params));const l1=Hz(r,X({},p,{hash:oz(Y),path:B.path})),m=i.createHref(l1);return X({fullPath:l1,hash:Y,query:r===R5?Gz(p.query):p.query||{}},B,{redirectedFrom:void 0,href:m})}function d(p){return typeof p=="string"?N6(e,p,f.value.path):X({},p)}function A(p,P){if(t!==p)return e3(8,{from:P,to:p})}function D(p){return a1(p)}function I(p){return D(X(d(p),{replace:!0}))}function E(p){const P=p.matched[p.matched.length-1];if(P&&P.redirect){const{redirect:y}=P;let B=typeof y=="function"?y(p):y;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=d(B):{path:B},B.params={}),X({query:p.query,hash:p.hash,params:B.path!=null?{}:p.params},B)}}function a1(p,P){const y=t=M(p),B=f.value,Y=p.state,l1=p.force,m=p.replace===!0,v=E(y);if(v)return a1(X(d(v),{state:typeof v=="object"?X({},Y,v.state):Y,force:l1,replace:m}),P||y);const H=y;H.redirectedFrom=P;let C;return!l1&&uz(r,B,y)&&(C=e3(16,{to:H,from:B}),U1(B,B,!0,!1)),(C?Promise.resolve(C):T1(H,B)).catch(V=>X1(V)?X1(V,2)?V:l2(V):K(V,H,B)).then(V=>{if(V){if(X1(V,2))return a1(X({replace:m},d(V.to),{state:typeof V.to=="object"?X({},Y,V.to.state):Y,force:l1}),P||H)}else V=g2(H,B,!0,m,Y);return n2(H,B,V),V})}function V1(p,P){const y=A(p,P);return y?Promise.reject(y):Promise.resolve()}function p1(p){const P=O2.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(p):p()}function T1(p,P){let y;const[B,Y,l1]=av(p,P);y=S6(B.reverse(),"beforeRouteLeave",p,P);for(const v of B)v.leaveGuards.forEach(H=>{y.push(h2(H,p,P))});const m=V1.bind(null,p,P);return y.push(m),M1(y).then(()=>{y=[];for(const v of s.list())y.push(h2(v,p,P));return y.push(m),M1(y)}).then(()=>{y=S6(Y,"beforeRouteUpdate",p,P);for(const v of Y)v.updateGuards.forEach(H=>{y.push(h2(H,p,P))});return y.push(m),M1(y)}).then(()=>{y=[];for(const v of l1)if(v.beforeEnter)if(O1(v.beforeEnter))for(const H of v.beforeEnter)y.push(h2(H,p,P));else y.push(h2(v.beforeEnter,p,P));return y.push(m),M1(y)}).then(()=>(p.matched.forEach(v=>v.enterCallbacks={}),y=S6(l1,"beforeRouteEnter",p,P,p1),y.push(m),M1(y))).then(()=>{y=[];for(const v of n.list())y.push(h2(v,p,P));return y.push(m),M1(y)}).catch(v=>X1(v,8)?v:Promise.reject(v))}function n2(p,P,y){l.list().forEach(B=>p1(()=>B(p,P,y)))}function g2(p,P,y,B,Y){const l1=A(p,P);if(l1)return l1;const m=P===o2,v=U2?history.state:{};y&&(B||m?i.replace(p.fullPath,X({scroll:m&&v&&v.scroll},Y)):i.push(p.fullPath,Y)),f.value=p,U1(p,P,y,m),l2()}let $1;function n3(){$1||($1=i.listen((p,P,y)=>{if(!X3.listening)return;const B=M(p),Y=E(B);if(Y){a1(X(Y,{replace:!0}),B).catch(d3);return}t=B;const l1=f.value;U2&&xz(y5(l1.fullPath,y.delta),Z4()),T1(B,l1).catch(m=>X1(m,12)?m:X1(m,2)?(a1(m.to,B).then(v=>{X1(v,20)&&!y.delta&&y.type===P3.pop&&i.go(-1,!1)}).catch(d3),Promise.reject()):(y.delta&&i.go(-y.delta,!1),K(m,B,l1))).then(m=>{m=m||g2(B,l1,!1),m&&(y.delta&&!X1(m,8)?i.go(-y.delta,!1):y.type===P3.pop&&X1(m,20)&&i.go(-1,!1)),n2(B,l1,m)}).catch(d3)}))}let D2=t3(),v1=t3(),Q;function K(p,P,y){l2(p);const B=v1.list();return B.length?B.forEach(Y=>Y(p,P,y)):console.error(p),Promise.reject(p)}function Y1(){return Q&&f.value!==o2?Promise.resolve():new Promise((p,P)=>{D2.add([p,P])})}function l2(p){return Q||(Q=!p,n3(),D2.list().forEach(([P,y])=>p?y(p):P()),D2.reset()),p}function U1(p,P,y,B){const{scrollBehavior:Y}=c;if(!U2||!Y)return Promise.resolve();const l1=!y&&bz(y5(p.fullPath,0))||(B||!y)&&history.state&&history.state.scroll||null;return d8().then(()=>Y(p,P,l1)).then(m=>m&&gz(m)).catch(m=>K(m,p,P))}const g1=p=>i.go(p);let q2;const O2=new Set,X3={currentRoute:f,listening:!0,addRoute:u,removeRoute:b,hasRoute:R,getRoutes:S,resolve:M,options:c,push:D,replace:I,go:g1,back:()=>g1(-1),forward:()=>g1(1),beforeEach:s.add,beforeResolve:n.add,afterEach:l.add,onError:v1.add,isReady:Y1,install(p){const P=this;p.component("RouterLink",Kz),p.component("RouterView",Jz),p.config.globalProperties.$router=P,Object.defineProperty(p.config.globalProperties,"$route",{enumerable:!0,get:()=>u2(f)}),U2&&!q2&&f.value===o2&&(q2=!0,D(i.location).catch(Y=>{}));const y={};for(const Y in o2)Object.defineProperty(y,Y,{get:()=>f.value[Y],enumerable:!0});p.provide(k8,P),p.provide(g9,P7(y)),p.provide(j6,f);const B=p.unmount;O2.add(p),p.unmount=function(){O2.delete(p),O2.size<1&&(t=o2,$1&&$1(),$1=null,f.value=o2,q2=!1,Q=!1),B()}}};function M1(p){return p.reduce((P,y)=>P.then(()=>p1(y)),Promise.resolve())}return X3}function av(c,a){const e=[],r=[],i=[],s=Math.max(a.matched.length,c.matched.length);for(let n=0;n<s;n++){const l=a.matched[n];l&&(c.matched.find(t=>a3(t,l))?r.push(l):e.push(l));const f=c.matched[n];f&&(a.matched.find(t=>a3(t,f))||i.push(f))}return[e,r,i]}const B1=(c,a)=>{const e=c.__vccOpts||c;for(const[r,i]of a)e[r]=i;return e},ev={};function rv(c,a){const e=E2("font-awesome-icon");return e1(),t1("header",null,[G("h1",null,[A3("Lista de la compra "),c1(e,{icon:"cart-shopping"})])])}const iv=B1(ev,[["render",rv],["__scopeId","data-v-516abc96"]]),sv={},x9=c=>(D3("data-v-b39800c0"),c=c(),q3(),c),nv=x9(()=>G("hr",null,null,-1)),lv=x9(()=>G("p",null,"Adrian Navarro Salmeron - 2024",-1)),fv=[nv,lv];function ov(c,a){return e1(),t1("footer",null,fv)}const tv=B1(sv,[["render",ov],["__scopeId","data-v-b39800c0"]]),K4=c=>(D3("data-v-0bba8897"),c=c(),q3(),c),mv={class:"nombre"},zv={key:0,id:"nombreIndividual"},vv={class:"resto"},hv={key:0},Hv=K4(()=>G("option",{value:"",disabled:"",selected:""},"Prioridad",-1)),uv=K4(()=>G("option",null,"🟢-baja",-1)),Vv=K4(()=>G("option",null,"🟡-media",-1)),pv=K4(()=>G("option",null,"🔴-alta",-1)),Mv=[Hv,uv,Vv,pv],Cv={class:"resto"},dv={key:0,class:"boton"},Lv={__name:"ItemIndividual",props:{item:Object,index:Number},emits:["emitBorrar","emitItemEditado"],setup(c,{emit:a}){const e=c,r=a,i={alta:"🔴",media:"🟡",baja:"🟢"},s=()=>{r("emitBorrar",e.index)},n=N1(!1),l=N1(""),f=N1(""),t=N1({producto:"",prioridad:"",index:""});function o(){return f.value.split("-")[1]}const z=()=>{n.value=!1,t.value.producto=l.value,t.value.prioridad=o(),t.value.index=e.index,r("emitItemEditado",t),console.log("Soy Item individual: he enviado el emit"),l.value="",f.value=""};return(h,u)=>{const b=E2("font-awesome-icon");return e1(),t1("article",null,[G("div",mv,[n.value?Y2((e1(),t1("input",{key:1,type:"text","onUpdate:modelValue":u[0]||(u[0]=S=>l.value=S),class:"modoEdicion"},null,512)),[[w8,l.value]]):(e1(),t1("p",zv,h3(e.index+1)+" - "+h3(e.item.producto),1))]),G("div",vv,[n.value?Y2((e1(),t1("select",{key:1,"onUpdate:modelValue":u[1]||(u[1]=S=>f.value=S),class:"modoEdicion"},Mv,512)),[[z9,f.value]]):(e1(),t1("p",hv,h3(i[e.item.prioridad]),1))]),G("div",Cv,[n.value?C3("",!0):(e1(),t1("button",dv,[c1(b,{onClick:s,icon:"trash-can"})])),n.value?C3("",!0):(e1(),t1("button",{key:1,class:"boton",onClick:u[2]||(u[2]=S=>n.value=!n.value)},[c1(b,{icon:"user-pen"})])),n.value&&f.value&&l.value?(e1(),t1("button",{key:2,onClick:z,class:"modoEdicion botonEdicion"}," Guardar ")):C3("",!0)])])}}},gv=B1(Lv,[["__scopeId","data-v-0bba8897"]]),xv={class:"items"},bv={__name:"ListaItems",props:{misCompras:Array},emits:["borrarItem","enviarEmitObjetoEditado"],setup(c,{emit:a}){const e=c,r=a,i=n=>{r("borrarItem",n)},s=n=>{r("enviarEmitObjetoEditado",n),console.log("Soy lista Item: he enviado el emit")};return(n,l)=>(e1(),t1("section",xv,[(e1(!0),t1(k1,null,X7(e.misCompras,(f,t)=>(e1(),M3(gv,{onEmitBorrar:i,onEmitItemEditado:s,key:t,item:f,index:t},null,8,["item","index"]))),128))]))}},Nv=B1(bv,[["__scopeId","data-v-53bb4414"]]),$3=c=>(D3("data-v-111fd629"),c=c(),q3(),c),Sv=$3(()=>G("p",null,"Nuevo item",-1)),yv={class:"contenedorNuevoItem"},wv=$3(()=>G("option",{value:"",disabled:"",selected:""},"Prioridad",-1)),Av=$3(()=>G("option",null,"🟢-baja",-1)),kv=$3(()=>G("option",null,"🟡-media",-1)),Pv=$3(()=>G("option",null,"🔴-alta",-1)),Tv=[wv,Av,kv,Pv],Fv={__name:"NuevoItem",emits:["enviar"],setup(c,{emit:a}){const e=a,r=N1({producto:"",prioridad:""});function i(){return f.value.split("-")[1]}function s(){r.value.producto=l.value,r.value.prioridad=i(),n()}function n(){e("enviar",r)}const l=N1(""),f=N1("");return(t,o)=>(e1(),t1(k1,null,[Sv,G("div",yv,[Y2(G("input",{class:"componenteContenedorNuevoItem",type:"text","onUpdate:modelValue":o[0]||(o[0]=z=>l.value=z),id:"contenedorNuevoItem",placeholder:"Agua"},null,512),[[w8,l.value]]),Y2(G("select",{"onUpdate:modelValue":o[1]||(o[1]=z=>f.value=z),class:"componenteContenedorNuevoItem",id:"selector"},Tv,512),[[z9,f.value]]),Y2(G("button",{onClick:s,class:"componenteContenedorNuevoItem",id:"boton"}," Añadir ",512),[[km,l.value&&f.value]])])],64))}},Bv=B1(Fv,[["__scopeId","data-v-111fd629"]]),Rv={class:"contenedor"},_v={class:"nuevoItem"},Ev={__name:"ListaCompra",setup(c){const a=N1([]),e=n=>{a.value.push({producto:n.value.producto,prioridad:n.value.prioridad}),s()},r=n=>{a.value.splice(n,1),s()},i=n=>{const l={producto:n.value.producto,prioridad:n.value.prioridad};a.value.splice(n.value.index,1,l),s()},s=()=>{localStorage.setItem("lista",JSON.stringify(a.value))};return x8(()=>{a.value=JSON.parse(localStorage.getItem("lista"))||a.value}),(n,l)=>(e1(),t1("div",Rv,[c1(iv),c1(Nv,{"mis-compras":a.value,onBorrarItem:r,onEnviarEmitObjetoEditado:i},null,8,["mis-compras"]),G("div",_v,[c1(Bv,{onEnviar:e})]),c1(tv)]))}},Dv=B1(Ev,[["__scopeId","data-v-76bf6af7"]]),qv=c=>(D3("data-v-a2283c70"),c=c(),q3(),c),Ov={class:"contenedorLibro"},$v=["src"],Uv={class:"parrafo"},Iv=qv(()=>G("button",null,"Leer",-1)),Gv={__name:"LibroIndividual",props:{libro:Object,index:Number},setup(c){const a=c;return(e,r)=>(e1(),t1("div",Ov,[G("img",{class:"imagen",src:a.libro.value.coverDatos},null,8,$v),G("div",Uv,[G("p",null,h3(a.libro.value.tituloLibro),1)]),Iv]))}},Wv=B1(Gv,[["__scopeId","data-v-a2283c70"]]),jv="/assets/Logo-CK_zTHoC.png",Zv={class:"contenedorBusqueda"},Kv={__name:"BarraDeBusqueda",emits:["buscarPor"],setup(c,{emit:a}){const e=N1(""),r=a,i=()=>{r("buscarPor",e.value)};return(s,n)=>{const l=E2("font-awesome-icon");return e1(),t1("div",Zv,[Y2(G("input",{type:"text",size:"40",placeholder:"Busca por autor, título, género, ISBN","onUpdate:modelValue":n[0]||(n[0]=f=>e.value=f)},null,512),[[w8,e.value]]),c1(l,{onClick:i,class:"botonBuscar",icon:"fa-solid fa-magnifying-glass"})])}}},Yv=B1(Kv,[["__scopeId","data-v-1b2a8044"]]),Xv=c=>(D3("data-v-4762b666"),c=c(),q3(),c),Qv={class:"contenedorHeaderBiblioteca"},Jv=Xv(()=>G("img",{src:jv,class:"imagenLogo"},null,-1)),ch={__name:"HeaderBiblioteca",emits:"emitBusqueda",setup(c,{emit:a}){const e=a,r=i=>{e("emitBusqueda",i),console.log("Soy header y mando: "+i)};return(i,s)=>{const n=E2("font-awesome-icon");return e1(),t1("div",Qv,[Jv,c1(Yv,{onBuscarPor:r}),c1(n,{class:"iconoCuenta",icon:"fa-solid fa-user-gear"})])}}},ah=B1(ch,[["__scopeId","data-v-4762b666"]]),eh={class:"cabeceraLibros"},rh={class:"containerLibros"},ih={__name:"ListaLibros",setup(c){const a=N1({tituloLibro:"",coverDatos:""}),e=N1("fantasía"),r=N1([]),i=l=>"https://covers.openlibrary.org/b/id/"+l+"-M.jpg";async function s(l){try{const t=await(await fetch("https://openlibrary.org/subjects/"+l+".json")).json(),o=t.works.length;for(let z=0;z<o;z++){const h=N1({tituloLibro:"",coverDatos:""});h.value.tituloLibro=t.works[z].title,h.value.coverDatos=i(t.works[z].cover_id),r.value.push(h)}}catch(f){a.value.tituloLibro="Error en la API"+f}}x8(()=>{s("magic")});const n=l=>{if(l.includes("love",0)||l.includes("mistery",0)){for(;r.value.length>0;)r.value.pop();e.value=l,s(l)}};return(l,f)=>{const t=E2("font-awesome-icon");return e1(),t1(k1,null,[c1(ah,{onEmitBusqueda:n}),G("div",eh,[G("h1",null,[e.value=="fantasía"?(e1(),M3(t,{key:0,icon:"fa-solid fa-dice-d20"})):C3("",!0),A3(" Genero: "+h3(e.value)+" ",1),e.value=="fantasía"?(e1(),M3(t,{key:1,icon:"fa-solid fa-dragon"})):C3("",!0)])]),G("div",rh,[(e1(!0),t1(k1,null,X7(r.value,(o,z)=>(e1(),M3(Wv,{key:z,libro:o,index:z},null,8,["libro","index"]))),128))])],64)}}},sh=B1(ih,[["__scopeId","data-v-2b9bf008"]]),nh=[{path:"/listacompra",name:"ListaCompra",component:Dv},{path:"/biblioteca",name:"PruebaApi",component:sh}],Z6=cv({history:wz(),routes:nh}),lh={class:"ulContenedor"},fh={class:"navegacion"},oh={class:"navegacion"},th={__name:"NavBar",setup(c){return(a,e)=>{const r=E2("font-awesome-icon");return e1(),t1("ul",lh,[G("li",fh,[G("button",{onClick:e[0]||(e[0]=i=>u2(Z6).push("/biblioteca")),style:{margin:"10px"}},[A3(" Biblioteca "),c1(r,{icon:"fa-solid fa-book"})])]),G("li",oh,[G("button",{onClick:e[1]||(e[1]=i=>u2(Z6).push("/listacompra")),style:{margin:"10px"}},[A3(" Lista de la compra "),c1(r,{icon:"cart-shopping"})])])])}}},mh=B1(th,[["__scopeId","data-v-5ec0be44"]]),zh={class:"contenedorGenerico"},vh={class:"contenedorNav"},hh={class:"contenedorCompra"},Hh={__name:"App",setup(c){return(a,e)=>{const r=E2("router-view");return e1(),t1("div",zh,[G("div",vh,[c1(mh)]),G("div",hh,[c1(r)])])}}},uh=B1(Hh,[["__scopeId","data-v-8379777d"]]);function $5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function k(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?$5(Object(e),!0).forEach(function(r){z1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):$5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function w4(c){"@babel/helpers - typeof";return w4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},w4(c)}function Vh(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function U5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function ph(c,a,e){return a&&U5(c.prototype,a),e&&U5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function z1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function P8(c,a){return Ch(c)||Lh(c,a)||b9(c,a)||xh()}function U3(c){return Mh(c)||dh(c)||b9(c)||gh()}function Mh(c){if(Array.isArray(c))return K6(c)}function Ch(c){if(Array.isArray(c))return c}function dh(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Lh(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,n,l;try{for(e=e.call(c);!(i=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));i=!0);}catch(f){s=!0,l=f}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw l}}return r}}function b9(c,a){if(c){if(typeof c=="string")return K6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return K6(c,a)}}function K6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function gh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I5=function(){},T8={},N9={},S9=null,y9={mark:I5,measure:I5};try{typeof window<"u"&&(T8=window),typeof document<"u"&&(N9=document),typeof MutationObserver<"u"&&(S9=MutationObserver),typeof performance<"u"&&(y9=performance)}catch{}var bh=T8.navigator||{},G5=bh.userAgent,W5=G5===void 0?"":G5,C2=T8,n1=N9,j5=S9,i4=y9;C2.document;var s2=!!n1.documentElement&&!!n1.head&&typeof n1.addEventListener=="function"&&typeof n1.createElement=="function",w9=~W5.indexOf("MSIE")||~W5.indexOf("Trident/"),s4,n4,l4,f4,o4,a2="___FONT_AWESOME___",Y6=16,A9="fa",k9="svg-inline--fa",F2="data-fa-i2svg",X6="data-fa-pseudo-element",Nh="data-fa-pseudo-element-pending",F8="data-prefix",B8="data-icon",Z5="fontawesome-i2svg",Sh="async",yh=["HTML","HEAD","STYLE","SCRIPT"],P9=function(){try{return!0}catch{return!1}}(),s1="classic",o1="sharp",R8=[s1,o1];function I3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[s1]}})}var T3=I3((s4={},z1(s4,s1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),z1(s4,o1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),s4)),F3=I3((n4={},z1(n4,s1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),z1(n4,o1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),n4)),B3=I3((l4={},z1(l4,s1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),z1(l4,o1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),l4)),wh=I3((f4={},z1(f4,s1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),z1(f4,o1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),f4)),Ah=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,T9="fa-layers-text",kh=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ph=I3((o4={},z1(o4,s1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),z1(o4,o1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),o4)),F9=[1,2,3,4,5,6,7,8,9,10],Th=F9.concat([11,12,13,14,15,16,17,18,19,20]),Fh=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],w2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},R3=new Set;Object.keys(F3[s1]).map(R3.add.bind(R3));Object.keys(F3[o1]).map(R3.add.bind(R3));var Bh=[].concat(R8,U3(R3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",w2.GROUP,w2.SWAP_OPACITY,w2.PRIMARY,w2.SECONDARY]).concat(F9.map(function(c){return"".concat(c,"x")})).concat(Th.map(function(c){return"w-".concat(c)})),g3=C2.FontAwesomeConfig||{};function Rh(c){var a=n1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function _h(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(n1&&typeof n1.querySelector=="function"){var Eh=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Eh.forEach(function(c){var a=P8(c,2),e=a[0],r=a[1],i=_h(Rh(e));i!=null&&(g3[r]=i)})}var B9={styleDefault:"solid",familyDefault:"classic",cssPrefix:A9,replacementClass:k9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};g3.familyPrefix&&(g3.cssPrefix=g3.familyPrefix);var r3=k(k({},B9),g3);r3.autoReplaceSvg||(r3.observeMutations=!1);var F={};Object.keys(B9).forEach(function(c){Object.defineProperty(F,c,{enumerable:!0,set:function(e){r3[c]=e,x3.forEach(function(r){return r(F)})},get:function(){return r3[c]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(a){r3.cssPrefix=a,x3.forEach(function(e){return e(F)})},get:function(){return r3.cssPrefix}});C2.FontAwesomeConfig=F;var x3=[];function Dh(c){return x3.push(c),function(){x3.splice(x3.indexOf(c),1)}}var t2=Y6,Z1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qh(c){if(!(!c||!s2)){var a=n1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=n1.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}return n1.head.insertBefore(a,r),c}}var Oh="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _3(){for(var c=12,a="";c-- >0;)a+=Oh[Math.random()*62|0];return a}function s3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function _8(c){return c.classList?s3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function R9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $h(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(R9(c[e]),'" ')},"").trim()}function Y4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function E8(c){return c.size!==Z1.size||c.x!==Z1.x||c.y!==Z1.y||c.rotate!==Z1.rotate||c.flipX||c.flipY}function Uh(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(s," ").concat(n," ").concat(l)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:f,path:t}}function Ih(c){var a=c.transform,e=c.width,r=e===void 0?Y6:e,i=c.height,s=i===void 0?Y6:i,n=c.startCentered,l=n===void 0?!1:n,f="";return l&&w9?f+="translate(".concat(a.x/t2-r/2,"em, ").concat(a.y/t2-s/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/t2,"em), calc(-50% + ").concat(a.y/t2,"em)) "):f+="translate(".concat(a.x/t2,"em, ").concat(a.y/t2,"em) "),f+="scale(".concat(a.size/t2*(a.flipX?-1:1),", ").concat(a.size/t2*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var Gh=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _9(){var c=A9,a=k9,e=F.cssPrefix,r=F.replacementClass,i=Gh;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(l,".".concat(r))}return i}var K5=!1;function y6(){F.autoAddCss&&!K5&&(qh(_9()),K5=!0)}var Wh={mixout:function(){return{dom:{css:_9,insertCss:y6}}},hooks:function(){return{beforeDOMElementCreation:function(){y6()},beforeI2svg:function(){y6()}}}},e2=C2||{};e2[a2]||(e2[a2]={});e2[a2].styles||(e2[a2].styles={});e2[a2].hooks||(e2[a2].hooks={});e2[a2].shims||(e2[a2].shims=[]);var D1=e2[a2],E9=[],jh=function c(){n1.removeEventListener("DOMContentLoaded",c),A4=1,E9.map(function(a){return a()})},A4=!1;s2&&(A4=(n1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(n1.readyState),A4||n1.addEventListener("DOMContentLoaded",jh));function Zh(c){s2&&(A4?setTimeout(c,0):E9.push(c))}function G3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?R9(c):"<".concat(a," ").concat($h(r),">").concat(s.map(G3).join(""),"</").concat(a,">")}function Y5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var Kh=function(a,e){return function(r,i,s,n){return a.call(e,r,i,s,n)}},w6=function(a,e,r,i){var s=Object.keys(a),n=s.length,l=i!==void 0?Kh(e,i):e,f,t,o;for(r===void 0?(f=1,o=a[s[0]]):(f=0,o=r);f<n;f++)t=s[f],o=l(o,a[t],t,a);return o};function Yh(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function Q6(c){var a=Yh(c);return a.length===1?a[0].toString(16):null}function Xh(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function X5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function J6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=X5(a);typeof D1.hooks.addPack=="function"&&!i?D1.hooks.addPack(c,X5(a)):D1.styles[c]=k(k({},D1.styles[c]||{}),s),c==="fas"&&J6("fa",a)}var t4,m4,z4,I2=D1.styles,Qh=D1.shims,Jh=(t4={},z1(t4,s1,Object.values(B3[s1])),z1(t4,o1,Object.values(B3[o1])),t4),D8=null,D9={},q9={},O9={},$9={},U9={},cH=(m4={},z1(m4,s1,Object.keys(T3[s1])),z1(m4,o1,Object.keys(T3[o1])),m4);function aH(c){return~Bh.indexOf(c)}function eH(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!aH(i)?i:null}var I9=function(){var a=function(s){return w6(I2,function(n,l,f){return n[f]=w6(l,s,{}),n},{})};D9=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var l=s[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){i[f.toString(16)]=n})}return i}),q9=a(function(i,s,n){if(i[n]=n,s[2]){var l=s[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){i[f]=n})}return i}),U9=a(function(i,s,n){var l=s[2];return i[n]=n,l.forEach(function(f){i[f]=n}),i});var e="far"in I2||F.autoFetchSvg,r=w6(Qh,function(i,s){var n=s[0],l=s[1],f=s[2];return l==="far"&&!e&&(l="fas"),typeof n=="string"&&(i.names[n]={prefix:l,iconName:f}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:l,iconName:f}),i},{names:{},unicodes:{}});O9=r.names,$9=r.unicodes,D8=X4(F.styleDefault,{family:F.familyDefault})};Dh(function(c){D8=X4(c.styleDefault,{family:F.familyDefault})});I9();function q8(c,a){return(D9[c]||{})[a]}function rH(c,a){return(q9[c]||{})[a]}function A2(c,a){return(U9[c]||{})[a]}function G9(c){return O9[c]||{prefix:null,iconName:null}}function iH(c){var a=$9[c],e=q8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function d2(){return D8}var O8=function(){return{prefix:null,iconName:null,rest:[]}};function X4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?s1:e,i=T3[r][c],s=F3[r][c]||F3[r][i],n=c in D1.styles?c:null;return s||n||null}var Q5=(z4={},z1(z4,s1,Object.keys(B3[s1])),z1(z4,o1,Object.keys(B3[o1])),z4);function Q4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},z1(a,s1,"".concat(F.cssPrefix,"-").concat(s1)),z1(a,o1,"".concat(F.cssPrefix,"-").concat(o1)),a),n=null,l=s1;(c.includes(s[s1])||c.some(function(t){return Q5[s1].includes(t)}))&&(l=s1),(c.includes(s[o1])||c.some(function(t){return Q5[o1].includes(t)}))&&(l=o1);var f=c.reduce(function(t,o){var z=eH(F.cssPrefix,o);if(I2[o]?(o=Jh[l].includes(o)?wh[l][o]:o,n=o,t.prefix=o):cH[l].indexOf(o)>-1?(n=o,t.prefix=X4(o,{family:l})):z?t.iconName=z:o!==F.replacementClass&&o!==s[s1]&&o!==s[o1]&&t.rest.push(o),!i&&t.prefix&&t.iconName){var h=n==="fa"?G9(t.iconName):{},u=A2(t.prefix,t.iconName);h.prefix&&(n=null),t.iconName=h.iconName||u||t.iconName,t.prefix=h.prefix||t.prefix,t.prefix==="far"&&!I2.far&&I2.fas&&!F.autoFetchSvg&&(t.prefix="fas")}return t},O8());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===o1&&(I2.fass||F.autoFetchSvg)&&(f.prefix="fass",f.iconName=A2(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=d2()||"fas"),f}var sH=function(){function c(){Vh(this,c),this.definitions={}}return ph(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){e.definitions[l]=k(k({},e.definitions[l]||{}),n[l]),J6(l,n[l]);var f=B3[s1][l];f&&J6(f,n[l]),I9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var n=i[s],l=n.prefix,f=n.iconName,t=n.icon,o=t[2];e[l]||(e[l]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[l][z]=t)}),e[l][f]=t}),e}}]),c}(),J5=[],G2={},Q2={},nH=Object.keys(Q2);function lH(c,a){var e=a.mixoutsTo;return J5=c,G2={},Object.keys(Q2).forEach(function(r){nH.indexOf(r)===-1&&delete Q2[r]}),J5.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(e[n]=i[n]),w4(i[n])==="object"&&Object.keys(i[n]).forEach(function(l){e[n]||(e[n]={}),e[n][l]=i[n][l]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(n){G2[n]||(G2[n]=[]),G2[n].push(s[n])})}r.provides&&r.provides(Q2)}),e}function c8(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=G2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function B2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=G2[c]||[];i.forEach(function(s){s.apply(null,e)})}function r2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Q2[c]?Q2[c].apply(null,a):void 0}function a8(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||d2();if(a)return a=A2(e,a)||a,Y5(W9.definitions,e,a)||Y5(D1.styles,e,a)}var W9=new sH,fH=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,B2("noAuto")},oH={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return s2?(B2("beforeI2svg",a),r2("pseudoElements2svg",a),r2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Zh(function(){mH({autoReplaceSvgRoot:e}),B2("watch",a)})}},tH={icon:function(a){if(a===null)return null;if(w4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:A2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=X4(a[0]);return{prefix:r,iconName:A2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(F.cssPrefix,"-"))>-1||a.match(Ah))){var i=Q4(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||d2(),iconName:A2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=d2();return{prefix:s,iconName:A2(s,a)||a}}}},P1={noAuto:fH,config:F,dom:oH,parse:tH,library:W9,findIconDefinition:a8,toHtml:G3},mH=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?n1:e;(Object.keys(D1.styles).length>0||F.autoFetchSvg)&&s2&&F.autoReplaceSvg&&P1.dom.i2svg({node:r})};function J4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return G3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(s2){var r=n1.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function zH(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(E8(n)&&e.found&&!r.found){var l=e.width,f=e.height,t={x:l/f/2,y:.5};i.style=Y4(k(k({},s),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function vH(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(F.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},i),{},{id:n}),children:r}]}]}function $8(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,n=c.transform,l=c.symbol,f=c.title,t=c.maskId,o=c.titleId,z=c.extra,h=c.watchable,u=h===void 0?!1:h,b=r.found?r:e,S=b.width,R=b.height,M=i==="fak",d=[F.replacementClass,s?"".concat(F.cssPrefix,"-").concat(s):""].filter(function(p1){return z.classes.indexOf(p1)===-1}).filter(function(p1){return p1!==""||!!p1}).concat(z.classes).join(" "),A={children:[],attributes:k(k({},z.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(R)})},D=M&&!~z.classes.indexOf("fa-fw")?{width:"".concat(S/R*16*.0625,"em")}:{};u&&(A.attributes[F2]=""),f&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(o||_3())},children:[f]}),delete A.attributes.title);var I=k(k({},A),{},{prefix:i,iconName:s,main:e,mask:r,maskId:t,transform:n,symbol:l,styles:k(k({},D),z.styles)}),E=r.found&&e.found?r2("generateAbstractMask",I)||{children:[],attributes:{}}:r2("generateAbstractIcon",I)||{children:[],attributes:{}},a1=E.children,V1=E.attributes;return I.children=a1,I.attributes=V1,l?vH(I):zH(I)}function c7(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,n=c.extra,l=c.watchable,f=l===void 0?!1:l,t=k(k(k({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});f&&(t[F2]="");var o=k({},n.styles);E8(i)&&(o.transform=Ih({transform:i,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var z=Y4(o);z.length>0&&(t.style=z);var h=[];return h.push({tag:"span",attributes:t,children:[a]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function hH(c){var a=c.content,e=c.title,r=c.extra,i=k(k(k({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=Y4(r.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var A6=D1.styles;function e8(c){var a=c[0],e=c[1],r=c.slice(4),i=P8(r,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(w2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(w2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(w2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:n}}var HH={found:!1,width:512,height:512};function uH(c,a){!P9&&!F.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function r8(c,a){var e=a;return a==="fa"&&F.styleDefault!==null&&(a=d2()),new Promise(function(r,i){if(r2("missingIconAbstract"),e==="fa"){var s=G9(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&A6[a]&&A6[a][c]){var n=A6[a][c];return r(e8(n))}uH(c,a),r(k(k({},HH),{},{icon:F.showMissingIcons&&c?r2("missingIconAbstract")||{}:{}}))})}var a7=function(){},i8=F.measurePerformance&&i4&&i4.mark&&i4.measure?i4:{mark:a7,measure:a7},z3='FA "6.5.1"',VH=function(a){return i8.mark("".concat(z3," ").concat(a," begins")),function(){return j9(a)}},j9=function(a){i8.mark("".concat(z3," ").concat(a," ends")),i8.measure("".concat(z3," ").concat(a),"".concat(z3," ").concat(a," begins"),"".concat(z3," ").concat(a," ends"))},U8={begin:VH,end:j9},M4=function(){};function e7(c){var a=c.getAttribute?c.getAttribute(F2):null;return typeof a=="string"}function pH(c){var a=c.getAttribute?c.getAttribute(F8):null,e=c.getAttribute?c.getAttribute(B8):null;return a&&e}function MH(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(F.replacementClass)}function CH(){if(F.autoReplaceSvg===!0)return C4.replace;var c=C4[F.autoReplaceSvg];return c||C4.replace}function dH(c){return n1.createElementNS("http://www.w3.org/2000/svg",c)}function LH(c){return n1.createElement(c)}function Z9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?dH:LH:e;if(typeof c=="string")return n1.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(Z9(n,{ceFn:r}))}),i}function gH(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var C4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(Z9(i),e)}),e.getAttribute(F2)===null&&F.keepOriginalSource){var r=n1.createComment(gH(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~_8(e).indexOf(F.replacementClass))return C4.replace(a);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(l,f){return f===F.replacementClass||f.match(i)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var n=r.map(function(l){return G3(l)}).join(`
`);e.setAttribute(F2,""),e.innerHTML=n}};function r7(c){c()}function K9(c,a){var e=typeof a=="function"?a:M4;if(c.length===0)e();else{var r=r7;F.mutateApproach===Sh&&(r=C2.requestAnimationFrame||r7),r(function(){var i=CH(),s=U8.begin("mutate");c.map(i),s(),e()})}}var I8=!1;function Y9(){I8=!0}function s8(){I8=!1}var k4=null;function i7(c){if(j5&&F.observeMutations){var a=c.treeCallback,e=a===void 0?M4:a,r=c.nodeCallback,i=r===void 0?M4:r,s=c.pseudoElementsCallback,n=s===void 0?M4:s,l=c.observeMutationsRoot,f=l===void 0?n1:l;k4=new j5(function(t){if(!I8){var o=d2();s3(t).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!e7(z.addedNodes[0])&&(F.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&F.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&e7(z.target)&&~Fh.indexOf(z.attributeName))if(z.attributeName==="class"&&pH(z.target)){var h=Q4(_8(z.target)),u=h.prefix,b=h.iconName;z.target.setAttribute(F8,u||o),b&&z.target.setAttribute(B8,b)}else MH(z.target)&&i(z.target)})}}),s2&&k4.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xH(){k4&&k4.disconnect()}function bH(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),n=s[0],l=s.slice(1);return n&&l.length>0&&(r[n]=l.join(":").trim()),r},{})),e}function NH(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=Q4(_8(c));return i.prefix||(i.prefix=d2()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=rH(i.prefix,c.innerText)||q8(i.prefix,Q6(c.innerText))),!i.iconName&&F.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function SH(c){var a=s3(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return F.autoA11y&&(e?a["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||_3()):(a["aria-hidden"]="true",a.focusable="false")),a}function yH(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Z1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function s7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=NH(c),r=e.iconName,i=e.prefix,s=e.rest,n=SH(c),l=c8("parseNodeAttributes",{},c),f=a.styleParser?bH(c):[];return k({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:Z1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:n}},l)}var wH=D1.styles;function X9(c){var a=F.autoReplaceSvg==="nest"?s7(c,{styleParser:!1}):s7(c);return~a.extra.classes.indexOf(T9)?r2("generateLayersText",c,a):r2("generateSvgReplacementMutation",c,a)}var L2=new Set;R8.map(function(c){L2.add("fa-".concat(c))});Object.keys(T3[s1]).map(L2.add.bind(L2));Object.keys(T3[o1]).map(L2.add.bind(L2));L2=U3(L2);function n7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!s2)return Promise.resolve();var e=n1.documentElement.classList,r=function(z){return e.add("".concat(Z5,"-").concat(z))},i=function(z){return e.remove("".concat(Z5,"-").concat(z))},s=F.autoFetchSvg?L2:R8.map(function(o){return"fa-".concat(o)}).concat(Object.keys(wH));s.includes("fa")||s.push("fa");var n=[".".concat(T9,":not([").concat(F2,"])")].concat(s.map(function(o){return".".concat(o,":not([").concat(F2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=s3(c.querySelectorAll(n))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var f=U8.begin("onTree"),t=l.reduce(function(o,z){try{var h=X9(z);h&&o.push(h)}catch(u){P9||u.name==="MissingIcon"&&console.error(u)}return o},[]);return new Promise(function(o,z){Promise.all(t).then(function(h){K9(h,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),f(),o()})}).catch(function(h){f(),z(h)})})}function AH(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;X9(c).then(function(e){e&&K9([e],a)})}function kH(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:a8(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:a8(i||{})),c(r,k(k({},e),{},{mask:i}))}}var PH=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?Z1:r,s=e.symbol,n=s===void 0?!1:s,l=e.mask,f=l===void 0?null:l,t=e.maskId,o=t===void 0?null:t,z=e.title,h=z===void 0?null:z,u=e.titleId,b=u===void 0?null:u,S=e.classes,R=S===void 0?[]:S,M=e.attributes,d=M===void 0?{}:M,A=e.styles,D=A===void 0?{}:A;if(a){var I=a.prefix,E=a.iconName,a1=a.icon;return J4(k({type:"icon"},a),function(){return B2("beforeDOMElementCreation",{iconDefinition:a,params:e}),F.autoA11y&&(h?d["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(b||_3()):(d["aria-hidden"]="true",d.focusable="false")),$8({icons:{main:e8(a1),mask:f?e8(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:E,transform:k(k({},Z1),i),symbol:n,title:h,maskId:o,titleId:b,extra:{attributes:d,styles:D,classes:R}})})}},TH={mixout:function(){return{icon:kH(PH)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=n7,e.nodeCallback=AH,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?n1:r,s=e.callback,n=s===void 0?function(){}:s;return n7(i,n)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,n=r.titleId,l=r.prefix,f=r.transform,t=r.symbol,o=r.mask,z=r.maskId,h=r.extra;return new Promise(function(u,b){Promise.all([r8(i,l),o.iconName?r8(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var R=P8(S,2),M=R[0],d=R[1];u([e,$8({icons:{main:M,mask:d},prefix:l,iconName:i,transform:f,symbol:t,maskId:z,title:s,titleId:n,extra:h,watchable:!0})])}).catch(b)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,n=e.transform,l=e.styles,f=Y4(l);f.length>0&&(i.style=f);var t;return E8(n)&&(t=r2("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),r.push(t||s.icon),{children:r,attributes:i}}}},FH={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return J4({type:"layer"},function(){B2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(l){Array.isArray(l)?l.map(function(f){n=n.concat(f.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(U3(s)).join(" ")},children:n}]})}}}},BH={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,n=r.classes,l=n===void 0?[]:n,f=r.attributes,t=f===void 0?{}:f,o=r.styles,z=o===void 0?{}:o;return J4({type:"counter",content:e},function(){return B2("beforeDOMElementCreation",{content:e,params:r}),hH({content:e.toString(),title:s,extra:{attributes:t,styles:z,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(U3(l))}})})}}}},RH={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Z1:i,n=r.title,l=n===void 0?null:n,f=r.classes,t=f===void 0?[]:f,o=r.attributes,z=o===void 0?{}:o,h=r.styles,u=h===void 0?{}:h;return J4({type:"text",content:e},function(){return B2("beforeDOMElementCreation",{content:e,params:r}),c7({content:e,transform:k(k({},Z1),s),title:l,extra:{attributes:z,styles:u,classes:["".concat(F.cssPrefix,"-layers-text")].concat(U3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,n=r.extra,l=null,f=null;if(w9){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();l=o.width/t,f=o.height/t}return F.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,c7({content:e.innerHTML,width:l,height:f,transform:s,title:i,extra:n,watchable:!0})])}}},_H=new RegExp('"',"ug"),l7=[1105920,1112319];function EH(c){var a=c.replace(_H,""),e=Xh(a,0),r=e>=l7[0]&&e<=l7[1],i=a.length===2?a[0]===a[1]:!1;return{value:Q6(i?a[0]:a),isSecondary:r||i}}function f7(c,a){var e="".concat(Nh).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=s3(c.children),n=s.filter(function(a1){return a1.getAttribute(X6)===a})[0],l=C2.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match(kh),t=l.getPropertyValue("font-weight"),o=l.getPropertyValue("content");if(n&&!f)return c.removeChild(n),r();if(f&&o!=="none"&&o!==""){var z=l.getPropertyValue("content"),h=~["Sharp"].indexOf(f[2])?o1:s1,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?F3[h][f[2].toLowerCase()]:Ph[h][t],b=EH(z),S=b.value,R=b.isSecondary,M=f[0].startsWith("FontAwesome"),d=q8(u,S),A=d;if(M){var D=iH(S);D.iconName&&D.prefix&&(d=D.iconName,u=D.prefix)}if(d&&!R&&(!n||n.getAttribute(F8)!==u||n.getAttribute(B8)!==A)){c.setAttribute(e,A),n&&c.removeChild(n);var I=yH(),E=I.extra;E.attributes[X6]=a,r8(d,u).then(function(a1){var V1=$8(k(k({},I),{},{icons:{main:a1,mask:O8()},prefix:u,iconName:A,extra:E,watchable:!0})),p1=n1.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(p1,c.firstChild):c.appendChild(p1),p1.outerHTML=V1.map(function(T1){return G3(T1)}).join(`