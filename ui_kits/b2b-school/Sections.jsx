function Steps({ctx}){
  const t=ctx.t;const [act,setAct]=React.useState(0);const refs=React.useRef([]);
  React.useEffect(()=>{const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)setAct(Number(e.target.dataset.i));});},{rootMargin:'-45% 0px -45% 0px'});refs.current.forEach(el=>el&&io.observe(el));return ()=>io.disconnect();},[ctx.lang]);
  return <section className="steps wrap" data-screen-label="Как проходит обучение">
    <div className="steps-l"><div className="steps-sticky">
      <h2 className="h2 rv">{t.stepsTitle}</h2>
      <div className="steps-num"><span key={act} className="steps-num-in">0{act+1}</span></div>
      <div className="steps-bar">{t.steps.map((s,i)=><span key={i} className={i<=act?'on':''}></span>)}</div>
    </div></div>
    <div className="steps-r">{t.steps.map(([a,b],i)=><div key={i} data-i={i} ref={el=>refs.current[i]=el} className={'step'+(i===act?' on':'')}>
      <div className="step-k">0{i+1} / 0{t.steps.length}</div><h3 className="step-t">{a}</h3><p className="step-d">{b}</p></div>)}</div>
  </section>;
}
function Corporate({ctx}){
  const {GradientBlock,Input,Select,Checkbox,Button,Icon}=window.DesignSystem_a62ddd;const t=ctx.t,f=t.form;
  const blk=React.useRef(),cv=React.useRef();const [mail,setMail]=React.useState('');const [err,setErr]=React.useState('');
  React.useEffect(()=>{const on=()=>{if(!blk.current)return;const r=blk.current.getBoundingClientRect();const p=Math.min(1,Math.max(0,(window.innerHeight-r.top)/(window.innerHeight*.75)));const k=ctx.lv?0:(1-p);blk.current.style.clipPath='inset(0 '+(k*14)+'% 0 '+(k*14)+'%)';};on();window.addEventListener('scroll',on,{passive:true});return ()=>window.removeEventListener('scroll',on);},[ctx.lv]);
  React.useEffect(()=>{if(!window.THREE||ctx.lv||!cv.current)return;const s=window.createNetwork(cv.current);return ()=>s.dispose();},[ctx.lv]);
  const send=e=>{e.preventDefault();if(!/.+@.+\..+/.test(mail)){setErr(f.err);return;}setErr('');setMail('');ctx.notify(t.toastSent,t.toastSentT);};
  return <section id="corporate" className="corp" data-screen-label="Корпоративное обучение"><div className="wrap">
    <div ref={blk} className="corp-blk">
      <GradientBlock tone="green" padding={0} className="corp-in">
        <div className="corp-txt">
          <h2 className="h2 h2-inv rv">{t.corpTitle}</h2>
          <p className="corp-lead rv">{t.corpLead}</p>
          <ul className="corp-list">{t.corpOffers.map((o,i)=><li key={i} className="rv" style={{transitionDelay:i*90+'ms'}}><span className="corp-i">0{i+1}</span>{o}<Icon name="arrow-up-right" size={20}/></li>)}</ul>
        </div>
        <div className="corp-3d">{!ctx.lv&&<canvas ref={cv} aria-label="3D-сеть компаний-партнёров"></canvas>}</div>
      </GradientBlock>
      <form className="corp-form" onSubmit={send}>
        <Input label={f.company} placeholder="ООО «Компания»"/>
        <Input label={f.name} placeholder="Анна Иванова"/>
        <Input label={f.email} placeholder="name@company.ru" value={mail} onChange={e=>setMail(e.target.value)} error={err}/>
        <Select label={f.size} options={f.sizes}/>
        <div className="corp-form-f"><Checkbox label={f.agree} defaultChecked/><Button type="submit" iconRight={<Icon name="send" size={18}/>}>{f.send}</Button></div>
      </form>
    </div>
  </div></section>;
}
function Counter({to,suffix}){
  const ref=React.useRef();const [v,setV]=React.useState(0);
  React.useEffect(()=>{let raf;const io=new IntersectionObserver(es=>{if(!es[0].isIntersecting)return;io.disconnect();const s=performance.now();const step=n=>{const p=Math.min(1,(n-s)/1600);setV(Math.round(to*(1-Math.pow(1-p,3))));if(p<1)raf=requestAnimationFrame(step);};raf=requestAnimationFrame(step);},{threshold:.4});io.observe(ref.current);return ()=>{io.disconnect();cancelAnimationFrame(raf);};},[to]);
  return <span ref={ref}>{v}{suffix}</span>;
}
function About({ctx}){
  const {TriadStripe,ArrowLink}=window.DesignSystem_a62ddd;const t=ctx.t;
  return <section id="about" className="about wrap" data-screen-label="О школе">
    <div className="about-img rv"><div className="about-ph"></div><div className="curtain"></div><TriadStripe height={10}/></div>
    <div className="about-txt">
      <h2 className="h2 rv">{t.aboutTitle}</h2>
      <p className="about-p rv">{t.aboutText}</p>
      <div className="counters">{t.counters.map(([n,s,l],i)=><div key={i} className="cnt rv" style={{transitionDelay:i*100+'ms'}}><div className="cnt-n"><Counter to={n} suffix={s}/></div><div className="cnt-l">{l}</div></div>)}</div>
      <div className="rv"><ArrowLink href="#" inverse={ctx.theme==='dark'} onClick={e=>e.preventDefault()}>{t.orgInfo}</ArrowLink></div>
    </div>
  </section>;
}
Object.assign(window,{Steps,Corporate,About,Counter});
