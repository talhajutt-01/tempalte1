const nav0 = document.getElementById("nav0");
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");

const title = document.getElementById("title");

const b0 = document.getElementById("b0");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");

const c0 = document.getElementById("c0");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");

const d0 = document.getElementById("d0");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");

const e0 = document.getElementById("e0");
const e1 = document.getElementById("e1");
const e2 = document.getElementById("e2");
const e3 = document.getElementById("e3");

const ct0 = document.getElementById("ct0");
const ct1 = document.getElementById("ct1");
const ct2 = document.getElementById("ct2");
const ct3 = document.getElementById("ct3");
const ct4 = document.getElementById("ct4");
const ct5 = document.getElementById("ct5");
const ct6 = document.getElementById("ct6");

const a0 = document.getElementById("a0");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");

const f0 = document.getElementById("f0");
const f1 = document.getElementById("f1");
const f2 = document.getElementById("f2");
const f3 = document.getElementById("f3");
const f4 = document.getElementById("f4");
const f5 = document.getElementById("f5");
const f6 = document.getElementById("f6");
const f7 = document.getElementById("f7");
const f8 = document.getElementById("f8");

const t0 = document.getElementById("t0");
const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const t3 = document.getElementById("t3");
const t4 = document.getElementById("t4");
const t5 = document.getElementById("t5");
const t6 = document.getElementById("t6");

const i0 = document.getElementById("i0");
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const i3 = document.getElementById("i3");
const i4 = document.getElementById("i4");
const i5 = document.getElementById("i5");
const i6 = document.getElementById("i6");
const i7 = document.getElementById("i7");
const i8 = document.getElementById("i8");

const p0 = document.getElementById("p0");
const p1 = document.getElementById("p1");

const g0 = document.getElementById('header');
const g1 = document.getElementById('experience');
const g2 = document.getElementById('category');
const g3 = document.getElementById('about');
const g4 = document.getElementById('freelance');
const g5 = document.getElementById('client');
const g6 = document.getElementById('info');
const g7 = document.getElementById('footer');



const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');
const img11 = document.getElementById('img11');
const img12 = document.getElementById('img12');
const img13 = document.getElementById('img13');
const img14 = document.getElementById('img14');
const img15 = document.getElementById('img15');
const img16 = document.getElementById('img16');
const img17 = document.getElementById('img17');
const img18 = document.getElementById('img18');
const img19 = document.getElementById('img19');
const img20 = document.getElementById('img20');



const paragraph1 = document.getElementById("paragraph1");

// Function to update content for a specific element
function updateContent(element, newValue) {
  // Update content for the element
  element.textContent = newValue;
}

// Function to update content for an <a> tag
function updateLinkContent(linkElement, newValue) {
  // Update content for the <a> tag
  linkElement.innerText = newValue;
}

function updateImageSrc(imageElement, newSrc) {
  // Update the src attribute of the image element
  imageElement.src = newSrc;
}
function updateBackgroundColor(element, newColor) {
// Update the background color for the element
element.style.backgroundColor = newColor;
}

// Fetch JSON data from the text file
function updatePageContent(pageName) {
  console.log("Updating content for page:", pageName);
  const fetchJson1 = fetch('t.txt')
  .then(response => response.json());

// Fetch the second JSON file
const fetchJson2 = fetch('image.txt')
  .then(response => response.json());

// Wait for both fetch operations to complete
Promise.all([fetchJson1, fetchJson2])
  .then(jsonDataArray => {
      // Merge the data from both JSON files
      const mergedData = Object.assign({}, ...jsonDataArray);

      // Update content based on the current page
      updateContent(title, mergedData.title.title);

      updateLinkContent(nav0, mergedData.navbar.nav0);
      updateLinkContent(nav1, mergedData.navbar.nav1);
      updateLinkContent(nav2, mergedData.navbar.nav2);
      updateLinkContent(nav3, mergedData.navbar.nav3);

      updateContent(b0, mergedData.b.b0);
      updateContent(b1, mergedData.b.b1);
      updateContent(b2, mergedData.b.b2);
      updateContent(b3, mergedData.b.b3);

      updateContent(c0, mergedData.c.c0);
      updateContent(c1, mergedData.c.c1);
      updateContent(c2, mergedData.c.c2);
      updateContent(c3, mergedData.c.c3);

      updateContent(d0, mergedData.d.d0);
      updateContent(d1, mergedData.d.d1);
      updateContent(d2, mergedData.d.d2);
      updateContent(d3, mergedData.d.d3);

      updateContent(e0, mergedData.experience.e0);
      updateContent(e1, mergedData.experience.e1);
      updateContent(e2, mergedData.experience.e2);
      updateContent(e3, mergedData.experience.e3);

      updateContent(ct0, mergedData.category.ct0);
      updateContent(ct1, mergedData.category.ct1);
      updateContent(ct2, mergedData.category.ct2);
      updateContent(ct3, mergedData.category.ct3);
      updateContent(ct4, mergedData.category.ct4);
      updateContent(ct5, mergedData.category.ct5);
      updateContent(ct6, mergedData.category.ct6);
      
      updateContent(a0, mergedData.about.a0);
      updateContent(a1, mergedData.about.a1);
      updateContent(a2, mergedData.about.a2);
     
      updateContent(f0, mergedData.freelance.f0);
      updateContent(f1, mergedData.freelance.f1);
      updateContent(f2, mergedData.freelance.f2);
      updateContent(f3, mergedData.freelance.f3);
      updateContent(f4, mergedData.freelance.f4);
      updateContent(f5, mergedData.freelance.f5);
      updateContent(f6, mergedData.freelance.f6);
      updateContent(f7, mergedData.freelance.f7);
      updateContent(f8, mergedData.freelance.f8);

      updateContent(t0, mergedData.testimonial.t0);
      updateContent(t1, mergedData.testimonial.t1);
      updateContent(t2, mergedData.testimonial.t2);
      updateContent(t3, mergedData.testimonial.t3);
      updateContent(t4, mergedData.testimonial.t4);
      updateContent(t5, mergedData.testimonial.t5);
      updateContent(t6, mergedData.testimonial.t6);

      updateContent(i0, mergedData.info.i0);
      updateContent(i1, mergedData.info.i1);
      updateContent(i2, mergedData.info.i2);
      updateContent(i3, mergedData.info.i3);
      updateContent(i4, mergedData.info.i4);
      updateContent(i5, mergedData.info.i5);
      updateContent(i6, mergedData.info.i6);
      updateContent(i7, mergedData.info.i7);
      updateContent(i8, mergedData.info.i8);

      updateContent(p0, mergedData.footer.p0);
      updateContent(p1, mergedData.footer.p1);

      updateBackgroundColor(g0, mergedData.color.header);
      updateBackgroundColor(g1, mergedData.color.experience);
      updateBackgroundColor(g2, mergedData.color.category);
      updateBackgroundColor(g3, mergedData.color.about);
      updateBackgroundColor(g4, mergedData.color.freelance);
      updateBackgroundColor(g5, mergedData.color.client);
      updateBackgroundColor(g6, mergedData.color.info);
      updateBackgroundColor(g6, mergedData.color.footer);


      updateImageSrc(img1, mergedData.images.img1);
      updateImageSrc(img2, mergedData.images.img2);
      updateImageSrc(img3, mergedData.images.img3);
      updateImageSrc(img4, mergedData.images.img4);
      updateImageSrc(img5, mergedData.images.img5);
      updateImageSrc(img6, mergedData.images.img6);
      updateImageSrc(img7, mergedData.images.img7);
      updateImageSrc(img8, mergedData.images.img8);
      updateImageSrc(img9, mergedData.images.img9);
      updateImageSrc(img10, mergedData.images.img10);
      updateImageSrc(img11, mergedData.images.img11);
      updateImageSrc(img12, mergedData.images.img12);
      updateImageSrc(img13, mergedData.images.img13);
      updateImageSrc(img14, mergedData.images.img14);
      updateImageSrc(img15, mergedData.images.img15);
      updateImageSrc(img16, mergedData.images.img16);
      updateImageSrc(img17, mergedData.images.img17);
      updateImageSrc(img18, mergedData.images.img18);
      updateImageSrc(img19, mergedData.images.img19);
      updateImageSrc(img20, mergedData.images.img20);

      // Extract the filename from the path
      const fileName = pageName.split("/").pop();

      if (fileName === "index.html") {
        
      }else if (fileName === "categroy.html") {

      }else if (fileName === "about.html") {
        
      }else if (fileName === "work.html") {
     
      }
    })
    .catch((error) => console.error("Error fetching or parsing JSON:", error));
}

// Call the function to update content when the page loads
window.addEventListener("load", function () {
  console.log("page loaded");
  // Get the current page URL
  const currentPage = window.location.pathname;

  // Update content based on the current page
  updatePageContent(currentPage);
});
