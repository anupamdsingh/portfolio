import React from "react";

function About() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-5xl font-bold">About</div>
      <div className="pt-9 items-center text-center w-3/5 font-normal text-lg">
        I am Anupam Singh, originally from Varanasi, Uttar Pradesh. Currently
        pursuing my B.Tech in Computer Science at Amrita Vishwa Vidyapeetham. As
        a full stack developer, I have a diverse skill set in both front-end and
        back-end web development. I excel in creating engaging user interfaces
        and implementing efficient server-side functionalities. With a strong
        understanding of software development principles, I am adept at using
        version control systems and following Agile methodologies. Continuously
        learning and staying updated with emerging technologies, I enjoy solving
        complex problems and collaborating with teams to deliver high-quality
        web applications.
      </div>
      <div className="flex flex-row pt-20 gap-x-28">
        <div className="text-center">
          <div className="flex justify-center">
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="31" cy="31" r="31" fill="#18181B" />
              <circle cx="31" cy="31" r="6" fill="#27AE60" />
            </svg>
          </div>
          <div className="font-bold text-lg pt-2">Full Name</div>
          <div className="font-normal text-lg">Anupam Kumar Singh</div>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="31" cy="31" r="31" fill="#18181B" />
              <circle cx="31" cy="31" r="6" fill="#27AE60" />
            </svg>
          </div>
          <div className="font-bold text-lg pt-2">Email Address</div>
          <div className="font-normal text-lg">singhanupam3299@gmail.com</div>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="31" cy="31" r="31" fill="#18181B" />
              <circle cx="31" cy="31" r="6" fill="#27AE60" />
            </svg>
          </div>
          <div className="font-bold text-lg pt-2">GitHub</div>
          <div className="font-normal text-lg">anupamdsingh</div>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="31" cy="31" r="31" fill="#18181B" />
              <circle cx="31" cy="31" r="6" fill="#27AE60" />
            </svg>
          </div>
          <div className="font-bold text-lg pt-2">Phone No.</div>
          <div className="font-normal text-lg">7839452451</div>
        </div>
      </div>
    </div>
  );
}
export default About;
