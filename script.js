function volume_sphere() {
    //Write your code herefunction volume_sphere() {
  const radiusInput = document.getElementById("radius").value;
  const radius = parseFloat(radiusInput);

  const volumeField = document.getElementById("volume");

  if (isNaN(radius) || radius < 0) {
    volumeField.value = "NaN";
    return false;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volumeField.value = volume.toFixed(4); // Round to 4 decimal places

  return false; // Prevent form from submitting
}

window.onload = function () {
  const form = document.getElementById("MyForm");
  form.onsubmit = volume_sphere;
};

	function volume_sphere() {
  const radiusInput = document.getElementById("radius").value;
  const radius = parseFloat(radiusInput);

  const volumeField = document.getElementById("volume");

  if (isNaN(radius) || radius < 0) {
    volumeField.value = "NaN";
    return false;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volumeField.value = volume.toFixed(4); // Round to 4 decimal places

  return false; // Prevent form from submitting
}

window.onload = function () {
  const form = document.getElementById("MyForm");
  form.onsubmit = volume_sphere;
};

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
