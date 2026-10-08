function MiniTile({k,t,d,i,ctx}){
  const {GradientBlock}=window.DesignSystem_a62ddd;const cv=React.useRef(),host=React.useRef();
  const tones=['green','violet','orange','greenDark','violet','green'];
  React.useEffect(()=>{if(!window.THREE||ctx.lv||!cv.current)return;let s;const io=new IntersectionObserver(es=>{if(es[0].isIntersecting&&!s){s=window.createMini(cv.current,k);io.disconnect();}},{rootMargin:'200px'});io.observe(cv.current);return ()=>{io.disconnect();s&&s.dispose();};},[ctx.lv]);
  return <article ref={host} data-mini-host="" className="ce-i rv" style={{transitionDelay:(i%3)*100+'ms'}}>
    <GradientBlock tone={tones[i]} padding={0} className="ce-3d">{!ctx.lv&&<canvas ref={cv} aria-hidden="true"></canvas>}<span className="ce-n">0{i+1}</span></GradientBlock>
    <h3 className="ce-t">{t}</h3><p className="ce-d">{d}</p>
  </article>;
}
function CExpect({ctx}){
  const K=window.B2B_COURSE;
  return <section id="expect" className="ce wrap" data-screen-label="Что ждёт на обучении">
    <div className="sec-head"><h2 className="h2 rv">Что ждёт на обучении</h2><p className="sec-lead rv">Наведите на карточку — модель ускорится.</p></div>
    <div className="ce-grid">{K.expect.map(([k,t,d],i)=><MiniTile key={k} k={k} t={t} d={d} i={i} ctx={ctx}/>)}</div>
  </section>;
}
function CTeam({ctx}){
  const {Badge,TriadStripe}=window.DesignSystem_a62ddd;const K=window.B2B_COURSE;
  return <section id="team" className="ct wrap" data-screen-label="Преподаватели">
    <div className="sec-head"><h2 className="h2 rv">Преподавательский состав</h2><p className="sec-lead rv">Практики B2B и e-com продаж и преподаватели Политеха.</p></div>
    <div className="ct-grid">{K.team.map(([n,m,r,id],i)=><article key={id} className="ct-i rv" style={{transitionDelay:i*90+'ms'}}>
      <div className="ct-ph"><image-slot id={'teacher-'+id} shape="rect" placeholder="Фото преподавателя"></image-slot><div className="ct-tri"><TriadStripe height={8}/></div></div>
      <Badge tone="light">{m}</Badge><h3 className="ct-n">{n}</h3><p className="ct-r">{r}</p>
    </article>)}</div>
  </section>;
}
function CDoc({ctx}){
  const {Logo,TriadStripe}=window.DesignSystem_a62ddd;const ref=React.useRef();
  const move=e=>{if(ctx.lv)return;const r=ref.current.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;ref.current.style.transform='rotateY('+(x*16)+'deg) rotateX('+(-y*12)+'deg)';ref.current.style.setProperty('--sx',(x+.5)*100+'%');ref.current.style.setProperty('--sy',(y+.5)*100+'%');};
  const leave=()=>{ref.current.style.transform='';};
  return <section id="doc" className="cd wrap" data-screen-label="Документ об обучении">
    <div className="cd-txt">
      <h2 className="h2 rv">Документ<br/>об обучении</h2>
      <p className="about-p rv">После итоговой защиты системы продаж вы получаете сертификат, диплом о ДО (при наличии лицензии).</p>
      <ul className="cd-list">{['Сертификат, диплом о ДО (при наличии лицензии)','Около 70 часов нагрузки','Итоговая защита системы продаж'].map((x,i)=><li key={i} className="rv" style={{transitionDelay:i*90+'ms'}}><span className="sq"></span>{x}</li>)}</ul>
    </div>
    <div className="cd-stage rv" onMouseMove={move} onMouseLeave={leave}>
      <div ref={ref} className="cert">
        <div className="cert-shine"></div>
        <div className="cert-top"><Logo version="full" tone="color" height={46} assetBase={B2B_A}/></div>
        <div className="cert-k">Сертификат</div>
        <div className="cert-t">о прохождении обучения</div>
        <div className="cert-line"><span>Настоящий сертификат выдан</span><b>Фамилия Имя Отчество</b></div>
        <div className="cert-line"><span>в том, что он(а) прошёл(а) обучение по программе</span><b>Управление B2B-продажами — комплексная программа</b></div>
        <div className="cert-f"><span>в объёме <b>70</b> часов</span><span className="cert-reg">Рег. № 0000000</span></div>
        <TriadStripe height={8} style={{position:'absolute',left:0,right:0,bottom:0}}/>
      </div>
    </div>
  </section>;
}
function CReviews({ctx}){
  const {Icon}=window.DesignSystem_a62ddd;const K=window.B2B_COURSE;const tr=React.useRef();const [p,setP]=React.useState(0);const drag=React.useRef(null);
  const on=()=>{const el=tr.current;if(!el)return;const m=el.scrollWidth-el.clientWidth;setP(m>0?el.scrollLeft/m:0);};
  const step=d=>{const el=tr.current;const w=el.firstChild.getBoundingClientRect().width+24;el.scrollBy({left:d*w,behavior:'smooth'});};
  const down=e=>{if(e.pointerType!=='mouse')return;drag.current={x:e.clientX,s:tr.current.scrollLeft};tr.current.classList.add('drag');};
  const mv=e=>{if(!drag.current)return;tr.current.scrollLeft=drag.current.s-(e.clientX-drag.current.x);};
  const up=()=>{if(!drag.current)return;drag.current=null;tr.current.classList.remove('drag');};
  return <section id="reviews" className="cr" data-screen-label="Отзывы">
    <div className="wrap sec-head"><h2 className="h2 rv">Отзывы о курсе</h2>
      <div className="cr-ctl"><div className="prog cr-prog"><div className="prog-f" style={{transform:'scaleX('+Math.max(.08,p)+')'}}></div></div>
        <button type="button" className="ibtn" aria-label="Назад" onClick={()=>step(-1)}><Icon name="arrow-left" size={20}/></button>
        <button type="button" className="ibtn" aria-label="Вперёд" onClick={()=>step(1)}><Icon name="arrow-right" size={20}/></button></div></div>
    <div ref={tr} className="cr-track" onScroll={on} onPointerDown={down} onPointerMove={mv} onPointerUp={up} onPointerLeave={up}>
      {K.reviews.map(([n,r,q],i)=><figure key={i} className="cr-i rv" style={{transitionDelay:i*90+'ms'}}>
        <span className="cr-q">“</span><blockquote>{q}</blockquote>
        <figcaption><b>{n}</b><span>{r}</span></figcaption></figure>)}
    </div>
  </section>;
}
function Countdown({to}){
  const [n,setN]=React.useState(Date.now());React.useEffect(()=>{const i=setInterval(()=>setN(Date.now()),1000);return ()=>clearInterval(i);},[]);
  const d=Math.max(0,to-n);const parts=[[Math.floor(d/864e5),'дней'],[Math.floor(d/36e5)%24,'часов'],[Math.floor(d/6e4)%60,'минут'],[Math.floor(d/1e3)%60,'секунд']];
  return <div className="cdn">{parts.map(([v,l],i)=><div key={i} className="cdn-i"><span className="cdn-v"><span key={v}>{String(v).padStart(2,'0')}</span></span><span className="cdn-l">{l}</span></div>)}</div>;
}
function CApply({ctx}){
  const {GradientBlock,Input,Select,Checkbox,Button,Icon}=window.DesignSystem_a62ddd;
  const [v,setV]=React.useState({name:'',phone:'',email:''});const [err,setErr]=React.useState({});const [ok,setOk]=React.useState(false);
  const ch=k=>e=>setV({...v,[k]:e.target.value});
  const send=e=>{e.preventDefault();const er={};if(!v.name.trim())er.name='Укажите имя';if(v.phone.replace(/\D/g,'').length<10)er.phone='Укажите телефон';if(!/.+@.+\..+/.test(v.email))er.email='Укажите корректный адрес';setErr(er);
    if(Object.keys(er).length)return;setOk(true);ctx.notify('Заявка на курс принята','Менеджер свяжется с вами в течение рабочего дня');};
  return <section id="apply" className="ca wrap" data-screen-label="Форма заявки">
    <GradientBlock tone="green" padding={0} className="ca-in">
      <div className="ca-l">
        <h2 className="h2 h2-inv rv">Заявка на обучение</h2>
        <p className="corp-lead rv">Старт потока — 12 января 2027, группа 20-25 человек. Оставьте контакты: менеджер подтвердит место и пришлёт договор.</p>
        <div className="rv"><div className="ca-k">До старта</div><Countdown to={new Date(2027,0,12,10).getTime()}/></div>
      </div>
      <div className="ca-r">
        {ok?<div className="ca-ok"><span className="ca-ok-ic"><Icon name="check" size={40}/></span><h3>Заявка отправлена</h3><p>Мы свяжемся с вами по номеру {v.phone} в течение рабочего дня.</p><Button variant="outline" onClick={()=>{setOk(false);setV({name:'',phone:'',email:''});}}>Отправить ещё одну</Button></div>
        :<form className="ca-form" onSubmit={send} noValidate>
          <Input label="Имя и фамилия" placeholder="Анна Иванова" value={v.name} onChange={ch('name')} error={err.name}/>
          <Input label="Телефон" placeholder="+7 (900) 000-00-00" value={v.phone} onChange={ch('phone')} error={err.phone}/>
          <Input label="Электронная почта" placeholder="name@company.ru" value={v.email} onChange={ch('email')} error={err.email}/>
          <Input label="Компания и должность" placeholder="ООО «Компания», РОП"/>
          <Select label="Формат участия" options={['Смешанный формат — лично','Смешанный формат — от компании','Очный 2-дневный интенсив для руководителей']}/>
          <Checkbox label="Согласен с политикой обработки персональных данных" defaultChecked/>
          <Button type="submit" size="lg" fullWidth iconRight={<Icon name="send" size={18}/>}>Отправить заявку</Button>
        </form>}
      </div>
    </GradientBlock>
  </section>;
}
Object.assign(window,{CExpect,CTeam,CDoc,CReviews,CApply});
