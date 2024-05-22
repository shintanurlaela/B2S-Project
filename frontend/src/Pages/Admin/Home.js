import React from "react";
import gambar from "../asset/digiasset.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={gambar}
        alt="gambar"
        style={{ width: "580px", marginLeft: "620px", marginTop: "40px" }}
      />
      <div style={{ width: "600px", marginLeft: "40px", marginTop: "-400px" }}>
        <h1 style={{ fontWeight: "800", fontSize: "55px", color: "#272343" }}>
          Study anytime,
        </h1>
        <h1 style={{ fontWeight: "800", fontSize: "55px", color: "#ffa500" }}>
          wherever you are
        </h1>
        <p style={{ marginTop: "25px", fontSize: "17px" }}>
          Not sure what to read next? Explore ByteBook catalog now!
        </p>
        <button className="explore-button" onClick={() => navigate("/gallery")}>
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Home;