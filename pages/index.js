import Head from "next/head";

export default () => (
  <>
    <Head>
      <title>Sune Maute</title>
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://public.jonathanwieben.com/sune-heady.png"
      ></link>
    </Head>
    <div className="wrapper">
      <h1>sunemaute.com</h1>
      <h2> Eine Website zum Wphlfühlen</h2>
      <main>

        <p>
          Sie nennen mich cool, sie nennen mich hip.
          <br />
          Laber mich nicht an, oder Du bist rip.
          <br />
          Sie nennen mich cool, sie nennen mich knorke.
          <br />
          Sei mal nicht so hässlich, wenn ich mit Dir talke.
        </p>
        <img src="https://public.jonathanwieben.com/sune.jpg" />
      </main>
    </div>
    <style jsx global>{`
      main {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 20px;
      }
      h1 {
        color: #ff0008;
        text-align: center;
        font-size: 55px;
        margin-top: 0;
      }
      p {
        font-size: 25px;
        color: orange;
        margin-bottom: 60px;
      }
      img {
        max-height: 600px;
      }
      .wrapper {
        padding-top: 20px;
        min-height: 100vh;
        width: 100vw;
        background-image: url("https://public.jonathanwieben.com/black-orange-red-fire.jpeg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      body {
        margin: 0;
        padding: 0;
      }
      @media (max-width: 800px) {
        h1 {
          font-size: 35px;
        }
        main {
          flex-direction: column;
        }
        img {
          width: 280px;
        }
      }
    `}</style>
  </>
);
