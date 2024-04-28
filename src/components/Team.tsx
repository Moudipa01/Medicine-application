import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { StaticImageData } from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import suraj from "../assets/suraj.png";
import sounak from "../assets/sounak.jpeg";
import yashwant from "../assets/yashwant.jpeg";

interface TeamProps {
    imageUrl: string;
    name: string;
    position: string;
    socialNetworks: SociaNetworkslProps[];
  }

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: sounak,
    name: "Souank Mandal",
    position: "20BCE2737",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/sounak-mandal-700382205/" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/thats_sounak/",
      },
    ],
  },
  {
    imageUrl: yashwant,
    name: "Yashwant Chavan",
    position: "20BCE2252",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/yashwantchavan72/" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: suraj,
    name: "Suraj Tripathy",
    position: "20BCE2200",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/suraj-tripathy-646546266/" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/wanna_fly_high_0110_/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Team{" "}
        </span>
        Members
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Capstone Project - Medical Recommendation System Website
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-10 justify-center">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center shadow-lg"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <Image
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  width={200} // Specify the width of the image
                  height={200} 
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>BTech Computer Science Technology</p>
                <p>SCOPE - VIT Vellore</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
