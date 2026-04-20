<!-- ═══════════════════════════════════════════════
     CONTACT
═══════════════════════════════════════════════ -->
<section class="contact-section" id="contact" aria-labelledby="contact-heading">
  <div class="contact-inner">

    <!-- Left — Info -->
    <div class="contact-left">
      <div class="section-tag">Get In Touch</div>
      <h2 class="contact-title" id="contact-heading">
        <span class="ct-w">LET'S</span><br>
        <span class="ct-n">BUILD</span><br>
        <span class="ct-s">TOGETHER.</span>
      </h2>
      <p class="contact-desc">Ready to launch your casino? Book a demo and our team will walk you through the platform, answer your questions, and create a custom launch plan for your market.</p>

      <div class="contact-info-list">

        <div class="contact-info-item">
          <div class="contact-info-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.72 3.38 2 2 0 0 1 3.7 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
          <div>
            <div class="contact-info-label">Phone</div>
            <div class="contact-info-value">+30 210 000 0000</div>
          </div>
        </div>

        <div class="contact-info-item">
          <div class="contact-info-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
          <div>
            <div class="contact-info-label">Email</div>
            <div class="contact-info-value"><a href="mailto:hello@flexi.tech">hello@flexi.tech</a></div>
          </div>
        </div>

        <div class="contact-info-item">
          <div class="contact-info-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
          <div>
            <div class="contact-info-label">Greece Office</div>
            <div class="contact-info-value">Athens, Greece</div>
          </div>
        </div>

        <div class="contact-info-item">
          <div class="contact-info-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg></div>
          <div>
            <div class="contact-info-label">Cyprus Office</div>
            <div class="contact-info-value">Limassol, Cyprus</div>
          </div>
        </div>

        <div class="contact-info-item contact-telegram">
          <div class="contact-info-icon contact-info-icon--telegram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21.5 2.5L2.5 9.5l6.5 2.5 2.5 6.5 3-4.5 4.5 4 2.5-15.5z"/><path d="M9 12l3 3"/></svg>
          </div>
          <div>
            <div class="contact-info-label">Telegram</div>
            <div class="contact-info-value">
              <a href="https://t.me/flexiplatform" target="_blank" rel="noopener" class="contact-telegram-link">@flexiplatform</a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Right — Form -->
    <div class="contact-right">
      <div class="contact-form-wrap">
        <form class="contact-form" onsubmit="contactSubmit(event)" novalidate>

          <div class="contact-form-row">
            <div class="contact-field">
              <label class="contact-label" for="cf-name">Full Name</label>
              <input class="contact-input" type="text" id="cf-name" name="name" placeholder="John Smith" autocomplete="name" required>
            </div>
            <div class="contact-field">
              <label class="contact-label" for="cf-company">Company Name</label>
              <input class="contact-input" type="text" id="cf-company" name="company" placeholder="Acme Casino Ltd" autocomplete="organization">
            </div>
          </div>

          <div class="contact-form-row">
            <div class="contact-field">
              <label class="contact-label" for="cf-email">Email</label>
              <input class="contact-input" type="email" id="cf-email" name="email" placeholder="john@casino.com" autocomplete="email" required>
            </div>
            <div class="contact-field">
              <label class="contact-label" for="cf-phone">Phone</label>
              <input class="contact-input" type="tel" id="cf-phone" name="phone" placeholder="+1 234 567 8900" autocomplete="tel">
            </div>
          </div>

          <div class="contact-field">
            <label class="contact-label" for="cf-country">Country / Market</label>
            <div class="contact-select-wrap">
              <select class="contact-select" id="cf-country" name="country">
                <option value="" disabled selected>Select your market</option>
                <option>Malta (MGA)</option>
                <option>United Kingdom (UKGC)</option>
                <option>Curaçao</option>
                <option>Gibraltar</option>
                <option>Isle of Man</option>
                <option>Estonia</option>
                <option>Sweden</option>
                <option>Denmark</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div class="contact-field">
            <label class="contact-label" for="cf-message">Message</label>
            <textarea class="contact-textarea" id="cf-message" name="message" placeholder="Tell us about your project — target market, launch timeline, specific requirements..."></textarea>
          </div>

          <div class="contact-actions">
            <button type="submit" class="contact-submit">
              Book a Demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a href="https://t.me/flexiplatform" target="_blank" rel="noopener" class="contact-telegram-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21.5 2.5L2.5 9.5l6.5 2.5 2.5 6.5 3-4.5 4.5 4 2.5-15.5z"/><path d="M9 12l3 3"/></svg>
              Chat on Telegram
            </a>
          </div>

          <p class="contact-privacy">By submitting this form you agree to our Privacy Policy. We'll never share your data with third parties.</p>

        </form>
      </div>
    </div>

  </div>
</section>
