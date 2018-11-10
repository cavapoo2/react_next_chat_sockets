import styles from '../styles/style.scss';
const Login = () => (
<div className="form">

<ul className="tab-group">
  <li className="tab active"><a href="#signup">Sign Up</a></li>
  <li className="tab"><a href="#login">Log In</a></li>
</ul>

<div className="tab-content">

    <div id="login">
        <h1>Welcome Back!</h1>

        <form action="/" method="post">

            <div className="field-wrap">
                <label>
                    Email Address<span className="req">*</span>
                </label>
                <input type="email" required autocomplete="off" />
            </div>

            <div className="field-wrap">
                <label>
                    Password<span className="req">*</span>
                </label>
                <input type="password" required autocomplete="off" />
            </div>

            <p className="forgot"><a href="#">Forgot Password?</a></p>

            <button className="button button-block">Log In</button>

        </form>

    </div>
    <style jsx>{styles}</style>
    </div>
    </div>

)
export default Login;