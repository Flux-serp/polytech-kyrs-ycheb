(function(){
const C={green:0x37b34a,mid:0x56975b,dark:0x244128,violet:0x724897,orange:0xdb4928};
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
const m4=new THREE.Matrix4(),q=new THREE.Quaternion(),e=new THREE.Euler(),v=new THREE.Vector3(),sc=new THREE.Vector3();

// Hero: 5 columns of cubes, height ∝ module hours
window.createTower=function(canvas,hours,onHover){
  const b=base(canvas,32);const {renderer,scene,camera}=b;camera.position.set(0,6,34);camera.lookAt(0,4.5,0);
  scene.add(new THREE.AmbientLight(0xffffff,.6));const d=new THREE.DirectionalLight(0xffffff,.9);d.position.set(10,18,14);scene.add(d);
  const d2=new THREE.DirectionalLight(0xffffff,.3);d2.position.set(-10,-4,-8);scene.add(d2);
  const pal=[C.green,C.mid,C.violet,C.orange,C.dark];const items=[];
  hours.forEach((hh,m)=>{const n=Math.round(hh/2);const x0=(m-(hours.length-1)/2)*2.6;
    for(let y=0;y<n;y++)for(let a=0;a<2;a++)for(let c=0;c<2;c++)items.push({m,x:x0+(a-.5)*1.05,y:y*1.05+.5,z:(c-.5)*1.05});});
  const mesh=new THREE.InstancedMesh(new THREE.BoxGeometry(.92,.92,.92),new THREE.MeshStandardMaterial({roughness:.45,metalness:.05}),items.length);
  const col=new THREE.Color();
  items.forEach((it,k)=>{col.setHex(pal[it.m]);mesh.setColorAt(k,col);it.sx=(Math.random()-.5)*60;it.sy=20+Math.random()*30;it.sz=(Math.random()-.5)*30;it.dl=.2+it.m*.18+it.y*.03+Math.random()*.25;});
  const g=new THREE.Group();g.add(mesh);scene.add(g);
  const ray=new THREE.Raycaster(),ptr=new THREE.Vector2();let tx=0,ty=0,mx=0,my=0,inside=false,hov=-1,start=null,raf;const lift=hours.map(()=>0);
  const onMove=ev=>{const r=canvas.getBoundingClientRect();tx=((ev.clientX-r.left)/r.width)*2-1;ty=((ev.clientY-r.top)/r.height)*2-1;inside=Math.abs(tx)<1&&Math.abs(ty)<1;ptr.set(tx,-ty);};
  window.addEventListener('pointermove',onMove,{passive:true});
  function frame(now){raf=requestAnimationFrame(frame);if(!b.isVis())return;if(start===null)start=now;const t=(now-start)/1000;
    mx+=(Math.max(-1,Math.min(1,tx))-mx)*.05;my+=(Math.max(-1,Math.min(1,ty))-my)*.05;
    g.rotation.y=-.5+Math.sin(t*.25)*.25+mx*.5;g.rotation.x=.12+my*.08;
    let h=-1;if(inside&&t>2){ray.setFromCamera(ptr,camera);const hit=ray.intersectObject(mesh)[0];if(hit&&hit.instanceId!=null)h=items[hit.instanceId].m;}
    if(h!==hov){hov=h;onHover&&onHover(h);}
    lift.forEach((l,i)=>lift[i]+=((i===hov?1:0)-l)*.12);
    for(let k=0;k<items.length;k++){const it=items[k];const p=ease(Math.min(1,Math.max(0,(t-it.dl)/1.4)));const L=lift[it.m];
      v.set(it.sx+(it.x-it.sx)*p,it.sy+(it.y*(1+L*.12)+L*.6+Math.sin(t*1.4+it.m+it.y*.3)*.05-it.sy)*p,it.sz+(it.z-it.sz)*p);
      e.set((1-p)*2.5,(1-p)*3,0);q.setFromEuler(e);const s=1-L*.08;sc.set(s,s,s);m4.compose(v,q,sc);mesh.setMatrixAt(k,m4);}
    mesh.instanceMatrix.needsUpdate=true;renderer.render(scene,camera);}
  raf=requestAnimationFrame(frame);
  return {dispose(){cancelAnimationFrame(raf);window.removeEventListener('pointermove',onMove);b.stop();}};
};

// Small white objects for "what to expect" tiles
window.createMini=function(canvas,kind){
  const b=base(canvas,35);const {renderer,scene,camera}=b;camera.position.set(0,0,12);
  scene.add(new THREE.AmbientLight(0xffffff,.78));const d=new THREE.DirectionalLight(0xffffff,.7);d.position.set(5,8,9);scene.add(d);
  const W=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.5});
  const LW=new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.55});
  const g=new THREE.Group();scene.add(g);let tick=()=>{};
  if(kind==='deals'){const n=7;const ps=[];for(let i=0;i<n;i++){const m=new THREE.Mesh(new THREE.BoxGeometry(3.2,.22,4.2),W);g.add(m);ps.push(m);}
    tick=t=>ps.forEach((m,i)=>{const k=(Math.sin(t*1.2-i*.5)+1)/2;m.position.y=(i-n/2)*.42+k*.25;m.rotation.y=i*.08+k*.25;m.position.x=k*.3;});g.rotation.x=.5;}
  else if(kind==='experts'){const o=new THREE.Mesh(new THREE.IcosahedronGeometry(2.9,0),W);o.material=W.clone();o.material.wireframe=true;const i=new THREE.Mesh(new THREE.IcosahedronGeometry(1.5,0),W);g.add(o,i);
    tick=t=>{o.rotation.set(t*.3,t*.4,0);i.rotation.set(-t*.6,-t*.5,0);};}
  else if(kind==='ai'){const N=420,pos=new Float32Array(N*3);for(let k=0;k<N;k++){const y=1-2*(k+.5)/N,r=Math.sqrt(1-y*y),th=k*2.39996;pos.set([Math.cos(th)*r*3,y*3,Math.sin(th)*r*3],k*3);}
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3));const base0=pos.slice();
    const pts=new THREE.Points(geo,new THREE.PointsMaterial({color:0xffffff,size:.11}));const core=new THREE.Mesh(new THREE.BoxGeometry(1.1,1.1,1.1),W);g.add(pts,core);
    tick=t=>{for(let k=0;k<N;k++){const f=1+Math.sin(t*2+base0[k*3+1]*1.6)*.07;pos[k*3]=base0[k*3]*f;pos[k*3+1]=base0[k*3+1]*f;pos[k*3+2]=base0[k*3+2]*f;}geo.attributes.position.needsUpdate=true;pts.rotation.y=t*.3;core.rotation.set(t*.7,t*.9,0);};}
  else if(kind==='map'){const n=6,cs=[];for(let a=0;a<n;a++)for(let c=0;c<n;c++){const m=new THREE.Mesh(new THREE.BoxGeometry(.72,.72,.72),W);m.userData={a:a-(n-1)/2,c:c-(n-1)/2};g.add(m);cs.push(m);}
    g.rotation.set(.75,.6,0);tick=t=>cs.forEach(m=>{const {a,c}=m.userData;m.position.set(a*.92,Math.sin(t*2-Math.hypot(a,c)*.9)*.45,c*.92);});}
  else if(kind==='network'){const P=14,pts=[];for(let k=0;k<P;k++){const y=1-2*(k+.5)/P,r=Math.sqrt(1-y*y),th=k*2.39996;pts.push(new THREE.Vector3(Math.cos(th)*r*3,y*3,Math.sin(th)*r*3));}
    pts.forEach(p=>{const m=new THREE.Mesh(new THREE.BoxGeometry(.42,.42,.42),W);m.position.copy(p);g.add(m);});
    const ar=[];pts.forEach((p,i)=>pts.forEach((o,j)=>{if(i<j&&p.distanceTo(o)<3.1)ar.push(p.x,p.y,p.z,o.x,o.y,o.z);}));
    const lg=new THREE.BufferGeometry();lg.setAttribute('position',new THREE.BufferAttribute(new Float32Array(ar),3));g.add(new THREE.LineSegments(lg,LW));
    tick=t=>{g.rotation.set(Math.sin(t*.4)*.3,t*.35,0);};}
  else if(kind==='growth'){const n=6,bs=[];for(let i=0;i<n;i++){const m=new THREE.Mesh(new THREE.BoxGeometry(.8,1,.8),W);m.position.x=(i-(n-1)/2)*1.05;g.add(m);bs.push(m);}
    g.rotation.set(.35,-.5,0);tick=t=>bs.forEach((m,i)=>{const p=Math.min(1,Math.max(0,((t%5)-i*.18)/1.2));const h=.4+(i+1)*.75*ease(p);m.scale.y=h;m.position.y=h/2-2.4;});}
  let hover=0,hv=0,start=null,raf;const enter=()=>hover=1,leave=()=>hover=0;
  const host=canvas.closest('[data-mini-host]')||canvas;host.addEventListener('pointerenter',enter);host.addEventListener('pointerleave',leave);
  let tt=0,last=null;
  function frame(now){raf=requestAnimationFrame(frame);if(!b.isVis()){last=now;return;}const dt=last===null?0:Math.min(.05,(now-last)/1000);last=now;hv+=(hover-hv)*.08;tt+=dt*(1+hv*1.6);
    g.scale.setScalar(1+hv*.08);tick(tt);renderer.render(scene,camera);}
  raf=requestAnimationFrame(frame);
  return {dispose(){cancelAnimationFrame(raf);host.removeEventListener('pointerenter',enter);host.removeEventListener('pointerleave',leave);b.stop();}};
};
})();
