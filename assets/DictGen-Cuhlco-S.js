import{d as S,r as f,c as L,b as l,e as t,w as s,u as q,F as j,E as g,f as R,g as I,h as M,i as W,o as Z,j as i,k as G,m as Q,t as T,l as F,n as P,q as X,p as H,a as J,_ as K}from"./index-DqxOU9Y5.js";/* empty css                 */const o=V=>(H("data-v-0975720f"),V=V(),J(),V),Y={class:"discription"},nn={class:"mainpanel"},en={class:"materials"},tn={class:"material"},ln=o(()=>l("span",null,"组织(",-1)),an=o(()=>l("span",{class:"keyword"},"org",-1)),sn=o(()=>l("span",null,")",-1)),on={class:"material"},rn=o(()=>l("span",null,"子组织(",-1)),un=o(()=>l("span",{class:"keyword"},"sorg",-1)),dn=o(()=>l("span",null,")",-1)),pn={class:"material"},cn=o(()=>l("span",null,"系统名/项目名(",-1)),fn=o(()=>l("span",{class:"keyword"},"app",-1)),mn=o(()=>l("span",null,")",-1)),vn={class:"material"},_n=o(()=>l("span",null,"用户名/角色名(",-1)),hn=o(()=>l("span",{class:"keyword"},"user",-1)),gn=o(()=>l("span",null,")",-1)),wn={class:"material"},yn=o(()=>l("span",null,"高频字符/串(",-1)),bn=o(()=>l("span",{class:"keyword"},"hfstr",-1)),kn=o(()=>l("span",null,")",-1)),xn={class:"rule"},Vn=o(()=>l("span",null,"规则库",-1)),Cn={class:"genbar"},Un={class:"numrange"},qn={class:"actbutton"},zn=S({__name:"DictGen",setup(V){const w=f(""),y=f(""),b=f(""),k=f(""),v=f(""),_=f(""),C=f(0),U=f(12),m=f(""),z=f(0),O=f(!1);function E(u,e,r){if(u.length<=0){g({message:"请先生成字典后再下载",type:"warning",plain:!0,offset:48});return}var d=new Blob([u],{type:e}),a=document.createElement("a");a.download=r,a.href=URL.createObjectURL(d),a.dataset.downloadurl=[e,a.download,a.href].join(":"),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(function(){URL.revokeObjectURL(a.href)},5e3)}const B=async u=>{try{w.value="",y.value="",b.value="",k.value=`admin
root`,v.value=`!
.
@
#
0
111
123
1234
12345
321
456
789
abc
asd
qwe
zxc`,_.value="{org}{sorg}{app}{user}{hfstr}{hfstr}",C.value=0,U.value=12,m.value="",u&&g({message:"已重置",type:"success",plain:!0,offset:48})}catch{u&&g({message:"重置异常",type:"warning",plain:!0,offset:48})}},D=async()=>{try{await navigator.clipboard.writeText(m.value),g({message:"复制成功",type:"success",plain:!0,offset:48})}catch{g({message:"复制失败",type:"warning",plain:!0,offset:48})}},N=async()=>{let u=(w.value+`
`).split(`
`).map(n=>n.trim()).filter((n,p,c)=>c.indexOf(n,0)===p),e=(y.value+`
`).split(`
`).map(n=>n.trim()).filter((n,p,c)=>c.indexOf(n,0)===p),r=(b.value+`
`).split(`
`).map(n=>n.trim()).filter((n,p,c)=>c.indexOf(n,0)===p),d=(k.value+`
`).split(`
`).map(n=>n.trim()).filter((n,p,c)=>c.indexOf(n,0)===p),a=(v.value+`
`).split(`
`).map(n=>n.trim()).filter((n,p,c)=>c.indexOf(n,0)===p),x=_.value.split(`
`).map(n=>n.trim()).filter((n,p,c)=>c.indexOf(n,0)===p&&n.trim().length>0),h=new Worker(new URL("/assets/worker-qiooZXZc.js",import.meta.url),{type:"module"});h.postMessage([{org:u,sorg:e,app:r,user:d,hfstr:a},{rule:x,pwd_len_min:Number(C.value),pwd_len_max:Number(U.value)}]),h.onmessage=n=>{m.value=n.data.join(`
`),h.terminate(),z.value=m.value.length>0?m.value.split(`
`).length:0,m.value.length>0&&g({message:"生成 "+z.value+" 项",type:"success",plain:!0,offset:48})},O.value=!1},$=u=>{switch(u){case 1:{v.value=`!
.
@
#
0
1
11
111
123
1234
12345
456
789
a
aa
abc
abcd
asd
asdf
qwe
zxc`;break}case 2:{v.value=`!
.
@
#
0
000
1
111
123
1234
12345
147
2
222
258
3
333
369
444
456
555
666
777
789
888
999
a
A
Aa
aa
abc
Abc
abcd
asd
asdf
qwe
qwer
zxc
zxcv;`;break}case 3:{v.value=`-
,
;
:
!
!@#
!@#$
!QAZ
?
.
'
(
)
@
@WSX
*
/
&
#
%
^
=
$
0
000
1
11
111
12
123
1234
12345
147
1qaz
2
2020
2021
2022
2023
2024
222
234
258
2wsx
3
321
333
345
369
4
444
456
555
567
654
666
678
777
789
888
890
999
a
A
Aa
aa
abc
Abc
abcd
asd
Asdf
asdf
mima
mm
Mm
pass
Pass
qq
Qq
qwe
Qwer
qwer
test
www
zxc
Zxcv
zxcv
Zz
zz`;break}}},A=u=>{switch(u){case 1:{_.value="{org}{sorg}{app}{user}{hfstr}{hfstr}";break}case 2:{_.value=`{hfstr}{org}{sorg}{app}{user}{hfstr}{hfstr}
{org}{sorg}{app}{user}{hfstr}{hfstr}{hfstr}`;break}case 3:{_.value=`{org}{sorg}{app}{user}123
{org}{sorg}{app}{user}{hfstr}{hfstr}{hfstr}{hfstr}
{hfstr}{hfstr}{hfstr}{hfstr}{user}
{hfstr}{hfstr}{hfstr}{hfstr}{org}
{hfstr}{hfstr}{org}{sorg}{app}{user}{hfstr}{hfstr}
{user}{hfstr}{hfstr}{org}{sorg}{app}{hfstr}{hfstr}
`;break}}};return B(!1),w.value="",y.value="",b.value="",k.value=`admin
root`,v.value=`!
.
@
#
0
111
123
1234
12345
321
456
789
abc
asd
qwe
zxc`,_.value="{org}{sorg}{app}{user}{hfstr}{hfstr}",(u,e)=>{const r=R,d=I,a=M,x=W,h=X;return Z(),L(j,null,[l("div",Y,[t(r,{icon:q(G),onClick:e[0]||(e[0]=n=>B(!0))},{default:s(()=>[i("重置")]),_:1},8,["icon"])]),l("div",nn,[l("div",en,[l("div",tn,[t(d,null,{default:s(()=>[ln,an,sn]),_:1}),t(a,{modelValue:w.value,"onUpdate:modelValue":e[1]||(e[1]=n=>w.value=n),rows:12,type:"textarea",placeholder:`例如：
  baidu
  Baidu
  BaiDu
  BD
  Bd
  bd`,spellcheck:"false"},null,8,["modelValue"])]),l("div",on,[t(d,null,{default:s(()=>[rn,un,dn]),_:1}),t(a,{modelValue:y.value,"onUpdate:modelValue":e[2]||(e[2]=n=>y.value=n),rows:12,type:"textarea",placeholder:`例如：
  netdisk
  Netdisk
  NetDisk
  ND
  WP
  wp
  Wp`,spellcheck:"false"},null,8,["modelValue"])]),l("div",pn,[t(d,null,{default:s(()=>[cn,fn,mn]),_:1}),t(a,{modelValue:b.value,"onUpdate:modelValue":e[3]||(e[3]=n=>b.value=n),rows:12,type:"textarea",placeholder:`例如：
  gitlab
  nacos
  web
  Web
  manage`,spellcheck:"false"},null,8,["modelValue"])]),l("div",vn,[t(d,null,{default:s(()=>[_n,hn,gn]),_:1}),t(a,{modelValue:k.value,"onUpdate:modelValue":e[4]||(e[4]=n=>k.value=n),rows:12,type:"textarea",placeholder:`例如：
  admin
  Admin
  root
  system`,spellcheck:"false"},null,8,["modelValue"])]),l("div",wn,[t(d,null,{default:s(()=>[yn,bn,kn]),_:1}),t(a,{modelValue:v.value,"onUpdate:modelValue":e[5]||(e[5]=n=>v.value=n),rows:12,type:"textarea",placeholder:`例如：
  123
  111
  345
  abc
  @
  !
  #`,spellcheck:"false"},null,8,["modelValue"]),t(x,null,{default:s(()=>[t(r,{onClick:e[6]||(e[6]=n=>$(1))},{default:s(()=>[i("normal")]),_:1}),t(r,{onClick:e[7]||(e[7]=n=>$(2))},{default:s(()=>[i("max")]),_:1}),t(r,{type:"warning",onClick:e[8]||(e[8]=n=>$(3))},{default:s(()=>[i("insane")]),_:1})]),_:1})])]),t(h,{direction:"vertical","border-style":"dashed",style:{height:"auto"}}),l("div",xn,[t(d,null,{default:s(()=>[Vn]),_:1}),t(a,{modelValue:_.value,"onUpdate:modelValue":e[9]||(e[9]=n=>_.value=n),rows:24,type:"textarea","input-style":"white-space: nowrap",placeholder:"{org}{hfstr}",spellcheck:"false"},null,8,["modelValue"]),t(x,null,{default:s(()=>[t(r,{onClick:e[10]||(e[10]=n=>A(1))},{default:s(()=>[i("normal")]),_:1}),t(r,{onClick:e[11]||(e[11]=n=>A(2))},{default:s(()=>[i("max")]),_:1}),t(r,{type:"warning",onClick:e[12]||(e[12]=n=>A(3))},{default:s(()=>[i("insane")]),_:1})]),_:1})]),t(h,{direction:"vertical","border-style":"dashed",style:{height:"auto"}}),l("div",Cn,[l("div",Un,[t(d,null,{default:s(()=>[i("长度限制")]),_:1}),t(h,{direction:"vertical",style:{height:"auto"}}),t(a,{modelValue:C.value,"onUpdate:modelValue":e[13]||(e[13]=n=>C.value=n),type:"number","input-style":"text-align:center;vertical-align:middle;"},null,8,["modelValue"]),t(d,null,{default:s(()=>[i(" -")]),_:1}),t(a,{modelValue:U.value,"onUpdate:modelValue":e[14]||(e[14]=n=>U.value=n),type:"number","input-style":"text-align:center;vertical-align:middle;"},null,8,["modelValue"])]),l("div",qn,[t(r,{type:"primary",icon:q(Q),onClick:N},{default:s(()=>[i("生成")]),_:1},8,["icon"]),t(d,null,{default:s(()=>[i("生成数: "+T(z.value),1)]),_:1}),t(x,null,{default:s(()=>[t(r,{icon:q(F),onClick:D},{default:s(()=>[i("复制")]),_:1},8,["icon"]),t(r,{icon:q(P),onClick:e[15]||(e[15]=n=>E(m.value,"text/plain",""))},{default:s(()=>[i("保存")]),_:1},8,["icon"])]),_:1})]),t(a,{modelValue:m.value,"onUpdate:modelValue":e[16]||(e[16]=n=>m.value=n),rows:24,type:"textarea","input-style":"white-space: nowrap",spellcheck:"false"},null,8,["modelValue"])])])],64)}}}),Bn=K(zn,[["__scopeId","data-v-0975720f"]]);export{Bn as default};
