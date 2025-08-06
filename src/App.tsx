import Navbar from "./pages/Home page/components/Navbar/Navbar";
import Banner from "./pages/Home page/components/Banner/Banner";
import "./App.css";
import {
  action,
  popular,
  comedy,
  horror,
  romance,
  documentary,
} from "./UrlGenre";
import Poster from "./pages/Home page/components/Rowposter/Poster";

function App() {
  return (
    <div className="page-body">
      <Navbar></Navbar>
      <Banner></Banner>
      <Poster url={popular} title="Popular On Netflix" />
      <Poster url={action} title="Action Thrillers" isSmall />
      <Poster url={comedy} title="Comedy Movies" isSmall />
      <Poster url={horror} title="Horror Movies" isSmall />
      <Poster url={romance} title="Romance" isSmall />
      <Poster url={documentary} title="Documentary" isSmall />
    </div>
  );
}

export default App;
