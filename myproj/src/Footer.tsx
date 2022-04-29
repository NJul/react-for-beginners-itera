type footerProps = {
  copyright: string;
};

export const Footer: React.FC<footerProps> = (props) => (
  <footer>{props.copyright}</footer>
);
