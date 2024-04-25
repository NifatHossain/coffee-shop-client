import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { data } from "autoprefixer";


const SignIn = () => {
    const {logInUser}=useContext(AuthContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form= e.target;
        const email= form.email.value;
        const password= form.password.value;
        logInUser(email,password)
        .then(result=>{
            console.log(result.user)
            const logInAt= result.user.metadata?.lastSignInTime;
            const userData= {email,logInAt};
            fetch('http://localhost:5000/user',{
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data)
            })
        })
        .catch(error=>{
            console.log(error.message)
        })
        form.reset();
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to={'/signup'} className="label-text-alt link link-hover text-purple-500">Do not have an account? Register</Link>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;