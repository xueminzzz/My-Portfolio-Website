"use client"
import Link from 'next/link'
import styles from './page.module.css'
import { useState } from 'react'

export default function AboutMe() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState(null);

    const handleFormSubmission = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            });

            if (res.status === 200) {
                // Reset input fields and show success message
                setName("");
                setEmail("");
                setMessage("");
                setSuccessMessage("Message successfully sent, thank you!");
                setTimeout(() => {
                    setSuccessMessage(null);
                }, 2000);
            }

        } catch (err) {
            // Handle errors here
        }
    }

    return (
        <body className={styles["main-container"]}>
            <div className={styles["parent-container"]}>
                <div className={`${styles["child-container"]} ${styles["container-light"]}`}>
                    <div className={styles["container-light-top"]}>
                        <p className={styles["title"]}>About me.</p>
                        <Link href="/">
                            <button className={styles["close-button-light"]}></button>
                        </Link>
                    </div>
                    <p className={styles["description"]}>Aspiring Software Developer.</p>
                    <p className={styles["about-me-content"]}>
                        I'm Xue Min, a 21-year-old student currently doing my undergraduate degree in <strong>Computer Science
                            and
                            Design</strong> at the <a className={styles["link"]} href="https://www.sutd.edu.sg/" target="_blank">Singapore University of Technology and Design
                                (SUTD)</a>. I am
                        interested in Software as a Service, where I get to create software solutions to solve real-world
                        problems.
                        I am
                        particularly interested in <strong>front-end development</strong>. When not working
                        on code, I like to dance.
                    </p>
                </div>
                <div className={`${styles["child-container"]} ${styles["container-dark"]}`}>
                    <div className={styles["container-dark-top"]}>
                        <p className={styles["title"]}>Let's chat.</p>
                        <Link href="/">
                            <button className={styles["close-button-dark"]}></button>
                        </Link>
                    </div>
                    <p className={styles["description"]}>Open to work.</p>
                    <div>
                        <form onSubmit={handleFormSubmission}>
                            <div>
                                <p className={styles["form"]}>Name *</p>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    className={styles["line-input"]}
                                    alt="input name"
                                    required={true}
                                >
                                </input>
                            </div>
                            <div>
                                <p className={styles["form"]}>E-mail *</p>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className={styles["line-input"]}
                                    alt="input email"
                                    required={true}
                                >
                                </input>
                            </div>
                            <div>
                                <p className={styles["form"]}>Message *</p>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className={styles["line-input"]}
                                    alt="input message"
                                    required={true}
                                >
                                </textarea>
                            </div>
                            <button className={styles["submit-button"]}>Send Message</button>
                        </form>
                        <div className={styles["success-message"]} >{successMessage}</div>
                    </div>
                </div>
            </div>
        </body>
    );
}
