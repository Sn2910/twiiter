import React from 'react'
import './MessagePage.css'
import { useParams } from 'react-router-dom'

function MessagePage() {
    const { id } = useParams()
    return (
        <div>
            <h1>{id}</h1>
            {/* Dedicated Post */}
        </div>
    )
}

export default MessagePage
