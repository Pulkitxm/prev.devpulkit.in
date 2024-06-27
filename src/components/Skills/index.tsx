import AllSkills from "./Items";

export default function Skills() {
  const displayItems = [
    {
      name: "Languages",
      items: AllSkills.lanuguages,
    },
    {
      name: "Libraries and Framworks",
      items: AllSkills.libAndFrameworks,
    },
    {
      name: "Databases asd ORMs",
      items: AllSkills.databasesAndOrms,
    },
    {
      name: "Other Tools",
      items: AllSkills.otherTools,
    },
    {
      name: "Platforms",
      items: AllSkills.platforms,
    },
  ];
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints;
  return (
    <div className="text-white flex flex-col items-center justify-center my-10">
      <h1 className="text-3xl lg:text-5xl font-bold mb-5">My Techincal Skills</h1>
      <div className="w-full flex flex-col items-center justify-center my-5 px-0">
        {displayItems.map((displayItem, index) => {
          return (
            <div
              className="w-full flex flex-col items-center justify-center my-3"
              key={index}
            >
              <h1 className="text-xl md:text-2xl underline-offset-4 underline mb-2">{displayItem.name}</h1>
              <div className="flex flex-wrap justify-center px-5 md:px-0">
                {displayItem.items.map((skill, index) => {
                  return (
                    <div
                      className="m-4 cursor-pointer flex items-center justify-center flex-col"
                      key={index}
                      title={skill.name}
                    >
                      {skill.icon}
                      {isTouchDevice ? skill.name : null}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
