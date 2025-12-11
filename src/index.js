import "./styles.css";
import Timeline from "./components/timeline";
import { getPosition } from "./components/geo";
import Modal from "./components/modal";

const app = document.getElementById("app");

app.innerHTML = `
  <div class="timeline" id="timeline"></div>
  <input id="input" placeholder="Введите текст и нажмите Enter">
`;

const timeline = new Timeline(document.getElementById("timeline"));

document.getElementById("input").addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const text = e.target.value.trim();
    if (!text) return;

    try {
      const coords = await getPosition();
      timeline.addPost(text, coords);
    } catch {
      const modal = new Modal((coords) => {
        timeline.addPost(text, coords);
      });
      modal.show();
    }

    e.target.value = "";
  }
});
