# Code 39 Generator

Generate a barcode.

## Usage

```bash
wget 'https://code39.io/CODETOGENERATE.png'
```

## Installation

```bash
git clone https://github.com/GitHub30/code39.io.git
cd code39.io/functions/
npm install
npm run serve
```

## Deploy

```bash
firebase deploy
```

## Known Issues

- Code containing slashes does not work. Firebase hosting rewrites do not work well.
