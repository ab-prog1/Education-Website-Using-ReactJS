import React from "react"


const Layout = ({ children }) => {
    return (


        <section className="container h-100 ">
            <div className="row h-100 log-form ">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5 m-auto ">
                    {children}
                </div>
            </div>


        </section >
    )
}

export default Layout;