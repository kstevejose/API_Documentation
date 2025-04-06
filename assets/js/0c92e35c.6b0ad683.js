(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[541],{4213:function(e,t,n){var r,a,o;a=[],void 0===(o="function"==typeof(r=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){c(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,i=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,n){var i=s.URL||s.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?o(c):a(c.href)?r(e,t,n):o(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){o(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,s){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),n);else if(a(e))r(e,n,s);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){o(i)}))}}:function(e,t,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var o="application/octet-stream"===e.type,c=/constructor/i.test(s.HTMLElement)||s.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||o&&c||i)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},u.readAsDataURL(e)}else{var d=s.URL||s.webkitURL,f=d.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c})?r.apply(t,a):r)||(e.exports=o)},18426:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},21089:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"api/financial-information-provider-api","title":"Financial Information Provider API","description":"# Summary","source":"@site/docs/api/financial-information-provider-api.info.mdx","sourceDirName":"api","slug":"/api/financial-information-provider-api","permalink":"/API-Documentation/docs/api/financial-information-provider-api","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"id":"financial-information-provider-api","title":"Financial Information Provider API","description":"# Summary","sidebar_label":"Introduction","sidebar_position":0,"hide_title":true,"custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Translate your site","permalink":"/API-Documentation/docs/tutorial-extras/translate-your-site"},"next":{"title":"API used to delink customer FIP accounts.","permalink":"/API-Documentation/docs/api/delink-accounts"}}');var a=n(74848),o=n(28453),s=(n(64624),n(9303)),i=n(12990),c=n.n(i),l=n(79329);n(25383);const u={id:"financial-information-provider-api",title:"Financial Information Provider API",description:"# Summary",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},d="Summary",f={},m=[];function p(e){const t={a:"a",h1:"h1",header:"header",hr:"hr",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 2.0.0"}),"\n",(0,a.jsx)(s.default,{as:"h1",className:"openapi__heading",children:"Financial Information Provider API"}),"\n",(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"summary",children:"Summary"})}),"\n",(0,a.jsx)(t.p,{children:"The Financial Information Providers (FIPs) maintain accounts of the customers. The Account Aggregator may request FIP for financial information of the customers using explicit electronic consents obtained through direct customer interaction. The APIs defined here are implemented by the FIPs to enable Account Aggregators to discover a customer\u2019s account, perform account linking and enable query of the financial information based on explicit digitally signed electronic consent. The FIP further maintains the status of the consents and exposes the notification API so AA can notify it about the changes in the status of consent, account delinking requests etc."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,a.jsx)(s.default,{id:"authentication",as:"h2",className:"openapi-tabs__heading",children:"Authentication"}),(0,a.jsx)(c(),{className:"openapi-tabs__security-schemes",children:(0,a.jsxs)(l.default,{label:"API Key: AA_api_key",value:"AA_api_key",children:[(0,a.jsx)(t.p,{children:"AA_api_key is provided to FIP by the AA"}),(0,a.jsx)("div",{children:(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"apiKey"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Header parameter name:"})}),(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"aa_api_key"})})]})]})})})]})})]}),"\n",(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,a.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,a.jsx)(t.p,{children:"Contact"})}),(0,a.jsx)("span",{children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"mailto:aa-api@rebit.org.in",children:"aa-api@rebit.org.in"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},25383:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(96540)),o=r(n(4213));t.default=function(e){let{url:t,proxy:n}=e;return a.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},a.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),a.default.createElement("ul",{className:"export-dropdown dropdown__menu"},a.default.createElement("li",null,a.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),o.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},28453:(e,t,n)=>{"use strict";n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}},31177:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(8532),a=n(53115);function o(){const{prism:e}=(0,a.p)(),{colorMode:t}=(0,r.G)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}},60506:(e,t,n)=>{"use strict";n.d(t,{c:()=>o});var r=n(96540),a=n(74848);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),s=n?.props.children;return{mdxAdmonitionTitle:s,rest:o.length>0?(0,a.jsx)(a.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}},61360:(e,t,n)=>{"use strict";n.d(t,{f:()=>i});var r=n(96540),a=n(26849);const o={attributes:!0,characterData:!0,childList:!0,subtree:!0};function s(e,t){const[n,s]=(0,r.useState)(),i=(0,r.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,r.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=o);const s=(0,a._q)(t),i=(0,a.Be)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,i),()=>t.disconnect()}),[e,s,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function i(){const[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(!1),o=(0,r.useRef)(null),i=(0,r.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return s(o,c),(0,r.useEffect)((()=>{c()}),[e,c]),(0,r.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}},64566:(e,t,n)=>{"use strict";n.d(t,{Li:()=>p,M$:()=>h,Op:()=>m,_u:()=>f,wt:()=>d});var r=n(18426),a=n.n(r);const o=/title=(?<quote>["'])(?<title>.*?)\1/,s=/\{(?<range>[\d,-]+)\}/,i={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},c={...i,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},l=Object.keys(i);function u(e,t){const n=e.map((e=>{const{start:n,end:r}=c[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function d(e){return e?.match(o)?.groups.title??""}function f(e){return Boolean(e?.includes("showLineNumbers"))}function m(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}function p(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:i}=t;if(i&&s.test(i)){const e=i.match(s).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=a()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return u(["js","jsBlock"],t);case"jsx":case"tsx":return u(["js","jsBlock","jsx"],t);case"html":return u(["js","jsBlock","html"],t);case"python":case"py":case"bash":return u(["bash"],t);case"markdown":case"md":return u(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return u(["tex"],t);case"lua":case"haskell":return u(["lua"],t);case"sql":return u(["lua","jsBlock"],t);case"wasm":return u(["wasm"],t);case"vb":case"vba":case"visual-basic":return u(["vb","rem"],t);case"vbnet":return u(["vbnet","rem"],t);case"batch":return u(["rem"],t);case"basic":return u(["rem","f90"],t);case"fsharp":return u(["js","ml"],t);case"ocaml":case"sml":return u(["ml"],t);case"fortran":return u(["f90"],t);case"cobol":return u(["cobol"],t);default:return u(l,t)}}(r,o),d=n.split("\n"),f=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),m=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),p=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),h=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let a=0;a<d.length;){const e=d[a].match(c);if(!e){a+=1;continue}const t=e.slice(1).find((e=>void 0!==e));m[t]?f[m[t]].range+=`${a},`:p[t]?f[p[t]].start=a:h[t]&&(f[h[t]].range+=`${f[h[t]].start}-${a-1},`),d.splice(a,1)}n=d.join("\n");const b={};return Object.entries(f).forEach((e=>{let[t,{range:n}]=e;a()(n).forEach((e=>{b[e]??=[],b[e].push(t)}))})),{lineClassNames:b,code:n}}function h(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,a]=e;const o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}},64624:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{colorMode:t}=(0,o.useColorMode)(),{logo:n,darkLogo:r}=e,c=()=>"dark"===t?r?.altText??n?.altText:n?.altText,l=(0,s.default)(n?.url),u=(0,s.default)(r?.url);if(n&&r)return a.default.createElement(i.default,{alt:c(),sources:{light:l,dark:u},className:"openapi__logo"});if(n||r)return a.default.createElement(i.default,{alt:c(),sources:{light:l??u,dark:l??u},className:"openapi__logo"});return};const a=r(n(96540)),o=n(3489),s=r(n(29030)),i=r(n(24475))},98569:(e,t,n)=>{"use strict";n.d(t,{i:()=>a});var r=n(40797);function a(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,r.default)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,r.default)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}}}]);