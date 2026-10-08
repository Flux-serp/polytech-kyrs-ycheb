function EnrollDialog({open,onClose,onDone}){
 const {Dialog,Input,Select,RadioGroup,Checkbox,Button}=window.DesignSystem_a62ddd;
 const [mail,setMail]=React.useState('');const [err,setErr]=React.useState('');
 const submit=()=>{if(!/.+@.+\..+/.test(mail)){setErr('Проверьте адрес почты');return;}setErr('');onDone();};
 return <Dialog open={open} onClose={onClose} title="Запись на курс" footer={<><Button variant="ghost" onClick={onClose}>Отмена</Button><Button onClick={submit}>Отправить заявку</Button></>}>
  <div style={{display:'grid',gap:20}}>
   <Input label="Имя и фамилия" placeholder="Анна Иванова"/>
   <Input label="Электронная почта" placeholder="name@edu.spbstu.ru" value={mail} onChange={e=>setMail(e.target.value)} error={err} hint="На неё придёт ссылка на курс"/>
   <Select label="Институт" options={['Институт компьютерных наук и кибербезопасности','Физико-механический институт','Институт энергетики','Другое']}/>
   <div><div style={{font:'600 13px var(--font-sans)',marginBottom:10}}>Формат</div><RadioGroup name="fmt" options={['Очно','Онлайн']} defaultValue="Очно" direction="row"/></div>
   <Checkbox label="Согласен на обработку персональных данных" defaultChecked/>
  </div></Dialog>;
}
window.EnrollDialog=EnrollDialog;