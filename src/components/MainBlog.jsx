const MainBlog = () => {
  return (
    <>
      <h1 className="grid place-items-center text-[40px] font-bold font-playfair bg-white w-[70px] h-[70px]">
        M
      </h1>{" "}
      {/* logo */}
      <div className="absolute top-[26%] max-w-79">
        <h1 className="text-white text-5xl font-bold font-playfair uppercase leading-[50px] mb-5">
          you can
          <br />
          change the
          <br />
          world
        </h1>
        <p className="text-white text-base font-normal font-poppins">
          How Women are Redirecting Hollywood <br />
          <span className="text-red-500 capitalize leading-7">By Jasmin Smith</span>
        </p>
      </div>
      <div className="absolute bottom-[8%] right-[30px] max-w-79 text-right">
        <h1 className="text-white text-5xl font-bold font-playfair uppercase leading-[50px] mb-5">
          STRONG
          <br />
          STYLE
        </h1>
        <p className="text-white text-base font-normal font-poppins">
          New Ways to Wear Denim Belt Bags make a Comeback <br />
          <span className="text-red-500 capitalize  leading-7">How to Shop Mindfully</span>
        </p>
      </div>

      <div className="absolute bottom-[30px] left-[30px]">
        <img src="/images/qrcode.png" alt="QR-Code" />
      </div>
    </>
  );
};

export default MainBlog;
