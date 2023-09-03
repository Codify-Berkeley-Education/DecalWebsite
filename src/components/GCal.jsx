import React from "react";

export default function GCal() {
  return (
    <div style={{ textAlign: "center", margin: "5px" }}>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%239E69AF&ctz=America%2FLos_Angeles&mode=WEEK&src=Y18zOGNlZDdjN2ZhOTU2NTJiNjcxNzAwYjc0MmQxMzU1Y2E0Y2JiODA1Nzk3YzYxNzE3NTAyZGNhZDE4MTQyZjUzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23B39DDB"
        style={{ "border-width": 0 }}
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
