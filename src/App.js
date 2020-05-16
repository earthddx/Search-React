import React, { useState } from "react";
import "./App.css";

const plants = [
  {
    id: 1,
    title: "MONEY TREE",
    img: "img/product-1/main.png",
    imgDetail: [
      { url: "img/product-1/main.png" },
      { url: "img/product-1/1.png" },
      { url: "img/product-1/2.png" },
      { url: "img/product-1/1.png" },
    ],
    price: 54.99,
    info:
      "Known in certain cultures to bring good luck and fortune, the Money Tree offers a wealth of benefits – from dressing up decor with its cool braided trunk to bringing a fresh energy to any space. Plant Perk: According to feng shui practice, the Money Tree helps to reduce stress and anxiety.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 2,
    title: "MAJESTY PALM",
    img: "img/product-2/main.png",
    imgDetail: [
      { url: "img/product-2/main.png" },
      { url: "img/product-2/1.png" },
      { url: "img/product-2/2.png" },
    ],
    price: 99.99,
    info:
      "Like royalty from an exotic faraway land, this palm commands loyalty and admiration. Deep green, feather-like fronds with a graceful drape. Her majesty will receive you now. Plant Perk: When you want to escape the concrete jungle, a jungle of lush green palm fronds in your own home is a welcome respite.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 3,
    title: "ALOE VERA",
    img: "img/product-3/main.png",
    imgDetail: [
      { url: "img/product-3/main.png" },
      { url: "img/product-3/1.png" },
      { url: "img/product-3/2.png" },
    ],
    price: 29.99,
    info:
      "The all-around healer plant, Aloe Vera is not only a go-to for gotta-soothe-my-sunburn-stat moments but is also an aesthetically calming addition to any room. Plant Perk: Known to relieve burns and boo-boos as well as improve achy body hinges",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 4,
    title: "OLIVE TREE",
    img: "img/product-4/main.png",
    imgDetail: [{ url: "img/product-4/main.png" }],
    price: 69.99,
    info:
      "If ever there was a #trending tree, the olive tree is it (thanks to home design shows!) Its leathery silver-green leaves are the perfect complement to any space, modern or rustic alike. Plant Perk: Oleuropein (from the leaves and olive fruit) is said to have all sorts of anti-aging benefits.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 5,
    title: "AIR PLANT TERRARIUM",
    img: "img/product-5/main.png",
    imgDetail: [
      { url: "img/product-5/main.png" },
      { url: "img/product-5/1.png" },
      { url: "img/product-5/2.png" },
    ],
    price: 39.99,
    info:
      "Like a garden floating in a bubble, our hanging glass terrarium adds a glistening touch of green to your space. With natural driftwood, shell, wood - and of course… air plants! Plant Perk: Greenifies your space without taking up precious real estate.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 6,
    title: "ECHEVERIA SUCCULENT",
    img: "img/product-6/main.png",
    imgDetail: [
      { url: "img/product-6/main.png" },
      { url: "img/product-6/1.png" },
      { url: "img/product-6/2.png" },
      { url: "img/product-6/3.png" },
    ],
    price: 34.99,
    info:
      "Our Echeveria succulent sits pretty in a modern textured planter. It will take your neglect and forgive you with lush green flourishing’s. Never has water retention been so show-off-worthy! Plant Perk: Produces oxygen throughout the night which can help improve your snooze.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 7,
    title: "FINGER LIME",
    img: "img/product-7/main.png",
    imgDetail: [{ url: "img/product-7/main.png" }],
    price: 59.99,
    info:
      "In a category all its own, this citrus tree is a favorite among chefs and foodies. Small with deep green leaves, it produces an abundance of petite, finger-shaped limes considered to be the “caviar” of citrus. Plant Perk: Finger limes contain juice-filled beads that create a unique mouthfeel and make for a lively garnish to drinks and dishes.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 8,
    title: "RED ANTHURIUM",
    img: "img/product-8/main.png",
    imgDetail: [
      { url: "img/product-8/main.png" },
      { url: "img/product-8/1.png" },
      { url: "img/product-8/2.png" },
    ],
    price: 24.99,
    info:
      "Who wouldn’t *heart* this showy, exotic plant? With its red, heart-shaped flowers and bright, glossy leaves, it will bloom all year round with the right TLC! Plant Perk: Freshly cut, its flowers can last 14-28 days in a vase, and make a perfect hostess gift!",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 9,
    title: "OREGANO",
    img: "img/product-9/main.png",
    imgDetail: [{ url: "img/product-9/main.png" }],
    price: 22.99,
    info:
      "First time with herb gardening? Oregano is the go-to-choice for newbies looking for a low risk, high reward plant. Works double duty, beautifying a sill while perking up pastas with its fresh leaves. Plant Perk: Fresh oregano is a great antibacterial agent and is loaded with antioxidants and vitamins. Not bad for a tiny, 0 calorie leaf!",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 10,
    title: "ROSE",
    img: "img/product-10/main.png",
    imgDetail: [
      { url: "img/product-10/main.png" },
      { url: "img/product-10/1.png" },
    ],
    price: 19.99,
    info:
      "Our pink rose plant arrives freshly budding and ready to bloom all kinds of happiness – just in time for your spring room refresh! Let its leaves and blooms thrive a little bit longer with the help of the optional aluminum mister! Plant Perk: With pink symbolizing joy, this plant will bring happy spring vibes, year after year.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 11,
    title: "MINI LUCKY BAMBOO",
    img: "img/product-11/main.png",
    imgDetail: [{ url: "img/product-11/main.png" }],
    price: 32.99,
    info:
      "Mini in size but max on positive energy, prosperity and luck... it’s easy to see why this bamboo is great for gifting. Its size is made for #desklife! Plant Perk: According to feng shui principles, lucky bamboo will bring positive energy into a home, office or wherever it’s placed.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 12,
    title: "JUNIPER BONSAI",
    img: "img/product-12/main.png",
    imgDetail: [
      { url: "img/product-12/main.png" },
      { url: "img/product-12/1.png" },
    ],
    price: 49.99,
    info:
      "Ever-beautiful and ready for creative shaping, this tiny tree has been cultivated for thousands of years to bring you calmness and serenity. But no pressure! Plant Perk: All about artful shaping and training, these trees are great for Zen relaxation.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 13,
    title: "POTHOS",
    img: "img/product-13/main.png",
    imgDetail: [
      { url: "img/product-13/main.png" },
      { url: "img/product-13/1.png" },
      { url: "img/product-13/2.png" },
    ],
    price: 39.99,
    info:
      "Hunting for a happy-looking plant that’s easy to care for? The Pothos wears its health onits leaves - letting you know when it’s in need of attention by the look of its foliage. Plus, it’s extra rewarding to see it perk up after tending to it! Plant Perk: Tops the chart for air-purifying.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 14,
    title: "BALL AIR PLANT",
    img: "img/product-14/main.png",
    imgDetail: [
      { url: "img/product-14/main.png" },
      { url: "img/product-14/1.png" },
      { url: "img/product-14/2.png" },
    ],
    price: 24.99,
    info:
      "Add polish to your place (or a friend’s) with this unique geometric ball and air plant. Its copper vibe compliments every kind of style, from classic farmhouse to elegant minimalist. Plant Perk: The air purifying qualities of plants combined with energy-conducting property of copper can only add up to all good things.",
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 15,
    title: "KOKEDAMA",
    img: "img/product-15/main.png",
    imgDetail: [
      { url: "img/product-15/main.png" },
      { url: "img/product-15/1.png" },
      { url: "img/product-15/2.png" },
      { url: "img/product-15/3.png" },
    ],
    price: 24.99,
    info:
      "Add tranquility to your home without having to rearrange furniture! The natural & 100% biodegradable kokedama shell of this hanging beauty is the eco-friendly alternative to plastic containers, lets you decorate freely and gives a floating sense of peace of mind. Elevate your space with your choice of three plants - the Lemon Button Fern, Philodendron Brasil or our English Ivy Plant. Plant Perk: A living art piece that’s air purifying, too… this plant is win-win.",
    inCart: false,
    count: 0,
    total: 0,
  },
];

const searchingForFirstName = (term) => {
  return (x) => x.title.toLowerCase().includes(term.toLowerCase()) ||x.info.toLowerCase().includes(term.toLowerCase()) || !term;
};

function App() {
  const [list] = useState(plants);
  const [term, setTerm] = useState("");

  const searchHandler = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="App">
      <form className="form_text">
        <input
          type="text"
          value={term}
          onChange={searchHandler}
          className="input_text"
        />
      </form>
      {list.filter(searchingForFirstName(term)).map((plant) => (
        <div key={plant.id} className="card">
          <h5 className="plant_id">{plant.id}</h5>
          <h1 className="plant_title">{plant.title}</h1>
          <h1 className="plant_price">${plant.price}</h1>
          <h1 className="plant_info">{plant.info}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
