import BlogList from './BlogList';
import useAxios from '../components/UseAxios';


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
            <BlogList blogs={blogs}/>
        </div>
    );
}

export default Home;