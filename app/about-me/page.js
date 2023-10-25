import styles from './page.module.css';

export default function AboutMe() {
    return (
        <body className={styles["main-container"]}>
            <div className={styles["parent-container"]}>
                <div className={`${styles["child-container"]} ${styles["container-light"]}`}>
                    <p className={styles["title"]}>About me.</p>
                    <p className={styles["description"]}>Aspiring Software Developer.</p>
                    <p className={styles["about-me-content"]}>
                        I'm Xue Min, a 21-year-old student currently doing my undergraduate degree in <strong>Computer Science
                            and
                            Design</strong> at the <a className={styles["link"]}href="https://www.sutd.edu.sg/" target="_blank">Singapore University of Technology and Design
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
                        <button className={styles["close-button"]}></button>
                    </div>
                    <p className={styles["description"]}>Open to work.</p>
                    <div>
                        <p className={styles["form"]}>Name *</p>
                        <input type="text" className={styles["line-input"]} alt="input name" required></input>
                    </div>
                    <div>
                        <p className={styles["form"]}>E-mail *</p>
                        <input type="text" className={styles["line-input"]} alt="input email" required></input>
                    </div>
                    <div>
                        <p className={styles["form"]}>Message *</p>
                        <textarea className={styles["line-input"]} alt="input message" required></textarea>
                    </div>
                    <button className={styles["submit-button"]}>Send Message</button>
                </div>
            </div>
        </body>

    );
}
