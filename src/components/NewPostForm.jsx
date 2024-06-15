import {Navigate} from "react-router-dom";
import {useState} from "react";
import {readTime} from "../helpers/ReadTime.jsx";

function NewPostForm() {
    const [hasSend, toggleHasSend] = useState(false);

    return (<>
            <form>
                <div className="new-post-details">
                    <div className="input-square">
                        <label htmlFor="title">Titel:</label>
                        <input type="text" id="title"/></div>
                    <div className="input-square">
                        <label htmlFor="subtitle">Subtitel:</label>
                        <input type="text" id="subtitle"/></div>
                    <div className="input-square">
                        <label htmlFor="author">Auteur:</label>
                        <input type="text" id="author"/></div>
                </div>
                <label htmlFor="post">Bericht:</label>
                <textarea name="post" id="post" minLength="300" maxLength="2000" cols="100" rows="10"></textarea>
            </form>
            <button type="submit" onClick={sendInfo}>Verzenden</button>
        {hasSend && (<Navigate to="/blogposts"/>)}
        </>
    )

    function sendInfo() {
        if (document.getElementById("post").value.length < 300) {
            console.log("Post needs to be at least 300 characters long." + "\n" +
                "It is currently " + document.getElementById("post").value.length + " characters long.")
        }

        else {
            console.log(
                "title: " + document.getElementById("title").value + "\n" +
                "subtitle: " + document.getElementById("subtitle").value + "\n" +
                "content: " + document.getElementById("post").value + "\n" +
                "author: " + document.getElementById("author").value + "\n" +
                "created: " + new Date() + "\n" +
                "readTime: " + readTime(document.getElementById("post").value) + "\n" +
                "comments: 0 " + "\n" +
                "shares: 0 "
            );
            toggleHasSend(true);
        }
    }
}


export default NewPostForm;