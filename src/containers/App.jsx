import { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
      isLoading: true,
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  // if we use arrow function and async/await then the function is created
  // each time and is a performance cost. Best to use function
  componentDidMount() {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const users = await response.json();
    // this.setState({
    //   robots: users,
    // });

    // use Promise as async/await requires arrow function
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          robots: json,
          isLoading: false,
        });
      });
  }

  render() {
    const { robots, searchField, isLoading } = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isLoading ? (
      <h1 className="f1">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="tc">
//       <h1>Robofriends</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   );
// };

export default App;
