'use strict';!function(require,directRequire){const a=require('path'),b=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),c=require('./d260ebf687a29f24aed49f66b233ab7d.js'),d=require('./6b5520e429c60abf5d2f924c0fa05fd0.js'),e=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),f=require('./2e9637e8a0816a626f7db9a0dee5efe8.js'),g=require('./84b183688a46c9e2626d3e6f83365e13.js');module.exports=async function(h,i){await f.init(h);const j=f.CACHE_KEYS.JSON_WXAPPCODE,k=i;let l=f.get(j,k);if(l)return l;const m=await b(h),n=e.checkIsInSubPackage(m,i),o=await d.getFileListWithMainPack(h,m,n),p=a.posix.dirname(i),q=await c(h,i);if(q.usingComponents&&0<Object.keys(q.usingComponents).length){const a={},b={};for(const c in q.usingComponents){let d=q.usingComponents[c]||'';const e=c.split('*'),f=d.split('*');1<e.length?(d=g.normalizePath('/'+d),b[c]=d):m.plugins||n&&n.plugins?a[c]=d.replace(/^plugin:\/\/([^\/]*)\/(.*)/,(a,b,c,d,e)=>{const f=m.plugins&&m.plugins[b]||n&&n.plugins&&n.plugins[b];return f?`plugin://${f.provider}/${c}`:e}):a[c]=d}if(0<Object.keys(b).length)for(const c in b){const d=b[c],e=new RegExp(d.replace(/\*/g,'([^/]*)'));o.forEach((b)=>{b='/'+b;const d=b.match(e);if(!d)return;let f=1;const g=c.replace(/\*/g,function(){return d[f++]});a[g]=b})}q.usingComponents=a}return l=q,f.set(j,k,l),l}}(require('lazyload'),require);