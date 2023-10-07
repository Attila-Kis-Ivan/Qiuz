import Option from "./components/Option";

const Question = ({ question }) => {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} />
    </div>
  );
};

export default Question;
