import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
       <ul>
            <li>
                <Link to={'/'}> header</Link>
            </li>
            <li>
                <Link to={'/todo-list'}> TodoList</Link>
            </li>
            <li>
                <Link to={'/user-list'}> user-list</Link>
            </li>
            <li>
                <Link to={'/add-task'}> add-task</Link>
            </li>
            <li>
                <Link to={'/count'}> count</Link>
            </li>
            <li>
                <Link to={'/posts'}> count</Link>
            </li>
            
       </ul>
    );
};

export default Header;