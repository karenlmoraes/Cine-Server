import BlogList from './BlogList';
import useFetch from './useFetch';
import Navbar from "./Nav"

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:3000/blog');
    if (isPending) {
        return <div className="loader"></div>;
    }
    if (error) {
        return <div className="error">{error}</div>;
    }
    return (
        <div clasName="home">
            <Navbar/>
            <BlogList blogs={blogs}/>
        </div>
    );
}

export default Home;