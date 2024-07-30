# IV Drip 

Create a website for Woodline's IV Drip business

# Learning Outcomes

Here I will track what I learned each day I worked on the website and what I accomplished.

## July 30th, 2024

**Images/text/containers having animations**

1. Fading

`@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.about-us-container, .our-mission p, p, .hashtag, .hashtag-info, .nurse-image img {
    animation: fadeIn 1s ease-in-out;
}

`

2. Sliding in

`@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
.hero-content {
    animation: slideInLeft 1s ease-in-out;
}
`

3. Hover

`.hero-content img:hover, .our-founder .founder-image:hover, .hashtag-info img:hover {
    transform: scale(1.1);
}
`

4. Sequential Fade in

`@keyframes fadeInItem {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`

**Text Slowly Appearing**

1. Have CSS for hidden and visible text that defines the opacity and transformation

`/* Initial state: hidden and positioned for animation */
.hidden-text {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

/* Final state: fully visible and in place */
.visible-text {
    opacity: 1;
    transform: translateY(0);
}
`

2. Add scroll detection


## July 29th, 2024

**Text shadow**

`text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);`

**When adding routes, elements must be capitalized**

`<Route path= "/intro-offers" element={<IntroOffer />} />`

not 

` <Route path= "/intro-offers" element={<introOffer />} />`

## July 28th, 2024

**How to space things out in a container or push a button to the bottom**

1. Create a container to hold the elements and use `display: flex` and `flex-direction:column` to create a column
2. Then use `justify-content: space-between` to evenly space everything out

**How to center a section**

``   margin: 0 auto; /* Center the section */``

## July 21st, 2024

**How to embed a link in an image**

``   <div className="logo">
        <Link to="/services">
          <img src="../images/logo.png" alt="Company Logo" />
        </Link>
      </div>``

**Text overlay on image**

1. Place the text elements, buttons, and image all inside the same container
2. Use absolute positioning to place the text over the image

``<div className="homepage">
      <div className="waves">
        <h1>Thirsty?</h1>
        <div className="homepage-buttons">
          <Link to="/services">
            <button className="view-services">BOOK NOW</button>
          </Link>
        </div>
        <img src="/images/homepage/waves.png" alt="waves" />
      </div>
    </div>``

## July 7th, 2024

**How to redirect links to specific parts of page**

`const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);`

The useEffect will wait for changes in the location object and whenever a route is changed, it scrolls to the top

## July 2nd, 2024

** Spacing **

To space in between something use margins

**Add lines in CSS**

To add lines below or around some texts or a container, use a border

`.header {
  border-top: 1px solid #273B5A; /* Line above */
  border-bottom: 1px solid #273B5A; /* Line below */
}`


## June 25th, 2024

**Link button**

To link a button to a page,

`<Link to={servicePath} className="learn-more-button">Learn More</Link>`

## June 24th, 2024

**Letter Spacing**

In CSS, use letter spacing.

`letter-spacing: 1ch;`

**Underline**

For some reason, h2 will automatically underline text so I switched to h3.

**Production Build**

To deploy a project onto the internet, use Netify which allows continuous git updates.

## June 21st, 2024

**CSS**

Bold, italicize, change the color of text within jsx. In this case, I had to make the component an object to change the color but if it was just a string, I could just use <b> and <i>

 `<p>
                New to IV therapy? At Restart Drip, we will help you <span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'red' }}>RESTART</span> your life at 100%!
            </p>`

**Dropdown Menu**

To do a drop down menu, nest the elements in <ul> and <li> using <Link>

`<li>
                  <Link to="/about-us">About Us</Link>
                  <ul className="dropdown">
                    <li><Link to="/about-us/team">Our Team</Link></li>
                    <li><Link to="/about-us/mission">Our Mission</Link></li>
                  </ul>
                </li>
              </ul>`

**Review Carosal**

**Align Items**

The 'align-items' property specifies the default alignment for items inside a flexbox or grid container.

1. flexbox - items area aligned vertical 

`flex; and align-items: center; justify-content: center`

2. flex direction - items aligned horizontal 
3. grid container - items are aligned in block direction (downward and left to right)



## June 14th, 2024

**Navigation**
Import Router, Routes, Link, and Route.

Internal Navigation

1. Use <li> elements with the Link component
2. Use Routes to redirect to another page.
        - Create a new js page that the link will be directed to
        - Place <Routes> inside your app.js main return component 
        - Make sure the paths used in Link components match the paths defined in Route components

External Navigation

1. Use <a> to link to an external.

`<a href="https://www.instagram.com/restartdrip/" className="social-icon">IN</a>`

**Button**

To have a button be clicked and then redirect to another page internally, we can use 'onClick'

`<button className="view-services" onClick={() => window.location.href='/services'}>View all Services</button>`

**Hover**

To add a hover to an element, you add a transition to a property by using 'transform'.

`.join-now:hover {
  background-color: #0e3e66;
  transform: scale(1.05);
}`

**Import New Fonts**

To import a new font, you have to first download the zip file and activate on mac's font family application. Then, create a font folder to store your fonts in src folder and in your css file create a name for it.

`@font-face {
  font-family: 'Barlow';
  src: url('./fonts/Barlow-sans-master/BarlowSans-Black.otf') format('truetype');
  font-weight: normal;
  font-style: normal;
}`
