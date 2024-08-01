import React, { useState } from "react";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<string>("");

  function search() {
    setResult("検索結果");
  }

  return (
    <>
      <input placeholder={"本のタイトルや著者を入力してください"} size={50}></input>
      <button onClick={() => search()}>検索する</button>
      <div>結果を表示する</div>
      <p>{result}</p>
    </>
  );
};

export default App;
