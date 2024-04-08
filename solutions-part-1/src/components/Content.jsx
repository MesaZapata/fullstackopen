import { Part } from "./Part";


const Content = (props) => {
  const content = props.course.content;
  return (
    <>
      {content.map((element) => {
        return (
          <div key={element.part}>
            <Part element={element} />
          </div>
        );
      })}
    </>
  );
};

export { Content };
