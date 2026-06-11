window.TRAINING_BLOCKS = [
  {
    id:'capacity', title:'Capacity + Bewegung', weeks:'1-10', cls:'cap', intensity:'RPE 3-6, selten 7',
    purpose:'Bewegungen billig machen, Gewebeverträglichkeit aufbauen, 4er fast gratis und 5er wiederholbarer machen. Kein 6er-Projektkrieg.',
    weekly:'4 Bouldertage, 1 optionaler leichter Technikslot, 1 Conditioning/Finger-Capacity, 1 komplette Pause.',
    grade:'1-2 Warm-up/Cooldown. 3 Technik. 4 Hauptvolumen. 5 submax Entwicklung. 6 nur kurz ab Woche 3.',
    progression:[
      'W1-2 Kalibrierung: keine 6er, RPE sauber lernen, 4er perfekt kontrollieren.',
      'W3-4 Volumenaufbau: mehr 4er/5er, maximal 3-5 kurze 6er-Versuche pro Woche.',
      'W5-6 Capacity-Peak: höchstes sauberes Volumen, 4-5 Bouldertage nur bei perfekten Fingern.',
      'W7 Deload: 30-40 Prozent weniger Volumen, keine 6er.',
      'W8-9 spezifische Capacity: mehr 5er-Flash und 2nd-go, 6er nur kurz antasten.',
      'W10 Mini-Test: 4er technisch, 5er maximal 3 Versuche, 6er nur 1-2 kurze Checks.'
    ],
    sessions:[
      ['Submax Capacity','90-105 min','8-12 Warm-up 1-3, 4-6 4er, 6-10 5er, 2-3 Wiederholungen. 5er-Pausen 2-4 min.'],
      ['Technikvolumen','75-90 min','6-8 3er, 8-12 4er, 2-4 leichte 5er. Silent Feet, No-Pull, Hüfte vor Hand.'],
      ['Skill-Projekt','90 min','2 technische Probleme, Grad 4-5, Video nach 5 Versuchen, stoppen wenn Qualität sinkt.'],
      ['Conditioning','45-60 min','Beine, Hüfte, Hamstrings, Core, Wall Crawls, optional 20mm Density.']
    ],
    stop:['Finger-RPE ≥7: kein Board/keine kleinen Leisten.','5+ Versuche ohne Bewegungsverbesserung: Boulder abbrechen.','4er fühlen sich schwer an: Volumen sofort runter.']
  },
  {
    id:'strength', title:'Strength + Boardkraft', weeks:'12-20', cls:'str', intensity:'RPE 5-8',
    purpose:'Höhere Kraftreize verwerten, starke Positionen aufbauen, schwere 5er und kurze 6er-Züge kontrollierter machen.',
    weekly:'4 Bouldertage, 1 Kraft/Finger-Recruitment-Tag, 1 optionaler Technik-Low-Day, 1 Pause. Maximal 2 fingerharte Tage pro 7 Tage.',
    grade:'4 bleibt Warm-up/Technik. 5 ist Hauptarbeitsgrad. 6 nur als Einzelzug/kurze Sequenz, nicht 45 Minuten Projekt.',
    progression:[
      'W12-13 Einstieg: 2 Boardtage RPE 6-7, Recruitment RPE 7, keine Max-Tests.',
      'W14-16 Aufbau: 1 Strength-Boardtag RPE 7-8, 1 submax Boardtag, 1 Skilltag, 1 Techniktag.',
      'W17 Konsolidierung: Volumen minus 20 Prozent, Intensität kurz erhalten.',
      'W18-20 spezifische Stärke: 6er-Züge kurz, 5er schwerer und sauberer, lange Pausen.'
    ],
    sessions:[
      ['Strength-Board','85-100 min','Warm-up 20 min, 5-8 harte Einzelzüge/Sequenzen, 3-5 min Pause, dann 3-5 submax 5er.'],
      ['Recruitment-Finger','35-50 min','20/10mm, 3-5 x 3-5s, RPE 7-8, danach Schulter/Beine.'],
      ['Submax Board','80-95 min','5er wiederholen, 4er technisch billig, kein Projektkrieg.'],
      ['Skilltag','75-90 min','Hooks, hohe Füße, Hüftpositionen, Volumen/Koordination.']
    ],
    stop:['Nie Recruitment am Tag nach fingerhartem Board.','Ringband morgens steif: Strength wird Technik/Prehab.','6er-Dosis: 6-12 gute Versuche pro Woche, nicht pro Session.']
  },
  {
    id:'power', title:'Power + Kontaktkraft', weeks:'22-29', cls:'pow', intensity:'RPE 6-9, wenig Volumen',
    purpose:'Schnelle Catches, harte Deadpoints, Kontaktspannung und explosive Boardzüge trainieren. Frisch starten, lange pausieren, früh stoppen.',
    weekly:'3-4 Bouldertage. 2 harte Power-Reize pro 10 Tage. Dazwischen Technik, Low-Day, Mobility und Prehab.',
    grade:'5 als vorbereitende Powerbasis. 6 als kurze Power-Exposition. 4 für Warm-up und Präzision.',
    progression:[
      'W22-23 Einstieg: wenig Volumen, harte Züge nur solange Catches sauber bleiben.',
      'W24-26 Hauptblock: 2 rote Tage pro 10 Tage, lange Pausen, 6er-Züge/Board-Einzelzüge.',
      'W27 Mini-Deload: Volumen minus 30 Prozent, Intensität kurz erhalten.',
      'W28-29 spezifische Power: wenige hochwertige Züge, keine Müdigkeits-Power.'
    ],
    sessions:[
      ['Power-Day','75-90 min','20-25 min Warm-up, 4-8 harte Einzelzüge, 3-5 min Pause, 2-4 leichte Wiederholungen.'],
      ['Contact-Session','60-75 min','Deadpoint-Kontrolle, Fuß bleibt, leiser Catch, kein Cut-loose wenn vermeidbar.'],
      ['Technique-Low','45-75 min','Grad 2-4, Bewegungsqualität, keine Fingerlast.'],
      ['Prehab','35-50 min','Schulter, Wall Crawls leicht, Core, Mobility.']
    ],
    stop:['Erster Kontakt wird laut/unkontrolliert: Session beenden.','Keine Power unter Müdigkeit.','Nach RPE 9 mindestens 48h keine Fingerlast.']
  },
  {
    id:'endurance', title:'Power-Endurance + Projektkapazität', weeks:'31-38', cls:'end', intensity:'RPE 5-8',
    purpose:'Mehr hochwertige Versuche in einer Session halten. Links, Wiederholbarkeit und Projektfähigkeit verbessern, ohne Technikzerfall.',
    weekly:'4 Bouldertage: 1 Projektkapazität, 1 submax Board, 1 Technik/Skill, 1 Repeat/Volumen. Dazu kurzer Kraft/Prehab-Tag und 1 Pause.',
    grade:'4 und 5 für Wiederholungen/Links. 6 projektorientiert, aber mit Versuchslimit und klaren Pausen.',
    progression:[
      'W31-32 Einstieg: Wiederholungen an 4ern/5ern, keine brutalen Pump-Zirkel.',
      'W33-35 Aufbau: Links, 5er-Cluster, kontrollierte Pausen.',
      'W36 Deload: Volumen minus 25-35 Prozent.',
      'W37-38 spezifische Projektkapazität: kurzer 6er-Projektblock, danach 5er-Qualität halten.'
    ],
    sessions:[
      ['Projektkapazität','90-105 min','1 Hauptboulder 20-30 min mit Versuchslimit, dann 3-5 5er/Links.'],
      ['Repeat-Session','75-90 min','4-6 4er/5er je 2 Wiederholungen, Qualität gleich halten.'],
      ['Cluster','60-80 min','3 ähnliche Boulder, je 2-4 Versuche, 4-6 min zwischen Clustern.'],
      ['Skill/Technik','75 min','technische Limiter ohne maximale Fingerlast.']
    ],
    stop:['Pump darf steigen, Finger-RPE nicht.','Wenn Beta schlechter wird: Pause verlängern oder abbrechen.','Nicht mehr als 1 echtes Projekt pro Session.']
  },
  {
    id:'performance', title:'Performance / 8A-orientiert', weeks:'40-48', cls:'perf', intensity:'RPE 6-9',
    purpose:'Spezifität erhöhen, Breite reduzieren, Frische für Zielboulder organisieren. Nicht überall Reize suchen.',
    weekly:'3-4 Bouldertage. 1-2 Performance-/Projekt-Tage, 1 Erhaltungstag, 1 Technik/Recovery.',
    grade:'4/5 nur Vorbereitung und Erhaltung. 6/projektnahe Boulder gezielt mit Stop-Regeln. Kein zufälliges Volumen.',
    progression:[
      'W40-41 Projektwahl: 2-3 Zielboulder, Limiter analysieren, keine Volumen-Eskalation.',
      'W42-44 Hauptperformance: frisch in harte Tage, wenige hochwertige Versuche.',
      'W45 Taper: Volumen minus 40 Prozent, Intensität kurz erhalten.',
      'W46-48 Peak-Fenster: Top-Versuche nur bei hoher Readiness.'
    ],
    sessions:[
      ['Performance-Day','75-105 min','langer Warm-up, 1 Zielboulder, 6-10 sehr gute Versuche, 4-6 min Pause.'],
      ['Primer','35-50 min','3-5 leichte Powerzüge, 2-3 5er, abbrechen frisch.'],
      ['Erhaltung','70-85 min','4er/5er sauber, wenige harte Züge, keine Erschöpfung.'],
      ['Taper/Recovery','30-60 min','Bewegung, Mobility, mentale Beta, kein Müdigkeitstraining.']
    ],
    stop:['Readiness unter 70: kein Peak-Versuch.','Maximal 2 echte Performance-Tage pro Woche.','Nach hartem Top nicht weiter zerstören.']
  },
  {
    id:'test', title:'Test + Standortbestimmung', weeks:'49', cls:'perf', intensity:'kontrolliert',
    purpose:'Prüfen, was besser wurde: 5er-Quote, Wiederholbarkeit, 6er-Qualität, Fingerreaktion und MoonBoard-Marker.',
    weekly:'3 Bouldertage, 2 Pausen, 1 leichter Techniktag, 1 Analyse/Prehab.',
    grade:'Test: 8-12 4er, 6-8 5er mit maximal 3 Versuchen, 1-2 6er mit maximal 3 Versuchen.',
    progression:['Tag 1 Technik- und 4er-Test.','Tag 3/4 5er-Quote und Wiederholbarkeit.','Tag 6 kurze 6er-/MoonBoard-Marker.','Tag 7 Analyse und nächste Planung.'],
    sessions:[['4er-Test','75 min','Flash-Quote und technische Sauberkeit.'],['5er-Test','90 min','Top in maximal 3 Versuchen, Quote notieren.'],['6er-Touch','45-60 min','kein Projektkrieg, nur Qualität prüfen.'],['Analyse','30-60 min','Fingerreaktion, Videos, Blockauswertung.']],
    stop:['Kein Jahresabschluss durch Verletzung erzwingen.','Schlechter Test ist Datenerhebung, kein Grund zur Eskalation.']
  },
  {
    id:'transition', title:'Transition / Rebuild', weeks:'50-52', cls:'del', intensity:'RPE 2-5',
    purpose:'Psychischen und geweblichen Reset herstellen, gesund und motiviert bleiben, nächstes Jahr vorbereiten.',
    weekly:'2-4 lockere Bouldertage, viel Technik, Spaziergänge, Prehab, Spaßboulder. Keine systematische Maxphase.',
    grade:'1-4 viel, 5 gelegentlich, 6 nur spielerisch und nicht fingerlastig.',
    progression:['W50 Reduktion und Spaß.','W51 Technik neu sortieren, alte Videos vergleichen.','W52 nächstes Jahr planen, Ziele und Limiter aktualisieren.'],
    sessions:[['Leichtes Bouldern','45-75 min','viel Bewegungsqualität, keine Belastungsstapelung.'],['Videoanalyse','30 min','alte Limiter prüfen.'],['Prehab','30-45 min','Wall Crawls leicht, Schulter, Hüfte.'],['Outdoor/Spaziergang','30-90 min','aktive Erholung.']],
    stop:['Keine versteckte Peakphase.','Wenn du dich beweisen willst, ist der Block nicht erfüllt.']
  }
];
window.PHASES = [
  {a:1,b:10,t:'Capacity + Bewegung',cls:'cap'}, {a:11,b:11,t:'Deload 1',cls:'del'}, {a:12,b:20,t:'Strength + Boardkraft',cls:'str'}, {a:21,b:21,t:'Deload 2',cls:'del'}, {a:22,b:29,t:'Power + Kontaktkraft',cls:'pow'}, {a:30,b:30,t:'Deload 3',cls:'del'}, {a:31,b:38,t:'Power-Endurance',cls:'end'}, {a:39,b:39,t:'Deload 4',cls:'del'}, {a:40,b:48,t:'Performance',cls:'perf'}, {a:49,b:49,t:'Test',cls:'perf'}, {a:50,b:52,t:'Transition',cls:'del'}
];