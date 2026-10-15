(function(root){
 'use strict';
 const clamp=(n,a,b)=>Math.max(a,Math.min(b,Number.isFinite(n)?n:a));
 function homography(p){const [p0,p1,p2,p3]=p,dx1=p1[0]-p2[0],dx2=p3[0]-p2[0],dx3=p0[0]-p1[0]+p2[0]-p3[0],dy1=p1[1]-p2[1],dy2=p3[1]-p2[1],dy3=p0[1]-p1[1]+p2[1]-p3[1];let g=0,h=0;const den=dx1*dy2-dx2*dy1;if(Math.abs(dx3)+Math.abs(dy3)>.000001){if(Math.abs(den)<.000001)throw Error('Degenerate artwork plane');g=(dx3*dy2-dx2*dy3)/den;h=(dx1*dy3-dx3*dy1)/den}return[p1[0]-p0[0]+g*p1[0],p3[0]-p0[0]+h*p3[0],p0[0],p1[1]-p0[1]+g*p1[1],p3[1]-p0[1]+h*p3[1],p0[1],g,h]}
 function project(m,u,v){const d=m[6]*u+m[7]*v+1;return[(m[0]*u+m[1]*v+m[2])/d,(m[3]*u+m[4]*v+m[5])/d]}
 function fitQuad(quad,basis,ratio){const m=homography(quad),w=ratio<basis?ratio/basis:1,h=ratio>basis?basis/ratio:1,x=(1-w)/2,y=(1-h)/2;return[[x,y],[x+w,y],[x+w,y+h],[x,y+h]].map(p=>project(m,...p))}
 function cssMatrix(quad,w,h){const m=homography(quad);return[m[0]/w,m[3]/w,0,m[6]/w,m[1]/h,m[4]/h,0,m[7]/h,0,0,1,0,m[2],m[5],0,1]}
 function camera(width,height,zoom=1){const scale=Math.max(width/1672,height/941)*1.015*zoom;return{scale,maxX:Math.max(0,(1672*scale-width)/2),maxY:Math.max(0,(941*scale-height)/2)}}
 const normalize=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 function filterWorks(works,{query='',room='all',kind='all',savedOnly=false,saved=[]}={}){const q=normalize(query).trim(),set=new Set(saved);return works.filter(w=>(room==='all'||w.room===room||w.room==='shared')&&(kind==='all'||w.kind===kind)&&(!savedOnly||set.has(w.id))&&(!q||normalize([w.title,w.artist,w.year,w.medium,...(w.tags||[])].join(' ')).includes(q)))}
 function parseRoute(hash,rooms,works){let parts;try{parts=decodeURIComponent(hash.replace(/^#/,'' )).split('/')}catch(_){return{view:'home'}}if(parts[0]==='sala'&&rooms.some(r=>r.id===parts[1]))return{view:'room',room:parts[1]};if(parts[0]==='obra'&&works.some(w=>w.id===parts[1]))return{view:'work',id:parts[1]};if(parts[0]==='coleccion')return{view:'catalog'};return{view:'home'}}
 function savedIds(value,works){try{const a=JSON.parse(value);return Array.isArray(a)?[...new Set(a.filter(id=>works.some(w=>w.id===id)))]:[]}catch(_){return[]}}
 root.STILL_MATH={clamp,homography,project,fitQuad,cssMatrix,camera,normalize,filterWorks,parseRoute,savedIds};
})(globalThis);
