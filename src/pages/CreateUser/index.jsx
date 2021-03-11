import React from 'react';

export default function CreateUser() {
    function handleInputChange(event) {
        console.log(event.target.value)
    }

    return (
        <div>
            <form action="">
                <input type="name" placeholder="name" />
                <input type="email" placeholder="email" />
            </form>
        </div>
    );
}
