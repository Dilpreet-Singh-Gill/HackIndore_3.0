const HandsMotif = ({ variant = "faint" }) => {
  return (
    <span
      className={`handsMotif handsMotif--${variant}`}
      aria-hidden="true"
    >
      <img src="/assets/creation-hands.png" alt="" />
    </span>
  );
};

export default HandsMotif;
