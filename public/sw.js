if(!self.define){let e,a={};const f=(f,i)=>(f=new URL(f+".js",i).href,a[f]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=f,e.onload=a,document.head.appendChild(e)}else e=f,importScripts(f),a()})).then((()=>{let e=a[f];if(!e)throw new Error(`Module ${f} didn’t register its module`);return e})));self.define=(i,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let d={};const t=e=>f(e,c),n={module:{uri:c},exports:d,require:t};a[c]=Promise.all(i.map((e=>n[e]||t(e)))).then((e=>(s(...e),d)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"1e923a1ee327e28848e883aa09bb4737"},{url:"/_next/static/LYPTMednxIjfgCu6dWWtD/_buildManifest.js",revision:"39c04c408085e9912adc25c833c9fca1"},{url:"/_next/static/LYPTMednxIjfgCu6dWWtD/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/182-1f6e631e5d9f1a8b.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/380-01fbaecd84426bbf.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/472-91d1ce74f7545ccd.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/606-771a99973c593b5e.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/758-cb0e27dd0c47d0eb.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/948-72794890b73cfec0.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/app/%5BrecipeId%5D/page-9ad41cd9fc8bdb63.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/app/_not-found-b497841909798926.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/app/layout-fdb5530fb021d1cf.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/app/page-66201b7f90f36b0c.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/fd9d1056-26976bb2841a4a9f.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/main-8c0eb3f064d0efae.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/main-app-16c5aa874f0b6187.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/pages/_app-ee276fea40a4b191.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/pages/_error-deeb844d2074b9d8.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-31c9faec67fc5cc2.js",revision:"LYPTMednxIjfgCu6dWWtD"},{url:"/_next/static/css/4247bcf711833a26.css",revision:"4247bcf711833a26"},{url:"/_next/static/css/5b4a782cd22abbcf.css",revision:"5b4a782cd22abbcf"},{url:"/_next/static/media/02205c9944024f15-s.p.woff2",revision:"4cf1e387b8e1c64a73ef01c8d1e14681"},{url:"/_next/static/media/03b685511c0eaac3-s.woff2",revision:"46fec8ec22bfe84a9182cfecb0fe3fb6"},{url:"/_next/static/media/04fe87c30c4f76ea-s.woff2",revision:"472e8a7f3368235d9d26d7d10f094ff2"},{url:"/_next/static/media/07bc28ba7fbf2aa4-s.woff2",revision:"87d237aa37781f78122e3ba693fb170f"},{url:"/_next/static/media/0e4fe491bf84089c-s.p.woff2",revision:"5e22a46c04d947a36ea0cad07afcc9e1"},{url:"/_next/static/media/101c7b68f2d8b610-s.woff2",revision:"b5808b612c74810455a8c3b0575bf540"},{url:"/_next/static/media/13259ce60de2aa3e-s.woff2",revision:"66caa42ed220265325791d00e7d7ff1a"},{url:"/_next/static/media/1c57ca6f5208a29b-s.p.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/1deec1af325840fd-s.p.woff2",revision:"3895a5b3b40029ab3c48d1d718ebb2de"},{url:"/_next/static/media/1e8103c5d17beb1d-s.woff2",revision:"6e5e6b35f2164d0e19ba31634d926ae5"},{url:"/_next/static/media/28be9e914c3ffaae-s.woff2",revision:"e319fa836ec1f43fc99375a33269e8bf"},{url:"/_next/static/media/2bd4d1467b720bab-s.p.woff2",revision:"7b7298b7b70780cead7f128c51d6cf9f"},{url:"/_next/static/media/3511fdf6750b518d-s.woff2",revision:"e85775fd86060618bd4125d14654c36e"},{url:"/_next/static/media/37b0c0a51409261e-s.woff2",revision:"5ce748f413aee42a8d4723df0d18830b"},{url:"/_next/static/media/388fb79562c9fc54-s.woff2",revision:"dfa0053f38ab06be437d92f8069afda0"},{url:"/_next/static/media/3a04115668d8070d-s.p.woff2",revision:"d83f1599340e8afa7a36461059a80b81"},{url:"/_next/static/media/3a18fc8da1cdcd01-s.p.woff2",revision:"90550970095780af2d9df97c732853ec"},{url:"/_next/static/media/3d8af05b1dbb5df8-s.woff2",revision:"94a5fb88423f24f3981739bfbf345680"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/42d52f46a26971a3-s.p.woff2",revision:"b44d0dd122f9146504d444f290252d88"},{url:"/_next/static/media/44c3f6d12248be7f-s.woff2",revision:"705e5297b1a92dac3b13b2705b7156a7"},{url:"/_next/static/media/46c894be853ec49f-s.woff2",revision:"47891b6adb3a947dd3c594bd5196850e"},{url:"/_next/static/media/4a8324e71b197806-s.woff2",revision:"5fba57b10417c946c556545c9f348bbd"},{url:"/_next/static/media/4e4687409e533403-s.woff2",revision:"abe484542dba51a64b06c1cdd375bce3"},{url:"/_next/static/media/506bd11311670951-s.woff2",revision:"7976a92314c8770252603e7813da9f67"},{url:"/_next/static/media/5263bc4b08c2f55c-s.woff2",revision:"2a38c372be842877b9dd592a89deb47f"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/5f4dfe83faee04f1-s.woff2",revision:"ad8708422596f2adbe1a8c9a549ac04a"},{url:"/_next/static/media/5f90c536ae85dd38-s.woff2",revision:"4c086308102c21db827d4e8663d5e1bd"},{url:"/_next/static/media/627622453ef56b0d-s.p.woff2",revision:"e7df3d0942815909add8f9d0c40d00d9"},{url:"/_next/static/media/66c0409352e85293-s.woff2",revision:"ed6f00e0ca857d9c07a53f53fc3b0d83"},{url:"/_next/static/media/67e05ba3467b9f4d-s.woff2",revision:"bfa12833132b2af60583a7a0563e6fb1"},{url:"/_next/static/media/699512af39861afa-s.p.woff2",revision:"d998caa1048cad4c89e26a9d3fcab2ee"},{url:"/_next/static/media/71ba03c5176fbd9c-s.woff2",revision:"2effa1fe2d0dff3e7b8c35ee120e0d05"},{url:"/_next/static/media/79015435f1a55eef-s.p.woff2",revision:"5872822e91402734b90122bafed6b689"},{url:"/_next/static/media/7add1b04a8dbb074-s.woff2",revision:"df7736c7a2ac71c200c1a3cda683e4df"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/7d8c9b0ca4a64a5a-s.p.woff2",revision:"0772a436bbaaaf4381e9d87bab168217"},{url:"/_next/static/media/7e624512c3433db5-s.woff2",revision:"8a48965cead2d8be7f1d9f3a7b25a799"},{url:"/_next/static/media/80a2a8cc25a3c264-s.woff2",revision:"2d3d8a78ef164ab6c1c62a3e57c2727b"},{url:"/_next/static/media/83e4d81063b4b659-s.woff2",revision:"bd30db6b297b76f3a3a76f8d8ec5aac9"},{url:"/_next/static/media/8559276da9eb2149-s.woff2",revision:"3a7b1b3d0027afc35b464fb869ec2fdd"},{url:"/_next/static/media/8db47a8bf03b7d2f-s.p.woff2",revision:"49003e0ff09f1efb8323cf35b836ba8f"},{url:"/_next/static/media/8fb72f69fba4e3d2-s.woff2",revision:"7a2e2eae214e49b4333030f789100720"},{url:"/_next/static/media/912a9cfe43c928d9-s.p.woff2",revision:"376ffe2ca0b038d08d5e582ec13a310f"},{url:"/_next/static/media/91a88e0c5dd21dfa-s.woff2",revision:"9663a3dcc4d93b27554c25c2c537a6f0"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/94300924a0693016-s.woff2",revision:"105927314bd3f089b99c0dda456171ed"},{url:"/_next/static/media/96827bb3668ab7bf-s.woff2",revision:"9ec13a3824c59f854db9168aebae0ac0"},{url:"/_next/static/media/9714907d9a8e12c0-s.woff2",revision:"88275a7d603aecfc05a798dda62ca58c"},{url:"/_next/static/media/9b67ab375515cd6f-s.woff2",revision:"0ded8b4ff2f6a2b1f0a8420b92a6b969"},{url:"/_next/static/media/9cf7d128be063d32-s.p.woff2",revision:"bcc892f3fa0e651a3a2795103f72d85b"},{url:"/_next/static/media/9e48537b1b020091-s.p.woff2",revision:"4b52fd954ca934c204d73ddbc640e5d4"},{url:"/_next/static/media/a3c201c07e8eb753-s.woff2",revision:"fb08c969e6d9dd50cfd2645eb60ac166"},{url:"/_next/static/media/a50efca067c45ff7-s.p.woff2",revision:"0ea6e3886fc7639170a8e69463f4113e"},{url:"/_next/static/media/a5b77b63ef20339c-s.woff2",revision:"96e992d510ed36aa573ab75df8698b42"},{url:"/_next/static/media/a6d330d7873e7320-s.woff2",revision:"f7ec4e2d6c9f82076c56a871d1d23a2d"},{url:"/_next/static/media/af961b7eb9a15f7e-s.woff2",revision:"2bbd1a9c77461a3bfbff4c9b3a43a89e"},{url:"/_next/static/media/b6db722c6886c2cd-s.p.woff2",revision:"1019108d9fe09d5ae4b3affb185f8656"},{url:"/_next/static/media/baf12dd90520ae41-s.woff2",revision:"8096f9b1a15c26638179b6c9499ff260"},{url:"/_next/static/media/bbdb6f0234009aba-s.woff2",revision:"5756151c819325914806c6be65088b13"},{url:"/_next/static/media/bd976642b4f7fd99-s.p.woff2",revision:"cc0ffafe16e997fe75c32c5c6837e781"},{url:"/_next/static/media/c0058a8df935bb33-s.woff2",revision:"815d6a78ad78085bd8593051c2631f4a"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/d0eb1ad0db002bde-s.woff2",revision:"7712533474b456e0fc8050c18460b505"},{url:"/_next/static/media/d117eea74e01de14-s.woff2",revision:"4d1e5298f2c7e19ba39a6ac8d88e91bd"},{url:"/_next/static/media/d55edb6f37902ebf-s.p.woff2",revision:"a8675d6cd41bfd6a669b798ab0fc1ad6"},{url:"/_next/static/media/d8fdc95d5a4284b0-s.p.woff2",revision:"004ef2f1025475b1723e39d7a0529d7a"},{url:"/_next/static/media/daa8cca6b52a70fa-s.woff2",revision:"a2b76a053c0543aa04722f43c5852599"},{url:"/_next/static/media/dbe242b5c3b9d8cb-s.woff2",revision:"29445a64b7a514e94024e97416f26ecd"},{url:"/_next/static/media/de9eb3a9f0fa9e10-s.woff2",revision:"7155c037c22abdc74e4e6be351c0593c"},{url:"/_next/static/media/dfa8b99978df7bbc-s.woff2",revision:"7a500aa24dccfcf0cc60f781072614f5"},{url:"/_next/static/media/e195dd2ded485df3-s.woff2",revision:"920bd6d4ea896998f763e38d705bedb7"},{url:"/_next/static/media/e25729ca87cc7df9-s.woff2",revision:"9a74bbc5f0d651f8f5b6df4fb3c5c755"},{url:"/_next/static/media/e35c7314ac518ddc-s.woff2",revision:"ea21fa4f9e2ee9025409672d7750c45b"},{url:"/_next/static/media/e58e9ffb3994cb41-s.p.woff2",revision:"7f046d1fb2f0ae910ce0347969c80d15"},{url:"/_next/static/media/e861f746f27197e8-s.woff2",revision:"1f25aeb74bc794fddc4bf6b63c638ee2"},{url:"/_next/static/media/eb52b768f62eeeb4-s.woff2",revision:"90687dc5a4b6b6271c9f1c1d4986ca10"},{url:"/_next/static/media/ee65d20c5e82dfb1-s.p.woff2",revision:"87c4581addbd8808a3ada2357d63bf70"},{url:"/_next/static/media/ee7e17a7bdd8636b-s.woff2",revision:"47403e44df9ec7ef982ce9249b195f64"},{url:"/_next/static/media/f06116e890b3dadb-s.woff2",revision:"2855f7c90916c37fe4e6bd36205a26a8"},{url:"/_next/static/media/f43c59a3208adfd2-s.woff2",revision:"9d282171173ed000798084fbc9cdd388"},{url:"/_next/static/media/f943c040d756634c-s.woff2",revision:"2bed017a1773f7b80aa4f408df360776"},{url:"/manifest.json",revision:"1e0b7a401808e0a3ec2fb296bd2a8e32"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pan-128.png",revision:"dfb79ba6fa9c32035caa5d0560ce7115"},{url:"/pan-256.png",revision:"b22b7b110707d0bfb0d41f7ad8dad5fc"},{url:"/pan-512.png",revision:"c04db1b15a4441e3c034ec50ccd44157"},{url:"/pan.ico",revision:"ae0f2353e41d63479833c415a79038c6"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:f,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));