import { LazyMotion, domAnimation, m } from 'framer-motion';

import { Works, Experiences, Showcases, Intro, Publications, Contacts, Awards, QuoteOfTheDay } from './components';
import { containerMotion } from './assets/motion';


function App() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div {...containerMotion}>
        <Intro />
        <Experiences />
        <Showcases />
        <Works />
        <Publications />
        <Awards />
        <Contacts />
        <QuoteOfTheDay />
        <br />
        <br />
      </m.div>
    </LazyMotion>
  );
}
export default App;
