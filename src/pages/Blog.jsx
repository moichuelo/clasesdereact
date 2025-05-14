import Header from "../components/Header";
import { useState, useEffect, useContext } from "react";
import CardPost from "../components/CardPost";
import { UserContext } from "../contexts/User.Context";

function Blog() {
    const [post, setPost] = useState([]);
    const [errorr, setErrorr] = useState(false);
    const { user, login, logout } = useContext(UserContext);

    const fetchPost = async () => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await res.json();
            setPost(data);
            setErrorr(false);
            // setUser("Moisés");
        } catch {
            setErrorr(true);
        }
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
            <h1>Bienvenido al blog{user && <span>, {user.name} </span>}</h1>
            <button onClick={() => login()}>Login</button>
            <button onClick={() => logout()}>Logout</button>

            {errorr ? (
                <p>Ha ocurrido un error al importar los posts</p>
            ) : postCards.length === 0 ? (
                <p>Cargando..</p>
            ) : (
                postCards
            )}
            {/* {postCards} */}
        </>
    );
}

export default Blog;
