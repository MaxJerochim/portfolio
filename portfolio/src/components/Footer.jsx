export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Maximiliano Jerochim · Hecho con React
      <span className="footer-hint">
        {" "}· presioná <kbd>~</kbd> para la terminal secreta
      </span>
    </footer>
  );
}
