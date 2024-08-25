!function(e,t){"function"==typeof define&&define.amd?define([],t):"undefined"!=typeof exports?t():(t(),e.FileSaver={})}(this,function(){"use strict";function e(e,t,o){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){s(r.response,t,o)},r.onerror=function(){console.error("could not download file")},r.send()}function t(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(o){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(o)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,n=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(n,s,l){var c=r.URL||r.webkitURL,a=document.createElement("a");s=s||n.name||"download",a.download=s,a.rel="noopener","string"==typeof n?(a.href=n,a.origin===location.origin?o(a):t(a.href)?e(n,s,l):o(a,a.target="_blank")):(a.href=c.createObjectURL(n),setTimeout(function(){c.revokeObjectURL(a.href)},4e4),setTimeout(function(){o(a)},0))}:"msSaveOrOpenBlob"in navigator?function(r,n,s){if(n=n||r.name||"download","string"!=typeof r){var l,c;navigator.msSaveOrOpenBlob((l=r,void 0===(c=s)?c={autoBom:!1}:"object"!=typeof c&&(console.warn("Deprecated: Expected third argument to be a object"),c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\uFEFF",l],{type:l.type}):l),n)}else if(t(r))e(r,n,s);else{var a=document.createElement("a");a.href=r,a.target="_blank",setTimeout(function(){o(a)})}}:function(t,o,s,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof t)return e(t,o,s);var c="application/octet-stream"===t.type,a=/constructor/i.test(r.HTMLElement)||r.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||c&&a||n)&&"undefined"!=typeof FileReader){var _=new FileReader;_.onloadend=function(){var e=_.result;e=i?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=e:location=e,l=null},_.readAsDataURL(t)}else{var d=r.URL||r.webkitURL,u=d.createObjectURL(t);l?l.location=u:location.href=u,l=null,setTimeout(function(){d.revokeObjectURL(u)},4e4)}});r.saveAs=s.saveAs=s,"undefined"!=typeof module&&(module.exports=s)}),document.documentElement.setAttribute("data-theme","dark");let project={convertTo:"json",css:`/* Basic CSS */
:root {
  --main-bg-color: #f0f0f0;
  --main-text-color: #333;
  --header-bg-color: #007bff;
  --header-text-color: #fff;
}

/* Global styles */
body {
  font-family: Arial, sans-serif;
  color: var(--main-text-color);
  background-color: var(--main-bg-color);
  margin: 0;
  padding: 0;
}

header {
  background-color: var(--header-bg-color);
  color: var(--header-text-color);
  padding: 1rem;
  text-align: center;
}

main {
  padding: 1rem;
}

h1, h2 {
  margin: 0;
  padding: 0;
}

/* Hero Section */
.hero {
  background: #e9ecef;
  padding: 2rem;
  border-radius: 5px;
}

/* Content Section */
.content {
  margin: 1rem 0;
}

.content p {
  font-size: 1.1rem;
}

/* Footer Section */
.footer {
  background: #343a40;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

/* Pseudo-classes */
a:hover {
  color: #007bff;
}

/* Media Queries */
@media (min-width: 768px) {
  .hero {
    padding: 3rem;
  }
}

@media (min-width: 1024px) {
  header {
    font-size: 1.5rem;
  }

  .content p {
    font-size: 1.2rem;
  }
}

/* Keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 2s ease-in-out;
}

/* Comments */
.header-nav {
  /* This is a comment for navigation */
  background: #343a40;
}`,dark:!0};const data={themeIcon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z",activePanel:null,preprocessors:["json","less","sass","scss"]},MenuBar={render(e){let t="border-0 bg-transparent text-sm focus:shadow-none",o="h-3 -mt-1 transform origin-center scale-125",r=`<div class="flex justify-between items-center overflow-auto">
  <div class="flex justify-between items-center">
    <button
      aria-label="new project"
      name="new project"
      class="${t}"
      onclick="newProject()"
      style="color: unset;"
    >
      <svg class="${o}" viewBox="0 0 384 512">
        <path 
          fill="currentColor"
          d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
      </svg>
    </button>
    <button
      aria-label="import project"
      name="import project"
      class="${t}"
      onclick="importProject()"
      style="color: unset;"
    >
      <svg class="${o}" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z" />
      </svg>
    </button>
    <a
      href="https://michaelsboost.com/donate/"
      aria-label="Donation helps developer maintence"
      target="_blank"
      role="button"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent text-red-400"
    >
      <svg class="${o}" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
      </svg>
    </a>
  </div>
  <div id="conversion" class="px-2 flex justify-between font-thin select-none cursor-default">
    css2${project.convertTo}
  </div>
  <div class="flex justify-between items-center">
    <button
      aria-label="export project"
      name="export project"
      class="${t}"
      onclick="download()"
      style="color: unset;"
    >
      <svg class="${o}" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
      </svg>
    </button>
    <button
      aria-label="toggle theme"
      name="toggle theme"
      class="${t}"
      style="color: unset;"
      onclick="theme()"
    >
      <svg class="${o}" viewBox="0 0 512 512">
        <path 
          id="themeIcon"
          fill="currentColor"
          d="${data.themeIcon}"
        />
      </svg>
    </button>
    <button
      aria-label="toggle settings"
      name="toggle settings"
      class="${t}"
      style="color: unset;"
      onclick="Settings()"
    >
      <svg class="${o}" viewBox="0 0 512 512">
        <path 
          fill="currentColor" 
          d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/>
      </svg>
    </button>
  </div>
</div>`,n=document.querySelector(e);n&&(n.innerHTML=r)}},Modal={render({large:e,title:t="Are you sure you want to proceed?",content:o,CloseLabel:r,ConfirmLabel:n,onLoad:s,onClose:l,onConfirm:c}){let a="text-xs w-auto px-3 py-2 m-0 capitalize rounded-md",i=`<svg class="w-3" viewBox="0 0 384 512">
        <path 
          fill="currentColor" 
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
      </svg>`,_=`<article class="${e?"flex flex-col h-3/4":""} rounded-md">
      <header class="${e?"flex-none":""} flex justify-between items-center">
        <h1 class="text-lg font-thin m-0">${t}</h1>
        <button class="${a} bg-transparent border-0" style="color: unset;" aria-label="Close">
          ${i}
        </button>
      </header>
      <main class="font-thin ${e?"flex-grow":""}">
        ${o||""}
      </main>
      <footer ${e?'class="flex-none"':""}>
        <button class="${a} bg-transparent border ${project.dark?"border-gray-600":"border-gray-200"}" style="color: unset;" aria-label="Close" onclick="this.closest('dialog').remove()">${r||"close"}</button>
        ${c?`<button class="${a}" aria-label="Confirm">${n||"confirm"}</button>`:""}
      </footer>
    </article>`,d=document.createElement("dialog");d.open=!0,d.innerHTML=_,document.body.appendChild(d),s&&"function"==typeof s&&s();let u=d.querySelector("header button"),p=d.querySelector("footer button:first-child"),f=d.querySelector("footer button:last-child");u.onclick=function(){l&&"function"==typeof l&&l(),document.body.removeChild(d)},p.onclick=function(){l&&"function"==typeof l&&l(),document.body.removeChild(d)},f.onclick=function(){c&&"function"==typeof c&&c(),document.body.removeChild(d)}}};function css2json(e){var t;let o={rootVariables:{},styles:{},animations:{},breakpoints:{}};e=t=(t=(t=e).replace(/\/\/[^\n]*/g,"")).replace(/\/\*[\s\S]*?\*\//g,"");let r=/([^{@]+)\{([^}]+)\}/g,n=/@media\s*([^{]+)\s*\{([\s\S]*?\{[\s\S]*?\})\s*}/g,s=/@keyframes\s+([^{\s]+)\s*\{([^}]*\{[^}]*\}[^}]*)\}/g;function l(e,t,r){if(e=e.split("\n").join("").split("}").join("").trim(),t=t.split("\n").join(""),r.keyframes){keyProps=t;return}if(":root"===e){t.split(";").forEach(e=>{if(!(e=e.trim()))return;let[t,r]=e.split(":").map(e=>e.trim());t&&r&&(o.rootVariables[t]=r)});return}let n=e.match(/^(.*?)(::?[a-zA-Z0-9-]+)$/),s=e,l=null;n&&(s=n[1].trim(),l=n[2]),r[s]||(r[s]={});let c=r[s];if(l){c.pseudos=c.pseudos||[];let a={selector:l,styles:{}};c.pseudos.push(a),c=a.styles}else c.base=c.base||{},c=c.base;t.split(";").forEach(e=>{if(!(e=e.trim()))return;let[t,o]=e.split(":").map(e=>e.trim());t&&o&&(c[t]=o)})}let c=null,a=null;function i(e,t){let o;if(!c)for(;null!==(o=r.exec(e));){let n=o[1].trim(),s=o[2].trim();if(n.startsWith("keyframes")&&(c=!0),n.startsWith("}")&&c&&(c=null),!c||n.includes(" ")||n.includes(">")||n.includes("+")||n.includes("~")){let a=n.split(/(?=[ >+~])/).map(e=>e.trim()),i=t;a.forEach((e,t)=>{(e=e.split("\n").join("")).startsWith("}")&&(e=e.substring(1));let o=t===a.length-1;s.includes("%")||(i[e]||(i[e]={}),o?l(e,s,i):(i[e].children||(i[e].children={}),i=i[e].children))})}else c||l(n,s,t)}}function _(e,t){let r={};t=t.trim();let n=t.split("}");n.forEach(e=>{if(!(e=e.trim()))return;let t=e.split("{");if(t.length>1){let o=t[0].trim();if(o&&(o.includes("to")||o.includes("from")||o.includes("%"))){let n=t[1].trim();n.split(";").forEach(e=>{if(!(e=e.trim()))return;let[t,n]=e.split(":").map(e=>e.trim());t&&n&&(r[o]||(r[o]={}),r[o][t]=n)})}}}),o.animations[e]={keyframes:r,properties:{}}}let d;for(;null!==(d=n.exec(e));){a=!0;let u=d[1].trim(),p=d[2].trim(),f=u;u=f=f.split(")")[0].split(":")[1].trim();let $={};i(p,$),Object.keys(o.styles).forEach(e=>{if(o.styles[e].base){let t=o.styles[e].base;o.styles[e].breakpoints=o.styles[e].breakpoints||{},o.styles[e].breakpoints[u]=o.styles[e].breakpoints[u]||{base:{}},Object.assign(o.styles[e].breakpoints[u].base,t)}}),o.breakpoints[u]={base:$}}a=null;let m=e.replace(n,"");i(m,o.styles);let v;for(;null!==(v=s.exec(e));){c=!0;let b=v[1].trim(),h=v[2].trim();_(b,h)}return c=null,o.styles[":root"]&&delete o.styles[":root"],Object.keys(o.styles).forEach(e=>{if(o.styles[e].base&&o.styles[e].base.animation){let t=o.styles[e].base.animation.split(" ");if(e=e.split("\n").join("").trim(),t.length>1){let r=t[0],n=t[1]||"1s",s=t[2]||"linear";o.animations[r]=o.animations[r]||{keyframes:{},properties:{}},o.animations[r].properties={"animation-name":r,"animation-duration":n,"animation-timing-function":s}}}}),!function e(t){Object.keys(t).forEach(o=>{let r=t[o];(0===Object.keys(t[o]).length||o.includes("}"))&&delete t[o],r.children&&e(r.children)})}(o.styles),o}function json2preprocessor(e){let t="",o="",r=";",n="{",s="}";function l(e){return/var\(--/.test(e)}function c(e,t,a=0){let i="  ".repeat(a),_="",d=t.variables||{},u=t.base||{},p=t.pseudos||[],f=t.children||{};for(let[$,m]of(_+=`${i}${e} ${n}
`,Object.entries(d)))_+=`${i}  ${o}${$}: ${m}${r}
`;for(let[v,b]of Object.entries(u))v.startsWith("--")&&(v=v.split("--").join(o)),l(b)&&(b=b.replace(/var\(--([a-zA-Z0-9-_]+)\)/g,(e,t)=>(v.startsWith("--"),`${o}${t}`))),_+=`${i}  ${v}: ${b}${r}
`;if(p.forEach(({selector:e,styles:t})=>{for(let[c,a]of(_+=`${i}  &${e} ${n}
`,Object.entries(t)))l(a)&&(a=a.replace(/var\(--([a-zA-Z0-9-_]+)\)/g,(e,t)=>`${o}${t}`)),_+=`${i}    ${c}: ${a}${r}
`;_+=`${i}  ${s}
`}),f)for(let[h,y]of Object.entries(f))_+=c(`${e} ${h}`,y,a+1);return _+=`${i}${s}
`}data.preprocessors.includes(project.convertTo)&&(("sass"===project.convertTo||"scss"===project.convertTo)&&(o="$"),"sass"===project.convertTo&&(r="",n="",s=""),"less"===project.convertTo&&(o="@"));let a=[];if(e.rootVariables&&Object.keys(e.rootVariables).length){for(let[i,_]of Object.entries(e.rootVariables))a.push(i),t+=`${o}${i.split("--").join("")}: ${_}${r}
`;t+="\n"}for(let[d,u]of Object.entries(e.styles)){if(!u||!Object.keys(u.variables||{}).length&&!Object.keys(u.base||{}).length&&!Object.keys(u.pseudos||{}).length&&!Object.keys(u.children||{}).length)continue;let p=d;t+=c(p,u)}return Object.keys(e.animations||{}).length&&(t+=function e(t,c=0){let a="  ".repeat(c),i="";for(let[_,d]of Object.entries(t)){for(let[u,p]of(i+=`${a}@keyframes ${_} ${n}
`,Object.entries(d.keyframes))){for(let[f,$]of(i+=`${a}  ${u} ${n}
`,Object.entries(p)))l($)&&($=$.replace(/var\(--([a-zA-Z0-9-_]+)\)/g,(e,t)=>`${o}${t}`)),i+=`${a}    ${f}: ${$}${r}
`;i+=`${a}  ${s}
`}i+=`${a}${s}
`}return i}(e.animations)),Object.keys(e.breakpoints||{}).length&&(t+=function e(t,o=0){let r="  ".repeat(o),l="";for(let[a,i]of Object.entries(t)){for(let[_,d]of(l+=`${r}@media (max-width: ${a}) ${n}
`,Object.entries(i.base||{})))l+=c(_,d,o+1);l+=`${r}${s}
`}return l}(e.breakpoints)),t}function convert(e){if("json"===e){let t=css2json(project.css);return project.output=t,JSON.stringify(t,null,2)}if(data.preprocessors.includes(e)){let o=css2json(project.css);project.output=o;let r=json2preprocessor(project.output);return r}Modal.render({title:"Unable to compile!",content:'<div class="p-4 text-center">Preprocessor not detected!</div>'})}function newProject(){Modal.render({title:"Are you sure you want to start a new project?",content:'<div class="p-4 text-center">All current data will be lost.</div>',onConfirm(){project.dark||theme(),project={convertTo:"json",css:"",dark:!0},input.value=project.css,output.value=convert(project.convertTo)}})}function importProject(){Modal.render({title:"Are you sure you want to load a new project?",content:'<div class="p-4 text-center">All current data will be lost.</div>',onConfirm(){let e=document.createElement("input");e.type="file",e.accept=".json",e.addEventListener("change",t=>{let o=t.target.files[0];if(!o){console.error("No file selected.");return}let r=new FileReader;r.onload=function(e){try{let t=JSON.parse(e.target.result);project={...project,...t},theme(),theme(),console.log(project),input.value=project.css,output.value=convert(project.convertTo),console.log("Project imported successfully:",t)}catch(o){console.error("Error parsing JSON file:",o)}},r.readAsText(o),e.remove()}),e.click()}})}function Settings(){Modal.render({title:"Settings",content:`<select id="convertTo">
    ${data.preprocessors.map(e=>{let t="less"===e.toLowerCase()?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();return`<option value="${e}" ${project.convertTo===e?"selected":""}>${t}</option>`}).join("")}
    </select>`,onConfirm(){project.convertTo=document.getElementById("convertTo").value.toString().toLowerCase(),input.value=project.css,output.value=convert(project.convertTo,project.css),document.getElementById("conversion").textContent=`css2${project.convertTo}`}})}function download(e){Modal.render({title:"Project File Name",content:'<input id="fileName" type="text" value="output" placeholder="Project file name....">',onLoad:function(){let e=document.getElementById("fileName");e.focus(),e.select();let t=e.closest("dialog").querySelector("footer button:last-child");e.onkeydown=e=>{"Enter"===e.key&&(e.preventDefault(),t.click())}},onConfirm:function(){let t=document.getElementById("fileName").value.trim().toLowerCase(),o=project.css,r=convert(project.convertTo);if(!t)return Modal.render({title:"Error",content:'<div class="text-center">File name not found!</div>'});let n,s,l;e?"css"===e?(n=o,s="css",l=new Blob([n],{type:"text/css;charset=utf-8"})):(n=r,"json"===e&&(s="json",l=new Blob([n],{type:"application/json;charset=utf-8"})),"sass"===e&&(s="sass",l=new Blob([n],{type:"text/sass;charset=utf-8"})),"scss"===e&&(s="scss",l=new Blob([n],{type:"text/scss;charset=utf-8"})),"less"===e&&(s="less",l=new Blob([n],{type:"text/less;charset=utf-8"})),"stylus"===e&&(s="styl",l=new Blob([n],{type:"text/stylus;charset=utf-8"}))):(n=JSON.stringify(project,null,2),s="json",l=new Blob([n],{type:"application/json;charset=utf-8"})),saveAs(l,`${t}${e?"":"_css2json"}.${s}`)}})}function theme(){project.dark=!project.dark,data.themeIcon=project.dark?"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z":"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z",document.documentElement.setAttribute("data-theme",project.dark?"dark":"light"),document.getElementById("themeIcon").setAttribute("d",data.themeIcon),document.querySelectorAll("[data-theme]").forEach(e=>{if("html"!==e.tagName.toLowerCase())"border"===e.getAttribute("data-theme")&&(e.classList.toggle("border-gray-800",project.dark),e.classList.toggle("border-gray-200",!project.dark))})}window.css2json=css2json,window.json2preprocessor=json2preprocessor,window.convert=convert,window.newProject=newProject,window.importProject=importProject,window.Settings=Settings,window.download=download,window.theme=theme,document.addEventListener("DOMContentLoaded",function(){MenuBar.render("[data-menubar]");let e=document.getElementById("input"),t=document.getElementById("output");e.value=project.css,t.value=convert(project.convertTo)});