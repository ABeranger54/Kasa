import '../styles/Home.css';
import Banner from "../components/Banner"
import Card from "../components/Card"
import banner from "../medias/bannerHome.png"
import annonces from "../data/annonces.json"

function Home() {

  const cards = annonces.map((card) => <Card key={card.id} id={card.id} title={card.title} />);

  return (
    <main>
      <Banner image={banner} label="Chez vous, partout et ailleurs" />
      <div id="locations">
        {cards}
      </div>
    </main>
  );
}

export default Home;
