function SiteFooter(){
 const {Logo,TriadStripe,ArrowLink}=window.DesignSystem_a62ddd;
 return <footer style={{background:'#000',color:'#fff',marginTop:96}}>
  <TriadStripe height={8}/>
  <div style={{maxWidth:1280,margin:'0 auto',padding:'48px',display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:48}}>
   <div><Logo version="full" tone="white" height={64} assetBase="../../assets/"/></div>
   <div style={{fontFamily:'var(--font-ui)',fontSize:14,lineHeight:1.7}}>195251, Санкт-Петербург,<br/>ул. Политехническая, 29<br/>Главный учебный корпус</div>
   <div style={{display:'grid',gap:12,alignContent:'start'}}><ArrowLink inverse>Программа_курса.pdf</ArrowLink><ArrowLink inverse>Положение_о_курсе.pdf</ArrowLink></div>
  </div>
  <div style={{borderTop:'1px solid #454343'}}><div style={{maxWidth:1280,margin:'0 auto',padding:'16px 48px',display:'flex',justifyContent:'space-between',fontFamily:'var(--font-sans)',fontSize:13}}><span style={{fontWeight:700}}>СПбПУ 2025</span><span>Мыслить будущим</span></div></div>
 </footer>;
}
window.SiteFooter=SiteFooter;