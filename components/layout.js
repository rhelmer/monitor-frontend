import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

import { useEffect, useState } from 'react'

export const siteTitle = "Firefox Monitor";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
      <a href='/'>
        <img class='monitor-logo' srcset='/images/monitor-logo-transparent.webp 213w, /images/monitor-logo-transparent@2x.webp 425w' width='213' height='33' alt='Firefox Monitor' />
      </a>
      <menu>
        <li><a href='/user/breaches' data-cta-id='sign-in-1' class='button secondary'>Sign In</a></li>
      </menu>
    </header>
    <main data-partial='landing'>
      
<section class='hero'>
  <div>
    <h1>Find out if your personal information has been compromised</h1>
    <p>Stay safe with privacy tools from the makers of Firefox that protect you from hackers and companies that publish and sell your personal information. We’ll alert you of any known data breaches, find and remove your exposed info and continually watch for new exposures.</p>
  </div>
  <figure>
    <img srcset='images/landing-hero.webp 530w, images/landing-hero@2x.webp 1059w' width='530' height='406' alt='' />
  </figure>
</section>
<section class='why-use-monitor' data-enter-transition>
  <h2>Why use Firefox Monitor?</h2>
  <p>Identifying and resolving data breaches is an important step in ensuring your online privacy.</p>
  <ul>
    <li>
      <h3>Protect your accounts</h3>
      <p>Prevent hackers from getting into your accounts with breached passwords.</p>
    </li>
    <li>
      <h3>Prevent fraud and cybercrimes</h3>
      <p>Keep your info away from hackers who want to impersonate you and commit crimes.</p>
    </li>
    <li>
      <h3>Get alerts for new breaches</h3>
      <p>Find out whenever your personal information is compromised in a new known breach.</p>
    </li>
  </ul>
</section>
<section class='how-it-works' data-enter-transition>
  <h2>Here’s how it works</h2>
  <ol>
    <li>
      <img srcset='images/landing-laptop.webp 250w, images/landing-laptop@2x.webp 500w' width='250' height='139' loading='lazy' alt='' />
      <h3>Check for breaches</h3>
      <p>We’ll search all known data breaches since 2007 to see if your info was compromised.</p>
    </li>
    <li>
      <img srcset='images/landing-lock.webp 204w, images/landing-lock@2x.webp 408w' width='204' height='148' loading='lazy' alt='' />
      <h3>Protect your accounts</h3>
      <p>We’ll give you clear steps on what to do next for any data breach you’ve been involved in.</p>
    </li>
    <li>
      <img srcset='images/landing-mail.webp 170w, images/landing-mail@2x.webp 340w' width='170' height='148' loading='lazy' alt='' />
      <h3>Get alerts for new breaches</h3>
      <p>We’ll continually monitor for new data breaches and let you know if you’ve been affected.</p>
    </li>
  </ol>
</section>
<section class='safe-with-us' data-enter-transition>
  <div>
    <h2>Your privacy is safe with us</h2>
    <p>At Mozilla, the parent company of Firefox and Firefox Monitor, we believe individuals’ security and privacy on the internet is fundamental and must not be treated as optional.</p>
    <p>Our mission is to build a better internet — one where people can shape their own experiences, feel empowered and stay safe. We’re wholly owned by the Mozilla Foundation, a non-profit, which enables us to put individual and public benefit over profit.</p>
    <p><a href='https://www.mozilla.org/mission/' target='_blank'>Learn more about our mission</a></p>
  </div>
  <figure>
    <img srcset='images/landing-nature-phone.webp 539w, images/landing-nature-phone@2x.webp 1078w' width='539' height='503' loading='lazy' alt='' />
  </figure>
</section>
<section class='top-questions-about-monitor' data-enter-transition>
  <div>
    <h2>Top questions about Firefox Monitor</h2>
    <a href='https://support.mozilla.org/kb/firefox-monitor-faq' target='_blank'>See all FAQs</a>
  </div>
  <div>
    <details>
      <summary>What exactly is a data breach?</summary>
      <p>A data breach happens when personal or private information gets exposed, stolen or copied without permission. These security incidents can be a result of cyber attacks to websites, apps or any database where people’s personal information resides. A data breach can also happen by accident like if someone’s login credentials accidentally get posted publicly.</p>
    </details>
    <details>
      <summary>I just found out I’m in a data breach. What do I do?</summary>
      <p>Visit Firefox Monitor to learn what to do after a data breach. Hackers rely on people reusing passwords, so it’s important to create strong, unique passwords for all your accounts. Keep your passwords in a safe place that only you have access to; this could be the same place where you store important documents or a password manager.</p>
    </details>
    <details>
      <summary>What information gets exposed in data breaches?</summary>
      <p>Not all breaches expose all the same info. It just depends on what hackers can access. Many data breaches expose email addresses and passwords. Others expose more sensitive information such as credit card numbers, passport numbers and social security numbers.</p>
    </details>
  </div>
</section>
<section class='see-if-data-breach' data-enter-transition>
  <h2>See if you’ve been in a data breach</h2>
  <a class='button primary' data-cta-id='landing-2' href='/user/breaches'>Get started</a>
</section>

    </main>
    <footer class='site-footer'>
      <a href='https://www.mozilla.org' target='_blank'>
        <img src='/images/moz-logo-1color-white-rgb-01.svg' width='100' height='29' loading='lazy' alt='Mozilla' />
      </a>
      <menu>
        <li><a href='/breaches'>All Breaches</a></li>
        <li><a href='https://support.mozilla.org/kb/firefox-monitor-faq' target='_blank'>FAQ</a></li>
        <li><a href='https://www.mozilla.org/privacy/firefox-monitor' target='_blank'>Terms & Privacy</a></li>
        <li><a href='https://github.com/mozilla/blurts-server' target='_blank'>GitHub</a></li>
      </menu>
    </footer>
    </div>
  );
}
