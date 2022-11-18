import BlogList from './BlogList';
import useAxios from '../components/UseAxios';


const Home = () => {
    const { data: blogs, isPending, error } = useAxios('https://server-json.onrender.com/blog');
  
  
  
    if (isPending) {
        return (
        <div  className="loader  h-[80vh] flex flex-col justify-center items-center  ">
        
        
            <div className='
             h-16 w-16 border-4
             border-l-slate-500 
             border-r-slate-500 
             border-b-slate-500 
             border-t-blue-700 
             animate-spin ease-linear
             rounded-full'>  
            </div>
        Carregando...
        </div>)
    }
    if (error) {
        return (<div className="error loader bg-black h-[80vh] flex flex-col justify-center items-center" >
            {error}</div>);
    }
    return (
        <div clasName="home">
            <BlogList blogs={blogs}/>
        </div>
    );
}

export default Home;