function buildClassificationGrid(data) {
  let grid = '<ul id="inv-display">';
  data.forEach(vehicle => {
    grid += `<li>
      <a href="/inv/detail/${vehicle.inv_id}" 
         title="View ${vehicle.make} ${vehicle.model}">
        <img src="${vehicle.thumbnail}" 
             alt="Image of ${vehicle.make} ${vehicle.model}">
      </a>
      <div class="namePrice">
        <h2><a href="/inv/detail/${vehicle.inv_id}">
          ${vehicle.make} ${vehicle.model}</a></h2>
        <span>$${vehicle.price.toLocaleString()}</span>
      </div>
    </li>`;
  });
  grid += "</ul>";
  return grid;
}

module.exports = { buildNav, buildClassificationGrid };