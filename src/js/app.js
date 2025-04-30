import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true,
        background: "...",
        avatarURL: "...",
        socialMediaPosition: "right",
        twitter: null,
        github: null,
        linkedin: null,
        instagram: null,
        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  // Mostrar o no la portada
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover === false) cover = "<div class='cover'></div>";

  // Validar links personalizados
  let twitterLink = variables.twitter
    ? `https://twitter.com/${variables.twitter}`
    : "#";
  let githubLink = variables.github
    ? `https://github.com/${variables.github}`
    : "#";
  let linkedinLink = variables.linkedin
    ? `https://linkedin.com/in/${variables.linkedin}`
    : "#";
  let instagramLink = variables.instagram
    ? `https://instagram.com/${variables.instagram}`
    : "#";

  // Construir el HTML final
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
        ${cover}
        <img src="${variables.avatarURL}" class="photo" />
        <h1>${variables.name || "Nombre"} ${variables.lastName ||
    "Apellido"}</h1>
        <h2>${variables.role || "Perfil profesional"}</h2>
        <h3>${variables.city || "Ciudad /"} ${variables.country || "País"}</h3>
        <ul class="${variables.socialMediaPosition || "position-right"}">
          <li><a href="${twitterLink}" target="_blank"><i class="fab fa-twitter"></i></a></li>
          <li><a href="${githubLink}" target="_blank"><i class="fab fa-github"></i></a></li>
          <li><a href="${linkedinLink}" target="_blank"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="${instagramLink}" target="_blank"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </div>`;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("data-variable");
      let values = {};
      values[attribute] =
        this.value === "" || this.value === "null"
          ? null
          : this.value === "true"
          ? true
          : this.value === "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
