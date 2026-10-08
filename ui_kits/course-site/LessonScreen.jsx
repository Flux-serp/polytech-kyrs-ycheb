function LessonScreen({go}){
 const {Tabs,IconButton,ArrowLink,ProgressBar,Icon,Button,Tooltip,Checkbox}=window.DesignSystem_a62ddd;const C=window.COURSE;
 const [tab,setTab]=React.useState('Материалы');const [cur,setCur]=React.useState(3);
 return <main style={{maxWidth:1280,margin:'0 auto',padding:'32px 48px 0'}}>
  <div style={{font:'400 14px var(--font-ui)',color:'var(--pt-grey-600)',marginBottom:16}}><a href="#" onClick={e=>{e.preventDefault();go('program')}} style={{color:'inherit'}}>Программа</a> / Модуль 02 · Численные методы</div>
  <div style={{display:'grid',gridTemplateColumns:'8fr 4fr',gap:48}}>
   <div>
    <h1 style={{margin:'0 0 24px',font:'800 var(--fs-h2)/var(--lh-h2) var(--font-display)',textTransform:'uppercase'}}>{C.lessons[cur].t}</h1>
    <div style={{position:'relative',aspectRatio:'16/9',background:'url(../../assets/photo-students-laptop.jpg) center/cover #000'}}>
     <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,.35)'}}/>
     <IconButton icon="play" label="Смотреть лекцию" variant="primary" size={72} style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}/>
     <div style={{position:'absolute',left:0,bottom:0,background:'var(--grad-green-block)',color:'#fff',padding:'12px 20px',font:'700 14px var(--font-display)',textTransform:'uppercase'}}>Лекция · 42 мин</div>
    </div>
    <Tabs tabs={['Материалы','Задание','Обсуждение']} value={tab} onChange={setTab} style={{marginTop:40}}/>
    <div style={{padding:'28px 0',font:'400 16px/1.5 var(--font-ui)'}}>
     {tab==='Материалы'&&<div style={{display:'grid',gap:16}}><ArrowLink>Конспект_лекции_04.pdf</ArrowLink><ArrowLink>Презентация_метод_Ньютона.pptx</ArrowLink><ArrowLink>Ноутбук_newton.ipynb</ArrowLink></div>}
     {tab==='Задание'&&<div style={{display:'grid',gap:16,maxWidth:560}}><div>Реализуйте метод Ньютона для уравнения f(x) = x³ − 2x − 5 и сравните скорость сходимости с методом бисекции.</div><Checkbox label="Код загружен в репозиторий"/><div><Button size="sm">Отправить решение</Button></div></div>}
     {tab==='Обсуждение'&&<div style={{color:'var(--pt-grey-600)'}}>Вопросов пока нет.</div>}
    </div>
   </div>
   <aside style={{borderLeft:'1px solid #000',paddingLeft:32}}>
    <ProgressBar label="Модуль 02" value={50}/>
    <div style={{marginTop:24,borderTop:'1px solid #000'}}>{C.lessons.map((l,i)=>{const on=i===cur;return <button key={i} onClick={()=>setCur(i)} style={{width:'100%',display:'flex',alignItems:'center',gap:12,padding:'14px 0',background:'none',border:0,borderBottom:'1px solid var(--pt-grey-200)',cursor:'pointer',textAlign:'left'}}>
     <span style={{width:24,height:24,flex:'none',display:'inline-flex',alignItems:'center',justifyContent:'center',background:l.done?'var(--pt-green)':on?'#000':'var(--pt-grey-100)',color:'#fff',font:'700 12px var(--font-sans)'}}>{l.done?<Icon name="check" size={14}/>:i+1}</span>
     <span style={{flex:1,font:(on?'700 ':'400 ')+'15px var(--font-ui)',color:'#000'}}>{l.t}</span></button>})}</div>
    <div style={{display:'flex',gap:8,marginTop:24}}><Tooltip text="Предыдущее"><IconButton icon="arrow-left" label="Назад" onClick={()=>setCur(Math.max(0,cur-1))}/></Tooltip><Button variant="secondary" style={{flex:1}} onClick={()=>setCur(Math.min(C.lessons.length-1,cur+1))}>Следующее занятие</Button></div>
   </aside>
  </div></main>;
}
window.LessonScreen=LessonScreen;