export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>📋 Guide de Remplissage du Rapport Hiérarchique</h1>
        <p>Maladies Professionnelles - Guide Complet et Pratique</p>
      </header>

      <main className="content">
        <section className="section">
          <h2>
            <span className="section-number">1</span>
            Introduction et Contexte
          </h2>
          <p>
            Le rapport hiérarchique concernant une maladie professionnelle est un document officiel
            essentiel qui permet d'informer la hiérarchie d'une situation de santé au travail.
            Ce rapport doit être rigoureux, factuel et complet.
          </p>
          <div className="important-box">
            <strong>⚠️ Important :</strong>
            <p>
              Ce rapport peut avoir des conséquences juridiques et administratives.
              Il est crucial de rester objectif et précis dans vos déclarations.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>
            <span className="section-number">2</span>
            Informations Préliminaires
          </h2>

          <h3>2.1 Identification du Salarié</h3>
          <div className="document-template">
            <h4>Informations à renseigner :</h4>
            <div className="field">
              <label>Nom et Prénom :</label>
              <span className="field-placeholder">DUPONT Jean</span>
            </div>
            <div className="field">
              <label>Matricule :</label>
              <span className="field-placeholder">12345678</span>
            </div>
            <div className="field">
              <label>Date de naissance :</label>
              <span className="field-placeholder">15/03/1985</span>
            </div>
            <div className="field">
              <label>Poste occupé :</label>
              <span className="field-placeholder">Opérateur de production</span>
            </div>
            <div className="field">
              <label>Service/Département :</label>
              <span className="field-placeholder">Atelier de fabrication</span>
            </div>
            <div className="field">
              <label>Date d'embauche :</label>
              <span className="field-placeholder">01/09/2010</span>
            </div>
          </div>

          <h3>2.2 Informations sur le Déclarant</h3>
          <p>Indiquez vos informations en tant que supérieur hiérarchique :</p>
          <ul>
            <li>Nom, prénom et fonction</li>
            <li>Service de rattachement</li>
            <li>Coordonnées professionnelles (téléphone, email)</li>
            <li>Date de rédaction du rapport</li>
          </ul>
        </section>

        <section className="section">
          <h2>
            <span className="section-number">3</span>
            Description de la Maladie Professionnelle
          </h2>

          <h3>3.1 Nature de la Maladie</h3>
          <p>Décrivez précisément la maladie professionnelle suspectée ou déclarée :</p>
          <ul>
            <li>Type de pathologie (TMS, affection respiratoire, dermatose, etc.)</li>
            <li>Parties du corps affectées</li>
            <li>Symptômes observés ou rapportés</li>
            <li>Date d'apparition des premiers symptômes</li>
          </ul>

          <div className="warning-box">
            <strong>⚠️ Attention :</strong>
            <p>
              Ne portez pas de diagnostic médical. Limitez-vous aux faits observables
              et aux informations communiquées par le salarié ou le médecin du travail.
            </p>
          </div>

          <h3>3.2 Circonstances de Découverte</h3>
          <p>Expliquez comment la situation a été portée à votre connaissance :</p>
          <ul>
            <li>Le salarié vous en a informé directement</li>
            <li>Alerte du médecin du travail</li>
            <li>Constat lors d'un entretien ou d'une visite</li>
            <li>Déclaration suite à un arrêt de travail</li>
          </ul>
        </section>

        <section className="section">
          <h2>
            <span className="section-number">4</span>
            Analyse des Conditions de Travail
          </h2>

          <h3>4.1 Description du Poste de Travail</h3>
          <p>Détaillez les caractéristiques du poste du salarié :</p>
          <div className="checklist">
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span><strong>Tâches principales :</strong> Liste exhaustive des activités quotidiennes</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span><strong>Équipements utilisés :</strong> Machines, outils, produits chimiques</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span><strong>Horaires de travail :</strong> Temps de travail, pauses, travail posté</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span><strong>Environnement physique :</strong> Température, bruit, éclairage, poussières</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span><strong>Contraintes ergonomiques :</strong> Postures, gestes répétitifs, port de charges</span>
            </div>
          </div>

          <h3>4.2 Facteurs de Risque Identifiés</h3>
          <p>Listez les éléments du poste susceptibles d'être à l'origine de la maladie :</p>
          <ul>
            <li>Exposition à des substances dangereuses (nom, durée, fréquence)</li>
            <li>Mouvements répétitifs ou postures contraignantes</li>
            <li>Vibrations, bruit excessif</li>
            <li>Charges mentales ou stress organisationnel</li>
            <li>Manque d'équipements de protection ou inadéquation</li>
          </ul>

          <h3>4.3 Durée d'Exposition</h3>
          <p>Précisez la durée pendant laquelle le salarié a été exposé aux facteurs de risque :</p>
          <ul>
            <li>Depuis combien de temps occupe-t-il ce poste ?</li>
            <li>Intensité et fréquence de l'exposition</li>
            <li>Évolution des conditions de travail au fil du temps</li>
          </ul>
        </section>

        <section className="section">
          <h2>
            <span className="section-number">5</span>
            Mesures de Prévention Existantes
          </h2>

          <h3>5.1 Équipements de Protection Individuelle (EPI)</h3>
          <p>Indiquez les EPI fournis et leur utilisation :</p>
          <ul>
            <li>Type d'EPI mis à disposition (gants, masques, protections auditives, etc.)</li>
            <li>Date de fourniture et renouvellement</li>
            <li>Formation à l'utilisation des EPI</li>
            <li>Respect du port des EPI par le salarié (à documenter factuellement)</li>
          </ul>

          <h3>5.2 Mesures Collectives de Protection</h3>
          <ul>
            <li>Systèmes de ventilation ou d'aspiration</li>
            <li>Protections sur les machines</li>
            <li>Rotation des postes</li>
            <li>Aménagements ergonomiques</li>
            <li>Procédures de sécurité en place</li>
          </ul>

          <h3>5.3 Formations et Sensibilisations</h3>
          <p>Listez les formations reçues par le salarié :</p>
          <ul>
            <li>Formation à la sécurité (dates et contenu)</li>
            <li>Formation aux risques spécifiques du poste</li>
            <li>Sensibilisation aux gestes et postures</li>
            <li>Habilitations professionnelles</li>
          </ul>

          <div className="success-box">
            <strong>✓ Bonne pratique :</strong>
            <p>
              Joignez les preuves documentaires : attestations de formation, bons de livraison d'EPI,
              comptes-rendus de réunions sécurité, etc.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>
            <span className="section-number">6</span>
            Suivi Médical et Signalements
          </h2>

          <h3>6.1 Visites Médicales</h3>
          <p>Récapitulez le suivi médical du salarié :</p>
          <ul>
            <li>Date de la dernière visite médicale périodique</li>
            <li>Avis d'aptitude ou restrictions médicales</li>
            <li>Visites à la demande du salarié ou de l'employeur</li>
            <li>Recommandations du médecin du travail</li>
          </ul>

          <h3>6.2 Déclarations et Signalements Antérieurs</h3>
          <p>Indiquez si des situations similaires ont été signalées :</p>
          <ul>
            <li>Accidents du travail antérieurs liés au même risque</li>
            <li>Signalements au registre de santé et sécurité</li>
            <li>Remontées au CHSCT/CSE</li>
            <li>Autres cas de maladies professionnelles dans le même service</li>
          </ul>
        </section>

        <section className="section">
          <h2>
            <span className="section-number">7</span>
            Actions Correctives et Préventives
          </h2>

          <h3>7.1 Mesures Immédiates Prises</h3>
          <p>Décrivez les actions entreprises dès la connaissance de la situation :</p>
          <ul>
            <li>Aménagement temporaire du poste de travail</li>
            <li>Reclassement provisoire du salarié</li>
            <li>Renforcement des protections</li>
            <li>Information des autres salariés exposés</li>
          </ul>

          <h3>7.2 Plan d'Actions à Long Terme</h3>
          <p>Proposez des mesures pour prévenir la récidive :</p>
          <div className="checklist">
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Évaluation approfondie des risques professionnels (mise à jour du DUERP)</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Amélioration des équipements ou des procédés de travail</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Formation complémentaire des salariés</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Renforcement de la surveillance médicale</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Consultation des instances représentatives du personnel</span>
            </div>
          </div>

          <div className="important-box">
            <strong>💡 Conseil :</strong>
            <p>
              Planifiez les actions avec des échéances précises et désignez les responsables
              de chaque mesure. Cela démontre votre engagement dans la prévention.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>
            <span className="section-number">8</span>
            Pièces Justificatives à Joindre
          </h2>

          <h3>Documents Obligatoires</h3>
          <div className="checklist">
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Déclaration de maladie professionnelle (formulaire Cerfa)</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Certificat médical initial</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Fiche d'exposition aux risques professionnels</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Extrait du registre unique du personnel</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Avis d'aptitude du médecin du travail</span>
            </div>
          </div>

          <h3>Documents Complémentaires Recommandés</h3>
          <ul>
            <li>Fiche de poste détaillée</li>
            <li>Extrait du Document Unique d'Évaluation des Risques (DUERP)</li>
            <li>Attestations de formation</li>
            <li>Bons de livraison des EPI</li>
            <li>Rapports de visites de l'inspection du travail ou de la CARSAT</li>
            <li>Photos du poste de travail (si pertinent)</li>
            <li>Témoignages écrits de collègues (si nécessaire)</li>
          </ul>
        </section>

        <section className="section">
          <h2>
            <span className="section-number">9</span>
            Rédaction et Présentation du Rapport
          </h2>

          <h3>9.1 Structure du Rapport</h3>
          <p>Organisez votre rapport selon le plan suivant :</p>
          <ol>
            <li><strong>Page de garde</strong> : titre, date, objet, émetteur</li>
            <li><strong>Introduction</strong> : contexte de la rédaction du rapport</li>
            <li><strong>Identification</strong> : salarié, poste, déclarant</li>
            <li><strong>Description de la maladie</strong> : nature, symptômes, découverte</li>
            <li><strong>Analyse du poste</strong> : tâches, risques, expositions</li>
            <li><strong>Prévention existante</strong> : EPI, mesures collectives, formations</li>
            <li><strong>Suivi médical</strong> : visites, restrictions, signalements</li>
            <li><strong>Actions entreprises</strong> : mesures immédiates et plan d'action</li>
            <li><strong>Conclusion</strong> : synthèse et engagement</li>
            <li><strong>Annexes</strong> : pièces justificatives</li>
          </ol>

          <h3>9.2 Conseils de Rédaction</h3>
          <div className="important-box">
            <strong>✍️ Règles d'or :</strong>
            <ul>
              <li><strong>Objectivité</strong> : Restez factuel, évitez les jugements personnels</li>
              <li><strong>Précision</strong> : Datez tous les événements, quantifiez les expositions</li>
              <li><strong>Clarté</strong> : Utilisez un vocabulaire professionnel mais compréhensible</li>
              <li><strong>Exhaustivité</strong> : N'omettez aucun élément pertinent</li>
              <li><strong>Neutralité</strong> : Ne minimisez ni n'exagérez la situation</li>
            </ul>
          </div>

          <h3>9.3 Ton et Style</h3>
          <ul>
            <li>Utilisez un ton formel et professionnel</li>
            <li>Privilégiez les phrases courtes et directes</li>
            <li>Évitez le jargon technique excessif</li>
            <li>Numérotez les paragraphes pour faciliter les références</li>
            <li>Relisez attentivement pour corriger les fautes</li>
          </ul>
        </section>

        <section className="section">
          <h2>
            <span className="section-number">10</span>
            Circuit de Validation et Transmission
          </h2>

          <h3>10.1 Destinataires du Rapport</h3>
          <p>Le rapport doit être transmis à :</p>
          <ul>
            <li>Votre supérieur hiérarchique direct</li>
            <li>Le service des ressources humaines</li>
            <li>Le responsable santé, sécurité et conditions de travail</li>
            <li>Le médecin du travail (copie)</li>
            <li>Le secrétariat du CSE/CHSCT</li>
            <li>L'assurance maladie (CPAM) - via la déclaration officielle</li>
          </ul>

          <h3>10.2 Délais à Respecter</h3>
          <div className="warning-box">
            <strong>⏰ Délais légaux :</strong>
            <ul>
              <li><strong>24 heures</strong> : Information de votre hiérarchie</li>
              <li><strong>15 jours</strong> : Déclaration à la CPAM par l'employeur (à compter de la date à laquelle vous avez eu connaissance de la maladie)</li>
              <li><strong>2 ans</strong> : Délai de prescription pour le salarié (à compter de la date de cessation du travail ou de la première constatation médicale)</li>
            </ul>
          </div>

          <h3>10.3 Archivage</h3>
          <p>Conservez une copie du rapport et de tous les documents annexes :</p>
          <ul>
            <li>Dans le dossier individuel du salarié (partie confidentielle RH)</li>
            <li>Dans le registre des accidents du travail et maladies professionnelles</li>
            <li>Durée de conservation minimum : 5 ans après la fin du contrat</li>
          </ul>
        </section>

        <section className="section">
          <h2>
            <span className="section-number">11</span>
            Points de Vigilance et Erreurs à Éviter
          </h2>

          <h3>⚠️ Erreurs Fréquentes</h3>
          <div className="warning-box">
            <ul>
              <li><strong>Minimiser la situation</strong> : Ne cherchez pas à protéger l'entreprise en sous-estimant les risques</li>
              <li><strong>Accuser le salarié</strong> : Évitez de rejeter la faute sur la victime</li>
              <li><strong>Omettre des informations</strong> : Une information cachée peut ressortir lors de l'enquête</li>
              <li><strong>Porter un diagnostic</strong> : Vous n'êtes pas médecin, restez dans votre rôle</li>
              <li><strong>Tarder à rédiger</strong> : Plus vous attendez, plus les détails s'oublient</li>
              <li><strong>Négliger les témoignages</strong> : Recueillez les déclarations des collègues si nécessaire</li>
              <li><strong>Oublier les annexes</strong> : Un rapport sans preuves perd de sa valeur</li>
            </ul>
          </div>

          <h3>✓ Bonnes Pratiques</h3>
          <div className="success-box">
            <ul>
              <li>Rédigez le rapport le plus tôt possible après la déclaration</li>
              <li>Consultez le service juridique ou RH en cas de doute</li>
              <li>Impliquez le CSE/CHSCT dans l'analyse de la situation</li>
              <li>Documentez toutes vos démarches et actions</li>
              <li>Restez disponible pour des informations complémentaires</li>
              <li>Faites relire votre rapport par une personne qualifiée</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>
            <span className="section-number">12</span>
            Exemple de Rapport (Modèle Type)
          </h2>

          <div className="document-template">
            <h4>RAPPORT HIÉRARCHIQUE - MALADIE PROFESSIONNELLE</h4>
            <br />

            <p><strong>Date :</strong> [JJ/MM/AAAA]</p>
            <p><strong>Objet :</strong> Déclaration de maladie professionnelle présumée - M./Mme [NOM Prénom]</p>
            <p><strong>Rédacteur :</strong> [Nom, Prénom, Fonction]</p>
            <br />

            <h4>1. IDENTIFICATION DU SALARIÉ</h4>
            <ul style={{listStyle: 'none'}}>
              <li>• Nom - Prénom : [...]</li>
              <li>• Matricule : [...]</li>
              <li>• Date de naissance : [...]</li>
              <li>• Poste : [...]</li>
              <li>• Service : [...]</li>
              <li>• Date d'embauche : [...]</li>
            </ul>
            <br />

            <h4>2. DESCRIPTION DE LA MALADIE</h4>
            <p>
              Le [date], M./Mme [Nom] m'a informé(e) qu'il/elle souffrait de [description des symptômes].
              Ces symptômes seraient apparus progressivement depuis [date/période].
              Un certificat médical établi le [date] par le Dr [Nom] évoque [pathologie suspectée].
            </p>
            <br />

            <h4>3. ANALYSE DU POSTE DE TRAVAIL</h4>
            <p><strong>Tâches principales :</strong></p>
            <p>[Décrivez les activités quotidiennes...]</p>

            <p><strong>Facteurs de risque identifiés :</strong></p>
            <ul>
              <li>[Risque 1 : description, fréquence, durée d'exposition]</li>
              <li>[Risque 2 : ...]</li>
            </ul>
            <br />

            <h4>4. MESURES DE PRÉVENTION EN PLACE</h4>
            <p>[Détaillez les EPI, formations, mesures collectives...]</p>
            <br />

            <h4>5. SUIVI MÉDICAL</h4>
            <p>
              Dernière visite médicale : [date] - Avis : [apte/apte avec restrictions]<br />
              Restrictions médicales : [si applicable]
            </p>
            <br />

            <h4>6. ACTIONS ENTREPRISES</h4>
            <p><strong>Mesures immédiates :</strong></p>
            <ul>
              <li>[Action 1]</li>
              <li>[Action 2]</li>
            </ul>

            <p><strong>Plan d'action préventif :</strong></p>
            <ul>
              <li>[Action 1 - Responsable - Échéance]</li>
              <li>[Action 2 - Responsable - Échéance]</li>
            </ul>
            <br />

            <h4>7. CONCLUSION</h4>
            <p>
              Ce rapport a pour but d'informer la hiérarchie de la situation de M./Mme [Nom]
              et de présenter les mesures prises et envisagées. Je reste à disposition pour
              tout complément d'information.
            </p>
            <br />

            <p><strong>Date et signature :</strong></p>
            <p>[Lieu], le [date]</p>
            <p>[Signature]</p>
            <br />

            <p><strong>Annexes jointes :</strong></p>
            <ul>
              <li>Annexe 1 : Certificat médical initial</li>
              <li>Annexe 2 : Fiche de poste</li>
              <li>Annexe 3 : Attestations de formation</li>
              <li>[...]</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>
            <span className="section-number">13</span>
            Ressources et Contacts Utiles
          </h2>

          <h3>Organismes de Référence</h3>
          <ul>
            <li><strong>CPAM (Caisse Primaire d'Assurance Maladie)</strong> : Déclaration et reconnaissance de la maladie professionnelle</li>
            <li><strong>CARSAT/CRAMIF</strong> : Prévention des risques professionnels</li>
            <li><strong>INRS (Institut National de Recherche et de Sécurité)</strong> : Documentation technique et guides</li>
            <li><strong>Inspection du travail</strong> : Contrôle et conseil en santé au travail</li>
            <li><strong>Médecine du travail</strong> : Suivi médical et conseils de prévention</li>
          </ul>

          <h3>Tableaux des Maladies Professionnelles</h3>
          <p>
            Les maladies professionnelles sont répertoriées dans des tableaux annexés au Code de la Sécurité sociale :
          </p>
          <ul>
            <li>Régime général : Tableaux 1 à 98 et au-delà</li>
            <li>Régime agricole : Tableaux spécifiques</li>
            <li>Consultables sur <strong>www.inrs.fr</strong> ou <strong>ameli.fr</strong></li>
          </ul>

          <div className="important-box">
            <strong>📚 Documentation recommandée :</strong>
            <ul>
              <li>Guide INRS ED 6015 : "Les maladies professionnelles"</li>
              <li>Code de la Sécurité sociale - Articles L461-1 et suivants</li>
              <li>Code du Travail - Articles R4624-1 et suivants (suivi médical)</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>
            <span className="section-number">14</span>
            Check-list Finale Avant Envoi
          </h2>

          <div className="checklist">
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Toutes les informations d'identification sont complètes et exactes</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>La description de la maladie est factuelle et précise</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>L'analyse du poste de travail est détaillée</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Les facteurs de risque sont clairement identifiés</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Les mesures de prévention existantes sont documentées</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Le suivi médical est mentionné avec dates et avis</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Les actions correctives sont planifiées avec responsables et échéances</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Toutes les pièces justificatives sont jointes</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Le rapport est daté et signé</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>La liste des destinataires est établie</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Une copie est conservée pour vos archives</span>
            </div>
            <div className="checklist-item">
              <div className="checkbox"></div>
              <span>Le délai de transmission sera respecté (15 jours)</span>
            </div>
          </div>

          <div className="success-box">
            <strong>✓ Rapport prêt à être envoyé</strong>
            <p>
              Une fois tous ces points vérifiés, votre rapport hiérarchique est complet
              et conforme aux exigences légales et réglementaires.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p><strong>Guide de Remplissage du Rapport Hiérarchique - Maladies Professionnelles</strong></p>
        <p>Document à caractère informatif - Version 2025</p>
        <p>⚠️ En cas de doute, consultez votre service RH, juridique ou la médecine du travail</p>
      </footer>
    </div>
  )
}
