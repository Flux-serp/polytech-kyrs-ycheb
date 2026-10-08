const HUB_T={
ru:{crumb:'Главная',title:'Все курсы',lead:'Каталог программ повышения квалификации школы. Выберите направление и формат, откройте курс, чтобы увидеть детали и записаться.',
q:'Название или тема',cat:'Направление',fmt:'Формат',all:'Все',found:'Найдено',reset:'Сбросить фильтры',empty:'По заданным условиям курсов нет',
grid:'Плиткой',list:'Списком',dur:'Длительность',doc:'Документ',docV:'Удостоверение о повышении квалификации СПбПУ',enroll:'Записаться на курс',corp:'Обучить команду',
sent:'Заявка на курс принята',sentT:'Менеджер свяжется с вами в течение рабочего дня',prev:'Предыдущий курс',next:'Следующий курс',
ctaT:'Нужна программа под вашу компанию?',ctaL:'Соберём курс из модулей каталога и адаптируем его под задачи вашей команды продаж.',open:'Открыть'},
en:{crumb:'Home',title:'All courses',lead:'The school’s professional development catalogue. Pick a track and format, open a course to see the details and enrol.',
q:'Title or topic',cat:'Track',fmt:'Format',all:'All',found:'Found',reset:'Reset filters',empty:'No courses match these filters',
grid:'Grid',list:'List',dur:'Duration',doc:'Certificate',docV:'SPbPU professional development certificate',enroll:'Enrol',corp:'Train your team',
sent:'Enrolment request received',sentT:'A manager will contact you within one business day',prev:'Previous course',next:'Next course',
ctaT:'Need a programme for your company?',ctaL:'We will assemble a course from catalogue modules and tailor it to your sales team.',open:'Open'}};

function HubHero({ctx,count}){
  const {GradientBlock}=window.DesignSystem_a62ddd;const h=HUB_T[ctx.lang];const cv=React.useRef();
  React.useEffect(()=>{if(!window.THREE||ctx.lv||!cv.current)return;const s=window.createNetwork(cv.current);return ()=>s&&s.dispose&&s.dispose();},[ctx.lv]);
  return <section className="hub-hero wrap" data-screen-label="Все курсы — шапка">
    <div className="hub-hero-txt">
      <nav className="crumbs"><a href="index.html">{h.crumb}</a><span>/</span><span>{h.title}</span></nav>
      <h1 className="h-hero hub-h1"><span className="ln"><span>{h.title}</span></span><span className="ln"><span><b className="h-block">{String(count).padStart(2,'0')}</b> {ctx.lang==='ru'?'программ':'programmes'}</span></span></h1>
      <p className="lead">{h.lead}</p>
    </div>
    <GradientBlock tone="green" padding={0} className="hub-hero-3d">{!ctx.lv&&<canvas ref={cv} aria-label="3D-модель сети компаний"></canvas>}</GradientBlock>
  </section>;
}

function HubFilters({ctx,f,set,total}){
  const {Tag,Icon}=window.DesignSystem_a62ddd;const t=ctx.t,h=HUB_T[ctx.lang];
  return <div className="hub-bar"><div className="wrap hub-bar-in">
    <label className="hub-q"><Icon name="search" size={20}/><input value={f.q} onChange={e=>set({q:e.target.value},true)} placeholder={h.q}/>{f.q&&<button type="button" className="ibtn" aria-label={h.reset} onClick={()=>set({q:''})}><Icon name="x" size={16}/></button>}</label>
    <div className="hub-grp"><span className="hub-lbl">{h.cat}</span><div className="tags">{Object.keys(t.cats).map(k=><Tag key={k} selected={f.cat===k} onClick={()=>set({cat:k})}>{t.cats[k]}</Tag>)}</div></div>
    <div className="hub-grp"><span className="hub-lbl">{h.fmt}</span><div className="tags">{['all','online','offline','blended'].map(k=><Tag key={k} selected={f.fmt===k} onClick={()=>set({fmt:k})}>{k==='all'?h.all:t.formats[k]}</Tag>)}</div></div>
    <div className="hub-end"><span className="hub-cnt">{h.found}: <b>{total}</b></span>
      <div className="hub-view"><IconBtn icon="layout-grid" label={h.grid} active={f.view==='grid'} onClick={()=>set({view:'grid'})}/><IconBtn icon="list" label={h.list} active={f.view==='list'} onClick={()=>set({view:'list'})}/></div></div>
  </div></div>;
}

function HubRow({c,ctx,onOpen}){
  const {Badge,Icon}=window.DesignSystem_a62ddd;const t=ctx.t;
  return <a href={'#c-'+c.id} className="hub-row" style={{viewTransitionName:'cc'+c.id}} onClick={e=>{e.preventDefault();onOpen(c);}}>
    <span className={'hub-row-n hub-tone-'+c.tone}>{c.id}</span>
    <span className="hub-row-m"><span className="hub-row-t">{c[ctx.lang]}</span><span className="hub-row-d">{ctx.lang==='ru'?c.dru:c.den}</span></span>
    <span className="ccard-cat">{t.cats[c.cat]}</span>
    <Badge tone="light">{t.formats[c.format]}</Badge>
    <span className="hub-row-w"><b>{c.weeks}</b> {t.weeks}</span>
    <span className="hub-row-s">{t.start} <b>{c.start}</b></span>
    <Icon name="arrow-up-right" size={22}/>
  </a>;
}

function CourseDrawer({ctx,c,list,onOpen,onClose}){
  const {GradientBlock,Badge,Button,Icon}=window.DesignSystem_a62ddd;const t=ctx.t,h=HUB_T[ctx.lang];
  const [shown,setShown]=React.useState(c);React.useEffect(()=>{if(c)setShown(c);},[c]);
  React.useEffect(()=>{const k=e=>{if(!c)return;if(e.key==='Escape')onClose();if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1);};window.addEventListener('keydown',k);return ()=>window.removeEventListener('keydown',k);});
  const all=window.B2B.courses;const step=d=>{if(!c)return;const i=all.findIndex(x=>x.id===c.id);onOpen(all[(i+d+all.length)%all.length]);};
  const x=shown;
  return <div className={'drw'+(c?' open':'')} aria-hidden={!c}>
    <div className="drw-bg" onClick={onClose}></div>
    <aside className="drw-p" role="dialog" aria-label={x?x[ctx.lang]:''}>
      {x&&<React.Fragment key={x.id}>
        <GradientBlock tone={x.tone} padding="24px 28px" className="drw-top">
          <div className="drw-nav"><button type="button" className="ibtn drw-ib" aria-label={h.prev} onClick={()=>step(-1)}><Icon name="arrow-left" size={20}/></button><button type="button" className="ibtn drw-ib" aria-label={h.next} onClick={()=>step(1)}><Icon name="arrow-right" size={20}/></button><button type="button" className="ibtn drw-ib" aria-label={t.search.close} onClick={onClose} style={{marginLeft:'auto'}}><Icon name="x" size={22}/></button></div>
          <div className="drw-n">{x.id}</div>
        </GradientBlock>
        <div className="drw-b">
          <div className="ccard-meta"><Badge tone="light">{t.formats[x.format]}</Badge><span className="ccard-cat">{t.cats[x.cat]}</span></div>
          <h2 className="drw-t">{x[ctx.lang]}</h2>
          <p className="drw-d">{ctx.lang==='ru'?x.dru:x.den}</p>
          <dl className="drw-meta">
            <div><dt>{h.dur}</dt><dd>{x.weeks} {t.weeks}</dd></div>
            <div><dt>{t.start}</dt><dd>{x.start}</dd></div>
            <div><dt>{h.fmt}</dt><dd>{t.formats[x.format]}</dd></div>
            <div><dt>{h.doc}</dt><dd>{h.docV}</dd></div>
          </dl>
          <div className="drw-f">
            <Button size="lg" onClick={()=>{onClose();ctx.notify(h.sent,h.sentT);}} iconRight={<Icon name="arrow-up-right" size={20}/>}>{h.enroll}</Button>
            <Button size="lg" variant={ctx.theme==='dark'?'inverse':'outline'} onClick={()=>{location.href='corporate.html';}}>{h.corp}</Button>
          </div>
        </div>
      </React.Fragment>}
    </aside>
  </div>;
}

function HubCta({ctx}){
  const {GradientBlock,Button,Icon}=window.DesignSystem_a62ddd;const h=HUB_T[ctx.lang];
  return <section className="wrap hub-cta rv"><GradientBlock tone="violet" padding="48px 56px" className="hub-cta-in">
    <div><h2 className="h2 h2-inv">{h.ctaT}</h2><p className="corp-lead" style={{marginTop:20}}>{h.ctaL}</p></div>
    <Button size="lg" variant="inverse" onClick={()=>{location.href='corporate.html';}} iconRight={<Icon name="arrow-up-right" size={20}/>}>{ctx.t.nav.corporate}</Button>
  </GradientBlock></section>;
}

function CourseHub({ctx}){
  const {Button}=window.DesignSystem_a62ddd;const h=HUB_T[ctx.lang];
  const [f,setF]=React.useState({q:'',cat:'all',fmt:'all',view:localStorage.getItem('pt-b2b-view')||'grid'});
  const set=(p,quiet)=>{const fn=()=>setF(o=>({...o,...p}));if(p.view)localStorage.setItem('pt-b2b-view',p.view);
    if(!quiet&&document.startViewTransition&&!ctx.lv){document.documentElement.classList.add('vt-f');const tr=document.startViewTransition(()=>ReactDOM.flushSync(fn));tr.finished.finally(()=>document.documentElement.classList.remove('vt-f'));}else fn();};
  const q=f.q.trim().toLowerCase();
  const list=window.B2B.courses.filter(c=>(f.cat==='all'||c.cat===f.cat)&&(f.fmt==='all'||c.format===f.fmt)&&(!q||(c.ru+' '+c.en+' '+c.dru+' '+c.den).toLowerCase().includes(q)));
  return <>
    <HubHero ctx={ctx} count={window.B2B.courses.length}/>
    <HubFilters ctx={ctx} f={f} set={set} total={list.length}/>
    <section className="wrap hub-list" data-screen-label="Все курсы — каталог">
      {list.length===0?<div className="hub-empty"><p>{h.empty}</p><Button variant={ctx.theme==='dark'?'inverse':'outline'} onClick={()=>set({q:'',cat:'all',fmt:'all'})}>{h.reset}</Button></div>
      :f.view==='grid'?<div className="hub-grid">{list.map((c,i)=><div key={c.id} className="hub-cell rv" style={{viewTransitionName:'cc'+c.id,transitionDelay:(i%3)*90+'ms'}}><TiltCard c={c} ctx={ctx} onOpen={ctx.openCourse}/></div>)}</div>
      :<div className="hub-rows">{list.map(c=><HubRow key={c.id} c={c} ctx={ctx} onOpen={ctx.openCourse}/>)}</div>}
    </section>
    <HubCta ctx={ctx}/>
  </>;
}
Object.assign(window,{CourseHub,CourseDrawer,HUB_T});
