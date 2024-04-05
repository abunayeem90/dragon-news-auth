import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const LeftSideNav = ({news}) => {
    
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="space-y-4">
            <h2 className="text-2xl">All Caterogy</h2>
            {
                categories.map(category => 
                <NavLink to={`/category/${category.id}`} className="block ml-4 text-xl font-semibold"
                key={category.id}>{category.name}</NavLink>)
            }
            {/* Nav News */}
            <div>
                <h1>Lorem ipsum {news.title}</h1>
                
            </div>
        </div>
    );
};

export default LeftSideNav;

LeftSideNav.propTypes ={
    news: PropTypes.object
}