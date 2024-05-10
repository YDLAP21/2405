import ImageSlider from "./ImageSlider";
const App = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "p01" },
    { url: "http://localhost:3000/image-2.jpg", title: "p02" },
    { url: "http://localhost:3000/image-3.jpg", title: "p03" },
    { url: "http://localhost:3000/image-4.jpg", title: "p04" },
    { url: "http://localhost:3000/image-5.jpg", title: "p05" },
    { url: "http://localhost:3000/image-6.jpg", title: "p06" },
    { url: "http://localhost:3000/image-7.jpg", title: "p07" },
    { url: "http://localhost:3000/image-8.jpg", title: "p08" },
    { url: "http://localhost:3000/image-9.jpg", title: "p09" },
    { url: "http://localhost:3000/image-10.jpg", title: "p10" },
    { url: "http://localhost:3000/image-11.jpg", title: "p11" },
    { url: "http://localhost:3000/image-12.jpg", title: "p12" },
    { url: "http://localhost:3000/image-13.jpg", title: "p13" },
    { url: "http://localhost:3000/image-14.jpg", title: "p14" },
    { url: "http://localhost:3000/image-15.jpg", title: "p15" },
    { url: "http://localhost:3000/image-16.jpg", title: "p16" },
    { url: "http://localhost:3000/image-17.jpg", title: "p17" },
    { url: "http://localhost:3000/image-18.jpg", title: "p18" },
    { url: "http://localhost:3000/image-19.jpg", title: "p19" },
    { url: "http://localhost:3000/image-20.jpg", title: "p20" },
    { url: "http://localhost:3000/image-21.jpg", title: "p21" },
    { url: "http://localhost:3000/image-22.jpg", title: "p22" },
    { url: "http://localhost:3000/image-23.jpg", title: "p23" },
    { url: "http://localhost:3000/image-24.jpg", title: "p24" },
    { url: "http://localhost:3000/image-25.jpg", title: "p25" },
    { url: "http://localhost:3000/image-26.jpg", title: "p26" },
    { url: "http://localhost:3000/image-27.jpg", title: "p27" },
    { url: "http://localhost:3000/image-28.jpg", title: "p28" },
    { url: "http://localhost:3000/image-29.jpg", title: "p29" },

  ];
  const containerStyles = {
    width: "600px",
    height: "850px",
    margin: "0 auto",
  };
  return (
    <div>
      <h3>YD CBT Performance</h3>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
