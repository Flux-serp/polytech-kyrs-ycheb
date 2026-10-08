function CHero({ctx}){
  const {Badge,TriadStripe}=window.DesignSystem_a62ddd;const K=window.B2B_COURSE;const cv=React.useRef();const [hov,setHov]=React.useState(-1);
  React.useEffect(()=>{if(!window.THREE||ctx.lv||!cv.current)return;const s=window.createTower(cv.current,K.modules.map(m=>m.h),setHov);return ()=>s.dispose();},[ctx.lv]);
  const tw=s=>s.split(/(\{B2B\})/).map((p,i)=>p==='{B2B}'?<b key={i} className="h-block">B2B</b>:p);
  return <section className="ch wrap" data-screen-label="Курс — первый экран">
    <div className="ch-l">
      <nav className="crumbs"><a href="index.html">Главная</a><span>/</span><a href="courses.html">Все курсы</a><span>/</span><span>Комплексная программа</span></nav>
      <div className="ch-badges"><Badge tone="green">Флагман</Badge><Badge tone="light">Набор открыт</Badge></div>
      <h1 className="h-hero ch-h1">{K.title.map((l,i)=><span key={i} className="ln"><span style={{transitionDelay:i*.12+'s'}}>{tw(l)}</span></span>)}</h1>
      <p className="ch-sub"><span className="sq"></span>{K.sub}</p>
      <p className="lead">{K.lead}</p>
    </div>
    <div className="ch-r">
      {!ctx.lv&&<canvas ref={cv} aria-label="3D-модель: модули программы, высота столбца — число часов"></canvas>}
      <div className={'ch-tip'+(hov>=0?' on':'')}>{hov>=0&&<><b>Модуль {hov+1} · {K.modules[hov].h} ч</b><span>{K.modules[hov].t}</span></>}</div>
      <div className="hint ch-hint">Наведите на столбец модуля</div>
    </div>
    <div className="ch-facts">
      {K.facts.map(([k,a,b],i)=><div key={i} className="ch-fact rv" style={{transitionDelay:i*90+'ms'}}><span className="ch-fact-k">{k}</span><span className={'ch-fact-a'+(i===1?' big':'')}>{i===1?<>≈<Counter to={70}/></>:a}</span><span className="ch-fact-b">{b}</span></div>)}
    </div>
    <TriadStripe height={6} style={{gridColumn:'1/-1'}}/>
  </section>;
}

function CSubNav({ctx}){
  const {Button,Icon}=window.DesignSystem_a62ddd;const K=window.B2B_COURSE;const [act,setAct]=React.useState('');const fill=React.useRef();
  React.useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setAct(e.target.id);}),{rootMargin:'-40% 0px -55% 0px'});
    K.nav.forEach(([id])=>{const el=document.getElementById(id);el&&io.observe(el);});
    const on=()=>{const h=document.documentElement.scrollHeight-innerHeight;if(fill.current)fill.current.style.transform='scaleX('+(h>0?scrollY/h:0)+')';};on();addEventListener('scroll',on,{passive:true});
    return ()=>{io.disconnect();removeEventListener('scroll',on);};},[]);
  const jump=id=>{const el=document.getElementById(id);if(!el)return;scrollTo({top:el.getBoundingClientRect().top+scrollY-130,behavior:ctx.lv?'auto':'smooth'});};
  return <div className="csn"><div className="wrap csn-in">
    <div className="csn-l">{K.nav.map(([id,l],i)=><button key={id} type="button" className={'csn-a'+(act===id?' on':'')} onClick={()=>jump(id)}><span>0{i+1}</span>{l}</button>)}</div>
    <Button size="sm" onClick={()=>jump('apply')} iconRight={<Icon name="arrow-down-right" size={16}/>}>Записаться</Button>
  </div><div className="csn-p"><div ref={fill}></div></div></div>;
}

function CFormat({ctx}){
  const K=window.B2B_COURSE;const [h,setH]=React.useState(-1);
  return <section id="format" className="cfm wrap" data-screen-label="Формат обучения">
    <div className="sec-head"><h2 className="h2 rv">Как устроено<br/>обучение</h2><p className="sec-lead rv">Условный вариант реализации программы.</p></div>
    <div className="cfm-grid">{K.spec.map(([a,b],i)=><div key={i} className={'cfm-i rv'+(h===i?' on':'')} style={{transitionDelay:(i%3)*70+'ms'}} onMouseEnter={()=>setH(i)} onMouseLeave={()=>setH(-1)}>
      <span className="cfm-n">{String(i+1).padStart(2,'0')}</span><span className="cfm-k">{a}</span><span className="cfm-v">{b}</span></div>)}</div>
  </section>;
}
function CProgram({ctx}){
  const {Icon}=window.DesignSystem_a62ddd;const K=window.B2B_COURSE;const [open,setOpen]=React.useState(0);const [hov,setHov]=React.useState(-1);
  const tones=['var(--pt-green)','#56975b','var(--pt-violet)','var(--pt-orange)','var(--pt-green-dark)'];const total=K.modules.reduce((s,m)=>s+m.h,0);const a=hov>=0?hov:open;
  return <section id="program" className="cp wrap" data-screen-label="Программа курса">
    <div className="cp-l"><div className="cp-sticky">
      <h2 className="h2 rv">Программа курса</h2>
      <p className="cp-note rv">Обучение проходит последовательно, модуль за модулем: 8 недель + 2 недели в защиту и догоняющие задания. Нагрузка — около 70 часов.</p>
      <div className="cp-total rv"><span key={a} className="cp-total-n">{K.modules[a].h}</span><span className="cp-total-l">часов<br/>в модуле {a+1}<br/><em>из {total}</em></span></div>
      <div className="cp-bar rv">{K.modules.map((m,i)=><span key={i} style={{flexGrow:m.h,background:tones[i],opacity:i===a?1:.28}} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(-1)} onClick={()=>setOpen(i)}></span>)}</div>
    </div></div>
    <div className="cp-r">{K.modules.map((m,i)=><div key={i} className={'cpm rv'+(open===i?' open':'')} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(-1)}>
      <button type="button" className="cpm-h" aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}>
        <span className="cpm-n" style={{color:tones[i]}}>{String(i+1).padStart(2,'0')}</span>
        <span className="cpm-t">{m.t}</span>
        <span className="cpm-hrs"><b>{m.h}</b> ч</span>
        <span className="cpm-ic"><Icon name="chevron-down" size={22}/></span>
      </button>
      <div className="cpm-b"><div><div className="cpm-meter"><span style={{width:(m.h/20*100)+'%',background:tones[i]}}></span></div>
        <ul className="cpm-list">{m.d.replace(/\.$/,'').split('; ').map((x,j)=><li key={j} style={{transitionDelay:(open===i?j*60:0)+'ms'}}>{x}</li>)}</ul></div></div>
    </div>)}</div>
  </section>;
}

function CStages({ctx}){
  const K=window.B2B_COURSE;const sec=React.useRef();const [p,setP]=React.useState(0);
  React.useEffect(()=>{const on=()=>{if(!sec.current)return;const r=sec.current.getBoundingClientRect();setP(Math.min(1,Math.max(0,(innerHeight*.75-r.top)/(r.height*.8))));};on();addEventListener('scroll',on,{passive:true});return ()=>removeEventListener('scroll',on);},[]);
  const n=K.stages.length;
  return <section id="stages" ref={sec} className="cs wrap" data-screen-label="Этапы программы">
    <h2 className="h2 rv">Этапы программы</h2>
    <div className="cs-line"><div className="cs-fill" style={{transform:'scaleX('+(ctx.lv?1:p)+')'}}></div></div>
    <div className="cs-grid">{K.stages.map(([t,d,w],i)=>{const on=ctx.lv||p>=i/(n-.6);return <div key={i} className={'cs-i'+(on?' on':'')}>
      <span className="cs-dot"></span><span className="cs-k">Этап 0{i+1} · {w}</span><h3 className="cs-t">{t}</h3><p className="cs-d">{d}</p></div>;})}</div>
  </section>;
}
Object.assign(window,{CFormat,CHero,CSubNav,CProgram,CStages});
