import ContactMe from "./ContactMe";

export default function Footer() {
  return (
    <div
      className="relative h-[700px] w-screen"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="fixed h-[700px] w-screen bottom-0 bg-[#78A083]">
        <ContactMe />
      </div>
    </div>
  );
}
