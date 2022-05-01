import './Footer.css';

type footerProps = {
  copyright: string;
};

export const Footer: React.FC<footerProps> = (props) => (
  <footer className='footer'>{props.copyright}</footer>
);
