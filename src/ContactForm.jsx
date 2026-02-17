import React from "react";
export const ContactForm = () => {
    return( 
        <form>
            <h1>Welcome to My-Hub</h1>
            <input type="text" placeholder="Your Name" />
            <br/>
            <input type="text" placeholder="your email" />
            <button type="submit">Submit</button>
        </form>
    );
}