var B;(function(W){function A(){W.element=document.getElementById("sim"),W.ctx=W.element.getContext("2d");const z=new K;return setInterval(()=>{W.element.width=window.innerWidth,W.element.height=window.innerHeight,z.loop.call(null)}),new Promise((Q)=>{setTimeout(()=>{Q(z)},1)})}W.initialize=A;class K{loop=()=>{}}})(B||(B={}));function U(q,b,A=1){const K=[];for(let z=0;z<q;z++)K.push({x:B.element.width*Math.random(),y:B.element.height*Math.random(),vx:0,vy:0,r:A,c:b});return K}function V(q,b,A){for(let K of q){let z=0,Q=0;for(let m of b){const P=K.x-m.x,Y=K.y-m.y,Z=Math.sqrt(P*P+Y*Y),E=A*(K.r/Z);if(Z>0&&Z<100)z+=E*P,Q+=E*Y}K.vx=(K.vx+z)*0.5,K.vy=(K.vy+Q)*0.5;const $=K.x+K.vx,f=K.y+K.vy;if($<=0||$>=B.element.width)K.vx*=-1;if(f<=0||f>=B.element.height)K.vy*=-1;K.x+=K.vx,K.y+=K.vy}}function X(q){for(let b of q)B.ctx.beginPath(),B.ctx.arc(b.x,b.y,b.r,0,Math.PI*2),B.ctx.fillStyle=b.c,B.ctx.fill(),B.ctx.closePath()}var J;(function(P){P["RED"]="#ff0000";P["ORANGE"]="#ff7f00";P["YELLOW"]="#ffff00";P["GREEN"]="#00ff00";P["BLUE"]="#0000ff";P["CYAN"]="#7fffff";P["MAGENTA"]="#a10c8b";P["PINK"]="#ff00ff";P["WHITE"]="#ffffff"})(J||(J={}));var F=!0;if(F){let q=new Map;window.addEventListener("keydown",(b)=>{if(b.key==" "){const A=prompt("Enter export code:");try{alert(JSON.stringify(Object.fromEntries(q.entries())));const K=JSON.parse(window.atob(A||""));q=new Map(Object.entries(K)),alert(JSON.stringify(Object.fromEntries(q.entries())))}catch{try{const K=JSON.parse(A||"");q=new Map(Object.entries(K))}catch{alert("Invalid export code")}}}else if(b.key=="Escape"){const A=JSON.stringify(Object.fromEntries(q.entries()));prompt("Here is your export code:",btoa(A))}}),B.initialize().then((b)=>{const K=[U(500,J.RED),U(500,J.ORANGE),U(500,J.YELLOW),U(500,J.GREEN),U(500,J.BLUE),U(500,J.CYAN),U(500,J.MAGENTA),U(500,J.PINK),U(500,J.WHITE)];for(let z=0;z<K.length;z++)for(let Q=0;Q<K.length;Q++)q.set(z*Q,Math.random()*2-1);b.loop=()=>{for(let z=0;z<K.length;z++)for(let Q=0;Q<K.length;Q++)V(K[z],K[Q],q.get(z*Q));for(let z of K)X(z)}})}else B.initialize().then((q)=>{const b=U(1000,J.RED),A=U(1000,J.WHITE),K=U(1000,J.BLUE);q.loop=()=>{V(b,K,-10),V(K,b,-10),V(K,A,-10),V(A,K,-10),V(b,A,-10),V(A,b,10),X(b),X(A),X(K)}});
