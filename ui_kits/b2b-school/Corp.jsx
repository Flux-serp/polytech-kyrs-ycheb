function KHero({ctx}){
  const {GradientBlock,Button,Icon}=window.DesignSystem_a62ddd;const K=window.B2B_CORP;const cv=React.useRef();
  React.useEffect(()=>{if(!window.THREE||ctx.lv||!cv.current)return;const s=window.createNetwork(cv.current);return ()=>s.dispose();},[ctx.lv]);
  const jump=id=>{const el=document.getElementById(id);el&&scrollTo({top:el.getBoundingClientRect().top+scrollY-90,behavior:ctx.lv?'auto':'smooth'});};
  return <section className="kh wrap" data-screen-label="Корпоративное обучение — первый экран">
    <div className="kh-l">
      <nav className="crumbs"><a href="index.html">Главная</a><span>/</span><span>Корпоративное обучение</span></nav>
      <h1 className="h-hero kh-h1"><span className="ln"><span>Корпоративное</span></span><span className="ln"><span style={{transitionDelay:'.12s'}}><b className="h-block">обучение</b></span></span></h1>
      <p className="lead">{K.lead}</p>
      <div className="row"><Button size="lg" onClick={()=>jump('k-apply')} iconRight={<Icon name="arrow-down-right" size={20}/>}>Оставить заявку</Button>
        <Button size="lg" variant={ctx.theme==='dark'?'inverse':'outline'} onClick={()=>jump('k-person')}>Связаться с ответственным</Button></div>
    </div>
    <GradientBlock tone="green" padding={0} className="kh-r">{!ctx.lv&&<canvas ref={cv} aria-label="3D-модель сети компаний"></canvas>}
      <div className="kh-facts">{K.facts.map(([a,b],i)=><div key={i} className="kh-fact"><b>{a}</b><span>{b}</span></div>)}</div>
    </GradientBlock>
  </section>;
}
function KFormats({ctx}){
  const {GradientBlock}=window.DesignSystem_a62ddd;const K=window.B2B_CORP;
  return <section className="kf wrap" data-screen-label="Форматы">
    <div className="sec-head"><h2 className="h2 rv">Форматы обучения</h2><p className="sec-lead rv">Формат выбираем вместе с вами на этапе диагностики.</p></div>
    <div className="kf-grid">{K.formats.map(([t,d,tone],i)=><GradientBlock key={i} tone={tone} padding="28px" className="kf-i rv" style={{transitionDelay:i*100+'ms'}}>
      <span className="kf-n">0{i+1}</span><h3 className="kf-t">{t}</h3><p className="kf-d">{d}</p></GradientBlock>)}</div>
  </section>;
}
function KSteps({ctx}){
  const K=window.B2B_CORP;const [a,setA]=React.useState(0);
  React.useEffect(()=>{if(ctx.lv)return;const i=setInterval(()=>setA(x=>(x+1)%K.steps.length),3800);return ()=>clearInterval(i);},[ctx.lv]);
  return <section className="ks wrap" data-screen-label="Как мы работаем">
    <h2 className="h2 rv">Как мы работаем</h2>
    <div className="ks-tabs rv">{K.steps.map(([t],i)=><button key={i} type="button" className={'ks-tab'+(i===a?' on':'')} onClick={()=>setA(i)}><span className="ks-tab-n">0{i+1}</span><span>{t}</span><span className="ks-tab-bar"><span key={i===a?'on'+a:'off'}></span></span></button>)}</div>
    <div className="ks-body rv"><span key={a} className="ks-big">0{a+1}</span><div key={'t'+a} className="ks-txt"><h3>{K.steps[a][0]}</h3><p>{K.steps[a][1]}</p></div></div>
  </section>;
}
function KPerson({ctx}){
  const {Icon,TriadStripe}=window.DesignSystem_a62ddd;const P=window.B2B_CORP.lead_person;const [cp,setCp]=React.useState('');
  const copy=(v,k)=>{navigator.clipboard&&navigator.clipboard.writeText(v).catch(()=>{});setCp(k);setTimeout(()=>setCp(''),1600);};
  const rows=[['phone','Телефон',P.phone,'tel:'+P.tel],['mail','Почта',P.mail,'mailto:'+P.mail],['send','Telegram',P.tg,'#']];
  return <section id="k-person" className="kp wrap" data-screen-label="Ответственный за направление">
    <div className="kp-ph rv"><image-slot id="corp-lead-photo" shape="rect" placeholder="Фото ответственного"></image-slot><TriadStripe height={8} style={{position:'absolute',left:0,right:0,bottom:0}}/></div>
    <div className="kp-txt">
      <span className="eyebrow rv"><span className="sq"></span>Ответственный за направление</span>
      <h2 className="h2 rv">{P.name}</h2>
      <p className="kp-role rv">{P.role}</p>
      <p className="about-p rv">{P.text}</p>
      <ul className="kp-list">{rows.map(([ic,l,v,href],i)=><li key={ic} className="rv" style={{transitionDelay:i*80+'ms'}}>
        <Icon name={ic} size={22}/><span className="kp-l">{l}</span><a href={href}>{v}</a>
        <button type="button" className="ibtn" aria-label={'Скопировать: '+l} onClick={()=>copy(v,ic)}><Icon name={cp===ic?'check':'copy'} size={18}/></button></li>)}</ul>
    </div>
  </section>;
}
function KApply({ctx}){
  const {GradientBlock,Input,Select,Checkbox,Button,Icon}=window.DesignSystem_a62ddd;
  const [v,setV]=React.useState({company:'',name:'',phone:'',email:''});const [err,setErr]=React.useState({});const [ok,setOk]=React.useState(false);
  const [goals,setGoals]=React.useState([]);const G=['Выстроить e-com канал','Сложные сделки и переговоры','Ключевые клиенты','Управление отделом','CRM и AI'];
  const tg=g=>setGoals(goals.includes(g)?goals.filter(x=>x!==g):[...goals,g]);
  const ch=k=>e=>setV({...v,[k]:e.target.value});
  const send=e=>{e.preventDefault();const er={};if(!v.company.trim())er.company='Укажите компанию';if(!v.name.trim())er.name='Укажите имя';if(v.phone.replace(/\D/g,'').length<10)er.phone='Укажите телефон';if(!/.+@.+\..+/.test(v.email))er.email='Укажите корректный адрес';setErr(er);
    if(Object.keys(er).length)return;setOk(true);ctx.notify('Заявка отправлена','Ответственный за направление свяжется с вами в течение рабочего дня');};
  return <section id="k-apply" className="ca wrap" data-screen-label="Форма заявки">
    <GradientBlock tone="violet" padding={0} className="ca-in">
      <div className="ca-l">
        <h2 className="h2 h2-inv rv">Заявка на корпоративное обучение</h2>
        <p className="corp-lead rv">Расскажите о команде и задачах. Ответим в течение рабочего дня и предложим время для диагностики.</p>
        <div className="rv"><div className="ca-k">Что нужно команде</div><div className="kg">{G.map(g=><button key={g} type="button" className={'kg-i'+(goals.includes(g)?' on':'')} onClick={()=>tg(g)}>{goals.includes(g)&&<Icon name="check" size={14}/>}{g}</button>)}</div></div>
      </div>
      <div className="ca-r">
        {ok?<div className="ca-ok"><span className="ca-ok-ic"><Icon name="check" size={40}/></span><h3>Заявка отправлена</h3><p>Мы свяжемся с вами по номеру {v.phone} в течение рабочего дня.</p><Button variant="outline" onClick={()=>{setOk(false);setV({company:'',name:'',phone:'',email:''});setGoals([]);}}>Отправить ещё одну</Button></div>
        :<form className="ca-form" onSubmit={send} noValidate>
          <Input label="Компания" placeholder="ООО «Компания»" value={v.company} onChange={ch('company')} error={err.company}/>
          <Input label="Контактное лицо" placeholder="Анна Иванова" value={v.name} onChange={ch('name')} error={err.name}/>
          <div className="kf2"><Input label="Телефон" placeholder="+7 (900) 000-00-00" value={v.phone} onChange={ch('phone')} error={err.phone}/>
          <Input label="Электронная почта" placeholder="name@company.ru" value={v.email} onChange={ch('email')} error={err.email}/></div>
          <Select label="Размер команды" options={['до 10 человек','10–50 человек','50–200 человек','более 200 человек']}/>
          <Select label="Формат" options={['На площадке Политеха','На территории компании','Онлайн','Пока не знаем']}/>
          <Checkbox label="Согласен с политикой обработки персональных данных" defaultChecked/>
          <Button type="submit" size="lg" fullWidth iconRight={<Icon name="send" size={18}/>}>Отправить заявку</Button>
        </form>}
      </div>
    </GradientBlock>
  </section>;
}
function KContacts({ctx}){
  const {Icon,Accordion}=window.DesignSystem_a62ddd;const K=window.B2B_CORP;
  return <section id="k-contacts" className="kc wrap" data-screen-label="Контакты и вопросы">
    <div><h2 className="h2 rv">Контакты</h2>
      <ul className="kc-list">{K.contacts.map(([l,v,ic],i)=><li key={l} className="rv" style={{transitionDelay:i*80+'ms'}}><Icon name={ic} size={24}/><span className="kp-l">{l}</span><b>{v}</b></li>)}</ul>
      <div className="kc-map rv"><image-slot id="corp-map" shape="rect" placeholder="Карта или фото кампуса"></image-slot></div>
    </div>
    <div><h2 className="h2 rv">Частые вопросы</h2><div className="rv" style={{marginTop:32}}><Accordion items={K.faq.map(([t,c],i)=>({index:'0'+(i+1),title:t,content:c}))} defaultOpen={0}/></div></div>
  </section>;
}
Object.assign(window,{KHero,KFormats,KSteps,KPerson,KApply,KContacts});
