let texts = [
  "Ankietowanie 90% Polaków...",
  "Zbieranie informacji z grupek na Facebooku...",
  "Szukanie odpowiedzi wśród amerykańskich naukowców...",
  "Analizowanie wiekowych tekstów kultury...",
  "Rozwiązywanie ogromnych układów równań...",
  "Przeszukiwanie wszystkich zakątków świata...",
  "Proszenie o pomoc NASA...",
  "Szukanie eksperta w tej dziedzinie na TikToku...",
  'Wywieszanie ulotek "Zaginęła osoba, która pytała. Prosimy o kontakt"...',
  "Robienie dobrych uczynków...",
  "Bycie miłym dla losowo napotkanego człowieka...",
  "Ładowanie mocy przyjaźni..."
];

function randomText(){
  let index = Math.floor(Math.random() * texts.length);
  let res = texts[index];

  texts.splice(index, 1); // remove

  return res;
}

function done(){
  const am = Math.random() < 0.5;

  if (am) // 50%
    $("#wynik").html("Ja pytałam 😊");

  $("#pre-kto").fadeOut();
  $("#after-kto").fadeIn();
}

$(document).ready(function(){
  $("#how-long").html(((Math.random() * 100) / 100 + 10).toFixed(5));

  // [sec]
  const INTERVAL = 2;
  const DURATION = 10

  let is_done = false;

  $("#progress-kto").animate({
    width: "100%"
  }, DURATION*1000);

  setTimeout(function(){
    done();
    is_done = true;
  }, DURATION*1000)

  setInterval(function(){
    if(is_done)
      return false;

    $("#text-random").html(randomText());
  }, INTERVAL*1000);
});
