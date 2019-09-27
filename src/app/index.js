import React from "react";
import { Header, Main, DropDown } from "./components";
import "./index.scss";

const LANGUAGES = [
  { name: "EN", code: "en" },
  { name: "LT", code: "lt" }
];

class App extends React.Component {
  state = {
    language: LANGUAGES[0].code
  };

  onChange = e => {
    this.setState({ language: e.target.value });
  };

  render() {
    console.log("render");
    const { language } = this.state;
    const items = LANGUAGES.map(({ name, code }) => ({
      children: name,
      value: code
    }));

    return (
      <div className="App">
        <Header />
        <DropDown items={items} onChange={this.onChange} />
        <Main language={language} />
      </div>
    );
  }
}

// function App() {
//   const [language, setLanguage] = React.useState(LANGUAGES[0].code);
//   const items = LANGUAGES.map(({ name, code }) => ({ children: name, value: code }));
//   const onChange = e => {
//     setLanguage(e.target.value);
//   };

//   return (
//     <div className="App">
//       <Header />
//       <DropDown items={items} onChange={onChange} />
//       <Main language={language} />
//     </div>
//   );
// }

export default App;
