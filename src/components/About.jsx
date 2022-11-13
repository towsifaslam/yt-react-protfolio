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
          Assalamualikum <br />
          I am Tajul Islam "Towsif" <br />I am hafezul queran "Hafez does not
          approve of formal religion for people. Hafez believes in a God that
          manifests in every aspect of life. We’ve rounded up the best Rumi
          Hafiz quotes about identity and religion to give you a peek into the
          poet’s fearless idea of God for people."
        </p>
        <br />
      </div>
    </div>
  );
}

export default About;
