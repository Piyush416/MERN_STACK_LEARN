import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <input type="text" placeholder="Enter user name" />
            <input type="text" placeholder="Enter password" />
            <button>Login</button>
        </div>
    )
}

export default Login