import type { NextPage } from "next";
import Layout from "../components/common/Layout";

/* Sidan ska vara responsiv */

/* Sidan ska ha tre sektioner (utöver sidhuvud och sidfot): “Om oss”, “Referenser”
och “Kontakta oss”. */

/* Den ska fungera i alla webbläsare */

/* Vi vill ha all information på en enda sida */

/*  Den ska ladda snabbt och vara snygg */
/*  Vi vill ha vårt kontor utplacerat på en karta som presenteras på sidan. Gärna i
fullbredd. */

/*  Vi vill att besökarens namn ska visas på sidan som en hälsning varje gång de
surfar in på vår sida. Exempelvis "Hej Johan!" */

/* Besökaren skall ha möjlighet att byta bakgrundsfärg på sidan och det vi vill att dessa val sparas till
nästa gång den besöker sidan */

/*  Vi vill ha en lista med kontakter under sektionen “Kontakta oss” som listar namn och titel i två kolumner. 
Denna lista ska kunna minimeras och expanderas vid tryck på en knapp. Om det är möjligt skulle vi vilja
ha möjlighet att sortera denna listan efter bokstavsordning på kolumnen namn eller titel. */

const Home: NextPage = () => {
  return (
    <Layout>
      <section>Om oss</section>
      <section>Referenser</section>
      <section>
        Kontakta oss
        <ul>
          <li>Rad 1</li>
          <li>Rad 2</li>
          <li>Rad 3</li>
          <li>Rad 4</li>
        </ul>
        <div>Google Maps</div>
      </section>
    </Layout>
  );
};

export default Home;
