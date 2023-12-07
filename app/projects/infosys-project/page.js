"use client"
import styles from "./page.module.css";
import Image from "next/image";
import Player from "@/app/components/video/infosys-video";
import Link from "next/link";

export default function IS() {
    return (
        <div className={styles["main-container"]}>
            <Image
                src={"/infosys-project-header.svg"} priority={true}
                width={0}
                height={0}
                className={styles["project-header"]}
            />
            <div className={styles["title-and-description"]}>
                <div className={styles["title"]}>Grab & Go</div>
                <div className={styles["collaborators"]}>SUTD</div>
                <div className={styles["description-container"]}>
                    <div className={styles["sub-description-container"]}>
                        <div className={styles["sub-description"]}>Timeline:</div>
                        <div className={styles["sub-description-details"]}>January to April 2023</div>
                    </div>
                    <div className={styles["sub-description-container"]}>
                        <div className={styles["sub-description"]}>Tools used:</div>
                        <div className={styles["sub-description-details"]}>Andriod Studios, Java</div>
                    </div>
                </div>
            </div>
            <div className={styles["project-summary"]}>
                <div className={styles["project"]}>The Project</div>
                <div className={styles["summary"]}>
                    SUTD students and staff often find themselves queuing up for long periods of time
                    at the canteen, especially during peak hours. With limited time on their hands,
                    some may even choose to forgo meals, which is not conducive to their health and productivity.
                    Our mobile application aims to reduce the time spent queueing through pre-ordering meals.
                </div>
            </div>
            <div className={styles["project-summary"]}>
                <div className={styles["project"]}>The Product</div>
                <Player />
            </div>
            <div className={styles["project-summary"]}>
                <div className={styles["project"]}>System Design</div>
                <div className={styles["summary"]}>
                    The app uses the <strong>Model-View-Controller framework</strong>. The diagram below summarizes the MVC framework
                    of our app.
                </div>
                <Image
                    src={"/infosys-project-system-design.svg"} priority={true}
                    width={0}
                    height={0}
                    className={`${styles["project-header"]} ${styles["system-design"]}`}
                />
                <div className={styles["summary"]}>
                    <strong>The Model</strong> interacts directly with our database. The Java classes that reside in our
                    Model updates our database. They make use of various design patterns
                    (Builder Design Pattern, Singleton Design Pattern, Factory Pattern) to
                    perform the updates.
                </div>
                <div className={styles["summary"]}>
                    <strong>The Controller</strong> serves as the intermediary between the Model and View. It changes the View
                    based on changes to the Model. Changes to the Model are triggered by user interactions with
                    our app. For example, when the user adds an item to their cart, this will instantiate the
                    onClick() function in the Controller which in turn triggers the Order class in the Model.
                    An Order object will be created and the user will see a new order being created in their cart.
                </div>
                <div className={styles["summary"]}>
                    <strong>The View</strong> is the UI of our app and is what users see and interact with.
                </div>
            </div>
            <div className={styles["project-summary"]}>
                <div className={styles["project"]}>Design Patterns</div>
                <div className={styles["summary"]}>
                    There are 3 design patterns used in our app. Builder Design Pattern, Singleton Design Pattern
                    and Factory Pattern.
                </div>
                <div className={styles["summary"]}>
                    1. <strong>Builder Design Pattern:</strong> The Builder Design Pattern was used to allow the user to specify their
                    add-on options for the food item, and return the food item object with the add-ons customisation.
                    For example, when a user chooses a “Steamed Chicken Rice” food item, the user gets to select
                    whether they want the optional add-ons of meat, vegetables and egg.
                </div>
                <div className={styles["summary"]}>
                    2. <strong>Singleton Design Pattern:</strong> The “Order” class implemented the Singleton Design Pattern to
                    ensure that only one instance of Order is created for each login. When a user logs into the
                    app, he can select multiple food items to add to cart. However, there is only one Order o
                    bject with the multiple food items that will be sent to the database. For example,
                    order #1 has roasted chicken rice, dry banmian.
                </div>
                <div className={styles["summary"]}>
                    3. <strong>Factory Pattern:</strong> The “FoodFactory” class implements the factory design pattern to create
                    different types of food items based on the input of “foodName”. For example, if
                    “RoastedChickenRice” is passed into FoodFactory, a “RoastedChickenRice” object will be
                    instantiated.  This helps to reduce code duplication and make it easier to add more food
                    items in the future.
                </div>
            </div>
            <Link href="https://github.com/xueminzzz/Grab-N-Go" className={styles["link"]} target="blank">
                <div className={styles["website-container"]}>
                    <button className={styles["website-button"]}>Github</button>
                    <button className={styles["right-arrow"]}></button>
                </div>
            </Link>
        </div>
    )
}