(this["webpackJsonpjava-lotto-1"]=this["webpackJsonpjava-lotto-1"]||[]).push([[0],{14:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),O=r(7),u=r.n(O),_=r(5),l=r(1),c=function(e,t,r){for(var a=[],n=1;n<=r[r.length-1];n++)a.push(!1);if(""===e)return"LOTTO_NUMBER_IS_BLANK_ERROR";var O=e.split(",");if((O=O.map((function(e){return e.trim()}))).length>t)return"LOTTO_NUMBER_IS_GREATER_THAN_LOTTO_COUNT";if(O.length<t)return"LOTTO_NUMBER_IS_LESS_THAN_LOTTO_COUNT";for(var u=0;u<O.length;u++){if(""===O[u])return"LOTTO_NUMBER_IS_BLANK_ERROR";var _=O[u]&&O[u].match(/\D/g);if(null!==_&&_.length>=0)return"LOTTO_NUMBER_IS_NOT_NUMBER_ERROR";if(r.indexOf(Number(O[u]))<0)return"LOTTO_NUMBER_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR";if(!0===a[Number(O[u])])return"LOTTO_NUMBER_HAS_DUPLICATION_NUMBER_ERROR";a[Number(O[u])]=!0}return O},E=r(4),R=function e(t){Object(E.a)(this,e),this.numbers=[],this.numbers=t},o=function(e,t){for(var r=Object(_.a)(e),a=[],n=0;n<t;n++){var O=Math.floor(Math.random()*(e[e.length-1]-n)),u=r.splice(O,1)[0];a.push(Number(u))}return a},i=r(8),T=function(){function e(t,r){Object(E.a)(this,e),this.lotto=void 0,this.bonusNo=0,this.lotto=t,this.bonusNo=r}return Object(i.a)(e,[{key:"match",value:function(e){var t=0,r=0;return this.lotto.numbers.map((function(r){e.numbers.indexOf(r)>=0&&t++})),e.numbers.indexOf(this.bonusNo)>=0&&r++,6===t?"FIRST":5===t&&r?"SECOND":t+r===5?"THIRD":t+r===4?"FOURTH":t+r===3?"FIFTH":"MISS"}}]),e}(),N=function(){for(var e=[],t=0;t<45;t++)e.push(t+1);var r={FIRST:0,SECOND:0,THIRD:0,FOURTH:0,FIFTH:0,MISS:0},O=Object(a.useState)(!1),u=Object(l.a)(O,2),E=u[0],i=u[1],N=Object(a.useState)(!1),m=Object(l.a)(N,2),b=m[0],S=m[1],s=Object(a.useState)(!1),f=Object(l.a)(s,2),L=f[0],v=f[1],U=Object(a.useState)(!1),d=Object(l.a)(U,2),I=d[0],j=d[1],A=Object(a.useState)(!1),B=Object(l.a)(A,2),M=B[0],h=B[1],p=Object(a.useState)(!1),C=Object(l.a)(p,2),y=C[0],g=C[1],H=Object(a.useState)(!1),F=Object(l.a)(H,2),D=F[0],x=F[1],P=Object(a.useState)(!1),w=Object(l.a)(P,2),K=w[0],G=w[1],k=Object(a.useState)(!1),J=Object(l.a)(k,2),W=J[0],q=J[1],z=Object(a.useState)(!1),Q=Object(l.a)(z,2),V=Q[0],X=Q[1],Y=Object(a.useState)(!1),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=Object(a.useState)(!1),re=Object(l.a)(te,2),ae=re[0],ne=re[1],Oe=Object(a.useState)(!1),ue=Object(l.a)(Oe,2),_e=ue[0],le=ue[1],ce=Object(a.useState)(!1),Ee=Object(l.a)(ce,2),Re=Ee[0],oe=Ee[1],ie=Object(a.useState)(!1),Te=Object(l.a)(ie,2),Ne=Te[0],me=Te[1],be=Object(a.useState)(!1),Se=Object(l.a)(be,2),se=Se[0],fe=Se[1],Le=Object(a.useState)(!1),ve=Object(l.a)(Le,2),Ue=ve[0],de=ve[1],Ie=Object(a.useState)(!1),je=Object(l.a)(Ie,2),Ae=je[0],Be=je[1],Me=Object(a.useState)(!1),he=Object(l.a)(Me,2),pe=he[0],Ce=he[1],ye=Object(a.useState)(!1),ge=Object(l.a)(ye,2),He=ge[0],Fe=ge[1],De=Object(a.useState)(!1),xe=Object(l.a)(De,2),Pe=xe[0],we=xe[1],Ke=Object(a.useState)(!1),Ge=Object(l.a)(Ke,2),ke=Ge[0],Je=Ge[1],We=Object(a.useState)(""),qe=Object(l.a)(We,2),ze=qe[0],Qe=qe[1],Ve=Object(a.useState)(0),Xe=Object(l.a)(Ve,2),Ye=Xe[0],Ze=Xe[1],$e=Object(a.useState)(!1),et=Object(l.a)($e,2),tt=et[0],rt=et[1],at=Object(a.useState)(""),nt=Object(l.a)(at,2),Ot=nt[0],ut=nt[1],_t=Object(a.useState)([]),lt=Object(l.a)(_t,2),ct=lt[0],Et=lt[1],Rt=Object(a.useState)([]),ot=Object(l.a)(Rt,2),it=ot[0],Tt=ot[1],Nt=Object(a.useState)(!1),mt=Object(l.a)(Nt,2),bt=mt[0],St=mt[1],st=Object(a.useState)(""),ft=Object(l.a)(st,2),Lt=ft[0],vt=ft[1],Ut=Object(a.useState)(""),dt=Object(l.a)(Ut,2),It=dt[0],jt=dt[1],At=Object(a.useState)(r),Bt=Object(l.a)(At,2),Mt=Bt[0],ht=Bt[1],pt=Object(a.useState)(!1),Ct=Object(l.a)(pt,2),yt=Ct[0],gt=Ct[1],Ht=function(e){var t=Number(e.target.id.substr(17));ct[t]=e.target.value,Et(ct)};return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i(!1),S(!1),v(!1),rt(!1);var t=function(e,t){var r=e.trim();if(0===r.length)return"PURCHASE_AMOUNT_IS_BLANK_ERROR";var a=r&&r.match(/\D/g);return null!==a&&a.length>=0?"PURCHASE_AMOUNT_IS_NOT_NUMBER_ERROR":r.length<String(t).length?"PURCHASE_AMOUNT_IS_LESS_THAN_MINIMUM_AMOUNT_ERROR":r}(ze,1e3);if("PURCHASE_AMOUNT_IS_BLANK_ERROR"===t)return i(!0);if("PURCHASE_AMOUNT_IS_NOT_NUMBER_ERROR"===t)return S(!0);if("PURCHASE_AMOUNT_IS_LESS_THAN_MINIMUM_AMOUNT_ERROR"===t)return v(!0);var r=Number(t),a=Math.floor(r/1e3);Ze(a),rt(!0)}},n.a.createElement("label",{htmlFor:"purchaseAmoutInput"},"\uad6c\uc785 \uae08\uc561\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694. "),n.a.createElement("input",{id:"purchaseAmoutInput",type:"text",value:ze,onChange:function(e){Qe(e.target.value)}}),n.a.createElement("button",{type:"submit"},"\uc785\ub825")),E&&n.a.createElement("div",{style:{color:"red"}},"\uad6c\uc785 \uae08\uc561\uc744 \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."),b&&n.a.createElement("div",{style:{color:"red"}},"\uad6c\uc785 \uae08\uc561\uc740 \uc22b\uc790\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."),L&&n.a.createElement("div",{style:{color:"red"}},"\ub85c\ub610 \ucd5c\uc18c \uad6c\uc785 \uac00\uaca9\uc740 ",1e3,"\uc6d0\uc785\ub2c8\ub2e4."),tt&&n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),j(!1),h(!1),g(!1);var t=function(e,t){var r=e.trim();if(0===r.length)return"MANUAL_LOTTO_COUNT_IS_BLANK_ERROR";var a=r&&r.match(/\D/g);return null!==a&&a.length>=0?"MANUAL_LOTTO_COUNT_IS_NOT_NUMBER_ERROR":Number(r)>t?"MAMUAL_LOTTO_COUNT_IS_GREATER_THAN_LOTTO_COUNT_ERROR":r}(Ot,Ye);if("MANUAL_LOTTO_COUNT_IS_BLANK_ERROR"===t)return j(!0);if("MANUAL_LOTTO_COUNT_IS_NOT_NUMBER_ERROR"===t)return h(!0);if("MAMUAL_LOTTO_COUNT_IS_GREATER_THAN_LOTTO_COUNT_ERROR"===t)return g(!0);for(var r=[],a=0;a<Number(Ot);a++)r.push("");Et(r)}},n.a.createElement("label",{htmlFor:"manualLottoCountInput"},"\uc218\ub3d9\uc73c\ub85c \uad6c\ub9e4\ud560 \ub85c\ub610 \uc218\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694. "),n.a.createElement("input",{id:"manualLottoCountInput",type:"text",value:Ot,onChange:function(e){ut(e.target.value)}}),n.a.createElement("button",{type:"submit"},"\uc785\ub825")),I&&n.a.createElement("div",{style:{color:"red"}},"\uc218\ub3d9\uc73c\ub85c \uad6c\ub9e4\ud560 \ub85c\ub610 \uc218\ub97c \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."),M&&n.a.createElement("div",{style:{color:"red"}},"\uc218\ub3d9\uc73c\ub85c \uad6c\ub9e4\ud560 \ub85c\ub610 \uc218\ub294 \uc22b\uc790\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."),y&&n.a.createElement("div",{style:{color:"red"}},Ye,"\uac1c\ubcf4\ub2e4 \uc791\uac8c \uc785\ub825\ud574\uc8fc\uc138\uc694."),ct.length>0&&n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),x(!1),G(!1),q(!1),X(!1),ee(!1);for(var r=0;r<ct.length;r++){var a=c(ct[r],6,e);if("LOTTO_NUMBER_IS_BLANK_ERROR"===a)return x(!0);if("LOTTO_NUMBER_IS_GREATER_THAN_LOTTO_COUNT"===a)return G(!0);if("LOTTO_NUMBER_IS_LESS_THAN_LOTTO_COUNT"===a)return q(!0);if("LOTTO_NUMBER_IS_NOT_NUMBER_ERROR"===a)return X(!0);if("LOTTO_NUMBER_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR"===a)return ee(!0);if("LOTTO_NUMBER_HAS_DUPLICATION_NUMBER_ERROR"===a)return ne(!0)}St(!0);for(var n=[],O=0;O<Number(Ot);O++){var u=ct[O].split(",").map((function(e){return Number(e)})).sort((function(e,t){return e-t}));n.push(new R(u))}var l=function(e,t,r){for(var a=[],n=0;n<e;n++)a.push(new R(o(t,r).sort((function(e,t){return e-t}))));return a}(Ye-Number(Ot),e,6);Tt([].concat(n,Object(_.a)(l)))}},ct.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("label",{htmlFor:"manualLottoNumber"+t},"\uc218\ub3d9\uc73c\ub85c \uad6c\ub9e4\ud560 \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),n.a.createElement("input",{style:{width:"200px"},id:"manualLottoNumber"+t,type:"text",onChange:Ht}))})),n.a.createElement("button",{type:"submit"},"\uc785\ub825")),D&&n.a.createElement("div",{style:{color:"red"}},"\uc785\ub825\ud558\uc9c0 \uc54a\uc740 \ubc88\ud638\uac00 \uc788\uc2b5\ub2c8\ub2e4."),K&&n.a.createElement("div",{style:{color:"red"}},"\ub85c\ub610 \uac1c\uc218\ub294 ",6,"\uac1c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."),W&&n.a.createElement("div",{style:{color:"red"}},"\ub85c\ub610 \uac1c\uc218\ub294 ",6,"\uac1c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."),V&&n.a.createElement("div",{style:{color:"red"}},"\uc218\ub3d9\uc73c\ub85c \uad6c\ub9e4\ud560 \ubc88\ud638\ub294 \uc22b\uc790\uc640 ,\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."),$&&n.a.createElement("div",{style:{color:"red"}},"\ub85c\ub610\ub294 1\ubd80\ud130 ",45," \uc0ac\uc774\uc758 \uc22b\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),ae&&n.a.createElement("div",{style:{color:"red"}},"\uc911\ubcf5\ub41c \ub85c\ub610 \ubc88\ud638\uac00 \uc788\uc2b5\ub2c8\ub2e4."),bt&&n.a.createElement("div",null,n.a.createElement("div",null,"\uc218\ub3d9\uc73c\ub85c ",Ot,"\uc7a5, \uc790\ub3d9\uc73c\ub85c ",Ye-Number(Ot),"\uac1c\ub97c \uad6c\ub9e4\ud588\uc2b5\ub2c8\ub2e4."),n.a.createElement("div",null,it.map((function(e,t){return n.a.createElement("div",{key:t},"[",e.numbers.join(", "),"]")}))),n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),le(!1),oe(!1),me(!1),fe(!1),de(!1),Be(!1),Ce(!1),Fe(!1),we(!1);var a=c(Lt,6,e);if("LOTTO_NUMBER_IS_BLANK_ERROR"===a)return le(!0);if("LOTTO_NUMBER_IS_GREATER_THAN_LOTTO_COUNT"===a)return oe(!0);if("LOTTO_NUMBER_IS_LESS_THAN_LOTTO_COUNT"===a)return me(!0);if("LOTTO_NUMBER_IS_NOT_NUMBER_ERROR"===a)return fe(!0);if("LOTTO_NUMBER_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR"===a)return de(!0);if("LOTTO_NUMBER_HAS_DUPLICATION_NUMBER_ERROR"===a)return Be(!0);var n=function(e,t,r){if(""===t)return"BONUS_BALL_IS_BLANK_ERROR";var a=Number(t),n=t.match(/\D/g);return null!==n&&n.length>=0?"BONUS_BALL_IS_NOT_NUMBER_ERROR":r.indexOf(a)<0?"BONUS_BALL_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR":e.indexOf(t)>0?"WINNING_LOTTO_NUMBER_HAS_BONUS_BALL_ERROR":t}(a,It,e);if("BONUS_BALL_IS_BLANK_ERROR"===n)return Ce(!0);if("BONUS_BALL_IS_NOT_NUMBER_ERROR"===n)return Fe(!0);if("BONUS_BALL_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR"===n)return we(!0);if("WINNING_LOTTO_NUMBER_HAS_BONUS_BALL_ERROR"===n)return Je(!0);for(var O=new T(new R(Lt.split(",").map((function(e){return Number(e)}))),Number(It)),u=0;u<it.length;u++)r[O.match(it[u])]++;ht(r),gt(!0)}},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"winningLottoInput"},"\uc9c0\ub09c \uc8fc \ub2f9\ucca8\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),n.a.createElement("input",{style:{width:"200px"},id:"winningLottoInput",type:"text",value:Lt,onChange:function(e){vt(e.target.value)}})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"bonusBallInput"},"\ubcf4\ub108\uc2a4 \ubcfc\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),n.a.createElement("input",{id:"bonusBallInput",type:"text",value:It,onChange:function(e){jt(e.target.value)}})),n.a.createElement("button",{type:"submit"},"\uc785\ub825"))),_e&&n.a.createElement("div",{style:{color:"red"}},"\uc785\ub825\ud558\uc9c0 \uc54a\uc740 \ubc88\ud638\uac00 \uc788\uc2b5\ub2c8\ub2e4."),Re&&n.a.createElement("div",{style:{color:"red"}},"\ub2f9\ucca8 \ubc88\ud638\ub294 ",5,"\uac1c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."),Ne&&n.a.createElement("div",{style:{color:"red"}},"\ub2f9\ucca8 \ubc88\ud638\ub294 ",5,"\uac1c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."),se&&n.a.createElement("div",{style:{color:"red"}},"\ub2f9\ucca8 \ubc88\ud638\ub294 \uc22b\uc790\uc640 ,\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."),Ue&&n.a.createElement("div",{style:{color:"red"}},"\ub85c\ub610\ub294 1\ubd80\ud130 ",45," \uc0ac\uc774\uc758 \uc22b\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),Ae&&n.a.createElement("div",{style:{color:"red"}},"\uc911\ubcf5\ub41c \ub85c\ub610 \ubc88\ud638\uac00 \uc788\uc2b5\ub2c8\ub2e4."),pe&&n.a.createElement("div",{style:{color:"blue"}},"\ubcf4\ub108\uc2a4\ubcfc\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),He&&n.a.createElement("div",{style:{color:"blue"}},"\ubcf4\ub108\uc2a4\ubcfc\uc740 \uc22b\uc790\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."),Pe&&n.a.createElement("div",{style:{color:"blue"}},"\ubcf4\ub108\uc2a4\ubcfc\uc740 1\ubd80\ud130 ",45," \uc0ac\uc774\uc758 \uc22b\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),ke&&n.a.createElement("div",{style:{color:"blue"}},"\ubcf4\ub108\uc2a4\ubcfc\uc740 \ub2f9\ucca8 \ubc88\ud638\uc640 \ub2e4\ub978 \uc22b\uc790\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."),yt&&n.a.createElement("div",null,n.a.createElement("div",{style:{marginTop:"20px"}},"\ub2f9\ucca8 \ud1b5\uacc4"),n.a.createElement("div",null,"--------"),n.a.createElement("div",null,"3\uac1c \uc77c\uce58 (5000\uc6d0) - ",Mt.FIFTH),n.a.createElement("div",null,"4\uac1c \uc77c\uce58 (50000\uc6d0) - ",Mt.FOURTH),n.a.createElement("div",null,"5\uac1c \uc77c\uce58 (1500000\uc6d0) - ",Mt.THIRD),n.a.createElement("div",null,"5\uac1c \uc77c\uce58, \ubcf4\ub108\uc2a4\ubcfc \uc77c\uce58 (30000000\uc6d0) - ",Mt.SECOND),n.a.createElement("div",null,"6\uac1c \uc77c\uce58 (2000000000\uc6d0) - ",Mt.FIRST),n.a.createElement("div",null,"\ucd1d \uc218\uc775\ub960\uc740"," ",Math.floor((5e3*Mt.FIFTH+5e4*Mt.FOURTH+15e5*Mt.THIRD+3e7*Mt.SECOND+2e9*Mt.FIRST)/Number(ze)*100),"% \uc785\ub2c8\ub2e4.")))};u.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root"))},9:function(e,t,r){e.exports=r(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.79055ea0.chunk.js.map