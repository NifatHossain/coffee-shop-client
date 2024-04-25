import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";


const SignUp = () => {
    const {registerUser}=useContext(AuthContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form= e.target;
        const email= form.email.value;
        const password= form.password.value;
        registerUser(email,password)
        .then(result=>{
            console.log(result.user)
            const createdAt= result.user.metadata?.creationTime;
            const user= {email,createdAt}
            fetch('http://localhost:5000/user',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
            form.reset();
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
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
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to={'/signin'} className="label-text-alt link link-hover text-purple-500">Already have an account? Login</Link>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;