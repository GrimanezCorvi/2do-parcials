interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "14px 0",
        border: "none",
        borderRadius: 12,
        background: "#6c4dff",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        fontSize: 14,
        cursor: "pointer",
        boxShadow: "0 8px 24px rgba(108, 77, 255, 0.35)",
      }}
    >
      {label}
    </button>
  );
}