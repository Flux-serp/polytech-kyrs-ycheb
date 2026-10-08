function SiteFooter({ctx}){
  const {Logo,TriadStripe,Button,Icon}=window.DesignSystem_a62ddd;const t=ctx.t,ft=t.foot;
  const socials=[['VK','https://vk.com/'],['Telegram','https://t.me/'],['YouTube','https://youtube.com/'],['Дзен','https://dzen.ru/']];
  const L=(k,txt,fn)=><a href="#" onClick={e=>{e.preventDefault();fn&&fn()}}>{txt}</a>;
  return <footer id="contacts" className="ftr" data-screen-label="Контакты">
    <TriadStripe height={10}/>
    <div className="wrap">
      <div className="ftr-top">
        <div className="ftr-brand"><Logo version="full" tone="white" height={60} assetBase={window.B2B_A}/><div className="ftr-school">{t.school1} {t.school2}</div></div>
        <div className="ftr-cta"><Button variant="inverse" size="lg" onClick={()=>(ctx.page||ctx.go)('courses')} iconRight={<Icon name="arrow-up-right" size={20}/>}>{ft.cta}</Button><Tools ctx={ctx}/></div>
      </div>
      <div className="ftr-grid">
        <div><div className="ftr-h">{ft.nav}</div><ul className="ftr-ul">{window.B2B.nav.map(n=><li key={n}>{L(n,t.nav[n],()=>(ctx.page||ctx.go)(n))}</li>)}</ul></div>
        <div><div className="ftr-h">{ft.contacts}</div><ul className="ftr-ul ftr-plain">
          <li>195251, Санкт-Петербург,<br/>ул. Политехническая, 29</li>
          <li><a href="tel:+78120000000">+7 (812) 000-00-00</a></li>
          <li><a href="mailto:b2b@spbstu.ru">b2b@spbstu.ru</a></li>
          <li className="ftr-dim">{ft.hours}</li></ul></div>
        <div><div className="ftr-h">{ft.students}</div><ul className="ftr-ul">
          <li>{L('c',t.tools.cabinet,ctx.openCab)}</li><li>{L('lv',t.tools.lv,ctx.toggleLv)}</li><li>{L('o',t.orgInfo)}</li><li>{L('p',t.policy)}</li></ul></div>
        <div><div className="ftr-h">{ft.social}</div><div className="soc">{socials.map(([n,u])=><a key={n} href={u} target="_blank" rel="noopener" className="soc-i">{n}<Icon name="arrow-up-right" size={16}/></a>)}</div></div>
      </div>
      <div className="ftr-legal">
        <p>ФГАОУ ВО «Санкт-Петербургский политехнический университет Петра Великого» · ИНН XXXXXXXXXX · ОГРН XXXXXXXXXXXXX</p>
        <p>Лицензия на осуществление образовательной деятельности № XXXX от XX.XX.XXXX, выдана Федеральной службой по надзору в сфере образования и науки</p>
      </div>
      <div className="ftr-bot"><span><b>© 2026 СПбПУ.</b> {ft.rights}</span><a href="#" onClick={e=>e.preventDefault()}>{t.policy}</a><a href="#" onClick={e=>e.preventDefault()}>{t.orgInfo}</a><span className="ftr-slogan">{ft.slogan}</span></div>
    </div>
  </footer>;
}
window.SiteFooter=SiteFooter;
