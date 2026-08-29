# BUNKER — Techno Generator

A zero-dependency, single-file techno step sequencer that runs entirely in the browser. Every sound is synthesized live with the Web Audio API — no samples, no libraries, no build step. Program beats, generate patterns, and bounce them to a WAV.

**[▶ Live demo](https://psgundla.github.io/bunker/)** · *(enable GitHub Pages to activate this link)*

![BUNKER screenshot](docs/screenshot.png)

## Features

- **16-step sequencer** with 11 synthesized voices: kick, sub, clap, snare, closed/open hats, tom, rim, plus pitched bass, stab, and acid lead.
- **One-click generator** that builds believable four-on-the-floor patterns (Euclidean basslines, offbeat hats, randomized perc/melodic layers).
- **Transport controls**: play/stop (spacebar), 90–175 BPM, swing, master volume, per-track mute and remove, pitched-track note selectors.
- **WAV export**: renders the current pattern offline to a 16-bit/44.1 kHz stereo WAV (1/2/4/8 bars) with an optional title/credit written to standard RIFF metadata.
- **Accurate timing** via an `AudioContext`-clock lookahead scheduler rather than `setInterval`.

## Run it

No tooling required. Either:

```bash
# clone and open
git clone https://github.com/psgundla/bunker.git
cd bunker
python3 -m http.server 8000   # then visit http://localhost:8000
```

…or just open `index.html` directly in any modern browser (Chrome, Firefox, Safari, Edge).

## Deploy on GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Your app goes live at `https://<username>.github.io/<repo>/`.

## How it works

The whole app is in `index.html` (HTML + CSS + vanilla JS).

- **Synthesis** — each voice is a small function (`kick`, `hat`, `bass`, …) that schedules oscillators/noise + envelopes onto a shared `DynamicsCompressor → GainNode → destination` chain.
- **Sequencer** — a lookahead scheduler reads `AudioContext.currentTime`, queues steps ~120 ms ahead, and schedules UI playhead updates. Swing delays odd 16th-notes by a fraction of a step.
- **Generator** — `generate()` lays down a kick on every beat, a backbeat clap/snare, offbeat hats, a Euclidean bassline, and probabilistic perc/melodic layers.
- **Export** — `renderPCM()` re-runs the pattern into an `OfflineAudioContext` (deterministic, faster than realtime), `toPCM16()` interleaves and quantizes, and `buildWav()` writes a RIFF/WAVE file with a `LIST/INFO` metadata chunk.

To add a new instrument, add an entry to the `INSTRUMENTS` map with a `trig(time, gain, freq)` function; it appears in the palette automatically.

## Contributing

Issues and PRs welcome — new voices, pattern styles, and export formats (MP3/stems) are all fair game.

## License

[MIT](LICENSE) © psgundla
