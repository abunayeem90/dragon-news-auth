import { useEffect, useState } from "react";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import NavBar from "../shared/navBar/NavBar";
import BreakingNews from "./BreakingNews";
import { BsBookmark, BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiSolidShow } from "react-icons/bi";

const Home = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, []);
    const newsArray = [news];
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav news={newsArray}></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-4xl mb-4">Dragon News Home {news.length}</h2>

                    {/* sample for map */}
                    {
                        news.map(news =>
                            <Link key={news.id}>
                            <div className="mb-4">
                        <div className="card w-full bg-base-100 shadow-xl">
                            <div className="bg-base-200 border p-3 flex justify-between">
                                <div className="flex">
                                    <div>
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-24 rounded-full">
                                                <img alt="Tailwind CSS Navbar component" src={news.author.img} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="ml-2">
                                        <p>{news.author.name}</p>
                                        <p>{news.author.published_date}</p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-4 mr-2">
                                    <BsBookmark></BsBookmark>
                                    <BsShare></BsShare>
                                </div>
                            </div>
                            <div className="m-4">
                                <h1 className="font-bold mb-3">{news.title  }</h1>
                                <figure className="w-full">
                                    <img src={news.image} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <p className="mt-3 mb-3">
                                   {news.details}
                                    <Link className="text-red-500">Read More</Link>
                                </p>
                                <hr />
                                <div className="mt-3 flex justify-between">
                                    <div>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <span className="ml-3 flex justify-center items-center">{news.rating.number}</span>
                                        </div>
                                    </div>
                                    <div className="flex mr-3 gap-2">
                                        <BiSolidShow className=""></BiSolidShow>
                                        <span>{news.total_view}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            </Link>
                                
                    )}

                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;