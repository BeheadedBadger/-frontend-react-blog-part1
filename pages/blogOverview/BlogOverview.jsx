import data from "../../src/constants/data.json"
import {Link} from "react-router-dom";
import "./BlogOverview.css"

function BlogOverview() {
    const listItems = data.map(d =>
        <li key={d.id}>
            <div className="post-link">
                <p><Link to={`/blogpost/${d.id - 1}`}> {d.title}</Link>
                    ({d.author})</p>
                <p className="stats">{d.comments} reacties - {d.shares} keer gedeeld</p>
            </div>
        </li>);

    return <ul>{listItems}</ul>;
}

export default BlogOverview;