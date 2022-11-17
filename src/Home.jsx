import BlogList from './BlogList';
import useAxios from './UseAxios';
import Navbar from "./Nav"
import Footer from "./Footer"

const Home = () => {
    const { data: blogs, isPending, error } = useAxios('http://localhost:3000/blog');
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
            <Footer/>
        </div>
    );
}

export default Home;