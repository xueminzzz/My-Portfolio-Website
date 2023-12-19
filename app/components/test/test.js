import styles from "./test.module.css";
import Test1 from "../test1/test1";
import { useState } from "react";

const Test = () => {
    const [isOpen, setOpen] = useState(true);

    console.log({ isOpen })

    const showTest1 = () => {
        setOpen(true)
        console.log("rendered show")
    }

    const hideTest1 = () => {
        setOpen(false)
        console.log("rendered close")
    }

    return (
        <div className={styles["main-container"]}>
            <button onClick={showTest1}>OPEN</button>
            <button onClick={hideTest1}>CLOSE</button>
            {isOpen && <Test1 isOpen={isOpen} />}
        </div>
    )
}

export default Test