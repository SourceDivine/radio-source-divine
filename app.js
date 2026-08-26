const STREAM = "https://stream.zeno.fm/7u0fw8vmzneuv";

const radio = document.getElementById("radio");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const status = document.getElementById("status");
const install = document.getElementById("install");
const share = document.getElementById("share");
const shareBottom = document.getElementById("shareBottom");

/* ================= RADIO ================= */

radio.src = STREAM;

play.addEventListener("click", async () => {
  try {
    status.textContent = "Connexion à Radio Source Divine...";
    await radio.play();
    status.textContent = "🔴 Radio en direct — Bonne écoute !";
  } catch (error) {
    status.textContent =
      "Impossible de démarrer la radio. Vérifiez votre connexion et réessayez.";
  }
});

stop.addEventListener("click", () => {
  radio.pause();
  radio.currentTime = 0;
  status.textContent = "Radio arrêtée";
});

radio.addEventListener("playing", () => {
  status.textContent = "🔴 Radio en direct — Bonne écoute !";
});

radio.addEventListener("waiting", () => {
  status.textContent = "Connexion au flux en cours...";
});

radio.addEventListener("error", () => {
  status.textContent =
    "Le flux n’est pas disponible pour le moment. Réessayez dans quelques instants.";
});


/* ================= PARTAGE ================= */

async function shareRadio(button) {

  const shareData = {
    title: "Radio Source Divine",
    text:
      "📻 Écoutez Radio Source Divine en direct — La voix qui nourrit votre âme.",
    url: window.location.href
  };

  try {

    if (navigator.share) {

      await navigator.share(shareData);

    } else {

      await navigator.clipboard.writeText(window.location.href);

      if (button) {
        const original = button.innerHTML;

        button.innerHTML = "✅ Lien copié !";

        setTimeout(() => {
          button.innerHTML = original;
        }, 2500);
      }
    }

  } catch (error) {
    console.log("Partage annulé");
  }
}

if (share) {
  share.addEventListener("click", () => {
    shareRadio(share);
  });
}

if (shareBottom) {
  shareBottom.addEventListener("click", () => {
    shareRadio(shareBottom);
  });
}


/* ================= INSTALLATION ================= */

let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (event) => {

  event.preventDefault();

  deferredPrompt = event;

  if (install) {
    install.hidden = false;
  }

});


if (install) {

  install.addEventListener("click", async () => {

    if (!deferredPrompt) {

      alert(
        "Pour installer Radio Source Divine, ouvrez le menu ⋮ de Chrome et recherchez l'option d'installation."
      );

      return;
    }

    deferredPrompt.prompt();

    const choice = await deferredPrompt.userChoice;

    if (choice.outcome === "accepted") {

      console.log("Application installée.");

    }

    deferredPrompt = null;

    install.hidden = true;

  });

}


/* ================= SERVICE WORKER ================= */

if ("serviceWorker" in navigator) {

  window.addEventListener("load", () => {

    navigator.serviceWorker
      .register("/radio-source-divine/sw.js", {
        scope: "/radio-source-divine/"
      })
      .then((registration) => {

        console.log(
          "Service Worker enregistré :",
          registration.scope
        );

      })
      .catch((error) => {

        console.error(
          "Erreur Service Worker :",
          error
        );

      });

  });

}


/* ================= NOTIFICATIONS ================= */

async function requestNotifications(),const notify = document.getElementById("notify");

if (notify) {
  notify.addEventListener("click", requestNotifications);
} {

  if (!("Notification" in window)) {

    alert(
      "Les notifications ne sont pas supportées par ce navigateur."
    );

    return;

  }

  try {

    const permission =
      await Notification.requestPermission();

    if (permission === "granted") {

      new Notification("Radio Source Divine", {
        body:
          "🔔 Les notifications de Radio Source Divine sont activées.",
        icon:
          "/radio-source-divine/icons/icon-192.png"
      });

    }

  } catch (error) {

    console.error(
      "Notifications non disponibles :",
      error
    );

  }

}


/* ================= MESSAGE ================= */

console.log(
  "📻 Radio Source Divine — La voix qui nourrit votre âme"
);
