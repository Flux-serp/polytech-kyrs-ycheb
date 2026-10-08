function SiteHeader({page,go,onEnroll}){
 const {Logo,NavLink,Button}=window.DesignSystem_a62ddd;
 return <header style={{borderBottom:'1px solid #000',background:'#fff',position:'sticky',top:0,zIndex:20}}>
  <div style={{maxWidth:1280,margin:'0 auto',padding:'0 48px',height:76,display:'flex',alignItems:'center',gap:40}}>
   <a href="#" onClick={e=>{e.preventDefault();go('home')}}><Logo version="short" height={30} assetBase="../../assets/"/></a>
   <nav style={{display:'flex',gap:28,flex:1}}>
    <NavLink active={page==='home'} onClick={e=>{e.preventDefault();go('home')}}>О курсе</NavLink>
    <NavLink active={page==='program'} onClick={e=>{e.preventDefault();go('program')}}>Программа</NavLink>
    <NavLink active={page==='lesson'} onClick={e=>{e.preventDefault();go('lesson')}}>Мои занятия</NavLink>
   </nav>
   <Button size="sm" onClick={onEnroll}>Записаться</Button>
  </div></header>;
}
window.SiteHeader=SiteHeader;