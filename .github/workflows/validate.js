const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

if (!data.student || !Array.isArray(data.projects)) {
  console.error("❌ Erreur : champs manquants !");
  process.exit(1);
}
console.log("✅ JSON valide pour :", data.student);