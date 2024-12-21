const QuoteIntroHeading = props => {
  return (
    <div className="mb-8">
      <h1 className="text-[#1A1A21] font-bold text-2xl tracking-[-2%] leading-[1.8rem] mb-2">
        {props.heading}
      </h1>
      <p className="text-[#98A2B3] leading-[1.45rem]">{props.paragraph}</p>
    </div>
  );
};

export default QuoteIntroHeading;
