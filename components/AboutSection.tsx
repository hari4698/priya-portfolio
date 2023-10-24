import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { TabCard } from "./TabCard";

const uw_tacoma = {
  title: "University of Washington",
  desc: "Master's in Computer Science and Systems",
  date: "Sep 23 - Dec 24",
  tech1: "Advanced Algorithms",
  tech2: "Data Structures",
  tech3: "Distribured Systems",
};
const srit = {
  title: "Sri Ramakrishna Institute of Technology",
  desc: "Bachelor's in Electronics and Communications Engineering",
  date: "Jul 15 - Jun 19",
  tech1: "Computer Networks",
  tech2: "OOPS",
  tech3: "Computer Architecure",
};
const hitachi = {
  title: "Hitachi Energy",
  desc: "Software Engineer",
  date: "Oct 21 - Apr 22",
  tech1: "ASP.NET",
  tech2: "AngualrJS",
  tech3: "AJAX",
};
const LTMindTree = {
  title: "LTMindtree",
  desc: "Software Engineer",
  date: "Aug 19 - Oct 21",
  tech1: "ASP.NET",
  tech2: "ReactJS",
  tech3: "Web API",
};

export default function AboutSection() {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="About image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base md:text-lg">
            I&apos;m a software developer currently pursing Master&apos;s in
            Computer Science and Systems. I&apos;m passionate about creating
            accessible software for everyone to use. I have experience working
            with Java, JavaScript, C# NextJS, PostgreSQL, HTML, CSS, and Git. I
            have got 2 years of working as a software developer mainly in C# and
            JavaScript. My strengths lie in adaptability and willingness to
            learn new technologies and attention to detail, and I am constantly
            seeking ways to apply these strengths to create value for my team
            and clients.
          </p>
          <div className="flex flex-row mt-8 ">
            <Tabs defaultValue="education" className="w-full ">
              <TabsList className="bg-[#27272a] rounded-md">
                <TabsTrigger
                  className="data-[state=active]:bg-[#610073]"
                  value="education"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-[#610073]"
                  value="skills"
                >
                  Experience
                </TabsTrigger>
              </TabsList>
              <TabsContent value="education">
                <TabCard
                  title={uw_tacoma.title}
                  desc={uw_tacoma.desc}
                  date={uw_tacoma.date}
                  tech1={uw_tacoma.tech1}
                  tech2={uw_tacoma.tech2}
                  tech3={uw_tacoma.tech3}
                />
                <TabCard
                  title={srit.title}
                  desc={srit.desc}
                  date={srit.date}
                  tech1={srit.tech1}
                  tech2={srit.tech2}
                  tech3={srit.tech3}
                />
              </TabsContent>
              <TabsContent value="skills">
                <TabCard
                  title={hitachi.title}
                  desc={hitachi.desc}
                  date={hitachi.date}
                  tech1={hitachi.tech1}
                  tech2={hitachi.tech2}
                  tech3={hitachi.tech3}
                />
                <TabCard
                  title={LTMindTree.title}
                  desc={LTMindTree.desc}
                  date={LTMindTree.date}
                  tech1={LTMindTree.tech1}
                  tech2={LTMindTree.tech2}
                  tech3={LTMindTree.tech3}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
