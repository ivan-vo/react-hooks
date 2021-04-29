import React from 'react';



export default function TimerForm() {
    return (
        <form>
            <input type='text' name='name' />
            <input type='text' name='minutes'/>
            <button tupe='submit'>Add new timer</button>
        </form>
    )
}
