"use client";
import { useState } from "react";
import Header from "./header/header";
import AboutMe from "./about-me/about-me";

export default function AboutMeCard() {
    console.log("About Me component rendered");
    // toggle sidebar
    const [Open, IsOpen] = useState(false);

    const toggleAboutMe = () => {
        IsOpen(!Open);
        console.log("About Me clicked! isOpen:", !Open);
    };

    return (
        <>
            <Header toggleAboutMe={toggleAboutMe} />
            <AboutMe Open={Open} toggleAboutMe={toggleAboutMe} />
        </>
    );
};
