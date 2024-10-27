import { useLoaderData } from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel";
import TabCategories from "../../Components/TabCategories/TabCategories";

const Home = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    return (
        <div>
            <Carousel></Carousel>
            <TabCategories></TabCategories>
        </div>
    );
};

export default Home;