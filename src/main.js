import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./Index/Index-01.png",
  "./Index/Index-02.png",
  "./Index/Index-03.png",
  "./Index/Index-04.png",
];

const trees = [
  "./Intercharts/Interchart_1.png",
  "./Intercharts/Interchart_2.png",
  "./Intercharts/Interchart_3.png",
  "./Intercharts/Interchart_models.png",
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
      
      <div id="project-row">
      Project 2: Interoperability 
      <br>
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">

               <a href="./Intercharts/Interchart_1.png" target="_blank">
    <img src="./Intercharts/Interchart_1.png" alt="tree1" />
  </a>
  <a href="./Intercharts/Interchart_2.png" target="_blank">
    <img src="./Intercharts/Interchart_2.png" alt="tree2" />
  </a>
  <a href="./Intercharts/Interchart_3.png" target="_blank">
    <img src="./Intercharts/Interchart_3.png" alt="tree3" />
  </a>
  <a href="./Intercharts/Interchart_models.png" target="_blank">
    <img src="./Intercharts/Interchart_models.png" alt="tree4" />
  </a>
          </div>
          <h4 id="description">Through my exploration of 3D modeling and digital design tools, I have gained a deeper understanding of interoperability, particularly in how different software and file formats communicate with each other. The conversion charts highlight how various file formats (OBJ, FBX, STL, and PLY) interact when transitioning between Mesh, NURBS, and Sub-D modeling. These findings provide valuable insight into how geometry is processed, maintained, or altered across different workflows while offering guidance on which formats should be used for specific purposes. Interoperability is not just about transferring files, it also involves maintaining scalability, and editability across platforms, which is essential for interdisciplinary collaboration.

This study further emphasizes the fundamental differences between Mesh and NURBS modeling. Mesh-based models, particularly those converted into triangulated or quadrangulated forms, simplify complex geometries into more manageable face structures. This was especially evident in the pavilion and torus models, where rigid edges became more pronounced after conversion. In contrast, NURBS-based models prioritize smoothness and curvature, making them ideal for precise, fluid, and organic designs. However, when converted to Sub-D, NURBS objects often resulted in divided faces or disconnected geometry, as seen in the character model. Despite both having relatively smooth geometries and similar forms, the possible reason for this difference lies in the way each method defines smoothness.
<br><br>
- NURBS is mathematically defined and works by creating smooth curves and surfaces, ensuring a seamless, continuous surface that can be formalized.
<br>
- Sub-D, on the other hand, seems to divide the surface into faces, progressively subdividing them to achieve smoothness, but often at the cost of the precision seen in NURBS models.
<br><br>
This suggests that transitioning from NURBS to Mesh (especially when using Sub-D) requires careful consideration of how surfaces will be subdivided, as the conversion may introduce unwanted artifacts or disconnects. NURBS allows for the visualization of connective surfaces with a high degree of control, while Sub-D relies on a more organic, iterative approach to subdivision. Consequently, it’s important to plan for potential repair work or adjustments when converting between these modeling techniques to ensure that geometry retains its intended form and smoothness across different platforms. 
<br>
From a practical standpoint, these insights have direct applications in my future projects. In architectural visualization and design fabrication, where precise, smooth surfaces are often necessary, NURBS modeling will be valuable for creating accurate curved structures and understanding the fabrication of objects. Conversely, Mesh modeling will be more suitable for projects requiring optimization, such as game design or 3D printing, where simpler, more efficient geometries are preferred. Additionally, understanding how file conversions affect geometry will help streamline collaborative workflows, ensuring that models maintain their integrity across different software platforms.
</h4>
        </div>
      </div>
       <div id="project-row">
       :)
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
//createThreeScene("#model1", "/3DModels/project1/cube.");
createThreeScene("#model2", "/3DModels/project2/Duck.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
