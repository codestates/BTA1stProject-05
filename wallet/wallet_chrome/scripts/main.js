/* axios v0.19.0 | (c) 2019 by Matt Zabriskie */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){var t=new i(e),n=s(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(2),s=n(3),i=n(5),a=n(22),u=n(11),c=r(u);c.Axios=i,c.create=function(e){return r(a(c.defaults,e))},c.Cancel=n(23),c.CancelToken=n(24),c.isCancel=n(10),c.all=function(e){return Promise.all(e)},c.spread=n(25),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";function r(e){return"[object Array]"===j.call(e)}function o(e){return"[object ArrayBuffer]"===j.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function f(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===j.call(e)}function d(e){return"[object File]"===j.call(e)}function l(e){return"[object Blob]"===j.call(e)}function h(e){return"[object Function]"===j.call(e)}function m(e){return f(e)&&h(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function v(e,t){if(null!==e&&"undefined"!=typeof e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function w(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)v(arguments[n],e);return t}function b(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=b(t[n],e):"object"==typeof e?t[n]=b({},e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)v(arguments[n],e);return t}function E(e,t,n){return v(t,function(t,r){n&&"function"==typeof t?e[r]=S(t,n):e[r]=t}),e}var S=n(3),R=n(4),j=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:R,isFormData:s,isArrayBufferView:i,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:p,isFile:d,isBlob:l,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:x,forEach:v,merge:w,deepMerge:b,extend:E,trim:g}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t){/*!
  * Determine if an object is a Buffer
  *
  * @author   Feross Aboukhadijeh <https://feross.org>
  * @license  MIT
  */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(2),s=n(6),i=n(7),a=n(8),u=n(22);r.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=u(this.defaults,e),e.method=e.method?e.method.toLowerCase():"get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},r.prototype.getUri=function(e){return e=u(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(o.isURLSearchParams(t))s=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),s=i.join("&")}if(s){var a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(2),s=n(9),i=n(10),a=n(11),u=n(20),c=n(21);e.exports=function(e){r(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||a.adapter;return t(e).then(function(t){return r(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e,t){!s.isUndefined(e)&&s.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)?e=n(13):"undefined"!=typeof XMLHttpRequest&&(e=n(13)),e}var s=n(2),i=n(12),a={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:o(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),s.isFormData(e)||s.isArrayBuffer(e)||s.isBuffer(e)||s.isStream(e)||s.isFile(e)||s.isBlob(e)?e:s.isArrayBufferView(e)?e.buffer:s.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):s.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},s.forEach(["delete","get","head"],function(e){u.headers[e]={}}),s.forEach(["post","put","patch"],function(e){u.headers[e]=s.merge(a)}),e.exports=u},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(2),o=n(14),s=n(6),i=n(17),a=n(18),u=n(15);e.exports=function(e){return new Promise(function(t,c){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",h=e.auth.password||"";p.Authorization="Basic "+btoa(l+":"+h)}if(d.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,s={data:r,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,c,s),d=null}},d.onabort=function(){d&&(c(u("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){c(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var m=n(19),y=(e.withCredentials||a(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){"undefined"==typeof f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),c(e),d=null)}),void 0===f&&(f=null),d.send(f)})}},function(e,t,n){"use strict";var r=n(15);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";var r=n(16);e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},function(e,t){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(2),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;"set-cookie"===t?i[t]=(i[t]?i[t]:[]).concat([n]):i[t]=i[t]?i[t]+", "+n:n}}),i):i}},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],function(e){"undefined"!=typeof t[e]&&(n[e]=t[e])}),r.forEach(["headers","auth","proxy"],function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!=typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!=typeof e[o]&&(n[o]=e[o])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){"undefined"!=typeof t[r]?n[r]=t[r]:"undefined"!=typeof e[r]&&(n[r]=e[r])}),n}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(23);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}])});
//# sourceMappingURL=axios.min.map

const refreshPage = () => {
  window.location.href = "/pages/main.html";
}

const createAccount = async () => {
  let hdNumber = 0; //지갑에 저장된 계정 갯수
  chrome.storage.local.get('account', function(result) {
    if(result.account) {
      hdNumber = result.account.length; //5개 존재하면 새로 생성될 hdpath 는 5번
    } else {
      result.account = [];
    }
    
    try {
      chrome.storage.sync.get('password', function(pwd) {
        chrome.storage.local.get('mnemonic', function(mnemonic) {
          pwd = pwd.password;
          mnemonic = mnemonic.mnemonic;

          //계정 발급
          axios({
            method: 'GET', //통신 방식
            url: `http://localhost:4000/api/newaccount?hdpath=${hdNumber}&pwd=${pwd}&mnemonic=${mnemonic}`, //통신할 페이지
            //url: `http://localhost:4000/api/newaccount?hdpath=${hdNumber}`, //통신할 페이지
            data: {} //인자로 보낼 데이터
          })
          .then(response=>{
            //document.getElementById('account-list').innerText= JSON.stringify(response.data.data);
            
            // 브라우저에 니모닉 저장
            result.account.push(response.data.data);
            chrome.storage.local.set({'account': result.account}, function() {
            });

            // 계정 정보 갱신
            // let accountList = '';
            // for(let i=0;i<result.account.length;i++) {
            //   console.log(result.account[i].addressForONE);
            //   accountList += `${result.account[i].addressForONE}\r\n`;
            // }
            //document.getElementById('account-stored').innerText= accountList;
            alert(`${hdNumber + 1} 번째 계정이 생성되었습니다.\r\n지갑주소: ${response.data.data.addressForONE}`);
            chrome.storage.sync.set({'accountSelected':response.data.data.addressForONE},function() {
              refreshPage();
            });
          })
          .catch(error=>{
            console.log(error)
            alert(error)
          })
        });
      });
    } catch (e) {
      console.log(e);
    }
  });
}

const hideDiv = (id) => {
  document.getElementById(id).style.display = "none";
}
const showDiv = (id) => {
  document.getElementById(id).style.display = "block";
}

//스텝에 따른 화면 분기 세팅
hideDiv("menu");
hideDiv("step-password");
hideDiv("step-private-key");
hideDiv("step-transfer");

/*
 * 버튼에 따른 화면 전개
 */
//메뉴 실행
document.getElementById('button-menu').onclick = async function () {
  showDiv("menu");
}
document.getElementById('menu-close').onclick = async function () {
  hideDiv("menu");
}


//계정생성
document.getElementById('new-account').onclick = async function () {
  createAccount();
}

//잠금
document.getElementById('button-logout').onclick = async function () {
  chrome.storage.sync.set({'password':null});
  window.location.href="/popup.html";
}


//로그인 인증
chrome.storage.sync.get('password', function(result) {
  //로그인 안되어 있다면
  if(!result.password) {
    alert('로그인 해주세요');
  } else {
    //니모닉 존재 확인
    chrome.storage.local.get('mnemonic', function(result) {
      //니모닉이 존재하지 않는다면
      if(!result.mnemonic) {
        alert('니모닉 구문을 생성해 주세요');
      }
    });
  }
});


//계정 정보 추출
const getAccountInfo = async (account) => {
  try{
    //JSON RPC
    //const shardURL = 'https://api.s0.b.hmny.io/';
    // const response = await fetch(shardURL, {
    //   body: JSON.stringify({
    //     "jsonrpc": "2.0",
    //     "id": "1",
    //     "method": "hmyv2_getBalance",
    //     "params": [account]
    //   }),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   method: "POST"
    // });
    // var data = await response.json();
    // console.log(data);
    // alert(JSON.stringify(data));

    chrome.storage.sync.get('currentNetwork', function(myNetwork) {
      myNetwork = myNetwork.currentNetwork;
      if(!myNetwork) {
        myNetwork = 'testnet';
      }
      chrome.storage.sync.get('currentShard', function(myShard) {
        myShard = myShard.currentShard;
        if(!myShard) {
          myShard = 0;
        }
        //밸런스 확인
        axios({
          method: 'GET', //통신 방식
          url: `http://localhost:4000/api/balance?address=${account}&shard=${myShard}&network=${myNetwork}`, //통신할 페이지
          //url: `http://localhost:4000/api/balance?address=${account}`, //통신할 페이지
          data: {} //인자로 보낼 데이터
        })
        .then(resultOfInit => {
          result = Number(resultOfInit.data.data.balance).toLocaleString('ko-KR') + " ONE";
          resultKrw = Number(resultOfInit.data.data.krw).toLocaleString('ko-KR') + " 원";
          document.getElementById('mainBalance').innerText = result;
          document.getElementById('mainKrw').innerText = resultKrw;
          document.getElementById('transfer-balance').innerText = `전송 가능 수량: ${result}`;
        
          //가스비 업데이트
          // let gasPrice = Number(resultOfInit.data.data.gasPrice);
          // let gasLimit = document.getElementById('transfer-gas-limit').value;
          // let fee = Number(gasLimit) * Number(gasPrice) * 1e-9;
          // fee = String(fee).slice(0,9);
          // fee = Number(fee);
          // document.getElementById('transfer-gas-fee').value = fee;
          // document.getElementById('transfer-gas-price').value = gasPrice;
        })
      });
    });
  } catch(e) {
    alert(e);
  }
}

//계정 활동 추출
const getActivityInfo = async (account) => {
  try{
    chrome.storage.sync.get('currentNetwork', function(myNetwork) {
      myNetwork = myNetwork.currentNetwork;
      if(!myNetwork) {
        myNetwork = 'testnet';
      }
      chrome.storage.sync.get('currentShard', function(myShard) {
        myShard = myShard.currentShard;
        if(!myShard) {
          myShard = 0;
        }
        //밸런스 확인
        axios({
          method: 'GET', //통신 방식
          url: `http://localhost:4000/api/activity?address=${account}&shard=${myShard}&network=${myNetwork}`, //통신할 페이지
          data: {} //인자로 보낼 데이터
        })
        .then(result => {
          result = result.data.data;
          // 보내기 or 받기
          // 받은 주소
          // 금액
          // 샤드 0 to 1
          // 시간
          for(let i=0;i<result.length;i++) {
            // 새로운 단락 요소를 생성하고 문서에 있는 바디 요소의 끝에 부인다
            let div = document.createElement("div");
            div.className = "btn btn-light";
            div.id = "activity-instance"
            div.style['margin-top'] = '0.1em';
            div.style['font-size'] = '0.8em';
            div.style['word-wrap'] = 'break-word';
            div.style['text-align'] = 'left';
            div.style.width = "100%";
            
            div.name = result[i].hash;
    
            //클릭 이벤트
            div.addEventListener('click', function(){
              //alert('새창 띄워주야 된다 ' + this.name);
              //window.open(`https://explorer.pops.one/tx/${this.name}`);
              window.open(`http://localhost:3000/transaction/${this.name}`);
            });
            
            //데이터 적재
            let output = '';
            if(result[i].to == result[i].from) {
              output += `<span style="color:red">나에게 전송</span></br>`;
            } else if(result[i].from == account){
              let sliceAddressEnd = result[i].to.slice(-8);
              let sliceAddressStart = result[i].to.slice(0,6);
              let exchanger = sliceAddressStart + "..." + sliceAddressEnd;
              output += `<span style="color:blue">보내기</span> to ${exchanger}</br>`;
            } else if(result[i].to == account){
              let sliceAddressEnd = result[i].from.slice(-8);
              let sliceAddressStart = result[i].from.slice(0,6);
              let exchanger = sliceAddressStart + "..." + sliceAddressEnd;
              output += `<span style="color:blue">받기</span> from ${exchanger}</br>`;
            }
            output += `<b style="font-size:1.2em">${result[i].value} ONE</b></br>`;
            let timestamp = convertTimestamp(result[i].timestamp);
            output += `shard ${myShard} to ${result[i].toShardID}<span style="float:right">${timestamp}</span></br>`;
            
            div.innerHTML = output;
            document.getElementById('activity-list').appendChild(div);
          }
        })
      });
    });
  } catch(e) {
    alert(e);
  }
}

function convertTimestamp(timestamp) {
  let date = new Date(timestamp * 1000);
  let year = date.getFullYear().toString(); //년도 뒤에 두자리
  let month = ("0" + (date.getMonth() + 1)).slice(-2); //월 2자리 (01, 02 ... 12)
  let day = ("0" + date.getDate()).slice(-2); //일 2자리 (01, 02 ... 31)
  let hour = ("0" + date.getHours()).slice(-2); //시 2자리 (00, 01 ... 23)
  let minute = ("0" + date.getMinutes()).slice(-2); //분 2자리 (00, 01 ... 59)
  let second = ("0" + date.getSeconds()).slice(-2); //초 2자리 (00, 01 ... 59)
  let returnDate = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
  return returnDate;
}


/*
* 메인 화면 초기 세팅
*/
chrome.storage.local.get('account', function(result) {
  function firstLogin() {
    //첫 접속이라면 샤드 정보 생성
    chrome.storage.sync.set({'currentShard':0});
    chrome.storage.sync.set({'currentNetwork':'testnet'});
    
    createAccount();
  }
  
  //계정이 존재하지 않는다면 첫 계정 생성
  if(!result.account) {
    firstLogin();
  } else if(result.account.length == 0) {
    firstLogin();
  } else {
    //계정이 존재한다면 각종 정보 초기화

    //계정 정보 초기화
    chrome.storage.sync.get('accountSelected', function(selected) { 
      for(let i=0;i<result.account.length;i++) {
        myFullAddress = result.account[i].addressForONE;

        // 새로운 단락 요소를 생성하고 문서에 있는 바디 요소의 끝에 부인다
        let div = document.createElement("div");
        div.className = "btn btn-light";
        div.id = "my-accounts"
        div.style.width = "100%";
        div.name = myFullAddress;

        //계정 스위칭
        div.addEventListener('click', function(){
          chrome.storage.sync.set({'accountSelected':this.name},function() {
            refreshPage();
          });
        });
        
        //주소값 가공
        let sliceAddressEnd = myFullAddress.slice(-4);
        let sliceAddressStart = myFullAddress.slice(0,6);
        const myAddress = sliceAddressStart + "..." + sliceAddressEnd;
        
        div.innerHTML = myAddress;
        document.getElementById('menu-account-list').appendChild(div);
        
        //선택되어 있는 계정에 마크
        if(selected.accountSelected && selected.accountSelected == myFullAddress) {
          div.innerHTML = '&#10004; ' + myAddress;
        } else {
          div.innerHTML = myAddress;
        }
        document.getElementById('menu-account-list').appendChild(div);
        
        //accountList += `${myFullAddress}\r\n`;
      }
      //document.getElementById('account-stored').innerText= accountList;
    });
    


    //선택된 계정을 화면에 보여주기
    //계정 활동 내역 보여주기
    chrome.storage.sync.get('accountSelected', function(selected) {
      let myAddress;
      if(selected.accountSelected) {
        myAddress = selected.accountSelected;
      } else {
        myAddress = result.account[0].addressForONE;
        chrome.storage.sync.set({'accountSelected':myAddress});
      }
      getAccountInfo(myAddress);
      getActivityInfo(myAddress);
      document.getElementById('mainAddress').innerText= myAddress;
    })
    
    //샤드 정보 확인
    chrome.storage.sync.get('currentShard', function(selected) {
      document.getElementById('shard-select').getElementsByTagName('option')[selected.currentShard].selected = 'selected'
    })

    //네트워크 정보 확인
    chrome.storage.sync.get('currentNetwork', function(selected) {
      let idx = 0;
      if(selected.currentNetwork == 'mainnet') {
        idx = 1;
      }
      document.getElementById('network-select').getElementsByTagName('option')[idx].selected = 'selected'
    })
  }
});


//개인키 확인을 위한 패스워드 입력 창
document.getElementById('export-account').onclick = async function () {
  hideDiv("menu");
  hideDiv("step-main");
  showDiv("step-password");
}


//개인키 확인을 위한 인증
document.getElementById('button-password').onclick = async function () {  
  try {
    let pwd = document.getElementById("pwd-login").value;
    chrome.storage.local.get('password', function(result) {
      let encPwd = result.password;

      if(SHA256(pwd) == encPwd) {
        //만약 사용자의 입력값을 SHA256으로 해싱한 값이 저장되어 있는 값과 같다면
        chrome.storage.local.get('account', function(arrAccount) {
          arrAccount = arrAccount.account;
          for(let i=0;i<arrAccount.length;i++) {
            let encPrivateKey = arrAccount[i].privateKey;
            let publicKey = arrAccount[i].addressForONE;

            //선택되어 있는 주소와 같은 instance인지 확인
            chrome.storage.sync.get('accountSelected', function(targetAddr) {
                targetAddr = targetAddr.accountSelected;
                if(publicKey == targetAddr) {
                  //사용자 암호와, 암호화된 개인키를 서버에 보내서 복호화된 개인키를 추출한다
                  axios({
                    method: 'GET', //통신 방식
                    url: `http://localhost:4000/api/privateKey?encdata=${encPrivateKey}&pwd=${pwd}`, //통신할 페이지
                    data: {} //인자로 보낼 데이터
                  })
                  .then(res => {
                    let decPrivateKey = res.data.data;
                    document.getElementById('privateKey-data').innerText = decPrivateKey;
                    document.getElementById('publicKey-data').innerText = publicKey;
                    hideDiv('step-password');
                    showDiv('step-private-key');
                  })
                }
            });
          }
        });
      } else {
        alert('패스워드가 일치하지 않습니다');
      }
    })
  } catch(e) {
    alert(e);
  }
}

//샤드 변경
document.getElementById('shard-select').onchange = async function () {
  //let selectValue = this.options[this.selectedIndex].value;  
  let selectValue = this.selectedIndex;
  chrome.storage.sync.set({'currentShard':selectValue}, function(result) {
    //밸런스 갱신
    refreshPage();
  });
}

//네트워크 변경
document.getElementById('network-select').onchange = async function () {
  let selectValue = this.options[this.selectedIndex].value;  
  chrome.storage.sync.set({'currentNetwork':selectValue}, function(result) {
    //밸런스 갱신
    refreshPage();
  });
}

//전송을 위한 입력 창
document.getElementById('button-transfer').onclick = async function () {
  hideDiv("menu");
  hideDiv("step-main");
  showDiv("step-transfer");
}


//전송 화면 '취소' 버튼
document.getElementById('button-transfer-cancel').onclick = async function () {
  refreshPage();
}


//gas price 변경 시
document.getElementById('transfer-gas-price').onkeyup = async function () {
  if((typeof Number(this.value)) == 'number') {
    //숫자라면
    let gasLimit = document.getElementById('transfer-gas-limit').value;
    if((typeof Number(gasLimit)) == 'number') {
      //0.000025 
      let fee = Number(this.value) * Number(gasLimit) * 1e-9;
      fee = String(fee).slice(0,9);
      fee = Number(fee);
      document.getElementById('transfer-gas-fee').value = fee;
    }
  }
}


//gas limit 변경 시
document.getElementById('transfer-gas-limit').onkeyup = async function () {
  if((typeof Number(this.value)) == 'number') {
    //숫자라면
    let gasPrice = document.getElementById('transfer-gas-price').value;
    if((typeof Number(gasPrice)) == 'number') {
      //0.000025 
      let fee = Number(this.value) * Number(gasPrice) * 1e-9;
      fee = String(fee).slice(0,9);
      fee = Number(fee);
      document.getElementById('transfer-gas-fee').value = fee;
    }
  }
}

//전송 화면 '전송' 버튼
document.getElementById('button-transfer-commit').onclick = async function () {
  let data = {};
  data.addressTo = document.getElementById('transfer-to').value;
  data.toShard = document.getElementById('transfer-shard').value;
  data.amount = document.getElementById('transfer-amount').value;
  data.gasPrice = document.getElementById('transfer-gas-price').value;
  data.gasLimit = document.getElementById('transfer-gas-limit').value;
  data.gasFee = document.getElementById('transfer-gas-fee').value;
  
  try {
    chrome.storage.sync.get('currentShard', function(shard) {
      data.shard = shard.currentShard;
      chrome.storage.sync.get('currentNetwork', function(network) {
        data.network = network.currentNetwork;
        chrome.storage.sync.get('password', function(result) {
          let pwd = result.password;
          data.pwd = pwd;

          chrome.storage.local.get('account', function(arrAccount) {
            arrAccount = arrAccount.account;
            //암호화된 개인키를 찾는다
            for(let i=0;i<arrAccount.length;i++) {
              let encPrivateKey = arrAccount[i].privateKey;
              let publicKey = arrAccount[i].addressForONE;

              //선택되어 있는 주소와 같은 instance인지 확인
              chrome.storage.sync.get('accountSelected', function(targetAddr) {
                targetAddr = targetAddr.accountSelected;
                data.address = targetAddr;
                if(publicKey == targetAddr) {
                  data.encPrivateKey = encPrivateKey;
                  axios({
                    method: 'GET', //통신 방식
                    url: `http://localhost:4000/api/transfer?data=${JSON.stringify(data)}`, //통신할 페이지
                    data: {} //인자로 보낼 데이터
                  })
                  .then(res => {
                    let output = res.data.data;
                    alert(output);
                    refreshPage();
                  })
                }
              });
            }
          });
        })
      })
    })
  } catch(e) {
    alert(e);
  }
}

//블록탐색기에서 조회 버튼
document.getElementById('explorer-account').onclick = async function () {
  chrome.storage.sync.get('accountSelected', function(result) {
    //window.open(`https://explorer.pops.one/address/${result.accountSelected}`);
    window.open(`http://localhost:3000/dnw/${result.accountSelected}`);          
  });
}


// //저장된 패스워드 확인
// chrome.storage.local.get('password', function(result) {
//   document.getElementById('password-stored').innerText= '저장된 패스워드 ' + result.password;
// });

// //임시 패스워드 확인
// chrome.storage.sync.get('password', function(result) {
//   document.getElementById('password-sync').innerText= '임시 저장 패스워드 ' + result.password;
// });

// //저장된 니모닉 확인
// chrome.storage.local.get('mnemonic', function(result) {
//   document.getElementById('mnemonic-stored').innerText= '저장된 니모닉 ' + result.mnemonic;
// });
