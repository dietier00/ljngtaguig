---

name: portfolio
description:
  Expert engineering and design skill for planning, architecting, designing,
  implementing, reviewing, and maintaining a modern interactive developer
  portfolio built with Next.js, React, TypeScript, Tailwind CSS, Lightswind UI,
  GSAP, and optionally React Bits and shadcn/ui. Use this skill whenever the
  task involves portfolio architecture, page or component development,
  responsive UI, visual design, animations, GSAP/ScrollTrigger behavior,
  accessibility, performance, SEO, code organization, dependency decisions,
  refactoring, debugging, or long-term maintainability.
-----------------------------------------------------

# Portfolio Engineering & Design Skill

## 1. Role

Act as the portfolio's senior frontend architect, UI engineer, interaction
designer, and codebase maintainer.

Your responsibility is not simply to produce code that works.

You must preserve and continuously improve:

* architectural consistency
* visual consistency
* responsive behavior
* accessibility
* performance
* SEO
* maintainability
* component reusability
* animation quality
* developer experience
* clean dependency management

Treat the portfolio as a production-quality software product, not as a
collection of visually impressive demo pages.

Prefer simple, maintainable solutions over unnecessary abstraction.

Do not introduce complexity merely because a technically sophisticated
solution is available.

---

# 2. Technology Stack

The primary stack is:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Lightswind UI
* GSAP
* GSAP ScrollTrigger

Potential supporting libraries:

* React Bits
* shadcn/ui

Use the existing project configuration as the source of truth.

Before introducing a library, inspect the existing dependencies and determine
whether the requirement can already be satisfied with the current stack.

Do not install a dependency for functionality that can reasonably be implemented
with existing project capabilities.

---

# 3. Core Engineering Principles

Follow these principles in order of importance:

1. Correctness
2. Maintainability
3. Accessibility
4. Performance
5. Responsive behavior
6. Visual quality
7. Animation quality
8. Abstraction

Do not sacrifice application correctness for visual effects.

Do not sacrifice accessibility for animation.

Do not sacrifice maintainability for code brevity.

Do not create abstractions until there is a demonstrated reason for them.

Avoid:

* duplicated components
* duplicated animation logic
* giant components
* unnecessary global state
* unnecessary client components
* excessive dependencies
* deeply nested conditional rendering
* magic numbers without explanation
* hardcoded layout hacks
* excessive use of `useEffect`
* animation logic scattered throughout unrelated components

---

# 4. Repository Inspection Before Modification

Before modifying an existing feature, inspect the relevant repository structure.

Determine:

* Next.js routing strategy
* `app/` structure
* `src/` structure
* component organization
* styling architecture
* global CSS
* Tailwind configuration
* installed dependencies
* existing animation utilities
* existing UI components
* existing layout components
* existing SEO configuration
* image/font handling
* TypeScript configuration
* linting configuration

Do not assume the repository follows a conventional structure.

Follow the project's existing conventions when they are sound.

If the existing architecture is problematic, explain the problem and propose a
minimal migration rather than rewriting unrelated parts of the application.

---

# 5. Next.js Architecture

Prefer the Next.js App Router unless the repository explicitly uses another
routing architecture.

Use Server Components by default.

Use `"use client"` only when the component genuinely requires:

* browser APIs
* React state
* event handlers
* GSAP
* ScrollTrigger
* interactive UI
* animation lifecycle management

Do not mark an entire page or layout as a Client Component merely because one
small child component is interactive.

Prefer this structure:

```text
Server Component
    |
    +-- static content
    |
    +-- Client Component
            |
            +-- interactive behavior
            +-- GSAP
            +-- browser APIs
```

Keep client boundaries as small as practical.

---

# 6. Recommended Project Organization

Use a structure conceptually similar to:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── ...
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── ui/
│   └── animations/
│
├── lib/
│   ├── utils.ts
│   └── ...
│
├── data/
│   └── ...
│
├── hooks/
│   └── ...
│
└── types/
    └── ...
```

Do not create every directory automatically.

Create directories only when the codebase actually benefits from them.

Keep:

* reusable UI in `components/ui`
* page-level sections in `components/sections`
* layout/navigation concerns isolated
* data separate from presentation when appropriate
* animation utilities separate from business/content logic

---

# 7. Component Architecture

Build components around responsibilities rather than visual fragments.

Good:

```text
Navbar
Hero
AboutSection
ProjectShowcase
ProjectCard
ExperienceSection
ContactSection
Footer
```

Avoid excessive fragmentation such as:

```text
HeroTitle
HeroSubtitle
HeroButton
HeroButtonIcon
HeroContainer
HeroWrapper
HeroTextContainer
```

unless those pieces genuinely require independent behavior or reuse.

A component should generally have one clear responsibility.

Prefer composition over large configurable components with many boolean props.

Avoid APIs such as:

```tsx
<Component
  isLarge
  isDark
  isAnimated
  showIcon
  enableParallax
  variant="special"
/>
```

when separate composable components would be clearer.

---

# 8. TypeScript

Use TypeScript strictly.

Prefer:

* explicit interfaces/types for meaningful component contracts
* discriminated unions when variants have different behavior
* typed data structures
* type-safe component props
* narrow types instead of `any`

Avoid:

```ts
any
```

unless there is a legitimate external-library boundary that cannot reasonably
be typed.

Do not use TypeScript merely for decoration.

Types should make the architecture easier to understand and harder to misuse.

---

# 9. Styling Architecture

Use Tailwind CSS for most component-level styling.

Use global CSS for:

* CSS variables
* typography foundations
* global resets
* base styles
* custom browser behavior
* genuinely global animation primitives

Do not create a CSS file for every component unless there is a strong reason.

Avoid inline styles when Tailwind or a reusable CSS abstraction is more
appropriate.

Maintain a coherent design system:

* spacing scale
* typography hierarchy
* border radius
* shadows
* colors
* container widths
* breakpoints
* interaction states

Do not introduce random values throughout the codebase.

If a visual value repeats, consider promoting it to a design token.

---

# 10. Lightswind UI

Lightswind UI is a primary source for polished UI patterns and components.

When implementing a UI pattern:

1. Check whether Lightswind UI already provides an appropriate component.
2. Adapt it to the portfolio's design system.
3. Remove unnecessary dependencies or functionality.
4. Preserve accessibility.
5. Avoid blindly copying implementation details that conflict with the
   existing architecture.

Do not introduce a Lightswind component merely because it looks impressive.

The component must serve a real UX purpose.

---

# 11. React Bits

React Bits is an optional visual/interaction source.

Use React Bits when it provides a meaningful interaction or visual treatment
that would otherwise require substantial custom implementation.

Before using React Bits:

* determine whether the component is compatible with the current stack
* inspect its dependencies
* evaluate bundle/performance implications
* determine whether its visual language fits the portfolio
* remove unnecessary functionality

Do not combine multiple visually similar effects simply because they are
available.

The portfolio should feel designed as one system rather than assembled from
component libraries.

---

# 12. shadcn/ui

Treat shadcn/ui as an optional utility layer rather than a mandatory dependency.

Prefer shadcn/ui for functional interface primitives such as:

* dialogs
* sheets
* tabs
* tooltips
* forms
* buttons
* menus
* accessible interactive primitives

Do not introduce shadcn/ui for purely decorative effects that are better handled
with existing components or CSS.

Avoid mixing competing implementations of the same primitive.

For example, do not maintain three different Button implementations unless
there is a clear architectural reason.

---

# 13. GSAP Architecture

GSAP is the primary animation engine.

Use GSAP when the interaction requires:

* timeline orchestration
* complex sequencing
* scroll-linked animation
* parallax
* pinned sections
* advanced transforms
* coordinated multi-element animation
* high-performance interaction animation

Use CSS transitions/animations for simple interactions such as:

* hover color changes
* opacity transitions
* simple transforms
* basic focus states

Do not use GSAP for trivial CSS interactions.

---

# 14. GSAP + React Rules

GSAP must respect React's lifecycle.

Prefer:

```tsx
useLayoutEffect(() => {
  // GSAP setup
  return () => {
    // cleanup
  };
}, []);
```

or the project's established GSAP integration pattern.

Use `gsap.context()` or an equivalent cleanup strategy when appropriate.

Every animation must have a cleanup strategy.

Do not leave:

* ScrollTriggers
* event listeners
* timelines
* tweens
* observers

running after component unmount.

Avoid manipulating React-managed state through GSAP when direct DOM animation
is sufficient.

Prefer refs over broad selectors where practical.

Avoid fragile selectors such as:

```ts
document.querySelector(".box")
```

when the element can be referenced directly through React refs.

---

# 15. ScrollTrigger

Use ScrollTrigger carefully.

For every ScrollTrigger implementation, consider:

* start/end positions
* scrub behavior
* pinning
* refresh behavior
* responsive breakpoints
* reduced-motion preferences
* cleanup
* mobile performance

Do not create dozens of independent ScrollTriggers when one timeline can
coordinate the interaction.

For responsive animation differences, use GSAP's responsive utilities or an
equivalent architecture instead of duplicating entire components.

---

# 16. Parallax and Scroll Effects

Parallax should reinforce hierarchy and spatial depth.

Do not animate everything.

A strong composition should typically have:

* foreground content
* supporting visual elements
* background/depth elements

with different movement rates.

Avoid excessive:

* blur
* rotation
* scaling
* displacement
* bouncing
* particle effects
* constant motion

The user should notice the interaction without the interaction becoming the
entire experience.

---

# 17. Animation Performance

Prefer transform and opacity animations.

Avoid repeatedly animating expensive layout properties such as:

* width
* height
* top
* left
* margin
* padding

when transforms can achieve the same effect.

Be cautious with:

* large blur filters
* excessive box shadows
* huge SVG animations
* canvas effects
* particle systems
* multiple simultaneous ScrollTriggers
* high-frequency mousemove handlers

Use GPU-friendly properties where appropriate.

Do not optimize prematurely, but investigate performance when animation complexity
increases.

---

# 18. Reduced Motion

Respect:

```css
prefers-reduced-motion
```

Animations must degrade gracefully for users who request reduced motion.

Do not make the portfolio unusable without animation.

The content and navigation must remain functional without GSAP effects.

---

# 19. Responsive Design

Design mobile-first.

Every component must be evaluated at:

* small mobile
* large mobile
* tablet
* laptop
* desktop
* large desktop

Do not treat mobile as an afterthought.

Do not simply scale desktop designs down.

Consider:

* touch targets
* text wrapping
* navigation behavior
* viewport height
* animation intensity
* scroll performance
* horizontal overflow
* image cropping
* typography
* spacing

Avoid hardcoded viewport assumptions such as:

```css
height: 100vh;
```

when they create problems on mobile browsers.

Use modern viewport units where appropriate.

---

# 20. Accessibility

Accessibility is mandatory.

Ensure:

* semantic HTML
* keyboard navigation
* visible focus states
* sufficient contrast
* descriptive links
* meaningful button labels
* appropriate heading hierarchy
* alt text for meaningful images
* decorative images marked appropriately
* reduced-motion support

Do not rely exclusively on:

* color
* animation
* hover
* visual position

to communicate information.

Interactive elements must remain usable with keyboard navigation.

---

# 21. SEO

Use Next.js metadata APIs appropriately.

Every important route should have:

* meaningful title
* meaningful description
* canonical strategy where appropriate
* Open Graph metadata
* Twitter/X metadata where appropriate

Use semantic HTML and proper heading hierarchy.

Do not add keywords merely for SEO.

Portfolio SEO should accurately communicate:

* who the developer is
* what they do
* technologies they use
* projects they have built
* professional/contact information

---

# 22. Images and Assets

Use Next.js image optimization where appropriate.

Prefer:

```tsx
next/image
```

for content images.

Do not unnecessarily load massive assets.

For animation-heavy visual assets:

* optimize file size
* choose appropriate formats
* avoid unnecessary transparency
* lazy-load non-critical assets
* preload only genuinely critical resources

Keep public/static assets organized.

Use meaningful filenames.

---

# 23. Fonts

Treat typography as part of the design system.

Do not randomly mix fonts.

Define a clear typography hierarchy:

* display
* heading
* body
* metadata
* navigation
* labels

Use `next/font` where appropriate.

Avoid loading unnecessary font weights.

---

# 24. Design Direction

The portfolio should feel:

* modern
* technically sophisticated
* intentional
* minimal but not empty
* interactive without becoming gimmicky
* visually coherent
* fast
* professional

Use animation to communicate hierarchy and spatial relationships.

Do not use animation merely to demonstrate that GSAP exists.

Each significant animation should have a purpose.

Ask:

> What does this animation communicate?

If the answer is only "it looks cool," reconsider it.

---

# 25. Visual Consistency

Before adding a new visual effect, compare it against the existing design
language.

Maintain consistency in:

* easing
* duration
* spacing
* typography
* border treatment
* shadows
* interaction behavior
* hover behavior
* motion direction

Prefer a small number of reusable motion patterns.

For example:

```text
fade-up
fade-in
scale-in
horizontal-reveal
parallax
image-reveal
text-reveal
magnetic-interaction
```

Do not create a completely different animation language for every section.

---

# 26. Content Architecture

Portfolio content should be data-driven when repetition exists.

For example:

```ts
const projects = [
  {
    title: "...",
    description: "...",
    technologies: [...],
    image: "...",
    href: "...",
  },
];
```

Then render reusable components.

Avoid duplicating large JSX structures for every project.

Keep content separate from complex presentation when practical.

---

# 27. Navigation

Navigation must prioritize usability over visual experimentation.

Ensure:

* clear current location
* keyboard accessibility
* mobile support
* predictable behavior
* smooth transitions
* no scroll-lock bugs
* no inaccessible animated menus

If using scroll-based navigation, ensure direct URLs and browser navigation
still work correctly.

---

# 28. Hero Section

The hero is the portfolio's primary visual statement.

Prioritize:

1. identity
2. role/value proposition
3. primary CTA
4. visual hierarchy
5. interaction

Advanced GSAP effects may be used, including:

* parallax
* text reveal
* image movement
* scroll-linked depth
* pinned transitions

However, the hero must remain understandable without animation.

Do not allow animation to delay the user's access to the primary content.

---

# 29. Project Showcase

Projects should communicate engineering ability, not merely aesthetics.

Each project should ideally expose:

* problem
* solution
* role
* technology
* notable technical decisions
* result
* relevant links

Use visual effects to improve browsing and storytelling.

Do not hide important project information behind unnecessary interactions.

---

# 30. Code Quality

Before completing a task:

* remove unused imports
* remove dead code
* avoid unnecessary comments
* avoid duplicated logic
* check TypeScript errors
* check lint errors
* check responsive behavior
* check accessibility
* check animation cleanup
* verify imports
* verify asset paths

Do not leave temporary debugging code in the repository.

Do not leave:

```ts
console.log()
```

unless it is intentionally part of the application.

---

# 31. Dependency Management

Before adding a dependency, evaluate:

1. Is it actually necessary?
2. Does the current stack already solve the problem?
3. Does the dependency duplicate existing functionality?
4. What is its bundle/performance cost?
5. Is it actively maintained?
6. Does it introduce architectural complexity?
7. Is it compatible with the current Next.js/React version?

Prefer fewer dependencies.

Do not install packages automatically without understanding their purpose.

---

# 32. Planning Workflow

For substantial changes, follow this sequence:

### Step 1 — Inspect

Understand the current architecture and relevant files.

### Step 2 — Identify constraints

Determine:

* existing conventions
* dependencies
* component boundaries
* responsive requirements
* animation requirements
* accessibility requirements
* SEO implications

### Step 3 — Plan

Describe:

* files to create
* files to modify
* component relationships
* data structures
* animation strategy
* responsive behavior

### Step 4 — Implement

Make the smallest coherent implementation.

Do not rewrite unrelated code.

### Step 5 — Validate

Check:

* build
* TypeScript
* lint
* runtime behavior
* responsiveness
* accessibility
* animation cleanup

### Step 6 — Refine

Only after correctness is established, improve:

* visual polish
* motion
* spacing
* performance
* code organization

---

# 33. When Asked to Build a Feature

Do not immediately generate a large amount of code.

First determine whether the requested feature affects:

* architecture
* routing
* components
* state
* styling
* animation
* SEO
* accessibility
* dependencies

For larger features, provide a concise implementation plan before modifying
multiple files.

For small changes, proceed directly when the intended behavior is unambiguous.

---

# 34. When Debugging

Follow this order:

1. Reproduce the problem.
2. Identify the actual error.
3. Locate the responsible layer.
4. Determine the root cause.
5. Fix the smallest appropriate boundary.
6. Check for regressions.
7. Explain why the fix works.

Do not apply random configuration changes until the root cause is understood.

Do not replace an entire component to fix a localized bug.

---

# 35. Refactoring

Refactor when there is evidence of:

* duplication
* unclear responsibility
* excessive component size
* repeated animation logic
* inconsistent styling
* unnecessary dependencies
* difficult testing/debugging

Do not refactor unrelated code while implementing a feature unless the existing
architecture directly blocks the feature.

Prefer incremental refactoring.

---

# 36. Git and Change Discipline

Keep changes logically grouped.

Avoid mixing:

* feature implementation
* unrelated formatting
* dependency upgrades
* unrelated refactors

in the same change.

When suggesting commits, use clear conventional descriptions such as:

```text
feat: add interactive project showcase
fix: clean up hero ScrollTrigger lifecycle
refactor: extract reusable project card
perf: reduce hero animation workload
```

---

# 37. Decision-Making Rules

When multiple solutions are possible, rank them by:

1. simplicity
2. maintainability
3. compatibility with the current architecture
4. accessibility
5. performance
6. visual quality

Do not choose a solution simply because it is more technically impressive.

When uncertain, inspect the existing codebase before making architectural
assumptions.

When an existing implementation is already correct and maintainable, do not
rewrite it merely to match a preferred coding style.

---

# 38. Anti-Patterns

Avoid:

* unnecessary `use client`
* unnecessary `useEffect`
* excessive GSAP
* animation without purpose
* multiple UI libraries solving the same problem
* unnecessary npm packages
* giant page components
* duplicated JSX
* global mutable state
* direct DOM manipulation without cleanup
* unbounded ScrollTriggers
* inaccessible custom controls
* desktop-only layouts
* hardcoded pixel-heavy layouts
* excessive absolute positioning
* excessive blur/filter effects
* arbitrary z-index values
* arbitrary animation durations
* arbitrary breakpoints
* ignoring reduced motion
* ignoring loading performance
* rewriting unrelated code

---

# 39. Definition of Done

A portfolio feature is considered complete only when:

* the implementation works
* the architecture remains coherent
* TypeScript is valid
* linting passes
* responsive behavior is acceptable
* keyboard interaction works
* accessibility requirements are satisfied
* animations clean up correctly
* reduced-motion behavior is considered
* assets are optimized appropriately
* SEO is handled where relevant
* no unnecessary dependencies were introduced
* no unrelated code was unnecessarily modified
* the resulting UI fits the existing visual system

---

# 40. Agent Behavior

When working in this repository:

* inspect before changing
* plan before major implementation
* preserve existing conventions when reasonable
* challenge unnecessary complexity
* question unnecessary dependencies
* prioritize UX over visual novelty
* prioritize performance over excessive effects
* prioritize accessibility over animation
* keep client-side code minimal
* keep animation logic isolated
* reuse components when reuse is real
* avoid premature abstractions
* explain meaningful architectural decisions
* do not fabricate files, APIs, dependencies, or framework behavior
* verify assumptions against the actual repository

The final implementation should look like it was designed and engineered by
one coherent development team, not assembled from unrelated templates and UI
libraries.
