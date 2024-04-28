"use client"
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Footer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="footer">
      <hr className="w-11/12 mx-auto" />
      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join Our Daily{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Newsletter
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          To report any bugs and to get updats!!
        </p>
        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="sounak.mandal2020@vitstudent.ac.in"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <Button>Subscribe</Button>
        </form>
      </div>
      <hr className="w-11/12 mx-auto" />
      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Mecicine Recommendation System{" "}
          <a className="text-primary transition-all border-primary hover:border-b-2">
            VIT-Vellore Students
          </a>
        </h3>
      </section>
    </section>
  );
};
