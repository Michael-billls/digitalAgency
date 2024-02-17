import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
    {
        name: "App Development",
        icon: <FaCameraRetro className="text-4xl text-primary" />,
        link: "#",
        description:
            "The software can be preinstalled on the device, downloaded from a mobile app store or accessed through a mobile web browser.",
        aosDelay: "0",
    },
    {
        name: "Web Designing",
        icon: <GiNotebook className="text-4xl text-primary" />,
        link: "#",
        description:
            " responsible for creating the design and layout of a website or web pages.",
        aosDelay: "300",
    },
    {
        name: "Graphic Designing",
        icon: <SlNote className="text-4xl text-primary" />,
        link: "#",
        description:
            "craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users'",
        aosDelay: "500",
    },
    {
        name: "Digital Marketing",
        icon: <SlNote className="text-4xl text-primary" />,
        link: "#",
        description:
            "The promotion of brands to connect with potential customers using the internet and other forms of digital communication."
    },
];
const Services = () => {
    return (
        <>
            <span id="about"></span>
            <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
                <div className="container">

                    <div className="pb-12 text-center space-y-3">
                        <h1
                            data-aos="fade-up"
                            className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
                        >
                            Explore Our Services
                        </h1>
                        <p
                            data-aos="fade-up"
                            className="text-gray-600 dark:text-gray-400 text-sm font-serif"
                        >
                            We are self-service data analytics software that lets you create
                            visually.
                        </p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                        {skillsData.map((skill) => (
                            <div
                                key={skill.name}
                                data-aos="fade-up"
                                data-aos-delay={skill.aosDelay}
                                className="card space-y-3 sm:space-y-4 p-4"
                            >
                                <div>{skill.icon}</div>
                                <h1 className="text-lg font-semibold">{skill.name}</h1>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {skill.description}
                                </p>
                            </div>
                        ))}
                    </div>


                    <div
                        data-aos="fade-up"
                        data-aos-delay="900"
                        data-aos-offset="0"
                        className="text-center mt-4 sm:mt-8"
                    >
                        <button className="btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;