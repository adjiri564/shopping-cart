import storeImage from '../assets/visuals-At7ozqXbq8I-unsplash.jpg'

const Home = () => {  
    return (  
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">  
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Store!</h1>  
            <p className="text-lg text-center mb-8">Find amazing products at great prices!</p> 
            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
                <img src={storeImage} alt="store image" className="w-full h-48 object-cover rounded-t-xl" />
            </div>
            {/* <img src={storeImage} alt="store" className="rounded-lg shadow-md"/>   */}
        </div>  
    );  
};  

export default Home;