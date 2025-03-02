import TeamMember1 from "../assets/Team/t1.png"
import TeamMember2 from "../assets/Team/t2.png"
import TeamMember3 from "../assets/Team/t3.png"
import TeamMember4 from "../assets/Team/t4.png"
import bg from "../assets/Team/Rectangle.png"
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";

function Team() {
  const teamMembers = [
    { id: 1, name: "Ronald Richards", role: "Web Designer", img: `${TeamMember1}` },
    { id: 2, name: "Jane Doe", role: "Frontend Developer", img:`${TeamMember2}` },
    { id: 3, name: "John Smith", role: "UI/UX Designer", img: `${TeamMember3}` },
    { id: 4, name: "Emily Johnson", role: "Backend Developer", img: `${TeamMember4}` },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="font-[sans-serif] mt-20">
      <div className="max-lg:max-w-2xl mx-auto">
        <div className="mx-auto text-center">
          <h2 className="text-4xl">Our Team</h2>
          <h2 className="text-4xl font-semibold">Meet Our Expert</h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 mt-10 justify-evenly mx-8 items-center gap-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center flex flex-col items-center">
              <div className="relative">
                {/* Small Top Image (Triggers Hover) */}
                <img
                  className="absolute ml-4 mt-6 rounded-xl w-[285px] cursor-pointer"
                  src={member.img}
                  alt={member.name}
                  onMouseEnter={() => setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId(null)}
                />

                {/* Overlay (Controlled by State) */}
                {hoveredId === member.id && (
                  <div
                    className="absolute top-6 left-4 flex items-center justify-center gap-4 rounded-xl w-[285px] h-full transition-opacity duration-300"
                    onMouseEnter={() => setHoveredId(member.id)} // Keep overlay visible
                    onMouseLeave={() => setHoveredId(null)} // Hide on mouse leave
                  >
                    <FaFacebookF className="text-blue-500 text-2xl cursor-pointer bg-white rounded-full p-1 hover:text-white hover:bg-[#B68053]" />
                    <FaTwitter className="text-blue-500 text-2xl bg-white p-1 rounded-full cursor-pointer hover:text-white hover:bg-[#B68053]" />
                    <FaLinkedinIn className="text-blue-500 text-2xl bg-white p-1 rounded-full cursor-pointer hover:text-white hover:bg-[#B68053]" />
                    <FaInstagram className="text-pink-500 text-2xl bg-white p-1 rounded-full cursor-pointer hover:text-white hover:bg-[#B68053]" />
                    <FaShareAlt className="text-black text-2xl bg-white p-1 rounded-full cursor-pointer hover:text-white hover:bg-[#B68053]" />
                  </div>
                )}

                {/* Main Image */}
                <img className="pt-7" src={bg} alt="Main" />
              </div>

              {/* Name and Title */}
              <div className="mt-4">
                <h1 className="text-3xl font-semibold">{member.name}</h1>
                <h2>{member.role}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <button className="btn bg-white hover:bg-[#ECA76E] text-gray-900">View All</button>
      </div>
    </div>
  );
}

export default Team;
