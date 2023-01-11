import { useState } from "react"
export default function Messages() {
    const [messages, setMessages] = useState([])
    const len = messages.length
    return (
        <div>
            {(len > 1 )
                ? <div>You have {len} unread messages</div>
                : (len ==1) 
                    ? <div>You have {len} message</div>
                    : <div>You have all caught!</div>  
            }
        </div>
    )
}