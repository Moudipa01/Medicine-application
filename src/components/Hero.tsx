import Link from 'next/link';
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Medicine
            </span>{' '}
            Recommendation
          </h1>{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Your Health
            </span>{' '}
            Our Priority
          </h2>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Your Guide to Alternative Medicine Options!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/Login">
            <div>
              <Button className="w-full md:w-1/3">Get Started</Button>
            </div>
          </Link>
        </div>
      </div>
      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
