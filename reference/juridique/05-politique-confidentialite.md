# 05 — Politique de confidentialité (RGPD) — BROUILLON

> ⚠️ Brouillon non contractuel, à faire relire par un juriste. Deux régimes très
> différents selon l'état du produit : SANS comptes (aujourd'hui) / AVEC comptes
> et abonnement (futur).

## A. État actuel du Service (sans comptes)

### Données traitées

- **Aucune donnée patient** : les réponses saisies dans l'aide au bilan restent
  dans la mémoire du navigateur le temps de la session ; elles ne sont **ni
  transmises, ni enregistrées** (pas de base de données, pas de `localStorage`
  de données de santé).
- **Aucun compte, aucun formulaire**, pas de cookies publicitaires ni de mesure
  d'audience tierce à ce jour. [À METTRE À JOUR si un outil d'audience est
  ajouté — préférer une solution exemptée de consentement (ex. auto-hébergée,
  configurée selon les recommandations CNIL).]
- **Journaux techniques de l'hébergeur** : l'hébergeur ([À COMPLÉTER — ex.
  Vercel]) peut traiter des journaux (adresses IP) pour la sécurité et la
  délivrance du service — base légale : intérêt légitime. [À DOCUMENTER : DPA de
  l'hébergeur, transferts hors UE et clauses types éventuelles.]

### Vos droits

Droits d'accès, rectification, effacement, limitation, opposition (art. 15 à 21
RGPD) auprès de [À COMPLÉTER — contact]. Réclamation possible auprès de la CNIL.

## B. Futur (comptes + abonnement) — à compléter AVANT ouverture

Si des comptes utilisateurs et un paiement sont mis en place, il faudra :

1. **Registre des traitements** (art. 30) : création de compte, facturation,
   support, e-mails transactionnels.
2. **Bases légales** : exécution du contrat (compte, abonnement), obligation
   légale (facturation), intérêt légitime (sécurité), consentement (marketing).
3. **Sous-traitants** : processeur de paiement ([À COMPLÉTER — ex. Stripe]),
   hébergeur, e-mailing — signer les **DPA**, documenter les transferts hors UE.
4. **Information des personnes** (art. 13) : identité du responsable, finalités,
   durées de conservation, droits, réclamation CNIL.
5. **Durées de conservation** : compte (durée d'inscription + [À DÉFINIR]),
   factures (10 ans, obligation comptable), logs (6 mois à 1 an).
6. **Sécurité** (art. 32) : chiffrement en transit, hachage des mots de passe
   (bcrypt/argon2), moindre privilège, journalisation des accès.
7. **DPO / représentant** : à évaluer selon l'échelle. Pas d'obligation
   systématique pour une petite structure, mais un point de contact est requis.
8. **Pas de données de santé** : même en version abonnement, le principe
   « aucune donnée patient stockée » doit être **maintenu** — cela évite le
   régime renforcé des données de santé (art. 9) et l'hébergement HDS.

*Version : brouillon — [date à compléter].*
