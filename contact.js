import React from 'react'
import Layout from ".//components/Layout"


const contact = () => {
    return (

        <Layout>
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Want To Get In Touch</h3>
                        <p> Call Us!</p>
                    </article>
                    <article>
                        <form className="form contact-form">
                            <div className="form-row">
                                <label htmlFor="name">your name</label>
                                <input type="text" name = "name" id="email" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">your email</label>
                                <input type="text" name = "email" id="email" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">your message</label>
                                <input name = "message" id="message" />
                            </div>
                            <button type="submit" className="btn block">Submit</button>
                        </form>
                    </article>
                </section>
            </main> 
        </Layout>
    )
}

export default contact