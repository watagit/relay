(self.webpackChunk=self.webpackChunk||[]).push([[15372],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39070:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>o,metadata:()=>p,toc:()=>s,default:()=>u});var a=t(22122),r=t(19756),l=(t(67294),t(3905)),i=["components"],o={id:"installation-and-setup",title:"Installation and Setup",original_id:"installation-and-setup"},p={unversionedId:"installation-and-setup",id:"version-v9.0.0/installation-and-setup",isDocsHomePage:!1,title:"Installation and Setup",description:"Installation",source:"@site/versioned_docs/version-v9.0.0/Introduction-InstallationAndSetup.md",sourceDirName:".",slug:"/installation-and-setup",permalink:"/docs/v9.0.0/installation-and-setup",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v9.0.0/Introduction-InstallationAndSetup.md",version:"v9.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1623357413,formattedLastUpdatedAt:"6/10/2021",frontMatter:{id:"installation-and-setup",title:"Installation and Setup",original_id:"installation-and-setup"},sidebar:"version-v9.0.0/docs",previous:{title:"Prerequisites",permalink:"/docs/v9.0.0/prerequisites"},next:{title:"Quick Start Guide",permalink:"/docs/v9.0.0/quick-start-guide"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Set up Relay with a single config file",id:"set-up-relay-with-a-single-config-file",children:[]},{value:"Set up babel-plugin-relay",id:"set-up-babel-plugin-relay",children:[]},{value:"Set up relay-compiler",id:"set-up-relay-compiler",children:[]},{value:"JavaScript environment requirements",id:"javascript-environment-requirements",children:[]}],c={toc:s};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Install React and Relay using ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\nyarn add react react-dom react-relay\n\n")),(0,l.kt)("h2",{id:"set-up-relay-with-a-single-config-file"},"Set up Relay with a single config file"),(0,l.kt)("p",null,"The below configuration of ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-plugin-relay")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"relay-compiler")," can be applied using a single configuration file by\nusing the ",(0,l.kt)("inlineCode",{parentName:"p"},"relay-config")," package. Besides unifying all Relay configuration in a single place, other tooling can leverage\nthis to provide zero-config setup (e.g. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/relay-tools/vscode-apollo-relay"},"vscode-apollo-relay"),")."),(0,l.kt)("p",null,"Install the package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\nyarn add --dev relay-config\n\n")),(0,l.kt)("p",null,"And create the configuration file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'// relay.config.js\nmodule.exports = {\n  // ...\n  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.\n  src: "./src",\n  schema: "./data/schema.graphql",\n  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],\n}\n')),(0,l.kt)("h2",{id:"set-up-babel-plugin-relay"},"Set up babel-plugin-relay"),(0,l.kt)("p",null,"Relay Modern requires a Babel plugin to convert GraphQL to runtime artifacts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\nyarn add --dev babel-plugin-relay graphql\n\n")),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},'"relay"')," to the list of plugins your ",(0,l.kt)("inlineCode",{parentName:"p"},".babelrc")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    "relay"\n  ]\n}\n')),(0,l.kt)("p",null,"Please note that the ",(0,l.kt)("inlineCode",{parentName:"p"},'"relay"')," plugin should run before other plugins or\npresets to ensure the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql")," template literals are correctly transformed. See\nBabel's ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/plugins/#pluginpreset-ordering"},"documentation on this topic"),"."),(0,l.kt)("p",null,"Alternatively, instead of using ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-plugin-relay"),", you can use Relay with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/babel-plugin-macros"},"babel-plugin-macros"),". After installing ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-plugin-macros")," and adding it to your Babel config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const graphql = require('babel-plugin-relay/macro');\n")),(0,l.kt)("p",null,"If you need to configure ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-plugin-relay")," further (e.g. to enable ",(0,l.kt)("inlineCode",{parentName:"p"},"compat")," mode), you can do so by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/babel-plugin-macros/blob/master/other/docs/user.md#config-experimental"},"specifying the options in a number of ways"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// babel-plugin-macros.config.js\nmodule.exports = {\n  // ...\n  // Other macros config\n  relay: {\n    compat: true,\n  },\n}\n")),(0,l.kt)("h2",{id:"set-up-relay-compiler"},"Set up relay-compiler"),(0,l.kt)("p",null,"Relay's ahead-of-time compilation requires the ",(0,l.kt)("a",{parentName:"p",href:"./graphql-in-relay#relay-compiler"},"Relay Compiler"),", which you can install via ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\nyarn add --dev relay-compiler\n\n")),(0,l.kt)("p",null,"This installs the bin script ",(0,l.kt)("inlineCode",{parentName:"p"},"relay-compiler")," in your node_modules folder. It's recommended to run this from a ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," script by adding a script to your ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql"\n}\n')),(0,l.kt)("p",null,"or if you are using jsx:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --extensions js jsx"\n}\n')),(0,l.kt)("p",null,"Then, after making edits to your application files, just run the ",(0,l.kt)("inlineCode",{parentName:"p"},"relay")," script to generate new compiled artifacts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\nyarn run relay\n\n")),(0,l.kt)("p",null,"Alternatively, you can pass the ",(0,l.kt)("inlineCode",{parentName:"p"},"--watch")," option to watch for file changes in your source code and automatically re-generate the compiled artifacts (",(0,l.kt)("strong",{parentName:"p"},"Note:")," Requires ",(0,l.kt)("a",{parentName:"p",href:"https://facebook.github.io/watchman"},"watchman")," to be installed):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\nyarn run relay --watch\n\n")),(0,l.kt)("p",null,"For more details, check out our ",(0,l.kt)("a",{parentName:"p",href:"./graphql-in-relay#relay-compiler"},"Relay Compiler docs"),"."),(0,l.kt)("h2",{id:"javascript-environment-requirements"},"JavaScript environment requirements"),(0,l.kt)("p",null,"The Relay Modern packages distributed on NPM use the widely-supported ES5\nversion of JavaScript to support as many browser environments as possible."),(0,l.kt)("p",null,"However, Relay Modern expects modern JavaScript global types (",(0,l.kt)("inlineCode",{parentName:"p"},"Map"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Set"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Object.assign"),") to be defined. If you support older browsers and\ndevices which may not yet provide these natively, consider including a global\npolyfill in your bundled application, such as ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," or\n",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/usage/polyfill/"},"@babel/polyfill"),"."),(0,l.kt)("p",null,"A polyfilled environment for Relay using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," to support older browsers\nmight look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"require('core-js/es6/map');\nrequire('core-js/es6/set');\nrequire('core-js/es6/promise');\nrequire('core-js/es6/object');\n\nrequire('./myRelayApplication');\n")))}u.isMDXComponent=!0}}]);