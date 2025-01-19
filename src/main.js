import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./Index/Index -01.png",
  "./Index/Index-02.png",
  "./Index/Index-03.png",
  "./Index/Index-04.png",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Project 1: Cadavre Exquis
       <br>

        <div class="three-model">
        <a href="./Cadaver/Cadaver E.png" target="_blank">
        <img src="./Cadaver/Cadaver E.png" id="model1" alt="Model 1 Image" />
        </a>

        </div>
        <div id="images-description">
          <div id="images">
  <a href="./Index/Index -01.png" target="_blank">
    <img src="./Index/Index -01.png" alt="cube1" />
  </a>
  <a href="./Index/Index-02.png" target="_blank">
    <img src="./Index/Index-02.png" alt="cube2" />
  </a>
  <a href="./Index/Index-03.png" target="_blank">
    <img src="./Index/Index-03.png" alt="cube3" />
  </a>
  <a href="./Index/Index-04.png" target="_blank">
    <img src="./Index/Index-04.png" alt="cube4" />
  </a>
</div>
          <h4 id="description">	“Oppressive Curiosity” reflects the struggle of individuals navigating oppressive systems while striving  for growth and knowledge. The imagery highlights the tension between societal constraints, such as surveillance and conformity, and the drive to break free, innovate, and explore the unknown.
          <br><br>
         Manifesto - I believe that to achieve new heights, individuals must remain curious and question everything. However, this curiosity is often stifled by those in power who impose limitations on exploration and innovation. This theme inspired my cadavre exquis collage, which explores the tension between curiosity and oppression. The fragmented elements represent the human drive to resist, even under restrictive systems. As I layered the images, I noticed how seemingly unrelated pieces began to fit together, forming a narrative of resilience and collective action. In design, curiosity drives progress and innovation, and by embracing it with purpose, we can push beyond limitations.</h4>
        </div>
      </div>
      ${/* Model 2 commented out
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
       <div id="project-row">
       */""}
      ${/* Model 3 commented out
       Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
