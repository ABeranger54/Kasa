import '../styles/Home.css';
import Banner from "../components/Banner"
import Card from "../components/Card"

function App() {
  return (
    <main>
      <Banner />
      <div id="locations">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default App;
