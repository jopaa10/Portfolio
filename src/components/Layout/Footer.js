import { useEffect, useState } from 'react';
import '../../styles/common/footer.scss';
import SectionWrapper from '../common/SectionWrapper';

const Footer = () => {
  const [year, setYear] = useState(null);

  const getYearFromDate = () => {
    setYear(new Date().getFullYear());
  };

  useEffect(() => {
    getYearFromDate();
  }, [year]);

  return (
    <footer>
      <SectionWrapper>
        <div className="info">
          <p>all rights reserved</p>
          <p>&copy;{year}</p>
          <p>josipa znaor</p>
        </div>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
