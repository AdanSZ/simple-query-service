"use strict";var e=require("react");exports.FetchAsync=({query:t})=>{const[r,s]=e.useState(!1),[c,a]=e.useState("");return{executeAsync:async e=>{s(!0),a("");try{const r=await t(e);return s(!1),r}catch(e){return s(!1),console.log(e),a(e),e}},isLoading:r,error:c}},exports.FetchNow=({query:t})=>{const[r,s]=e.useState(!1),[c,a]=e.useState(""),[n,o]=e.useState(null);return console.log("query",t),e.useEffect((()=>{(async()=>{s(!0),a("");try{const e=await t();s(!1),o(e)}catch(e){a(e)}s(!1)})()}),[]),{data:n,isLoading:r,error:c}};
