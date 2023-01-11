import { useState } from "react"
export default function Messages() {
    const [messages, setMessages] = useState("")
    return (
        <div>
            {messages.length > 0 && <div>You have {messages.length} unread messages</div>}
        </div>
    )
}