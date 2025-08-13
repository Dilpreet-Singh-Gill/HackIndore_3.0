import Styles from './AnimatedText.module.css';

function AnimatedText({ children, sx }) {
  return (
    <div className={Styles.heading} style={sx}>
      {children}
      <span />
      <span />
    </div>
  );
}

export default AnimatedText;
