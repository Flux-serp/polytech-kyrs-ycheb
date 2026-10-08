function TiltCard({c,ctx,onOpen,style}){
  const {GradientBlock,Badge,ArrowLink}=window.DesignSystem_a62ddd;const t=ctx.t;const ref=React.useRef();
  const move=e=>{if(ctx.lv)return;const r=ref.current.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;ref.current.style.transform='perspective(900px) rotateY('+(x*10)+'deg) rotateX('+(-y*10)+'deg) translateZ(0)';ref.current.style.setProperty('--gx',(50+x*60)+'%');};
  const leave=()=>{ref.current.style.transform='';};
  return <article ref={ref} className="ccard" style={style} onMouseMove={move} onMouseLeave={leave}>
    <GradientBlock tone={c.tone} padding={24} className="ccard-top">
      <div className="ccard-n">{c.id}</div>
      <div className="ccard-w">{c.hours?<><b>{c.hours}</b> {ctx.lang==='ru'?'ак. ч':'hrs'}</>:<><b>{c.weeks}</b> {t.weeks}</>}</div>
    </GradientBlock>
    <div className="ccard-b">
      <div className="ccard-meta"><Badge tone="light">{t.formats[c.format]}</Badge>{c.flagship&&<Badge tone="green">{ctx.lang==='ru'?'Флагман':'Flagship'}</Badge>}<span className="ccard-cat">{t.cats[c.cat]}</span></div>
      <h3 className="ccard-t">{c[ctx.lang]}</h3>
      <p className="ccard-d">{ctx.lang==='ru'?c.dru:c.den}</p>
      <div className="ccard-f"><span>{t.start} <b>{c.start}</b></span><ArrowLink href={c.page||'#'} inverse={ctx.theme==='dark'} onClick={e=>{if(c.page)return;e.preventDefault();onOpen&&onOpen(c);}}>{t.more}</ArrowLink></div>
    </div>
  </article>;
}
function Courses({ctx}){
  const {Tag,ArrowLink}=window.DesignSystem_a62ddd;const t=ctx.t;
  const [cat,setCat]=React.useState('all');
  const list=window.B2B.courses.filter(c=>cat==='all'||c.cat===cat);
  const sec=React.useRef(),track=React.useRef(),fill=React.useRef();const [h,setH]=React.useState(null);
  React.useLayoutEffect(()=>{const calc=()=>{if(window.innerWidth<=900||!track.current){setH(null);return;}const extra=Math.max(0,track.current.scrollWidth-track.current.parentElement.clientWidth);setH(window.innerHeight+extra);};calc();window.addEventListener('resize',calc);return ()=>window.removeEventListener('resize',calc);},[list.length,ctx.lang,ctx.lv]);
  React.useEffect(()=>{const on=()=>{if(!sec.current||!track.current)return;if(window.innerWidth<=900){track.current.style.transform='';return;}const r=sec.current.getBoundingClientRect();const max=sec.current.offsetHeight-window.innerHeight;const p=max>0?Math.min(1,Math.max(0,-r.top/max)):0;const ex=Math.max(0,track.current.scrollWidth-track.current.parentElement.clientWidth);track.current.style.transform='translate3d('+(-p*ex)+'px,0,0)';if(fill.current)fill.current.style.transform='scaleX('+p+')';};on();window.addEventListener('scroll',on,{passive:true});return ()=>window.removeEventListener('scroll',on);},[h]);
  const choose=k=>{setCat(k);const y=sec.current.getBoundingClientRect().top+window.scrollY-70;if(window.scrollY>y)window.scrollTo({top:y});};
  return <section id="courses" ref={sec} className="courses" style={{height:h?h+'px':'auto'}} data-screen-label="Все курсы">
    <div className="courses-pin">
      <div className="wrap courses-head">
        <h2 className="h2 rv"><span className="h2-n">{String(list.length).padStart(2,'0')}</span>{t.nav.courses}</h2>
        <div className="tags rv">{Object.keys(t.cats).map(k=><Tag key={k} selected={cat===k} onClick={()=>choose(k)}>{t.cats[k]}</Tag>)}</div>
      </div>
      <div className="wrap courses-vp"><div ref={track} className="track">{list.map(c=><TiltCard key={c.id} c={c} ctx={ctx}/>)}</div></div>
      <div className="wrap courses-foot"><div className="prog"><div ref={fill} className="prog-f"></div></div><span className="courses-hint">{t.scrollHint}</span><ArrowLink href="courses.html" inverse={ctx.theme==='dark'}>{ctx.lang==='ru'?'Каталог курсов':'Course catalogue'}</ArrowLink></div>
    </div>
  </section>;
}
Object.assign(window,{Courses,TiltCard});
