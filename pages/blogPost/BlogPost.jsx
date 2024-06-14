import {Link, useParams} from "react-router-dom";
import "./BlogPost.css"
import data from "../../src/constants/data.json"
import {formatDate} from "../../src/helpers/DateConversion.jsx";

function BlogPost() {
    const {index} = useParams();
    const post = data[index];
    const postDate = data[index].created;

    return (<>
        <div className="blog-post">
            <div className="blog-title"><h2>{post.title}</h2> <p>({post.readTime} minuten)</p></div>
            <p>{post.subtitle} door {post.author} op {formatDate(postDate)}</p>
            <hr></hr>
            <p>{post.content}</p>
            <hr></hr>
            <p className="green">{post.comments} reacties - {post.shares} keer gedeeld</p>
            <Link to = "/blogposts"><p>↤ Terug naar de overzichtspagina</p></Link>
        </div>
        </>)
}

export default BlogPost;