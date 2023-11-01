import Image from "next/image";
import React from "react";

export default function SkillsSection() {
  return (
    <section className="text-white py-8" id="skills">
      <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <div className="border-2 rounded-lg bg-[##181818] flex items-center justify-center">
          <Image
            src="/images/java-icon.svg"
            alt="Java"
            width={150}
            height={150}
            className={"hover:scale-110 transition-all duration-500"}
          />
        </div>
        <div className=" border-2 rounded-lg bg-[##181818] flex items-center justify-center">
          <Image
            src="/images/unofficial_javascript_logo_2.svg"
            alt="JavaScript"
            width={150}
            height={150}
            className={"hover:scale-110 transition-all duration-500"}
          />
        </div>
        <div className="border-2 rounded-lg bg-[##181818] flex items-center justify-center">
          <Image
            src="/images/net_core_logo.svg"
            alt=".NET"
            width={150}
            height={150}
            className={"hover:scale-110 transition-all duration-500"}
          />
        </div>
        <div className="border-2 rounded-lg bg-[##181818] flex items-center justify-center">
          <Image
            src="/images/postgresql_elephant.svg"
            alt="Java"
            width={150}
            height={150}
            className={"hover:scale-110 transition-all duration-500"}
          />
        </div>
        <div className="border-2 rounded-lg bg-[##181818] flex items-center justify-center">
          <Image
            src="/images/sql-database-generic.svg"
            alt="Java"
            width={150}
            height={150}
            className={"hover:scale-110 transition-all duration-500"}
          />
        </div>
        <div className="border-2 rounded-lg bg-[##181818] flex items-center justify-center">
          <Image
            src="/images/MongoDB_Spring-Green.svg"
            alt="Java"
            width={150}
            height={150}
            className={"hover:scale-110 transition-all duration-500"}
          />
        </div>
        <div className="border-2 rounded-lg bg-[##181818] flex items-center justify-center">
          <Image
            src="/images/nextjs-icon.svg"
            alt="Java"
            width={150}
            height={150}
            className={"hover:scale-110 transition-all duration-500"}
          />
        </div>
        <div className="border-2 rounded-lg bg-[##181818] flex items-center justify-center">
          <Image
            src="/images/react-icon.svg"
            alt="Java"
            width={150}
            height={150}
            className={"hover:scale-110 transition-all duration-500"}
          />
        </div>
        <div className="border-2 rounded-lg bg-[##181818] flex items-center justify-center">
          <Image
            src="/images/git-icon-white.svg"
            alt="Java"
            width={150}
            height={150}
            className={"hover:scale-110 transition-all duration-500"}
          />
        </div>
      </div>
    </section>
  );
}
