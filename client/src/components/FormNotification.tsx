import React from 'react'
import { INotification } from '../interfaces/components/INotification'

const Notification: React.FC<INotification> = ({ className, type, message}) =>  {
    return (
        <div style={{ backgroundColor: `${type}` }}>
            <p>{message}</p>
        </div>
    )
}

export default Notification