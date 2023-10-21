import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"


export default function AboutSection() {
  return (
    <section className="text-white">
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
          <div className="flex flex-row mt-8">
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="education">
                <ul>
                  <li>UW tacmoa</li>
                  <li>UW tacmoa</li>
                  <li>UW tacmoa</li>
                  <li>UW tacmoa</li>
                  <li>UW tacmoa</li>
                  <li>UW tacmoa</li>
                  <li>UW tacmoa</li>

                  <li>UW tacmoa</li><li>UW tacmoa</li>

                </ul>
              </TabsContent>
              <TabsContent value="skills">
                <ul>
                  <li>UW tacmoa</li>
                  <li>UW tacmoa</li>
                  <li>UW tacmoa</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
