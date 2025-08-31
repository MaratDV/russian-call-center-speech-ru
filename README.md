# Russian Call Center Speech (RU) — OGG Demo & Player

Готовый комплект для репозитория с **OGG (Vorbis)**-демо и веб‑плеером на GitHub Pages.

---

## Быстрый старт (1 файл)

Положите рядом с этим README файл **`sample_ru.ogg`** и нажмите ▶️ ниже:

<audio controls>
  <source src="sample_ru.ogg?raw=1" type="audio/ogg">
  Ваш браузер не поддерживает OGG. Скачайте файл ниже.
</audio>

**Скачать напрямую:** [sample_ru.ogg](sample_ru.ogg?raw=1)

---

## GitHub Pages — веб‑проигрыватель (плейлист)

1. Включите **Settings → Pages → Source: `main` / `/root` → Save**.  
2. Убедитесь, что эти файлы находятся в корне репозитория:
   - `index.html` — страница плеера
   - `player.js` — логика плеера/плейлиста
   - `styles.css` — оформление
   - `.nojekyll` — отключает обработку Jekyll
   - `samples/manifest.json` — список треков (пример прилагается)

3. Сложите ogg‑файлы в папку `samples/` и перечислите их в `samples/manifest.json`.
4. Откройте GitHub Pages — увидите плейлист и плеер.

### Пример manifest.json
```json
{
  "title": "RU Call Center — Demo Playlist",
  "items": [
    {"file": "sample_ru.ogg", "label": "Sample RU (client–agent)"},
    {"file": "call_01.ogg", "label": "Call 01 — billing"},
    {"file": "call_02.ogg", "label": "Call 02 — support"}
  ]
}
```

---

## Конвертация в OGG

```bash
# WAV → OGG, 16 кГц, моно
ffmpeg -i input.wav -ar 16000 -ac 1 -c:a libvorbis -qscale:a 5 output.ogg

# MP3 → OGG
ffmpeg -i input.mp3 -c:a libvorbis -qscale:a 5 output.ogg
```
`-qscale:a 5` — хорошее качество/размер; при необходимости 3–6.

---

## Браузерная поддержка
- Chrome/Firefox/Edge — ✔️ OGG играет.
- Safari — ❗️OGG может не играть: используйте другой браузер или скачайте файл.

---

## Лицензия и использование
Образцы предназначены для предпрослушивания и оценки качества.  
Для коммерческого использования полного датасета — свяжитесь со мной (контакты в профиле).
