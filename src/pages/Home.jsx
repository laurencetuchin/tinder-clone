import Nav from '../components/nav';


const Home = () => {

    const authToken = false;

    const handleClick = () => {
        console.log('clicked');
    }

    return (
        <>
        <Nav minimal={false}/>
        </>    
        );
    }

    export default Home;