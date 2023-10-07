const StartingScreen = ({ numQuestins }) => {
  return (
    <div className="start">
      <h2>Welcom to The React Quiz</h2>
      <h3>{numQuestins} questions to test your Reaact knowledge</h3>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
};

export default StartingScreen;
