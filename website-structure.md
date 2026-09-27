---
name: website-structure
description: When the user wants to plan website structure, decide which pages to build, or prioritize pages for a new or existing site. Also use when the user mentions "website structure," "site structure," "which pages do I need," "page planning," "sitemap planning," "Must Have pages," "website architecture," or "site hierarchy." For a specific page template (e.g. homepage), use homepage-generator or landing-page-generator as appropriate. Not for organic SEO roadmap alone; use seo-strategy.
metadata:
  version: 1.5.0
---

> ## How to use this file
>
> This is a self-contained copy of the `website-structure` skill. Two ways to run it:
>
> **Pasted into a conversation** — say "follow this skill". Everything needed is in
> this document; nothing is loaded from disk.
>
> **Installed** — save as `~/.claude/skills/website-structure/SKILL.md`.
>
> **On the cross-references below:** this skill is one part of a larger SEO pack, and it
> names roughly seventeen sibling skills (`homepage-generator`, `url-structure`,
> `serp-features`, and so on) plus a shared `skills-reference` document. **None of those
> are bundled here, and none are installed.** Treat every such name as a pointer to a
> *topic worth addressing*, not to a document you can open. Do not claim to have consulted
> one, and do not reconstruct its contents from the name. If a task genuinely needs it,
> say which one is missing and proceed with what this file provides.
>
> Same applies to `contextus.md` in Initial Assessment: read it only if the project
> actually has one. If not, work from what the user supplies and ask for the gaps.

# Strategy: Website Structure

Guides website structure planning: which pages to build, page priority, and how structure supports UX, SEO, and growth. Structure is the organization and connection of pages; it affects user navigation, Google's understanding of content importance, crawlability, and sitelinks in SERPs. See **serp-features** for sitelinks and SERP optimization.

**When invoking**: On **first use**, if helpful, open with 1–2 sentences on what this skill covers and why it matters, then provide the main output. On **subsequent use** or when the user asks to skip, go directly to the main output.

## Initial Assessment

**Project context:** Read root `contextus.md` when present and load only the modules relevant to this task. Without Contextus, use available project material or user-provided facts and ask for missing information; do not create a parallel context system.

Identify:
1. **Website type**: Product/SaaS, B2B, E-commerce, Portfolio, Forum, Directory
2. **Stage**: New site (plan from scratch) vs. existing (extend or audit)
3. **Growth strategy**: Affiliate, education, multi-language, community, B2B, developer
4. **Constraints**: Team size, budget, tech stack

## Page Priority Framework

Plan pages by priority for development scheduling. See **skills-reference §2 Page Taxonomy** *(not bundled — see Referenced resources)* for full page types and website-type mapping.

| Priority | Pages | Notes |
|----------|-------|-------|
| **Must Have** | Home, Product/Features, Pricing, Blog, About, Privacy, Terms, Contact | Essential for trust and conversion; Pricing: public page in nav for self-serve; enterprise-only may use "Contact sales" instead; see **pricing-page-generator** (Visibility & Placement) |
| **Great to Have** | Testimonials, FAQ, Sitemap (HTML), 404, Refund/Returns | Support UX and SEO |
| **Optional** | Search Results, News, Careers, Disclosure | Situational |
| **Traffic-driven** | Category/Collection pages | For content-heavy or e-commerce; needs Category + Tags |

## Generic Template Structure

Applicable to SaaS, tools, and content sites. Adapt by removing unused nodes (e.g. no API → drop API) and adding specific modules (e.g. industry, region).

| Section | Typical Paths | Page Skills |
|---------|---------------|-------------|
| **Root** | /, /features, /pricing, /demo, /contact | homepage-generator, features-page-generator, pricing-page-generator |
| **Tools** | /tools, /free-tools; hub + per-tool pages | tools-page-generator; free tools for lead gen; often SPA; programmatic; see **programmatic-seo** |
| **Resources** | /blog, /changelog, /glossary, /faq, /tutorials | blog-page-generator, changelog-page-generator, glossary-page-generator, faq-page-generator |
| **Partnership** | /affiliate, /startups, /ambassadors | affiliate-page-generator, landing-page-generator |
| **Legal** | /terms, /privacy, /careers | terms-page-generator, privacy-page-generator, careers-page-generator |
| **Competitor** | /alternatives, /compare, /migrate | alternatives-page-generator, migration-page-generator |
| **Standalone** | /dashboard, /login, /signup, /docs, /api, /status, /support | signup-login-page-generator, docs-page-generator, api-page-generator, status-page-generator |

## Growth Strategy → Structure Mapping

Structure reflects growth strategy. Subdirectories signal channels:

| Goal | Path Example | Page/Channel |
|------|--------------|--------------|
| Affiliate conversion | /affiliate | affiliate-page-generator |
| Education/student plan | /education, /startups, /student-discount | education-program, startups-page-generator |
| Multi-language | /zh-CN, /ja | localization-strategy |
| Community | /ambassadors, /showcase | creator-program, landing-page-generator |
| B2B / Enterprise | Solutions (industry-first), Use cases (scenario-first; can be sub-pages), Customer stories | solutions-page-generator, use-cases-page-generator, customer-stories-page-generator |
| Developer product | /api, /docs, /status | api-page-generator, docs-page-generator, status-page-generator |
| User feedback | Feedback, Roadmap | feedback-page-generator; External (Canny, FeatureBase) |
| Plugins/Integrations | /integrations, /plugins | integrations-page-generator, category-page-generator |
| Giveaway/Contest | /giveaway | contest-page-generator |

## Domain Structure (Multiple Products)

When planning for multiple products or brands, see **domain-architecture** for subfolder vs subdomain vs independent domain. This skill covers page structure within a single domain. For initial domain choice (Brand vs PMD vs EMD, TLD), see **domain-selection**.

## Planning Workflow

1. **Choose template**: Start from generic structure; map to **skills-reference §2** *(not bundled)* website types
2. **Trim modules**: Remove irrelevant nodes (e.g. no API → drop /api, /docs)
3. **Add specifics**: Industry pages, region, product variants
4. **Assign URLs**: Per node; follow **url-structure** (lowercase, hyphens, short, keyword-rich)
5. **Export list**: "Page type + URL + Priority" for dev scheduling
6. **Tech stack**: Match page types to services (DNS, auth, CMS, status page, etc.)
7. **Iterate**: Expand with new features, markets; keep structure clear

## Structure Principles

| Principle | Guideline |
|-----------|-----------|
| **Flat structure** | Max 4 clicks from homepage to any page; improves crawlability and weight distribution |
| **Early planning** | Plan structure before growth; can start right after domain purchase |
| **Sitelinks** | Good structure + TOC + authoritative internal links → natural sitelinks in SERP (cannot be forced via schema); see **serp-features** |
| **Orphan prevention** | Every page needs internal links; see **site-crawlability** and **internal-links** |
| **Features vs Use cases** | /features = capability-first; /use-cases = scenario-first; differentiate content angle, link between, avoid overlap; see **features-page-generator**, **use-cases-page-generator** |
| **Clear navigation** | Clear hierarchy and nav improve task completion; users find what they need faster; see **navigation-menu-generator** |
| **Pricing placement** | Marketing site: /pricing in main nav for prospects; in-app: Settings → Billing in sidebar for logged-in users (subscription management). Enterprise-only: "Contact sales" may replace public pricing page; see **pricing-page-generator** |

## Homepage Module Reference

See **homepage-generator** for common modules (Headline, Subheadline, CTA, Benefits, Social Proof, etc.), navigation options, and **hero-generator** for hero design.

## Output Format

- **Page list** with priority (Must Have / Great to Have / Optional)
- **URL structure** (paths per section)
- **Website-type fit** (which pages apply per **skills-reference §2** *(not bundled)*)
- **Growth mapping** (which paths support which channels)
- **Next steps**: url-structure for URL rules; xml-sitemap for submission; site-crawlability for audit

## References

- [Website structure SEO guide](https://alignify.co/zh/seo/website-structure) — Alignify: structure importance, page priority, generic template, planning workflow, growth mapping, homepage modules
- **skills-reference §2** *(not bundled — file absent from this machine)* — Full page types, website-type matrix, core vs extended; use for page selection

## Related Skills

- **seo-strategy**: SEO workflow order; structure planning fits before Technical phase
- **domain-selection**: Initial domain choice; do before structure when choosing domain
- **domain-architecture**: Subfolder vs subdomain vs independent; do before structure if domain decision pending
- **url-structure**: URL optimization, hierarchy, slugs; apply after structure is defined
- **site-crawlability**: Crawlability, orphan pages, redirects; audit existing structure
- **internal-links**: Link strategy, hub-spoke; implement after pages exist
- **xml-sitemap**: Sitemap creation; include planned URLs
- **breadcrumb-generator**: Breadcrumb for hierarchy; large sites, e-commerce
- **navigation-menu-generator**: Nav design; primary, footer, mobile
- **content-strategy**: Content clusters, pillar pages; complements structure planning

---

## Referenced resources — availability

Checked against this machine when this file was built.

| Referenced | Status |
|---|---|
| `docs/skills-reference.md` §2 Page Taxonomy | **Absent.** Cited 4× as the source for full page types and the website-type matrix. Not present anywhere on this machine. The Page Priority Framework and Generic Template Structure tables above are what this file actually provides; do not invent the rest of the taxonomy. |
| 17 sibling page/SEO skills | **Not installed.** homepage-generator, hero-generator, features-page-generator, pricing-page-generator, blog-page-generator, changelog-page-generator, glossary-page-generator, faq-page-generator, tools-page-generator, affiliate-page-generator, landing-page-generator, terms-page-generator, privacy-page-generator, careers-page-generator, alternatives-page-generator, migration-page-generator, signup-login-page-generator, docs-page-generator, api-page-generator, status-page-generator, solutions-page-generator, use-cases-page-generator, customer-stories-page-generator, category-page-generator, integrations-page-generator, contest-page-generator, feedback-page-generator, navigation-menu-generator, breadcrumb-generator, education-program, creator-program, localization-strategy — and the strategy skills seo-strategy, domain-selection, domain-architecture, url-structure, site-crawlability, internal-links, xml-sitemap, serp-features, content-strategy. |
| `contextus.md` | **Absent** from this machine. Conditional in the original (`when present`), so this is not a defect. |
| External source | [Website structure SEO guide](https://alignify.co/zh/seo/website-structure) — Alignify. Live URL, unchanged. |

## Provenance and deltas

Copied from `website-structure` v1.5.0 at `~/.agents/skills/website-structure/SKILL.md`.
All 119 lines of instruction are present verbatim, frontmatter byte-for-byte. The skill
shipped as a single file with no references directory and no scripts, so nothing was merged.

Two additions and one edit, none of which change guidance:

1. Added the "How to use this file" preamble above.
2. Added this availability table and provenance note.
3. Four markdown links pointing at `../../../docs/skills-reference.md` — a relative path
   resolving to a file that does not exist — were converted to plain text marked
   *not bundled*. The citation is preserved; only the dead path is gone.
