# IV Drip 

Create a website for Woodline's IV Drip business

# Learning Outcomes

Here I will track what I learned each day I worked on the website and what I accomplished.

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
