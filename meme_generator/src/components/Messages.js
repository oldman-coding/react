import { useState } from "react"
export default function Messages() {
    const [messages, setMessages] = useState(["a"])
    const len = messages.length
    return (
        <div>
            {(len == 0 )
                ? <h1>You're caught up!</h1>
                : <h1>You have {len} unread {len==1 ? "message" : "messages"}</h1>  
            }
        </div>
    )
}