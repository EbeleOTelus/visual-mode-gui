const { useState } = require("react");

///  Replace this code with your version of useVisualMode

const useVisualMode = function(initial) {
  const [history, setHistory] = useState([initial]);
  const [mode, setMode] = useState(initial);

  const transition = (newMode, replace) => {
    setMode(newMode);
    setHistory(prev => ([...prev, newMode]));
    if (replace) {
      setHistory(history);
    }
  };

  const back = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const lastItemIndex = newHistory.length - 1;
      setMode(newHistory[lastItemIndex]);
      setHistory(newHistory);
    }
  };
  // Don't forget this -> history is needed here
  return { mode, transition, back, history };
};

export default useVisualMode;