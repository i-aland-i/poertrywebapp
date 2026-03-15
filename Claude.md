1- This is a poetry application, i want you to only give the code from your side, i will make edits and run cmd commands.
2- I am using nextjs for webapp and nest for backend, i want you to help me with the best practices and things people use, ALWAYS!
3- NestJS backend only. Separation of concerns is cleaner. NextJS is purely frontend.
4- Zustand for state management 

FOLDER STRUCTURE
app/                          # Next.js App Router (routes only)
├── (auth)/                   # Route group — auth pages (no layout nesting with main app)
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── layout.tsx            # Auth-specific layout (centered card, no navbar)
├── (main)/                   # Route group — authenticated/main app pages
│   ├── layout.tsx            # Main layout (navbar, sidebar, footer)
│   ├── page.tsx              # Home feed
│   ├── explore/page.tsx      # Discover poems/poets
│   ├── poems/
│   │   ├── [id]/page.tsx     # Single poem view
│   │   └── create/page.tsx   # Write a new poem
│   ├── poets/
│   │   └── [username]/page.tsx  # Poet profile
│   ├── bookmarks/page.tsx    # Saved/bookmarked poems
│   └── settings/page.tsx     # User settings
├── layout.tsx                # Root layout (fonts, providers, global styles)
├── globals.css               # Tailwind + global styles
├── not-found.tsx             # Custom 404
└── loading.tsx               # Global loading fallback

components/                   # Reusable UI components
├── ui/                       # Generic primitives (Button, Input, Modal, Card, Avatar)
├── poems/                    # Poem-specific components (PoemCard, PoemEditor, PoemActions)
├── poets/                    # Poet-specific components (PoetCard, FollowButton)
├── layout/                   # Layout components (Navbar, Sidebar, Footer, MobileNav)
└── shared/                   # Cross-feature components (SearchBar, InfiniteScroll, EmptyState)

lib/                          # Core utilities and configuration
├── api/                      # API client — functions that call the NestJS backend
│   ├── client.ts             # Axios/fetch instance with base URL, interceptors, auth headers
│   ├── poems.ts              # Poem endpoints (getPoems, createPoem, likePoem, etc.)
│   ├── auth.ts               # Auth endpoints (login, register, refresh)
│   ├── users.ts              # User endpoints (getProfile, follow, updateSettings)
│   └── comments.ts           # Comment endpoints
├── utils/                    # Pure helper functions (formatDate, truncateText, etc.)
└── constants.ts              # App-wide constants (routes, config values)

hooks/                        # Custom React hooks
├── use-auth.ts               # Auth state & actions hook
├── use-poems.ts              # Poem data fetching hooks
└── use-debounce.ts           # Utility hooks

stores/                       # Zustand stores
├── auth-store.ts             # Auth state (user, token, login/logout actions)
├── ui-store.ts               # UI state (theme, sidebar open, modals)
└── feed-store.ts             # Feed/poem state if needed

types/                        # TypeScript type definitions
├── poem.ts                   # Poem, PoemComment, PoemLike interfaces
├── user.ts                   # User, AuthResponse interfaces
└── api.ts                    # API response wrappers, pagination types

providers/                    # React context providers (wrapped in root layout)
├── query-provider.tsx        # React Query / TanStack Query provider (for server state)
├── auth-provider.tsx         # Auth context provider
└── theme-provider.tsx        # Theme provider (if dark mode toggle needed)

public/                       # Static assets served at /
├── images/                   # Static images (logo, og-image, etc.)
└── fonts/                    # Self-hosted fonts (if any)