var B;(function(V){function m(){V.element=document.getElementById("sim"),V.ctx=V.element.getContext("2d");const q=new K;return setInterval(()=>{V.element.width=window.innerWidth,V.element.height=window.innerHeight,q.loop.call(null)}),new Promise((z)=>{setTimeout(()=>{z(q)},1)})}V.initialize=m;class K{loop=()=>{}}})(B||(B={}));function J(f,b,m=1){const K=[];for(let q=0;q<f;q++)K.push({x:B.element.width*Math.random(),y:B.element.height*Math.random(),vx:0,vy:0,r:m,c:b});return K}function U(f,b,m){for(let K of f){let q=0,z=0;for(let $ of b){const P=K.x-$.x,X=K.y-$.y,Y=Math.sqrt(P*P+X*X),A=m*(K.r/Y);if(Y>0&&Y<100)q+=A*P,z+=A*X}K.vx=(K.vx+q)*0.5,K.vy=(K.vy+z)*0.5;const Q=K.x+K.vx,Z=K.y+K.vy;if(Q<=0||Q>=B.element.width)K.vx*=-1;if(Z<=0||Z>=B.element.height)K.vy*=-1;K.x+=K.vx,K.y+=K.vy}}function W(f){for(let b of f)B.ctx.beginPath(),B.ctx.arc(b.x,b.y,b.r,0,Math.PI*2),B.ctx.fillStyle=b.c,B.ctx.fill(),B.ctx.closePath()}var E;(function(P){P["RED"]="#ff0000";P["ORANGE"]="#ff7f00";P["YELLOW"]="#ffff00";P["GREEN"]="#00ff00";P["BLUE"]="#0000ff";P["CYAN"]="#7fffff";P["MAGENTA"]="#a10c8b";P["PINK"]="#ff00ff";P["WHITE"]="#ffffff"})(E||(E={}));var F=!0;if(F){let f=new Map;window.addEventListener("keydown",(b)=>{if(b.key==" "){const m=prompt("Enter export code:");try{alert(JSON.stringify(Object.fromEntries(f.entries())));const K=JSON.parse(window.atob(m||""));f=new Map(Object.entries(K)),alert(JSON.stringify(Object.fromEntries(f.entries())))}catch{try{const K=JSON.parse(m||"");f=new Map(Object.entries(K))}catch{alert("Invalid export code")}}}else if(b.key=="Escape"){const m=JSON.stringify(Object.fromEntries(f.entries()));prompt("Here is your export code:",btoa(m))}}),B.initialize().then((b)=>{const m=new URL(location.href).searchParams,K=Number.parseInt(m.get("count")||"500")||500,q=[J(K,E.RED),J(K,E.ORANGE),J(K,E.YELLOW),J(K,E.GREEN),J(K,E.BLUE),J(K,E.CYAN),J(K,E.MAGENTA),J(K,E.PINK),J(K,E.WHITE)];for(let z=0;z<q.length;z++)for(let Q=0;Q<q.length;Q++)f.set(z*Q,Math.random()*2-1);b.loop=()=>{for(let z=0;z<q.length;z++)for(let Q=0;Q<q.length;Q++)U(q[z],q[Q],f.get(z*Q));for(let z of q)W(z)}})}else B.initialize().then((f)=>{const b=J(1000,E.RED),m=J(1000,E.WHITE),K=J(1000,E.BLUE);f.loop=()=>{U(b,K,-10),U(K,b,-10),U(K,m,-10),U(m,K,-10),U(b,m,-10),U(m,b,10),W(b),W(m),W(K)}});
