<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <meta name="theme-color" content="#0b5ed7">
  <meta name="description" content="Radio Source Divine — La voix qui nourrit votre âme.">

  <link rel="manifest" href="manifest.json">
  <link rel="icon" href="icons/icon-192.png">
  <link rel="apple-touch-icon" href="icons/icon-192.png">
  <link rel="stylesheet" href="style.css">

  <title>Radio Source Divine</title>
</head>

<body>

  <!-- ================= HEADER ================= -->

  <header class="hero">

    <div class="logo">
      RSD
    </div>

    <div class="hero-text">
      <div class="live-badge">
        <span class="live-dot"></span>
        EN DIRECT
      </div>

      <h1>Radio Source Divine</h1>

      <p>La voix qui nourrit votre âme</p>
    </div>

  </header>


  <main>

    <!-- ================= RADIO ================= -->

    <section class="player-card">

      <div class="radio-icon">📻</div>

      <h2>Écoutez Radio Source Divine</h2>

      <p id="status">
        Prêt à écouter
      </p>

      <audio id="radio" preload="none" controls></audio>

      <button id="play" class="primary">
        ▶ ÉCOUTER EN DIRECT
      </button>

      <button id="stop" class="secondary">
        ■ ARRÊTER
      </button>

      <button id="install" class="install" hidden>
        📲 INSTALLER L'APPLICATION
      </button>

    </section>


    <!-- ================= ACTIONS RAPIDES ================= -->

    <section class="quick-actions">

      <a
        class="action prayer"
        href="https://wa.me/"
        target="_blank"
        rel="noopener">

        <span>🙏</span>
        <strong>Demande de prière</strong>
        <small>Envoyez votre sujet de prière</small>

      </a>


      <a
        class="action whatsapp"
        href="https://wa.me/"
        target="_blank"
        rel="noopener">

        <span>💬</span>
        <strong>WhatsApp</strong>
        <small>Contactez Radio Source Divine</small>

      </a>


      <button
        id="share"
        class="action share-action">

        <span>📤</span>
        <strong>Partager</strong>
        <small>Invitez vos amis à écouter</small>

      </button>

    </section>


    <!-- ================= PROGRAMMES ================= -->

    <section class="programs">

      <div class="section-title">

        <span>📅</span>

        <div>
          <h2>Nos Programmes</h2>
          <p>Des émissions pour nourrir votre foi</p>
        </div>

      </div>


      <div class="program-list">


        <article class="program">

          <div class="program-icon">
            🙏
          </div>

          <div class="program-info">

            <h3>Vitamine Spirituelle</h3>

            <p>
              Un temps de méditation, de prière et
              d'encouragement dans la Parole de Dieu.
            </p>

            <div class="program-time">
              📅 Dimanche • 7:00 AM
            </div>

          </div>

        </article>


        <article class="program">

          <div class="program-icon">
            📖
          </div>

          <div class="program-info">

            <h3>Parole de Vie</h3>

            <p>
              Des messages bibliques en français et
              en anglais pour fortifier votre foi.
            </p>

            <div class="program-time">
              📅 Premier dimanche • 9:00 AM
            </div>

          </div>

        </article>


        <article class="program">

          <div class="program-icon">
            🎵
          </div>

          <div class="program-info">

            <h3>Musique & Méditation</h3>

            <p>
              Musique chrétienne, louange et moments
              de méditation avec Radio Source Divine.
            </p>

            <div class="program-time">
              📻 24 heures sur 24
            </div>

          </div>

        </article>

      </div>

    </section>


    <!-- ================= RESEAUX SOCIAUX ================= -->

    <section class="social">

      <h2>🌐 Suivez-nous</h2>

      <p>
        Retrouvez Radio Source Divine sur les réseaux sociaux.
      </p>

      <div class="social-buttons">

        <a href="#" target="_blank" rel="noopener">
          ▶️ YouTube
        </a>

        <a href="#" target="_blank" rel="noopener">
          f Facebook
        </a>

      </div>

    </section>


    <!-- ================= PARTAGE ================= -->

    <section class="contact">

      <h2>🙏 Restons connectés</h2>

      <p>
        Radio Source Divine est là pour vous accompagner
        dans votre marche avec Dieu.
      </p>

      <button id="shareBottom" class="primary">
        📤 PARTAGER LA RADIO
      </button>

    </section>

  </main>


  <!-- ================= WHATSAPP FLOTTANT ================= -->

  <a
    href="https://wa.me/"
    class="whatsapp-float"
    target="_blank"
    rel="noopener"
    aria-label="Contacter Radio Source Divine sur WhatsApp">

    💬

  </a>


  <!-- ================= FOOTER ================= -->

  <footer>

    <strong>📻 Radio Source Divine</strong>

    <p>
      La voix qui nourrit votre âme
    </p>

    <p>
      © 2026 Radio Source Divine • Source Divine Ministries
    </p>

  </footer>


  <script src="app.js"></script>

</body>
</html>
