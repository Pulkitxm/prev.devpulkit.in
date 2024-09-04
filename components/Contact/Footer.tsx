import ContactMe from "./ContactMe";

export default function Footer() {
  return (
    <div
      id="contact"
      className="relative h-[700px] w-screen"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="fixed bottom-0 h-[700px] w-screen bg-[#78A083]">
        <ContactMe />
      </div>
    </div>
  );
}
