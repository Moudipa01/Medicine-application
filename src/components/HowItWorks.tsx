import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Clear Composition Insights:",
    description:
      "We prioritize transparency by offering detailed insights into the compositions of alternative medications. Users can easily compare active ingredients, dosage strengths, and additional components, empowering them to make informed decisions based on their specific health needs and preferences.",
  },
  {
    icon: <MapIcon />,
    title: "Comprehensive Equivalency Mapping",
    description:
      "Our web application provides a comprehensive database of medication equivalencies, bridging the gap between brand names and generic alternatives. Users can effortlessly search for their preferred brand and instantly discover equivalent medications, ensuring they never face uncertainty at the pharmacy counter.",
  },
  {
    icon: <PlaneIcon />,
    title: "Personalized Recommendations:",
    description:
      "Through intelligent algorithms, our platform offers personalized medication recommendations based on user input and preferences. Whether users seek cost-effective alternatives or specific formulations, our system tailors suggestions to match individual requirements, enhancing user satisfaction and adherence. ",
  },
  {
    icon: <GiftIcon />,
    title: "Personalized Recommendations:",
    description:
      "Our user-friendly interface ensures a seamless and intuitive experience for consumers of all backgrounds. With interactive features such as visual representations of medication compositions and user-friendly search functionalities, navigating the complex landscape of medication substitutions becomes effortless and empowering.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
