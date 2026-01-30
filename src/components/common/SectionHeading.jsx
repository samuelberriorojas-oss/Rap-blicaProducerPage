import './SectionHeading.css';

export default function SectionHeading({ id, children, subtitle, step }) {
  return (
    <div className="section-heading-wrap">
      {step && (
        <span className="section-heading__step" aria-hidden="true">{step}</span>
      )}
      <h2 id={id} className="section-heading">
        {children}
      </h2>
      <div className="section-heading__line" aria-hidden="true" />
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
