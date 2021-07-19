import cls from './Message.module.css'
const Message = (p) => {
  
           return (
               <div>
                   <div className={cls.message__item}>{p.message}</div>
        </div>
    )}

export default Message;