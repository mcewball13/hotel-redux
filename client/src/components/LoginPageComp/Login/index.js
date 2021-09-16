import React from "react";

const LoginForm = () => (
    <form>
        <label htmlFor="uname">
            <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label htmlFor="psw">
            <b>Password</b>
        </label>
        <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
        />

        <button htmlFor="submit">Login</button>
    </form>
);

export default LoginForm;
