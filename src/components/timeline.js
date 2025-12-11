import PlayIcon from "../assets/play.svg";  

export default class Timeline {
  constructor(container) {
    this.container = container;
  }

  addPost(text, coords) {
    const html = `
      <div class="post">
        <div class="post-text">${text}</div>
        <div class="coords">[${coords.lat}, ${coords.lon}]</div>
      </div>
    `;

    this.container.insertAdjacentHTML("beforeend", html);
  }

  addAudio(src, coords) {
    const html = `
      <div class="post">
        <div class="media-container">
          <img class="play-icon"
               src="${PlayIcon}"      <!-- Вот путь к иконке -->
               data-audio="${src}"
               alt="Play">
        </div>
        <div class="coords">[${coords.lat}, ${coords.lon}]</div>
      </div>
    `;

    this.container.insertAdjacentHTML("beforeend", html);
  }

  addVideo(src, coords) {
    const html = `
      <div class="post">
        <div class="media-container">
          <img class="play-icon"
               src="${PlayIcon}"      <!-- Вот путь к иконке -->
               data-video="${src}"
               alt="Play">
        </div>
        <div class="coords">[${coords.lat}, ${coords.lon}]</div>
      </div>
    `;

    this.container.insertAdjacentHTML("beforeend", html);
  }
}
