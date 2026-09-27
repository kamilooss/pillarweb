---
name: designing-beautiful-websites
description: >-
  Design, implement, or critique website and web-app UX/UI: information structure,
  user flows, responsive layouts, visual systems, content, and interaction states.
  Use for a requested interface or visual-design change; do not expand a small
  component edit into an unrequested product redesign.
compatibility: Design reasoning works from supplied content and screenshots. Implementation and browser checks depend on the project's tools. The optional opaque-sRGB contrast helper requires Python 3.9+.
metadata:
  version: "2.0.0"
  reviewed: "2026-09-13"
---

# Clear, distinctive web interfaces

Make the purpose and next action legible, with a visual language that fits the
product and audience. Build from real content and behaviour, then use typography,
spacing, colour, imagery, and motion deliberately. Beauty is not one universal
palette, a grid of rounded cards, or an obligation to remove all decoration.

## Establish the actual design task

Read the request, existing implementation, design system, assets, and relevant
content. Identify the user, page purpose, important journey, brand signals, target
platforms, and constraints. Use supplied answers; infer ordinary defaults and
state consequential assumptions without repeating a questionnaire.

For a local polish request, stay local unless a structural problem prevents the
requested result. For a new site, choose a coherent direction and implement the
requested deliverable rather than only returning a planning packet. For an audit,
show the material issues, their locations and impact, and specific fixes. Do not
claim to have interacted with a page when only a screenshot was available.

## Structure before ornament

Trace the user's key task from entry through completion and recovery. Make labels,
content order, navigation, and feedback understandable without internal terminology.
Retain the context needed to make a decision; fewer words or clicks are not always
better. Distinguish required steps from accidental friction, including permissions,
confirmation, cancellation, and access to help.

Start layout from the content and priorities rather than a generic app shell.
Use meaningful grouping, alignment, and whitespace. Define how real long text,
translations, missing images, tables, errors, loading, empty results, and success
states fit. Design information order and controls for narrow screens, zoom, and
keyboard use, not merely a scaled-down desktop screenshot.

## Give the interface a visual point of view

Use the project's established visual system first. For a new direction, choose a
small set of intentional characteristics: for example, editorial typography and
asymmetric composition for a publication, precise compact controls for a technical
tool, or generous photography and warm materials for a hospitality site. These
are possible directions, not templates to apply regardless of the brief.

Create hierarchy through type size, weight, line length, spacing, contrast, and
position before adding more decoration. Use a consistent spacing/type scale as a
starting discipline, then allow a justified optical or content-specific adjustment.
Use borders, shadows, backgrounds, and illustration according to the composition;
a blanket preference for shadows over borders is not a quality rule.

Make dominant content and actions visible, with quieter supporting information.
Use intentional imagery and crop/focal choices rather than arbitrary stock assets.
Only use assets with suitable rights; do not invent client logos, reviews, awards,
statistics, or product capabilities to fill a layout. Mark synthetic content as a
placeholder. Avoid fake scarcity, hidden refusal, or misleading price presentation.

Use restrained, purposeful motion where it helps orientation or feedback, with
reduced-motion and usable static states. Do not add a heavy library, animation
system, or client boundary for an effect already served by simple CSS.

## Implement complete states and semantics

Keep buttons as actions and links as navigation. Use the existing component system
and framework conventions; preserve refs, focus, form submission, validation, and
loading/error semantics when restyling. A disabled-looking control must have the
correct interaction behaviour. Define what happens after network failure, duplicate
activation, cancellation, or stale data; visual feedback is not proof a write succeeded.

For forms, preserve entered data and make errors specific and recoverable. For
menus/dialogs/tabs, use the appropriate semantic pattern and keyboard/focus behaviour,
not just a styled container with role attributes. Do not hide important content
until a fragile JavaScript reveal succeeds. Keep layout stable as fonts/media load.

Read [accessibility](#reference-accessibility) for targeted checks. A contrast
ratio or automated scan is one piece of evidence, not an accessibility certificate.

## Inspect, test, and iterate

A quick first-impression or heuristic walkthrough is useful expert inspection;
it is not a measured user test and cannot establish conversion or task-success
rates. Where testing is requested, use actual participants or observed interaction
and record scope, conditions, and results. Do not invent a successful glance test.

For implementation, run the relevant project typecheck/build/tests as authorised,
then inspect rendered output at meaningful widths, zoom/text sizes, interaction
states, and input methods. Check focus, accessible names, scrolling, clipping,
content wrapping, and browser/console failures. Record what was actually tested.
A static screenshot cannot establish keyboard or screen-reader behaviour; a test
plan is not a completed test. Avoid unsupported performance or conversion claims.

For handoff, give the actual patch or requested design artefact, changed tokens
and component/state rules where useful, and unresolved verification. A small edit
does not need a new sitemap, complete design system, or seven-section report.
Stop when the work serves the task; don't keep redesigning coherent choices for novelty.

## Load only the relevant reference

- [Visual design](#reference-visual-design): typography, hierarchy, composition.
- [Information architecture](#reference-information-architecture): navigation and structure.
- [Interaction](#reference-interaction-design): states, controls, and forms.
- [Content](#reference-content-and-microcopy): useful labels and microcopy.
- [Responsive design](#reference-responsive-design): content-led layouts and edge cases.
- [Accessibility](#reference-accessibility): semantic and input checks.
- [Design audit](#reference-design-audit): finding/impact/fix format.
- [Page patterns](#reference-page-patterns), [usability](#reference-usability),
  [workflow](#reference-workflow), and [checklists](#reference-checklists):
  optional deeper methods, not a mandatory output format.

Reference/script paths belong to the installed skill directory, not the target
project. Older numeric design ranges are heuristics to adapt, not universal standards.
No usability, accessibility, conversion, or performance improvement is claimed
without evidence from the actual interface.

Authoring baseline reviewed 2026-09-13: https://agentskills.io/specification.
Current accessibility sources are listed in the accessibility reference.

---

# References

All eleven reference documents, inlined verbatim.

1. [Visual design](#reference-visual-design)
2. [Information architecture](#reference-information-architecture)
3. [Interaction design](#reference-interaction-design)
4. [Content and microcopy](#reference-content-and-microcopy)
5. [Responsive design](#reference-responsive-design)
6. [Accessibility](#reference-accessibility)
7. [Design audit](#reference-design-audit)
8. [Page patterns](#reference-page-patterns)
9. [Usability](#reference-usability)
10. [Workflow](#reference-workflow)
11. [Checklists](#reference-checklists)

---

## Reference: Visual design

*(originally `references/VISUAL-DESIGN.md`)*

> Use this when you need to make a UI feel polished and coherent (spacing, typography, colour, depth, imagery).

### Start with a system
Beautiful interfaces look “effortless” because decisions are **constrained**.

Rules:
- choose a spacing scale, type scale, and colour palette *before* polishing screens;
- use tokens in implementation (CSS variables / design tokens), not one-off values;
- if you add a new token, it must have a reason and a usage rule.

### Layout and spacing

#### Start with too much whitespace
A reliable way to reach “clean” is:
1. give elements *more* room than you think they need,
2. then remove whitespace until the layout feels tight *without* feeling cramped.

Dense layouts are sometimes correct (dashboards, data-heavy tools), but density should be a deliberate choice.

#### Establish a spacing and sizing scale
Avoid pixel-by-pixel tweaking.
Pick a non-linear scale where adjacent values are meaningfully different.

Suggested scale (px):
`0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128`

Rules:
- no new spacing values without a strong reason;
- “try next value up/down” should usually be the right adjustment;
- prefer padding and whitespace over borders.

#### Avoid ambiguous spacing
If spacing is the only grouping cue:
- keep **inside-group spacing smaller** than **between-group spacing**.

Common examples:
- form labels must feel attached to their inputs;
- headings must feel attached to the section they introduce;
- list items need separation that doesn’t look like line-height.

#### You don’t have to fill the whole screen
Wide content is harder to read and parse.

Rules:
- choose a sensible max width for reading-heavy sections;
- don’t expand components just because there is empty space;
- when a section needs more visual weight, use hierarchy (type/spacing), not width.

Mobile-first technique:
- design on a narrow canvas first (~360–420px), then expand.

#### Alignment and rhythm
- Align to a small set of vertical anchors (grid lines, baseline rhythm).
- Prefer consistent edge alignment over “centering everything”.
- Use repeated spacing patterns so the page feels calm.

### Typography

#### Establish a type scale
Most UIs use too many font sizes.

Recommended: 6–8 sizes, named.
Example (px):
- `12` caption
- `14` small
- `16` base
- `20` lg
- `24` xl
- `30` 2xl
- `40` 3xl

Rules:
- use weight, colour, and spacing before adding sizes;
- define line-height per category (body vs headings);
- keep reading line length ~45–80 characters.

#### Weight and contrast
- Body text needs enough contrast against the background.
- Use heavier weight or larger size instead of pure colour changes for hierarchy.

#### Fonts (pragmatic defaults)
- Use 1 font family for most UI.
- If using a second font, reserve it for display/brand moments.
- Avoid ultra-thin weights for text.

### Colour

#### Build palettes with shades
Define shades up front so you don’t end up with dozens of near-identical colours.

Rules:
- define a **neutral** scale for backgrounds and text;
- define one primary brand colour with shades;
- define semantic accents (success/warn/danger/info) with shades;
- avoid algorithmic lightening/darkening for production tokens.

A practical shade naming scheme:
`100, 200, 300, 400, 500, 600, 700, 800, 900`

Typical usage:
- `900–700` for text
- `600–400` for borders/icons/active states
- `300–100` for subtle backgrounds

#### Greys have temperature
True grey is rare; “greys” often lean warm or cool.
Pick a temperature and keep it consistent.

Rule:
- slightly increase saturation in very light and very dark neutrals so they don’t feel washed out.

#### Don’t let lightness kill saturation
Very light or very dark colours can look dull if saturation isn’t adjusted.

Practical approach:
- for lighter shades: raise saturation slightly as lightness rises;
- for darker shades: raise saturation slightly as lightness falls.

#### Adjust perceived brightness with small hue rotation
Different hues feel inherently brighter.
To create lighter/darker shades without “washing out” a colour:
- rotate hue slightly (small changes only; keep within ~20–30°).

#### Accessible contrast without ugly UI
Targets:
- normal text: ≥ 4.5:1
- large text: ≥ 3:1

If white text on a coloured background forces the background to become too dark and dominant:
- **flip the contrast**: use dark coloured text on a light tinted background.

For coloured text on coloured backgrounds:
- consider shifting the text hue towards a brighter hue while meeting contrast.

### Depth, borders, and elevation

#### Emulate a light source
To make elevation feel real:
- top edges are slightly lighter;
- shadows fall below the element;
- keep blur modest; sharp-ish edges feel more natural.

#### Choose separation for the composition
A shadow can suggest elevation when that metaphor fits the interface. It is not
an automatic focus indicator or a requirement for cards, buttons, or modals.
Use a consistent elevation system when the design needs one, and give keyboard
focus its own visible treatment.

Spacing, background differences, borders, and shadows are alternatives, not a
quality ranking. Choose the cue that makes grouping and boundaries clear in the
actual composition, including dark mode and high-contrast settings. A crisp border
can be more effective than a shadow; no separator may be needed for a simple group.

### Working with images

Rules:
- use genuinely good images; low-quality images poison an otherwise clean UI;
- ensure text on images has consistent contrast (overlay, gradient, or avoid);
- beware user-uploaded images: plan for weird crops, bad lighting, and clashing colours.

Practical strategies:
- enforce aspect ratios;
- use object-fit with focal point hints;
- add subtle background or border radius consistency.

### Finishing touches

#### Empty states
Don’t ship a feature without its empty state.
An empty state should:
- explain what this section is for,
- show an example,
- and highlight the next action.

Also consider hiding irrelevant controls (filters/tabs) until there is data.

#### Accent borders
To make UI feel “designed” without adding noise:
- use a thin accent border on cards/alerts;
- keep contrast subtle;
- tie accent use to meaning (status, category).

#### Decorated backgrounds (subtle)
Background patterns and shapes can add polish.
Rules:
- keep contrast low;
- keep decoration out of the reading path;
- use it to frame sections, not compete with content.

### Reference token starter (CSS)

```css
:root {
  /* Spacing */
  --space-0: 0px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;

  /* Type scale */
  --font-0: 12px;
  --font-1: 14px;
  --font-2: 16px;
  --font-3: 20px;
  --font-4: 24px;
  --font-5: 30px;
  --font-6: 40px;

  /* Radius */
  --radius-1: 6px;
  --radius-2: 10px;
  --radius-3: 16px;

  /* Elevation (examples, tune to palette) */
  --shadow-1: 0 1px 2px rgba(0,0,0,0.08);
  --shadow-2: 0 4px 10px rgba(0,0,0,0.10);
  --shadow-3: 0 10px 25px rgba(0,0,0,0.12);
  --shadow-4: 0 20px 50px rgba(0,0,0,0.16);

  /* Neutral palette (example placeholders) */
  --neutral-0: #ffffff;
  --neutral-50: #f8fafc;
  --neutral-100: #f1f5f9;
  --neutral-200: #e2e8f0;
  --neutral-300: #cbd5e1;
  --neutral-600: #475569;
  --neutral-800: #1f2937;
  --neutral-900: #0f172a;
}
```

Use a real palette for your project; don’t ship placeholder colours.

---

## Reference: Information architecture

*(originally `references/INFORMATION-ARCHITECTURE.md`)*

> Use this when you need to structure pages, navigation, labels, and findability.

### Core concepts
- **Findability beats novelty**: users rarely explore; they look for a path to the goal.
- **Clear categories reduce thinking**: if top-level sections are obvious, the rest becomes easy.
- **Structure and skeleton are connected**: IA decisions affect layouts, and layouts expose IA problems.

### Sitemaps and navigation models
Choose a model:
- **Marketing site**: Home, Product, Pricing, Docs/Resources, About, Contact.
- **Content site**: Sections by topic, strong search, archive views.
- **Web app**: Tasks and objects drive navigation (not departments or internal team names).

Rules:
- Keep top-level navigation stable and short.
- Use local navigation for depth (subsections) rather than exploding global nav.
- Always make it clear where the user is (active states, breadcrumbs when useful).

### Labelling and naming
Rules:
- Use plain language and familiar terms.
- Prefer user vocabulary over internal vocabulary.
- Avoid clever names that require explanation.
- Keep labels consistent across the site.

Tests:
- Can someone guess what they will see after clicking the link?
- Does the label match the page title?

### Search
Add search if:
- users might not know what the site calls something,
- content is large or frequently updated,
- or there are many objects (products, docs, posts, people).

Rules:
- Put search where users expect it.
- Support partial matches and forgiving input.
- Results should be scannable: highlight matches, show context snippets.

### Page purpose statements
For every key page, write one sentence:
- “This page lets the user ____ so they can ____.”

If you can’t write it, the page is probably trying to do too much.

### IA deliverables
- **Sitemap**: pages and hierarchy.
- **Navigation model**: global + local nav rules.
- **Label glossary**: canonical terms (and forbidden synonyms).
- **Key-path entry points**: where journeys start.
- **Search behaviour**: placement, results design, empty results.

---

## Reference: Interaction design

*(originally `references/INTERACTION-DESIGN.md`)*

> Use this when you need behaviour rules, form patterns, error handling, and clear feedback.

### Interaction principles
- **Make expectations explicit**: the UI “promises” behaviour through its visuals; always deliver on that promise.
- **Prefer recognition over recall**: show options and context; don’t make people memorise.
- **Feedback is part of the interaction**: users should always know what happened and what happens next.
- **Prevent errors**: the best error message is the one you never need.
- **Keep users in flow**: avoid interruptive patterns unless risk is truly high.

### Affordances and signifiers
Affordances are what a control *appears* to do.

Rules:
- controls must look like controls (buttons, links, inputs); don’t rely on hover to reveal affordance;
- interactive areas must have clear hover/focus/active states;
- don’t use the same visual style for interactive and non-interactive elements.

Common traps:
- decorative icons that look clickable,
- cards that are clickable with no signifier,
- “link-like” coloured text that isn’t a link.

### Direct manipulation and feedback
When possible, let users act directly on visible objects and see results immediately.

Patterns:
- inline editing (instead of separate edit screens),
- previewing outcomes before committing,
- drag/drop reordering with clear drop targets,
- immediate visual confirmation for actions.

#### Modeless feedback (preferred)
Use persistent, inline feedback that doesn’t stop the user:
- status badges,
- inline validation,
- progress indicators,
- subtle toasts (with undo when appropriate).

Avoid:
- frequent blocking dialogs,
- errors that appear only after submission,
- vague spinners with no context.

### Preventing errors
Three levels of defence (use in order):
1. **Make errors impossible**: constrain inputs, use pickers, infer values.
2. **Make errors unlikely**: smart defaults, suggestions, previews.
3. **Make recovery easy**: undo, clear explanations, safe fallbacks.

Examples:
- auto-format phone numbers and dates;
- look up postcode from address (when feasible);
- disable impossible actions and explain why.

### Dialogs, confirmations, and destructive actions
Principle: don’t make users confirm things they don’t understand.

Use confirmations when:
- the action is destructive *and* not easily reversible,
- the user might trigger it accidentally,
- the impact is significant.

Confirmation copy should:
- name the thing being affected,
- state the impact,
- offer a safe escape.

Prefer:
- **undo** (best),
- **soft delete**,
- **preview**,
- **two-step** destructive actions (e.g., “type DELETE”).

### Forms
#### Anatomy
For each field:
- label (required),
- input,
- help text (optional),
- validation message (conditional).

#### Layout and grouping
Rules:
- group related fields; separate groups with extra spacing;
- labels should feel attached to inputs (tight spacing);
- align fields and controls on a clear grid;
- keep forms as short as possible.

#### Validation
Preferred:
- validate inline after interaction (blur) and on submit;
- show errors near the field;
- keep messages human and actionable.

Avoid:
- error summaries with no field mapping,
- clearing user input after an error,
- blaming the user.

#### Defaults and choice architecture
Rules:
- pick sensible defaults based on likely user intent;
- for long lists, provide search or typeahead;
- don’t force a choice when “none” is valid.

#### Accessibility essentials
- every input has a label associated with it;
- errors are associated with the relevant fields; use an appropriate announcement
  mechanism rather than assuming `aria-describedby` announces an update;
- after invalid submission, choose an error-summary or first-invalid-field focus
  pattern that suits the form. Preserve input and avoid moving focus on every
  keystroke; test the chosen pattern with keyboard and assistive technology;
- keyboard navigation works logically.

### States and edge cases
Every screen/component should define:
- **Loading**: what is loading? how long? skeleton or spinner?
- **Empty**: why empty? what next? hide irrelevant controls?
- **Error**: what happened? retry? alternative path?
- **Success**: what changed? next action?
- **Disabled**: why disabled? what enables it?

Edge cases checklist:
- long labels, long values, localisation (text expansion),
- missing avatars/images,
- permissions and read-only modes,
- offline/slow network,
- partial data.

---

## Reference: Content and microcopy

*(originally `references/CONTENT-COPY.md`)*

> Use this when you need labels, headings, CTA copy, and error messages that reduce thinking.

### Principles
- Words are part of the interface; treat them as design.
- Prefer **plain, obvious language** over cleverness.
- Reduce cognitive load: fewer words, clearer words, placed near the decision.

### Write for scanning
Use:
- short paragraphs,
- bullets,
- meaningful headings,
- emphasis sparingly.

Checklist:
- the first sentence in a section should communicate the point;
- headings should describe the content beneath them;
- avoid walls of text; split into sections.

### Naming and labels
Rules:
- use user vocabulary, not internal jargon;
- keep terms consistent across navigation, headings, and buttons;
- avoid marketing names that hide meaning.

Bad → better examples:
- “Solutions” → “Pricing” / “Use cases” / “Services” (be specific)
- “Learn” → “Docs” / “Guides” / “Resources”
- “Continue” → “Create account” / “Choose plan” / “Pay now”

### Buttons and calls to action
Rules:
- button text should describe the result (“Generate report”).
- primary CTA is singular; secondary CTAs are visually quieter.
- destructive actions must be clearly labelled (“Delete project”).

### Helper text and instructions
Rules:
- put instructions where the decision happens (near the control).
- keep helper text short; link to details if needed.
- don’t rely on placeholder text as the only label.

### Empty states
A good empty state includes:
- what this area is for,
- why it matters,
- an example (if helpful),
- and a clear next step.

### Errors and recovery
Error message template:
- What happened
- Why it matters (optional)
- What to do next

Rules:
- avoid blame (“You did it wrong”).
- be specific (“Password must be at least 12 characters”).
- preserve user input whenever possible.
- for global errors, point to the field or action that caused it.

---

## Reference: Responsive design

*(originally `references/RESPONSIVE.md`)*

> Use this when you need mobile-first layouts, breakpoint decisions, and component behaviour across screen sizes.

### Core rules
- Design for constraints first; expand later.
- Prioritise content and primary actions at every breakpoint.
- Don’t squeeze desktop UI onto mobile; reflow it.

### Mobile-first workflow
1. Start at ~360–420px width.
2. Design key pages and key paths.
3. Expand to tablet and desktop and fix what felt like a compromise.

If you’re stuck designing a “small” UI on a wide canvas, shrink the canvas.

### Containers, columns, and reading width
Rules:
- Reading-heavy sections need a max width; wide text is hard to scan.
- Don’t make everything full-width just because the header is full-width.
- If a layout feels too wide, split into columns instead of stretching content.

### Independent scaling
Avoid purely proportional scaling.
As screens shrink:
- large elements should shrink faster than small elements,
- spacing should compress, but not uniformly,
- component padding often needs to tighten more than font size.

Rule:
- fine-tune properties independently; don’t treat the UI as a zoomed image.

### Component responsivity
For each component, define:
- how it reflows (stack vs inline),
- how it truncates or wraps text,
- how density changes,
- touch target rules,
- and what happens to secondary actions.

Examples:
- tables → switch to cards, stacked rows, or horizontal scrolling with clear affordance.
- toolbars → move secondary actions into an overflow menu.

### Responsive navigation
Rules:
- keep primary navigation discoverable;
- avoid hiding essential sections behind deep menus on desktop;
- on mobile, use patterns users recognise (tabs, bottom nav, hamburger) based on app type.

### Testing checklist
- breakpoints: small phone, large phone, tablet, desktop, wide desktop
- text expansion: +30% length (localisation)
- touch: tap targets and spacing
- keyboard: focus order and visible focus
- content extremes: long titles, empty lists, huge numbers

---

## Reference: Accessibility

*(originally `references/ACCESSIBILITY.md`)*

Define the applicable standard, level, pages, states, and assistive-technology
scope before making a conformance claim. The checks below are selected design
and implementation checks, not all of WCAG 2.2 or a legal opinion. Automated tools,
source inspection, and screenshots cannot replace testing the rendered interaction.

### Text and visual information

WCAG contrast minimums are 4.5:1 for ordinary text and 3:1 for text meeting the
criterion's large-text definition, with specified exceptions. Compare unrounded
ratios, not rounded display values. Inspect actual foreground/background colours
in every relevant state; transparency, gradients, images, and theme changes need
the effective background. Do not rely on colour alone for meaning. Non-text UI
and meaningful graphic contrast require their own assessment.

The bundled helper accepts only opaque #RGB/#RRGGBB sRGB pairs. Resolve SKILL_DIR
to this installed directory and run, for example:

```bash
python "$SKILL_DIR/scripts/contrast_check.py" '#0f172a' '#ffffff'
```

Its exit 0 means the supplied pair meets the normal-text threshold; exit 1 means
it does not, even when it meets the large-text threshold. Exit 2 is a usage/input
error. The helper does not inspect a website, font size, alpha compositing, semantic
contrast, or full conformance. Keep it as a small calculation tool, not a page audit.

Source: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html

### Keyboard, focus, and semantics

Use native controls with accurate names, roles, and states. Preserve a logical
reading/focus sequence supporting meaning and operation; do not repair arbitrary
CSS rearrangement with positive tabindex values. Include keyboard routes and no
unintended traps. Use meaningful headings, landmarks, labels, and image alternatives.

Focused controls need a visible indicator. WCAG 2.2 AA's Focus Not Obscured minimum
also requires the focused component not be entirely hidden by author-created
content. Test sticky headers, cookie banners, drawers, and onscreen keyboards.
A visible ring on an offscreen/covered control is not useful. The separate enhanced
focus criteria have different levels; don't label every AAA prescription as AA.

For dialogs, use a suitable implemented dialog pattern, accessible labelling,
appropriate initial focus, dismissal, focus containment for a modal, background
inertness, and restoration to a sensible location. A decorative overlay or an
aria-modal attribute alone does not provide that behaviour.

Source: https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html

### Pointer input and alternatives

WCAG 2.2 AA's target-size minimum is 24 by 24 CSS pixels, subject to defined spacing,
equivalent-control, inline, user-agent, and essential exceptions. Check the actual
hit area and neighbours; a 24-pixel bounding box around a round target does not
necessarily contain a 24-pixel square. Larger comfortable targets can be a design
goal without misrepresenting the minimum or exceptions.

Provide a single-pointer non-drag alternative for functionality using dragging,
except where the criterion allows an essential or user-agent exception. Keyboard
support is separately important and is not by itself the single-pointer alternative.
Examples include move-up/down buttons alongside drag reordering. Test touch,
pointer cancellation, disabled states, and accidental repeated activation.

Sources:
- https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html

### Forms and status changes

Give fields persistent programmatic labels, understandable instructions, and
specific associated error messages. Preserve entered data. After submission,
choose an appropriate error summary/focus or first-invalid-field pattern for the
form; don't prescribe one focus target universally. Dynamic error/status changes
need an appropriate announcement strategy. aria-describedby associates descriptive
text but is not a blanket guarantee that every later change is announced.

Avoid duplicate or excessively chatty live announcements. Test actual focus,
validation, successful submission, and server-error behaviour with the intended
screen reader/browser. Don't make a transient toast the only place to learn how
to recover, and don't call a pending request a completed action.

Source: https://www.w3.org/WAI/tutorials/forms/notifications/

### Responsive content and motion

Test zoom, reflow, increased text spacing, long/localised strings, meaningful images,
and tables without losing actions or information. Use appropriate captions and
text alternatives for media. Honour reduced-motion preferences and provide control
or a static alternative for nonessential movement; inspect CSS and JavaScript paths,
not just one library setting. Avoid flashing and motion-dependent completion logic.

Record the pages/states, tools, actual manual tests, findings, and untested cases.
A colour calculation, linter score, or five-second expert glance is not a complete
accessibility or usability test. Sources reviewed 2026-09-13; consult the complete
current standard for a formal assessment: https://www.w3.org/TR/WCAG22/.

---

## Reference: Design audit

*(originally `references/DESIGN-AUDIT.md`)*

> Use this when the user asks to critique, review, modernise, or improve an existing website/app UI.

### What to collect
- Screens: home, key pages, key flows, states (error/empty/loading)
- Known constraints: brand, tech stack, accessibility target
- Success metrics: conversion, task completion, retention, support tickets
- Primary users: who they are and what they want to do

If you don’t have data, state assumptions.

### Audit workflow
1. **Define success**
   - What should users be able to do?
   - What does the business care about?

2. **Map 1–3 key paths**
   - Write the flows step-by-step.
   - Note every moment of uncertainty or friction.

3. **Run a “trunk test” on internal pages**
   Check whether a first-time user can tell:
   - what site this is,
   - what page this is,
   - where they are in the structure,
   - where to go next.

4. **Heuristic review (fast rubric below)**
   Capture issues as:
   - **Symptom** (what the user experiences)
   - **Cause** (why it happens)
   - **Fix** (concrete change)

5. **Systemise fixes**
   Look for repeating causes:
   - inconsistent spacing,
   - unclear clickability,
   - weak hierarchy,
   - inconsistent component styles.

6. **Propose an iteration plan**
   - quick wins (1–2 days)
   - medium changes (1–2 weeks)
   - bigger redesign (multi-week)

### Heuristic review rubric
Score each area: ✅ good / ⚠️ needs work / ❌ broken.

#### Clarity
- Can users tell what the page is for in 10 seconds?
- Is the primary action obvious?
- Are labels self-explanatory?

#### Hierarchy
- Is there a clear primary/secondary/tertiary structure?
- Does spacing communicate grouping?
- Do headings match content and boundaries?

#### Navigation and findability
- Is location clear (active states, page titles)?
- Are section labels consistent?
- Is search available where needed?

#### Interaction quality
- Do controls behave as expected?
- Is feedback immediate and non-disruptive?
- Are errors prevented where possible?

#### Visual quality
- Is typography consistent and readable?
- Is colour used with restraint and meaning?
- Is depth/border usage calm (not busy)?

#### Accessibility
- Contrast targets met?
- Keyboard usable?
- Focus visible?
- Labels and errors accessible?

### Common root causes
- No defined token system → inconsistent spacing/colours/typography.
- Too many competing CTAs → unclear priority.
- Clever labels → hesitation and misclicks.
- Weak affordances → “is this clickable?” confusion.
- Overuse of borders → busy and cluttered look.
- Missing states → broken first impressions (empty/loading/error).

### How to present results
Recommended structure:
1. **Executive summary**: 5–10 bullets
2. **Top issues by severity**
   - Critical (blocks key path)
   - Major (causes hesitation)
   - Minor (polish)
3. **Screens/flows reviewed**
4. **Recommendations**
   - system fixes (tokens/components)
   - page fixes
5. **Next iteration plan**
   - quick wins
   - medium
   - long term

---

## Reference: Page patterns

*(originally `references/PAGE-PATTERNS.md`)*

> Use this when you need concrete, reliable page structures (landing pages, pricing, dashboards, settings).

### Landing page
Goal: communicate value quickly and move users to the next step.

Recommended structure:
1. **Header**: logo, top nav (few items), primary CTA.
2. **Hero**: clear headline, supporting subhead, primary CTA, optional secondary CTA.
3. **Trust**: logos, metrics, short testimonial.
4. **Benefits**: 3–6 benefit cards (outcomes, not features).
5. **How it works**: 3-step explanation or short flow.
6. **Use cases** (optional): choose 2–4, not a long list.
7. **Social proof**: testimonials/case studies.
8. **FAQ**: reduce last-minute hesitation.
9. **Footer**: secondary nav, legal, contact.

Hierarchy rules:
- headline must be understandable without context;
- primary CTA should repeat (but don’t spam it);
- use scannable chunks; avoid long paragraphs.

Common mistakes:
- vague headline that could fit any product;
- multiple competing CTAs with equal weight;
- decorative hero imagery that doesn’t support meaning.

### Pricing page
Goal: help users choose confidently.

Recommended structure:
- short intro: who each plan is for.
- plan cards: 2–4 plans max.
- highlight recommended plan only if it truly is.
- feature comparison: high-signal features, grouped.
- FAQ: billing, cancellation, support.

Rules:
- make the recommended option the easiest choice, not a trick.
- clarify billing period and what happens on renewal.
- avoid footnotes that hide critical limitations.

### Documentation / resources
Goal: help users find answers quickly.

Recommended structure:
- search (prominent).
- categories with clear labels.
- “Getting started” path.
- popular tasks (top queries).

Rules:
- content titles must describe the question they answer.
- show last updated dates if freshness matters.

### Signup / onboarding
Goal: reduce friction and uncertainty.

Recommended structure:
- keep fields minimal.
- explain why you’re asking for each non-obvious field.
- show progress if multi-step.

Rules:
- preserve inputs on error.
- show password requirements up front.
- offer SSO/social login only if it’s reliable.

### Dashboard
Goal: help users act, not admire charts.

Recommended structure:
- page title + primary action.
- key metrics summary (3–6 max).
- recent activity / next steps.
- deeper sections below (charts, tables).

Rules:
- define an information hierarchy; don’t present everything equally.
- density is okay, but spacing must still communicate grouping.
- tables need sorting/filtering conventions and empty states.

### Settings page
Goal: safe changes with clear consequences.

Recommended structure:
- group settings by theme.
- keep destructive actions separated and clearly labelled.
- show current values.

Rules:
- avoid auto-saving unless feedback is explicit.
- confirmations only when irreversible.

### Search results
Goal: help users compare and choose quickly.

Recommended structure:
- search box persists with query.
- result count + filters.
- scannable results: title, key metadata, snippet.
- empty results guidance: suggestions, broaden filters.

Rules:
- keep filters understandable; avoid internal categories.
- show what filters are active.

---

## Reference: Usability

*(originally `references/USABILITY.md`)*

> Use this when you need to diagnose confusion, improve navigation, or make an interface feel effortless.

### Usability mindset
Users rarely read; they **skim**, then pick the first option that seems good enough.
Your job is to make the “good enough” option the right one.

Rules of thumb:
- prefer **clarity over persuasion**;
- remove uncertainty;
- don’t punish users for mistakes;
- don’t surprise users with non-standard behaviour.

### Design for scanning
Treat pages like signage.
Help users understand the page quickly by:
- using conventions,
- creating strong visual hierarchy,
- dividing pages into clear regions,
- formatting content for scanning.

#### Visual hierarchy checklist
Every key page should be legible as:
1. page name/purpose,
2. primary action,
3. primary content,
4. secondary actions,
5. supporting info.

Common fixes:
- make the primary CTA the most visually prominent interactive element;
- ensure headings describe the content underneath them;
- use consistent heading sizes and spacing rules;
- avoid placing headings so they “span” unrelated content.

#### Clear regions checklist
At a glance, a user should be able to point and say:
- “navigation”,
- “main content”,
- “things I can do”,
- “supporting info”,
- “promotions/ads (if any)”.

If the page can’t be chunked, simplify the layout and reduce competing elements.

### Make choices mindless
“Fewer clicks” is less important than “easier clicks”.
Multiple easy, confident selections beat one confusing choice.

#### Information scent
Links and buttons should describe the result of clicking.
Users should feel they are moving closer to the goal at every step.

Checklist:
- link text is descriptive, not “Click here”;
- button labels describe outcomes (“Create invoice”, not “Submit”);
- navigation labels match user language;
- the current location is visible (active states, breadcrumbs where needed).

### Navigation that users trust
Navigation should answer:
- where am I?
- what’s here?
- where can I go next?

#### Global navigation
Rules:
- keep top-level sections stable across the site;
- use familiar placement (header/top bar or left nav);
- avoid hiding primary nav behind multiple clicks on desktop.

#### Page naming
Every page needs a clear name.
It should:
- be near the top of the main content region,
- match what the user clicked,
- use plain language.

#### Search
If users can arrive with vague intent, search is not optional.
Rules:
- put search where users expect it;
- support forgiving input (typos, partial matches);
- show results that are easy to scan.

### Make clickability obvious
Users should never have to think:
- “is this clickable?”

Rules:
- interactive elements must look interactive:
  - buttons look like buttons,
  - links look like links,
  - tabs look like tabs.
- don’t make plain text look like a link.
- keep click targets comfortably large.

Common pitfalls:
- entire cards being clickable with no signifier;
- “ghost” buttons that look like secondary text;
- icons with unclear meaning.

### Reduce noise and distractions
Noise forces thinking.

Checklist:
- remove decorative elements that compete with primary content;
- avoid too many colours, weights, and border styles;
- reduce repeated CTAs;
- limit animation to meaning (status/feedback).

### Microcopy and naming
Words are UI.

Rules:
- choose “obvious” names over cute/clever names;
- use labels users already know;
- keep instructions short and close to the control;
- remove needless words.

Error copy:
- explain what happened,
- why it matters,
- what to do next.
Never scold the user.

### Quick tests
#### Glance test (10 seconds)
Show a screen for 10 seconds. Ask:
- what is this?
- who is it for?
- what can you do here?
- what is the primary action?
- where is the navigation?

If answers vary, fix hierarchy and labels.

#### “Trunk test” (first-time comprehension)
Give someone a random internal page (not the home page). Ask them to identify:
- what site is this?
- what page is this?
- what are the main sections?
- where are they in the structure?
- how can they search?

If they can’t answer quickly, fix:
- site ID/branding placement,
- page naming,
- nav structure,
- and visual hierarchy.

#### Five-minute usability test (DIY)
1. Give a realistic task (from a key path).
2. Ask the participant to narrate what they expect will happen.
3. Stay silent; observe confusion.
4. After, ask:
   - what was hardest?
   - what surprised you?
   - what did you expect instead?

You’ll learn enough from 3–5 participants to make meaningful improvements.

### Common failure patterns
- **Everything is “important”** → nothing stands out; fix hierarchy.
- **Too many words** → users skip; tighten copy and use bullets.
- **Clever labels** → users hesitate; rename.
- **Hidden primary action** → make the next step obvious.
- **Unclear grouping** → adjust spacing; add separators only if needed.
- **Weak click signifiers** → use conventional styling.

---

## Reference: Workflow

*(originally `references/WORKFLOW.md`)*

> Use this when you need an end-to-end plan, deliverables, or a repeatable way to go from vague intent → shippable design.

### Operating principles
- **Build from intent to pixels**: decisions about colour and layout are constrained by goals, content, and flows.
- **Work iteratively, not sequentially**: higher-level design can reveal missing lower-level decisions. Expect to revisit.
- **Optimise the key paths first**: a site that nails the primary journeys beats a site with 40 mediocre pages.
- **Design for scanning**: on the web, users skim and select; structure and hierarchy are the design.
- **System > screens**: design tokens + components prevent “one-off UI” and accelerate implementation.

### Phase 0: Define the problem
Output: **one-page design brief**.

Checklist:
- Who is the product/site for?
- What is the #1 outcome the user must achieve?
- What is the #1 business outcome?
- What constraints exist (tech, brand, legal, accessibility, time)?
- What is the current baseline (what works, what fails)?

Rules:
- If details are missing, write assumptions explicitly.
- Tie design decisions to outcomes (conversion, retention, comprehension, task completion).

### Phase 1: Users and goals
Pick a lightweight method based on time.

#### Option A: Persona-lite (fast)
Create 1–2 persona-lites that capture:
- goals (why they’re here),
- context (device, environment, time pressure),
- anxieties/risks (what makes them hesitate),
- capabilities (experience level, accessibility needs).

#### Option B: Job story (fastest)
Format:
- **When** [situation]
- **I want** [motivation]
- **So I can** [expected outcome]

#### Option C: Full persona + scenario (when high stakes)
Write a short narrative of an ideal experience that emphasises goals and context.

Rules:
- **Goals before tasks**: tasks are symptoms; goals drive prioritisation.
- Prefer a small “cast” with clear priority:
  - primary persona (design target),
  - secondary personas (supported, but not driving the UI).

### Phase 2: Scope and requirements
Output: **scope list + key paths**.

Steps:
1. List pages/screens and major features.
2. Do a content inventory (what copy, images, data exist?).
3. Define 1–3 **key paths**.

Key path examples:
- Landing → pricing → signup
- Search → filter → item detail → checkout
- Dashboard → create report → export/share

Rules:
- If everything is a priority, nothing is. Pick the journeys that matter.
- Delay “nice to have” features until the key paths are frictionless.

### Phase 3: Information architecture and navigation
Output: **IA diagram + navigation model + labels**.

Checklist:
- Global nav: top-level sections (5–7 is usually enough).
- Local nav: within a section, how do users move laterally?
- Search: if discovery matters, define where search lives and how results work.
- Page naming: every page needs a clear name that matches the user’s mental model.

Rules:
- Labels must be obvious. Avoid internal jargon and clever marketing names.
- Prefer recognition over recall: show choices; don’t force memory.
- Keep navigation consistent across pages.

### Phase 4: Interaction model
Output: **flows + interaction rules + state model**.

Steps:
1. For each key path, write the step-by-step flow.
2. Define interaction patterns:
   - forms,
   - filtering/sorting,
   - selection,
   - editing,
   - confirmations/destructive actions.
3. Define states for each key screen:
   - loading,
   - empty,
   - error,
   - success,
   - partial data,
   - permissions.

Rules:
- Prefer preventing errors (smart defaults, constraints) over showing errors.
- Prefer modeless feedback (inline status, previews) over disruptive dialogs.

### Phase 5: Skeleton (wireframes and layout)
Output: **wireframes + component inventory**.

Steps:
1. Start with a real feature/content block (not a nav bar).
2. Place information in priority order.
3. Establish page regions:
   - site ID,
   - navigation,
   - primary content,
   - secondary content,
   - calls to action.
4. Define responsive layout constraints:
   - max content width,
   - breakpoints,
   - column strategy.

Rules:
- A page should be parsable at a glance into clearly defined areas.
- Make click targets and interactive affordances obvious.

### Phase 6: Surface (visual system and comps)
Output: **tokens + component library + page comps**.

Steps:
1. Create tokens:
   - spacing/sizing,
   - type scale,
   - colours (with shades),
   - radius,
   - elevation.
2. Define components and variants.
3. Apply to key pages first.

Rules:
- Constrain choices. Systems beat arbitrary numbers.
- Use spacing to clarify grouping.
- Use colour sparingly for meaning (actions and status), not decoration.

### Phase 7: Validate and iterate
Output: **issues + fixes + updated design**.

Use quick, repeatable tests:
- **Glance test**: in 10 seconds, can someone tell what it is and what to do?
- **Key-path walkthrough**: can a first-time user complete the journey?
- **Edge case sweep**: long text, missing data, errors, empty.
- **Accessibility sweep**: contrast, focus, keyboard, semantics.

Iteration rule:
- Make the smallest set of changes that remove the largest confusion.

### Phase 8: Handoff
Output: **build-ready package**.

Include:
- tokens (CSS variables or JSON),
- component specs (including states),
- responsive rules,
- accessibility notes,
- content rules (copy lengths, truncation),
- and acceptance criteria for key paths.

### Templates

#### Template: Design brief (one page)
- **Product/site:**
- **Primary user:**
- **Primary user goal:**
- **Business goal:**
- **Success metrics:**
- **Constraints:**
- **Key pages:**
- **Key paths:**
- **Brand traits (3–5 adjectives):**
- **Risks/unknowns:**

#### Template: Key path flow
- **Goal:**
- **Entry points:**
- **Steps:**
  1.
  2.
  3.
- **Decisions/branches:**
- **Failure states:**
- **Success confirmation:**

#### Template: Component inventory
For each component:
- name,
- purpose,
- variants,
- states,
- dependencies (tokens, subcomponents).

#### Template: State model (per page)
- Loading:
- Empty:
- Error:
- Success:
- Partial data:
- Permissions:

---

## Reference: Checklists

*(originally `references/CHECKLISTS.md`)*

> Use this for fast QA and consistent outputs.

### Design brief checklist
- [ ] Primary user(s) defined
- [ ] Primary user goal and business goal stated
- [ ] Success metrics listed
- [ ] Constraints (tech, time, brand, legal, accessibility) captured
- [ ] Key pages listed
- [ ] Key paths listed
- [ ] Assumptions clearly marked

### IA and navigation checklist
- [ ] Top-level nav is short and stable
- [ ] Labels are obvious and consistent
- [ ] Current location is visible (active state / breadcrumbs)
- [ ] Every page has a clear title that matches nav labels
- [ ] Search exists where discovery matters

### Wireframe checklist
- [ ] Page has a single primary action (or an explicit reason it doesn’t)
- [ ] Regions are clear (nav, main, secondary)
- [ ] Key path steps are unambiguous
- [ ] Clickable elements are clearly signified
- [ ] Spacing communicates grouping (inside < between)

### Visual system checklist
- [ ] Spacing scale defined and used
- [ ] Type scale defined and used
- [ ] Colour palette defined (neutrals, primary, semantic accents)
- [ ] Contrast targets met
- [ ] Radius and elevation systems defined
- [ ] Borders used sparingly

### Interaction and forms checklist
- [ ] Inputs have labels
- [ ] Inline validation behaviour defined
- [ ] Errors are actionable, not blaming
- [ ] Destructive actions are reversible or confirmed
- [ ] Feedback is modeless when possible

### Accessibility checklist
- [ ] Keyboard navigation works and focus is visible
- [ ] Contrast targets met
- [ ] Not colour-only communication
- [ ] Semantic elements used appropriately
- [ ] Forms announce errors appropriately

### Content checklist
- [ ] Headings describe the section
- [ ] Copy is scannable (bullets, short paragraphs)
- [ ] Button labels describe outcomes
- [ ] Jargon and clever labels removed
- [ ] Empty states explain and guide

### Responsive checklist
- [ ] Mobile-first layout is viable
- [ ] Primary action remains prominent at all sizes
- [ ] Text doesn’t become too wide to read
- [ ] Tables/toolbars have responsive strategies
- [ ] Touch targets are comfortable

### Pre-launch QA checklist
- [ ] Key paths tested end-to-end
- [ ] Loading/empty/error states handled
- [ ] Long text and localisation expansion tested
- [ ] Images have safe fallbacks
- [ ] Performance basics: avoid heavy assets above the fold
- [ ] Cross-browser smoke test

### Component state matrix template
For each component:
- Variants:
- States:
  - Default
  - Hover
  - Focus
  - Active
  - Disabled
  - Loading
  - Error
  - Success
  - Empty (if relevant)
- Keyboard behaviour:
- Screen reader notes:

---

## Appendix: `scripts/contrast_check.py`

The accessibility reference above invokes `$SKILL_DIR/scripts/contrast_check.py`.
That file is **not** part of this document. If the installed skill directory is
present, use it as written:

```bash
python ~/.agents/skills/designing-beautiful-websites/scripts/contrast_check.py '#0f172a' '#ffffff'
```

If it is absent, recreate it from the verbatim source below, then invoke it the
same way. Requires Python 3.9+. Exit 0 = passes the normal-text threshold,
1 = does not, 2 = usage/input error. Opaque sRGB `#RGB`/`#RRGGBB` pairs only.

```python
#!/usr/bin/env python3
"""WCAG contrast ratio checker.

Usage:
  python scripts/contrast_check.py "#0f172a" "#ffffff"

Outputs the contrast ratio and whether it passes WCAG AA for:
- normal text (>= 4.5:1)
- large text (>= 3:1)

Exit codes:
- 0 if passes normal text threshold
- 1 otherwise
"""

from __future__ import annotations

import re
import sys
from dataclasses import dataclass


@dataclass(frozen=True)
class RGB:
    r: float  # 0..1
    g: float  # 0..1
    b: float  # 0..1


HEX_RE = re.compile(r"^#?(?P<h>[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$")


def parse_hex_colour(s: str) -> RGB:
    m = HEX_RE.match(s.strip())
    if not m:
        raise ValueError(f"Invalid hex colour: {s!r}. Expected #RGB or #RRGGBB.")
    h = m.group("h")
    if len(h) == 3:
        h = "".join(ch * 2 for ch in h)
    r = int(h[0:2], 16) / 255.0
    g = int(h[2:4], 16) / 255.0
    b = int(h[4:6], 16) / 255.0
    return RGB(r, g, b)


def srgb_to_linear(c: float) -> float:
    # WCAG uses the sRGB companding function.
    if c <= 0.04045:
        return c / 12.92
    return ((c + 0.055) / 1.055) ** 2.4


def relative_luminance(rgb: RGB) -> float:
    r_lin = srgb_to_linear(rgb.r)
    g_lin = srgb_to_linear(rgb.g)
    b_lin = srgb_to_linear(rgb.b)
    # ITU-R BT.709
    return 0.2126 * r_lin + 0.7152 * g_lin + 0.0722 * b_lin


def contrast_ratio(c1: RGB, c2: RGB) -> float:
    l1 = relative_luminance(c1)
    l2 = relative_luminance(c2)
    lighter = max(l1, l2)
    darker = min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)


def main(argv: list[str]) -> int:
    if len(argv) != 3:
        print(__doc__.strip())
        return 2

    fg_s, bg_s = argv[1], argv[2]
    try:
        fg = parse_hex_colour(fg_s)
        bg = parse_hex_colour(bg_s)
    except ValueError as e:
        print(f"Error: {e}")
        return 2

    ratio = contrast_ratio(fg, bg)

    normal_ok = ratio >= 4.5
    large_ok = ratio >= 3.0

    print(f"Foreground: {fg_s}  Background: {bg_s}")
    print(f"Contrast ratio: {ratio:.2f}:1")
    print(f"Normal text (>= 4.5): {'PASS' if normal_ok else 'FAIL'}")
    print(f"Large text  (>= 3.0): {'PASS' if large_ok else 'FAIL'}")

    return 0 if normal_ok else 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
```

---

## Provenance and deltas

Flattened from `designing-beautiful-websites` v2.0.0 by Tristan Manchester
(`npx skills add https://github.com/tristanmanchester/agent-skills --skill designing-beautiful-websites`),
installed at `~/.agents/skills/designing-beautiful-websites`.

Every instruction from `SKILL.md` and all eleven reference files is present verbatim.
Exactly three mechanical changes were made, none of which alter guidance:

1. Cross-file links (`references/VISUAL-DESIGN.md`) became in-document anchors.
2. Each reference's own `# Title` line and `## Table of contents` block were dropped,
   replaced by one master contents list at the top; their remaining headings were
   demoted one level so the document nests correctly.
3. `scripts/contrast_check.py` is reproduced verbatim in the appendix rather than
   executed from disk.
