import {useParams} from "react-router-dom";

function BlogPost() {
    const {id} = useParams();

    return (<div>The id of this post is {id}</div>);
}

export default BlogPost;