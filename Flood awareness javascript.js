/**
 * FloodWatch — Flood Awareness Information System
 * script.js — All interactive logic
 */

/* ============================================================
   DATA: Flood-Prone Locations
   ============================================================ */
const floodData = [
  {
    name: "Mumbai",
    region: "Maharashtra, India",
    risk: "High",
    riskScore: 92,
    icon: "🏙️",
    history: [
      { year: "2005", event: "Great Mumbai Flood — 944mm rainfall in 24hrs", severity: "Critical" },
      { year: "2017", event: "Severe flooding; 1200+ mm monthly rainfall", severity: "Severe" },
      { year: "2019", event: "Coastal flooding from Cyclone Vayu", severity: "Severe" },
      { year: "2022", event: "Kurla & Sion submerged for 36 hrs", severity: "Moderate" },
    ],
    contacts: [
      { name: "NDRF Mumbai", number: "1078", icon: "🚁" },
      { name: "BMC Disaster Cell", number: "1916", icon: "🏛️" },
      { name: "Ambulance", number: "108", icon: "🚑" },
    ],
  },
  {
    name: "Chennai",
    region: "Tamil Nadu, India",
    risk: "High",
    riskScore: 88,
    icon: "🌊",
    history: [
      { year: "2015", event: "Devastating floods; 1000+ lives lost, ₹1 lakh crore damage", severity: "Critical" },
      { year: "2021", event: "Cyclone Nivar — widespread coastal flooding", severity: "Severe" },
      { year: "2023", event: "Northeast monsoon triggered heavy waterlogging", severity: "Moderate" },
    ],
    contacts: [
      { name: "TN Disaster Response", number: "1070", icon: "🚁" },
      { name: "GCC Emergency", number: "044-25384530", icon: "🏛️" },
      { name: "Ambulance", number: "108", icon: "🚑" },
    ],
  },
  {
    name: "Patna",
    region: "Bihar, India",
    risk: "High",
    riskScore: 85,
    icon: "🌧️",
    history: [
      { year: "2019", event: "Massive urban flooding — city paralysed for a week", severity: "Critical" },
      { year: "2020", event: "Kosi River breach; 28 districts affected", severity: "Severe" },
      { year: "2022", event: "Monsoon surge — hundreds of villages submerged", severity: "Severe" },
    ],
    contacts: [
      { name: "Bihar SDMA", number: "0612-2215405", icon: "🚁" },
      { name: "NDRF Patna", number: "1078", icon: "🏛️" },
      { name: "Emergency", number: "112", icon: "🚨" },
    ],
  },
  {
    name: "Guwahati",
    region: "Assam, India",
    risk: "High",
    riskScore: 89,
    icon: "🏔️",
    history: [
      { year: "2012", event: "Brahmaputra overflow — city submerged 3 ft deep", severity: "Critical" },
      { year: "2020", event: "Record monsoon: 80 lakh affected across Assam", severity: "Critical" },
      { year: "2023", event: "Seasonal floods displace thousands in city outskirts", severity: "Severe" },
    ],
    contacts: [
      { name: "ASDMA Helpline", number: "1070", icon: "🚁" },
      { name: "GMC Emergency", number: "0361-2601613", icon: "🏛️" },
      { name: "Ambulance", number: "108", icon: "🚑" },
    ],
  },
  {
    name: "Hyderabad",
    region: "Telangana, India",
    risk: "Medium",
    riskScore: 62,
    icon: "🌆",
    history: [
      { year: "2020", event: "Unprecedented rainfall; 50 deaths, ₹5000 cr damage", severity: "Critical" },
      { year: "2016", event: "Musi River flooding in low-lying areas", severity: "Moderate" },
      { year: "2022", event: "Urban flooding in Secunderabad", severity: "Moderate" },
    ],
    contacts: [
      { name: "GHMC Flood Helpline", number: "040-21111111", icon: "🏛️" },
      { name: "Telangana SDRF", number: "1070", icon: "🚁" },
      { name: "Emergency", number: "112", icon: "🚨" },
    ],
  },
  {
    name: "Kolkata",
    region: "West Bengal, India",
    risk: "Medium",
    riskScore: 68,
    icon: "🌁",
    history: [
      { year: "2021", event: "Cyclone Yaas: Sundarbans & coastal areas devastated", severity: "Severe" },
      { year: "2009", event: "Cyclone Aila: 3.5 million displaced", severity: "Severe" },
      { year: "2018", event: "Waterlogging in 200+ wards after heavy monsoon", severity: "Moderate" },
    ],
    contacts: [
      { name: "WB Disaster Management", number: "1077", icon: "🚁" },
      { name: "KMC Emergency", number: "1800-345-3300", icon: "🏛️" },
      { name: "Ambulance", number: "108", icon: "🚑" },
    ],
  },
  {
    name: "Bhopal",
    region: "Madhya Pradesh, India",
    risk: "Medium",
    riskScore: 48,
    icon: "🏡",
    history: [
      { year: "2006", event: "Heavy rains cause local flooding and road damage", severity: "Moderate" },
      { year: "2021", event: "Low-lying areas near Upper Lake flooded", severity: "Moderate" },
    ],
    contacts: [
      { name: "MP Emergency", number: "1079", icon: "🚁" },
      { name: "BMC Control Room", number: "0755-2700700", icon: "🏛️" },
      { name: "Emergency", number: "112", icon: "🚨" },
    ],
  },
  {
    name: "Jaipur",
    region: "Rajasthan, India",
    risk: "Low",
    riskScore: 28,
    icon: "🏜️",
    history: [
      { year: "2022", event: "Unusual heavy rainfall caused minor urban waterlogging", severity: "Moderate" },
      { year: "2017", event: "Flash flooding in outskirt villages after cloudburst", severity: "Moderate" },
    ],
    contacts: [
      { name: "Rajasthan Emergency", number: "0141-2227011", icon: "🚁" },
      { name: "JMC Control Room", number: "1800-180-6127", icon: "🏛️" },
      { name: "Emergency", number: "112", icon: "🚨" },
    ],
  },
  {
    name: "Bengaluru",
    region: "Karnataka, India",
    risk: "Medium",
    riskScore: 55,
    icon: "🌇",
    history: [
      { year: "2022", event: "Tech parks and residential areas flooded for days", severity: "Severe" },
      { year: "2021", event: "Heavy monsoon: low-lying areas waterlogged for weeks", severity: "Moderate" },
    ],
    contacts: [
      { name: "BBMP War Room", number: "1533", icon: "🏛️" },
      { name: "Karnataka SDMA", number: "1070", icon: "🚁" },
      { name: "Ambulance", number: "108", icon: "🚑" },
    ],
  },
  {
    name: "Ahmedabad",
    region: "Gujarat, India",
    risk: "Medium",
    riskScore: 52,
    icon: "🏗️",
    history: [
      { year: "2017", event: "Flooding due to Sabarmati River overflow", severity: "Moderate" },
      { year: "2020", event: "Cyclone Nisarga; coastal districts affected", severity: "Moderate" },
    ],
    contacts: [
      { name: "AMC Emergency", number: "079-25390016", icon: "🏛️" },
      { name: "Gujarat SDRF", number: "1070", icon: "🚁" },
      { name: "Emergency", number: "112", icon: "🚨" },
    ],
  },
  {
    name: "Delhi",
    region: "Delhi NCR, India",
    risk: "Medium",
    riskScore: 60,
    icon: "🏛️",
    history: [
      { year: "2023", event: "Yamuna breached danger mark; 27,000 evacuated", severity: "Severe" },
      { year: "2021", event: "Urban flooding crippled traffic for 3 days", severity: "Moderate" },
      { year: "2013", event: "Yamuna flood peak — thousands displaced in low-lying colonies", severity: "Severe" },
    ],
    contacts: [
      { name: "Delhi Flood Control", number: "011-23370170", icon: "🚁" },
      { name: "DDMA Helpline", number: "1077", icon: "🏛️" },
      { name: "Emergency", number: "112", icon: "🚨" },
    ],
  },
  {
    name: "Shimla",
    region: "Himachal Pradesh, India",
    risk: "Low",
    riskScore: 30,
    icon: "⛰️",
    history: [
      { year: "2023", event: "Landslides and flash floods; 14 deaths in state", severity: "Severe" },
      { year: "2018", event: "Heavy rain — minor flooding in valleys", severity: "Moderate" },
    ],
    contacts: [
      { name: "HP Emergency", number: "0177-2812344", icon: "🚁" },
      { name: "Shimla Municipal", number: "1800-180-8047", icon: "🏛️" },
      { name: "Emergency", number: "112", icon: "🚨" },
    ],
  },
];

/* ============================================================
   QUICK TAGS — seed from a few random places
   ============================================================ */
function initQuickTags() {
  const picks = ["Mumbai", "Chennai", "Guwahati", "Delhi", "Bengaluru"];
  const container = document.getElementById("quickTags");
  picks.forEach(name => {
    const btn = document.createElement("button");
    btn.className = "quick-tag";
    btn.textContent = name;
    btn.addEventListener("click", () => {
      document.getElementById("locationInput").value = name;
      searchLocation();
    });
    container.appendChild(btn);
  });
}

/* ============================================================
   AUTOCOMPLETE
   ============================================================ */
const input = document.getElementById("locationInput");
const dropdown = document.getElementById("autocomplete-dropdown");

input.addEventListener("input", () => {
  const val = input.value.trim().toLowerCase();
  dropdown.innerHTML = "";
  if (!val || val.length < 2) { dropdown.classList.remove("open"); return; }

  const matches = floodData.filter(loc =>
    loc.name.toLowerCase().includes(val) ||
    loc.region.toLowerCase().includes(val)
  );

  if (!matches.length) { dropdown.classList.remove("open"); return; }

  matches.slice(0, 6).forEach(loc => {
    const item = document.createElement("div");
    item.className = "autocomplete-item";
    const riskClass = loc.risk === "High" ? "risk-high" : loc.risk === "Medium" ? "risk-medium" : "risk-low";
    item.innerHTML = `
      <span>${loc.icon}</span>
      <span>${loc.name}</span>
      <small style="color:var(--text-muted)">${loc.region}</small>
      <span class="item-risk ${riskClass}">${loc.risk}</span>
    `;
    item.addEventListener("click", () => {
      input.value = loc.name;
      dropdown.classList.remove("open");
      searchLocation();
    });
    dropdown.appendChild(item);
  });
  dropdown.classList.add("open");
});

document.addEventListener("click", e => {
  if (!e.target.closest(".search-input-wrap")) {
    dropdown.classList.remove("open");
  }
});

/* ============================================================
   SEARCH LOCATION
   ============================================================ */
function searchLocation() {
  dropdown.classList.remove("open");
  const query = document.getElementById("locationInput").value.trim().toLowerCase();
  const resultContainer = document.getElementById("resultContainer");
  const noResult = document.getElementById("noResult");

  // Clear previous results
  resultContainer.innerHTML = "";
  noResult.classList.add("hidden");

  if (!query) return;

  // Find match
  const loc = floodData.find(
    d =>
      d.name.toLowerCase() === query ||
      d.name.toLowerCase().includes(query) ||
      query.includes(d.name.toLowerCase())
  );

  if (!loc) {
    noResult.classList.remove("hidden");
    // Scroll to results
    document.getElementById("results-section").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  // Build result card
  const card = buildResultCard(loc);
  resultContainer.appendChild(card);

  // Smooth scroll
  setTimeout(() => {
    document.getElementById("results-section").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);

  // Animate risk meter bar
  const fill = card.querySelector(".risk-meter-bar-fill");
  if (fill) {
    fill.style.width = "0%";
    requestAnimationFrame(() => {
      setTimeout(() => { fill.style.width = loc.riskScore + "%"; }, 200);
    });
  }
}

/* ---- Enter key support ---- */
document.getElementById("locationInput").addEventListener("keydown", e => {
  if (e.key === "Enter") searchLocation();
});

/* ============================================================
   BUILD RESULT CARD
   ============================================================ */
function buildResultCard(loc) {
  const card = document.createElement("div");
  card.className = "result-card";

  // Risk class
  const riskClass = loc.risk === "High"
    ? "risk-high"
    : loc.risk === "Medium"
    ? "risk-medium"
    : "risk-low";

  // Risk bar color
  const barColor = loc.risk === "High"
    ? "var(--risk-high)"
    : loc.risk === "Medium"
    ? "var(--risk-med)"
    : "var(--risk-low)";

  // Build flood history HTML
  const historyHTML = loc.history.map(h => {
    const sevClass = h.severity === "Critical"
      ? "sev-critical"
      : h.severity === "Severe"
      ? "sev-severe"
      : "sev-moderate";
    return `
      <div class="flood-event">
        <span class="fe-year">${h.year}</span>
        <span>${h.event}</span>
        <span class="fe-severity ${sevClass}">${h.severity}</span>
      </div>
    `;
  }).join("");

  // Build contacts HTML
  const contactsHTML = loc.contacts.map(c => `
    <a class="contact-item" href="tel:${c.number}">
      <span class="contact-icon">${c.icon}</span>
      <div class="contact-info">
        <div class="contact-name">${c.name}</div>
        <div class="contact-num">${c.number}</div>
      </div>
      <span style="color:var(--text-muted);font-size:12px;">Call →</span>
    </a>
  `).join("");

  card.innerHTML = `
    <!-- Card Header -->
    <div class="result-header">
      <div class="result-location">
        <h2>${loc.icon} ${loc.name}</h2>
        <div class="result-region">📌 ${loc.region}</div>
      </div>
      <div class="risk-badge ${riskClass}">
        <span class="risk-dot"></span>
        ${loc.risk} Risk
      </div>
    </div>

    <!-- Card Body -->
    <div class="result-body">

      <!-- Flood History -->
      <div class="result-block">
        <div class="result-block-label">📜 Historical Flood Events</div>
        <div class="flood-events">
          ${historyHTML}
        </div>
      </div>

      <!-- Emergency Contacts -->
      <div class="result-block">
        <div class="result-block-label">📞 Emergency Contacts</div>
        <div class="contact-list">
          ${contactsHTML}
        </div>
      </div>

      <!-- Risk Meter -->
      <div class="result-block">
        <div class="result-block-label">📊 Risk Score Indicator</div>
        <div class="risk-meter-wrap">
          <div class="risk-meter-label">
            <span>Risk Level</span>
            <span style="font-family:var(--font-mono);color:${barColor}">${loc.riskScore}/100</span>
          </div>
          <div class="risk-meter-bar-bg">
            <div
              class="risk-meter-bar-fill"
              style="background:${barColor}; width:0%; box-shadow: 0 0 12px ${barColor};"
            ></div>
          </div>
          <div class="risk-meter-label">
            <span style="color:var(--risk-low)">Low</span>
            <span style="color:var(--risk-med)">Medium</span>
            <span style="color:var(--risk-high)">High</span>
          </div>
          <p style="font-size:12px;color:var(--text-muted);margin-top:8px;">
            Score is based on historical frequency, severity, and geographical vulnerability.
          </p>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="result-block">
        <div class="result-block-label">⚡ Quick Actions</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a class="contact-item" href="tel:112">
            <span class="contact-icon">🆘</span>
            <div class="contact-info">
              <div class="contact-name">National Emergency (India)</div>
              <div class="contact-num">112</div>
            </div>
            <span style="color:var(--risk-high);font-size:12px;font-weight:700;">CALL →</span>
          </a>
          <a class="contact-item" href="tel:1078">
            <span class="contact-icon">🚁</span>
            <div class="contact-info">
              <div class="contact-name">NDRF Flood Helpline</div>
              <div class="contact-num">1078</div>
            </div>
            <span style="color:var(--text-muted);font-size:12px;">Call →</span>
          </a>
          <div class="contact-item" style="cursor:default" onclick="document.getElementById('guidelines-section').scrollIntoView({behavior:'smooth'})">
            <span class="contact-icon">🛡️</span>
            <div class="contact-info">
              <div class="contact-name">View Safety Guidelines</div>
              <div class="contact-num" style="font-size:13px;font-family:var(--font-body)">8 essential tips below</div>
            </div>
            <span style="color:var(--cyan);font-size:12px;cursor:pointer;">View →</span>
          </div>
        </div>
      </div>

    </div>
  `;

  return card;
}

/* ============================================================
   RAIN CANVAS ANIMATION
   ============================================================ */
(function initRain() {
  const canvas = document.getElementById("rainCanvas");
  const ctx    = canvas.getContext("2d");

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Rain drops
  const DROPS = 200;
  const drops = Array.from({ length: DROPS }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    len: Math.random() * 16 + 6,
    speed: Math.random() * 4 + 2,
    opacity: Math.random() * 0.4 + 0.05,
    angle: 0.15,  // slight slant
  }));

  function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drops.forEach(d => {
      ctx.save();
      ctx.globalAlpha = d.opacity;
      ctx.strokeStyle = "#4aa8ff";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x + d.len * Math.sin(d.angle), d.y + d.len * Math.cos(d.angle));
      ctx.stroke();
      ctx.restore();

      // Move drop
      d.y += d.speed;
      d.x += d.speed * Math.sin(d.angle);

      // Reset
      if (d.y > canvas.height) {
        d.y = -d.len;
        d.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(drawRain);
  }

  drawRain();
})();

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initQuickTags();
});