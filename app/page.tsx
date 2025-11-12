"use client"



// pages/index.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setShowNav(window.scrollY > heroHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>SoME - Social Media & Web Services</title>
        <meta
          name="description"
          content="Modern social media management and website solutions for your business."
        />
      </Head>

      {/* HEADER / NAV */}
      <header className={`header ${showNav ? "visible" : ""}`}>
        <div className="logo">SoME</div>
        <nav className="nav">
          <Link href="#services">Services</Link>
          <Link href="#prices">Prices</Link>
          <Link href="#work">Work</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <button className="cta">Get Started</button>
      </header>

      {/* HERO / LANDING */}
      <section id="hero" className="hero">
        <div className="hero-text">
          <h1>Modern Social Media & Web Solutions</h1>
          <p>We help businesses grow online with stunning websites and social media management.</p>
          <button className="cta">Start Your Project</button>
        </div>
        <div className="hero-image">
          <Image src="/hero-image.png" alt="Social Media Growth" width={500} height={400} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Social Media Management</h3>
            <p>Grow your brand with curated content, scheduling, and engagement.</p>
          </div>
          <div className="card">
            <h3>Web Design & Development</h3>
            <p>Modern, responsive websites tailored to your brand.</p>
          </div>
          <div className="card">
            <h3>SEO & Analytics</h3>
            <p>Boost your visibility and track performance with data-driven insights.</p>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="prices">
        <h2>Pricing</h2>
        <div className="price-cards">
          <div className="card">
            <h3>Starter</h3>
            <p>$300 / month</p>
            <ul>
              <li>Social Media Management</li>
              <li>Basic Website</li>
            </ul>
            <button className="cta">Select</button>
          </div>
          <div className="card">
            <h3>Pro</h3>
            <p>$600 / month</p>
            <ul>
              <li>Advanced Social Media</li>
              <li>Custom Website</li>
              <li>SEO & Analytics</li>
            </ul>
            <button className="cta">Select</button>
          </div>
          <div className="card">
            <h3>Premium</h3>
            <p>$1000 / month</p>
            <ul>
              <li>Full Social Media Management</li>
              <li>Custom Web App</li>
              <li>Brand Strategy</li>
            </ul>
            <button className="cta">Select</button>
          </div>
        </div>
      </section>

      {/* WORK / PREVIOUS PROJECTS */}
      <section id="work" className="work">
        <h2>Previous Work</h2>
        <div className="work-gallery">
          <Image src="/work1.png" alt="Project 1" width={300} height={200} />
          <Image src="/work2.png" alt="Project 2" width={300} height={200} />
          <Image src="/work3.png" alt="Project 3" width={300} height={200} />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          <div className="card">
            <p>"SoME transformed our online presence. Highly recommended!"</p>
            <h4>- Alex P.</h4>
          </div>
          <div className="card">
            <p>"The website they built is stunning and our engagement skyrocketed."</p>
            <h4>- Maria S.</h4>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button className="cta" type="submit">Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; 2025 SoME. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
