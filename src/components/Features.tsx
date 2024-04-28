import { Badge } from "./ui/badge";
import Image from "next/image";
import { StaticImageData } from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/recomm.png";
import image3 from "../assets/med.png";
import compri from "../assets/compri.png";
import image4 from "../assets/response.png";
import image5 from "../assets/image5.png"

interface FeatureProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const features: FeatureProps[] = [
  {
    title: "Comprehensive Equivalency Mapping",
    description:
      "Our web application provides a comprehensive database of medication equivalencies, bridging the gap between brand names and generic alternatives. Users can effortlessly search for their preferred brand and instantly discover equivalent medications, ensuring they never face uncertainty at the pharmacy counter.",
    image: compri,
  },
  {
    title: "Clear Composition Insights:",
    description:
      "We prioritize transparency by offering detailed insights into the compositions of alternative medications. Users can easily compare active ingredients, dosage strengths, and additional components, empowering them to make informed decisions based on their specific health needs and preferences.",
    image: image3,
  },
  {
    title: "Personalized Recommendations",
    description:
      "Through intelligent algorithms, our platform offers personalized medication recommendations based on user input and preferences. Whether users seek cost-effective alternatives or specific formulations, our system tailors suggestions to match individual requirements, enhancing user satisfaction and adherence.",
    image: image,
  },
  {
    title: "Interactive User Experience",
    description:
      "Our user-friendly interface ensures a seamless and intuitive experience for consumers of all backgrounds. With interactive features such as visual representations of medication compositions and user-friendly search functionalities, navigating the complex landscape of medication substitutions becomes effortless and empowering.",
    image: image4,
  },
  {
    title:"Trusted Information Source",
    description:
    "We prioritize accuracy and reliability by sourcing information from reputable medical databases and expert sources. Users can trust our platform as a go-to resource for reliable medication information, eliminating uncertainty and fostering confidence in their healthcare decisions.",
    image: image5,
  },
];

const featureList: string[] = [
  "medication",
  "equivalencies",
  "Clear Composition Insights",
  "compositions",
  "cost-effective alternatives",
  "intelligent algorithms",
  "Trusted Information Source",
  "accuracy",
  "reliability",
  "medical databases"
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <Image
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
