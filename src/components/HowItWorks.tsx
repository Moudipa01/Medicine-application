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
    title: "User Query",
    description:
      "When someone looks up a medication name on the website, the system starts working behind the scenes.⁠It's like asking the website to find other medicines that are kind of like the one they typed in.⁠The system then starts comparing the medication the user searched for with all the others it knows about.",
  },
  {
    icon: <MapIcon />,
    title: "Finding Similar Medicines",
    description:
      "⁠Imagine the system looking at each medicine and checking what it's made of and what it's used for.⁠Based on this information, it decides which medicines are like the one the user searched for.⁠So, if someone searched for 'Aspirin,'it might also show them other pain relievers with similar ingredients.",
  },
  {
    icon: <PlaneIcon />,
    title: "Sorting and Selecting",
    description:
      "Once the system has a bunch of medicines that are kind of similar, it wants to show the most similar ones first.⁠It's like sorting a list from most like least similar, so the user sees the closest matches at the top.After sorting, the system picks out a few of the closest matches, maybe the top 5 or 10, to show to the user.",
  },
  {
    icon: <GiftIcon />,
    title: "Showing Results",
    description:
      "Finally, the website presents these similar medicines to the user in a neat list. ⁠Each medicine on the list comes with some basic info, like its name, what type of medicine it is, and how similar it is to the one they searched for.⁠This way, the user can quickly see which medicines might be close enough to what they're looking for.",
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
