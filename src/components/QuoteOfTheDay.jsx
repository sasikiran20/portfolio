import { Section } from '.';
import { quoteOfTheDay } from '../assets/data';

export const QuoteOfTheDay = () => {
  return (
    <Section>
      <h2>Quote of the Day </h2>
      <blockquote className="quote-container">
        <p>“{quoteOfTheDay.text}” – {quoteOfTheDay.author}</p>
        <p className="pro-tip">{quoteOfTheDay.proTip}</p>
      </blockquote>
    </Section>
  );
};

export default QuoteOfTheDay;