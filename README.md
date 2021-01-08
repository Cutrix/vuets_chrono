# CHRONO24
##### Description du projet
dépôt du projet vuejs de chrono24 , site de commerce utilisant vue3 et typescript aevc smacss comme règle d'organisation du fichier scss .

lien original : https://www.chrono24.fr/

### **Outils et Framework utilisés**
<table>
<tbody>
 <tr>
<td align="center" valign="middle">
        <a href="https://insomnia.rest/" target="_blank">
          <img width="100px" src="https://router.vuejs.org/logo.png">
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://vuejs.org/" target="_blank">
          <img width="148px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png">
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://www.jetbrains.com/fr-fr/webstorm/" target="_blank">
          <img width="148px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/WebStorm.png/1200px-WebStorm.png">
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://git-scm.com/" target="_blank">
          <img width="148px" src="https://git-scm.com/images/logo@2x.png">
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://jquery.com/" target="_blank">
          <img width="148px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Logo_jQuery.svg/1200px-Logo_jQuery.svg.png">
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://developer.mozilla.org/fr/docs/Web/SVG" target="_blank">
          <img width="148px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/SVG_logo.svg/1200px-SVG_logo.svg.png">
        </a>
      </td>
 </tr>
</tbody>
</table>

### Comment lancer le projet ?

- Installation des dépendances javascript
```sh
npm install
```

##### Démarrer le server nodejs pour compiler et lancer le projet vuejs

```sh  
npm run servce  
```
#### Deploiement en sur l'uat
- cloner le projet et se déplacer dans le dossier du répertoire
 ```sh
git clone https://github.com/WebVersalis/vuets_chrono24
 ```

-- se déplacer dans à la racine du projet
```
cd /home/websites/vuets_chrono24/
```
-- non nécessaire
```sh
git reset HEAD --hard
```

-- compilation
```sh
npm run build
```
- donner un lien au répertoire
 ```sh
sudo deploy.sh chrono24.uat.testversalis.net vuets_chrono24 vue
 ```

#### Contributeurs
- Houessinon Landry
