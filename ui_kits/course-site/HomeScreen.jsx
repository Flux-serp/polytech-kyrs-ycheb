function HomeScreen({go,onEnroll}){
 const {Button,Icon,GradientBlock,Accordion,Card,Badge,ArrowLink}=window.DesignSystem_a62ddd;const C=window.COURSE;
 const H=(t)=><h2 style={{margin:'0 0 32px',font:'800 var(--fs-h2)/var(--lh-h2) var(--font-display)',textTransform:'uppercase'}}>{t}</h2>;
 return <main>
  <section style={{maxWidth:1280,margin:'0 auto',padding:'48px 48px 0'}}>
   <div style={{display:'grid',gridTemplateColumns:'repeat(12,1fr)',gridTemplateRows:'repeat(6,72px)',background:'var(--grad-poster-bg)'}}>
    <div style={{gridColumn:'1/6',gridRow:'1/3',padding:'32px 32px 0',display:'flex',flexDirection:'column',gap:10}}>
     <div style={{font:'600 13px/1.3 var(--font-sans)',color:'var(--pt-violet)',textTransform:'uppercase'}}>Открытый курс · {C.institute}</div>
     <div style={{font:'800 40px/0.95 var(--font-display)',textTransform:'uppercase'}}>Курс<br/>2025</div></div>
    <div style={{gridColumn:'1/8',gridRow:'3/7',background:'url(../../assets/photo-lecture.jpg) center 30%/cover'}}/>
    <div style={{gridColumn:'8/11',gridRow:'1/4',background:'var(--grad-orange)',padding:24,font:'800 64px/0.95 var(--font-display)'}}>{C.start[0]}<br/>{C.start[1]}<br/>{C.start[2]}</div>
    <div style={{gridColumn:'11/13',gridRow:'1/3',background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',font:'800 36px var(--font-display)'}}>{C.time}</div>
    <GradientBlock tone="green" padding={32} style={{gridColumn:'6/13',gridRow:'4/7',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
     <div style={{font:'800 40px/1 var(--font-display)',textTransform:'uppercase'}}>{C.title}</div>
     <div style={{display:'flex',gap:12}}><Button variant="inverse" onClick={onEnroll} iconRight={<Icon name="arrow-right" size={18}/>}>Записаться</Button><Button variant="outline" style={{borderColor:'#fff',color:'#fff'}} onClick={()=>go('program')}>Программа</Button></div>
    </GradientBlock>
    <div style={{gridColumn:'11/13',gridRow:'3/4',background:'var(--grad-violet)'}}/>
   </div>
   <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',borderBottom:'1px solid #000'}}>{C.facts.map(([a,b],i)=><div key={i} style={{padding:'24px 0 24px '+(i?24:0)+'px',borderLeft:i?'1px solid #000':'none'}}><div style={{font:'800 24px/1 var(--font-display)',textTransform:'uppercase'}}>{a}</div><div style={{font:'400 14px var(--font-ui)',color:'var(--pt-grey-600)',marginTop:6}}>{b}</div></div>)}</div>
  </section>
  <section style={{maxWidth:1280,margin:'0 auto',padding:'96px 48px 0',display:'grid',gridTemplateColumns:'4fr 8fr',gap:48}}>
   <div>{H('О курсе')}<ArrowLink>Программа_курса.pdf</ArrowLink></div>
   <div style={{font:'300 var(--fs-lead)/1.35 var(--font-display)'}}>Курс знакомит с современными методами математического моделирования и их применением в инженерных и научных задачах. Каждый модуль сочетает лекцию и практику на реальных данных; в финале команды защищают собственный проект.</div>
  </section>
  <section style={{maxWidth:1280,margin:'0 auto',padding:'96px 48px 0'}}>{H('Программа')}
   <Accordion items={C.modules.map(m=>({index:m.i,title:m.t,meta:m.n+' занятия',content:<div style={{display:'flex',gap:16,alignItems:'center'}}><Badge tone={m.type==='Практики'?'violet':m.type==='Проект'?'orange':'green'}>{m.type}</Badge>{m.d}</div>}))}/>
  </section>
  <section style={{maxWidth:1280,margin:'0 auto',padding:'96px 48px 0'}}>{H('Преподаватели')}
   <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:24}}>{C.teachers.map(t=><Card key={t.n} image={t.img} eyebrow="Преподаватель" title={t.n}>{t.r}</Card>)}
    <GradientBlock tone="violet" padding={32} style={{display:'flex',flexDirection:'column',justifyContent:'flex-end',gap:16}}><div style={{font:'800 28px/1 var(--font-display)',textTransform:'uppercase'}}>Мыслить будущим</div><div style={{font:'400 15px/1.5 var(--font-ui)'}}>Занятия проходят в Главном учебном корпусе и онлайн.</div></GradientBlock></div>
  </section>
 </main>;
}
window.HomeScreen=HomeScreen;