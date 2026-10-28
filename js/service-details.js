

document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("#np-service-select");
  const menu = document.querySelector("#np-pricing-menu");

  if (!select || !menu) return;

  const services = {
    manicures: {
      title: "Manicures",
      items: [
        ["Classic Gloss", "₹500"],
        ["Classic Refresh Mani", "₹600"],
        ["Soft Nude Finish", "₹650"],
        ["Basic Manicure", "₹500"],
        ["Gel Manicure", "₹900"],
        ["Spa Manicure", "₹1,000"],
        ["Paraffin Manicure", "₹1,100"],
        ["French Manicure", "₹800"],
        ["Russian-Style Manicure", "₹1,200"]
      ]
    },

    extensions: {
      title: "Nail Extensions",
      items: [
        ["Soft Gel Full Set / Gel-X", "₹1,800"],
        ["Builder Gel / BIAB", "₹1,500"],
        ["Hard Gel Extensions", "₹2,000"],
        ["Polygel Extensions", "₹1,800"],
        ["Acrylic Extensions", "₹1,700"],
        ["Almond Extension Set", "₹1,800"],
        ["Coffin Extension Set", "₹1,900"],
        ["Nail Refills and Maintenance", "₹900"],
        ["Safe Removal Service", "₹400"]
      ]
    },

    nailart: {
      title: "Nail Art",
      items: [
        ["Creative Colour Story", "₹500"],
        ["Minimal Lines", "₹300"],
        ["Chrome & Glazed", "₹500"],
        ["French Tips", "₹350"],
        ["Cat-Eye and Magnetic Effects", "₹600"],
        ["Ombre and Aura Nails", "₹700"],
        ["Marble and Abstract Art", "₹600"],
        ["Seasonal and Occasion Nail Art", "₹900"]
      ]
    },

    tiers: {
      title: "Nail Art Tiers",
      items: [
        ["Tier 1 – Minimalist Chic", "₹300"],
        ["Tier 2 – Trendy & Bold", "₹600"],
        ["Tier 3 – Intricate & Statement", "₹900"]
      ]
    },

    care: {
      title: "Nail Care & Finishing",
      items: [
        ["Nail Shaping and Filing", "₹200"],
        ["Cuticle Care", "₹250"],
        ["Nail Repair", "₹150"],
        ["Polish Removal", "₹200"]
      ]
    }
  };

  function renderPricing(key) {
    const category = services[key];
    if (!category) return;

    const heading = document.createElement("div");
    heading.className = "np-pricing-group-heading";

    const title = document.createElement("h3");
    title.textContent = category.title;
    heading.appendChild(title);

    const group = document.createElement("div");
    group.className = "np-pricing-group";
    group.appendChild(heading);

    category.items.forEach(([name, price]) => {
      const item = document.createElement("div");
      item.className = "np-pricing-item";

      const info = document.createElement("div");
      info.className = "np-pricing-item-info";

      const serviceName = document.createElement("h4");
      serviceName.textContent = name;

      const servicePrice = document.createElement("span");
      servicePrice.className = "np-pricing-price";
      servicePrice.textContent = price;

      info.appendChild(serviceName);
      item.append(info, servicePrice);
      group.appendChild(item);
    });

    menu.replaceChildren(group);
  }

  select.addEventListener("change", () => {
    renderPricing(select.value);
  });

  renderPricing(select.value);
});
