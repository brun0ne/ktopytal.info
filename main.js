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
];
let sus_texts = [
  "Pytanie mniejszości narodowych",
  "Zbieranie informacji z nielegalnnych źródeł",
  "Proszenie o pomoć istoty pozaziemskie",
];
let amogus = "discord.gg/polska";

function randomText(){
  let index;
  let random = Math.floor((Math.random() * 3) + 1);
  if(random == 1){
   index = Math.floor(Math.random() * texts.length);
   let res = texts[index];
   texts.splice(index, 1); 
  } else if(random == 2){
    index = Math.floor(Math.random() * sus_texts.length);
    let res = sus_texts[index];
  } else if(random == 3){
    let res = amogus;
  }
  return res;
}

function done(){
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
