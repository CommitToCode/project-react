
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchCategories = () => {
        axios
            .get(`https://dummyjson.com/products/categories`)
            .then((response) => {
                console.log('Fetched categories:', response.data);
                setCategories(response.data);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    };

    useEffect(() => {
        fetchCategories();
    }, []);
    const filteredCategories = categories.filter((category) =>
        (category.name || category.slug).toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Product Categories</h1>

            <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <ul>
                {filteredCategories.map((category, index) => (
                    <li key={index}>
                        <Link to={`products/${category}`}> <li key={index}>{category.name || category.slug}</li> </Link>
                    </li>

                ))}
            </ul>
        </div>
    );
};

export default Category;





