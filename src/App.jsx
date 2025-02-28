import './App.css'
import logo from './assets/logo-medium.png'
import {Link, Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import NotFound from "../pages/error/NotFound.jsx";
import BlogPost from "../pages/blogPost/BlogPost.jsx";
import BlogOverview from "../pages/blogOverview/BlogOverview.jsx";
import NewPost from "../pages/newPost/NewPost.jsx";

function App() {
    return (
        <div className="page-container">
            <div className="header">
                <img src={logo} alt="Company logo"/>
                <div className="header-links">
                    <Link to="/home">Home</Link>
                    <Link to="/blogposts">Alle posts</Link>
                    <Link to="/newpost">Nieuwe post maken</Link>
                </div>
            </div>
            <div className="content">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/blogpost/:index" element={<BlogPost/>}/>
                <Route path="/newpost" element={<NewPost/>}/>
                <Route path="/blogposts" element={<BlogOverview/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            </div>
            {/* Eventuele footer ... */}
        </div>
    )
}

export default App
