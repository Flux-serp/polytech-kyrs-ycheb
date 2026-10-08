function ProgramScreen({go}){
 const {Tag,Card,Badge,TriadStripe}=window.DesignSystem_a62ddd;const C=window.COURSE;
 const [f,setF]=React.useState('Все');const list=C.modules.filter(m=>f==='Все'||m.type===f);
 return <main style={{maxWidth:1280,margin:'0 auto',padding:'48px 48px 0'}}>
  <div style={{display:'grid',gridTemplateColumns:'1fr auto',alignItems:'end',gap:24,paddingBottom:32,borderBottom:'1px solid #000'}}>
   <div><div style={{font:'600 13px var(--font-sans)',color:'var(--pt-violet)',textTransform:'uppercase',marginBottom:12}}>{C.short}</div><h1 style={{margin:0,font:'800 var(--fs-h1)/var(--lh-h1) var(--font-display)',textTransform:'uppercase'}}>Программа курса</h1></div>
   <div style={{display:'flex',gap:8}}>{['Все','Лекции','Практики','Проект'].map(t=><Tag key={t} selected={f===t} onClick={()=>setF(t)}>{t}</Tag>)}</div>
  </div>
  <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,marginTop:32}}>{list.map(m=><Card key={m.i} eyebrow={'Модуль '+m.i} title={m.t} onClick={()=>go('lesson')} meta={<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span>{m.n} занятия</span><Badge tone={m.type==='Практики'?'violet':m.type==='Проект'?'orange':'green'}>{m.type}</Badge></div>}>{m.d}</Card>)}</div>
 </main>;
}
window.ProgramScreen=ProgramScreen;