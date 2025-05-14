import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PostDet() {
    const [post, setPost] = useState();

    const { id } = useParams();
    // console.log("Card");

    const fetchPost = async (id) => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await res.json();
        setPost(data);
    };

    useEffect(() => {
        fetchPost(id);
    }, [id]);

    return (
        <>
            <Header></Header>
            <section>
                <h1>{post && post.title}</h1>
                <p>{post?.body}</p>
                <p>{post?.id}</p>
            </section>
        </>
    );
}

export default PostDet;
