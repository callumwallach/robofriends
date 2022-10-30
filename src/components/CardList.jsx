import Card from "./Card";

// props object is passed through, so have to destructure to get robots array
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => {
        return (
          <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
        );
      })}
    </div>
  );
};

export default CardList;
