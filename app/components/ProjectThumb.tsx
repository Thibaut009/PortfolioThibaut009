import content from "../data/content.json";

export default function ProjectThumb({
  project,
}: {
  project: (typeof content.projects.items)[number];
}) {
  const badge = project.angular && <span className="proj-badge">◈ Angular</span>;

  switch (project.thumb) {
    case "invoice":
      return (
        <div className="proj-thumb">
          {badge}
          <div
            style={{
              width: "72%",
              background: "rgba(242,242,247,.95)",
              borderRadius: 8,
              padding: "10px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div style={{ height: 6, width: "55%", background: "#12121d", borderRadius: 3 }} />
            <div
              style={{ height: 5, width: "90%", background: "rgba(18,18,29,.3)", borderRadius: 3 }}
            />
            <div
              style={{ height: 5, width: "70%", background: "rgba(18,18,29,.3)", borderRadius: 3 }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 4,
                paddingTop: 6,
                borderTop: "1px solid rgba(18,18,29,.15)",
              }}
            >
              <span style={{ fontSize: ".6rem", fontWeight: 700, color: "#12121d" }}>Total</span>
              <span style={{ fontSize: ".6rem", fontWeight: 700, color: "var(--purple)" }}>
                2 450 €
              </span>
            </div>
          </div>
        </div>
      );
    case "moon":
      return (
        <div
          className="proj-thumb"
          style={{
            background: "linear-gradient(160deg, #1a1a2e 0%, #0d0d18 75%)",
            overflow: "hidden",
          }}
        >
          {badge}
          <div style={{ position: "relative", width: 56, height: 56 }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "#f4e9d8",
                boxShadow: "0 0 28px 6px rgba(244,233,216,.3)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: -8,
                left: 16,
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#0d0d18",
              }}
            />
          </div>
          <span
            style={{
              position: "absolute",
              top: 20,
              left: 24,
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "#fff",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: 42,
              left: 44,
              width: 2,
              height: 2,
              borderRadius: "50%",
              background: "#fff",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: 100,
              left: 200,
              width: 2,
              height: 2,
              borderRadius: "50%",
              background: "#fff",
            }}
          />
        </div>
      );
    case "chat":
      return (
        <div className="proj-thumb">
          {badge}
          <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "72%" }}>
            <div
              style={{
                alignSelf: "flex-start",
                background: "var(--surface-2)",
                borderRadius: "10px 10px 10px 3px",
                padding: "6px 10px",
                width: "75%",
              }}
            >
              <div
                style={{
                  height: 6,
                  background: "rgba(255,255,255,.3)",
                  borderRadius: 3,
                  width: "80%",
                }}
              />
            </div>
            <div
              style={{
                alignSelf: "flex-end",
                background: "var(--grad-brand)",
                borderRadius: "10px 10px 3px 10px",
                padding: "6px 10px",
                width: "60%",
              }}
            >
              <div
                style={{
                  height: 6,
                  background: "rgba(255,255,255,.55)",
                  borderRadius: 3,
                  width: "70%",
                }}
              />
            </div>
            <div
              style={{
                alignSelf: "flex-start",
                background: "var(--surface-2)",
                borderRadius: "10px 10px 10px 3px",
                padding: "6px 10px",
                width: "50%",
              }}
            >
              <div
                style={{
                  height: 6,
                  background: "rgba(255,255,255,.3)",
                  borderRadius: 3,
                  width: "60%",
                }}
              />
            </div>
          </div>
        </div>
      );
    case "hangman":
      return (
        <div className="proj-thumb">
          {badge}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <svg width="46" height="56" viewBox="0 0 46 56" fill="none">
              <g stroke="var(--text-dimmer)" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="54" x2="30" y2="54" />
                <line x1="12" y1="54" x2="12" y2="3" />
                <line x1="12" y1="3" x2="36" y2="3" />
                <line x1="36" y1="3" x2="36" y2="12" />
              </g>
              <circle cx="36" cy="20" r="7" stroke="var(--purple-2)" strokeWidth="2" />
              <line x1="36" y1="27" x2="36" y2="40" stroke="var(--purple-2)" strokeWidth="2" />
            </svg>
            <div style={{ display: "flex", gap: 5 }}>
              {[1, 1, 0, 1, 1].map((filled, i) => (
                <div
                  key={i}
                  style={{
                    width: 12,
                    height: 3,
                    borderRadius: 2,
                    background: filled ? "var(--purple-2)" : "var(--border-strong)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      );
  }
}
