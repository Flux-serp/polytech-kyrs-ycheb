function SearchOverlay({ctx}){
  const {Icon,Badge}=window.DesignSystem_a62ddd;const t=ctx.t;const [q,setQ]=React.useState('');const inp=React.useRef();
  React.useEffect(()=>{if(ctx.search){setQ('');setTimeout(()=>inp.current&&inp.current.focus(),250);}const k=e=>{if(e.key==='Escape')ctx.closeSearch();};window.addEventListener('keydown',k);return ()=>window.removeEventListener('keydown',k);},[ctx.search]);
  const res=window.B2B.courses.filter(c=>!q||(c.ru+' '+c.en+' '+c.dru).toLowerCase().includes(q.toLowerCase()));
  return <div className={'srch'+(ctx.search?' open':'')} aria-hidden={!ctx.search}>
    <div className="wrap">
      <div className="srch-top"><Icon name="search" size={32}/><input ref={inp} value={q} onChange={e=>setQ(e.target.value)} placeholder={t.search.ph} className="srch-in"/><button type="button" className="ibtn" onClick={ctx.closeSearch} aria-label={t.search.close}><Icon name="x" size={24}/></button></div>
      <div className="srch-res">{res.length?res.map((c,i)=><a key={c.id} href="#courses" className="srch-r" style={{transitionDelay:(ctx.search?120+i*40:0)+'ms'}} onClick={e=>{e.preventDefault();ctx.closeSearch();if(c.page){location.href=c.page;return;}ctx.openCourse?ctx.openCourse(c):(ctx.page||ctx.go)('courses');}}>
        <span className="srch-n">{c.id}</span><span className="srch-t">{c[ctx.lang]}</span><Badge tone={c.tone==='violet'?'violet':c.tone==='orange'?'orange':'green'}>{t.cats[c.cat]}</Badge><Icon name="arrow-right" size={20}/></a>)
        :<div className="srch-empty">{t.search.empty}</div>}</div>
    </div>
  </div>;
}
function CabinetDialog({ctx}){
  const {Dialog,Input,Checkbox,Button}=window.DesignSystem_a62ddd;const c=ctx.t.cab;
  return <Dialog open={ctx.cab} title={c.title} onClose={ctx.closeCab} width={480} footer={<Button fullWidth onClick={()=>{ctx.closeCab();ctx.notify(c.ok);}}>{c.login}</Button>}>
    <div style={{display:'grid',gap:18}}><Input label={c.email} placeholder="name@company.ru"/><Input label={c.pass} type="password" placeholder="••••••••"/><Checkbox label={c.remember} defaultChecked/></div>
  </Dialog>;
}
function CookieBar({ctx}){
  const {Button}=window.DesignSystem_a62ddd;const [show,setShow]=React.useState(false);
  React.useEffect(()=>{if(localStorage.getItem('pt-b2b-cookie'))return;const s=setTimeout(()=>setShow(true),2600);return ()=>clearTimeout(s);},[]);
  if(!show)return null;
  return <div className="cookie"><p>{ctx.t.cookie}<a href="#" onClick={e=>e.preventDefault()}>{ctx.t.policy.toLowerCase()}</a>.</p><Button size="sm" variant="inverse" onClick={()=>{localStorage.setItem('pt-b2b-cookie','1');setShow(false);}}>{ctx.t.cookieOk}</Button></div>;
}
Object.assign(window,{SearchOverlay,CabinetDialog,CookieBar});
