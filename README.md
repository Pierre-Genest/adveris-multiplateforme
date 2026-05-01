# Adveris — Tauri + React + TypeScript

Music podcast app built with Tauri v2, React 19, TypeScript, and Tailwind CSS v4.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

---

## Prerequisites

To build the app you need **Node.js**, **pnpm**, and **Rust + Cargo**.

### macOS

```bash
# Node.js via nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.nvm/nvm.sh
nvm install --lts

# pnpm
npm install -g pnpm

# Rust + Cargo via rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"

# Tauri system dependencies (Xcode CLI tools)
xcode-select --install
```

### Linux (Debian / Ubuntu)

```bash
# Node.js via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.nvm/nvm.sh
nvm install --lts

# pnpm
npm install -g pnpm

# Rust + Cargo via rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"

# Tauri system dependencies
sudo apt update
sudo apt install -y \
  libwebkit2gtk-4.1-dev \
  libappindicator3-dev \
  librsvg2-dev \
  patchelf \
  build-essential \
  curl \
  wget \
  file \
  libssl-dev \
  libayatana-appindicator3-dev
```

### Windows

1. **Node.js** — download and run the LTS installer from [nodejs.org](https://nodejs.org)
2. **pnpm** — in PowerShell (admin):
   ```powershell
   npm install -g pnpm
   ```
3. **Rust + Cargo** — download and run `rustup-init.exe` from [rustup.rs](https://rustup.rs)
4. **WebView2** — already included on Windows 10 (1803+) and Windows 11; if missing, install from [Microsoft](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
5. **Visual Studio C++ Build Tools** — install [Build Tools for Visual Studio](https://visualstudio.microsoft.com/visual-cpp-build-tools/) with the **Desktop development with C++** workload

> Restart your terminal after each install so PATH changes take effect.

---

## Setup

```bash
# Clone and install dependencies
pnpm install

# Copy env file and fill in your values
cp .env.exemple .env.local
```

---

## Development

```bash
pnpm tauri dev
```

## Build

```bash
pnpm tauri build
```

The distributable installer/bundle is output to `src-tauri/target/release/bundle/`.
