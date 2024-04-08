const Total = (props) => {
  const total = props.course.content.reduce(
    (total, element) => total + element.exercises,
    0
  );

  return <p>Number of exercises: {total}</p>;
};

export { Total };
