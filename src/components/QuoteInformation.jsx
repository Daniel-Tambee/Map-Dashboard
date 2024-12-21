import QuoteInformationDetails from "./QuoteInformationDetails";
import QuoteItems from "./QuoteItems";

const QuoteInformation = props => {
  return (
    <div>
      <QuoteInformationDetails {...props} />
      <QuoteItems />
    </div>
  );
};

export default QuoteInformation;
