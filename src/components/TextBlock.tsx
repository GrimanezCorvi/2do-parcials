interface TextBlockProps {
  title: string;
  subtitle: string;
}

export default function TextBlock({ title, subtitle }: TextBlockProps) {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif", color: "#fff" }}>
      <h1
        style={{
          fontSize: 28,
          fontWeight: 600,
          lineHeight: 1.3,
          margin: "0 0 16px 0",
        }}
      >
        {title}
      </h1>
      <p style={{ fontSize: 12, margin: 0, color: "#ddd", maxWidth: 180 }}>
        {subtitle}
      </p>
    </div>
  );
}