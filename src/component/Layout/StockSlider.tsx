import {CustomReactSlick} from "..";

const StockSlider = () => {
  const slideData: IInstrument[] = [
    {
      ticker: "S&P 500",
      price: "4,593.63",
      priceChange: 26.83,
      percentageChange: 0.59,
    },
    {
      ticker: "DOW 30",
      price: "36,245.50",
      priceChange: -26.83,
      percentageChange: 0.59,
    },
    {
      ticker: "NASDAQ",
      price: "36,245.50",
      priceChange: 26.83,
      percentageChange: 0.59,
    },
    {
      ticker: "RUSSELL 3000",
      price: "36,245.50",
      priceChange: -26.83,
      percentageChange: 0.59,
    },
  ];

  const sliderResponsiveSetting = [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 3.5,
      },
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
  ];

  return (
    <div className="bg-black flex flex-col gap-4 py-2 px-4">
      <div>
        <CustomReactSlick
          setting={{
            slidesToShow: 4,
            infinite: true,
            autoplay: true,
            cssEase: "linear",
            speed: 5000,
            autoplaySpeed: 5000,
            responsive: [...sliderResponsiveSetting],
          }}>
          {slideData.map((key) => (
            <div key={key.ticker}>
              <Instrument {...key} />
            </div>
          ))}
        </CustomReactSlick>
      </div>
      <div>
        <CustomReactSlick
          setting={{
            slidesToShow: 4,
            infinite: true,
            autoplay: true,
            cssEase: "linear",
            speed: 5000,
            autoplaySpeed: 5000,
            rtl: true,
            responsive: [...sliderResponsiveSetting],
          }}>
          {slideData.map((key) => (
            <div key={key.ticker}>
              <Instrument {...key} />
            </div>
          ))}
        </CustomReactSlick>
      </div>
    </div>
  );
};

export default StockSlider;

interface IInstrument {
  ticker: string;
  price: string;
  priceChange: number;
  percentageChange: number;
}

const Instrument = ({
  ticker,
  price,
  priceChange,
  percentageChange,
}: IInstrument) => {
  const PNSymbol = priceChange > 0 ? "+" : "";
  return (
    <div className="flex gap-4">
      <span className="text-[#909090]">{ticker}</span>
      <span className="font-medium">{price}</span>
      <span
        className={`${PNSymbol == "+" ? "text-green-500" : "text-red-500"} `}>
        {PNSymbol + priceChange} {`(${PNSymbol} ${percentageChange}%)`}
      </span>
    </div>
  );
};
