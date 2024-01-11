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

const d0 = document.getElementById("do");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");

const e0 = document.getElementById("e0");
const e1 = document.getElementById("e1");
const e2 = document.getElementById("e2");
const e3 = document.getElementById("e3");

const ct0 = document.getElementById("cto");
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

// Fetch JSON data from the text file
function updatePageContent(pageName) {
  console.log("Updating content for page:", pageName);
  fetch("t.txt")
    .then((response) => response.json())
    .then((jsonData) => {
      // Update content based on the current page
      updateContent(title, jsonData.title.title);

      updateLinkContent(nav0, jsonData.navbar.nav0);
      updateLinkContent(nav1, jsonData.navbar.nav1);
      updateLinkContent(nav2, jsonData.navbar.nav2);
      updateLinkContent(nav3, jsonData.navbar.nav3);

      updateContent(b0, jsonData.b.b0);
      updateContent(b1, jsonData.b.b1);
      updateContent(b2, jsonData.b.b2);
      updateContent(b3, jsonData.b.b3);

      updateContent(c0, jsonData.c.c0);
      updateContent(c1, jsonData.c.c1);
      updateContent(c2, jsonData.c.c2);
      updateContent(c3, jsonData.c.c3);

      updateContent(d0, jsonData.d.d0);
      updateContent(d1, jsonData.d.d1);
      updateContent(d2, jsonData.d.d2);
      updateContent(d3, jsonData.d.d3);

      updateContent(e0, jsonData.experience.e0);
      updateContent(e1, jsonData.experience.e1);
      updateContent(e2, jsonData.experience.e2);
      updateContent(e3, jsonData.experience.e3);

      updateContent(ct0, jsonData.category.ct0);
      updateContent(ct1, jsonData.category.ct1);
      updateContent(ct2, jsonData.category.ct2);
      updateContent(ct3, jsonData.category.ct3);
      updateContent(ct4, jsonData.category.ct4);
      updateContent(ct5, jsonData.category.ct5);
      updateContent(ct6, jsonData.category.ct6);
      
      updateContent(a0, jsonData.about.a0);
      updateContent(a1, jsonData.about.a1);
      updateContent(a2, jsonData.about.a2);
     
      updateContent(f0, jsonData.freelance.f0);
      updateContent(f1, jsonData.freelance.f1);
      updateContent(f2, jsonData.freelance.f2);
      updateContent(f3, jsonData.freelance.f3);
      updateContent(f4, jsonData.freelance.f4);
      updateContent(f5, jsonData.freelance.f5);
      updateContent(f6, jsonData.freelance.f6);
      updateContent(f7, jsonData.freelance.f7);
      updateContent(f8, jsonData.freelance.f8);

      updateContent(t0, jsonData.testimonial.t0);
      updateContent(t1, jsonData.testimonial.t1);
      updateContent(t2, jsonData.testimonial.t2);
      updateContent(t3, jsonData.testimonial.t3);
      updateContent(t4, jsonData.testimonial.t4);
      updateContent(t5, jsonData.testimonial.t5);
      updateContent(t6, jsonData.testimonial.t6);

      updateContent(i0, jsonData.info.i0);
      updateContent(i1, jsonData.info.i1);
      updateContent(i2, jsonData.info.i2);
      updateContent(i3, jsonData.info.i3);
      updateContent(i4, jsonData.info.i4);
      updateContent(i5, jsonData.info.i5);
      updateContent(i6, jsonData.info.i6);
      updateContent(i7, jsonData.info.i7);
      updateContent(i8, jsonData.info.i8);

      updateContent(p0, jsonData.footer.p0);
      updateContent(p1, jsonData.footer.p1);

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
