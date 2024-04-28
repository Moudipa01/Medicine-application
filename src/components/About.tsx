import about from "../assets/about.png";
import Image from "next/image";

export const About = () => {
    return (
        <section
            id="about"
            className="container py-24 sm:py-32"
        >
            <div className="bg-muted/50 border rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <Image
                        src={about}
                        alt=""
                        className="w-[300px] object-contain rounded-lg"
                    />
                    {/* <Image src={about} alt="" layout="fill" objectFit="contain" /> */}
                    <div className="bg-green-0 flex flex-col justify-between">
                        <div className="pb-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                    About{" "}
                                </span>
                                Project
                            </h2>
                            <p className="text-xl text-muted-foreground mt-4">
                            Difficulty in finding alternatives? Not sure about the substitute drug? Come, Join Us!!! We provide you the best alternatives of all the medicines, which you really need. Because your health matter to us...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
