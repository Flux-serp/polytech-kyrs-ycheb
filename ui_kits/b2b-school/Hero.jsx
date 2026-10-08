function Decode({text,delay=900}){
  const [out,setOut]=React.useState(text.replace(/\S/g,'·'));
  React.useEffect(()=>{const chars='01π/#<>+=';let f=0,id;const total=text.length;
    const run=()=>{f++;const done=Math.floor(f*1.2);setOut(text.split('').map((c,i)=>c===' '?' ':i<done?c:chars[(i+f)%chars.length]).join(''));if(done<total)id=setTimeout(run,28);};
    const s=setTimeout(run,delay);return ()=>{clearTimeout(s);clearTimeout(id);};},[text]);
  return <span>{out}</span>;
}
function HeroTitle({lines}){
  return <h1 className="h-hero">{lines.map((l,i)=>{const parts=l.split('{B2B}');return <span key={l+i} className="ln"><span style={{transitionDelay:(i*110)+'ms'}}>{parts.length>1?<>{parts[0]}<b className="h-block">B2B</b>{parts[1]}</>:l}</span></span>;})}</h1>;
}
function Hero({ctx}){
  const {Button,Icon,GradientBlock}=window.DesignSystem_a62ddd;const t=ctx.t;
  const cv=React.useRef(),txt=React.useRef();
  React.useEffect(()=>{if(!window.THREE||ctx.lv)return;const s=window.createFunnel(cv.current);
    const on=()=>{const p=Math.min(1,window.scrollY/window.innerHeight);s.setScroll(p);if(txt.current){txt.current.style.transform='translateY('+(-p*90)+'px)';txt.current.style.opacity=String(1-p*1.1);}};
    on();window.addEventListener('scroll',on,{passive:true});return ()=>{s.dispose();window.removeEventListener('scroll',on);};},[ctx.lv]);
  const pi=window.B2B.PI;
  return <section id="home" className="hero" data-screen-label="Главная">
    <div className="pi-tex" aria-hidden="true">{(pi+pi+pi).split('').join(' ')}</div>
    {!ctx.lv&&<canvas ref={cv} className="hero-cv" aria-label="3D-модель воронки продаж из фирменных блоков"></canvas>}
    <div className="wrap hero-in" ref={txt}>
      <div className="eyebrow"><span className="sq"></span><Decode key={ctx.lang} text={t.eyebrow}/></div>
      <HeroTitle key={ctx.lang} lines={t.h1}/>
      <p className="lead">{t.lead}</p>
      <div className="row">
        <Button size="lg" onClick={()=>ctx.go('courses')} iconRight={<Icon name="arrow-down-right" size={20}/>}>{t.pick}</Button>
        <Button size="lg" variant={ctx.theme==='dark'?'inverse':'outline'} onClick={()=>(ctx.page||ctx.go)('corporate')}>{t.nav.corporate}</Button>
      </div>
      {!ctx.lv&&<div className="hint"><Icon name="mouse-pointer-2" size={14}/>{t.hint}</div>}
    </div>
    <div className="wrap facts-wrap"><div className="facts">
      {t.facts.map(([a,b],i)=>i===0?<GradientBlock key={i} tone="orange" padding="20px 24px" className="fact fact-hot"><div className="fact-s">{a}</div><div className="fact-big">{b}</div></GradientBlock>
        :<div key={i} className="fact"><div className="fact-a">{a}</div><div className="fact-s">{b}</div></div>)}
    </div></div>
  </section>;
}
function Marquee({ctx}){
  const items=ctx.t.marquee;const row=<div className="mq-row">{items.map((m,i)=><span key={i} className="mq-i"><span className="mq-sq" style={{background:['var(--pt-green)','var(--pt-violet)','var(--pt-orange)'][i%3]}}></span>{m}</span>)}</div>;
  return <div className="mq" aria-hidden="true"><div className="mq-track">{row}{row}</div></div>;
}
Object.assign(window,{Hero,Marquee,Decode});
