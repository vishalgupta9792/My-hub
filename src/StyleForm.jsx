export const StyleForm = () => {
    return(
        <form className="contact-form">
           <label htmlFor="username">Username:</label>
           <input type="text" id="username" name="username" />
           <br />
            <label htmlFor="email">Email:</label> 
            <input type="email" id="email" name="email" />  
            <br />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea> 
            <br />   
            <button type="submit">Submit</button>

           
        </form>
    )
}