import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-600 to-black text-white"
    >
      <div className="mx-w-screen-lg max-w-[1000px]  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pd-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi iure
          alias quos quaerat fuga eos excepturi maxime, blanditiis eius
          recusandae culpa enim sapiente ut velit in, quidem earum obcaecati!
          Libero quisquam, fugit voluptatibus, temporibus doloremque repellendus
          et autem eos perspiciatis voluptate ratione aliquid ad iste in ut
          magni molestiae tempore!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          ipsum a, deserunt doloremque corrupti officiis minima, magnam rerum
          itaque provident incidunt quasi consectetur eveniet! Nostrum ullam
          fugiat adipisci error non!
        </p>
      </div>
    </div>
  );
}

export default About;
