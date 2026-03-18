# Site Web 3ibada - Instructions de Déploiement

## 📋 Vue d'ensemble

Site web multilingue (FR/AR/EN) pour l'application mobile **ibada** - Le baromètre des adorations.

**URL finale** : https://3ibada.com

---

## 📁 Structure du Site

```
3ibada-website/
├── index.html                  # Redirection automatique vers langue
├── index-fr.html              # Page d'accueil française
├── index-ar.html              # Page d'accueil arabe (RTL)
├── index-en.html              # Page d'accueil anglaise
├── privacy-fr.html            # Politique de confidentialité FR
├── privacy-ar.html            # Politique de confidentialité AR
├── privacy-en.html            # Politique de confidentialité EN
├── terms-fr.html              # Conditions d'utilisation FR
├── terms-ar.html              # Conditions d'utilisation AR
├── terms-en.html              # Conditions d'utilisation EN
├── robots.txt                 # Configuration SEO
├── sitemap.xml                # Sitemap pour moteurs de recherche
└── assets/
    ├── css/
    │   └── style.css          # Styles principaux
    ├── js/
    │   └── main.js            # JavaScript multilingue
    └── images/
        └── logo.svg           # Logo 3ibada (Option 4)
```

---

## 🚀 Déploiement sur Netlify (GRATUIT)

### Étape 1 : Créer un compte Netlify

1. Allez sur https://www.netlify.com
2. Créez un compte gratuit (avec GitHub, GitLab ou email)

### Étape 2 : Déployer le site

#### Option A : Glisser-Déposer (PLUS FACILE)

1. Connectez-vous à Netlify
2. Glissez-déposez le dossier **3ibada-website** entier sur la zone "Deploy manually"
3. Attendez 30 secondes → Site déployé ! 🎉

#### Option B : Via Git (Recommandé pour maintenance)

1. Initialisez un repo Git :
```bash
cd 3ibada-website
git init
git add .
git commit -m "Initial commit - Site 3ibada"
```

2. Créez un repo sur GitHub/GitLab
3. Poussez le code :
```bash
git remote add origin [URL_DE_VOTRE_REPO]
git push -u origin main
```

4. Dans Netlify : "New site from Git" → Sélectionnez votre repo
5. Configuration :
   - Build command : (laisser vide)
   - Publish directory : /
   - Deploy site !

### Étape 3 : Configurer le domaine 3ibada.com

1. Dans Netlify → Site settings → Domain management
2. Cliquez sur "Add custom domain"
3. Entrez : **3ibada.com**
4. Netlify vous donnera des nameservers (ex: dns1.p03.nsone.net)
5. Allez chez votre registrar de domaine (où vous avez acheté 3ibada.com)
6. Changez les nameservers pour ceux de Netlify
7. Attendez 1-24h pour la propagation DNS

### Étape 4 : Activer HTTPS (Automatique)

Netlify active HTTPS automatiquement avec Let's Encrypt (gratuit).
Vérifiez : Site settings → Domain management → HTTPS

---

## 🔗 URLs Stables pour Google Play & Apple

Une fois déployé, vous aurez ces URLs stables à fournir :

### Site principal
- https://3ibada.com

### Privacy Policy
- https://3ibada.com/privacy-fr.html
- https://3ibada.com/privacy-ar.html
- https://3ibada.com/privacy-en.html

### Terms of Use
- https://3ibada.com/terms-fr.html
- https://3ibada.com/terms-ar.html
- https://3ibada.com/terms-en.html

**Important** : Utilisez ces URLs dans :
- Google Play Console : Organisation website validation
- Apple Developer : App Review Information
- App Store Connect : Privacy Policy URL & Terms of Use URL

---

## 🛠️ Modifications Futures

### Ajouter les liens App Store et Google Play

1. Ouvrez `index-fr.html`, `index-ar.html`, `index-en.html`
2. Trouvez la section `.store-badges` (ligne ~60)
3. Remplacez les placeholders par les vrais liens :

```html
<!-- Remplacez ceci : -->
<div class="badge-placeholder">App Store - Bientôt disponible</div>
<div class="badge-placeholder">Google Play - Bientôt disponible</div>

<!-- Par ceci : -->
<a href="https://apps.apple.com/app/id[VOTRE_ID]" target="_blank">
    <img src="/assets/images/app-store-badge.png" alt="Download on App Store" height="50">
</a>
<a href="https://play.google.com/store/apps/details?id=com.3ibada.ibada" target="_blank">
    <img src="/assets/images/google-play-badge.png" alt="Get it on Google Play" height="50">
</a>
```

4. Téléchargez les badges officiels :
   - App Store : https://developer.apple.com/app-store/marketing/guidelines/#downloadOnAppstore
   - Google Play : https://play.google.com/intl/en_us/badges/

5. Uploadez les images dans `assets/images/`
6. Redeployez sur Netlify (glisser-déposer le dossier mis à jour)

### Modifier le contenu

1. Éditez les fichiers HTML avec un éditeur de texte
2. Pour les pages légales, modifiez `privacy-*.html` et `terms-*.html`
3. Pour le contenu de la page d'accueil, modifiez `index-*.html`
4. Redeployez sur Netlify

---

## 🎨 Personnalisation du Design

### Changer les couleurs

Éditez `assets/css/style.css` (lignes 14-30) :

```css
:root {
  --violet-deep: #6B46C1;    /* Violet principal */
  --violet-medium: #8B5CF6;  /* Violet moyen */
  --gold: #D4AF37;           /* Or accent */
  /* ... */
}
```

### Changer les polices

Éditez `assets/css/style.css` (ligne 8) pour changer les Google Fonts importées.

---

## 📊 SEO et Performance

### Score actuel (estimé)
- **Google PageSpeed** : 90+ / 100
- **Mobile-friendly** : ✅ Oui
- **HTTPS** : ✅ Oui (via Netlify)
- **Sitemap** : ✅ Inclus
- **Balises hreflang** : ✅ Configurées

### Soumettre le sitemap à Google

1. Allez sur Google Search Console : https://search.google.com/search-console
2. Ajoutez votre propriété : 3ibada.com
3. Vérifiez la propriété (via Netlify DNS TXT record)
4. Soumettez le sitemap : https://3ibada.com/sitemap.xml

---

## ✅ Checklist de Validation Google Play

Avant de valider dans Google Play Console :

- [ ] Site web en ligne et accessible : https://3ibada.com
- [ ] HTTPS actif et certificat valide
- [ ] Privacy Policy accessible : https://3ibada.com/privacy-fr.html (et -ar, -en)
- [ ] Terms of Use accessible : https://3ibada.com/terms-fr.html (et -ar, -en)
- [ ] Les URLs ne sont PAS des Google Drive links
- [ ] Les URLs sont publiques (pas de login requis)
- [ ] Le contenu est lisible et professionnel

---

## 🌐 Fonctionnalités Multilingues

### Détection automatique de la langue

Le site détecte automatiquement la langue du navigateur :
- Navigateur en français → `index-fr.html`
- Navigateur en arabe → `index-ar.html`
- Navigateur en anglais → `index-en.html`
- Autres langues → `index-fr.html` (par défaut)

### Support RTL complet pour l'arabe

- Direction de texte inversée
- Navigation miroir
- Police Amiri pour meilleure lisibilité

---

## 💾 Backup et Sauvegarde

**Important** : Conservez une copie locale du dossier `3ibada-website/`

En cas de problème :
1. Gardez le dossier complet
2. Vous pouvez redéployer en 1 minute sur Netlify
3. Ou migrer vers un autre hébergeur (Vercel, GitHub Pages, etc.)

---

## 📞 Support et Contact

Pour toute question technique :
- Email : contact@3ibada.com
- Documentation Netlify : https://docs.netlify.com

---

## 🎯 Timeline de Déploiement

**Aujourd'hui (31 janvier 2026)** :
1. ✅ Site créé et testé localement
2. ⏳ Déployer sur Netlify (15 minutes)
3. ⏳ Configurer domaine 3ibada.com (1-24h pour DNS)
4. ⏳ Valider Google Play Console avec les URLs

**Demain (1er février 2026)** :
- ✅ Site en ligne avec HTTPS
- ✅ Google Play Console débloqué
- ✅ Amir peut uploader l'APK

---

## 🚨 Dépannage

### Le site ne se charge pas
- Vérifiez que le domaine pointe vers Netlify
- Attendez la propagation DNS (jusqu'à 24h)
- Vérifiez dans Netlify : Deploys → View logs

### HTTPS ne fonctionne pas
- Netlify active HTTPS automatiquement
- Attendez 15-30 minutes après configuration du domaine
- Vérifiez : Site settings → Domain management → HTTPS

### Le changement de langue ne fonctionne pas
- Videz le cache du navigateur
- Vérifiez que JavaScript est activé
- Testez en navigation privée

---

**🎉 Félicitations ! Votre site 3ibada est prêt à être déployé !**

Pour toute assistance, contactez-moi : contact@3ibada.com
