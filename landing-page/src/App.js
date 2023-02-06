import "./App.css";
import Header from "./Components/Header";
import Product from "./Components/Product";
import CompanyInfo from "./Components/CompanyInfo";
import InterestCalculator from "./Components/InterestCalculator";

// Images
import clothing01 from "./images/clothing01.jpg";
import clothing02 from "./images/clothing02.jpg";
import clothing03 from "./images/clothing03.jpg";
import companyLogo from "./images/companyLogo.png";

import { Routes, Route, Link } from "react-router-dom";

// Creation of the clothingsList (products) to display to user
const clothingList = [];

class Clothing {
  constructor(
    clothingID,
    clothingImage,
    clothingName,
    clothingPrice,
    clothingScore
  ) {
    this.clothingID = clothingID;
    this.clothingImage = clothingImage;
    this.clothingName = clothingName;
    this.clothingPrice = clothingPrice;
    this.clothingScore = clothingScore;

    // Push newly created clothing (product) to clothingList
    clothingList.push(this);
  }
}

// Properties of the clothings to display
new Clothing(
  "01",
  clothing01,
  "Men Chinese Dragon And Wave Print Shirt",
  "£13.99",
  "4.8"
);
new Clothing(
  "02",
  clothing02,
  "Men Japanese Letter & Wave Print Tee",
  "£11.99",
  "4.7"
);
new Clothing(
  "03",
  clothing03,
  "Men Cartoon & Star Print Drop Shoulder Kimono Without Tee",
  "£11.99",
  "4.8"
);

// Attribute allocation of the Product Component by iterating through the clothingList
const clothingAttributes = clothingList.map((clothing) => {
  return (
    <Product
      className="productContainer"
      clothingID={clothing.clothingID}
      clothingImage={clothing.clothingImage}
      clothingName={clothing.clothingName}
      clothingPrice={clothing.clothingPrice}
      clothingScore={clothing.clothingScore}
    />
  );
});

// Product Section
const ProductsSection = () => {
  return (
    <section className="productsContainer">
      <h2 className="productHeading">Here are some of our products:</h2>
      {clothingAttributes}
    </section>
  );
};

// NavBar Component
const NavBar = () => {
  return (
    <nav>
      <Link className="link" to="/home">
        Home
      </Link>
      <Link className="link" to="/profile">
        Profile
      </Link>
      <Link className="link" to="/store">
        Store
      </Link>
      <Link className="link" to="/termsOfServices">
        Terms of Services
      </Link>
      <Link className="link" to="/interestCalculator">
        interestCalculator
      </Link>
    </nav>
  );
};

function App() {
  return (
    <div className="appContainer">
      <Header
        name="Elvin Lee"
        loggedInStatus="true"
        companyLogo={companyLogo}
      />
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<CompanyInfo />} />
        <Route exact path="/profile" />
        <Route exact path="/store" element={<ProductsSection />} />
        <Route exact path="/termOfServices" element={<CompanyInfo />} />
        <Route
          exact
          path="/interestCalculator"
          element={<InterestCalculator />}
        />
      </Routes>
    </div>
  );
}

export default App;
