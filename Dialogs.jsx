import { NavLink } from "react-router-dom"
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"


const Dialogs = (props) => {

    let DialogsData = 
    [
        {name: 'Kate', id:1},
        {name: 'Masha', id:2},
        {name: 'Dasha', id:3},
        {name: 'Petr', id:4},
        {name: 'Mark', id:5},
        {name: 'Polina', id:6},
    ]

    let messageData = 
    [
        {message: 'Hi', id:1},
        {message: 'Hello', id:2},
        {message: 'Chao', id:3},
        {message: 'Bye', id:4},
        {message: 'Yo', id:5},
        {message: 'Oo', id:6},
    ]

    let dialogsElements = DialogsData
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id}></DialogItem>)

    // <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}></DialogItem>
    // <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}></DialogItem>
    // <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}></DialogItem>

    let messageElements = messageData
    .map( message =>  <Message message={message.message}></Message>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={classes.messages__items}>
                {/* <Message message={messageData[0].message}></Message>
                <Message message={messageData[1].message}></Message> */}
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs