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
      <main>

          <div class="bg_wrapper">
          </div>

          <a href="adventskalender.html">
            <div class="item_left">
              <p>Adventskalender</p>
            </div>
          </a>


          <a href="graveyard_keeper.html">
            <div class="item_mid" >
              <p>Graveyard Keeper</p>
            </div>
          </a>

          <a href="games.html">
            <div class="item_right">
              <p>Games</p>
            </div>
          </a>

      </main>
    </div>
    <style jsx global>{`

      .bg_wrapper {
        padding-top: 20px;
        min-height: 100vh;
        width: 100vw;
        background-image: url("../media/tree_lake.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;
        filter: blur(8px);
      }

      .item_mid {
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
        color: white;
        font-weight: bold;
        border: 3px solid #f1f1f1;
        position: absolute;
        top: 50%;
        left: 35%;
        z-index: 2;
        width: 25%;
        padding: 20px;
        padding-left:2%;
        padding-right:2%;
        text-align: center;

      }
      .item_left {
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
        color: white;
        font-weight: bold;
        border: 3px solid #f1f1f1;
        position: absolute;
        top: 50%;
        left: 5%;
        z-index: 2;
        width: 25%;
        padding: 20px;
        padding-left:2%;
        padding-right:2%;
        text-align: center;
      }
      .item_right {
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
        color: white;
        font-weight: bold;
        border: 3px solid #f1f1f1;
        position: absolute;
        top: 50%;
        left: 64.9%;
        z-index: 2;
        width: 25%;
        padding: 20px;
        padding-left:2%;
        padding-right:2%;
        text-align: center;
      }

      @media (max-width: 900px) {
        .item_left {
          top: 20%;
          left: 20%;
          width: 50%;
        }
        .item_mid {
          top: 45%;
          left: 20%;
          width: 50%;
        }
        .item_right {
          top: 70%;
          left: 20%;
          width: 50%;
        }
      }

      @media (max-width:340px){
        .item_left {
          width: 166px;
          left:20%;
        }
        .item_mid {
          width: 166px;
          left:20%;
        }
        .item_right {
          width: 166px;
          left:20%;
        }
      }

      @media (max-height:500px) and (max-width: 900px){
        .item_left {
          top: 100px;
        }
        .item_mid{
          top: 225px;
        }
        .item_right{
          top: 350px;
        }
      }

    `}</style>
  </>
);
