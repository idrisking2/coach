window.BRAIN={
principles:[
['Reiztrennung','Fingerstress, Powerstress, Volumenstress und Skillstress werden getrennt betrachtet. Zwei mittelharte Sessions können komplett andere Risiken erzeugen.'],
['Qualitätsvorrang','Ein Boulder-Versuch zählt nur voll, wenn Bewegungsqualität, Kontaktqualität und Fußspannung akzeptabel bleiben.'],
['Finger zuerst','Bei Ringband-Gelb/Rot wird der Plan nach unten angepasst, nicht diskutiert.'],
['Blocktreue','Jede Phase hat eine Hauptanpassung. Capacity sammelt Kontakte, Strength baut Positionen, Power baut Geschwindigkeit, Endurance baut Wiederholbarkeit, Performance organisiert Frische.'],
['Kontrast','Gute Wochen enthalten harte Tage, leichte Tage und echte Pausen. Dauerhaft RPE 5-7 ist oft schlechter als klarer Wechsel.'],
['Versuchslimit','Derselbe harte Zug oft ist ein eigenständiger Risikofaktor, besonders mit kleinen Leisten und Full Crimp.'],
['Fußlast','Bei dir ist mehr über die Füße ziehen ein Haupthebel: Fuß bleibt, Hüfte bewegt zuerst, Hook aktiv, Cut-loose reduzieren.'],
['Morgenreaktion','Die Session ist nicht beendet, wenn du die Halle verlässt. Der Fingerstatus am nächsten Morgen bewertet, ob der Reiz akzeptabel war.']
],
riskRules:[
{key:'redFinger',name:'Finger-RPE hoch',if:'Finger-RPE ≥ 7',why:'hoher lokaler Sehnen-/Ringbandstress',action:'48h keine kleinen Leisten, kein Board, kein Recruitment'},
{key:'smallCrimp',name:'Kleine Leisten + Full Crimp',if:'kleine Leisten und Full Crimp in derselben Session',why:'maximale Ringbandspannung',action:'nächste Session nur Technik auf großen Griffen'},
{key:'smallDyno',name:'Kleine Leisten + dynamischer Catch',if:'kleine Leisten und dynamische Catches',why:'hohe Peak-Kräfte im Catch',action:'Power reduzieren, lange Pausen, keine Repeat-Catches'},
{key:'sameMove',name:'Derselbe harte Zug oft',if:'derselbe Zug oft plus Board/Leisten',why:'repetitive lokale Überlast',action:'Versuchslimit setzen und Variation erzwingen'},
{key:'volumeSkin',name:'Volumen + Haut limitiert',if:'viel Volumen bei schlechter Haut',why:'Kompensation und schlechtere Griffposition',action:'Session kürzen oder Griffart wechseln'},
{key:'density',name:'zu viele harte Tage',if:'≥3 harte Tage in 7 Tagen',why:'Ermüdung maskiert Technik und Fingerwarnzeichen',action:'Low-Day oder Pause'}
],
movementCues:[
{cue:'Fuß bleibt',check:'Bleibt der Fuß nach dem Catch aktiv?',fix:'Zielgriff erst nehmen, wenn Druck im Fuß spürbar bleibt.'},
{cue:'Hüfte vor Hand',check:'Bewegt sich der Schwerpunkt vor der Zughand?',fix:'Setup 1s einfrieren, dann Hüfte initiieren.'},
{cue:'Hook macht kurz',check:'Zieht der Hook dich wirklich in die Wand?',fix:'Hook 2s vorspannen, dann erst weiterziehen.'},
{cue:'Leiser Catch',check:'Ist der Catch laut oder weich?',fix:'Pausen verlängern, Fußdruck erhöhen, Bewegung kleiner machen.'},
{cue:'No-Pull',check:'Kannst du den Zug mit weniger Armspannung lösen?',fix:'Arme lang, Hüfte drehen oder frontal stabilisieren.'},
{cue:'Beta-Entscheidung',check:'Ist der Versuch auf einen Cue fokussiert?',fix:'Pro Versuch nur ein Ziel: Fuß, Hüfte, Catch oder Hook.'},
{cue:'Repeat Better',check:'Wird die Wiederholung billiger?',fix:'Gleichen Boulder dreimal, jedes Mal ein Kraftleck entfernen.'},
{cue:'Board-Fußspannung',check:'Cuttet der Fuß nach dem Griffkontakt?',fix:'Knie/Zehen aktiv halten und Spannung nach dem Catch konservieren.'}
],
sessionRecipes:{
capacity:['Warm-up 10-15 min','4er sauber wiederholen','5er maximal 3-4 Versuche','3 Boulder bewusst besser wiederholen','keine langen 6er-Projekte','Fingerreaktion notieren'],
strength:['langes Warm-up','5-8 harte Einzelzüge/kurze Sequenzen','3-5 min Pause','Backoff 5er sauber','kein Max-Test','Finger-RPE begrenzen'],
power:['nur frisch starten','4-8 harte Einzelzüge','4-6 min Pause','Catchqualität überwachen','bei lautem Catch abbrechen','kein Müdigkeitsballern'],
endurance:['1 Hauptboulder mit Zeitlimit','5er-Cluster','Wiederholungen mit gleicher Qualität','Pump ja, Finger-RPE nein','nicht mehr als 1 echtes Projekt'],
performance:['Zielboulder auswählen','lange Pausen','6-10 hochwertige Versuche','Taper beachten','bei Readiness <70 kein Peak','nach Erfolg nicht weiter zerstören'],
rehab:['Stufe wählen','nur freigegebene Griffarten','Morgenreaktion prüfen','Stufe nur erhöhen wenn 2-3 Sessions symptomfrei','bei Druck zurückstufen']
},
blockQuestions:{
capacity:['Waren 4er billiger?','Wie viele 5er in ≤3 Versuchen?','Gab es Fingerreaktion?','War Volumen sauber oder nur viel?'],
strength:['Waren harte Züge kontrolliert?','War Recruitment getrennt vom Board?','Wie hoch war Finger-RPE?','Wurden 6er nur kurz genutzt?'],
power:['Waren Catches leise?','Warst du wirklich frisch?','Hast du früh genug aufgehört?','Gab es dynamische kleine Leisten?'],
endurance:['Blieb Beta stabil?','Wie viele gute Versuche vor Qualitätsabfall?','War Pump höher als Fingerstress?','Nur ein Projekt?'],
performance:['War Readiness hoch?','War das Projekt passend?','Waren Pausen lang genug?','Hast du nach Erfolg aufgehört?']
},
weekFocus:['Readiness prüfen','Hauptblock respektieren','spezifische Reize tracken','Finger am Morgen bewerten','eine technische Schwäche fokussieren','geplante und tatsächliche Einheiten vergleichen'],
returnToLoad:['Alltag schmerzfrei','leichte Technik auf großen Griffen','moderate 4er ohne kleine Leisten','submax 5er begrenzt','Board vorsichtig','volle Belastung mit Monitoring'],
makeAssessment:function(data,OS){var sessions=data.sessions||[],today=OS.today,recent=sessions.filter(function(s){return OS.diff(s.date,today)>=0&&OS.diff(s.date,today)<10}),warnings=[],score=100;var hard=recent.filter(function(s){return OS.num(s.rpe)>=7}).length;var finger=recent.filter(function(s){return OS.num(s.finger||s.fingerRpe)>=7}).length;var risky=recent.filter(function(s){var st=s.stressors||{};return (st.smallEdges&&st.fullCrimp)||(st.smallEdges&&st.dyno)||(st.sameMove&&st.smallEdges)||(st.moonboard&&st.fullCrimp)}).length;if(hard>=3){score-=20;warnings.push('Viele harte Tage in 10 Tagen: harte Reize reduzieren.')}if(finger>0){score-=35;warnings.push('Finger-RPE ≥7 vorhanden: keine Leisten/Board/Recruitment.')}if(risky>=2){score-=25;warnings.push('Riskante Reizkombinationen häufen sich: spezifisch Fingerstress reduzieren.')}var phase=OS.phase(data.week||1);var block=phase.id||'capacity';var questions=this.blockQuestions[block]||this.blockQuestions.capacity;return{score:Math.max(0,score),warnings:warnings,block:block,questions:questions,recipe:this.sessionRecipes[block]||this.sessionRecipes.capacity}}
};