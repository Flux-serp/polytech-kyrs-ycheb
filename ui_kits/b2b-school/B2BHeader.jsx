const B2B_A='../../assets/';
function IconBtn({icon,label,onClick,active,children}){
  const {Icon,Tooltip}=window.DesignSystem_a62ddd;
  return <Tooltip text={label} placement="bottom"><button type="button" aria-label={label} aria-pressed={active?true:undefined} onClick={onClick} className="ibtn" data-active={active?'1':undefined}><Icon name={icon} size={20}/>{children}</button></Tooltip>;
}
function Tools({ctx}){
  const t=ctx.t.tools;
  return <div className="tools">
    <IconBtn icon="search" label={t.search} onClick={ctx.openSearch}/>
    <IconBtn icon="eye" label={t.lv} onClick={ctx.toggleLv} active={ctx.lv}/>
    <IconBtn icon={ctx.theme==='dark'?'sun':'moon'} label={t.theme} onClick={ctx.toggleTheme}/>
    <IconBtn icon="globe" label={t.lang} onClick={ctx.toggleLang}><span className="ibtn-lang">{ctx.lang.toUpperCase()}</span></IconBtn>
    <IconBtn icon="user-round" label={t.cabinet} onClick={ctx.openCab}/>
  </div>;
}
function SiteHeader({ctx}){
  const {Logo,NavLink}=window.DesignSystem_a62ddd;
  const [sc,setSc]=React.useState(false);const bar=React.useRef();
  React.useEffect(()=>{const on=()=>{setSc(window.scrollY>40);const h=document.documentElement.scrollHeight-window.innerHeight;if(bar.current)bar.current.style.transform='scaleX('+(h>0?window.scrollY/h:0)+')';};on();window.addEventListener('scroll',on,{passive:true});return ()=>window.removeEventListener('scroll',on);},[]);
  const dark=ctx.theme==='dark';
  return <header className={'hdr'+(sc?' hdr-sc':'')}>
    <div className="wrap hdr-in">
      <a href="#home" className="brand" onClick={e=>{e.preventDefault();ctx.go('home')}}>
        <Logo version="short" tone={dark?'white':'color'} height={sc?24:28} assetBase={B2B_A} style={{transition:'height .3s'}}/>
        <span className="brand-div"></span>
        <span className="brand-name">{ctx.t.school1}<br/>{ctx.t.school2}</span>
      </a>
      <nav className="nav">{window.B2B.nav.map(n=><NavLink key={n} href={'#'+n} active={ctx.active===n} inverse={dark} onClick={e=>{e.preventDefault();(ctx.page||ctx.go)(n)}}>{ctx.t.nav[n]}</NavLink>)}</nav>
      <Tools ctx={ctx}/>
      <div className="burger"><IconBtn icon={ctx.menu?'x':'menu'} label={ctx.t.tools.menu} onClick={ctx.toggleMenu}/></div>
    </div>
    <div className="hdr-bar"><div ref={bar} className="hdr-bar-fill"></div></div>
  </header>;
}
function MobileMenu({ctx}){
  const mctx={...ctx,openSearch:()=>{ctx.toggleMenu();ctx.openSearch();},openCab:()=>{ctx.toggleMenu();ctx.openCab();}};
  return <div className={'mmenu'+(ctx.menu?' open':'')} aria-hidden={!ctx.menu}>
    {window.B2B.nav.map((n,i)=><a key={n} href={'#'+n} style={{transitionDelay:(ctx.menu?80+i*50:0)+'ms'}} onClick={e=>{e.preventDefault();ctx.toggleMenu();(ctx.page||ctx.go)(n)}}><span className="mm-i">0{i+1}</span>{ctx.t.nav[n]}</a>)}
    <div className="mm-tools"><Tools ctx={mctx}/></div>
  </div>;
}
function SectionRail({ctx}){
  return <div className="rail">{window.B2B.nav.map(n=><button key={n} type="button" className={'rail-i'+(ctx.active===n?' on':'')} onClick={()=>ctx.go(n)} aria-label={ctx.t.nav[n]}><span className="rail-l">{ctx.t.nav[n]}</span><span className="rail-b"></span></button>)}</div>;
}
Object.assign(window,{IconBtn,Tools,SiteHeader,MobileMenu,SectionRail,B2B_A});
