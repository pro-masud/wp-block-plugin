(()=>{"use strict";var e,o={758:()=>{const e=window.wp.blocks,o=window.React,r=window.wp.i18n,t=window.wp.blockEditor,n=JSON.parse('{"UU":"create-block/demo-core"}');(0,e.registerBlockType)(n.UU,{edit:function(){return(0,o.createElement)("p",{...(0,t.useBlockProps)()},(0,r.__)("Demo Core – hello from the editor!","demo-core"))},save:function(){return(0,o.createElement)("p",{...t.useBlockProps.save()},"Demo Core – hello from the saved content!")}})}},r={};function t(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,t),i.exports}t.m=o,e=[],t.O=(o,r,n,i)=>{if(!r){var c=1/0;for(p=0;p<e.length;p++){for(var[r,n,i]=e[p],l=!0,a=0;a<r.length;a++)(!1&i||c>=i)&&Object.keys(t.O).every((e=>t.O[e](r[a])))?r.splice(a--,1):(l=!1,i<c&&(c=i));if(l){e.splice(p--,1);var s=n();void 0!==s&&(o=s)}}return o}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[r,n,i]},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={57:0,350:0};t.O.j=o=>0===e[o];var o=(o,r)=>{var n,i,[c,l,a]=r,s=0;if(c.some((o=>0!==e[o]))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(a)var p=a(t)}for(o&&o(r);s<c.length;s++)i=c[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(p)},r=globalThis.webpackChunkdemo_core=globalThis.webpackChunkdemo_core||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))})();var n=t.O(void 0,[350],(()=>t(758)));n=t.O(n)})();