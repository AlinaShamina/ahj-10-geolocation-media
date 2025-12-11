import { parseCoordinates } from "./parser";

export default class Modal {
  constructor(onSuccess) {
    this.onSuccess = onSuccess;
  }

  show() {
    const container = document.createElement("div");
    container.classList.add("modal");

    container.innerHTML = `
      <div class="modal-content">
        <p>Не удалось определить координаты. Укажите вручную:</p>
        <input id="coord-input" placeholder="[51.50851, -0.12572]">
        <button id="coord-ok">OK</button>
        <button id="coord-cancel">Cancel</button>
      </div>
    `;

    document.body.appendChild(container);

    document.getElementById("coord-ok").onclick = () => {
      try {
        const value = document.getElementById("coord-input").value;
        const coords = parseCoordinates(value);
        this.onSuccess(coords);
        container.remove();
      } catch {
        alert("Ошибка формата");
      }
    };

    document.getElementById("coord-cancel").onclick = () => {
      container.remove();
    };
  }
}
