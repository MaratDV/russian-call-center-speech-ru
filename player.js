async function bootstrap(){
  const audio = document.getElementById('audio');
  const list  = document.getElementById('list');
  const now   = document.getElementById('nowPlaying');

  async function fetchManifest(){
    try{
      const res = await fetch('samples/manifest.json',{cache:'no-store'});
      if(!res.ok) throw new Error('manifest not found');
      return await res.json();
    }catch(e){
      return null;
    }
  }

  function setNow(label, file){
    now.textContent = label ? `${label} — ${file}` : file;
  }

  function play(file, label){
    audio.src = file;
    audio.play().catch(()=>{});
    setNow(label, file);
  }

  function addItem(label, file, i){
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = '▶︎';
    btn.onclick = ()=> play(`samples/${file}`, label);
    const span = document.createElement('span');
    span.textContent = label || file;
    span.style.flex = '1';
    const meta = document.createElement('span');
    meta.className = 'badge';
    meta.textContent = file;
    li.append(btn, span, meta);
    list.append(li);
  }

  const manifest = await fetchManifest();

  if(manifest && Array.isArray(manifest.items) && manifest.items.length){
    document.title = manifest.title || document.title;
    manifest.items.forEach((it, i)=> addItem(it.label || it.file, it.file, i));
    // автостарт первого
    play(`samples/${manifest.items[0].file}`, manifest.items[0].label || manifest.items[0].file);
  }else{
    // Fallback: одиночный файл в корне
    addItem('Sample RU (fallback)', 'sample_ru.ogg', 0);
    play('sample_ru.ogg', 'Sample RU (fallback)');
  }
}

bootstrap();
