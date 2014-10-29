var container = document.getElementById('container'),
  renderer = new FSS.CanvasRenderer(),
  scene = new FSS.Scene(),
  light = new FSS.Light('#000000', '#46b9ab'),
  geometry = new FSS.Plane(container.offsetWidth, container.offsetHeight, 6, 4),
  material = new FSS.Material('#FFFFFF', '#FFFFFF'),
  mesh = new FSS.Mesh(geometry, material),
  now, start = Date.now();
  var x,y =0;





function initialise() {
  scene.add(mesh);
  scene.add(light);

  container.appendChild(renderer.element);

  window.addEventListener('resize', resize);
}

function resize() {
  var width = container.offsetWidth, // No need to query these twice, when in an onresize they can be expensive
    height = container.offsetHeight;

  renderer.setSize(width, height);

  scene.remove(mesh); // Remove the mesh and clear the canvas
  renderer.clear();

  geometry = new FSS.Plane(width, height, 10, 6); // Recreate the plane and then mesh
  mesh = new FSS.Mesh(geometry, material);

  scene.add(mesh); // Readd the mesh
}

function animate() {
  now = Date.now() - start;
  //light.setPosition(x,y,60);
  light.setPosition(300 * Math.sin(now * 0.001), 200 * Math.cos(now * 0.0005), 60);
  console.log(light.position);
  renderer.render(scene);
  requestAnimationFrame(animate);
}

initialise();
resize();
animate();