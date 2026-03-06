// ================================================================
//  ABCD Learning Hub — Clerk Auth  (auth.js)
//  ✅ Real Clerk key — Google + Email sign-in enabled
//  ✅ Collects full user data after sign-in
//  ✅ Drop <script src="auth.js"></script> on ANY page
// ================================================================

const CLERK_CONFIG = {
  publishableKey: "pk_test_ZGl2ZXJzZS1icmVhbS05OS5jbGVyay5hY2NvdW50cy5kZXYk",

  // Paths (adjust if auth.js is in a subfolder)
  loginPagePath:    "/login.html",
  afterSignInPath:  "/index.html",
  afterSignOutPath: "/index.html",

  // localStorage key where we cache user data
  userCacheKey: "abcd_clerk_user",
};

// ================================================================
//  Inject nav + dropdown styles once (self-contained)
// ================================================================
(function injectStyles() {
  if (document.getElementById('clerk-auth-css')) return;
  const s = document.createElement('style');
  s.id = 'clerk-auth-css';
  s.textContent = `
    /* ── Auth loading skeleton ───────────────── */
    #nav-auth { display:flex; align-items:center; min-width:38px; min-height:38px; }
    .auth-skeleton {
      width:38px; height:38px; border-radius:50%;
      background:linear-gradient(90deg,var(--border,#dce3f7) 25%,var(--surface2,#f5f7ff) 50%,var(--border,#dce3f7) 75%);
      background-size:200% 100%;
      animation: shimmer 1.3s infinite;
    }
    @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

    /* ── Sign-in button (guest) ──────────────── */
    .clerk-signin-btn {
      display:inline-flex; align-items:center; gap:7px;
      padding:9px 20px; border-radius:100px;
      font-size:.84rem; font-weight:700; font-family:inherit;
      background:linear-gradient(90deg,#3b67f7,#7c5ef7);
      color:#fff; border:none; cursor:pointer;
      box-shadow:0 3px 16px rgba(59,103,247,.38);
      transition:opacity .18s, transform .15s;
      text-decoration:none; white-space:nowrap;
    }
    .clerk-signin-btn:hover { opacity:.88; transform:translateY(-2px); }
    .clerk-signin-btn svg { flex-shrink:0; }

    /* ── Clerk UserButton size fix ───────────── */
    #nav-auth .cl-userButtonBox { gap:8px; }
    #nav-auth .cl-avatarBox {
      width:36px !important; height:36px !important;
      border-radius:50% !important;
      border:2px solid rgba(59,103,247,.45) !important;
      box-shadow:0 2px 10px rgba(59,103,247,.22) !important;
    }
    #nav-auth .cl-userButtonOuterIdentifier {
      font-family:inherit !important; font-weight:700 !important;
      font-size:.84rem !important; color:var(--ink,#181b2e) !important;
    }

    /* ── Page gate overlay ───────────────────── */
    .page-gate {
      position:fixed; inset:0; z-index:9999;
      display:flex; flex-direction:column;
      align-items:center; justify-content:center;
      gap:20px; padding:24px;
      background:var(--bg,#eef2ff);
      background-image:radial-gradient(rgba(91,132,255,.1) 1px,transparent 1px);
      background-size:26px 26px;
      animation:gateIn .35s ease;
    }
    @keyframes gateIn { from{opacity:0} to{opacity:1} }

    .gate-card {
      background:var(--surface,#fff);
      border:1.5px solid var(--border,#dce3f7);
      border-radius:22px;
      box-shadow:0 12px 50px rgba(30,50,160,.15);
      padding:40px 36px 32px;
      max-width:400px; width:100%;
      text-align:center;
      animation:gateCardIn .4s .05s ease both;
    }
    @keyframes gateCardIn { from{opacity:0;transform:translateY(20px) scale(.97)} to{opacity:1;transform:none} }

    .gate-stripe {
      height:5px; margin:-40px -36px 28px;
      border-radius:20px 20px 0 0;
      background:linear-gradient(90deg,#3b67f7,#7c5ef7,#f97316);
    }
    .gate-icon {
      width:64px; height:64px; margin:0 auto 16px;
      border-radius:18px; font-size:2rem;
      display:flex; align-items:center; justify-content:center;
      background:linear-gradient(135deg,#3b67f7,#7c5ef7);
      box-shadow:0 6px 24px rgba(59,103,247,.32);
    }
    .gate-title {
      font-family:'Outfit','Nunito',sans-serif;
      font-size:1.35rem; font-weight:900;
      color:var(--ink,#181b2e); margin-bottom:8px;
    }
    .gate-sub { font-size:.88rem; color:var(--muted,#7078a0); line-height:1.6; margin-bottom:24px; }

    .gate-perks {
      display:flex; flex-direction:column; gap:8px; margin-bottom:24px; text-align:left;
    }
    .gate-perk {
      display:flex; align-items:center; gap:10px;
      font-size:.83rem; font-weight:600; color:var(--ink2,#383d5e);
      padding:9px 12px; border-radius:10px;
      background:var(--surface2,#f5f7ff);
      border:1.5px solid var(--border,#dce3f7);
    }

    .gate-btn {
      width:100%; padding:13px; border-radius:12px; border:none; cursor:pointer;
      font-family:inherit; font-size:.95rem; font-weight:800; color:#fff;
      background:linear-gradient(90deg,#3b67f7,#7c5ef7);
      box-shadow:0 4px 18px rgba(59,103,247,.38);
      transition:opacity .18s, transform .15s, box-shadow .18s;
      display:flex; align-items:center; justify-content:center; gap:8px;
    }
    .gate-btn:hover { opacity:.9; transform:translateY(-2px); box-shadow:0 7px 26px rgba(59,103,247,.42); }

    .gate-note { font-size:.74rem; color:var(--muted,#7078a0); margin-top:14px; }
    .gate-note a { color:#3b67f7; font-weight:700; text-decoration:none; }
    .gate-note a:hover { text-decoration:underline; }

    /* ── User data card (for pages that show user info) ── */
    .clerk-user-card {
      display:inline-flex; align-items:center; gap:14px;
      padding:14px 18px; border-radius:14px;
      background:var(--surface,#fff);
      border:1.5px solid var(--border,#dce3f7);
      box-shadow:0 3px 16px rgba(30,50,160,.09);
    }
    .clerk-user-card img {
      width:46px; height:46px; border-radius:50%;
      border:2px solid rgba(59,103,247,.35);
      object-fit:cover;
    }
    .clerk-user-card .cuc-avatar {
      width:46px; height:46px; border-radius:50%; flex-shrink:0;
      background:linear-gradient(135deg,#3b67f7,#7c5ef7);
      color:#fff; font-weight:800; font-size:1.1rem;
      display:flex; align-items:center; justify-content:center;
    }
    .cuc-name { font-weight:800; font-size:.95rem; color:var(--ink,#181b2e); }
    .cuc-email { font-size:.78rem; color:var(--muted,#7078a0); }
    .cuc-since { font-size:.72rem; color:var(--muted2,#b0b6d0); margin-top:2px; }
  `;
  document.head.appendChild(s);
})();

// ================================================================
//  Load Clerk SDK
// ================================================================
async function startClerk() {
  // Show skeleton while Clerk loads
  const navAuth = document.getElementById('nav-auth');
  if (navAuth) navAuth.innerHTML = '<div class="auth-skeleton"></div>';

  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.setAttribute('data-clerk-publishable-key', CLERK_CONFIG.publishableKey);
    script.async = true;
    script.src = 'https://cdn.jsdelivr.net/npm/@clerk/clerk-js@4/dist/clerk.browser.js';

    script.addEventListener('load', async () => {
      await window.Clerk.load();
      const user = window.Clerk.user;

      // ── Cache user data in localStorage ────────────────
      if (user) {
        const userData = collectUserData(user);
        localStorage.setItem(CLERK_CONFIG.userCacheKey, JSON.stringify(userData));
      } else {
        localStorage.removeItem(CLERK_CONFIG.userCacheKey);
      }

      // ── Listen for auth state changes ───────────────────
      window.Clerk.addListener(({ user: u }) => {
        if (u) {
          localStorage.setItem(CLERK_CONFIG.userCacheKey, JSON.stringify(collectUserData(u)));
        } else {
          localStorage.removeItem(CLERK_CONFIG.userCacheKey);
        }
      });

      // ── Wire the page ───────────────────────────────────
      wireNavAuth(user);
      wireShowHide(user);
      wireUserCards(user);
      wireSignOutBtns();
      handlePageProtection(user);
      handleUserGreeting(user);

      // Dispatch so other scripts can react
      document.dispatchEvent(new CustomEvent('clerk:ready', { detail: { user, userData: user ? collectUserData(user) : null } }));
      resolve({ user });
    });

    script.addEventListener('error', () => {
      console.error('[ABCD Auth] Clerk failed to load. Check key + internet.');
      if (navAuth) navAuth.innerHTML = '';
      resolve({ user: null });
    });

    document.body.appendChild(script);
  });
}

// ================================================================
//  Collect all available user data from Clerk
// ================================================================
function collectUserData(clerkUser) {
  if (!clerkUser) return null;
  const primary = clerkUser.primaryEmailAddress;
  const phone   = clerkUser.primaryPhoneNumber;

  return {
    id:           clerkUser.id,
    firstName:    clerkUser.firstName || '',
    lastName:     clerkUser.lastName  || '',
    fullName:     clerkUser.fullName  || `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim(),
    username:     clerkUser.username  || '',
    email:        primary ? primary.emailAddress : '',
    emailVerified:primary ? primary.verification?.status === 'verified' : false,
    phone:        phone   ? phone.phoneNumber : '',
    avatar:       clerkUser.imageUrl || clerkUser.profileImageUrl || '',
    initials:     getInitials(clerkUser),
    createdAt:    clerkUser.createdAt ? new Date(clerkUser.createdAt).toLocaleDateString('en-IN') : '',
    lastSignIn:   clerkUser.lastSignInAt ? new Date(clerkUser.lastSignInAt).toLocaleDateString('en-IN') : '',
    provider:     getProvider(clerkUser),
    // raw Clerk object reference (don't store, use live)
  };
}

function getInitials(u) {
  if (u.firstName && u.lastName) return (u.firstName[0] + u.lastName[0]).toUpperCase();
  if (u.firstName) return u.firstName[0].toUpperCase();
  if (u.username)  return u.username[0].toUpperCase();
  const email = u.primaryEmailAddress?.emailAddress || '';
  return email ? email[0].toUpperCase() : '?';
}

function getProvider(u) {
  const ext = u.externalAccounts || [];
  if (ext.length > 0) return ext[0].provider; // 'google', 'github', etc.
  return 'email';
}

// ================================================================
//  Wire nav #nav-auth
// ================================================================
function wireNavAuth(user) {
  const navAuth = document.getElementById('nav-auth');
  if (!navAuth) return;

  if (user) {
    // Mount Clerk's UserButton (shows avatar, profile, sign out)
    navAuth.innerHTML = '';
    window.Clerk.mountUserButton(navAuth, {
      afterSignOutUrl: CLERK_CONFIG.afterSignOutPath,
      userProfileUrl:  '#',
      appearance: {
        elements: {
          userButtonPopoverCard: 'clerk-popup-card',
        }
      }
    });
  } else {
    navAuth.innerHTML = '';
    const btn = document.createElement('button');
    btn.className = 'clerk-signin-btn';
    btn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>
      </svg>
      Sign In`;
    btn.onclick = () => window.Clerk.openSignIn({
      afterSignInUrl: window.location.href, // return to same page after sign in
      afterSignUpUrl: window.location.href,
    });
    navAuth.appendChild(btn);
  }
}

// ================================================================
//  Show/hide elements by auth state
// ================================================================
function wireShowHide(user) {
  document.querySelectorAll('.show-if-auth').forEach(el  => el.style.display = user ? '' : 'none');
  document.querySelectorAll('.show-if-guest').forEach(el => el.style.display = user ? 'none' : '');
}

// ================================================================
//  Render any .clerk-user-card elements with live user data
// ================================================================
function wireUserCards(user) {
  if (!user) return;
  const ud = collectUserData(user);

  document.querySelectorAll('.clerk-user-card').forEach(card => {
    const avatarHtml = ud.avatar
      ? `<img src="${ud.avatar}" alt="${ud.fullName}" />`
      : `<div class="cuc-avatar">${ud.initials}</div>`;

    card.innerHTML = `
      ${avatarHtml}
      <div>
        <div class="cuc-name">${ud.fullName || ud.username || 'Student'}</div>
        <div class="cuc-email">${ud.email}</div>
        <div class="cuc-since">
          Joined ${ud.createdAt}
          ${ud.provider !== 'email' ? `· via ${ud.provider}` : ''}
        </div>
      </div>`;
  });
}

// ================================================================
//  Wire sign-out buttons
// ================================================================
function wireSignOutBtns() {
  document.querySelectorAll('.sign-out-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      await window.Clerk.signOut();
      window.location.href = CLERK_CONFIG.afterSignOutPath;
    });
  });
}

// ================================================================
//  User greeting (#user-greeting)
// ================================================================
function handleUserGreeting(user) {
  const el = document.getElementById('user-greeting');
  if (!el) return;
  if (user) {
    const ud = collectUserData(user);
    const first = ud.firstName || ud.username || 'Student';
    el.textContent = `Welcome back, ${first}! 👋`;
    el.style.display = 'block';
  }
}

// ================================================================
//  Page protection — GATE overlay (not redirect) for doc pages
// ================================================================
function handlePageProtection(user) {
  const body = document.body;

  // class="protected" → hard redirect to login if not signed in
  if (body.classList.contains('protected') && !user) {
    sessionStorage.setItem('auth_redirect', window.location.href);
    window.location.href = CLERK_CONFIG.loginPagePath;
    return;
  }

  // class="gated" → show beautiful in-page gate overlay, no redirect
  if (body.classList.contains('gated') && !user) {
    showGateOverlay();
    return;
  }

  // If user just signed in and there was a saved redirect
  if (user) {
    const saved = sessionStorage.getItem('auth_redirect');
    if (saved && saved !== window.location.href) {
      sessionStorage.removeItem('auth_redirect');
      window.location.href = saved;
    }
  }
}

// ================================================================
//  Gate overlay — shown on gated pages when not signed in
// ================================================================
function showGateOverlay() {
  // Hide page content
  document.querySelectorAll('body > *:not(script):not(style)').forEach(el => {
    if (!el.classList.contains('page-gate')) el.style.visibility = 'hidden';
  });

  const gate = document.createElement('div');
  gate.className = 'page-gate';
  gate.innerHTML = `
    <div class="gate-card">
      <div class="gate-stripe"></div>
      <div class="gate-icon">🔐</div>
      <div class="gate-title">Sign In to Access Docs</div>
      <div class="gate-sub">
        This study material is available to registered ABCD Learning Hub students.
        It's completely free — just sign in or create an account.
      </div>
      <div class="gate-perks">
        <div class="gate-perk">📖 Access all 6 subject areas & 40+ documents</div>
        <div class="gate-perk">🎓 Track your learning progress</div>
        <div class="gate-perk">🤖 AI course notes & practice tasks</div>
        <div class="gate-perk">📱 Works on any device, anytime</div>
      </div>
      <button class="gate-btn" id="gate-signin-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>
        </svg>
        Sign In / Create Free Account
      </button>
      <div class="gate-note">
        Sign in with <strong>Google</strong> or <strong>Email</strong> · 
        <a href="index.html">← Back to Home</a>
      </div>
    </div>`;

  document.body.appendChild(gate);

  document.getElementById('gate-signin-btn').addEventListener('click', () => {
    window.Clerk.openSignIn({
      afterSignInUrl:  window.location.href,
      afterSignUpUrl:  window.location.href,
    });
  });
}

// ================================================================
//  Public helper — get cached user data without waiting for Clerk
//  Usage: const ud = AbcdAuth.getUser();
// ================================================================
window.AbcdAuth = {
  getUser() {
    try {
      return JSON.parse(localStorage.getItem(CLERK_CONFIG.userCacheKey));
    } catch { return null; }
  },
  getLiveUser() {
    return window.Clerk?.user ? collectUserData(window.Clerk.user) : null;
  },
  signOut() {
    return window.Clerk?.signOut();
  },
  openSignIn(opts) {
    return window.Clerk?.openSignIn(opts || {});
  },
};

// ── Start ──────────────────────────────────────────────────────
startClerk();
