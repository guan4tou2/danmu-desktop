// Replay Recorder - records danmu replay to WebM video
(function () {
  "use strict";

  class ReplayRecorder {
    constructor() {
      this.canvas = null;
      this.ctx = null;
      this.recorder = null;
      this.chunks = [];
      this.isRecording = false;
      this.danmuItems = []; // Active danmu on canvas
      this.animationFrame = null;
      this.startTime = 0;
      this.width = 1280;
      this.height = 720;
    }

    init(width = 1280, height = 720) {
      this.width = width;
      this.height = height;
      this.canvas = document.createElement("canvas");
      this.canvas.width = width;
      this.canvas.height = height;
      this.ctx = this.canvas.getContext("2d");
    }

    startRecording() {
      if (this.isRecording) return;
      if (!this.canvas) this.init();

      this.chunks = [];
      this.danmuItems = [];
      this.isRecording = true;
      this.startTime = performance.now();

      const stream = this.canvas.captureStream(30); // 30 FPS
      this.recorder = new MediaRecorder(stream, {
        mimeType: "video/webm;codecs=vp9",
        videoBitsPerSecond: 5000000,
      });

      this.recorder.ondataavailable = (e) => {
        if (e.data.size > 0) this.chunks.push(e.data);
      };

      this.recorder.start(100); // Collect data every 100ms
      this._animate();

      return true;
    }

    addDanmu(data) {
      if (!this.isRecording) return;

      const text = data.text || "";
      const color = data.color
        ? "#" + data.color.replace("#", "")
        : "#FFFFFF";
      const size = parseInt(data.size) || 50;
      const speed = parseInt(data.speed) || 5;
      const opacity = (parseInt(data.opacity) || 100) / 100;

      // Calculate duration based on speed (matching overlay logic)
      const duration = (11 - speed) * 1000; // speed 1=10s, speed 10=1s

      const trackHeight = size + 10;
      const maxTracks = Math.floor(this.height / trackHeight);
      const track = this._findTrack(trackHeight, maxTracks);

      this.ctx.font = `bold ${size}px sans-serif`;
      const textWidth = this.ctx.measureText(text).width || text.length * size;

      this.danmuItems.push({
        text,
        color,
        size,
        opacity,
        x: this.width, // Start from right
        y: track * trackHeight + size,
        speed: (this.width + textWidth) / (duration / 1000),
        startTime: performance.now(),
        duration,
        isImage: data.isImage || false,
      });
    }

    _findTrack(trackHeight, maxTracks) {
      // Simple: find first track without recent danmu
      const tracks = new Array(maxTracks).fill(false);
      for (const item of this.danmuItems) {
        const trackIdx = Math.floor((item.y - item.size) / trackHeight);
        if (
          trackIdx >= 0 &&
          trackIdx < maxTracks &&
          item.x > this.width * 0.7
        ) {
          tracks[trackIdx] = true;
        }
      }
      for (let i = 0; i < maxTracks; i++) {
        if (!tracks[i]) return i;
      }
      return Math.floor(Math.random() * maxTracks);
    }

    _animate() {
      if (!this.isRecording) return;

      const ctx = this.ctx;
      const now = performance.now();

      // Clear canvas (transparent black for video)
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, this.width, this.height);

      // Update and draw danmu
      this.danmuItems = this.danmuItems.filter((item) => {
        const elapsed = (now - item.startTime) / 1000;
        item.x = this.width - elapsed * item.speed;

        // Remove if off screen
        if (item.x < -500) return false;

        ctx.save();
        ctx.globalAlpha = item.opacity;
        ctx.font = `bold ${item.size}px sans-serif`;
        ctx.fillStyle = item.color;
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;
        ctx.strokeText(item.text, item.x, item.y);
        ctx.fillText(item.text, item.x, item.y);
        ctx.restore();

        return true;
      });

      this.animationFrame = requestAnimationFrame(() => this._animate());
    }

    stopRecording() {
      return new Promise((resolve) => {
        if (!this.isRecording) {
          resolve(null);
          return;
        }

        this.isRecording = false;
        cancelAnimationFrame(this.animationFrame);

        this.recorder.onstop = () => {
          const blob = new Blob(this.chunks, { type: "video/webm" });
          resolve(blob);
        };

        this.recorder.stop();
      });
    }

    async downloadRecording(filename) {
      const blob = await this.stopRecording();
      if (!blob) return;

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename || `danmu-replay-${Date.now()}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }

  /**
   * TimelineExporter — records danmu as a JSON timeline for offline replay.
   * Lighter alternative to video recording; can be re-imported.
   */
  class TimelineExporter {
    constructor() {
      this.events = [];
      this.startTime = 0;
      this.isRecording = false;
    }

    start() {
      this.events = [];
      this.startTime = Date.now();
      this.isRecording = true;
    }

    addDanmu(data) {
      if (!this.isRecording) return;
      this.events.push({
        t: Date.now() - this.startTime,
        text: data.text || "",
        color: data.color || "FFFFFF",
        size: parseInt(data.size) || 50,
        speed: parseInt(data.speed) || 5,
        opacity: parseInt(data.opacity) || 100,
        layout: data.layout || "scroll",
        nickname: data.nickname || "",
        effects: data.effects || [],
      });
    }

    stop() {
      this.isRecording = false;
      return {
        version: 1,
        duration: Date.now() - this.startTime,
        count: this.events.length,
        events: this.events,
      };
    }

    downloadJSON(filename) {
      const timeline = this.stop();
      const blob = new Blob([JSON.stringify(timeline, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename || `danmu-timeline-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      return timeline;
    }
  }

  window.ReplayRecorder = ReplayRecorder;
  window.TimelineExporter = TimelineExporter;
})();
