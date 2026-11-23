export default function PagePlaceholder({ title, description }) {
  return (
    <section className="page-placeholder">
      <span className="page-placeholder__eyebrow">Karigar</span>
      <h1>{title}</h1>
      <p>
        {description ||
          "This page is part of the project scaffold. Its features will be built in the next phase."}
      </p>
    </section>
  );
}
