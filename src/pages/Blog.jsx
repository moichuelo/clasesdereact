import Header from "../components/Header";
import { useState, useEffect } from "react";
import CardPost from "../components/CardPost";

function Blog() {
    const [post, setPost] = useState([]);

    const fetchPost = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPost(data);
    };

    useEffect(() => {
        fetchPost();
    }, []);

    const postCards = post.map((post) => (
        <CardPost key={post.id} post={post} />
    ));

    return (
        <>
            <Header></Header>
            <h1>Blog</h1>
            {postCards}
        </>
    );
}

export default Blog;
