import content from "../data/content.json";

const { footer } = content;

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <p>{footer.copyright}</p>
        <p>
          {footer.signaturePrefix} <span style={{ color: "#ff6b8a" }}>♥</span>{" "}
          {footer.signatureSuffix}{" "}
          <b style={{ color: "#ff6b8a" }}>{footer.signatureHighlight}</b>
        </p>
      </div>
    </footer>
  );
}
