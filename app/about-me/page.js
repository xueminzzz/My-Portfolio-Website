"use client"
import Link from 'next/link'
import styles from './page.module.css'
import { useForm } from 'react-hook-form'
import sendEmail from '@/utils/sendEmail'
import { useState } from 'react'

export default function AboutMe() {
    const form = useForm();

    const { register, handleSubmit } = form;

    const [responseMessage, setResponseMessage] = useState(
        { isSuccessful: false, message: '' });

    const onSubmit = (data) => {
        try {
            const req = sendEmail(data);
            if (req.status === 250) {
                setResponseMessage(
                    { isSuccessful: true, message: 'Thank you for your message.' });
            }
        } catch (e) {
            console.log(e);
            setResponseMessage({
                isSuccessful: false,
                message: 'Oops something went wrong. Please try again.',
            });
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <p className={styles["form"]}>Name *</p>
                                <input type="text" id="name" className={styles["line-input"]} alt="input name" required={true} {...register("name")}></input>
                            </div>
                            <div>
                                <p className={styles["form"]}>E-mail *</p>
                                <input type="text" id="email" className={styles["line-input"]} alt="input email" required={true} {...register("email")}></input>
                            </div>
                            <div>
                                <p className={styles["form"]}>Message *</p>
                                <textarea id="message" className={styles["line-input"]} alt="input message" required={true} {...register("message")}></textarea>
                            </div>
                            <button className={styles["submit-button"]}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    );
}
