/* =========================================================
   100 razones — script principal
   - typewriter
   - razones con reveal on scroll
   - contador / barra de progreso
   - música opcional (sintetizada, sin assets externos)
   ========================================================= */

(() => {
    "use strict";

    /* ----- razones: 100 líneas escritas a mano -----
       Edita libremente. Algunas son universales,
       otras son chistes internos que solo ustedes entienden.
    */
    const REASONS = [
        "porque tu risa es mi sonido favorito sin razón aparente.",
        "porque programas como si el código fuera una forma de hablar.",
        "porque entiendes mis referencias sin que tenga que explicarlas.",
        "porque tu humor es del tipo que necesito conocer a las 3am para entenderlo.",
        "porque me dices las cosas que nadie más se atreve a decir.",
        "porque te gusta The Neighbourhood y eso ya dice mucho de ti.",
        "porque me presentas canciones como si me regalaras pedazos de tu cabeza.",
        "porque contigo las horas se desordenan y no me importa.",
        "porque tu forma de pensar no se parece a la de nadie que haya conocido.",
        "porque me haces querer ser mejor, no por presión, sino por ejemplo.",
        "porque confías en mí con cosas que no le dices a cualquiera.",
        "porque cuando me miras no siento que esté siendo evaluado.",
        "porque te ries de mis chistes malos y eso ya es amor.",
        "porque tienes una playlist mental y quiero escucharla entera.",
        "porque eres detallista con las cosas que importan.",
        "porque tienes una forma tuya de ver el mundo y me invita a verla.",
        "porque Radiohead y Soda Stereo conviven en ti como si nada.",
        "porque sabes de TADC y Murder Drones y eso te hace aún más interesante.",
        "porque me haces reír cuando no tenía ganas de reír.",
        "porque me escuchas. de verdad.",
        "porque no finges ser alguien que no eres.",
        "porque te interesa aprender y eso se nota en cómo preguntas.",
        "porque defiendes lo que crees aunque cueste.",
        "porque me haces sentir que está bien ser raro.",
        "porque contigo los silencios también son conversación.",
        "porque escribes mensajes largos y eso me derrite un poco.",
        "porque me respondes con gifs, audios, palabras, todo a la vez.",
        "porque tienes la capacidad de hacerme sentir cerca aunque haya distancia.",
        "porque me das espacio sin soltarme la mano.",
        "porque tu voz me baja el ruido del mundo.",
        "porque cuando me dices que sí a algo pequeño se siente enorme.",
        "porque compartes cosas tuyas sin que te las pida.",
        "porque te importan las personas y se te nota.",
        "porque te emocionas con cosas chiquitas y eso es contagioso.",
        "porque haces preguntas que no se me habían ocurrido.",
        "porque tu criterio tiene su propia lógica y la respeto.",
        "porque no necesitas gustarle a todo el mundo.",
        "porque me dices las cosas como son, con cuidado pero sin rodeos.",
        "porque tienes manías adorables que aún no me has contado.",
        "porque celebras mis logros como si fueran tuyos.",
        "porque me defiendes cuando no estoy delante.",
        "porque eres de las personas que se quedan.",
        "porque contigo una conversación de 5 minutos parece de 5 horas.",
        "porque me sacas de mi cabeza cuando más lo necesito.",
        "porque me introduces a cosas nuevas con la misma pasión que si fueran tuyas.",
        "porque tienes opiniones firmes y escuchas las de los demás.",
        "porque me haces sentir que no estoy exagerando cuando algo me importa.",
        "porque entiendes que un mal día no define a nadie.",
        "porque me dejas estar vulnerable sin guardarlo en mi contra.",
        "porque me inspiras proyectos que antes no se me ocurrían.",
        "porque te gusta crear cosas, no solo consumirlas.",
        "porque tienes iniciativa y eso me parece atractivo.",
        "porque me haces sentir que el tiempo invertido en ti nunca se pierde.",
        "porque hablas con los ojos cuando no quieres decirlo en voz alta.",
        "porque tu nombre en mi pantalla hace que algo dentro mio se ordene.",
        "porque me respondes con la verdad, no con lo que quieres oír.",
        "porque eres puntual cuando importa y caótica cuando no, y me encanta ese balance.",
        "porque no me haces sentir que tengo que encajar.",
        "porque te importa más cómo me siento que quedar bien.",
        "porque me dejas elegir la música del viaje y eso es un acto de amor.",
        "porque me dices cosas bonitas sin que te las pida.",
        "porque me describes lugares, escenas, gente, y los veo.",
        "porque tienes detalles que parecen imperceptibles y a mí me parecen enormes.",
        "porque me haces sentir que no estoy solo con las cosas que cargo.",
        "porque te importa entender, no solo tener razón.",
        "porque tu forma de querer es tranquila y firme a la vez.",
        "porque puedo imaginarte en mi futuro y no me da miedo.",
        "porque tienes tu propio mundo y me dejas entrar sin pedir permiso.",
        "porque me presentas a la gente que quieres con naturalidad.",
        "porque te importa el cómo, no solo el qué.",
        "porque tienes la manía de cuidar a quien tienes al lado.",
        "porque me haces compañía sin invadirme.",
        "porque me recuerdas que está bien descansar.",
        "porque te ríes de mis referencias raras y a veces hasta las entiendes.",
        "porque te puedo contar cosas que no le he contado a nadie.",
        "porque me cuidas sin que te lo pida.",
        "porque te interesa mi opinión sobre cosas que no te incumben.",
        "porque me haces sentir que importo en los días grises.",
        "porque cuando algo te emociona se te nota en la voz.",
        "porque me das la sensación de que esto no es improvisado.",
        "porque no te da miedo el silencio conmigo.",
        "porque sabes cuándo hablar y cuándo esperar.",
        "porque haces que lo difícil parezca manejable.",
        "porque te tomas en serio las cosas que te importan.",
        "porque me dejas ser yo delante de ti.",
        "porque me demuestras amor con actos pequeños y constantes.",
        "porque eres honesta aunque sea incómodo.",
        "porque me escuchas hablar de código con la misma atención que si fuera poesía.",
        "porque me enseñas cosas sin hacerme sentir menos.",
        "porque me haces querer escribirte aunque no tenga nada importante que decir.",
        "porque tu forma de quererme no se parece a ninguna otra que haya visto.",
        "porque contigo aprendí que no todo tiene que ser intenso para ser real.",
        "porque tu risa me hace reír.",
        "porque me haces sentir en casa aunque no estemos en ningún lugar en particular.",
        "porque tienes la costumbre de dejar huella donde pasas.",
        "porque me haces querer ser el tipo de persona que merezca quedarse a tu lado.",
        "porque te quiero. y esa es, honestamente, la razón que sostiene a las otras 99."
    ];

    const FEED_ONE_END = 50;   // primeras 50 razones en #feed
    const FEED_TWO_START = 50; // restantes en #feedTwo

    /* =========================================================
       Loader
    ========================================================= */
    window.addEventListener("load", () => {
        const loader = document.getElementById("loader");
        if (!loader) return;
        setTimeout(() => loader.classList.add("is-hidden"), 900);
    });

    /* =========================================================
       Typewriter del cover
    ========================================================= */
    const TW_LINES = [
        "no es un catálogo.",
        "es un mapa.",
        "de todo lo que me hace volver a ti.",
        "",
        "léelo despacio."
    ];
    const twEl = document.getElementById("typewriter");
    if (twEl) {
        let i = 0, j = 0, deleting = false;
        const tick = () => {
            const current = TW_LINES[i] || "";
            if (!deleting) {
                twEl.textContent = current.slice(0, j++);
                if (j > current.length + 14) deleting = true;
            } else {
                twEl.textContent = current.slice(0, j--);
                if (j < 0) {
                    deleting = false;
                    j = 0;
                    i = (i + 1) % TW_LINES.length;
                }
            }
            const delay = deleting ? 28 : (j > current.length ? 1400 : 55);
            setTimeout(tick, delay);
        };
        setTimeout(tick, 1200);
    }

    /* =========================================================
       Botón entrar → scroll suave
    ========================================================= */
    const enterBtn = document.getElementById("enterBtn");
    if (enterBtn) {
        enterBtn.addEventListener("click", () => {
            const app = document.getElementById("app");
            if (app) {
                app.hidden = false;
                requestAnimationFrame(() => {
                    app.scrollIntoView({ behavior: "smooth", block: "start" });
                });
            }
        });
    }

    /* =========================================================
       Render razones
    ========================================================= */
    const feed = document.getElementById("feed");
    const feedTwo = document.getElementById("feedTwo");

    const buildReason = (text, idx) => {
        const article = document.createElement("article");
        article.className = "reason";
        article.dataset.index = String(idx);

        const num = document.createElement("div");
        num.className = "reason__num";
        num.textContent = String(idx + 1).padStart(3, "0");

        const body = document.createElement("div");
        const p = document.createElement("p");
        p.className = "reason__text";
        p.textContent = text;
        body.appendChild(p);

        article.appendChild(num);
        article.appendChild(body);
        return article;
    };

    if (feed && feedTwo) {
        REASONS.forEach((text, i) => {
            const node = buildReason(text, i);
            if (i < FEED_ONE_END) feed.appendChild(node);
            else feedTwo.appendChild(node);
        });
    }

    /* =========================================================
       Reveal on scroll + contador
    ========================================================= */
    const reasons = document.querySelectorAll(".reason");
    const topbar = document.querySelector(".topbar");
    const topbarBar = document.getElementById("progressBar");
    const countEl = document.getElementById("currentCount");

    let revealed = 0;
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealed++;
                if (countEl) countEl.textContent = String(Math.min(revealed, REASONS.length));
            }
        });
    }, {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px"
    });

    reasons.forEach((r) => revealObserver.observe(r));

    /* topbar visibility + progress */
    const updateProgress = () => {
        const doc = document.documentElement;
        const scrollTop = window.scrollY;
        const height = doc.scrollHeight - window.innerHeight;
        const ratio = height > 0 ? Math.min(1, scrollTop / height) : 0;
        if (topbarBar) topbarBar.style.transform = `scaleX(${ratio})`;

        if (topbar) {
            if (scrollTop > window.innerHeight * 0.5) topbar.classList.add("is-visible");
            else topbar.classList.remove("is-visible");
        }
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    /* =========================================================
       Botón volver al inicio
    ========================================================= */
    const restartBtn = document.getElementById("restartBtn");
    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* =========================================================
       Fecha
    ========================================================= */
    const dateEl = document.getElementById("todayDate");
    if (dateEl) {
        const months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
        const d = new Date();
        dateEl.textContent = `${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
    }

    /* =========================================================
       Música opcional (sintetizada con WebAudio)
       No usa archivos externos. Pequeño pad + arpegio muy
       suave, estilo The Neighbourhood. Es opcional.
    ========================================================= */
    const audioBtn = document.getElementById("audioToggle");
    let audioCtx = null;
    let isPlaying = false;
    let nodes = [];

    const NOTE_FREQ = (n) => 440 * Math.pow(2, (n - 69) / 12);
    // Notas en MIDI: A2=33, etc. - aquí un pad menor melancólico.
    const CHORD = [45, 52, 55, 57]; // A2 - E3 - G3 - A3 (Am-ish)
    const ARPEGGIO = [57, 60, 64, 67, 64, 60]; // pentatónica menor A

    const startAudio = () => {
        if (audioCtx) return;
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        // Pad sostenido
        const padGain = audioCtx.createGain();
        padGain.gain.value = 0.0;
        padGain.connect(audioCtx.destination);

        const padOscs = CHORD.map((midi, i) => {
            const osc = audioCtx.createOscillator();
            osc.type = i % 2 === 0 ? "sine" : "triangle";
            osc.frequency.value = NOTE_FREQ(midi);
            const g = audioCtx.createGain();
            g.gain.value = 0.06;
            osc.connect(g).connect(padGain);
            osc.start();
            return osc;
        });

        // Filtro lowpass suave
        const filter = audioCtx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 1200;
        filter.Q.value = 0.7;
        padGain.disconnect();
        padGain.connect(filter).connect(audioCtx.destination);

        // Fade-in
        padGain.gain.setValueAtTime(0, audioCtx.currentTime);
        padGain.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 3);

        // Arpegio lento
        let step = 0;
        const arpInterval = setInterval(() => {
            if (!audioCtx || !isPlaying) return;
            const midi = ARPEGGIO[step % ARPEGGIO.length];
            step++;
            const osc = audioCtx.createOscillator();
            osc.type = "sine";
            osc.frequency.value = NOTE_FREQ(midi);
            const g = audioCtx.createGain();
            g.gain.value = 0;
            osc.connect(g).connect(audioCtx.destination);
            const t = audioCtx.currentTime;
            g.gain.setValueAtTime(0, t);
            g.gain.linearRampToValueAtTime(0.07, t + 0.05);
            g.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);
            osc.start(t);
            osc.stop(t + 1.9);
        }, 650);

        nodes = { padOscs, padGain, arpInterval };
    };

    const stopAudio = () => {
        if (!audioCtx) return;
        const t = audioCtx.currentTime;
        if (nodes.padGain) {
            nodes.padGain.gain.cancelScheduledValues(t);
            nodes.padGain.gain.linearRampToValueAtTime(0, t + 1.2);
        }
        setTimeout(() => {
            if (nodes.padOscs) nodes.padOscs.forEach((o) => o.stop());
            if (nodes.arpInterval) clearInterval(nodes.arpInterval);
            audioCtx.close().catch(() => {});
            audioCtx = null;
            nodes = [];
        }, 1400);
    };

    if (audioBtn) {
        audioBtn.addEventListener("click", () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                startAudio();
                audioBtn.classList.add("is-playing");
                audioBtn.querySelector(".audio-toggle__label").textContent = "música on";
            } else {
                stopAudio();
                audioBtn.classList.remove("is-playing");
                audioBtn.querySelector(".audio-toggle__label").textContent = "música";
            }
        });
    }
})();
