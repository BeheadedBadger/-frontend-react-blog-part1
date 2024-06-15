import NewPostForm from "../../src/components/NewPostForm.jsx";
import "./NewPost.css"

function NewPost() {
    return (
        <div className="new-post">
            <h2>Nieuwe blog post:</h2>
            <NewPostForm/>
        </div>
    )
}

export default NewPost;