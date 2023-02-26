import { MainContext } from '@/components/context/MainProvider';
import React, { useContext } from 'react'

const Banner = () => {

    const { setIsModalLogin, userInfo, isLogin, handleLogout } = useContext(MainContext);

    const showLogin = () => {
        setIsModalLogin(true);
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello {userInfo?.email ? userInfo?.email : "there"}</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    {isLogin ? <button className="btn btn-primary" onClick={handleLogout}>Logout</button> : <button className="btn btn-primary" onClick={showLogin}>Login</button>}
                </div>
            </div>
        </div>
    )
}

export default Banner