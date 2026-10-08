(function(){
const C={green:0x37b34a,mid:0x56975b,dark:0x244128,violet:0x724897,vdark:0x373062,orange:0xdb4928,olight:0xf39869};
function base(canvas,fov){
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1));
  const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(fov,1,0.1,300);
  const fit=()=>{const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();};
  const ro=new ResizeObserver(fit);ro.observe(canvas);fit();
  let vis=true;const io=new IntersectionObserver(e=>{vis=e[0].isIntersecting});io.observe(canvas);
  return {renderer,scene,camera,isVis:()=>vis,stop(){ro.disconnect();io.disconnect();renderer.dispose();}};
}
const ease=x=>1-Math.pow(1-x,3);

// Hero: a sales funnel built from square brand blocks
window.createFunnel=function(canvas){
  const b=base(canvas,30);const {renderer,scene,camera}=b;
  camera.position.set(0,3,40);camera.lookAt(0,0,0);
  scene.add(new THREE.AmbientLight(0xffffff,.62));
  const d1=new THREE.DirectionalLight(0xffffff,.95);d1.position.set(8,16,12);scene.add(d1);
  const d2=new THREE.DirectionalLight(0xffffff,.28);d2.position.set(-12,-6,-8);scene.add(d2);
  const L=7,items=[];
  const pal=[[C.green,C.mid],[C.green,C.green,C.mid],[C.mid,C.green],[C.mid,C.dark],[C.violet,C.vdark],[C.vdark,C.violet],[C.orange,C.olight],[C.olight]];
  for(let i=0;i<=L;i++){const n=L-i,y=(L/2-i)*1.18;
    if(!n){items.push({x:0,y,z:0,l:i});continue;}
    for(let a=-n;a<=n;a++)for(let c=-n;c<=n;c++){if(Math.abs(a)!==n&&Math.abs(c)!==n)continue;items.push({x:a,y,z:c,l:i});}}
  const mesh=new THREE.InstancedMesh(new THREE.BoxGeometry(.84,.84,.84),new THREE.MeshStandardMaterial({roughness:.48,metalness:.06}),items.length);
  const col=new THREE.Color();
  items.forEach((it,k)=>{const p=pal[it.l];col.setHex(p[k%p.length]);mesh.setColorAt(k,col);
    it.sx=(Math.random()-.5)*70;it.sy=(Math.random()-.5)*44;it.sz=(Math.random()-.5)*40;it.lift=0;it.ang=Math.atan2(it.z,it.x);it.dl=.15+Math.random()*.5+it.l*.07;});
  const g=new THREE.Group();g.add(mesh);scene.add(g);
  const m4=new THREE.Matrix4(),q=new THREE.Quaternion(),e=new THREE.Euler(),v=new THREE.Vector3(),s1=new THREE.Vector3(1,1,1);
  const ray=new THREE.Raycaster(),ptr=new THREE.Vector2();
  let mx=0,my=0,tx=0,ty=0,scroll=0,inside=false,start=null,raf;
  const onMove=ev=>{const r=canvas.getBoundingClientRect();tx=((ev.clientX-r.left)/r.width)*2-1;ty=((ev.clientY-r.top)/r.height)*2-1;inside=Math.abs(tx)<1&&Math.abs(ty)<1;ptr.set(tx,-ty);};
  window.addEventListener('pointermove',onMove,{passive:true});
  function frame(now){raf=requestAnimationFrame(frame);if(!b.isVis())return;if(start===null)start=now;const t=(now-start)/1000;
    mx+=(Math.max(-1,Math.min(1,tx))-mx)*.05;my+=(Math.max(-1,Math.min(1,ty))-my)*.05;
    g.rotation.y=t*.16+mx*.55;g.rotation.x=.4+my*.12+scroll*.55;g.position.y=-scroll*4;
    if(inside){ray.setFromCamera(ptr,camera);const h=ray.intersectObject(mesh)[0];if(h&&h.instanceId!=null){items[h.instanceId].lift=1;}}
    for(let k=0;k<items.length;k++){const it=items[k];const p=ease(Math.min(1,Math.max(0,(t-it.dl)/1.7)));it.lift*=.955;
      const w=Math.sin(t*1.5+it.ang*2+it.l*.7)*.16,o=1+it.lift*.22;
      v.set(it.sx+(it.x*o-it.sx)*p,it.sy+(it.y+w+it.lift*.9-it.sy)*p,it.sz+(it.z*o-it.sz)*p);
      e.set((1-p)*3+it.lift*.5,(1-p)*2.4,0);q.setFromEuler(e);m4.compose(v,q,s1);mesh.setMatrixAt(k,m4);}
    mesh.instanceMatrix.needsUpdate=true;renderer.render(scene,camera);}
  raf=requestAnimationFrame(frame);
  return {setScroll(p){scroll=p},dispose(){cancelAnimationFrame(raf);window.removeEventListener('pointermove',onMove);b.stop();}};
};

// Corporate: white network of companies (only white graphics on brand blocks)
window.createNetwork=function(canvas){
  const b=base(canvas,40);const {renderer,scene,camera}=b;camera.position.set(0,0,30);
  const N=54,pts=[];
  for(let i=0;i<N;i++){const u=Math.random()*2-1,th=Math.random()*Math.PI*2,r=7+Math.random()*4.5,s=Math.sqrt(1-u*u);pts.push(new THREE.Vector3(r*s*Math.cos(th),r*u*.8,r*s*Math.sin(th)));}
  const nodes=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:0xffffff}),N);
  const m4=new THREE.Matrix4(),q=new THREE.Quaternion(),sc=new THREE.Vector3();
  pts.forEach((p,i)=>{const s=i%9===0?.7:.32;sc.set(s,s,s);m4.compose(p,q,sc);nodes.setMatrixAt(i,m4);});
  const edges=[];pts.forEach((p,i)=>{pts.map((o,j)=>[j,p.distanceTo(o)]).filter(x=>x[0]!==i).sort((a,b)=>a[1]-b[1]).slice(0,3).forEach(([j])=>{if(i<j)edges.push([i,j]);});});
  const pos=new Float32Array(edges.length*6);edges.forEach(([i,j],k)=>{pos.set([pts[i].x,pts[i].y,pts[i].z,pts[j].x,pts[j].y,pts[j].z],k*6);});
  const lg=new THREE.BufferGeometry();lg.setAttribute('position',new THREE.BufferAttribute(pos,3));
  const lines=new THREE.LineSegments(lg,new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.32}));
  const P=16,packets=new THREE.InstancedMesh(new THREE.BoxGeometry(.22,.22,.22),new THREE.MeshBasicMaterial({color:0xffffff}),P);
  const pk=[...Array(P)].map(()=>({e:Math.floor(Math.random()*edges.length),t:Math.random(),sp:.25+Math.random()*.5}));
  const g=new THREE.Group();g.add(nodes,lines,packets);scene.add(g);
  let mx=0,tx=0,my=0,ty=0,raf,last=null;const v=new THREE.Vector3(),one=new THREE.Vector3(1,1,1);
  const onMove=ev=>{tx=ev.clientX/window.innerWidth*2-1;ty=ev.clientY/window.innerHeight*2-1;};
  window.addEventListener('pointermove',onMove,{passive:true});
  function frame(now){raf=requestAnimationFrame(frame);if(!b.isVis()){last=now;return;}const dt=last===null?0:Math.min(.05,(now-last)/1000);last=now;
    mx+=(tx-mx)*.04;my+=(ty-my)*.04;g.rotation.y+=dt*.12;g.rotation.x=my*.25;g.position.x=mx*1.2;
    pk.forEach((p,i)=>{p.t+=dt*p.sp;if(p.t>1){p.t=0;p.e=Math.floor(Math.random()*edges.length);}const [a,c]=edges[p.e];v.lerpVectors(pts[a],pts[c],p.t);m4.compose(v,q,one);packets.setMatrixAt(i,m4);});
    packets.instanceMatrix.needsUpdate=true;renderer.render(scene,camera);}
  raf=requestAnimationFrame(frame);
  return {dispose(){cancelAnimationFrame(raf);window.removeEventListener('pointermove',onMove);b.stop();}};
};
})();
